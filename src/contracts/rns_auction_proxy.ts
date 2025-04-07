import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1133,
  address: '0xd55e6d80aea1ff4650bc952c1653ab3cf1b940a9' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'RNS Auction Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x7b663d7252a8dcd213bbf8f812f3691b78ab62fb',
  created_at: 1699254612,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "address",
        "name": "admin_"
      },
      {
        "type": "bytes",
        "name": "_data"
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
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": []
  },
  {
    "name": "AlreadyBidding",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      }
    ]
  },
  {
    "name": "ContractBidderIsForbidden",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EventIsNotCreatedOrAlreadyStarted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidArrayLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidEventRange",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NameNotReserved",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoOneBidded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotYetEnded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NullAssignment",
    "type": "error",
    "inputs": []
  },
  {
    "name": "QueryIsNotInPeriod",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RatioIsTooLarge",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AuctionEventSet",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "auctionId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "range",
        "components": [
          {
            "type": "uint256",
            "name": "startedAt"
          },
          {
            "type": "uint256",
            "name": "endedAt"
          }
        ]
      }
    ]
  },
  {
    "name": "BidGapRatioUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "ratio"
      }
    ]
  },
  {
    "name": "BidPlaced",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "auctionId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "address",
        "name": "bidder"
      },
      {
        "type": "uint256",
        "name": "previousPrice"
      },
      {
        "type": "address",
        "name": "previousBidder"
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
    "name": "LabelsListed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "auctionId",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "startingPrices"
      }
    ]
  },
  {
    "name": "RoleAdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "previousAdminRole",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "newAdminRole",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleGranted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleRevoked",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "TreasuryUpdated",
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
    "name": "DEFAULT_ADMIN_ROLE",
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
    "name": "DOMAIN_EXPIRY_DURATION",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "MAX_AUCTION_DOMAIN_EXPIRY",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "MAX_EXPIRY",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "MAX_PERCENTAGE",
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
    "name": "OPERATOR_ROLE",
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
    "name": "bulkClaimBidNames",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "ids"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "claimedAts"
      }
    ]
  },
  {
    "name": "bulkClaimUnbiddedNames",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "tos"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "bool",
        "name": "allowFailure"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "claimeds"
      }
    ]
  },
  {
    "name": "bulkRegister",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string[]",
        "name": "labels"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "ids"
      }
    ]
  },
  {
    "name": "createAuctionEvent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "range",
        "components": [
          {
            "type": "uint256",
            "name": "startedAt"
          },
          {
            "type": "uint256",
            "name": "endedAt"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "auctionId"
      }
    ]
  },
  {
    "name": "getAuction",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "auction",
        "components": [
          {
            "type": "bytes32",
            "name": "auctionId"
          },
          {
            "type": "uint256",
            "name": "startingPrice"
          },
          {
            "type": "tuple",
            "name": "bid",
            "components": [
              {
                "type": "address",
                "name": "bidder"
              },
              {
                "type": "uint256",
                "name": "price"
              },
              {
                "type": "uint256",
                "name": "timestamp"
              },
              {
                "type": "uint256",
                "name": "claimedAt"
              }
            ]
          }
        ]
      },
      {
        "type": "uint256",
        "name": "beatPrice"
      }
    ]
  },
  {
    "name": "getAuctionEvent",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "auctionId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "startedAt"
          },
          {
            "type": "uint256",
            "name": "endedAt"
          }
        ]
      }
    ]
  },
  {
    "name": "getBidGapRatio",
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
    "name": "getRNSUnified",
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
    "name": "getRoleAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getRoleMember",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getRoleMemberCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getTreasury",
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
    "name": "grantRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "hasRole",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
        "name": "admin"
      },
      {
        "type": "address[]",
        "name": "operators"
      },
      {
        "type": "address",
        "name": "rnsUnified"
      },
      {
        "type": "address",
        "name": "treasury"
      },
      {
        "type": "uint256",
        "name": "bidGapRatio"
      }
    ],
    "outputs": []
  },
  {
    "name": "listNamesForAuction",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "auctionId"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "startingPrices"
      }
    ],
    "outputs": []
  },
  {
    "name": "placeBid",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "reserved",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "revokeRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "setAuctionEvent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "auctionId"
      },
      {
        "type": "tuple",
        "name": "range",
        "components": [
          {
            "type": "uint256",
            "name": "startedAt"
          },
          {
            "type": "uint256",
            "name": "endedAt"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setBidGapRatio",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "ratio"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": []
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract