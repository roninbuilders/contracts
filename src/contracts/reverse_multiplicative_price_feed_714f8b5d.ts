import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 26007,
  address: '0xb2237b8f0690f7f8c7d03fe70da62213714f8b5d' as const,
  contract_name: 'ReverseMultiplicativePriceFeed',
  display_name: 'Reverse Multiplicative Price Feed',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1740703851,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "priceFeedA_"
      },
      {
        "type": "address",
        "name": "priceFeedB_"
      },
      {
        "type": "uint8",
        "name": "decimals_"
      },
      {
        "type": "string",
        "name": "description_"
      }
    ]
  },
  {
    "name": "BadDecimals",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInt256",
    "type": "error",
    "inputs": []
  },
  {
    "name": "VERSION",
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
    "name": "decimals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "description",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "latestRoundData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint80"
      },
      {
        "type": "int256"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint80"
      }
    ]
  },
  {
    "name": "priceFeedA",
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
    "name": "priceFeedAScale",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int256"
      }
    ]
  },
  {
    "name": "priceFeedB",
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
    "name": "priceFeedBScale",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int256"
      }
    ]
  },
  {
    "name": "priceFeedScale",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int256"
      }
    ]
  },
  {
    "name": "version",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract