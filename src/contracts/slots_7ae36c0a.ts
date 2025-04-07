import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25824,
  address: '0x39f077a8dfaa2faaaeb3f5b1d3939f637ae36c0a' as const,
  contract_name: 'Slots',
  display_name: 'Slots',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1740218528,
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
        "type": "address",
        "name": "manager_"
      },
      {
        "type": "uint8[]",
        "name": "reel1_"
      },
      {
        "type": "uint8[]",
        "name": "reel2_"
      },
      {
        "type": "uint8[]",
        "name": "reel3_"
      },
      {
        "type": "uint256",
        "name": "minBuyInGas_"
      },
      {
        "type": "uint256",
        "name": "buyInGasPerSpin_"
      },
      {
        "type": "uint8[]",
        "name": "boostOdds"
      },
      {
        "type": "uint16[]",
        "name": "payoutReductions"
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
    "name": "MAX_SPINS",
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
    "name": "MIN_SPINS",
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
    "name": "batchSetPayouts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8[]",
        "name": "coins0"
      },
      {
        "type": "uint8[]",
        "name": "coins1"
      },
      {
        "type": "uint8[]",
        "name": "coins2"
      },
      {
        "type": "uint256[]",
        "name": "payoutMultiplier"
      }
    ],
    "outputs": []
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
    "name": "boostGasMultiplier",
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
    "name": "boostMultiplier",
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
    "name": "boosts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "boostOdds"
      },
      {
        "type": "uint16",
        "name": "payoutReduction"
      }
    ]
  },
  {
    "name": "buyInGasPerSpin",
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
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint256",
        "name": "betAmount"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amountForHouse"
      },
      {
        "type": "uint8",
        "name": "numSpins"
      },
      {
        "type": "uint8",
        "name": "whichBoost"
      },
      {
        "type": "uint256",
        "name": "payout"
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
        "type": "uint256",
        "name": "betAmount"
      },
      {
        "type": "uint8",
        "name": "numSpins"
      },
      {
        "type": "uint8[]",
        "name": "num0"
      },
      {
        "type": "uint8[]",
        "name": "num1"
      },
      {
        "type": "uint8[]",
        "name": "num2"
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
    "name": "getMinBuyInGas",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "numSpins"
      },
      {
        "type": "bool",
        "name": "withBoost"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getMinIndexReel1",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "getMinIndexReel2",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "getMinIndexReel3",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "getPayout",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "coin1"
      },
      {
        "type": "uint8",
        "name": "coin2"
      },
      {
        "type": "uint8",
        "name": "coin3"
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
    "name": "minBuyInGas",
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
    "name": "numOptionsReel1",
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
    "name": "numOptionsReel2",
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
    "name": "numOptionsReel3",
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
    "name": "optionsReel1",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8[]"
      }
    ]
  },
  {
    "name": "optionsReel2",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8[]"
      }
    ]
  },
  {
    "name": "optionsReel3",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8[]"
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
    "name": "payout",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8"
      },
      {
        "type": "uint8"
      },
      {
        "type": "uint8"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "quoteValue",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "buyIn"
      },
      {
        "type": "uint8",
        "name": "numSpins"
      },
      {
        "type": "bool",
        "name": "withBoost"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "reel1",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "reel2",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "reel3",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
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
    "name": "setBoost",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "boostId"
      },
      {
        "type": "uint8",
        "name": "boostOdds"
      },
      {
        "type": "uint16",
        "name": "payoutReduction"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBoostFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newBoost"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBoostGasMultiplier",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "newMultiplier"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBuyInGasInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMin"
      },
      {
        "type": "uint256",
        "name": "newGasPerSpin"
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
        "name": "newRecipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxSpins",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMax"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinSpins",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMin"
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
    "name": "setReels",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8[]",
        "name": "reel1_"
      },
      {
        "type": "uint8[]",
        "name": "reel2_"
      },
      {
        "type": "uint8[]",
        "name": "reel3_"
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