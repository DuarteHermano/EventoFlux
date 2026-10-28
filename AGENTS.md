# EventoFlux contributor guidance

Read `PRODUCT.md` for scope, `docs/architecture.md` for implemented boundaries, `docs/setup.md` for local setup and `docs/quality.md` for checks. The design specification and foundation plan live under `docs/superpowers/`.

Keep this implementation independent. Use only newly created code, assets and fictional data; do not introduce proprietary names, records, credentials or company-specific formulas. Preserve existing changes and implement the smallest complete requested slice. Do not describe planned features as working.

Use the package manager version declared in `package.json`. Run the relevant checks (`pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`) before claiming a change is ready. Keep environment values out of Git; `.env.example` is documentation, not a place for real keys. Changes to behavior or commands should update the responsible document.

Accessibility and server-side authorization remain requirements as the product grows. A client-side role label or hidden control is not an authorization boundary. Publishing, deploying, sending email, changing external services or handling real data requires separate authorization.
