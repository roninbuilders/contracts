import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3304,
  address: '0x865b23f0cdebadc7388ebce9258b7c2c1c384252' as const,
  contract_name: 'CoinBalance',
  display_name: 'Coin Balance',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1714838121,
  abi: [
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
    "name": "getTokensBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_sender"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "uint256[]",
        "name": "decimal"
      },
      {
        "type": "uint256[]",
        "name": "balance"
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
    "name": "setTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_tokens"
      }
    ],
    "outputs": []
  },
  {
    "name": "tokensMap",
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
    "name": "tokensMapSize",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
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