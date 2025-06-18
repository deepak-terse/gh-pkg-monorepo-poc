# Monorepo POC

This is a minimalistic monorepo project containing a Node.js backend and React frontend.

## Prerequisites

- Node.js (v16 or higher)
- pnpm (v8 or higher)

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start the development servers:
```bash
pnpm start
```

This will start:
- Backend server at http://localhost:3000
- Frontend server at http://localhost:5173

## Project Structure

- `apps/backend`: Node.js Express server
- `apps/frontend`: React application with Vite

## Available Scripts

- `pnpm start`: Start all applications in development mode
- `pnpm build`: Build all applications
- `pnpm lint`: Run linting for all applications 