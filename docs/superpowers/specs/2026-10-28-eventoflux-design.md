# EventoFlux — product design

## Intent

Build an independent, public portfolio application for planning and reconciling materials across temporary event posts. It demonstrates a complete operational flow without using client source code, assets, identifiers, business records, credentials, Git history, or company-specific formulas. The original repository is not modified.

## Audience and outcome

- A reviewer can understand the problem, architecture, trade-offs and verified behavior from the repository.
- A manager can run a seeded local demonstration, plan an event, manage stock and posts, reconcile counts, view costs and produce reports.
- An operator can enter only an assigned post with a temporary PIN and complete initial and final counts on a phone.

## Scope

1. Individual manager accounts, profile/avatar, MFA, session expiry and server-enforced roles; no public signup.
2. Materials, units, images, prices, reusable kits and editable post templates with configurable generic planning formulas.
3. Events, participants, duration, post instances, readiness checks, duplication, cancellation with reason, preparation and stock reservation.
4. Temporary per-post PINs, isolated operator sessions, initial/final counts, conflict recovery and manager reconciliation. Completed posts must not block other posts.
5. Single-warehouse ledger for opening stock, receipts, reservations, dispatch, returns, loss, maintenance, physical inventory and reasoned adjustments; no negative available stock or invented return on cancellation.
6. Event staffing, hours, travel and general expenses; manual revenue, discounts and VAT; financial summaries, operational analytics and a separate, locked financial close.
7. Purchasing needs, suppliers and purchase orders; stock increases only on explicit receipt.
8. Manager-only general/event tickets with assignment, priority, status, comments and history; global search and in-app manager/operator guides.
9. Per-post and event PDF reports, financial CSV and a local test mailbox for email flow. Sending is available only after event close.

Generic workflows may be inspired by the existing product, but implementation and visual assets are created anew. Demo data, names, prices and formulas are invented; no proprietary operational constants are copied.

## Experience

- New EventoFlux identity: dark navy, black and white with a restrained blue accent; responsive layouts and accessible contrast, focus, keyboard and form feedback.
- Clear manager and operator paths, empty/loading/error/success states, concise guides and a visible fictional-demo label.
- No public SaaS tenancy, payment, external ERP or real mail delivery in this version.

## Technical approach

- New repository and unrelated Git history; React, TypeScript and Vite frontend; independent Supabase local stack (Postgres, Auth, Storage, Edge Functions) via Docker.
- Migrations, configuration and fictional seed data live in Git. Mutable runtime data remains in local Postgres, not Git.
- Server-side authorization and transactional stock invariants; RLS and RPC tests. Email is captured locally for demonstration, never sent to arbitrary recipients by default.
- No production service, secret or corporate account is required to run the default demo. A hosted live demo is a separate, later decision.

## Delivery and review

New public GitHub repository. `main` stays working. One focused PR per independently verifiable slice: foundation; auth; catalogue/templates; events/operator; stock/finance; tickets/reports; final UX/security/docs. Each slice follows **think → implement → test → review → fix → review → deliver**. CI must pass before merge. The lead reconciles cross-slice contracts; parallel agents only own disjoint files or read-only reviews. Do not open artificial PRs for trivial commits.

## Acceptance

- A fresh clone can run the app locally from documented commands with Docker and seed data.
- End-to-end tests exercise manager and operator roles, concurrent stock constraints, reports and negative authorization cases against a real local backend.
- Build, typecheck, lint, unit/integration tests, database checks, secret scan and UI smoke tests pass before declaring the project ready.
- Repository, history, generated files and documentation contain no client identifiers, copied code, actual data, passwords or private service addresses.
- Every completed PR links its tests and review evidence; untested or external-dependent behavior is labelled honestly.

## Open limits

- Public repository publication depends on an authenticated GitHub path. No `gh` CLI is currently available on this machine; use an existing connected tool or user-approved browser workflow.
- A public GitHub repository is not a running online demo. Hosting would need separate infrastructure and abuse controls.
- No open-source license is added in the first PR. Public visibility alone does not grant reuse rights; the owner can choose a license later.
