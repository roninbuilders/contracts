import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27592,
  address: '0x882dc0418df7a57a39871808fb91101b5c80d0bf' as const,
  contract_name: 'RWSniperContract',
  display_name: 'RW Sniper Contract',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742006589,
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
    "name": "AllSearchesCanceled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "totalSearchesCanceled"
      },
      {
        "type": "uint256",
        "name": "totalAmountReturned"
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
    "name": "CancelationFeeUpdated",
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
      },
      {
        "type": "uint256",
        "name": "totalReturned"
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
    "name": "cancelationFee",
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
    "name": "updateCancelationFee",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract