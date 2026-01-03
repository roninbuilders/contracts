import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4510,
  address: '0x4b2612de90a3cdadf8020dc17d4b692df1e1f705' as const,
  contract_name: 'MGold20WalletProxy',
  display_name: 'M Gold 20 Wallet Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x26b0eff73d3cb9ac478d0f20011dcacba4274f40',
  created_at: 1728626464,
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