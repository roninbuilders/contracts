import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36040,
  address: '0xd4ba86fbf231ecbc99d99cd74c998c5f73d4d641' as const,
  contract_name: 'QuoterV2',
  display_name: 'Quoter V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751631541,
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
        "name": "_WNativeToken"
      },
      {
        "type": "address",
        "name": "_poolDeployer"
      }
    ]
  },
  {
    "name": "WNativeToken",
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
    "name": "algebraSwapCallback",
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
    "name": "poolDeployer",
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
        "name": "amountInRequired"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "amountOutList"
      },
      {
        "type": "uint256[]",
        "name": "amountInList"
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
      },
      {
        "type": "uint16[]",
        "name": "feeList"
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
            "type": "address",
            "name": "deployer"
          },
          {
            "type": "uint256",
            "name": "amountIn"
          },
          {
            "type": "uint160",
            "name": "limitSqrtPrice"
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
      },
      {
        "type": "uint16",
        "name": "fee"
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
        "name": "amountOutRequired"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "amountOutList"
      },
      {
        "type": "uint256[]",
        "name": "amountInList"
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
      },
      {
        "type": "uint16[]",
        "name": "feeList"
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
            "type": "address",
            "name": "deployer"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint160",
            "name": "limitSqrtPrice"
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
      },
      {
        "type": "uint16",
        "name": "fee"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract