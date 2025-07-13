import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34984,
  address: '0x28f00a74abc34160be1268e4b32a88b1d6b5c535' as const,
  contract_name: 'KatanaPoolOptimalSwapper',
  display_name: 'Katana Pool Optimal Swapper',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1747984785,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_router"
      }
    ]
  },
  {
    "name": "ApproveFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Invalid_Tick_Range",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SafeERC20FailedOperation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "getOptimalSwapAmounts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "pool"
      },
      {
        "type": "uint256",
        "name": "amount0Desired"
      },
      {
        "type": "uint256",
        "name": "amount1Desired"
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
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount0"
      },
      {
        "type": "uint256",
        "name": "amount1"
      }
    ]
  },
  {
    "name": "optimalSwap",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "pool"
          },
          {
            "type": "uint256",
            "name": "amount0Desired"
          },
          {
            "type": "uint256",
            "name": "amount1Desired"
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
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount0"
      },
      {
        "type": "uint256",
        "name": "amount1"
      }
    ]
  },
  {
    "name": "poolSwap",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "pool"
      },
      {
        "type": "uint256",
        "name": "amountIn"
      },
      {
        "type": "bool",
        "name": "zeroForOne"
      },
      {
        "type": "uint256",
        "name": "amountOutMin"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountOut"
      },
      {
        "type": "uint256",
        "name": "amountInUsed"
      }
    ]
  },
  {
    "name": "router",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract