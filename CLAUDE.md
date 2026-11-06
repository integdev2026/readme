# Rules for this repository

## Deploying the website (site/)
- The live site is released **only** by the "Deploy to Wix Headless" workflow, when a pull request is merged into `main`.
- Never upload or release to Wix by hand (no `wix release`, no Wix MCP `UploadHeadlessWebsiteFiles`, no manual zip uploads).
- Always start work from the latest `main`: `git fetch origin main && git checkout -B <branch> origin/main`. Rebase onto `origin/main` again before opening a pull request.
- Do not change the workflow's `environment: production`, the main-only trigger, or the "latest main" check.
- The `WIX_API_KEY` secret exists only in the GitHub `production` environment, limited to `main`.
- Every page carries `<meta name="build-sha">` (the commit it was built from). The "Keep live site on latest main" workflow compares it with `main` after each deploy and every 6 hours, and redeploys `main` if they differ.
- Old branches are kept as `archive/<branch>` tags before deletion; restore with `git push origin archive/<name>:refs/heads/<name>`.
