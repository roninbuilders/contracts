import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36444,
  address: '0xb6abe8cd26f255245782a609089f8094885715fe' as const,
  contract_name: 'ClickTile',
  display_name: 'Click Tile',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753838309,
  abi: [
  {
    "name": "ECDSAInvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ECDSAInvalidSignatureLength",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "length"
      }
    ]
  },
  {
    "name": "ECDSAInvalidSignatureS",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "s"
      }
    ]
  },
  {
    "name": "GameAlreadyExists",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "preliminaryGameId"
      }
    ]
  },
  {
    "name": "GameDoesNotExist",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "onChainGameId"
      }
    ]
  },
  {
    "name": "GameNotActive",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "onChainGameId"
      }
    ]
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidServerSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotGamePlayer",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "onChainGameId"
      },
      {
        "type": "address",
        "name": "caller"
      }
    ]
  },
  {
    "name": "NotInitializing",
    "type": "error",
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
    "name": "PayoutFailed",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "onChainGameId"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AdminAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "AdminRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "removedAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "DepositReceived",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
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
        "type": "string",
        "name": "preliminaryGameId"
      },
      {
        "type": "uint256",
        "name": "onChainGameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "betAmount"
      },
      {
        "type": "bytes32",
        "name": "gameSeedHash"
      }
    ]
  },
  {
    "name": "GameStatusUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "onChainGameId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "status"
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "version"
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
    "name": "PayoutSent",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "onChainGameId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      }
    ]
  },
  {
    "name": "addAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "cashOut",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "onChainGameId"
      },
      {
        "type": "uint256",
        "name": "payoutAmount"
      },
      {
        "type": "string",
        "name": "gameState"
      },
      {
        "type": "string",
        "name": "gameSeed"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes",
        "name": "serverSignature"
      }
    ],
    "outputs": []
  },
  {
    "name": "createGame",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "preliminaryGameId"
      },
      {
        "type": "bytes32",
        "name": "gameSeedHash"
      },
      {
        "type": "string",
        "name": "algoVersion"
      },
      {
        "type": "string",
        "name": "gameConfig"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes",
        "name": "serverSignature"
      }
    ],
    "outputs": []
  },
  {
    "name": "gameCounter",
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
        "name": "createdAt"
      },
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint256",
        "name": "betAmount"
      },
      {
        "type": "uint8",
        "name": "status"
      },
      {
        "type": "uint256",
        "name": "payoutAmount"
      },
      {
        "type": "bytes32",
        "name": "gameSeedHash"
      },
      {
        "type": "string",
        "name": "gameSeed"
      },
      {
        "type": "string",
        "name": "algoVersion"
      },
      {
        "type": "string",
        "name": "gameConfig"
      },
      {
        "type": "string",
        "name": "gameState"
      }
    ]
  },
  {
    "name": "getGameDetails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "onChainGameId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "createdAt"
          },
          {
            "type": "address",
            "name": "player"
          },
          {
            "type": "uint256",
            "name": "betAmount"
          },
          {
            "type": "uint8",
            "name": "status"
          },
          {
            "type": "uint256",
            "name": "payoutAmount"
          },
          {
            "type": "bytes32",
            "name": "gameSeedHash"
          },
          {
            "type": "string",
            "name": "gameSeed"
          },
          {
            "type": "string",
            "name": "algoVersion"
          },
          {
            "type": "string",
            "name": "gameConfig"
          },
          {
            "type": "string",
            "name": "gameState"
          }
        ]
      }
    ]
  },
  {
    "name": "getOnChainGameId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "preliminaryGameId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_messagePrefix"
      }
    ],
    "outputs": []
  },
  {
    "name": "isAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "markGameAsLost",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "onChainGameId"
      },
      {
        "type": "string",
        "name": "gameState"
      },
      {
        "type": "string",
        "name": "gameSeed"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes",
        "name": "serverSignature"
      }
    ],
    "outputs": []
  },
  {
    "name": "messagePrefix",
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
    "name": "preliminaryToOnChainId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "removeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "adminToRemove"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setGameCounter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newCounter"
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
    "name": "withdrawFunds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "recipient"
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