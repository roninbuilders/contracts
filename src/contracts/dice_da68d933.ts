import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35365,
  address: '0x7ffc1a5798880ebd18016918fe49eeb3da68d933' as const,
  contract_name: 'Dice',
  display_name: 'Dice',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1748883757,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "OwnableInvalidOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "OwnableUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BetResult",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "gameType"
      },
      {
        "type": "uint8",
        "name": "guess"
      },
      {
        "type": "uint8",
        "name": "result"
      },
      {
        "type": "bool",
        "name": "win"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "reward"
      },
      {
        "type": "string",
        "name": "betId"
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
    "name": "RONDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "FEE_PERCENT",
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
    "name": "betExact",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint8",
        "name": "guess"
      },
      {
        "type": "string",
        "name": "betId"
      }
    ],
    "outputs": []
  },
  {
    "name": "betOddEven",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint8",
        "name": "guess"
      },
      {
        "type": "string",
        "name": "betId"
      }
    ],
    "outputs": []
  },
  {
    "name": "betTwoNumbers",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint8",
        "name": "guess"
      },
      {
        "type": "string",
        "name": "betId"
      }
    ],
    "outputs": []
  },
  {
    "name": "deposit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "maxBetAmount",
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
    "name": "minBetAmount",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setMaxBetAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMax"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinBetAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMin"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdraw",
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
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract