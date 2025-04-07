import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2563,
  address: '0x77f96cf7b98b963fb8a9b84787806d396d953b2b' as const,
  contract_name: 'AffiliateRouter',
  display_name: 'Affiliate Router',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1716265937,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner_"
      },
      {
        "type": "address",
        "name": "affiliate"
      },
      {
        "type": "address",
        "name": "factory_"
      },
      {
        "type": "address",
        "name": "wron"
      }
    ]
  },
  {
    "name": "FeeTaken",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "taker",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "NewAffiliateInfo",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "affiliate",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "feeRatio",
        "indexed": true
      }
    ]
  },
  {
    "name": "OwnershipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true
      }
    ]
  },
  {
    "name": "DEFAULT_FEE_RATIO",
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
    "name": "MAX_PERCENTAGE",
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
    "name": "feeFraction",
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
    "name": "getAffiliate",
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
    "name": "owner",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setAffiliateInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "affiliate"
      },
      {
        "type": "uint256",
        "name": "feeRatio"
      }
    ],
    "outputs": []
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
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner_"
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