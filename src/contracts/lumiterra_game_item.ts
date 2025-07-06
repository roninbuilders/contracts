import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3265,
  address: '0xcc451977a4be9adee892f7e610fe3e3b3927b5a1' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Lumiterra Game Item',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x1b1cb7f488de236bc9225d8ace9e157a087bf296',
  created_at: 1720869853,
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