# EventoFlux

EventoFlux is an independent, fictional portfolio application for planning materials and reconciling stock across temporary event posts. This first delivery is a responsive React application shell: it introduces the product, shows manager and operator entry points, and explains local setup. Those entry points do not yet authenticate or open operational workflows.

## Run the foundation

Prerequisites: Node.js 24 and pnpm (use the version declared in `package.json`). Docker is **not** needed for this phase.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Vite. The shell runs without a database or credentials. See [local setup](docs/setup.md) for environment details and [quality checks](docs/quality.md) for verification commands.

## What is available

- A branded, responsive shell with fictional-demo labelling and manager/operator entry points.
- A local setup state when backend variables are absent.
- Automated lint, typecheck, test and build checks.

There is no functional authentication, stock ledger, event management, report generation, email delivery or Supabase connection in this phase. [Product scope](PRODUCT.md) describes the intended later releases; [architecture](docs/architecture.md) distinguishes planned boundaries from implemented code.

No real business data or credentials belong in this repository. This public source is not a hosted demo and does not include an open-source licence yet.
