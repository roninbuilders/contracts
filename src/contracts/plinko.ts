import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 29614,
  address: '0x5b8fedef5c9a369488e02e8cc918c734e2d1e79f' as const,
  contract_name: 'Plinko',
  display_name: 'Plinko',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1743090983,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "GAME_ID_"
      },
      {
        "type": "address",
        "name": "history_"
      },
      {
        "type": "uint256",
        "name": "base_min_gas_"
      },
      {
        "type": "uint256",
        "name": "extra_gas_per_ball_"
      },
      {
        "type": "address",
        "name": "manager_"
      },
      {
        "type": "address",
        "name": "gasRecipient_"
      }
    ]
  },
  {
    "name": "FulfilRandomFailed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "gameId"
      },
      {
        "type": "uint256[]",
        "name": "randomWords"
      }
    ]
  },
  {
    "name": "GameEnded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "gameId"
      },
      {
        "type": "uint256",
        "name": "buyIn"
      },
      {
        "type": "uint256",
        "name": "payout"
      }
    ]
  },
  {
    "name": "GameStarted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "gameId"
      }
    ]
  },
  {
    "name": "OddsLocked",
    "type": "event",
    "inputs": []
  },
  {
    "name": "RandomnessRequested",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId"
      }
    ]
  },
  {
    "name": "SetPlatformFee",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newFee"
      }
    ]
  },
  {
    "name": "GAME_ID",
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
    "name": "PAYOUT_DENOM",
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
    "name": "base_min_gas",
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
    "name": "batchCallIsUsedGameId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "gameIds"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "isUsed"
      }
    ]
  },
  {
    "name": "betAmountLimits",
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
    "name": "boostFee",
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
    "name": "extra_gas_per_ball",
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
    "name": "fulfillRandomRequest",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256[]",
        "name": "rngList"
      }
    ],
    "outputs": []
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
        "type": "uint8",
        "name": "gameMode"
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
        "type": "uint256",
        "name": "amountForHouse"
      },
      {
        "type": "uint8",
        "name": "numBalls"
      },
      {
        "type": "uint8",
        "name": "whichBoost"
      },
      {
        "type": "uint8",
        "name": "unwrapType"
      },
      {
        "type": "uint256",
        "name": "payout"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "bool",
        "name": "hasEnded"
      }
    ]
  },
  {
    "name": "gasRecipient",
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
    "name": "getBetAmountLimits",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getBoost",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameMode"
      },
      {
        "type": "uint8",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
      },
      {
        "type": "uint16"
      }
    ]
  },
  {
    "name": "getBucketIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameMode"
      },
      {
        "type": "uint256",
        "name": "random"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "getBucketWeights",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameMode"
      }
    ],
    "outputs": [
      {
        "type": "uint112[]"
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
        "name": "gameId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint8",
        "name": "gameMode"
      },
      {
        "type": "uint8",
        "name": "numBalls"
      },
      {
        "type": "uint8",
        "name": "whichBoost"
      },
      {
        "type": "uint8",
        "name": "unwrapType"
      },
      {
        "type": "uint256",
        "name": "betAmount"
      },
      {
        "type": "uint8[]",
        "name": "bucketIndexes"
      },
      {
        "type": "uint256",
        "name": "totalPayout"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "bool",
        "name": "hasEnded"
      }
    ]
  },
  {
    "name": "getHouse",
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
        "type": "address"
      }
    ]
  },
  {
    "name": "getPayout",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameMode"
      },
      {
        "type": "uint8",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPayoutAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "betAmount"
      },
      {
        "type": "uint8",
        "name": "gameMode"
      },
      {
        "type": "uint8",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "history",
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
    "name": "isUsedGameId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isValidGameId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "lockOdds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
    "name": "maxBalls",
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
    "name": "maxBucketValue",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameMode"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "numUsedGameIDs",
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
    "name": "oddsLocked",
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
    "name": "paginateUsedGameIDs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
        "type": "uint256[]"
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
    "name": "platformFee",
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
    "name": "play",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes",
        "name": "gameData"
      }
    ],
    "outputs": []
  },
  {
    "name": "quoteExtraGas",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "numBalls"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "resume",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setBaseMinGas",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newBaseMinGas"
      },
      {
        "type": "uint256",
        "name": "newExtraGasPerBall"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBetAmountLimits",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "uint256[]",
        "name": "limits"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGameMode",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameMode"
      },
      {
        "type": "uint112[]",
        "name": "bucketWeights"
      },
      {
        "type": "uint256[]",
        "name": "payouts"
      },
      {
        "type": "uint8[]",
        "name": "boostOdds"
      },
      {
        "type": "uint16[]",
        "name": "payoutReductions"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGasRecipient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newGasRecipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxBalls",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "newMaxBalls"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPlatformFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newPlatform"
      }
    ],
    "outputs": []
  },
  {
    "name": "usedGameIds",
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
    "name": "withdrawETH",
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
    "name": "withdrawToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract