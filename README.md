# GitHub Package Monorepo POC

A proof of concept demonstrating GitHub Package Registry integration within a monorepo setup using pnpm workspaces and Turborepo.

## Overview

This POC showcases:
- Creating and publishing npm packages to GitHub Package Registry
- Using published packages within a monorepo
- Backend and frontend applications consuming the packages
- Modern monorepo tooling with pnpm and Turborepo

## Packages

- **[@deepak-terse/hello-api](packages/hello-api/README.md)** - Node.js API utilities
- **[@deepak-terse/hello-ui](packages/hello-ui/README.md)** - React component

## Applications

- **Backend** - Express.js server using the API package
- **Frontend** - React app using the UI component

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm start
```

- Backend: http://localhost:3000
- Frontend: http://localhost:5173

## Project Structure

```
├── apps/
│   ├── backend/          # Express.js server
│   └── frontend/         # React app
├── packages/
│   ├── hello-api/        # @deepak-terse/hello-api
│   └── hello-ui/         # @deepak-terse/hello-ui
└── package.json
```

## Development

```bash
# Start all apps
pnpm start

# Build packages
pnpm build

# Publish packages
pnpm --filter @deepak-terse/hello-api publish
pnpm --filter @deepak-terse/hello-ui publish
```

## GitHub Package Registry

Packages are configured to publish to GitHub Package Registry:

```json
{
  "publishConfig": {
    "access": "public",
    "registry": "https://npm.pkg.github.com"
  }
}
```

## Repository

https://github.com/deepakterse/gh-pkg-monorepo-poc 