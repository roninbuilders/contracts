import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 32402,
  address: '0xc63cca6e3cf565921d3c8241f74ef7b1e404bb78' as const,
  contract_name: 'SwapRouter02',
  display_name: 'Swap Router 02',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1743635531,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_factoryV2"
      },
      {
        "type": "address",
        "name": "factoryV3"
      },
      {
        "type": "address",
        "name": "_positionManager"
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
    "name": "approveMax",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": []
  },
  {
    "name": "approveMaxMinusOne",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": []
  },
  {
    "name": "approveZeroThenMax",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": []
  },
  {
    "name": "approveZeroThenMaxMinusOne",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": []
  },
  {
    "name": "callPositionManager",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "result"
      }
    ]
  },
  {
    "name": "checkOracleSlippage",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "paths"
      },
      {
        "type": "uint128[]",
        "name": "amounts"
      },
      {
        "type": "uint24",
        "name": "maximumTickDivergence"
      },
      {
        "type": "uint32",
        "name": "secondsAgo"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkOracleSlippage",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes",
        "name": "path"
      },
      {
        "type": "uint24",
        "name": "maximumTickDivergence"
      },
      {
        "type": "uint32",
        "name": "secondsAgo"
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
            "type": "uint24",
            "name": "fee"
          },
          {
            "type": "address",
            "name": "recipient"
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
            "name": "sqrtPriceLimitX96"
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
            "type": "uint24",
            "name": "fee"
          },
          {
            "type": "address",
            "name": "recipient"
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
            "name": "sqrtPriceLimitX96"
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
    "name": "getApprovalType",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "increaseLiquidity",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "token0"
          },
          {
            "type": "address",
            "name": "token1"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount0Min"
          },
          {
            "type": "uint256",
            "name": "amount1Min"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "result"
      }
    ]
  },
  {
    "name": "mint",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "token0"
          },
          {
            "type": "address",
            "name": "token1"
          },
          {
            "type": "uint24",
            "name": "fee"
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
            "name": "amount0Min"
          },
          {
            "type": "uint256",
            "name": "amount1Min"
          },
          {
            "type": "address",
            "name": "recipient"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "result"
      }
    ]
  },
  {
    "name": "multicall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "previousBlockhash"
      },
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]"
      }
    ]
  },
  {
    "name": "multicall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]"
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
    "name": "positionManager",
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
    "name": "pull",
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
      }
    ],
    "outputs": []
  },
  {
    "name": "refundETH",
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
    "name": "swapExactTokensForTokens",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
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
    "name": "swapTokensForExactTokens",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountOut"
      },
      {
        "type": "uint256",
        "name": "amountInMax"
      },
      {
        "type": "address[]",
        "name": "path"
      },
      {
        "type": "address",
        "name": "to"
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
    "name": "uniswapV3SwapCallback",
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
    "name": "unwrapWETH9",
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
    "name": "unwrapWETH9",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountMinimum"
      }
    ],
    "outputs": []
  },
  {
    "name": "unwrapWETH9WithFee",
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
    "name": "unwrapWETH9WithFee",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountMinimum"
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
    "name": "wrapETH",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "value"
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