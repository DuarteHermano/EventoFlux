# Quality checks

Run these from the repository root after `pnpm install --frozen-lockfile`:

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

CI runs the same four gates on pushes and pull requests. Lint covers configured static rules; typecheck checks TypeScript; Vitest checks the shell's rendered behavior; build checks production bundling. None of these prove a backend, database authorization, stock concurrency, real email or a deployed user flow—those components do not exist in the foundation.

For interface changes, additionally inspect keyboard navigation, visible focus, narrow-width layout (including 320 px) and setup feedback in a real browser. Record any browser check that could not be performed. For every PR, review the diff for accidental credentials, proprietary identifiers and generated data, and run `git diff --check`. Later slices must add focused boundary tests and real local-backend end-to-end checks before their own acceptance claims.

CI configuration is a committed contract, not evidence that GitHub has run it. A green local command does not replace a successful PR check.
