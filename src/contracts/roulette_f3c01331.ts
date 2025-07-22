import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36268,
  address: '0x6df73319a5cb3cbc3fc9c9e03e556d1bf3c01331' as const,
  contract_name: 'Roulette',
  display_name: 'Roulette',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753073202,
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
        "name": "minBuyInGas_"
      },
      {
        "type": "uint256",
        "name": "buyInGasPerGuess_"
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
    "name": "BLACK",
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
    "name": "DOUBLE_ZERO",
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
    "name": "EVEN",
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
    "name": "FIRST_COLUMN",
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
    "name": "FIRST_HALF",
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
    "name": "FIRST_THIRD",
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
    "name": "MAX_BET_NUMBER_ENTRY",
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
    "name": "MAX_GUESSES",
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
    "name": "MAX_NUMBER",
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
    "name": "ODD",
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
    "name": "RED",
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
    "name": "SECOND_COLUMN",
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
    "name": "SECOND_HALF",
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
    "name": "SECOND_THIRD",
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
    "name": "THIRD_COLUMN",
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
    "name": "THIRD_THIRD",
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
    "name": "ZERO",
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
    "name": "buyInGasPerGuess",
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
    "name": "color_payout",
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
    "name": "determinePayout",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8[]",
        "name": "gameNumbers"
      },
      {
        "type": "uint256[]",
        "name": "bets"
      },
      {
        "type": "uint8",
        "name": "chosenNumber"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalPayout"
      }
    ]
  },
  {
    "name": "even_odd_payout",
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
        "name": "chosenNumber"
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
      },
      {
        "type": "uint8",
        "name": "chosenNumber"
      },
      {
        "type": "uint8",
        "name": "unwrapType"
      },
      {
        "type": "uint8[]",
        "name": "gameNumbers"
      },
      {
        "type": "uint256[]",
        "name": "betsPerNumbers"
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
        "name": "numGuesses"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getTotalBet",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint8[]",
        "name": "_numbers"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalAmounts"
      }
    ]
  },
  {
    "name": "half_payout",
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
    "name": "number_payout",
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
    "name": "numbers",
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
        "name": "color"
      },
      {
        "type": "bool",
        "name": "isInFirstColumn"
      },
      {
        "type": "bool",
        "name": "isInSecondColumn"
      },
      {
        "type": "bool",
        "name": "isInThirdColumn"
      },
      {
        "type": "bool",
        "name": "isInFirstThird"
      },
      {
        "type": "bool",
        "name": "isInSecondThird"
      },
      {
        "type": "bool",
        "name": "isInThirdThird"
      },
      {
        "type": "bool",
        "name": "isInFirstHalf"
      },
      {
        "type": "bool",
        "name": "isInSecondHalf"
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
    "name": "resume",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
    "name": "third_payout",
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