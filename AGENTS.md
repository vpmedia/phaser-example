# AGENTS.md

## Overview

Example application for the `@vpmedia/phaser` package (modern Phaser 2 port). Demonstrates a typical project setup including asset generation via `@vpmedia/phixify`.

## Tech Stack

- **Language:** TypeScript (ESM)
- **Runtime:** Node.js / Browser
- **Package Manager:** pnpm (workspaces)
- **Game Engine:** `@vpmedia/phaser` (modern Phaser 2 port)
- **Libs:** `@vpmedia/simplify`, `fontfaceobserver`, `spectorjs` (WebGL inspector)
- **Build/Dev Server:** Vite
- **Asset Pipeline:** `@vpmedia/phixify`
- **Testing:** Vitest, @vitest/coverage-v8, jsdom
- **Lint/Format:** oxlint (+ `oxlint-tsgolint`), oxfmt
- **Type Checking:** TypeScript
- **Tooling:** lefthook (git hooks), commitlint (conventional commits)

## Documentation

- Lefthook: https://lefthook.dev/llms.txt
- OXC (oxlint, oxfmt): https://oxc.rs/llms.txt
- Vite: https://vite.dev/llms.txt
- Vitest: https://vitest.dev/llms.txt

## Commands

- **Install:** `pnpm install`
- **Dev server:** `pnpm start` (Vite, opens browser)
- **Build:** `pnpm build`
- **Preview build:** `pnpm preview`
- **Generate assets:** `pnpm asset` (runs phixify)
- **Test:** `pnpm test`
- **Lint / Format / Typecheck:** `pnpm lint` / `pnpm format` / `pnpm typecheck`
- **All checks:** `pnpm check`

## Project Structure

- `src/index.html` — entry HTML
- `src/main.ts` — application entry point
- `src/style.css` — styles
- `public/` — static assets served as-is
- `types/` — local type augmentations
- `dist/` — Vite build output (gitignored)

## Conventions

- **Commits:** Conventional Commits (`@commitlint/config-conventional`)
- **Modules:** ESM only
- **Style:** Enforced by oxlint + oxfmt — do not hand-format

## Testing

- Vitest with coverage; configured to pass with no tests
- Place tests as `*.test.ts` co-located with source
