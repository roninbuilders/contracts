import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4250,
  address: '0xab46619e072e88e30fc29f9bcdaa11ad4fe7df98' as const,
  contract_name: 'MultiRead',
  display_name: 'Multi Read',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1727286620,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "initialTokens"
      }
    ]
  },
  {
    "name": "OwnerSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldOwner",
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
    "name": "addErc20Token",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "getBalances",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "wallets"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "nativeBalances"
      },
      {
        "type": "uint256[][]",
        "name": "tokenBalances"
      }
    ]
  },
  {
    "name": "getErc20TokenList",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getOwner",
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
    "name": "removeErc20Token",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddr"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract