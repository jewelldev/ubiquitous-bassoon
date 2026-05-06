# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Build
dotnet build src/BlazorWasmApp/BlazorWasmApp/BlazorWasmApp.csproj

# Run dev server (hot reload)
dotnet watch run --project src/BlazorWasmApp/BlazorWasmApp/BlazorWasmApp.csproj

# Publish release build
dotnet publish src/BlazorWasmApp/BlazorWasmApp/BlazorWasmApp.csproj -c Release
```

Dev server listens on `http://localhost:5153` / `https://localhost:7233` (from `launchSettings.json`).

## Architecture

This is a **Blazor WebAssembly** single-page app targeting **.NET 10**. All application logic runs client-side in the browser via WebAssembly — there is no backend server.

Entry points:
- `Program.cs` — configures the WASM host, registers `HttpClient`, mounts root components
- `App.razor` — defines client-side routing via the `Router` component; unmatched routes fall through to `NotFound.razor`
- `wwwroot/index.html` — the host HTML page; loads the Blazor WASM runtime script

Layout and pages live under `src/BlazorWasmApp/BlazorWasmApp/`:
- `Layout/MainLayout.razor` — shell with sidebar nav
- `Pages/` — routable page components (`Home`, `Counter`, `Weather`, `NotFound`)

## Claude Code Integration

**GitHub Actions** (`.github/workflows/`):
- `claude.yml` — responds to `@claude` mentions in issues and PRs
- `pr-review.yml` — automatically runs `/pr-review` skill when a PR is opened or reopened

**Pre-tool hook** (`hooks/read_hook.js`): blocks Claude from reading `NoSecretsHere.txt`. This is a demonstration of Claude Code hook functionality — the hook runs as a Node.js script registered in `.claude/settings.local.json`.

**Custom skill**: `.claude/skills/pr-review/` contains the local pr-review skill definition used by the automated workflow.
