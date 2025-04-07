import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2981,
  address: '0x5c73c9e93ec2a05f0ddf3e301a1519435d25ce65' as const,
  contract_name: 'LimitOrderExecutor',
  display_name: 'Limit Order Executor',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1718925389,
  abi: [
  {
    "name": "AmountOutUnderLimit",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeeExceedsMaximum",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OrderExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Unauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "BaseTokenBalanceDecreased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "trader",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newBalance",
        "indexed": true
      }
    ]
  },
  {
    "name": "BaseTokenDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "trader",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newBalance",
        "indexed": true
      }
    ]
  },
  {
    "name": "BaseTokenFeeBalanceWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount",
        "indexed": true
      }
    ]
  },
  {
    "name": "BaseTokenWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "trader",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newBalance",
        "indexed": true
      }
    ]
  },
  {
    "name": "Erc20FeeBalanceWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": true
      }
    ]
  },
  {
    "name": "LimitOrderExecuted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "trader",
        "indexed": true
      },
      {
        "type": "address",
        "name": "tokenIn",
        "indexed": true
      },
      {
        "type": "address",
        "name": "tokenOut",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountIn"
      },
      {
        "type": "uint256",
        "name": "amountOut"
      },
      {
        "type": "uint256",
        "name": "feePercent"
      }
    ]
  },
  {
    "name": "OperatorAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      }
    ]
  },
  {
    "name": "OperatorRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      }
    ]
  },
  {
    "name": "RouterChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldRouter",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newRouter",
        "indexed": true
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "addOperator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      }
    ],
    "outputs": []
  },
  {
    "name": "approve",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": []
  },
  {
    "name": "depositBaseToken",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "getAdmin",
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
    "name": "getBaseTokenBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "trader"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getBaseTokenFeeBalance",
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
    "name": "getRouter",
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
    "name": "initializeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin_"
      }
    ],
    "outputs": []
  },
  {
    "name": "isOperator",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "removeOperator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      }
    ],
    "outputs": []
  },
  {
    "name": "setAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRouter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newRouter"
      },
      {
        "type": "address[]",
        "name": "tokensToRevoke"
      }
    ],
    "outputs": []
  },
  {
    "name": "swapExactRONForTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "address",
            "name": "trader"
          },
          {
            "type": "uint256",
            "name": "amountIn"
          },
          {
            "type": "uint256",
            "name": "amountOutMin"
          },
          {
            "type": "address[]",
            "name": "path"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "uint256",
            "name": "feePercent"
          },
          {
            "type": "bytes",
            "name": "signature"
          },
          {
            "type": "uint256",
            "name": "slippagePercent"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "swapExactTokensForRON",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "address",
            "name": "trader"
          },
          {
            "type": "uint256",
            "name": "amountIn"
          },
          {
            "type": "uint256",
            "name": "amountOutMin"
          },
          {
            "type": "address[]",
            "name": "path"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "uint256",
            "name": "feePercent"
          },
          {
            "type": "bytes",
            "name": "signature"
          },
          {
            "type": "uint256",
            "name": "slippagePercent"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "swapExactTokensForTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "address",
            "name": "trader"
          },
          {
            "type": "uint256",
            "name": "amountIn"
          },
          {
            "type": "uint256",
            "name": "amountOutMin"
          },
          {
            "type": "address[]",
            "name": "path"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "uint256",
            "name": "feePercent"
          },
          {
            "type": "bytes",
            "name": "signature"
          },
          {
            "type": "uint256",
            "name": "slippagePercent"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawBaseToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawBaseTokenFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawErc20Fee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
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