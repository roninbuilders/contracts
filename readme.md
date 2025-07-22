# Ronin Network Contracts

Contract ABIs for the Ronin Network.

## Installation

```bash
npm install --save-exact @roninnetwork/contracts
# or
pnpm add --save-exact @roninnetwork/contracts
# or
bun add --exact @roninnetwork/contracts
```

> **Security Best Practice**: Always use `--save-exact` (or `--exact` for Bun) when installing packages to ensure deterministic builds and avoid potential security vulnerabilities from dependency updates.

## Usage

### Import contracts individually

This is the only supported approach as it minimizes the bundle size for your application.

```typescript
import MY_CONTRACT from '@roninbuilders/contracts/my_contract';
// or for CommonJS
const MY_CONTRACT = require('@roninbuilders/contracts/my_contract');
```

### Named imports are not supported

To ensure optimal bundle size, named imports from the main package are not available:

```typescript
import AXIE_PROXY from '@roninbuilders/contracts/axie_proxy'
import KATANA_ROUTER from '@roninbuilders/contracts/katana_router'
```

## Contract Structure

Each contract export includes:

- Contract ABI
- Contract address
- Metadata (name, deprecation status, creation date)

Example:

```typescript
import AXIE_PROXY from '@roninbuilders/contracts/axie_proxy'

console.log(AXIE_PROXY.address) // Contract address
console.log(AXIE_PROXY.abi) // Contract ABI
console.log(AXIE_PROXY.proxy_abi) // Proxy ABI
console.log(AXIE_PROXY.is_deprecated) // Deprecation status
```

## Viem Example

Using viem to interact with contracts:

```typescript
import { createPublicClient, http } from 'viem'
import AXIE_PROXY from '@roninbuilders/contracts/axie_proxy'
import WRAPPED_ETHER from '@roninbuilders/contracts/wrapped_ether'

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
      default: { http: ['https://api.roninchain.com/rpc'] }
    }
  },
  transport: http()
})

// Read contract data
const balance = await client.readContract({
  address: WRAPPED_ETHER.address,
  abi: WRAPPED_ETHER.abi,
  functionName: 'balanceOf',
  args: [address]
})
```

## Ethers Example

Using ethers.js to interact with contracts:

```typescript
import { ethers } from 'ethers'
import AXIE_PROXY from '@roninbuilders/contracts/axie_proxy'
import WRAPPED_ETHER from '@roninbuilders/contracts/wrapped_ether'

const provider = new ethers.JsonRpcProvider('https://api.roninchain.com/rpc')

// Create contract instance
const contract = new ethers.Contract(
  WRAPPED_ETHER.address,
  WRAPPED_ETHER.abi,
  provider
)

// Read contract data
const balance = await contract.balanceOf(address)
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

## Examples

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

## Security Considerations

⚠️ **Important Security Notice**: This package provides contract ABIs and addresses for blockchain interactions. Always verify contract addresses independently before executing transactions. Be aware that:

- Contract addresses should be verified against official sources
- Smart contract interactions carry inherent risks
- This package is provided as-is without warranty
- Always audit smart contract code before interacting with it

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.
