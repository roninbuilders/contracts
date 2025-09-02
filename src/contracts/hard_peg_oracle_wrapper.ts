import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36736,
  address: '0xe38f8bceb6f8794e2b025ded1e923f30b58361b3' as const,
  contract_name: 'HardPegOracleWrapper',
  display_name: 'Hard Peg Oracle Wrapper',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1754448588,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_baseCurrency"
      },
      {
        "type": "uint256",
        "name": "_baseCurrencyUnit"
      },
      {
        "type": "uint256",
        "name": "_pricePeg"
      }
    ]
  },
  {
    "name": "BASE_CURRENCY",
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
    "name": "BASE_CURRENCY_UNIT",
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
    "name": "getAssetPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPriceInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "bool",
        "name": "isAlive"
      }
    ]
  },
  {
    "name": "pricePeg",
    "type": "function",
    "stateMutability": "view",
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