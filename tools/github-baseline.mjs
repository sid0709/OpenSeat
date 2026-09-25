const repository = process.env.GITHUB_REPOSITORY ?? "sid0709/OpenSeat";
const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;
const apiRoot = `https://api.github.com/repos/${repository}`;
const apiVersion = "2022-11-28";

const requiredChecks = ["Lint", "Format", "Typecheck", "Unit Tests", "Build", "E2E", "PR Policy"];

async function github(path, options = {}) {
  const response = await fetch(`${apiRoot}${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": apiVersion,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  const body = response.status === 204 ? null : await response.json();
  if (!response.ok) {
    const detail = body?.message ? `: ${body.message}` : "";
    throw new Error(`${options.method ?? "GET"} ${path} returned ${response.status}${detail}`);
  }
  return body;
}

async function read(path) {
  try {
    return { ok: true, value: await github(path) };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}

function mapStatus(result, transform) {
  return result.ok ? transform(result.value) : result;
}

function hasRequiredChecks(checks) {
  return requiredChecks.every((checkName) => checks.includes(checkName));
}

function summarizeRequiredStatus(value) {
  const checks = value.required_status_checks?.contexts ?? [];
  return {
    requiredChecks: checks,
    checksComplete: hasRequiredChecks(checks),
  };
}

function summarizeReviewRequirements(value) {
  const reviews = value.required_pull_request_reviews;
  return {
    requiredApprovals: reviews?.required_approving_review_count ?? 0,
    codeOwnerReview: Boolean(reviews?.require_code_owner_reviews),
  };
}

function summarizeBranchProtection(value) {
  return {
    linearHistory: value.required_linear_history?.enabled ?? false,
    enforceAdmins: value.enforce_admins?.enabled ?? false,
    conversationResolution: value.required_conversation_resolution?.enabled ?? false,
    forcePushes: value.allow_force_pushes?.enabled ?? false,
    deletions: value.allow_deletions?.enabled ?? false,
  };
}

function summarizeProtection(value) {
  return {
    ...summarizeRequiredStatus(value),
    ...summarizeReviewRequirements(value),
    ...summarizeBranchProtection(value),
  };
}

function summarizePages(value) {
  return { buildType: value.build_type, url: value.html_url, https: value.https_enforced };
}

function summarizeEnvironment(value) {
  return {
    deploymentBranchPolicy: value.deployment_branch_policy,
    reviewersConfigured: value.protection_rules?.some((rule) => rule.type === "required_reviewers"),
  };
}

function summarizeRepository(value) {
  return { fullName: value.full_name, owner: value.owner.login };
}

function summarizeRelease(variable, secrets) {
  return {
    appIdVariable: variable.ok,
    privateKeySecretListed: secrets.ok
      ? (secrets.value.secrets?.some((secret) => secret.name === "RELEASE_APP_PRIVATE_KEY") ??
        false)
      : secrets,
  };
}

async function check() {
  const [repo, protection, pages, environment, variable, secrets] = await Promise.all([
    read(""),
    read("/branches/main/protection"),
    read("/pages"),
    read("/environments/staging"),
    read("/actions/variables/RELEASE_APP_ID"),
    read("/actions/secrets"),
  ]);

  console.log(
    JSON.stringify(
      {
        repository: mapStatus(repo, summarizeRepository),
        mainProtection: mapStatus(protection, summarizeProtection),
        pages: mapStatus(pages, summarizePages),
        staging: mapStatus(environment, summarizeEnvironment),
        release: summarizeRelease(variable, secrets),
      },
      null,
      2,
    ),
  );
}

async function apply() {
  if (!token) {
    throw new Error(
      "Set GITHUB_TOKEN or GH_TOKEN with repository administration permission before apply.",
    );
  }

  await github("/branches/main/protection", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      required_status_checks: { strict: true, contexts: requiredChecks },
      enforce_admins: true,
      required_pull_request_reviews: {
        dismiss_stale_reviews: true,
        require_code_owner_reviews: true,
        required_approving_review_count: 2,
        require_last_push_approval: true,
      },
      restrictions: null,
      required_linear_history: true,
      allow_force_pushes: false,
      allow_deletions: false,
      required_conversation_resolution: true,
    }),
  });

  await github("/environments/staging", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      wait_timer: 0,
      prevent_self_review: false,
      deployment_branch_policy: { protected_branches: false, custom_branch_policies: true },
    }),
  });

  const policies = await github("/environments/staging/deployment-branch-policies");
  if (!policies.some((policy) => policy.name === "main" && policy.type === "branch")) {
    await github("/environments/staging/deployment-branch-policies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "main", type: "branch" }),
    });
  }

  try {
    await github("/pages", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ build_type: "workflow" }),
    });
  } catch (error) {
    if (!(error instanceof Error) || !error.message.includes(" returned 404")) throw error;
    await github("/pages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ build_type: "workflow" }),
    });
  }

  console.log(
    "Applied main protection, staging environment policy, and GitHub Pages workflow mode.",
  );
  console.log(
    "Release App credentials remain intentionally manual: GitHub will not return secret values.",
  );
}

const mode = process.argv[2] ?? "check";
if (mode === "check") await check();
else if (mode === "apply") await apply();
else throw new Error(`Unknown mode ${mode}; use check or apply.`);
