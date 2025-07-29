import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36376,
  address: '0x1a978ebb7c3dd862d868272c1e3113717249d60d' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'ERC1967 Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xc3c81517d82352a784219bfdc7df689361e6680d',
  created_at: 1753425306,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
      }
    ]
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
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract