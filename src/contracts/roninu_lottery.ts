import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 26071,
  address: '0xedbcda80e05da0e434bff59bd96aa6a33d891b4e' as const,
  contract_name: 'RoninuLottery',
  display_name: 'Roninu Lottery',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1740924694,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_roninuToken"
      },
      {
        "type": "address",
        "name": "_projectWallet"
      },
      {
        "type": "address",
        "name": "_vrfCoordinator"
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
    "name": "DistributionUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "winnerPercentage"
      },
      {
        "type": "uint256",
        "name": "projectPercentage"
      },
      {
        "type": "uint256",
        "name": "burnPercentage"
      }
    ]
  },
  {
    "name": "LotteryDurationUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newDuration"
      }
    ]
  },
  {
    "name": "LotteryRoundCompleted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "roundId"
      },
      {
        "type": "address",
        "name": "winner"
      },
      {
        "type": "uint256",
        "name": "prizePool"
      }
    ]
  },
  {
    "name": "LotteryRoundStarted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "roundId"
      },
      {
        "type": "uint256",
        "name": "ticketPrice"
      },
      {
        "type": "uint256",
        "name": "winnerPercentage"
      },
      {
        "type": "uint256",
        "name": "projectPercentage"
      },
      {
        "type": "uint256",
        "name": "burnPercentage"
      },
      {
        "type": "uint256",
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "endTime"
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
    "name": "PrizePoolUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountAdded"
      }
    ]
  },
  {
    "name": "RandomnessFulfilled",
    "type": "event",
    "inputs": [
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
    "name": "RandomnessRequested",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestId"
      }
    ]
  },
  {
    "name": "ReceivedRON",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "RefundIssued",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "RoundExtended",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "roundId"
      },
      {
        "type": "uint256",
        "name": "newEndTime"
      }
    ]
  },
  {
    "name": "TicketPriceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newTicketPrice"
      }
    ]
  },
  {
    "name": "TicketPurchased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "ticketCount"
      }
    ]
  },
  {
    "name": "WinnerSelected",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "winner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "prize"
      }
    ]
  },
  {
    "name": "addToPrizePool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "burnAddress",
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
    "name": "burnPercentage",
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
    "name": "currentRound",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "roundId"
      },
      {
        "type": "uint256",
        "name": "ticketPrice"
      },
      {
        "type": "uint256",
        "name": "winnerPercentage"
      },
      {
        "type": "uint256",
        "name": "projectPercentage"
      },
      {
        "type": "uint256",
        "name": "burnPercentage"
      },
      {
        "type": "uint256",
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "endTime"
      }
    ]
  },
  {
    "name": "getParticipantsCount",
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
    "name": "getPrizePool",
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
    "name": "lotteryDuration",
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
    "name": "maxTicketsPerWallet",
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
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "pure",
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
    "name": "participantsByRound",
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
    "name": "pickWinner",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "projectPercentage",
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
    "name": "projectWallet",
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
    "name": "recoverERC20",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "registerParticipant",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "roninuToken",
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
    "name": "roundCounter",
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
    "name": "setDistribution",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_winnerPercentage"
      },
      {
        "type": "uint256",
        "name": "_projectPercentage"
      },
      {
        "type": "uint256",
        "name": "_burnPercentage"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLotteryDuration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newDuration"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxTicketsPerWallet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_maxTickets"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTicketPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_ticketPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "ticketPrice",
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
    "name": "ticketsByRound",
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
    "name": "transferRNS",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "rnsContractAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
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
    "name": "winnerPercentage",
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
    "name": "withdrawRON",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
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