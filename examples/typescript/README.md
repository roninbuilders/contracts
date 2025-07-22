# Bun Example

This example demonstrates how to use `@roninbuilders/contracts` in a Bun environment with TypeScript and viem.

## Installation

```bash
bun add --exact @roninbuilders/contracts viem
```

## Running the Example

```bash
bun start
```

## Features Demonstrated

- ES modules `import` syntax for importing contracts
- Using viem with Ronin Network contracts  
- TypeScript support with Bun runtime
- Fetching token balances and contract data from the blockchain
- Advanced contract interactions (Atias Blessing streak data)
- Type-safe contract interactions

## What This Example Shows

- Import contracts using ES modules syntax
- Set up viem client for Ronin Network with TypeScript
- Read native RON balance using viem
- Read ERC-20 token balances (WETH, USDC, SLP) with proper decimals
- Read NFT collection balance (Axies)
- Interact with proxy contracts (Atias Blessing)
- Handle complex return data (tuples, timestamps)
- TypeScript type safety throughout

## Security Note

⚠️ This example uses exact versions to ensure deterministic builds and avoid potential security vulnerabilities.