import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37218,
  address: '0x699f1b27a16c7c602f358141b304980570096846' as const,
  contract_name: 'LottaryContract',
  display_name: 'Lottary Contract',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1758974044,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_vrfCoordinator"
      },
      {
        "type": "address",
        "name": "_usdc"
      },
      {
        "type": "address",
        "name": "_priceFeed"
      }
    ]
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeesDistributed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "validatorShare"
      },
      {
        "type": "uint256",
        "name": "feeRecipientShare"
      },
      {
        "type": "uint256",
        "name": "secondaryShare"
      },
      {
        "type": "uint256",
        "name": "prizePoolShare"
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
    "name": "PrizeClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "ticketId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "winner"
      },
      {
        "type": "uint256",
        "name": "amount"
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
        "name": "ticketPrice"
      },
      {
        "type": "uint256",
        "name": "endTime"
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
        "type": "uint256[]",
        "name": "ticketIds"
      }
    ]
  },
  {
    "name": "TicketsPurchasedWithUSDC",
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
        "type": "uint256[]",
        "name": "ticketIds"
      },
      {
        "type": "uint256",
        "name": "usdcAmount"
      }
    ]
  },
  {
    "name": "UnclaimedPrizeSwept",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "VRFFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "randomness"
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
        "name": "requestId"
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
        "type": "uint256[]",
        "name": "winningTicketIds"
      }
    ]
  },
  {
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      }
    ],
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
        "name": "_quantity"
      }
    ],
    "outputs": []
  },
  {
    "name": "buyTicketsWithUSDC",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      },
      {
        "type": "uint256",
        "name": "_quantity"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimPrize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_ticketId"
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
        "name": "_ticketPrice"
      },
      {
        "type": "uint256",
        "name": "_duration"
      },
      {
        "type": "uint256",
        "name": "_winningTicketCount"
      },
      {
        "type": "uint256",
        "name": "_claimPeriod"
      }
    ],
    "outputs": []
  },
  {
    "name": "drawWinnersManually",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      },
      {
        "type": "uint256",
        "name": "_randomSeed"
      }
    ],
    "outputs": []
  },
  {
    "name": "estimateVrfCost",
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
    "name": "getContractBalance",
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
    "name": "getFeeStatistics",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "validatorTotal"
      },
      {
        "type": "uint256",
        "name": "feeRecipientTotal"
      },
      {
        "type": "uint256",
        "name": "secondaryTotal"
      },
      {
        "type": "uint256",
        "name": "prizePoolTotal"
      }
    ]
  },
  {
    "name": "getLatestRONUSDCPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint8"
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
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "ticketPrice"
      },
      {
        "type": "uint256",
        "name": "endTime"
      },
      {
        "type": "uint256",
        "name": "claimDeadline"
      },
      {
        "type": "uint256",
        "name": "totalTickets"
      },
      {
        "type": "uint256",
        "name": "winningTicketCount"
      },
      {
        "type": "bool",
        "name": "isCompleted"
      },
      {
        "type": "bool",
        "name": "winnersDrawn"
      },
      {
        "type": "uint256",
        "name": "prizePool"
      },
      {
        "type": "bool",
        "name": "vrfRequested"
      }
    ]
  },
  {
    "name": "getUSDCAmountForRon",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "ronAmountWei"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getUserRaffleIDs",
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
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getUserRaffleIdsAndTicketCounts",
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
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
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
    "name": "getUserTotalPrizeAmount",
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
    "name": "getWinningTickets",
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
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "isTicketWinner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      },
      {
        "type": "uint256",
        "name": "_ticketId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isWinningTicket",
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
    "name": "ownerOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      }
    ],
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
    "name": "priceFeedAddress",
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
    "name": "prizeAmounts",
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
    "name": "raffleVrfRequests",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "raffleWinningTickets",
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
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "ticketPrice"
      },
      {
        "type": "uint256",
        "name": "endTime"
      },
      {
        "type": "uint256",
        "name": "claimDeadline"
      },
      {
        "type": "uint256",
        "name": "totalTickets"
      },
      {
        "type": "uint256",
        "name": "winningTicketCount"
      },
      {
        "type": "bool",
        "name": "isCompleted"
      },
      {
        "type": "bool",
        "name": "winnersDrawn"
      },
      {
        "type": "uint256",
        "name": "prizePool"
      },
      {
        "type": "uint256",
        "name": "randomSeed"
      },
      {
        "type": "bool",
        "name": "vrfRequested"
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
    "name": "recoverFunds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_to"
      }
    ],
    "outputs": []
  },
  {
    "name": "requestRandomWinners",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      }
    ],
    "outputs": []
  },
  {
    "name": "rescueRON",
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
    "name": "rescueUSDC",
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
    "name": "ronToWei",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256",
        "name": "_ronAmount"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "setPriceFeedAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_priceFeed"
      }
    ],
    "outputs": []
  },
  {
    "name": "setUsdcAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_usdc"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVrfConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_callbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "_gasPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "sweepUnclaimedPrizes",
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
    "name": "tickets",
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
        "name": "raffleId"
      },
      {
        "type": "uint256",
        "name": "ticketId"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "bool",
        "name": "isClaimed"
      }
    ]
  },
  {
    "name": "totalFeeRecipientFees",
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
    "name": "totalPrizePool",
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
    "name": "totalSecondaryFees",
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
    "name": "totalValidatorFees",
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "usdcAddress",
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
    "name": "userRaffleTickets",
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
    "name": "vrfGasPrice",
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
    "name": "vrfRequests",
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
    "name": "weiToRon",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256",
        "name": "_weiAmount"
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