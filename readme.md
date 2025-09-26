# ⚡ @roninbuilders/contracts

[![npm version](https://img.shields.io/npm/v/@roninbuilders/contracts.svg)](https://www.npmjs.com/package/@roninbuilders/contracts)
[![npm downloads](https://img.shields.io/npm/dm/@roninbuilders/contracts.svg)](https://www.npmjs.com/package/@roninbuilders/contracts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Bundle Friendly](https://img.shields.io/badge/Bundle-Tree--Shakable-success.svg)](https://github.com/roninbuilders/contracts)
[![CI](https://img.shields.io/badge/CI-GitHub%20Actions-informational.svg)](./.github/workflows/ci.yml)

**Verified Ronin Network smart contract ABIs & addresses — import exactly what you need with full TypeScript ABI inference safety.**

> Optimized for modern web3 stacks: viem • ethers.js • browser dApps • server scripts

---

## 📑 Table of Contents

- [Why Choose This Library?](#-why-choose-this-library)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Contract Structure](#-contract-structure)
- [Examples](#-examples)
  - [Viem](#viem-integration)
  - [Ethers.js](#ethersjs-integration)
- [Development](#️-development)
- [Working Examples](#-working-examples)
- [Security Considerations](#-security-considerations)
- [Contributing](#-contributing)

## ✨ Why Choose This Library?

- **🔒 Verified & Secure**: All contract addresses and ABIs are verified against official Ronin Network Explorer API
- **📦 Optimized Bundle Size**: Tree-shakable imports minimize your application's bundle size
- **🔧 TypeScript First**: Full type safety with generated TypeScript definitions
- **🚀 Framework Agnostic**: Works with viem, ethers.js, and other web3 libraries
- **📚 Comprehensive Coverage**: Extensive collection of Ronin ecosystem contracts
- **🔄 Always Up-to-Date**: Regularly updated with latest contract deployments


## 📦 Installation

```bash
npm install --save-exact @roninbuilders/contracts
# or
pnpm add --save-exact @roninbuilders/contracts
# or
bun add --exact @roninbuilders/contracts
```

> **Security Best Practice**: Always use `--save-exact` (or `--exact` for Bun) when installing packages to ensure deterministic builds and avoid potential security vulnerabilities from dependency updates.

## 🚀 Quick Start

### Import contracts individually

This is the only supported approach as it minimizes the bundle size for your application.

```typescript
import MY_CONTRACT from '@roninbuilders/contracts/my_contract';
// or for CommonJS
const MY_CONTRACT = require('@roninbuilders/contracts/my_contract');
```

### ⚠️ Barrel (named) imports are not supported

To keep bundle size minimal, importing from the package root with named exports is not supported (e.g., `import { AXIE_PROXY } from '@roninbuilders/contracts'`). Always import individual contract files via default import:

```typescript
import AXIE_PROXY from '@roninbuilders/contracts/axie_proxy'
import KATANA_ROUTER from '@roninbuilders/contracts/katana_router'
```

## 📋 Contract Structure

Each contract export includes:

- **Contract ABI** - The contract's Application Binary Interface
- **Contract address** - Verified deployment address on Ronin Network
- **Metadata** - Name, deprecation status, and creation date

Example:

```typescript
import AXIE_PROXY from '@roninbuilders/contracts/axie_proxy'

console.log(AXIE_PROXY.address) // Contract address
console.log(AXIE_PROXY.abi) // Contract ABI
console.log(AXIE_PROXY.proxy_abi) // Proxy ABI (if applicable)
console.log(AXIE_PROXY.is_deprecated) // Deprecation status
```

## 💻 Examples

### Viem Integration

Using viem to interact with contracts:

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

### Ethers.js Integration

Using ethers.js to interact with contracts:

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

## 🛠️ Development

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

## 📚 Working Examples

Working examples demonstrating how to use this package in different environments:

### [CommonJS Example](https://github.com/roninbuilders/contracts/tree/main/examples/commonjs)

- **Environment**: Node.js with CommonJS
- **Library**: ethers.js
- **Features**: Shows `require()` syntax and basic token balance fetching

### [TypeScript Example](https://github.com/roninbuilders/contracts/tree/main/examples/typescript)

- **Environment**: Bun runtime with TypeScript
- **Library**: viem
- **Features**: ES modules, type safety, and advanced contract interactions

### [Browser Example](https://github.com/roninbuilders/contracts/tree/main/examples/browser)

- **Environment**: Web browser with JavaScript
- **Library**: viem (bundled with Rollup)
- **Features**: Interactive HTML interface with live blockchain data

## 🔒 Security Considerations

⚠️ **Important Security Notice**: This package provides contract ABIs and addresses for blockchain interactions. Always verify contract addresses independently before executing transactions. Be aware that:

- Contract addresses should be verified against official sources
- Smart contract interactions carry inherent risks
- This package is provided as-is without warranty
- Always audit smart contract code before interacting with it

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.
