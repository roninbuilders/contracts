import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34250,
  address: '0x9def6f31f1368418d608f2524ef3cc945cb76a8c' as const,
  contract_name: 'Swapper',
  display_name: 'Swapper',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1745794968,
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