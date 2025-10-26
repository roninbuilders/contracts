import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37277,
  address: '0xbbdafc390e221bb55f47bfb354cbcaa8876cf57a' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Ktty World Companions Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x3c6e8357bb6ed87f7c74fea1a211983ea3ab7ed4',
  created_at: 1759255391,
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
    "name": "FailedCall",
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