import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4506,
  address: '0x09736b41ba78633d435e06019dc1a79b1545babc' as const,
  contract_name: 'NFT721Proxy',
  display_name: 'NFT721 Region Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xd55f733f3ec9ae1f4eadee1c04bd2d18707f53db',
  created_at: 1728624454,
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