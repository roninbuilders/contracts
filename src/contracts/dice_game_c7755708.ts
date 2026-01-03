import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37612,
  address: '0xa16f803981ef7c8f346ebb2edb54648ac7755708' as const,
  contract_name: 'DiceGame',
  display_name: 'Dice Game',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1761460602,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_adminWallet"
      },
      {
        "type": "address",
        "name": "_vrfCoordinator"
      },
      {
        "type": "address",
        "name": "_paymentToken"
      }
    ]
  },
  {
    "name": "BetPlaced",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "betAmount"
      },
      {
        "type": "uint256",
        "name": "selectedNumber"
      },
      {
        "type": "address",
        "name": "paymentToken"
      }
    ]
  },
  {
    "name": "GameResult_Event",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "selectedNumber"
      },
      {
        "type": "uint256",
        "name": "dice1"
      },
      {
        "type": "uint256",
        "name": "dice2"
      },
      {
        "type": "uint256",
        "name": "dice3"
      },
      {
        "type": "uint256",
        "name": "totalSum"
      },
      {
        "type": "uint256",
        "name": "betAmount"
      },
      {
        "type": "uint256",
        "name": "winAmount"
      },
      {
        "type": "bool",
        "name": "isWin"
      }
    ]
  },
  {
    "name": "HouseDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "admin",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "HouseEdgeWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "admin",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "HouseWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "admin",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "Paused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "PaymentTokenAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "PaymentTokenRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "PlayerFundsRefunded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "RollRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "betAmount"
      },
      {
        "type": "uint256",
        "name": "selectedNumber"
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "CALLBACK_GAS_LIMIT",
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
    "name": "MAX_BET",
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
    "name": "MIN_BET",
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
    "name": "REQUEST_TIMEOUT",
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
    "name": "VRF_GAS_PRICE_MULTIPLIER",
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
    "name": "addPaymentToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminWallet",
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
    "name": "allGameResults",
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
        "type": "uint256",
        "name": "selectedNumber"
      },
      {
        "type": "uint256",
        "name": "dice1"
      },
      {
        "type": "uint256",
        "name": "dice2"
      },
      {
        "type": "uint256",
        "name": "dice3"
      },
      {
        "type": "uint256",
        "name": "totalSum"
      },
      {
        "type": "uint256",
        "name": "betAmount"
      },
      {
        "type": "uint256",
        "name": "winAmount"
      },
      {
        "type": "bool",
        "name": "isWin"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "allowedTokens",
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
    "name": "depositToHouse",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "emergencyPause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "emergencyUnpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
    "name": "gameRequests",
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
        "name": "player"
      },
      {
        "type": "uint256",
        "name": "betAmount"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "bool",
        "name": "fulfilled"
      },
      {
        "type": "bool",
        "name": "emergencyRefunded"
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
    "name": "getAllowedTokens",
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
    "name": "getGameStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalBets"
      },
      {
        "type": "uint256",
        "name": "totalWins"
      },
      {
        "type": "uint256",
        "name": "numPlayers"
      },
      {
        "type": "uint256",
        "name": "currentHouseBalance"
      },
      {
        "type": "uint256",
        "name": "totalGameResults"
      }
    ]
  },
  {
    "name": "getHouseBalance",
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
    "name": "getOdds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_number"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "chance"
      },
      {
        "type": "uint256",
        "name": "multiplier"
      }
    ]
  },
  {
    "name": "getPlayerByReqHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getPlayerGameHistory",
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
        "type": "tuple[]",
        "components": [
          {
            "type": "address",
            "name": "player"
          },
          {
            "type": "uint256",
            "name": "selectedNumber"
          },
          {
            "type": "uint256",
            "name": "dice1"
          },
          {
            "type": "uint256",
            "name": "dice2"
          },
          {
            "type": "uint256",
            "name": "dice3"
          },
          {
            "type": "uint256",
            "name": "totalSum"
          },
          {
            "type": "uint256",
            "name": "betAmount"
          },
          {
            "type": "uint256",
            "name": "winAmount"
          },
          {
            "type": "bool",
            "name": "isWin"
          },
          {
            "type": "uint256",
            "name": "timestamp"
          }
        ]
      }
    ]
  },
  {
    "name": "getPlayerGameHistoryLength",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPlayerStats",
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
        "type": "uint256",
        "name": "totalBets"
      },
      {
        "type": "uint256",
        "name": "totalWins"
      },
      {
        "type": "uint256",
        "name": "totalWinAmount"
      },
      {
        "type": "bool",
        "name": "isNew"
      }
    ]
  },
  {
    "name": "getRecentGameResults",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_count"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "address",
            "name": "player"
          },
          {
            "type": "uint256",
            "name": "selectedNumber"
          },
          {
            "type": "uint256",
            "name": "dice1"
          },
          {
            "type": "uint256",
            "name": "dice2"
          },
          {
            "type": "uint256",
            "name": "dice3"
          },
          {
            "type": "uint256",
            "name": "totalSum"
          },
          {
            "type": "uint256",
            "name": "betAmount"
          },
          {
            "type": "uint256",
            "name": "winAmount"
          },
          {
            "type": "bool",
            "name": "isWin"
          },
          {
            "type": "uint256",
            "name": "timestamp"
          }
        ]
      }
    ]
  },
  {
    "name": "houseBalance",
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
    "name": "isAllowedToken",
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
    "name": "isNewPlayer",
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
    "name": "isPlayerRequested",
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
    "name": "odds",
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
        "name": "chance"
      },
      {
        "type": "uint256",
        "name": "multiplier"
      }
    ]
  },
  {
    "name": "paused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "paymentToken",
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
    "name": "placeBet",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_selectedNumbers"
      },
      {
        "type": "uint256",
        "name": "_betAmount"
      },
      {
        "type": "address",
        "name": "_paymentTokenAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "playerActiveRequest",
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
    "name": "playerGameHistory",
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
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint256",
        "name": "selectedNumber"
      },
      {
        "type": "uint256",
        "name": "dice1"
      },
      {
        "type": "uint256",
        "name": "dice2"
      },
      {
        "type": "uint256",
        "name": "dice3"
      },
      {
        "type": "uint256",
        "name": "totalSum"
      },
      {
        "type": "uint256",
        "name": "betAmount"
      },
      {
        "type": "uint256",
        "name": "winAmount"
      },
      {
        "type": "bool",
        "name": "isWin"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "playerTotalBets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "playerTotalWinAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "playerTotalWins",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
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
    "name": "removePaymentToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": []
  },
  {
    "name": "resetStuckPlayerState",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_player"
      }
    ],
    "outputs": []
  },
  {
    "name": "totalBetsPlaced",
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
    "name": "totalBetsWon",
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
    "name": "totalPlayers",
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
    "name": "validVRFRequests",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
    "name": "withdrawFromHouse",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawHouseEdge",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract