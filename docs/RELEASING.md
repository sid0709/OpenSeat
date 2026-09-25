# Release process

Use Semantic Versioning: patch for compatible fixes, minor for compatible features,
major for breaking contracts. Changesets records package-specific release notes.
For pre-1.0 packages, still explain breaking changes and migration steps explicitly.

1. Run `npm run changeset` on the feature branch, select affected packages and bump
   types, and write user-facing notes. Commit the generated Markdown file.
2. Merge the reviewed PR after all required CI checks pass.
3. The release workflow opens/updates a version PR. Review versions, dependency
   updates, changelogs, and the regenerated root lockfile. It goes through normal CI.
4. Merge that PR. Private applications are versioned but never published to npm.
   Deploy the reviewed version through its environment-specific pipeline.
5. When a public library is introduced, maintainers must configure registry access,
   provenance/trusted publishing, and environment approval before adding a publish job.

The workflow uses a maintainer-provisioned GitHub App token (`RELEASE_APP_ID` and
`RELEASE_APP_PRIVATE_KEY`) so version PRs trigger required CI. Until those credentials
exist, maintainers can run `npm run version-packages` on `chore/version-packages`,
review the diff, and open a PR manually. No direct main commits or automatic merges.

For rollback, redeploy the last verified artifact/version in the same environment.
Revert a faulty change through a reviewed PR and create a patch changeset. Never
rewrite published versions. Record compatibility and data migrations before rollout.

Staging isolation and provider setup are tracked in
[issue #5](https://github.com/sid0709/OpenSeat/issues/5); see [staging](STAGING.md).
