import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 212,
  address: '0xd873aca0c666a306e452baf090837d786515ec3f' as const,
  contract_name: 'Exchange',
  display_name: 'Exchange',
  is_deprecated: true,
  is_proxy: false,
  proxy_to: false,
  created_at: 1638422036,
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
    "name": "ListingCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_creator"
      },
      {
        "type": "uint256",
        "name": "_listingIndex"
      }
    ]
  },
  {
    "name": "ListingDataCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_creator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_listingIndex",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "_listing",
        "components": [
          {
            "type": "uint8[]",
            "name": "tokenTypes"
          },
          {
            "type": "address[]",
            "name": "tokenAddresses"
          },
          {
            "type": "uint256[]",
            "name": "tokenNumbers"
          },
          {
            "type": "uint256",
            "name": "createdAt"
          }
        ]
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
    "name": "TokenAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ]
  },
  {
    "name": "TokenRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": []
  },
  {
    "type": "fallback",
    "stateMutability": "nonpayable"
  },
  {
    "name": "addAuctionType",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_auctionType"
      }
    ],
    "outputs": []
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
    "name": "addTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_tokens"
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
    "name": "auctionTypes",
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
    "name": "autoRevalidate",
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
    "name": "batchCreateListings",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_startingIndex"
      },
      {
        "type": "uint8[][]",
        "name": "_tokenTypePkgs"
      },
      {
        "type": "address[][]",
        "name": "_tokenAddressPkgs"
      },
      {
        "type": "uint256[][]",
        "name": "_tokenNumberPkgs"
      }
    ],
    "outputs": []
  },
  {
    "name": "canFacilitateListing",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_facilitator"
      },
      {
        "type": "uint256",
        "name": "_listingIndex"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "_result"
      }
    ]
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
    "name": "createOrGetListing",
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
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "exchangeTokenMap",
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
    "name": "exchangeTokens",
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
    "name": "getExchangeTokenCount",
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
    "name": "getListing",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_listingIndex"
      }
    ],
    "outputs": [
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
      }
    ]
  },
  {
    "name": "getListingState",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_listingIndex"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getListingsCount",
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
    "name": "getMultipleTokensState",
    "type": "function",
    "stateMutability": "view",
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
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "hasEnoughToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_bidder"
      },
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "_result"
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
    "name": "isTokenExchangeable",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "listingMap",
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
    "name": "listings",
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
        "name": "createdAt"
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
    "name": "removeAuctionType",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_index"
      }
    ],
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
    "name": "removeToken",
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
    "name": "setAutoRevalidate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_value"
      }
    ],
    "outputs": []
  },
  {
    "name": "setStakeHolder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_stakeHolder"
      }
    ],
    "outputs": []
  },
  {
    "name": "settleDeal",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_listingIndex"
      },
      {
        "type": "address",
        "name": "_seller"
      },
      {
        "type": "address",
        "name": "_buyer"
      },
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_auctioneerCut"
      },
      {
        "type": "uint256",
        "name": "_sellerProceeds"
      }
    ],
    "outputs": []
  },
  {
    "name": "stakeHolder",
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract