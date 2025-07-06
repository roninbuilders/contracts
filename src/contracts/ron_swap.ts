import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34252,
  address: '0x90e88fc62d334113e6749a5f6078b440595798dd' as const,
  contract_name: 'RONSwap',
  display_name: 'RON Swap',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1745799321,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_katanaRouter"
      },
      {
        "type": "address",
        "name": "_tamaRouter"
      }
    ]
  },
  {
    "name": "BuyTokensWithETH",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountInRON"
      },
      {
        "type": "address",
        "name": "tokenOut"
      },
      {
        "type": "uint256",
        "name": "amountOut"
      }
    ]
  },
  {
    "name": "FeeCollected",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "payer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "feeAmount"
      }
    ]
  },
  {
    "name": "RescueRON",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "receiver",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "RescueToken",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "receiver",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "SellTokensForETH",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountInToken"
      },
      {
        "type": "address",
        "name": "tokenIn"
      },
      {
        "type": "uint256",
        "name": "amountOutRON"
      }
    ]
  },
  {
    "name": "SwapExactRONForTokens",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountInRON"
      },
      {
        "type": "address[]",
        "name": "path"
      },
      {
        "type": "uint256[]",
        "name": "amountsOut"
      }
    ]
  },
  {
    "name": "SwapExactTokensForRON",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountInToken"
      },
      {
        "type": "address[]",
        "name": "path"
      },
      {
        "type": "uint256[]",
        "name": "amountsOut"
      }
    ]
  },
  {
    "name": "approveToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "buyTokensWithETH",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amountOutMin"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes",
        "name": "referralCalldata"
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
    "name": "feeBasisPoints",
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
    "name": "feeReceiver",
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
    "name": "katanaRouter",
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
    "name": "rescueRON",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "sellTokensForETH",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
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
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes",
        "name": "referralCalldata"
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
    "name": "setFeeBasisPoints",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_feeBasisPoints"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFeeReceiver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_receiver"
      }
    ],
    "outputs": []
  },
  {
    "name": "swapExactRONForTokensKatana",
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
    "name": "swapExactTokensForRONKatana",
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
    "name": "tamaRouter",
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