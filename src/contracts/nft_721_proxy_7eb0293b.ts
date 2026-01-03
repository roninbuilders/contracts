import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4507,
  address: '0x554bced1db572e16fdf4c8a6f23a301f7eb0293b' as const,
  contract_name: 'NFT721Proxy',
  display_name: 'NFT721 Region Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xf3487ee79fac9729df0d28a92a1641d39e9869a5',
  created_at: 1728624286,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
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