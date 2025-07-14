import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35995,
  address: '0xc234b36a844bf0156621db6c898efaba0d18cbc0' as const,
  contract_name: 'PrimoLottoV4',
  display_name: 'Primo Lotto V4',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751473222,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_primateria"
      },
      {
        "type": "address",
        "name": "_primosNFT"
      },
      {
        "type": "address",
        "name": "_vrfCoordinator"
      },
      {
        "type": "address",
        "name": "_rewardPool"
      },
      {
        "type": "address",
        "name": "_ronCollection"
      },
      {
        "type": "address[]",
        "name": "_initialOwners"
      }
    ]
  },
  {
    "name": "ContractPaused",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "name": "EnforcedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpectedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "uint256",
        "name": "required"
      },
      {
        "type": "uint256",
        "name": "available"
      }
    ]
  },
  {
    "name": "InvalidAddress",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      },
      {
        "type": "string",
        "name": "context"
      }
    ]
  },
  {
    "name": "InvalidParameters",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "parameter"
      },
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "name": "InvalidPaymentAmount",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "sent"
      },
      {
        "type": "uint256",
        "name": "required"
      }
    ]
  },
  {
    "name": "InvalidRaffleId",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId"
      }
    ]
  },
  {
    "name": "InvalidTicketCount",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "count"
      },
      {
        "type": "uint256",
        "name": "max"
      }
    ]
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RaffleAlreadyCompleted",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId"
      }
    ]
  },
  {
    "name": "RaffleNotActive",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId"
      }
    ]
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnauthorizedAccess",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      },
      {
        "type": "string",
        "name": "operation"
      }
    ]
  },
  {
    "name": "VRFRequestFailed",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "name": "EmergencyActionExecuted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "actionId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "string",
        "name": "action"
      },
      {
        "type": "address",
        "name": "executedBy"
      }
    ]
  },
  {
    "name": "EmergencyActionProposed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "actionId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "proposedTarget"
      },
      {
        "type": "string",
        "name": "action"
      },
      {
        "type": "uint256",
        "name": "executeAfter"
      },
      {
        "type": "address",
        "name": "proposedBy"
      }
    ]
  },
  {
    "name": "EmergencyModeToggled",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "enabled"
      },
      {
        "type": "string",
        "name": "reason"
      },
      {
        "type": "address",
        "name": "toggledBy",
        "indexed": true
      }
    ]
  },
  {
    "name": "FirstTimeParticipant",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "participant",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "participantNumber"
      }
    ]
  },
  {
    "name": "GasPriceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldPrice"
      },
      {
        "type": "uint256",
        "name": "newPrice"
      },
      {
        "type": "address",
        "name": "updatedBy",
        "indexed": true
      }
    ]
  },
  {
    "name": "OwnerAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "addedBy",
        "indexed": true
      }
    ]
  },
  {
    "name": "OwnerRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "removedOwner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "removedBy",
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
    "name": "PrizeDistributed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "winner",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "prizeType"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "RONCollected",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "collectionWallet",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalCollectedLifetime"
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
      },
      {
        "type": "uint8",
        "name": "cancellationMode"
      },
      {
        "type": "address",
        "name": "cancelledBy"
      },
      {
        "type": "string",
        "name": "reason"
      },
      {
        "type": "bool",
        "name": "hadParticipants"
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
        "type": "uint256",
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "endTime"
      },
      {
        "type": "uint8",
        "name": "prizeType"
      },
      {
        "type": "uint8",
        "name": "paymentMethod"
      },
      {
        "type": "uint256",
        "name": "ticketPrice"
      },
      {
        "type": "bool",
        "name": "isUTCScheduled"
      },
      {
        "type": "uint256",
        "name": "prizeValue"
      }
    ]
  },
  {
    "name": "RaffleStateChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "active"
      },
      {
        "type": "bool",
        "name": "completed"
      },
      {
        "type": "string",
        "name": "reason"
      },
      {
        "type": "address",
        "name": "changedBy"
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
        "name": "ticketCount"
      },
      {
        "type": "uint256[]",
        "name": "ticketNumbers"
      },
      {
        "type": "uint256",
        "name": "totalCost"
      },
      {
        "type": "uint8",
        "name": "paymentMethod"
      }
    ]
  },
  {
    "name": "TokensBurned",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "totalBurnedLifetime"
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
    "name": "VRFRequested",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "requestId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "gasLimit"
      },
      {
        "type": "uint256",
        "name": "gasPrice"
      },
      {
        "type": "uint256",
        "name": "estimatedFee"
      }
    ]
  },
  {
    "name": "WinnerSelected",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "winner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "winningTicket"
      },
      {
        "type": "bytes32",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "randomSeed"
      }
    ]
  },
  {
    "name": "EMERGENCY_DELAY",
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
    "name": "FIRE_DUST_TOKEN_ID",
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
    "name": "addOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newOwner"
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
        "name": "_raffleId"
      },
      {
        "type": "uint256",
        "name": "_ticketCount"
      }
    ],
    "outputs": []
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
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      },
      {
        "type": "bool",
        "name": "_distributeAnyway"
      },
      {
        "type": "string",
        "name": "_reason"
      }
    ],
    "outputs": []
  },
  {
    "name": "createRaffle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_duration"
      },
      {
        "type": "uint8",
        "name": "_prizeType"
      },
      {
        "type": "uint8",
        "name": "_paymentMethod"
      },
      {
        "type": "uint256",
        "name": "_ticketPrice"
      },
      {
        "type": "uint256",
        "name": "_fdAmount"
      },
      {
        "type": "uint256",
        "name": "_nftTokenId"
      },
      {
        "type": "uint256[]",
        "name": "_materialIds"
      },
      {
        "type": "uint256[]",
        "name": "_materialAmounts"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "createTestRaffle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_duration"
      },
      {
        "type": "uint8",
        "name": "_prizeType"
      },
      {
        "type": "uint8",
        "name": "_paymentMethod"
      },
      {
        "type": "uint256",
        "name": "_ticketPrice"
      },
      {
        "type": "uint256",
        "name": "_fdAmount"
      },
      {
        "type": "uint256",
        "name": "_nftTokenId"
      },
      {
        "type": "uint256[]",
        "name": "_materialIds"
      },
      {
        "type": "uint256[]",
        "name": "_materialAmounts"
      },
      {
        "type": "bool",
        "name": "_useExtendedTest"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "emergencyMode",
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
    "name": "emergencyTimelock",
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
    "name": "emergencyWithdrawRON",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "endRaffle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      }
    ],
    "outputs": []
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
    "name": "getRaffle",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "id"
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
        "name": "totalTickets"
      },
      {
        "type": "address[]",
        "name": "participants"
      },
      {
        "type": "uint8",
        "name": "prizeType"
      },
      {
        "type": "uint8",
        "name": "paymentMethod"
      },
      {
        "type": "uint256",
        "name": "ticketPrice"
      },
      {
        "type": "bool",
        "name": "active"
      },
      {
        "type": "bool",
        "name": "completed"
      },
      {
        "type": "address",
        "name": "winner"
      },
      {
        "type": "uint256",
        "name": "winningTicket"
      }
    ]
  },
  {
    "name": "getRaffleCancellation",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "getRafflePrize",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "fdAmount"
      },
      {
        "type": "uint256",
        "name": "nftTokenId"
      },
      {
        "type": "uint256[]",
        "name": "materialIds"
      },
      {
        "type": "uint256[]",
        "name": "materialAmounts"
      },
      {
        "type": "bool",
        "name": "funded"
      }
    ]
  },
  {
    "name": "getStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "_totalTokensBurned"
      },
      {
        "type": "uint256",
        "name": "_totalRafflesCreated"
      },
      {
        "type": "uint256",
        "name": "_totalPrizesDistributed"
      },
      {
        "type": "uint256",
        "name": "_currentRaffleId"
      }
    ]
  },
  {
    "name": "getUserTickets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      },
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "isOwner",
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
    "name": "isParticipant",
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
    "name": "isRaffleCancelled",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "onERC1155BatchReceived",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "onERC1155Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "ownerCount",
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
    "name": "primateria",
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
    "name": "primosNFT",
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
    "name": "raffleCancellations",
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
    "name": "rafflePrizes",
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
        "name": "fdAmount"
      },
      {
        "type": "uint256",
        "name": "fdTokenId"
      },
      {
        "type": "uint256",
        "name": "nftTokenId"
      },
      {
        "type": "bool",
        "name": "funded"
      }
    ]
  },
  {
    "name": "raffles",
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
        "name": "id"
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
        "name": "totalTickets"
      },
      {
        "type": "uint8",
        "name": "prizeType"
      },
      {
        "type": "uint8",
        "name": "paymentMethod"
      },
      {
        "type": "uint256",
        "name": "ticketPrice"
      },
      {
        "type": "bool",
        "name": "active"
      },
      {
        "type": "bool",
        "name": "completed"
      },
      {
        "type": "address",
        "name": "winner"
      },
      {
        "type": "uint256",
        "name": "winningTicket"
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
    "name": "removeOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      }
    ],
    "outputs": []
  },
  {
    "name": "rewardPoolAddress",
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
    "name": "ronCollectionWallet",
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
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "ticketOwners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
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
    "name": "toggleEmergencyMode",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_reason"
      }
    ],
    "outputs": []
  },
  {
    "name": "totalPrizesDistributed",
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
    "name": "totalRONCollected",
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
    "name": "totalRafflesCreated",
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
    "name": "totalTokensBurned",
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
    "name": "updateCallbackGasLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newLimit"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateGasPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newGasPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "userTickets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
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
    "name": "vrfRequestToRaffle",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract