import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35016,
  address: '0xe4e4de6221dd165423572892feca884ce2fa714f' as const,
  contract_name: 'MyRaffle',
  display_name: 'My Raffle',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1748124387,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_initialCallbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "_initialVrfFee"
      },
      {
        "type": "uint256",
        "name": "_initialGasPriceToFulfill"
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
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DrawProcessInitiated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "ticketPoolSize"
      }
    ]
  },
  {
    "name": "MasterSeedRevealed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "masterSeed"
      }
    ]
  },
  {
    "name": "MaxWinnersPerDrawUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMaxWinners"
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
    "name": "PrizePoolWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "RaffleCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      }
    ]
  },
  {
    "name": "RaffleCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "paymentToken",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "ticketPrice"
      },
      {
        "type": "uint256",
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "endTime"
      },
      {
        "type": "uint256",
        "name": "numTargetWinners"
      }
    ]
  },
  {
    "name": "RaffleDrawFinalized",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "allWinnerSlots"
      }
    ]
  },
  {
    "name": "RaffleModified",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "paymentToken",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "ticketPrice"
      },
      {
        "type": "uint256",
        "name": "newEndTime"
      },
      {
        "type": "uint256",
        "name": "newNumberOfWinners"
      }
    ]
  },
  {
    "name": "RefundClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "claimer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "TicketsPurchased",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "numberOfTickets"
      },
      {
        "type": "uint256",
        "name": "totalCost"
      }
    ]
  },
  {
    "name": "VrfParametersUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newCallbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "newVrfFee"
      },
      {
        "type": "uint256",
        "name": "newGasPriceToFulfill"
      }
    ]
  },
  {
    "name": "WinnerBatchDrawn",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "batchSize"
      },
      {
        "type": "uint256",
        "name": "totalSelectedSoFar"
      }
    ]
  },
  {
    "name": "WinnersDrawn",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "winners"
      }
    ]
  },
  {
    "name": "callbackGasLimit",
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
    "name": "cancelRaffle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "claimRefund",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "createRaffle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_paymentToken"
      },
      {
        "type": "uint256",
        "name": "_ticketPrice"
      },
      {
        "type": "uint256",
        "name": "_durationInSeconds"
      },
      {
        "type": "uint256",
        "name": "_numTargetWinnersInput"
      }
    ],
    "outputs": []
  },
  {
    "name": "currentDrawTicketPool",
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
    "name": "currentRaffle",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "isActive"
      },
      {
        "type": "bool",
        "name": "isDrawn"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "ticketPrice"
      },
      {
        "type": "uint256",
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "endTime"
      },
      {
        "type": "uint256",
        "name": "totalTicketsSold"
      },
      {
        "type": "uint256",
        "name": "totalPrizePool"
      },
      {
        "type": "uint256",
        "name": "totalRefundablePool"
      },
      {
        "type": "bytes32",
        "name": "vrfRequestId"
      },
      {
        "type": "bool",
        "name": "vrfRequestPending"
      },
      {
        "type": "uint256",
        "name": "masterSeed"
      },
      {
        "type": "bool",
        "name": "masterSeedRevealed"
      },
      {
        "type": "uint256",
        "name": "numTargetWinners"
      },
      {
        "type": "uint256",
        "name": "numWinnersSelectedSoFar"
      }
    ]
  },
  {
    "name": "currentRaffleId",
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
    "name": "drawWinners",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "drawnWinnerSlots",
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
    "name": "gasPriceToFulfill",
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
    "name": "getAllTicketHoldersList",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
        "type": "address[]"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getDrawnWinnerSlotsList",
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
    "name": "getFeeForVRFRequest",
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
    "name": "getRaffleInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "name": "raffleState",
        "components": [
          {
            "type": "bool",
            "name": "isActive"
          },
          {
            "type": "bool",
            "name": "isDrawn"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint256",
            "name": "ticketPrice"
          },
          {
            "type": "uint256",
            "name": "startTime"
          },
          {
            "type": "uint256",
            "name": "endTime"
          },
          {
            "type": "uint256",
            "name": "totalTicketsSold"
          },
          {
            "type": "uint256",
            "name": "totalPrizePool"
          },
          {
            "type": "uint256",
            "name": "totalRefundablePool"
          },
          {
            "type": "bytes32",
            "name": "vrfRequestId"
          },
          {
            "type": "bool",
            "name": "vrfRequestPending"
          },
          {
            "type": "uint256",
            "name": "masterSeed"
          },
          {
            "type": "bool",
            "name": "masterSeedRevealed"
          },
          {
            "type": "uint256",
            "name": "numTargetWinners"
          },
          {
            "type": "uint256",
            "name": "numWinnersSelectedSoFar"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "_raffleId"
      }
    ]
  },
  {
    "name": "getRaffleStateInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      },
      {
        "type": "bool",
        "name": "_isActive"
      },
      {
        "type": "bool",
        "name": "_isDrawnFinalized"
      },
      {
        "type": "bool",
        "name": "_masterSeedRevealed"
      },
      {
        "type": "bool",
        "name": "_vrfRequestPending"
      },
      {
        "type": "uint256",
        "name": "_numTargetWinners"
      },
      {
        "type": "uint256",
        "name": "_numWinnersSelectedSoFar"
      },
      {
        "type": "uint256",
        "name": "_ticketPoolSizeForDraw"
      }
    ]
  },
  {
    "name": "getTicketsByUserForCurrentRaffle",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getUserWinningSlotsForCurrentRaffle",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getWinnersList",
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
    "name": "hasClaimedRefundPerRaffle",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
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
    "name": "isWinnerInCurrentRaffle",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "maxWinnersPerDraw",
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
    "name": "modifyRaffle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_paymentToken"
      },
      {
        "type": "uint256",
        "name": "_ticketPrice"
      },
      {
        "type": "uint256",
        "name": "_newEndTime"
      },
      {
        "type": "uint256",
        "name": "_newNumberOfWinners"
      }
    ],
    "outputs": []
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
    "name": "participantTicketCountPerRaffle",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
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
    "name": "purchaseTickets",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_numberOfTickets"
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
    "name": "s_vrf_validRequests",
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
    "name": "setMaxWinnersPerDraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newMaxWinners"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVrfParameters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newCallbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "_newVrfFee"
      },
      {
        "type": "uint256",
        "name": "_newGasPriceToFulfill"
      }
    ],
    "outputs": []
  },
  {
    "name": "ticketHolders",
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
    "name": "vrfFee",
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
    "name": "vrfGasPriceToFulfill",
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
    "name": "winners",
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
    "name": "withdrawPrizePool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawRon",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_amount"
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