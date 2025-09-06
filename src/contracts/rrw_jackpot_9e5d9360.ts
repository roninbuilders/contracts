import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36922,
  address: '0x1bbc50c4833e25670c5ac4bc2370b0979e5d9360' as const,
  contract_name: 'RRWJackpot',
  display_name: 'RRW Jackpot',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1757111591,
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
    "name": "AddressRemovedFromWhitelist",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "addr",
        "indexed": true
      }
    ]
  },
  {
    "name": "AddressWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "addr",
        "indexed": true
      }
    ]
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
        "name": "creator",
        "indexed": true
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
        "name": "initialDeposit"
      },
      {
        "type": "uint256",
        "name": "endTime"
      }
    ]
  },
  {
    "name": "JackpotDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "jackpotId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "depositor",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
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
      },
      {
        "type": "uint256[]",
        "name": "prizes"
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
    "name": "TicketPurchased",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "jackpotId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "uint256",
        "name": "totalCost"
      },
      {
        "type": "address",
        "name": "referrer"
      }
    ]
  },
  {
    "name": "TreasuryDistributed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "jackpotId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "treasury1"
      },
      {
        "type": "uint256",
        "name": "treasury1Amount"
      },
      {
        "type": "address",
        "name": "treasury2"
      },
      {
        "type": "uint256",
        "name": "treasury2Amount"
      },
      {
        "type": "uint256",
        "name": "nextJackpotAmount"
      }
    ]
  },
  {
    "name": "TreasuryPercentagesUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "treasury1Percentage"
      },
      {
        "type": "uint256",
        "name": "treasury2Percentage"
      },
      {
        "type": "uint256",
        "name": "nextJackpotPercentage"
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
    "name": "addToWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": []
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
        "name": "_quantity"
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
    "stateMutability": "payable",
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
        "name": "_initialDeposit"
      },
      {
        "type": "uint256",
        "name": "_duration"
      },
      {
        "type": "uint256",
        "name": "_maxWinners"
      },
      {
        "type": "bool",
        "name": "_autoNextJackpot"
      }
    ],
    "outputs": []
  },
  {
    "name": "depositToJackpot",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_jackpotId"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
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
            "type": "uint256",
            "name": "initialDeposit"
          },
          {
            "type": "uint256",
            "name": "totalDeposits"
          },
          {
            "type": "uint256",
            "name": "nextJackpotReserve"
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
              },
              {
                "type": "uint256",
                "name": "prizeAmount"
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
            "type": "uint256",
            "name": "initialDeposit"
          },
          {
            "type": "uint256",
            "name": "totalDeposits"
          },
          {
            "type": "uint256",
            "name": "nextJackpotReserve"
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
              },
              {
                "type": "uint256",
                "name": "prizeAmount"
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
        "type": "tuple",
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
            "type": "uint256",
            "name": "initialDeposit"
          },
          {
            "type": "uint256",
            "name": "totalDeposits"
          },
          {
            "type": "uint256",
            "name": "nextJackpotReserve"
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
              },
              {
                "type": "uint256",
                "name": "prizeAmount"
              }
            ]
          }
        ]
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
            "type": "uint256",
            "name": "initialDeposit"
          },
          {
            "type": "uint256",
            "name": "totalDeposits"
          },
          {
            "type": "uint256",
            "name": "nextJackpotReserve"
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
              },
              {
                "type": "uint256",
                "name": "prizeAmount"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "getParticipantList",
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
        "type": "address[]"
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
    "name": "getPrizeDistribution",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_winnerCount"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getTreasuryPercentages",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "_treasury1Percentage"
      },
      {
        "type": "uint256",
        "name": "_treasury2Percentage"
      },
      {
        "type": "uint256",
        "name": "_nextJackpotPercentage"
      }
    ]
  },
  {
    "name": "getWinnerPrizePool",
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
    "name": "isWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
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
      },
      {
        "type": "uint256",
        "name": "initialDeposit"
      },
      {
        "type": "uint256",
        "name": "totalDeposits"
      },
      {
        "type": "uint256",
        "name": "nextJackpotReserve"
      },
      {
        "type": "uint256",
        "name": "initialDuration"
      },
      {
        "type": "bool",
        "name": "autoNextJackpot"
      }
    ]
  },
  {
    "name": "maxTicketPrice",
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
    "name": "minInitialDeposit",
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
    "name": "minTicketPrice",
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
    "name": "nextJackpotPercentage",
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
    "name": "removeFromWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
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
    "name": "setMinMaxValues",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_minInitialDeposit"
      },
      {
        "type": "uint256",
        "name": "_minTicketPrice"
      },
      {
        "type": "uint256",
        "name": "_maxTicketPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPaymentToken",
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
        "type": "uint256",
        "name": "_minDeposit"
      },
      {
        "type": "uint256",
        "name": "_maxDeposit"
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
    "name": "setTreasuryPercentages",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_treasury1Percentage"
      },
      {
        "type": "uint256",
        "name": "_treasury2Percentage"
      },
      {
        "type": "uint256",
        "name": "_nextJackpotPercentage"
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
    "name": "treasury1Percentage",
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
    "name": "treasury2Percentage",
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
      },
      {
        "type": "uint256",
        "name": "minDeposit"
      },
      {
        "type": "uint256",
        "name": "maxDeposit"
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
    "name": "whitelistedAddresses",
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