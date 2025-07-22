# Examples

This directory contains working examples demonstrating how to use `@roninbuilders/contracts` in different environments and runtimes.

## Available Examples

### [CommonJS](./commonjs/) 
- **Environment**: Node.js with CommonJS
- **Library**: ethers.js 
- **Package Manager**: npm
- **Features**: Node.js script showing `require()` syntax and ethers.js integration

### [TypeScript](./typescript/)
- **Environment**: Bun runtime with TypeScript
- **Library**: viem
- **Package Manager**: bun  
- **Features**: TypeScript script with ES modules and advanced viem features

### [Browser](./browser/)
- **Environment**: Web browser with vanilla JavaScript
- **Library**: viem (bundled with Rollup)
- **Package Manager**: npm
- **Features**: Interactive HTML page with live blockchain data fetching

## Running Examples

Each example directory contains its own README with specific instructions. Generally:

1. Navigate to the example directory
2. Install dependencies using the recommended package manager (if needed)
3. Run the example script using `npm start`, `bun start`, or open the HTML file

## What These Examples Demonstrate

- **Contract importing**: Different ways to import contracts (`require()`, `import`, browser)
- **Library integration**: Working with ethers.js and viem
- **Blockchain interactions**: Reading balances, contract data, and handling responses
- **Error handling**: Proper error handling across different environments
- **Type safety**: TypeScript integration where applicable
- **Security practices**: Using exact versions and following best practices

## Security Best Practices

All examples follow security best practices:
- Use `--save-exact` or `--exact` flags when installing dependencies
- Pin exact versions to ensure deterministic builds
- Include security disclaimers about blockchain interactions
- Demonstrate read-only operations for safety

## Production Usage

These examples are designed to work with the published npm package `@roninbuilders/contracts`. They demonstrate real-world usage scenarios and can be used as templates for integrating the package into your own applications.