import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1142,
  address: '0x8975923d01132beb6c412f827f63d44712726e13' as const,
  contract_name: 'OwnedMulticaller',
  display_name: 'Owned Multicaller',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1699347565,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner_"
      }
    ]
  },
  {
    "name": "OwnershipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true
      }
    ]
  },
  {
    "name": "kill",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "multiMint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "rns"
      },
      {
        "type": "uint256",
        "name": "parentId"
      },
      {
        "type": "address",
        "name": "resolver"
      },
      {
        "type": "uint64",
        "name": "duration"
      },
      {
        "type": "address[]",
        "name": "tos"
      },
      {
        "type": "string[]",
        "name": "labels"
      }
    ],
    "outputs": []
  },
  {
    "name": "multicall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address[]",
        "name": "tos"
      },
      {
        "type": "bytes[]",
        "name": "callDatas"
      },
      {
        "type": "uint256[]",
        "name": "values"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "results"
      },
      {
        "type": "bytes[]",
        "name": "returnDatas"
      }
    ]
  },
  {
    "name": "owner",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract