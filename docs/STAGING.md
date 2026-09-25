# Staging isolation

The repository now uses GitHub Pages as the isolated staging provider. It deploys
the static Next.js export from the exact commit that passed CI. This does not share
Athens AI resources, credentials, databases, or production deployment state.

The staging workflow accepts only successful main CI runs and uses a dedicated
`staging` environment and concurrency group. It checks out the exact verified SHA,
builds with `PAGES_BUILD=true` and `output: "export"`, and deploys `apps/web/out` through the Pages deploy
action. The Pages project URL is `https://sid0709.github.io/OpenSeat/` after Pages
is enabled for this repository.

To activate the external setting, a repository administrator must set Pages to
“GitHub Actions”, create the `staging` environment, restrict it to `main`, and add
the staging URL to its environment URL. Verify the deployed smoke test and rollback
before closing #5. Never reuse Athens AI core resources, production credentials,
production databases, or the production deployment workflow.
