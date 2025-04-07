import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3614,
  address: '0xab83a98821573adc856f0124c3c97d1b79ee94a2' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'GM Send Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xcb85df32da99ddd016c4f8e3f98b4d2a175a355c',
  created_at: 1723280377,
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