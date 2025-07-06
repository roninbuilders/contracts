import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35328,
  address: '0x3012e9049d05b4b5369d690114d5a5861ebb85cb' as const,
  contract_name: 'SwapRouter',
  display_name: 'Swap Router',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1749134344,
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
    "stateMutability": "nonpayable",
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
        "name": "_data"
      }
    ],
    "outputs": []
  },
  {
    "name": "exactInput",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "bytes",
            "name": "path"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "uint256",
            "name": "amountIn"
          },
          {
            "type": "uint256",
            "name": "amountOutMinimum"
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
    "name": "exactInputSingle",
    "type": "function",
    "stateMutability": "payable",
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
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "uint256",
            "name": "amountIn"
          },
          {
            "type": "uint256",
            "name": "amountOutMinimum"
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
      }
    ]
  },
  {
    "name": "exactInputSingleSupportingFeeOnTransferTokens",
    "type": "function",
    "stateMutability": "payable",
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
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "uint256",
            "name": "amountIn"
          },
          {
            "type": "uint256",
            "name": "amountOutMinimum"
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
      }
    ]
  },
  {
    "name": "exactOutput",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "bytes",
            "name": "path"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "uint256",
            "name": "amountOut"
          },
          {
            "type": "uint256",
            "name": "amountInMaximum"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountIn"
      }
    ]
  },
  {
    "name": "exactOutputSingle",
    "type": "function",
    "stateMutability": "payable",
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
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "uint256",
            "name": "amountOut"
          },
          {
            "type": "uint256",
            "name": "amountInMaximum"
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
        "name": "amountIn"
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
    "name": "multicall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "results"
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
    "name": "refundNativeToken",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "selfPermit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "uint8",
        "name": "v"
      },
      {
        "type": "bytes32",
        "name": "r"
      },
      {
        "type": "bytes32",
        "name": "s"
      }
    ],
    "outputs": []
  },
  {
    "name": "selfPermitAllowed",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "expiry"
      },
      {
        "type": "uint8",
        "name": "v"
      },
      {
        "type": "bytes32",
        "name": "r"
      },
      {
        "type": "bytes32",
        "name": "s"
      }
    ],
    "outputs": []
  },
  {
    "name": "selfPermitAllowedIfNecessary",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "expiry"
      },
      {
        "type": "uint8",
        "name": "v"
      },
      {
        "type": "bytes32",
        "name": "r"
      },
      {
        "type": "bytes32",
        "name": "s"
      }
    ],
    "outputs": []
  },
  {
    "name": "selfPermitIfNecessary",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "uint8",
        "name": "v"
      },
      {
        "type": "bytes32",
        "name": "r"
      },
      {
        "type": "bytes32",
        "name": "s"
      }
    ],
    "outputs": []
  },
  {
    "name": "sweepToken",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amountMinimum"
      },
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "sweepTokenWithFee",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amountMinimum"
      },
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "feeBips"
      },
      {
        "type": "address",
        "name": "feeRecipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "unwrapWNativeToken",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountMinimum"
      },
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "unwrapWNativeTokenWithFee",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountMinimum"
      },
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "feeBips"
      },
      {
        "type": "address",
        "name": "feeRecipient"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract