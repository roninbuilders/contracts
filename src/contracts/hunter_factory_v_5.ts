import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 32957,
  address: '0x7ae7e1092332c3028dadb72dff140cb1c30a6d39' as const,
  contract_name: 'HunterFactoryV5',
  display_name: 'Hunter Factory V5',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744237335,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_wron"
      },
      {
        "type": "address",
        "name": "_katanaRouter"
      }
    ]
  },
  {
    "name": "FeesWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "hunterTrophy",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalAmount"
      }
    ]
  },
  {
    "name": "HuntersInitialized",
    "type": "event",
    "inputs": [
      {
        "type": "address[5]",
        "name": "hunters"
      }
    ]
  },
  {
    "name": "getHunterTrophy",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getHunters",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[5]"
      }
    ]
  },
  {
    "name": "hunterTrophy",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "hunters",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "initializeHunters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "initialized",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "katanaRouter",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "withdrawFees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "wron",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract