# Local setup

## Foundation prerequisites

Install Node.js 24 and the pnpm version declared by `package.json` (Corepack may provide that version). From the repository root:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Use the local URL printed by Vite. No Docker container, Supabase account, mailbox or credentials are required to view the foundation shell. Stop the dev server with Ctrl+C.

## Environment contract

`.env.example` documents `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` for a **future local** Supabase integration. They have no effect on backend behavior in this phase; setting them cannot enable authentication or stock workflows. The anon key is public client configuration, not a privileged service key. Never put real secrets in `VITE_` variables or commit a populated `.env` file. The shell should still render a clear setup state when these values are absent.

## Current limitations

This is a local frontend demonstration, not a deployed service. Operational data, accounts, migrations, seeds, PDF/CSV output and captured email are not present. Docker-based Supabase setup and end-to-end manager/operator instructions belong to later slices, after those components exist.

For verification commands and what they prove, see [quality](quality.md). Update this page when the runtime or setup contract changes; do not substitute a planned command for one that has been run.
