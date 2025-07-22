# Browser Example

This example demonstrates how to use `@roninbuilders/contracts` in a browser environment with JavaScript and viem, bundled using Rollup.

## Installation

```bash
npm install --save-exact @roninbuilders/contracts viem rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs
```

## Building and Running

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the bundle:
   ```bash
   npm run build
   ```

3. Serve the files (using Python's built-in server):
   ```bash
   npm run serve
   ```

4. Open http://localhost:8000 in your browser

## Features

- **Real package usage**: Uses actual `@roninbuilders/contracts` package
- **Bundled for browser**: Rollup bundles the modules for browser compatibility
- **Interactive UI**: Click buttons to fetch live blockchain data
- **Viem integration**: Demonstrates viem client setup for Ronin Network
- **Read-only operations**: Safe contract interactions for display purposes
- **Responsive design**: Clean, modern interface

## What This Example Shows

- Bundling npm packages for browser use with Rollup
- Importing contracts from `@roninbuilders/contracts`
- Setting up viem client for Ronin Network
- Reading token balances (RON, WETH, USDC, SLP, Axies)
- Interacting with proxy contracts (Atias Blessing)
- Error handling in browser environment
- Formatting blockchain data for display

## Build Process

This example uses Rollup to bundle the ES modules and dependencies into a single file that can run in the browser. The configuration handles:

- Node.js module resolution
- CommonJS compatibility
- Browser-specific builds

## Security

- This example only performs read operations
- No private keys or sensitive data are exposed
- Uses exact package versions for security
- Contract addresses come from the verified package
- Use HTTPS in production environments