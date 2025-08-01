import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25802,
  address: '0x0c1df8ec5b52c33b0ffb4de9fff09127379c71c5' as const,
  contract_name: 'NFTRaffle',
  display_name: 'NFT Raffle',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1740096812,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_feeCollector"
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
        "name": "creator"
      },
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "RaffleFinalized",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "winner"
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
        "name": "buyer"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "REAL_FEE_PERCENTAGE",
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
    "name": "RON_FEE_PERCENTAGE",
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
        "name": "_numberOfTickets"
      }
    ],
    "outputs": []
  },
  {
    "name": "cancelRaffle",
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
    "name": "createRaffle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_nftContract"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
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
    "name": "finalizeRaffle",
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
    "name": "getActiveRaffles",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "raffleId"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "address",
            "name": "nftContract"
          },
          {
            "type": "uint256",
            "name": "tokenId"
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
            "type": "address",
            "name": "winner"
          }
        ]
      }
    ]
  },
  {
    "name": "getExpiredRaffles",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "raffleId"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "address",
            "name": "nftContract"
          },
          {
            "type": "uint256",
            "name": "tokenId"
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
            "type": "address",
            "name": "winner"
          }
        ]
      }
    ]
  },
  {
    "name": "getMyRaffles",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "raffleId"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "address",
            "name": "nftContract"
          },
          {
            "type": "uint256",
            "name": "tokenId"
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
            "type": "address",
            "name": "winner"
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
        "name": "_raffleId"
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
    "name": "getRaffleInfo",
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
        "type": "address",
        "name": "creator"
      },
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint256",
        "name": "tokenId"
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
        "type": "address",
        "name": "winner"
      }
    ]
  },
  {
    "name": "getRaffleParticipants",
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
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getRaffleParticipantsSorted",
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
    "name": "raffleCounter",
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
        "type": "address",
        "name": "creator"
      },
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint256",
        "name": "tokenId"
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
        "type": "bool",
        "name": "isFinalized"
      },
      {
        "type": "address",
        "name": "winner"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract