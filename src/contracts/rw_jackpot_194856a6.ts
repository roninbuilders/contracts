import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 32689,
  address: '0x6c6736ffec2d42f841d00156934f7ba2194856a6' as const,
  contract_name: 'RWJackpot',
  display_name: 'RW Jackpot',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1743965093,
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
    "name": "BaseFeePercentageUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newBaseFeePercentage"
      }
    ]
  },
  {
    "name": "CreatorAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "creator"
      }
    ]
  },
  {
    "name": "CreatorRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "creator"
      }
    ]
  },
  {
    "name": "FeeCollectorUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newFeeCollector"
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
    "name": "JackpotCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "jackpotId",
        "indexed": true
      }
    ]
  },
  {
    "name": "JackpotCancelledError",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "jackpotId",
        "indexed": true
      }
    ]
  },
  {
    "name": "JackpotCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "jackpotId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "uint256",
        "name": "ticketPrice"
      },
      {
        "type": "uint256",
        "name": "maxWinners"
      }
    ]
  },
  {
    "name": "JackpotFinalized",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "jackpotId",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "winners"
      }
    ]
  },
  {
    "name": "JackpotRandomnessReceived",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "jackpotId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "randomSeed"
      }
    ]
  },
  {
    "name": "JackpotRandomnessRequested",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "jackpotId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "requestId"
      }
    ]
  },
  {
    "name": "JackpotVRFFailed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "jackpotId",
        "indexed": true
      },
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "name": "MinValueAllowedUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMinValue"
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
    "name": "PaymentTokenAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "PaymentTokenRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "RealFeePercentageUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newRealFeePercentage"
      }
    ]
  },
  {
    "name": "TicketsPurchased",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "jackpotId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "ALTERNATIVE_SEED_ITERATIONS",
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
    "name": "FEE_PERCENTAGE",
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
    "name": "REAL_TOKEN",
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
    "name": "addAllowedCreator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_creator"
      }
    ],
    "outputs": []
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
    "name": "allowedCreators",
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
    "name": "buyTickets",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_jackpotId"
      },
      {
        "type": "uint256",
        "name": "_numberOfTickets"
      }
    ],
    "outputs": []
  },
  {
    "name": "cancelJackpotError",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_jackpotId"
      }
    ],
    "outputs": []
  },
  {
    "name": "createJackpot",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_ticketPrice"
      },
      {
        "type": "address",
        "name": "_paymentToken"
      },
      {
        "type": "uint256",
        "name": "_duration"
      },
      {
        "type": "uint256",
        "name": "_maxWinners"
      }
    ],
    "outputs": []
  },
  {
    "name": "feeCollector",
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
    "name": "finalizeJackpot",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_jackpotId"
      }
    ],
    "outputs": []
  },
  {
    "name": "finalizeJackpotWithFallback",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_jackpotId"
      }
    ],
    "outputs": []
  },
  {
    "name": "getActiveJackpots",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "jackpotId"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "uint256",
            "name": "ticketPrice"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint256",
            "name": "endTime"
          },
          {
            "type": "bool",
            "name": "isActive"
          },
          {
            "type": "uint256",
            "name": "participantCount"
          },
          {
            "type": "bool",
            "name": "isFinalized"
          },
          {
            "type": "uint256",
            "name": "totalTickets"
          },
          {
            "type": "uint256",
            "name": "maxWinners"
          },
          {
            "type": "uint256",
            "name": "totalPrizePool"
          },
          {
            "type": "tuple[]",
            "name": "winners",
            "components": [
              {
                "type": "address",
                "name": "winner"
              },
              {
                "type": "uint256",
                "name": "position"
              },
              {
                "type": "uint256",
                "name": "ticketsUsed"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "getEndedJackpotIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getEndedJackpots",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "jackpotId"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "uint256",
            "name": "ticketPrice"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint256",
            "name": "endTime"
          },
          {
            "type": "bool",
            "name": "isActive"
          },
          {
            "type": "uint256",
            "name": "participantCount"
          },
          {
            "type": "bool",
            "name": "isFinalized"
          },
          {
            "type": "uint256",
            "name": "totalTickets"
          },
          {
            "type": "uint256",
            "name": "maxWinners"
          },
          {
            "type": "uint256",
            "name": "totalPrizePool"
          },
          {
            "type": "tuple[]",
            "name": "winners",
            "components": [
              {
                "type": "address",
                "name": "winner"
              },
              {
                "type": "uint256",
                "name": "position"
              },
              {
                "type": "uint256",
                "name": "ticketsUsed"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "getJackpotInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_jackpotId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "uint256",
        "name": "ticketPrice"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "endTime"
      },
      {
        "type": "bool",
        "name": "isActive"
      },
      {
        "type": "uint256",
        "name": "participantCount"
      },
      {
        "type": "bool",
        "name": "isFinalized"
      },
      {
        "type": "uint256",
        "name": "totalTickets"
      },
      {
        "type": "uint256",
        "name": "maxWinners"
      },
      {
        "type": "uint256",
        "name": "totalPrizePool"
      },
      {
        "type": "address[]",
        "name": "winners"
      }
    ]
  },
  {
    "name": "getJackpotParticipantsSorted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_jackpotId"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "addresses"
      },
      {
        "type": "uint256[]",
        "name": "ticketCounts"
      },
      {
        "type": "uint256[]",
        "name": "winningPercentages"
      }
    ]
  },
  {
    "name": "getMyParticipatedJackpots",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "jackpotId"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "uint256",
            "name": "ticketPrice"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint256",
            "name": "endTime"
          },
          {
            "type": "bool",
            "name": "isActive"
          },
          {
            "type": "uint256",
            "name": "participantCount"
          },
          {
            "type": "bool",
            "name": "isFinalized"
          },
          {
            "type": "uint256",
            "name": "totalTickets"
          },
          {
            "type": "uint256",
            "name": "maxWinners"
          },
          {
            "type": "uint256",
            "name": "totalPrizePool"
          },
          {
            "type": "tuple[]",
            "name": "winners",
            "components": [
              {
                "type": "address",
                "name": "winner"
              },
              {
                "type": "uint256",
                "name": "position"
              },
              {
                "type": "uint256",
                "name": "ticketsUsed"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "getParticipantTickets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_jackpotId"
      },
      {
        "type": "address",
        "name": "_participant"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "tickets"
      },
      {
        "type": "uint256",
        "name": "winningPercentage"
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
        "name": "_feeCollector"
      },
      {
        "type": "address",
        "name": "_vrfCoordinator"
      }
    ],
    "outputs": []
  },
  {
    "name": "jackpotCounter",
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
    "name": "jackpots",
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
        "name": "creator"
      },
      {
        "type": "uint256",
        "name": "ticketPrice"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "endTime"
      },
      {
        "type": "bool",
        "name": "isActive"
      },
      {
        "type": "uint256",
        "name": "totalTickets"
      },
      {
        "type": "uint256",
        "name": "maxWinners"
      },
      {
        "type": "bool",
        "name": "isFinalized"
      },
      {
        "type": "bool",
        "name": "pendingRandomness"
      },
      {
        "type": "uint256",
        "name": "totalPrizePool"
      }
    ]
  },
  {
    "name": "minValueAllowed",
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
    "name": "needsFallbackFinalization",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_jackpotId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
    "name": "removeAllowedCreator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_creator"
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
    "name": "updateBaseFeePercentage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newBaseFeePercentage"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateFeeCollector",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newFeeCollector"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateMinValueAllowed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newMinValue"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateRealFeePercentage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newRealFeePercentage"
      }
    ],
    "outputs": []
  },
  {
    "name": "validPaymentTokens",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract