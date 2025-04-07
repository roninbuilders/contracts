import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 192,
  address: '0x7d0556d55ca1a92708681e2e231733ebd922597d' as const,
  contract_name: 'KatanaRouter',
  display_name: 'Katana Router',
  is_deprecated: true,
  is_proxy: false,
  proxy_to: false,
  created_at: 1635154971,
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
        "name": "_WRON"
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
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
        "name": "_tokenA"
      },
      {
        "type": "address",
        "name": "_tokenB"
      },
      {
        "type": "uint256",
        "name": "_amountADesired"
      },
      {
        "type": "uint256",
        "name": "_amountBDesired"
      },
      {
        "type": "uint256",
        "name": "_amountAMin"
      },
      {
        "type": "uint256",
        "name": "_amountBMin"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amountA"
      },
      {
        "type": "uint256",
        "name": "_amountB"
      },
      {
        "type": "uint256",
        "name": "_liquidity"
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
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_amountTokenDesired"
      },
      {
        "type": "uint256",
        "name": "_amountTokenMin"
      },
      {
        "type": "uint256",
        "name": "_amountRONMin"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amountToken"
      },
      {
        "type": "uint256",
        "name": "_amountRON"
      },
      {
        "type": "uint256",
        "name": "_liquidity"
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
        "name": "_amountOut"
      },
      {
        "type": "uint256",
        "name": "_reserveIn"
      },
      {
        "type": "uint256",
        "name": "_reserveOut"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amountIn"
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
        "name": "_amountIn"
      },
      {
        "type": "uint256",
        "name": "_reserveIn"
      },
      {
        "type": "uint256",
        "name": "_reserveOut"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amountOut"
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
        "name": "_amountOut"
      },
      {
        "type": "address[]",
        "name": "_path"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_amounts"
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
        "name": "_amountIn"
      },
      {
        "type": "address[]",
        "name": "_path"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_amounts"
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
        "name": "_amountA"
      },
      {
        "type": "uint256",
        "name": "_reserveA"
      },
      {
        "type": "uint256",
        "name": "_reserveB"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amountB"
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
        "name": "_tokenA"
      },
      {
        "type": "address",
        "name": "_tokenB"
      },
      {
        "type": "uint256",
        "name": "_liquidity"
      },
      {
        "type": "uint256",
        "name": "_amountAMin"
      },
      {
        "type": "uint256",
        "name": "_amountBMin"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amountA"
      },
      {
        "type": "uint256",
        "name": "_amountB"
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
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_liquidity"
      },
      {
        "type": "uint256",
        "name": "_amountTokenMin"
      },
      {
        "type": "uint256",
        "name": "_amountRONMin"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amountToken"
      },
      {
        "type": "uint256",
        "name": "_amountRON"
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
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_liquidity"
      },
      {
        "type": "uint256",
        "name": "_amountTokenMin"
      },
      {
        "type": "uint256",
        "name": "_amountRONMin"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amountRON"
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
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_liquidity"
      },
      {
        "type": "uint256",
        "name": "_amountTokenMin"
      },
      {
        "type": "uint256",
        "name": "_amountRONMin"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      },
      {
        "type": "bool",
        "name": "_approveMax"
      },
      {
        "type": "uint8",
        "name": "_v"
      },
      {
        "type": "bytes32",
        "name": "_r"
      },
      {
        "type": "bytes32",
        "name": "_s"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amountToken"
      },
      {
        "type": "uint256",
        "name": "_amountRON"
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
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_liquidity"
      },
      {
        "type": "uint256",
        "name": "_amountTokenMin"
      },
      {
        "type": "uint256",
        "name": "_amountRONMin"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      },
      {
        "type": "bool",
        "name": "_approveMax"
      },
      {
        "type": "uint8",
        "name": "_v"
      },
      {
        "type": "bytes32",
        "name": "_r"
      },
      {
        "type": "bytes32",
        "name": "_s"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amountRON"
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
        "name": "_tokenA"
      },
      {
        "type": "address",
        "name": "_tokenB"
      },
      {
        "type": "uint256",
        "name": "_liquidity"
      },
      {
        "type": "uint256",
        "name": "_amountAMin"
      },
      {
        "type": "uint256",
        "name": "_amountBMin"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      },
      {
        "type": "bool",
        "name": "_approveMax"
      },
      {
        "type": "uint8",
        "name": "_v"
      },
      {
        "type": "bytes32",
        "name": "_r"
      },
      {
        "type": "bytes32",
        "name": "_s"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amountA"
      },
      {
        "type": "uint256",
        "name": "_amountB"
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
        "name": "_amountOutMin"
      },
      {
        "type": "address[]",
        "name": "_path"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_amounts"
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
        "name": "_amountOutMin"
      },
      {
        "type": "address[]",
        "name": "_path"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
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
        "name": "_amountIn"
      },
      {
        "type": "uint256",
        "name": "_amountOutMin"
      },
      {
        "type": "address[]",
        "name": "_path"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_amounts"
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
        "name": "_amountIn"
      },
      {
        "type": "uint256",
        "name": "_amountOutMin"
      },
      {
        "type": "address[]",
        "name": "_path"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
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
        "name": "_amountIn"
      },
      {
        "type": "uint256",
        "name": "_amountOutMin"
      },
      {
        "type": "address[]",
        "name": "_path"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_amounts"
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
        "name": "_amountIn"
      },
      {
        "type": "uint256",
        "name": "_amountOutMin"
      },
      {
        "type": "address[]",
        "name": "_path"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
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
        "name": "_amountOut"
      },
      {
        "type": "address[]",
        "name": "_path"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_amounts"
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
        "name": "_amountOut"
      },
      {
        "type": "uint256",
        "name": "_amountInMax"
      },
      {
        "type": "address[]",
        "name": "_path"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_amounts"
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
        "name": "_amountOut"
      },
      {
        "type": "uint256",
        "name": "_amountInMax"
      },
      {
        "type": "address[]",
        "name": "_path"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_amounts"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract