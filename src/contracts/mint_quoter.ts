import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35818,
  address: '0x868abd263b924e73f88ef361b53edbf3e68094cf' as const,
  contract_name: 'MintQuoter',
  display_name: 'Mint Quoter',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1750939256,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_factory"
      },
      {
        "type": "address",
        "name": "_WETH9"
      }
    ]
  },
  {
    "name": "WETH9",
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
    "name": "factory",
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
    "name": "quoteMint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token0"
      },
      {
        "type": "address",
        "name": "token1"
      },
      {
        "type": "int24",
        "name": "tickSpacing"
      },
      {
        "type": "int24",
        "name": "tickLower"
      },
      {
        "type": "int24",
        "name": "tickUpper"
      },
      {
        "type": "uint256",
        "name": "amount0"
      },
      {
        "type": "uint256",
        "name": "amount1"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount0Out"
      },
      {
        "type": "uint256",
        "name": "amount1Out"
      }
    ]
  },
  {
    "name": "uniswapV3MintCallback",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount0Owed"
      },
      {
        "type": "uint256",
        "name": "amount1Owed"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract