import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 29637,
  address: '0xee08f099d4971817e8381867c944bc92876d680a' as const,
  contract_name: 'Tama',
  display_name: 'Tama',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1743261123,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_mainContract"
      }
    ]
  },
  {
    "name": "approveAndSellAllTokens",
    "type": "function",
    "stateMutability": "nonpayable",
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
    "name": "createApproveAndSellToken",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "symbol"
      },
      {
        "type": "string",
        "name": "description"
      },
      {
        "type": "string",
        "name": "extended"
      },
      {
        "type": "string",
        "name": "tokenUrlImage"
      },
      {
        "type": "bytes",
        "name": "referralCalldata"
      },
      {
        "type": "uint256",
        "name": "amountOutMin"
      },
      {
        "type": "uint256",
        "name": "deadline"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amountOut"
      }
    ]
  },
  {
    "name": "createToken",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "symbol"
      },
      {
        "type": "string",
        "name": "description"
      },
      {
        "type": "string",
        "name": "extended"
      },
      {
        "type": "string",
        "name": "tokenUrlImage"
      },
      {
        "type": "bytes",
        "name": "referralCalldata"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amountOut"
      }
    ]
  },
  {
    "name": "mainContract",
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
    "name": "withdrawERC20",
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
        "type": "bool"
      }
    ]
  },
  {
    "name": "withdrawRON",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract