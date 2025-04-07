import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5252,
  address: '0xebdc1bb4df7627573a480bbeeb30e8919d21bc90' as const,
  contract_name: 'MixedRouteQuoterV1',
  display_name: 'Mixed Route Quoter V1',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1732163875,
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
        "name": "_factoryV2"
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
    "name": "factoryV2",
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
        "name": "v3SqrtPriceX96AfterList"
      },
      {
        "type": "uint32[]",
        "name": "v3InitializedTicksCrossedList"
      },
      {
        "type": "uint256",
        "name": "v3SwapGasEstimate"
      }
    ]
  },
  {
    "name": "quoteExactInputSingleV2",
    "type": "function",
    "stateMutability": "view",
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
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountOut"
      }
    ]
  },
  {
    "name": "quoteExactInputSingleV3",
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract