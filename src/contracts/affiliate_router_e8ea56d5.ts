import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 576,
  address: '0x7c645c35ab772be52a474b1e08414d55e8ea56d5' as const,
  contract_name: 'AffiliateRouter',
  display_name: 'Affiliate Router',
  is_deprecated: true,
  is_proxy: false,
  proxy_to: false,
  created_at: 1693995589,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_affiliate"
      },
      {
        "type": "address",
        "name": "_router"
      }
    ]
  },
  {
    "name": "ErrNonReentrancy",
    "type": "error",
    "inputs": []
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
    "type": "fallback",
    "stateMutability": "payable"
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
    "name": "affiliate",
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
    "name": "disableRouter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "exec",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_allowFail"
      },
      {
        "type": "address",
        "name": "_target"
      },
      {
        "type": "uint256",
        "name": "_value"
      },
      {
        "type": "bytes",
        "name": "_params"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "_returnOrRevertData"
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
    "name": "router",
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
    "name": "setAffiliateInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_affiliate"
      },
      {
        "type": "uint256",
        "name": "__feeRatio"
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
  },
  {
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
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