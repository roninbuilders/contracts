import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5423,
  address: '0x03affae7e23fd11c85d0c90cc40510994d49e175' as const,
  contract_name: 'WildForestToken',
  display_name: 'Wild Forest Token',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1733242116,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "initialSupply"
      },
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "symbol"
      },
      {
        "type": "address",
        "name": "ownerAddress"
      }
    ]
  },
  {
    "name": "Approval",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "spender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "Transfer",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "allowance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "spender"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "approve",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
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
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "burn",
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
    "name": "decimals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "decreaseAllowance",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "subtractedValue"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "increaseAllowance",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "addedValue"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "name",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "symbol",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "totalSupply",
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
    "name": "transfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
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
    "name": "transferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract