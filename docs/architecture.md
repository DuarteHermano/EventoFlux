# Architecture

## Implemented in the foundation

The application is a client-only React/TypeScript interface built with Vite. `src/main.tsx` mounts the shell in `src/App.tsx`; `src/styles.css` provides the responsive brand baseline. Tests run with Vitest. There is no API, database client, authentication provider, migration or server process in this PR.

The manager and operator entry points are presentation only. The setup state describes missing optional local backend configuration; it does not validate a live service or imply a connected session.

## Planned boundaries, not yet implemented

A later phase may add a local Supabase stack (Postgres, Auth, Storage and Edge Functions) with versioned migrations and fictional seeds. Authorization must be enforced by the server/database boundary, not by React. Stock changes must be transactional and tested for concurrent reservations and negative cases. Post PIN sessions must be isolated from manager sessions. Email must be captured locally by default.

The design specification defines the eventual flows; this document should be updated only as each boundary is implemented and verified. No production architecture or hosting arrangement has been selected.
