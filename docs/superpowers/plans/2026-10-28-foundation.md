# EventoFlux Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver the first reviewable PR: an independent, runnable, documented EventoFlux foundation with new branding and automated quality gates.

**Architecture:** Create a fresh React/TypeScript/Vite app and an unrelated Git repository. Establish local-only Supabase configuration as documentation and environment contract, but do not connect a real backend or implement product features in this PR. No source or assets are copied from the client project.

**Tech Stack:** React, TypeScript, Vite, pnpm, Vitest, React Testing Library, ESLint, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-10-28-eventoflux-design.md`

## Global Constraints

- Independent implementation and Git history; no client code, assets, names, data, credentials or company-specific formulas.
- Local demo with fictitious data; no hosted deployment or real email in this phase.
- Navy/black/white visual identity with blue accent; semantic, responsive and keyboard-accessible UI.
- Each PR completes think → implement → test → review → fix → review → deliver before merge.

## Review Focus

- No environment file containing a real secret may be tracked: check ignored files and staged file names before commit.
- Missing environment variables must produce an understandable local setup state, not a blank screen.
- At 320 px, content must not overflow horizontally.
- App navigation and controls must work by keyboard with visible focus.
- Fresh clone instructions must not require access to the original client repository or services.

---

### Task 1: Fresh application scaffold

**Files:** Create `package.json`, `pnpm-lock.yaml`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/App.test.tsx`, `vite.config.ts`, `tsconfig*.json`, `eslint.config.js` and supporting package files.

**Interfaces:** Produces a standalone `App` component mounted at `#root`; `pnpm dev`, `pnpm test`, `pnpm lint`, `pnpm typecheck` and `pnpm build` commands.

- [ ] Create the Vite React/TypeScript scaffold in the new directory; pin compatible stable package versions after checking current documentation.
- [ ] Add a failing render test asserting the EventoFlux name, demo label and manager/operator entry points.
- [ ] Run the focused test and observe failure.
- [ ] Implement the minimal semantic app shell and setup state without backend calls.
- [ ] Run the focused test, lint, typecheck and build; record outcomes.

### Task 2: Brand and responsive baseline

**Files:** Create `src/styles.css`; modify `src/App.tsx`; create `src/responsive.test.tsx` if the chosen DOM test setup supports stable assertions.

**Interfaces:** Produces reusable CSS tokens and a responsive landing shell; later PRs consume those tokens without copying source styles.

- [ ] Add tests for accessible entry-point names and setup guidance when no backend is configured.
- [ ] Observe the tests failing.
- [ ] Implement navy/black/white styling, blue accent, focus-visible and mobile layout.
- [ ] Run tests and inspect the UI at 320 px, mobile, tablet and desktop; document any unavailable browser check.

### Task 3: Documentation and CI

**Files:** Create `README.md`, `PRODUCT.md`, `AGENTS.md`, `.env.example`, `.gitignore`, `docs/architecture.md`, `docs/setup.md`, `docs/quality.md`, `.github/workflows/quality.yml`, `.github/pull_request_template.md`.

**Interfaces:** Produces a clone-and-run contract and PR quality gate; later phases extend the same docs rather than making parallel guides.

- [ ] Document prerequisites, independent scope, demo limitations and planned functionality without claiming unfinished features work.
- [ ] Add a CI workflow that installs with a frozen lockfile and runs lint, typecheck, tests and build.
- [ ] Add a PR template with problem, scope, evidence, risks and review checklist.
- [ ] Validate workflow syntax, `git diff --check`, untracked/ignored files and absence of client identifiers or secrets.

### Task 4: Repository and first PR

**Files:** Git metadata only; no changes to the original client repository.

**Interfaces:** Produces an unrelated history with working `main` and one foundation PR; does not merge without review.

- [ ] Confirm the new path has no previous Git history and no tracked secrets.
- [ ] Initialize local Git and create a minimal baseline commit on `main` from the approved spec/plan.
- [ ] Create a `codex/foundation` branch and commit the verified foundation.
- [ ] Create or connect the public GitHub repository using an already authorized account; do not install a global CLI or expose tokens.
- [ ] Push only the new repository branches, open the first PR, attach it to this task and inspect CI and the final diff.
- [ ] Review, fix findings, re-run gates, then hand the PR to the user; do not claim readiness from local tests alone.

## Self-review

The first PR deliberately stops before auth, database schema and operational modules. The remaining slices each need their own focused plan and PR after the foundation is stable. No existing customer code or data is a dependency.
