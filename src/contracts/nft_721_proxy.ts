import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4734,
  address: '0x72288a7f32bec9de4a42bd19a746b9e7798996bb' as const,
  contract_name: 'NFT721Proxy',
  display_name: 'NFT721 Region Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xdab32b8068f903b341c293782fe9a44948e2cb78',
  created_at: 1729522001,
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