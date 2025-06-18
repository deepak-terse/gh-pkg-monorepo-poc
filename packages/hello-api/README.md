# @deepak-terse/hello-api

A Node.js package demonstrating GitHub Package Registry publishing and usage within a monorepo setup.

## Installation

```bash
npm install @deepak-terse/hello-api
```

## Usage

```javascript
import { getHelloMessage, getEnvironmentInfo, getSystemHealth } from '@deepak-terse/hello-api';

// Simple hello message
const message = getHelloMessage(); // "Hello from the backend!"

// Environment information
const envInfo = getEnvironmentInfo();
console.log(envInfo);

// System health metrics
const health = getSystemHealth();
console.log(health);
```

## API

- `getHelloMessage()` - Returns a simple hello message
- `getEnvironmentInfo()` - Returns Node.js environment and system information
- `getSystemHealth()` - Returns system health metrics and memory usage

## About

This package is part of a POC demonstrating GitHub Package Registry integration in a monorepo. It provides basic environment and system information utilities for backend applications.

## Repository

https://github.com/deepakterse/gh-pkg-monorepo-poc 