# EventoFlux product scope

## Problem and audience

Temporary event posts need a clear way to plan materials, count what was used and reconcile stock afterwards. EventoFlux is a fictional demonstration of that workflow for reviewers, managers and post operators. It is not connected to a real business.

Managers will eventually plan events, stock and costs. Operators will eventually access only an assigned post with a temporary PIN and enter opening and closing counts on a phone. These roles are product goals, not working accounts in the foundation.

## First delivery: foundation

The first PR delivers a standalone React/TypeScript/Vite shell, a new visual identity, accessible navigation and feedback, a local setup state, documentation and CI. A reviewer can install, run and inspect it without a backend or secrets. Manager/operator entry points are illustrative; they do not grant access to data or start a workflow.

## Intended product flows

Later, independently reviewable slices are expected to add:

1. Manager accounts, MFA, server-enforced roles and session expiry.
2. Materials, units, kits, post templates and generic planning formulas.
3. Events, post preparation and stock reservations.
4. Isolated operator sessions, initial/final counts and reconciliation.
5. A single-warehouse stock ledger with transactional invariants.
6. Staffing, expenses, purchasing, manual revenue and financial close.
7. Tickets, search, guidance, PDF/CSV reports and locally captured email.

These flows are design targets, not claims of implemented behavior. See the [design specification](docs/superpowers/specs/2026-10-28-eventoflux-design.md) for the full acceptance contract.

## Boundaries and decisions

- The default experience is local and uses only invented demo content. No public signup, payments, ERP integration, production service or real email delivery is planned for this version.
- A later phase may introduce a separate local Supabase stack through Docker. This foundation neither starts nor calls it.
- The interface should work at narrow mobile widths, by keyboard, and with visible focus and understandable form feedback.
- A public repository does not itself provide a live online demo or grant reuse rights; hosting and licensing are separate decisions.

## Foundation acceptance

A fresh clone can install with the committed pnpm lockfile, launch the shell without credentials, and pass lint, typecheck, tests and build. The shell identifies itself as fictional and does not present planned operations as usable. Subsequent feature PRs require their own real backend, authorization and flow tests before those features can be called complete.
