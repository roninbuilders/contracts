import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2564,
  address: '0xc05afc8c9353c1dd5f872eccfacd60fd5a2a9ac7' as const,
  contract_name: 'PermissionedRouter',
  display_name: 'Permissioned Router',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1716265946,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "factory_"
      },
      {
        "type": "address",
        "name": "wron_"
      }
    ]
  },
  {
    "name": "WRON",
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
    "name": "addLiquidity",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenA"
      },
      {
        "type": "address",
        "name": "tokenB"
      },
      {
        "type": "uint256",
        "name": "amountADesired"
      },
      {
        "type": "uint256",
        "name": "amountBDesired"
      },
      {
        "type": "uint256",
        "name": "amountAMin"
      },
      {
        "type": "uint256",
        "name": "amountBMin"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountA"
      },
      {
        "type": "uint256",
        "name": "amountB"
      },
      {
        "type": "uint256",
        "name": "liquidity"
      }
    ]
  },
  {
    "name": "addLiquidityRON",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amountTokenDesired"
      },
      {
        "type": "uint256",
        "name": "amountTokenMin"
      },
      {
        "type": "uint256",
        "name": "amountRONMin"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountToken"
      },
      {
        "type": "uint256",
        "name": "amountRON"
      },
      {
        "type": "uint256",
        "name": "liquidity"
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
    "name": "getAmountIn",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountOut"
      },
      {
        "type": "uint256",
        "name": "reserveIn"
      },
      {
        "type": "uint256",
        "name": "reserveOut"
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
    "name": "getAmountOut",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountIn"
      },
      {
        "type": "uint256",
        "name": "reserveIn"
      },
      {
        "type": "uint256",
        "name": "reserveOut"
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
    "name": "getAmountsIn",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountOut"
      },
      {
        "type": "address[]",
        "name": "path"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "getAmountsOut",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountIn"
      },
      {
        "type": "address[]",
        "name": "path"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "getGovernance",
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
    "name": "quote",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountA"
      },
      {
        "type": "uint256",
        "name": "reserveA"
      },
      {
        "type": "uint256",
        "name": "reserveB"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountB"
      }
    ]
  },
  {
    "name": "removeLiquidity",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenA"
      },
      {
        "type": "address",
        "name": "tokenB"
      },
      {
        "type": "uint256",
        "name": "liquidity"
      },
      {
        "type": "uint256",
        "name": "amountAMin"
      },
      {
        "type": "uint256",
        "name": "amountBMin"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountA"
      },
      {
        "type": "uint256",
        "name": "amountB"
      }
    ]
  },
  {
    "name": "removeLiquidityRON",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "liquidity"
      },
      {
        "type": "uint256",
        "name": "amountTokenMin"
      },
      {
        "type": "uint256",
        "name": "amountRONMin"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountToken"
      },
      {
        "type": "uint256",
        "name": "amountRON"
      }
    ]
  },
  {
    "name": "removeLiquidityRONSupportingFeeOnTransferTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "liquidity"
      },
      {
        "type": "uint256",
        "name": "amountTokenMin"
      },
      {
        "type": "uint256",
        "name": "amountRONMin"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountRON"
      }
    ]
  },
  {
    "name": "removeLiquidityRONWithPermit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "liquidity"
      },
      {
        "type": "uint256",
        "name": "amountTokenMin"
      },
      {
        "type": "uint256",
        "name": "amountRONMin"
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
        "type": "bool",
        "name": "approveMax"
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
    "outputs": [
      {
        "type": "uint256",
        "name": "amountToken"
      },
      {
        "type": "uint256",
        "name": "amountRON"
      }
    ]
  },
  {
    "name": "removeLiquidityRONWithPermitSupportingFeeOnTransferTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "liquidity"
      },
      {
        "type": "uint256",
        "name": "amountTokenMin"
      },
      {
        "type": "uint256",
        "name": "amountRONMin"
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
        "type": "bool",
        "name": "approveMax"
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
    "outputs": [
      {
        "type": "uint256",
        "name": "amountRON"
      }
    ]
  },
  {
    "name": "removeLiquidityWithPermit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenA"
      },
      {
        "type": "address",
        "name": "tokenB"
      },
      {
        "type": "uint256",
        "name": "liquidity"
      },
      {
        "type": "uint256",
        "name": "amountAMin"
      },
      {
        "type": "uint256",
        "name": "amountBMin"
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
        "type": "bool",
        "name": "approveMax"
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
    "outputs": [
      {
        "type": "uint256",
        "name": "amountA"
      },
      {
        "type": "uint256",
        "name": "amountB"
      }
    ]
  },
  {
    "name": "swapExactRONForTokens",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
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
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "swapExactRONForTokensSupportingFeeOnTransferTokens",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
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
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "swapExactTokensForRONSupportingFeeOnTransferTokens",
    "type": "function",
    "stateMutability": "nonpayable",
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
      },
      {
        "type": "uint256",
        "name": "deadline"
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
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    "type": "function",
    "stateMutability": "nonpayable",
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
      },
      {
        "type": "uint256",
        "name": "deadline"
      }
    ],
    "outputs": []
  },
  {
    "name": "swapRONForExactTokens",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountOut"
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
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "swapTokensForExactRON",
    "type": "function",
    "stateMutability": "nonpayable",
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
      },
      {
        "type": "uint256",
        "name": "deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "swapTokensForExactTokens",
    "type": "function",
    "stateMutability": "nonpayable",
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
      },
      {
        "type": "uint256",
        "name": "deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract