import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36273,
  address: '0xed5951349e79a1165e7a1844bf4dfa090e75c767' as const,
  contract_name: 'TokenWagerViewer',
  display_name: 'Token Wager Viewer',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753073656,
  abi: [
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
    "name": "__init__",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token_"
      }
    ],
    "outputs": []
  },
  {
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "batchGameData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256[]",
        "name": "GAME_IDs"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "totalWagered"
      },
      {
        "type": "uint256[]",
        "name": "numGamesPlayed"
      }
    ]
  },
  {
    "name": "clone",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
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
    "name": "getGameData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "GAME_ID"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalWagered"
      },
      {
        "type": "uint256",
        "name": "numGamesPlayed"
      }
    ]
  },
  {
    "name": "getListOfTotalWagered",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "users"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getListOfTotalWageredByProject",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "projects"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getListOfTotalWageredPaginated",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "allUsers"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
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
    "name": "token",
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
    "name": "totalWageredForPartner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "wagered",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "GAME_ID"
      },
      {
        "type": "uint256",
        "name": "partnerId"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract