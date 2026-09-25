# Main branch protection

These are required live repository settings, not effects of committing YAML.
They have not been verified or applied from this workspace.

The repository includes a repeatable admin helper. Run `npm run github:check` with
no token for a read-only status report. After authenticating a repository
administrator token with administration, actions, and pages write permissions, run
`npm run github:apply`. The helper applies the exact protection and staging policy
below and never prints token values. It does not create a GitHub App or invent a
senior reviewer; those remain explicit administrator decisions.

A repository administrator must:

1. Verify `@odu-523` has write access, assign a senior/platform reviewer, and confirm
   each new app/package has a responsible owner. Resolve [issue #2](https://github.com/sid0709/OpenSeat/issues/2).
2. Protect `main`: require PRs, code-owner review, dismiss stale approvals, require
   approval after the latest push, resolve all conversations, and require linear
   history. Block force pushes and deletion; apply protection to administrators
   and do not grant routine bypasses. Enable squash merges only.
3. Require these exact CI checks: `Lint`, `Format`, `Typecheck`, `Unit Tests`,
   `Build`, `E2E`, and `PR Policy`. Require the branch to be up to date.
4. Require two independent approvals repository-wide until path-specific senior
   reviewer rules are configured. The intended steady state is one owner approval
   for product work and two for `infra/`, `.github/`, `tools/`, shared dependencies,
   and governance, including a designated senior. Never invent teams to satisfy this.
5. Permit Actions to create PRs and configure the release GitHub App described in
   [releasing](RELEASING.md). The app needs contents and pull-request write access.
6. In Settings → Pages, choose **GitHub Actions** as the build source. Create a
   protected `staging` environment, restrict deployment branches to `main`, and set
   its URL to `https://sid0709.github.io/OpenSeat/`. The workflow deploys the exact
   CI-verified SHA. This completes the repository-side staging isolation tracked by
   [issue #5](https://github.com/sid0709/OpenSeat/issues/5).

Use [GitHub's protection guide](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)
and [required reviewer rules](https://github.blog/changelog/2026-02-17-required-reviewer-rule-is-now-generally-available/)
where supported. CODEOWNERS requests review; it alone does not block a merge.
Verify with a disposable PR: a failed check, missing approval, or direct push must
be rejected before calling the baseline operational.
