import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5251,
  address: '0x84ab2f9fdc4bf66312b0819d879437b8749efdf2' as const,
  contract_name: 'QuoterV2',
  display_name: 'Quoter V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1732163872,
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
    "name": "governance",
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
    "name": "katanaV3SwapCallback",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "int256",
        "name": "amount0Delta"
      },
      {
        "type": "int256",
        "name": "amount1Delta"
      },
      {
        "type": "bytes",
        "name": "path"
      }
    ],
    "outputs": []
  },
  {
    "name": "quoteExactInput",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "path"
      },
      {
        "type": "uint256",
        "name": "amountIn"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountOut"
      },
      {
        "type": "uint160[]",
        "name": "sqrtPriceX96AfterList"
      },
      {
        "type": "uint32[]",
        "name": "initializedTicksCrossedList"
      },
      {
        "type": "uint256",
        "name": "gasEstimate"
      }
    ]
  },
  {
    "name": "quoteExactInputSingle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "tokenIn"
          },
          {
            "type": "address",
            "name": "tokenOut"
          },
          {
            "type": "uint256",
            "name": "amountIn"
          },
          {
            "type": "uint24",
            "name": "fee"
          },
          {
            "type": "uint160",
            "name": "sqrtPriceLimitX96"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountOut"
      },
      {
        "type": "uint160",
        "name": "sqrtPriceX96After"
      },
      {
        "type": "uint32",
        "name": "initializedTicksCrossed"
      },
      {
        "type": "uint256",
        "name": "gasEstimate"
      }
    ]
  },
  {
    "name": "quoteExactOutput",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "path"
      },
      {
        "type": "uint256",
        "name": "amountOut"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountIn"
      },
      {
        "type": "uint160[]",
        "name": "sqrtPriceX96AfterList"
      },
      {
        "type": "uint32[]",
        "name": "initializedTicksCrossedList"
      },
      {
        "type": "uint256",
        "name": "gasEstimate"
      }
    ]
  },
  {
    "name": "quoteExactOutputSingle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "tokenIn"
          },
          {
            "type": "address",
            "name": "tokenOut"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint24",
            "name": "fee"
          },
          {
            "type": "uint160",
            "name": "sqrtPriceLimitX96"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountIn"
      },
      {
        "type": "uint160",
        "name": "sqrtPriceX96After"
      },
      {
        "type": "uint32",
        "name": "initializedTicksCrossed"
      },
      {
        "type": "uint256",
        "name": "gasEstimate"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract