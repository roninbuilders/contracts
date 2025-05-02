import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 32933,
  address: '0xaff14ba13c3276c9f8efd5b82a74b5070e8f9afa' as const,
  contract_name: 'HunterFactoryV3',
  display_name: 'Hunter Factory V3',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744226441,
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
    "name": "wron",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract