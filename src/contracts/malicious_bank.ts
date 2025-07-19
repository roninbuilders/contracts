import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36216,
  address: '0x421d4b583f6efb6aef27b25deef769deba5b2681' as const,
  contract_name: 'MaliciousBank',
  display_name: 'Malicious Bank',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1752740751,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
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
  },
  {
    "name": "proxiableUUID",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "setOriginalAndEmitFakeUpgradeEvent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_original"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract