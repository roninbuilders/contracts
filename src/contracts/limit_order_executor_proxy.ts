import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2982,
  address: '0xf07500fd3961d9993dd85ea4370331156e6f6c2e' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Limit Order Executor Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x9a6fce018ff8a52e852edd1064fe568c280d1697',
  created_at: 1718925401,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "address",
        "name": "admin_"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
      }
    ]
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
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
    "name": "marketSwapExactRONForTokensSupportingFee",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
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
            "type": "address",
            "name": "to"
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
            "type": "uint256",
            "name": "slippagePercent"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "marketSwapExactTokensForRONSupportingFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
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
            "type": "address",
            "name": "to"
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
            "type": "uint256",
            "name": "slippagePercent"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "marketSwapExactTokensForTokensSupportingFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
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
            "type": "address",
            "name": "to"
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
            "type": "uint256",
            "name": "slippagePercent"
          }
        ]
      }
    ],
    "outputs": []
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