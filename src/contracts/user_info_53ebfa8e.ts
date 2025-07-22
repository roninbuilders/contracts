import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36274,
  address: '0x02ae38e5b2873cb50b4a03d780c62b1453ebfa8e' as const,
  contract_name: 'UserInfo',
  display_name: 'User Info',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753073686,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "name_"
      },
      {
        "type": "string",
        "name": "symbol_"
      },
      {
        "type": "address",
        "name": "_viewerImp"
      },
      {
        "type": "address",
        "name": "oldUserInfo_"
      },
      {
        "type": "address",
        "name": "manager_"
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
    "name": "allTokenViewers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "allUsers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address"
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
        "name": "_totalWagered"
      },
      {
        "type": "uint256[]",
        "name": "numGamesPlayed"
      }
    ]
  },
  {
    "name": "batchGameDataToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
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
        "name": "_totalWagered"
      },
      {
        "type": "uint256[]",
        "name": "numGamesPlayed"
      }
    ]
  },
  {
    "name": "createViewer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "viewer"
      }
    ]
  },
  {
    "name": "decimals",
    "type": "function",
    "stateMutability": "pure",
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
        "name": "_totalWagered"
      },
      {
        "type": "uint256",
        "name": "numGamesPlayed"
      }
    ]
  },
  {
    "name": "getGameDataToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
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
        "name": "_totalWagered"
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
    "name": "getListOfTotalWageredByProjectToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
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
        "type": "uint256",
        "name": "startIndex"
      },
      {
        "type": "uint256",
        "name": "endIndex"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getListOfTotalWageredPaginatedToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "startIndex"
      },
      {
        "type": "uint256",
        "name": "endIndex"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getListOfTotalWageredToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
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
    "name": "getTokenTotalWagered",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getTokenTotalWageredForUser",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
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
    "name": "initOldUserInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "listAllUsers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
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
    "name": "paginateAllUsers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "startIndex"
      },
      {
        "type": "uint256",
        "name": "endIndex"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "setViewerImplementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      }
    ],
    "outputs": []
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
    "name": "tokenToViewer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "totalNativeWagered",
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
    "name": "totalUsers",
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
    "name": "totalWagered",
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
    "name": "totalWagersPlaced",
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
    "name": "viewerImplementation",
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
        "type": "address",
        "name": "token"
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