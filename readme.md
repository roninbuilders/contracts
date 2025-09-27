<div align="center">

![RoninBuilders Contracts](examples/roninbuilders.png)

# @roninbuilders/contracts

</div>

[![npm version](https://img.shields.io/npm/v/@roninbuilders/contracts.svg)](https://www.npmjs.com/package/@roninbuilders/contracts)
[![npm downloads](https://img.shields.io/npm/dm/@roninbuilders/contracts.svg)](https://www.npmjs.com/package/@roninbuilders/contracts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Bundle Friendly](https://img.shields.io/badge/Bundle-Tree--Shakable-success.svg)](https://github.com/roninbuilders/contracts)
[![CI](https://img.shields.io/badge/CI-GitHub%20Actions-informational.svg)](./.github/workflows/ci.yml)

Verified smart contract ABIs and addresses for Ronin Network. Import just what you need and get full TypeScript safety.

Works great with viem, ethers.js, browser apps, and server scripts.

---

## Table of contents

- [Why use this?](#why-use-this)
- [Installation](#installation)
- [Quick start](#quick-start)
- [Contract structure](#contract-structure)
- [Examples](#examples)
  - [Viem](#viem-integration)
  - [Ethers.js](#ethersjs-integration)
- [Development](#development)
- [Working examples](#working-examples)
- [Security considerations](#security-considerations)
- [Contributing](#contributing)

## Why use this?

All the contract addresses and ABIs come straight from the official Ronin Network Explorer API, so you know they're legit. You can import just the contracts you actually need instead of pulling in everything, which keeps your bundle size reasonable.

Everything has proper TypeScript types generated automatically. Works with whatever web3 library you're already using, whether that's viem, ethers.js, or something else. We keep adding new contracts as they get deployed and verified on the network.

You don't have to hunt down contract addresses or copy ABIs from block explorers anymore. Just import what you need and start building.


## Installation

```bash
npm install --save-exact @roninbuilders/contracts
# or
pnpm add --save-exact @roninbuilders/contracts
# or
bun add --exact @roninbuilders/contracts
```

Use the exact flags to pin the version. This keeps your builds consistent and avoids any surprises from automatic updates.

## Quick start

### Import contracts individually

You need to import each contract separately. This keeps your bundle size small since you only get what you actually use.

```typescript
import MY_CONTRACT from '@roninbuilders/contracts/my_contract';
// or for CommonJS
const MY_CONTRACT = require('@roninbuilders/contracts/my_contract');
```

### No barrel imports

Don't try to import multiple contracts from the package root like `import { AXIE_PROXY } from '@roninbuilders/contracts'`. That would pull in everything. Instead, import each contract file directly:

```typescript
import AXIE_PROXY from '@roninbuilders/contracts/axie_proxy'
import KATANA_ROUTER from '@roninbuilders/contracts/katana_router'
```

## Contract structure

Each contract gives you the ABI, the verified address on Ronin Network, and some basic info like whether it's deprecated.

```typescript
import AXIE_PROXY from '@roninbuilders/contracts/axie_proxy'

console.log(AXIE_PROXY.address) // Contract address
console.log(AXIE_PROXY.abi) // Contract ABI
console.log(AXIE_PROXY.proxy_abi) // Proxy ABI (if applicable)
console.log(AXIE_PROXY.is_deprecated) // Deprecation status
```

Some contracts also include a proxy ABI if they're behind a proxy pattern.

## Examples

### Viem integration

Here's how to use it with viem:

```typescript
import { createPublicClient, http, formatEther, formatUnits } from 'viem'
import AXIE_PROXY from '@roninbuilders/contracts/axie_proxy'
import WRAPPED_ETHER from '@roninbuilders/contracts/wrapped_ether'
import USD_COIN from '@roninbuilders/contracts/usd_coin'

const client = createPublicClient({
  chain: {
    id: 2020,
    name: 'Ronin',
    network: 'ronin',
    nativeCurrency: {
      decimals: 18,
      name: 'Ronin',
      symbol: 'RON'
    },
    rpcUrls: {
      default: { http: ['https://api.roninchain.com/rpc'] },
      public: { http: ['https://api.roninchain.com/rpc'] },
    }
  },
  transport: http()
})

// Replace with an address you want to query
const address = '0xYourRoninAddressHere'

// Get RON balance
const ronBalance = await client.getBalance({ address })
console.log(`RON: ${formatEther(ronBalance)}`)

// Read WETH balance (18 decimals)
const weth = await client.readContract({
  address: WRAPPED_ETHER.address,
  abi: WRAPPED_ETHER.abi,
  functionName: 'balanceOf',
  args: [address]
})
console.log(`WETH: ${formatEther(weth)}`)

// Read Axies balance via proxy ABI (integer amount)
const axies = await client.readContract({
  address: AXIE_PROXY.address,
  abi: AXIE_PROXY.proxy_abi,
  functionName: 'balanceOf',
  args: [address]
})
console.log(`Axies: ${axies.toString()}`)

// Read USDC balance (6 decimals)
const usdc = await client.readContract({
  address: USD_COIN.address,
  abi: USD_COIN.abi,
  functionName: 'balanceOf',
  args: [address]
})
console.log(`USDC: ${formatUnits(usdc, 6)}`)
```

### Ethers.js integration

Same thing but with ethers.js:

```typescript
import { ethers, formatEther, formatUnits, Contract } from 'ethers'
import AXIE_PROXY from '@roninbuilders/contracts/axie_proxy'
import WRAPPED_ETHER from '@roninbuilders/contracts/wrapped_ether'
import USD_COIN from '@roninbuilders/contracts/usd_coin'

const provider = new ethers.JsonRpcProvider('https://api.roninchain.com/rpc')

// Replace with an address you want to query
const address = '0xYourRoninAddressHere'

// Get RON balance
const ron = await provider.getBalance(address)
console.log(`RON: ${formatEther(ron)}`)

// Get WETH balance (18 decimals)
const wethContract = new Contract(WRAPPED_ETHER.address, WRAPPED_ETHER.abi, provider)
const weth = await wethContract.balanceOf(address)
console.log(`WETH: ${formatEther(weth)}`)

// Get Axies balance via proxy ABI
const axieContract = new Contract(AXIE_PROXY.address, AXIE_PROXY.proxy_abi, provider)
const axies = await axieContract.balanceOf(address)
console.log(`Axies: ${axies.toString()}`)

// Get USDC balance with proper decimals (6)
const usdcContract = new Contract(USD_COIN.address, USD_COIN.abi, provider)
const usdc = await usdcContract.balanceOf(address)
console.log(`USDC: ${formatUnits(usdc, 6)}`)
```

## Development

Update contracts from Ronin Explorer:

```bash
bun run update
```

Build the package:

```bash
bun run build
```

Format code:

```bash
bun run format
```

## Working examples

Check out these examples to see how to use the package in different setups:

### [CommonJS example](https://github.com/roninbuilders/contracts/tree/main/examples/commonjs)

Node.js with CommonJS and ethers.js. Shows the `require()` syntax and basic token balance fetching.

### [TypeScript example](https://github.com/roninbuilders/contracts/tree/main/examples/typescript)

Bun runtime with TypeScript and viem. Uses ES modules with full type safety and more advanced contract interactions.

### [Browser example](https://github.com/roninbuilders/contracts/tree/main/examples/browser)

Web browser with JavaScript and viem bundled with Rollup. Has an interactive HTML interface with live blockchain data.

## Security considerations

This package gives you contract ABIs and addresses, but you should still double check addresses before doing any transactions with real money. Smart contracts are risky by nature.

We get the data from the official Ronin Explorer, but things can change. Always verify addresses against official sources if you're doing anything important. This package comes with no warranty, so use it at your own risk.

If you're interacting with a contract you haven't used before, take a look at the contract code first to make sure it does what you expect.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.
