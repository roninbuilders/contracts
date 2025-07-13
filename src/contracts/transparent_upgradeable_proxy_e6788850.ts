import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36041,
  address: '0xef181ea0d1223cfee104439213af3f1be6788850' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Transparent Upgradeable Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xfd4d18867d21cd0b0db5918cef1a3fea55d7d317',
  created_at: 1751631574,
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
        "type": "address",
        "name": "admin_"
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