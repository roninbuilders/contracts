import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36824,
  address: '0x5c9e9d11a6fbee98397e60238d986ea4991cb6f7' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Ronke Staking Platform Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x29fdeb7efa42b13e3c65e8b5de45ea3a488c7664',
  created_at: 1756292376,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ]
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "ERC1967InvalidImplementation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      }
    ]
  },
  {
    "name": "ERC1967NonPayable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract