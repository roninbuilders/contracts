import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37662,
  address: '0x06af43bb2f033b027a1597b8246ce9f83f56e81f' as const,
  contract_name: 'DiceGame',
  display_name: 'Dice Game',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1761774019,
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
    "name": "EmergencyTokenRescue",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "admin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "EmergencyVRFReset",
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
    "name": "HouseWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "admin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
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
    "name": "TokenConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "minBet"
      },
      {
        "type": "uint256",
        "name": "maxBet"
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
    "name": "FLAT_VRF_FEE",
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
    "name": "TOTAL_OUTCOMES",
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
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "bool",
        "name": "pendingRandomness"
      },
      {
        "type": "bytes32",
        "name": "requestId"
      }
    ]
  },
  {
    "name": "calculateMultiplier",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "selectedNumbers"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "emergencyPause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "emergencyResetPlayer",
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
    "name": "emergencyResetPlayers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_players"
      }
    ],
    "outputs": []
  },
  {
    "name": "emergencyTokenRescue",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
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
    "stateMutability": "pure",
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
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "multiplier"
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
        "name": "totalGameResults"
      }
    ]
  },
  {
    "name": "getHouseBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPaginatedPlayerHistory",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_player"
      },
      {
        "type": "uint256",
        "name": "_offset"
      },
      {
        "type": "uint256",
        "name": "_limit"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "results",
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
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "bool",
            "name": "pendingRandomness"
          },
          {
            "type": "bytes32",
            "name": "requestId"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "total"
      }
    ]
  },
  {
    "name": "getPendingPlayers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_players"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "pendingPlayers"
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
      },
      {
        "type": "address",
        "name": "_token"
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
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "bool",
            "name": "pendingRandomness"
          },
          {
            "type": "bytes32",
            "name": "requestId"
          }
        ]
      }
    ]
  },
  {
    "name": "getRecentPlayerHistory",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_player"
      },
      {
        "type": "uint256",
        "name": "_count"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "results",
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
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "bool",
            "name": "pendingRandomness"
          },
          {
            "type": "bytes32",
            "name": "requestId"
          }
        ]
      }
    ]
  },
  {
    "name": "getTokenConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isAllowed"
      },
      {
        "type": "uint256",
        "name": "minBet"
      },
      {
        "type": "uint256",
        "name": "maxBet"
      }
    ]
  },
  {
    "name": "getTokenLeaderboardPaginated",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_startTimestamp"
      },
      {
        "type": "uint256",
        "name": "_endTimestamp"
      },
      {
        "type": "uint256",
        "name": "_startGameId"
      },
      {
        "type": "uint256",
        "name": "_maxGamesToProcess"
      },
      {
        "type": "uint256",
        "name": "_maxPlayersToReturn"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "leaderboard",
        "components": [
          {
            "type": "address",
            "name": "player"
          },
          {
            "type": "uint256",
            "name": "totalBetAmount"
          },
          {
            "type": "uint256",
            "name": "totalWinAmount"
          },
          {
            "type": "uint256",
            "name": "netProfit"
          },
          {
            "type": "uint256",
            "name": "gamesPlayed"
          },
          {
            "type": "uint256",
            "name": "gamesWon"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "nextGameId"
      },
      {
        "type": "bool",
        "name": "hasMore"
      }
    ]
  },
  {
    "name": "houseBalance",
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
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "bool",
        "name": "pendingRandomness"
      },
      {
        "type": "bytes32",
        "name": "requestId"
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
      },
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
      },
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
      },
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
    "name": "removeTokenConfig",
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
    "name": "setTokenConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_minBet"
      },
      {
        "type": "uint256",
        "name": "_maxBet"
      }
    ],
    "outputs": []
  },
  {
    "name": "sumWays",
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
    "name": "tokenConfigs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isAllowed"
      },
      {
        "type": "uint256",
        "name": "minBet"
      },
      {
        "type": "uint256",
        "name": "maxBet"
      }
    ]
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
      },
      {
        "type": "address",
        "name": "_tokenAddress"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract