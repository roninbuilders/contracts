import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36048,
  address: '0xfa49223107ad26c7a91957f2c5b239bc5d02c153' as const,
  contract_name: 'Quoter',
  display_name: 'Quoter',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751631535,
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
        "name": "amountIn"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountOut"
      },
      {
        "type": "uint16[]",
        "name": "fees"
      }
    ]
  },
  {
    "name": "quoteExactInputSingle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
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
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountOut"
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
        "name": "amountOut"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountIn"
      },
      {
        "type": "uint16[]",
        "name": "fees"
      }
    ]
  },
  {
    "name": "quoteExactOutputSingle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
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
        "name": "amountOut"
      },
      {
        "type": "uint160",
        "name": "limitSqrtPrice"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountIn"
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