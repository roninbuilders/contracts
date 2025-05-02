import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27471,
  address: '0x92d95028e1f51f6c742bc56bb6bcde83432bcd52' as const,
  contract_name: 'TicTacToe',
  display_name: 'Tic Tac Toe',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1741801539,
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
    "name": "FeesWithdrawn",
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
    "name": "GameCreated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "gameSessionHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "creator",
        "indexed": true
      }
    ]
  },
  {
    "name": "GameDraw",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "gameSessionHash",
        "indexed": true
      }
    ]
  },
  {
    "name": "GameJoined",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "gameSessionHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "opponent",
        "indexed": true
      }
    ]
  },
  {
    "name": "GameWon",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "gameSessionHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "winner",
        "indexed": true
      }
    ]
  },
  {
    "name": "MoveMade",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "gameSessionHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "position"
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
    "name": "RewardClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "gameSessionHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "claimer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "DRAW_FEE_PERCENT",
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
    "name": "INACTIVITY_DURATION",
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
    "name": "MAX_REWARD",
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
    "name": "MOVE_COST",
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
    "name": "WIN_FEE_PERCENT",
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
    "name": "abandonGame",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "gameSessionHash"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimReward",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "gameSessionHash"
      }
    ],
    "outputs": []
  },
  {
    "name": "createGame",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "feeBalance",
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
    "name": "gameSessions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "address",
        "name": "opponent"
      },
      {
        "type": "address",
        "name": "currentTurn"
      },
      {
        "type": "address",
        "name": "winner"
      },
      {
        "type": "uint256",
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "lastMoveTime"
      },
      {
        "type": "uint256",
        "name": "totalFees"
      },
      {
        "type": "uint8",
        "name": "state"
      }
    ]
  },
  {
    "name": "getBoard",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "gameSessionHash"
      }
    ],
    "outputs": [
      {
        "type": "uint8[9]"
      }
    ]
  },
  {
    "name": "getGameDetails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "gameSessionHash"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "address",
        "name": "opponent"
      },
      {
        "type": "address",
        "name": "currentTurn"
      },
      {
        "type": "uint256",
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "lastMoveTime"
      },
      {
        "type": "uint8",
        "name": "state"
      }
    ]
  },
  {
    "name": "joinGame",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "gameSessionHash"
      }
    ],
    "outputs": []
  },
  {
    "name": "makeMove",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "gameSessionHash"
      },
      {
        "type": "uint256",
        "name": "position"
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
    "name": "playerActiveGame",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
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
    "name": "withdrawAllFunds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawFees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract