import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 181,
  address: '0x004965ea925a7cc0dfa9c080bba9249aef5e9d54' as const,
  contract_name: 'ClockAuction',
  display_name: 'Clock Auction',
  is_deprecated: true,
  is_proxy: false,
  proxy_to: false,
  created_at: 1632220760,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "AdminRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "AuctionCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_seller"
      },
      {
        "type": "uint256",
        "name": "_listingIndex"
      }
    ]
  },
  {
    "name": "AuctionCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_seller"
      },
      {
        "type": "uint256",
        "name": "_listingIndex"
      },
      {
        "type": "uint256[]",
        "name": "_startingPrices"
      },
      {
        "type": "uint256[]",
        "name": "_endingPrices"
      },
      {
        "type": "address[]",
        "name": "_exchangeTokens"
      },
      {
        "type": "uint256[]",
        "name": "_durations"
      },
      {
        "type": "uint256",
        "name": "_startingTimestamps"
      }
    ]
  },
  {
    "name": "AuctionSuccessful",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_seller"
      },
      {
        "type": "address",
        "name": "_buyer"
      },
      {
        "type": "uint256",
        "name": "_listingIndex"
      },
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_totalPrice"
      }
    ]
  },
  {
    "name": "OperatorAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_operator",
        "indexed": true
      }
    ]
  },
  {
    "name": "OperatorRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_operator",
        "indexed": true
      }
    ]
  },
  {
    "name": "Paused",
    "type": "event",
    "inputs": []
  },
  {
    "name": "TokenAuctionCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_seller"
      },
      {
        "type": "uint256",
        "name": "_listingIndex"
      },
      {
        "type": "address",
        "name": "_exchangeTokens"
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": []
  },
  {
    "name": "addOperators",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_addedOperators"
      }
    ],
    "outputs": []
  },
  {
    "name": "admin",
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
    "name": "auctions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "seller"
      }
    ]
  },
  {
    "name": "batchCreateAuctions",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "_pkgs"
      }
    ],
    "outputs": []
  },
  {
    "name": "cancelAuction",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_listingIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "cancelTokenAuction",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_listingIndex"
      },
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "completeInitilization",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "createAuction",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8[]",
        "name": "_tokenTypes"
      },
      {
        "type": "address[]",
        "name": "_tokenAddresses"
      },
      {
        "type": "uint256[]",
        "name": "_tokenNumbers"
      },
      {
        "type": "uint256[]",
        "name": "_startingPrices"
      },
      {
        "type": "uint256[]",
        "name": "_endingPrices"
      },
      {
        "type": "address[]",
        "name": "_exchangeTokens"
      },
      {
        "type": "uint256[]",
        "name": "_durations"
      }
    ],
    "outputs": []
  },
  {
    "name": "createAuction",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_listingIndex"
      },
      {
        "type": "uint256[]",
        "name": "_startingPrices"
      },
      {
        "type": "uint256[]",
        "name": "_endingPrices"
      },
      {
        "type": "address[]",
        "name": "_exchangeTokens"
      },
      {
        "type": "uint256[]",
        "name": "_durations"
      }
    ],
    "outputs": []
  },
  {
    "name": "exchangeContract",
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
    "name": "getAuctionInfos",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_seller"
      },
      {
        "type": "uint256",
        "name": "_listingIndex"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "startingPrice"
          },
          {
            "type": "uint256",
            "name": "endingPrice"
          },
          {
            "type": "address",
            "name": "exchangeToken"
          },
          {
            "type": "uint256",
            "name": "duration"
          },
          {
            "type": "uint256",
            "name": "startedAt"
          }
        ]
      }
    ]
  },
  {
    "name": "getCurrentPrices",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_seller"
      },
      {
        "type": "uint256",
        "name": "_listingIndex"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getTokenAuctions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "uint256",
        "name": "_tokenNumber"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "_sellers"
      },
      {
        "type": "uint256[]",
        "name": "_listingIndexes"
      }
    ]
  },
  {
    "name": "getTokenAuctionsCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "uint256",
        "name": "_tokenNumber"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "initialized",
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
    "name": "isAuctionExisting",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_seller"
      },
      {
        "type": "uint256",
        "name": "_listingIndex"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "operator",
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
    "name": "operators",
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
    "name": "ownerCut",
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
    "name": "removeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "removeOperators",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_removedOperators"
      }
    ],
    "outputs": []
  },
  {
    "name": "revalidateAuction",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_seller"
      },
      {
        "type": "uint256",
        "name": "_listingIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "revalidateRelatedAuctions",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_listingIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "setOwnerCut",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newOwnerCut"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTokenMaxOccurrences",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenMaxOccurrences"
      }
    ],
    "outputs": []
  },
  {
    "name": "settleAuction",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_seller"
      },
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_bidAmount"
      },
      {
        "type": "uint256",
        "name": "_listingIndex"
      },
      {
        "type": "uint256",
        "name": "_listingState"
      }
    ],
    "outputs": []
  },
  {
    "name": "tokenMaxOccurrences",
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "updateExchangeContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_exchangeContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawEther",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract