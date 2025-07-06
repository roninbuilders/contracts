import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36002,
  address: '0xa5a2250b0170bdb9bd0904c0440717f00a506023' as const,
  contract_name: 'TurnBasedScratcher',
  display_name: 'Turn Based Scratcher',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751656708,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_usdcAddress"
      },
      {
        "type": "address",
        "name": "_vrfCoordinator"
      }
    ]
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
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
    "name": "CellsChosen",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "round"
      }
    ]
  },
  {
    "name": "GameFinished",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalPayout"
      },
      {
        "type": "bool",
        "name": "byHole"
      }
    ]
  },
  {
    "name": "GameStarted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "player",
        "indexed": true
      }
    ]
  },
  {
    "name": "OfferSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "round"
      },
      {
        "type": "uint256",
        "name": "offer"
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
    "name": "RandomnessRequested",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "vrfRequestHash",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoundRevealed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "round"
      },
      {
        "type": "uint256",
        "name": "payout"
      },
      {
        "type": "bool",
        "name": "holeFound"
      }
    ]
  },
  {
    "name": "acceptOffer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId"
      }
    ],
    "outputs": []
  },
  {
    "name": "callbackGasLimit",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "estimateVRFFee",
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
    "name": "finishGameAndClaimPayout",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId"
      }
    ],
    "outputs": []
  },
  {
    "name": "gameFee",
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
    "name": "gameIdCounter",
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
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint8",
        "name": "state"
      },
      {
        "type": "bytes32",
        "name": "vrfRequestHash"
      },
      {
        "type": "bool",
        "name": "holeFound"
      }
    ]
  },
  {
    "name": "gamesByUser",
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
    "name": "gasPrice",
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
    "name": "getGame",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_gameId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "player"
          },
          {
            "type": "uint8",
            "name": "state"
          },
          {
            "type": "bytes32",
            "name": "vrfRequestHash"
          },
          {
            "type": "uint8[9]",
            "name": "chosenCells"
          },
          {
            "type": "bool[9]",
            "name": "isCellChosen"
          },
          {
            "type": "uint256[3]",
            "name": "revealedPayouts"
          },
          {
            "type": "uint256[3]",
            "name": "offeredPayouts"
          },
          {
            "type": "bool",
            "name": "holeFound"
          },
          {
            "type": "uint256[9]",
            "name": "cellPayouts"
          },
          {
            "type": "uint256[9]",
            "name": "cellRandomValues"
          }
        ]
      }
    ]
  },
  {
    "name": "getGameIdsForPlayer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_player"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getRevealedCells",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_gameId"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "cellPayouts"
      },
      {
        "type": "uint256[]",
        "name": "cellRandomValues"
      },
      {
        "type": "uint8[]",
        "name": "cellIndexes"
      },
      {
        "type": "uint8",
        "name": "revealedRounds"
      }
    ]
  },
  {
    "name": "getRoundCellResults",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_gameId"
      },
      {
        "type": "uint8",
        "name": "_round"
      }
    ],
    "outputs": [
      {
        "type": "uint256[3]",
        "name": "cellPayouts"
      },
      {
        "type": "uint256[3]",
        "name": "cellRandomValues"
      },
      {
        "type": "uint8[3]",
        "name": "cellIndexes"
      }
    ]
  },
  {
    "name": "house",
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
    "name": "playRound",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId"
      },
      {
        "type": "uint8[3]",
        "name": "cellIndexes"
      }
    ],
    "outputs": []
  },
  {
    "name": "rawFulfillRandomSeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_reqHash"
      },
      {
        "type": "uint256",
        "name": "_randomSeed"
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
    "name": "setHouse",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newHouse"
      }
    ],
    "outputs": []
  },
  {
    "name": "setHouseOffer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId"
      },
      {
        "type": "uint256",
        "name": "offerAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "startGame",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint8[3]",
        "name": "cellIndexes"
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
    "name": "usdc",
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
    "name": "vrfCoordinator",
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
    "name": "vrfRequestToGameId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "withdraw",
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