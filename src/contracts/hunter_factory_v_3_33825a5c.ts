import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 32894,
  address: '0xc4c4809a03fe25736973cc9510591fcc33825a5c' as const,
  contract_name: 'HunterFactoryV3',
  display_name: 'Hunter Factory V3',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744201994,
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