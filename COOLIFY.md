# Coolify deployment notes

## Build mode
Use **Dockerfile mode** in Coolify (recommended).

The repository now provides a production multi-stage `Dockerfile` and a runtime health check (`/health`) that respects `PORT`.

## Required runtime variables
Set these environment variables in Coolify:

- `NODE_ENV=production`
- `HOST=0.0.0.0`
- `PORT=3000` (or leave Coolify default if it injects one)

## If using Nixpacks / Node mode instead of Dockerfile
Use:

- Build command: `npm run build:coolify`
- Start command: `npm run start:coolify`

This forces `adapter-node` and avoids ambiguous auto-adapter selection.

## Nixpacks guardrail committed in repo
A `nixpacks.toml` is now included to make Nixpacks deterministic:

- force `node` provider
- build with `npm run build:coolify`
- start with `npm run start:coolify`

This prevents auto-detection drift (for example selecting Python and generating an empty start command).
