import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36995,
  address: '0x4d9b7929590bb32a9829b0238a1e4a31355c13e9' as const,
  contract_name: 'RRWColorGuess',
  display_name: 'RRW Color Guess',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1757431860,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
      }
    ]
  },
  {
    "name": "GameCompleted",
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
      },
      {
        "type": "uint8[]",
        "name": "resultColors"
      },
      {
        "type": "uint256",
        "name": "matches"
      },
      {
        "type": "uint256",
        "name": "winAmount"
      },
      {
        "type": "bool",
        "name": "won"
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
      },
      {
        "type": "uint8",
        "name": "selectedColor"
      },
      {
        "type": "uint256",
        "name": "betAmount"
      },
      {
        "type": "address",
        "name": "paymentToken"
      }
    ]
  },
  {
    "name": "GlobalMultipliersUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oneMatchMultiplier"
      },
      {
        "type": "uint256",
        "name": "twoMatchMultiplier"
      },
      {
        "type": "uint256",
        "name": "threeMatchMultiplier"
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
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
    "name": "RandomnessReceived",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "randomSeed"
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
        "name": "requestId"
      }
    ]
  },
  {
    "name": "TokenConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "allowedBetAmounts"
      }
    ]
  },
  {
    "name": "TreasuryDistributed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "treasury1"
      },
      {
        "type": "address",
        "name": "treasury2"
      },
      {
        "type": "uint256",
        "name": "treasuryAmount"
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
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      }
    ]
  },
  {
    "name": "NUM_COLORS",
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
    "name": "NUM_DICE",
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
    "name": "REAL_ADDRESS",
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
    "name": "RON_ADDRESS",
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
    "name": "VRF_TIMEOUT",
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
    "name": "activeTokens",
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
    "name": "colorDailyStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint8"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "date"
      },
      {
        "type": "uint8",
        "name": "color"
      },
      {
        "type": "uint256",
        "name": "timesSelected"
      },
      {
        "type": "uint256",
        "name": "timesWon"
      }
    ]
  },
  {
    "name": "dailyStats",
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
        "name": "date"
      },
      {
        "type": "uint256",
        "name": "totalGames"
      },
      {
        "type": "uint256",
        "name": "totalWins"
      }
    ]
  },
  {
    "name": "dailyStatsKeys",
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
    "name": "emergencyWithdrawToken",
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
    "name": "gameIdByRequestId",
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
        "name": "gameId"
      },
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint8",
        "name": "selectedColor"
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
        "name": "timestamp"
      },
      {
        "type": "bool",
        "name": "isActive"
      },
      {
        "type": "bool",
        "name": "isCompleted"
      },
      {
        "type": "uint256",
        "name": "matches"
      },
      {
        "type": "uint256",
        "name": "winAmount"
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
    "name": "getActiveTokens",
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
    "name": "getAllowedBetAmounts",
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
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getColorDailyStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_date"
      },
      {
        "type": "uint8",
        "name": "_color"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "timesSelected"
      },
      {
        "type": "uint256",
        "name": "timesWon"
      },
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "uint256[]",
        "name": "volumes"
      },
      {
        "type": "uint256",
        "name": "winRate"
      }
    ]
  },
  {
    "name": "getColorName",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint8",
        "name": "_color"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "getDailyStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_date"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalGames"
      },
      {
        "type": "uint256",
        "name": "totalWins"
      },
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "uint256[]",
        "name": "volumes"
      },
      {
        "type": "uint256[]",
        "name": "winnings"
      },
      {
        "type": "uint256[]",
        "name": "treasury"
      },
      {
        "type": "uint256",
        "name": "winRate"
      }
    ]
  },
  {
    "name": "getGameInfo",
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
        "type": "uint256",
        "name": "gameId"
      },
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint8",
        "name": "selectedColor"
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
        "name": "timestamp"
      },
      {
        "type": "bool",
        "name": "isActive"
      },
      {
        "type": "bool",
        "name": "isCompleted"
      },
      {
        "type": "uint8[]",
        "name": "resultColors"
      },
      {
        "type": "uint256",
        "name": "matches"
      },
      {
        "type": "uint256",
        "name": "winAmount"
      },
      {
        "type": "bool",
        "name": "pendingRandomness"
      }
    ]
  },
  {
    "name": "getGlobalMultipliers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "_oneMatchMultiplier"
      },
      {
        "type": "uint256",
        "name": "_twoMatchMultiplier"
      },
      {
        "type": "uint256",
        "name": "_threeMatchMultiplier"
      }
    ]
  },
  {
    "name": "getLast30DaysColorStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8[]",
        "name": "colors"
      },
      {
        "type": "uint256[]",
        "name": "timesSelected"
      },
      {
        "type": "uint256[]",
        "name": "timesWon"
      },
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "uint256[][]",
        "name": "volumes"
      }
    ]
  },
  {
    "name": "getLast30DaysStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalGames"
      },
      {
        "type": "uint256",
        "name": "totalWins"
      },
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "uint256[]",
        "name": "volumes"
      },
      {
        "type": "uint256[]",
        "name": "winnings"
      },
      {
        "type": "uint256[]",
        "name": "treasury"
      },
      {
        "type": "uint256",
        "name": "winRate"
      }
    ]
  },
  {
    "name": "getMonthlyTokenLeaderboard",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_year"
      },
      {
        "type": "uint256",
        "name": "_month"
      },
      {
        "type": "uint256",
        "name": "_limit"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "players"
      },
      {
        "type": "uint256[]",
        "name": "betAmounts"
      }
    ]
  },
  {
    "name": "getMonthlyTokenLeaderboardPaginated",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_year"
      },
      {
        "type": "uint256",
        "name": "_month"
      },
      {
        "type": "uint256",
        "name": "_limit"
      },
      {
        "type": "uint256",
        "name": "_startGameId"
      },
      {
        "type": "uint256",
        "name": "_maxGamesToProcess"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "players"
      },
      {
        "type": "uint256[]",
        "name": "betAmounts"
      },
      {
        "type": "uint256",
        "name": "nextGameId"
      },
      {
        "type": "uint256",
        "name": "totalGamesProcessed"
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
        "name": "totalGames"
      },
      {
        "type": "uint256",
        "name": "totalWins"
      },
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "uint256[]",
        "name": "volumes"
      },
      {
        "type": "uint256[]",
        "name": "winnings"
      }
    ]
  },
  {
    "name": "getPlayerTokenStats",
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
        "name": "volume"
      },
      {
        "type": "uint256",
        "name": "winnings"
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
        "name": "isValid"
      },
      {
        "type": "uint256[]",
        "name": "allowedBetAmounts"
      }
    ]
  },
  {
    "name": "getTokenLeaderboard",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_limit"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "players"
      },
      {
        "type": "uint256[]",
        "name": "betAmounts"
      }
    ]
  },
  {
    "name": "getTokenStats",
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
        "type": "uint256",
        "name": "totalVolume"
      },
      {
        "type": "uint256",
        "name": "totalWinnings"
      },
      {
        "type": "uint256",
        "name": "totalTreasury"
      }
    ]
  },
  {
    "name": "getVrfCallbackGasLimit",
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
    "name": "getVrfFixedFee",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_vrfCoordinator"
      },
      {
        "type": "address",
        "name": "_referralSystem"
      },
      {
        "type": "address",
        "name": "_treasury1"
      },
      {
        "type": "address",
        "name": "_treasury2"
      },
      {
        "type": "address",
        "name": "_owner"
      }
    ],
    "outputs": []
  },
  {
    "name": "isTokenActive",
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
    "name": "isValidBetAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_betAmount"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "oneMatchMultiplier",
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
    "name": "pause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
    "name": "playColorGuessGame",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_selectedColor"
      },
      {
        "type": "address",
        "name": "_paymentToken"
      },
      {
        "type": "uint256",
        "name": "_betAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "playerStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalGames"
      },
      {
        "type": "uint256",
        "name": "totalWins"
      }
    ]
  },
  {
    "name": "proxiableUUID",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
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
    "name": "referralSystem",
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
    "name": "setGlobalMultipliers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_oneMatchMultiplier"
      },
      {
        "type": "uint256",
        "name": "_twoMatchMultiplier"
      },
      {
        "type": "uint256",
        "name": "_threeMatchMultiplier"
      }
    ],
    "outputs": []
  },
  {
    "name": "setReferralSystem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_referralSystem"
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
        "type": "bool",
        "name": "_isValid"
      },
      {
        "type": "uint256[]",
        "name": "_allowedBetAmounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTreasuryAddresses",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_treasury1"
      },
      {
        "type": "address",
        "name": "_treasury2"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTreasuryPercentage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_percentage"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVrfCallbackGasLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_gasLimit"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVrfFixedFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_fee"
      }
    ],
    "outputs": []
  },
  {
    "name": "threeMatchMultiplier",
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
        "name": "isValid"
      }
    ]
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
    "name": "treasury1",
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
    "name": "treasury2",
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
    "name": "treasuryPercentage",
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
    "name": "twoMatchMultiplier",
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeToAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "vrfCallbackGasLimit",
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
    "name": "vrfFixedFee",
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