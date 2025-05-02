import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 32981,
  address: '0x9293821b913e3b67f2ac6ab9f98780c8813887cd' as const,
  contract_name: 'Hunter',
  display_name: 'Hunter',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744251884,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_wron"
      },
      {
        "type": "address",
        "name": "_katanaRouter"
      },
      {
        "type": "address",
        "name": "_hunterBank"
      }
    ]
  },
  {
    "name": "HUNTER_BANK",
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
    "name": "KATANA_ROUTER",
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
    "name": "MAX_FEE_PERCENTAGE",
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
    "name": "MIN_DEPOSITORS",
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
    "name": "SWAP_DEADLINE_BUFFER",
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
    "name": "claim",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "secret"
      },
      {
        "type": "address",
        "name": "destination"
      },
      {
        "type": "uint256",
        "name": "claimPercentage"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimRandom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "secret"
      },
      {
        "type": "address",
        "name": "destination"
      },
      {
        "type": "uint256",
        "name": "claimPercentage"
      }
    ],
    "outputs": []
  },
  {
    "name": "depositorCount",
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
    "name": "getDeposit",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "secret"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "hunterContract"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "bool",
        "name": "swap"
      },
      {
        "type": "address",
        "name": "tokenToSwapTo"
      }
    ]
  },
  {
    "name": "hunterBank",
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
    "name": "mix",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "feePercentage"
      },
      {
        "type": "string",
        "name": "secret"
      },
      {
        "type": "bool",
        "name": "swap"
      },
      {
        "type": "address",
        "name": "tokenToSwapTo"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
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
    "name": "transferDeposit",
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
      },
      {
        "type": "address",
        "name": "destination"
      },
      {
        "type": "bool",
        "name": "swap"
      },
      {
        "type": "address",
        "name": "tokenToSwapTo"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawFees",
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
    "name": "wron",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract