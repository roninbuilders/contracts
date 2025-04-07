import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25725,
  address: '0x669d612930cfa5d43c1f064d5f398ab5431173ee' as const,
  contract_name: 'HistoryManager',
  display_name: 'History Manager',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739971351,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "manager_"
      }
    ]
  },
  {
    "name": "addData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "GAME_ID"
      },
      {
        "type": "uint256",
        "name": "gameId"
      }
    ],
    "outputs": []
  },
  {
    "name": "gameNonce",
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
    "name": "games",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "GAME_ID"
      },
      {
        "type": "uint256",
        "name": "gameId"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "gamesForUser",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
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
    "name": "getGameData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "ids"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "GAME_IDs"
      },
      {
        "type": "uint256[]",
        "name": "gameIds"
      },
      {
        "type": "uint256[]",
        "name": "timestamps"
      }
    ]
  },
  {
    "name": "getGameIDsForUser",
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
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getMostRecentGames",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "numGames"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "GAME_IDs"
      },
      {
        "type": "uint256[]",
        "name": "gameIds"
      },
      {
        "type": "uint256[]",
        "name": "timestamps"
      }
    ]
  },
  {
    "name": "getMostRecentGamesForUser",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "numGames"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "GAME_IDs"
      },
      {
        "type": "uint256[]",
        "name": "gameIds"
      },
      {
        "type": "uint256[]",
        "name": "timestamps"
      }
    ]
  },
  {
    "name": "getNumberOfGamesPlayed",
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
    "name": "getUserData",
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
        "type": "uint256[]",
        "name": "GAME_IDs"
      },
      {
        "type": "uint256[]",
        "name": "gameIds"
      },
      {
        "type": "uint256[]",
        "name": "timestamps"
      }
    ]
  },
  {
    "name": "getUserDataPaginated",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "start"
      },
      {
        "type": "uint256",
        "name": "end"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "GAME_IDs"
      },
      {
        "type": "uint256[]",
        "name": "gameIds"
      },
      {
        "type": "uint256[]",
        "name": "timestamps"
      }
    ]
  },
  {
    "name": "manager",
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