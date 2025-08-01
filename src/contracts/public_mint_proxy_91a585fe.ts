import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35684,
  address: '0x79cc74b0c9b67ac9b89aaab1f01d318691a585fe' as const,
  contract_name: 'PublicMintProxy',
  display_name: 'Public Mint Proxy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1750567840,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_clownstard"
      }
    ]
  },
  {
    "name": "PublicMint",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "minter",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "quantity"
      }
    ]
  },
  {
    "name": "MAX_SUPPLY",
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
    "name": "MINT_PRICE",
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
    "name": "clownstard",
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
    "name": "minted",
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
    "name": "publicMint",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "quantity"
      }
    ],
    "outputs": []
  },
  {
    "name": "totalSupply",
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
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract