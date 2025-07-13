import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34831,
  address: '0x71d85639aac86479371d731270637513727d2634' as const,
  contract_name: 'RWSniperContractV2',
  display_name: 'RW Sniper Contract V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1747176199,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_botAddress"
      },
      {
        "type": "address",
        "name": "_feeCollector"
      }
    ]
  },
  {
    "name": "AllBalancesReturned",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "totalUsers"
      },
      {
        "type": "uint256",
        "name": "totalAmount"
      }
    ]
  },
  {
    "name": "AllSearchesCanceled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "totalSearchesCanceled"
      }
    ]
  },
  {
    "name": "BalanceDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "BalanceWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "BotAddressUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newBotAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "CreationFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newFee"
      }
    ]
  },
  {
    "name": "ERC20Transferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "FeeCollectorUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newFeeCollector",
        "indexed": true
      }
    ]
  },
  {
    "name": "MinOfferBalanceRequiredUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMinValue"
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
    "name": "RONTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "SearchCancelabilityUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "searchId",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isCancelable"
      }
    ]
  },
  {
    "name": "SearchCanceled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "searchId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "creator",
        "indexed": true
      }
    ]
  },
  {
    "name": "SearchCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "searchId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "creator",
        "indexed": true
      },
      {
        "type": "string",
        "name": "payload"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bool",
        "name": "isERC1155"
      }
    ]
  },
  {
    "name": "SearchExecuted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "searchId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "executor",
        "indexed": true
      }
    ]
  },
  {
    "name": "SearchFinalized",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "searchId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "executor",
        "indexed": true
      },
      {
        "type": "address",
        "name": "creator",
        "indexed": true
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
        "type": "bool",
        "name": "isERC1155"
      }
    ]
  },
  {
    "name": "SearchReEnabled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "searchId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "executor",
        "indexed": true
      }
    ]
  },
  {
    "name": "TesterAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tester",
        "indexed": true
      }
    ]
  },
  {
    "name": "TesterRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tester",
        "indexed": true
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
    "name": "addTester",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tester"
      }
    ],
    "outputs": []
  },
  {
    "name": "botAddress",
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
    "name": "cancelAllSearches",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalCanceled"
      }
    ]
  },
  {
    "name": "cancelSearch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_searchId"
      }
    ],
    "outputs": []
  },
  {
    "name": "createSearch",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "_payload"
      },
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "bool",
        "name": "_isERC1155"
      },
      {
        "type": "uint256",
        "name": "_totalAvailable"
      }
    ],
    "outputs": []
  },
  {
    "name": "creationFee",
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
    "name": "depositBalance",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "executeSearch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_searchId"
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
    "name": "finalizeSearch",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_searchId"
      },
      {
        "type": "address",
        "name": "_nftContract"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "bool",
        "name": "_isERC1155"
      }
    ],
    "outputs": []
  },
  {
    "name": "finalizedSearchCount",
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
    "name": "finalizedSearches",
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
        "type": "address",
        "name": "creator"
      },
      {
        "type": "string",
        "name": "payload"
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
        "type": "bool",
        "name": "isERC1155"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "uint256",
        "name": "totalAmount"
      },
      {
        "type": "uint256",
        "name": "feePaid"
      }
    ]
  },
  {
    "name": "getActiveSearches",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "activeSearches",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "string",
            "name": "payload"
          },
          {
            "type": "uint256",
            "name": "totalAvailable"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "bool",
            "name": "isERC1155"
          },
          {
            "type": "bool",
            "name": "cancelRequested"
          },
          {
            "type": "bool",
            "name": "isCancelable"
          },
          {
            "type": "uint256",
            "name": "totalAmount"
          },
          {
            "type": "bool",
            "name": "offerAllowed"
          }
        ]
      }
    ]
  },
  {
    "name": "getActiveSearchesWithCancelRequest",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "activeSearches",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "string",
            "name": "payload"
          },
          {
            "type": "uint256",
            "name": "totalAvailable"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "bool",
            "name": "isERC1155"
          },
          {
            "type": "bool",
            "name": "cancelRequested"
          },
          {
            "type": "bool",
            "name": "isCancelable"
          },
          {
            "type": "uint256",
            "name": "totalAmount"
          },
          {
            "type": "bool",
            "name": "offerAllowed"
          }
        ]
      }
    ]
  },
  {
    "name": "getAllFinalizedSearches",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "allFinalizedSearches",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "string",
            "name": "payload"
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
            "type": "bool",
            "name": "isERC1155"
          },
          {
            "type": "uint256",
            "name": "timestamp"
          },
          {
            "type": "uint256",
            "name": "totalAmount"
          },
          {
            "type": "uint256",
            "name": "feePaid"
          }
        ]
      }
    ]
  },
  {
    "name": "getMyActiveSearches",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "myActiveSearches",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "string",
            "name": "payload"
          },
          {
            "type": "uint256",
            "name": "totalAvailable"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "bool",
            "name": "isERC1155"
          },
          {
            "type": "bool",
            "name": "cancelRequested"
          },
          {
            "type": "bool",
            "name": "isCancelable"
          },
          {
            "type": "uint256",
            "name": "totalAmount"
          },
          {
            "type": "bool",
            "name": "offerAllowed"
          }
        ]
      }
    ]
  },
  {
    "name": "getSearchDetails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_searchId"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "payload"
      },
      {
        "type": "uint256",
        "name": "totalAmount"
      },
      {
        "type": "bool",
        "name": "isCancelable"
      },
      {
        "type": "bool",
        "name": "isActive"
      },
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "bool",
        "name": "isERC1155"
      },
      {
        "type": "uint256",
        "name": "totalAvailable"
      },
      {
        "type": "bool",
        "name": "offerAllowed"
      }
    ]
  },
  {
    "name": "getUserFinalizedSearches",
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
        "type": "tuple[]",
        "name": "userFinalizedSearches",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "string",
            "name": "payload"
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
            "type": "bool",
            "name": "isERC1155"
          },
          {
            "type": "uint256",
            "name": "timestamp"
          },
          {
            "type": "uint256",
            "name": "totalAmount"
          },
          {
            "type": "uint256",
            "name": "feePaid"
          }
        ]
      }
    ]
  },
  {
    "name": "hasBalance",
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
    "name": "isTester",
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
    "name": "minOfferBalanceRequired",
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
    "name": "reEnableSearch",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_searchId"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeTester",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tester"
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
    "name": "requestCancelSearch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_searchId"
      }
    ],
    "outputs": []
  },
  {
    "name": "returnAllUserBalances",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalUsers"
      },
      {
        "type": "uint256",
        "name": "totalAmount"
      }
    ]
  },
  {
    "name": "searchCount",
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
    "name": "searches",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "payload"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "totalAmount"
      },
      {
        "type": "bool",
        "name": "isCancelable"
      },
      {
        "type": "bool",
        "name": "isActive"
      },
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "bool",
        "name": "isERC1155"
      },
      {
        "type": "uint256",
        "name": "feePercentage"
      },
      {
        "type": "uint256",
        "name": "totalAvailable"
      },
      {
        "type": "bool",
        "name": "cancelRequested"
      },
      {
        "type": "bool",
        "name": "offerAllowed"
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
    "name": "transferERC20ToFeeCollector",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_amount"
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
    "name": "transferRONToFeeCollector",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateBotAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newBotAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateCreationFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newFee"
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
    "name": "updateMinOfferBalanceRequired",
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
    "name": "updateSearchCancelability",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_searchId"
      },
      {
        "type": "bool",
        "name": "_isCancelable"
      }
    ],
    "outputs": []
  },
  {
    "name": "userBalances",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "usersWithBalance",
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
    "name": "withdrawBalance",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
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