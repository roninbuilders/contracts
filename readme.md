# Ronin Network Contracts

Contract ABIs for the Ronin Network.

## Installation

```bash
npm install @roninnetwork/contracts
# or
pnpm add @roninnetwork/contracts
# or
bun add @roninnetwork/contracts
```

## Usage

The contracts are grouped by their first letter to reduce bundle size. There are two ways to import them:


###  Import  contracts directly:

```typescript
import { AXIE_PROXY, KATANA_ROUTER } from '@roninnetwork/contracts'
```

## Contract Structure

Each contract export includes:
- Contract ABI
- Contract address
- Metadata (name, deprecation status, creation date)

Example:
```typescript
import { AXIE_PROXY } from '@roninnetwork/contracts/a'

console.log(AXIE_PROXY.address) // Contract address
console.log(AXIE_PROXY.abi) // Contract ABI
console.log(AXIE_PROXY.proxy_abi) // Proxy ABI
console.log(AXIE_PROXY.is_deprecated) // Deprecation status
```

## Viem Example
Using viem to interact with contracts:

```typescript
import { createPublicClient, http } from 'viem'
import { AXIE_PROXY, WRAPPED_ETHER } from '@roninnetwork/contracts'

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
import { AXIE_PROXY, WRAPPED_ETHER } from '@roninnetwork/contracts'

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

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.