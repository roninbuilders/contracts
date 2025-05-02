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

### Import contracts individually:

This is the only supported approach as it minimizes the bundle size for your application.

```typescript
import MY_CONTRACT from '@roninbuilders/contracts/my_contract';
// or for CommonJS
const MY_CONTRACT = require('@roninbuilders/contracts/my_contract');
```

### Named imports are not supported:

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

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.