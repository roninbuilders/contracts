import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4724,
  address: '0x779126c613c98e462141ccacc15859b82d126872' as const,
  contract_name: 'KongzMartWL',
  display_name: 'Kongz Mart WL',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1729516805,
  abi: [
  {
    "name": "GovernorManaged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner_",
        "indexed": true
      },
      {
        "type": "address",
        "name": "governor_"
      },
      {
        "type": "bool",
        "name": "bool_"
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
    "name": "OperatorManaged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner_",
        "indexed": true
      },
      {
        "type": "address",
        "name": "operator_"
      },
      {
        "type": "bool",
        "name": "bool_"
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
    "name": "RequireOwnershipManaged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner_",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "bool_"
      }
    ]
  },
  {
    "name": "TreasuryManaged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner_",
        "indexed": true
      },
      {
        "type": "address",
        "name": "treasury_"
      }
    ]
  },
  {
    "name": "VendingItemAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner_",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "item_",
        "components": [
          {
            "type": "bool",
            "name": "isNativeToken"
          },
          {
            "type": "uint32",
            "name": "amountAvailable"
          },
          {
            "type": "uint32",
            "name": "amountPurchased"
          },
          {
            "type": "uint32",
            "name": "startTime"
          },
          {
            "type": "uint32",
            "name": "endTime"
          },
          {
            "type": "uint32",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenPrice"
          }
        ]
      }
    ]
  },
  {
    "name": "VendingItemGifted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner_",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "item_",
        "components": [
          {
            "type": "bool",
            "name": "isNativeToken"
          },
          {
            "type": "uint32",
            "name": "amountAvailable"
          },
          {
            "type": "uint32",
            "name": "amountPurchased"
          },
          {
            "type": "uint32",
            "name": "startTime"
          },
          {
            "type": "uint32",
            "name": "endTime"
          },
          {
            "type": "uint32",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenPrice"
          }
        ]
      }
    ]
  },
  {
    "name": "VendingItemModified",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner_",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "before_",
        "components": [
          {
            "type": "bool",
            "name": "isNativeToken"
          },
          {
            "type": "uint32",
            "name": "amountAvailable"
          },
          {
            "type": "uint32",
            "name": "amountPurchased"
          },
          {
            "type": "uint32",
            "name": "startTime"
          },
          {
            "type": "uint32",
            "name": "endTime"
          },
          {
            "type": "uint32",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenPrice"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "after_",
        "components": [
          {
            "type": "bool",
            "name": "isNativeToken"
          },
          {
            "type": "uint32",
            "name": "amountAvailable"
          },
          {
            "type": "uint32",
            "name": "amountPurchased"
          },
          {
            "type": "uint32",
            "name": "startTime"
          },
          {
            "type": "uint32",
            "name": "endTime"
          },
          {
            "type": "uint32",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenPrice"
          }
        ]
      }
    ]
  },
  {
    "name": "VendingItemPurchased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer_",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "item_",
        "components": [
          {
            "type": "bool",
            "name": "isNativeToken"
          },
          {
            "type": "uint32",
            "name": "amountAvailable"
          },
          {
            "type": "uint32",
            "name": "amountPurchased"
          },
          {
            "type": "uint32",
            "name": "startTime"
          },
          {
            "type": "uint32",
            "name": "endTime"
          },
          {
            "type": "uint32",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenPrice"
          }
        ]
      }
    ]
  },
  {
    "name": "VendingItemRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner_",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "item_",
        "components": [
          {
            "type": "bool",
            "name": "isNativeToken"
          },
          {
            "type": "uint32",
            "name": "amountAvailable"
          },
          {
            "type": "uint32",
            "name": "amountPurchased"
          },
          {
            "type": "uint32",
            "name": "startTime"
          },
          {
            "type": "uint32",
            "name": "endTime"
          },
          {
            "type": "uint32",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenPrice"
          }
        ]
      }
    ]
  },
  {
    "name": "BananaToken",
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
    "name": "GENKAI",
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
    "name": "G_manageController",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "controller_"
      },
      {
        "type": "bool",
        "name": "bool_"
      }
    ],
    "outputs": []
  },
  {
    "name": "KONGZVX",
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
    "name": "O_manageGovernor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "governor_"
      },
      {
        "type": "bool",
        "name": "bool_"
      }
    ],
    "outputs": []
  },
  {
    "name": "O_setBananaToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "address_"
      }
    ],
    "outputs": []
  },
  {
    "name": "O_setGENKAI",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "address_"
      }
    ],
    "outputs": []
  },
  {
    "name": "O_setKONGZVX",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "address_"
      }
    ],
    "outputs": []
  },
  {
    "name": "O_setRequireHoldGENKAI",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "bool_"
      }
    ],
    "outputs": []
  },
  {
    "name": "O_setRequireHoldVx",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "bool_"
      }
    ],
    "outputs": []
  },
  {
    "name": "O_settreasuryAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "address_"
      }
    ],
    "outputs": []
  },
  {
    "name": "addVendingItem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "VendingItem_",
        "components": [
          {
            "type": "bool",
            "name": "isNativeToken"
          },
          {
            "type": "uint32",
            "name": "amountAvailable"
          },
          {
            "type": "uint32",
            "name": "amountPurchased"
          },
          {
            "type": "uint32",
            "name": "startTime"
          },
          {
            "type": "uint32",
            "name": "endTime"
          },
          {
            "type": "uint32",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenPrice"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "controllers",
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
    "name": "deleteMostRecentVendingItem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "getIndexToPurchasedBatch",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "purchaser_"
      },
      {
        "type": "uint256[]",
        "name": "indexes_"
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
      }
    ]
  },
  {
    "name": "getPurchasersOfItem",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "index_"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getVendingItemsAll",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "bool",
            "name": "isNativeToken"
          },
          {
            "type": "uint32",
            "name": "amountAvailable"
          },
          {
            "type": "uint32",
            "name": "amountPurchased"
          },
          {
            "type": "uint32",
            "name": "startTime"
          },
          {
            "type": "uint32",
            "name": "endTime"
          },
          {
            "type": "uint32",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenPrice"
          }
        ]
      }
    ]
  },
  {
    "name": "getVendingItemsLength",
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
    "name": "getVendingItemsPaginated",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "start_"
      },
      {
        "type": "uint256",
        "name": "end_"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "bool",
            "name": "isNativeToken"
          },
          {
            "type": "uint32",
            "name": "amountAvailable"
          },
          {
            "type": "uint32",
            "name": "amountPurchased"
          },
          {
            "type": "uint32",
            "name": "startTime"
          },
          {
            "type": "uint32",
            "name": "endTime"
          },
          {
            "type": "uint32",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenPrice"
          }
        ]
      }
    ]
  },
  {
    "name": "governors",
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
    "name": "indexToPurchased",
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
    "name": "indexToPurchasers",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_banana"
      },
      {
        "type": "address",
        "name": "_treasury"
      },
      {
        "type": "address",
        "name": "_vx"
      },
      {
        "type": "address",
        "name": "_genkai"
      }
    ],
    "outputs": []
  },
  {
    "name": "modifyVendingItem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "index_"
      },
      {
        "type": "tuple",
        "name": "VendingItem_",
        "components": [
          {
            "type": "bool",
            "name": "isNativeToken"
          },
          {
            "type": "uint32",
            "name": "amountAvailable"
          },
          {
            "type": "uint32",
            "name": "amountPurchased"
          },
          {
            "type": "uint32",
            "name": "startTime"
          },
          {
            "type": "uint32",
            "name": "endTime"
          },
          {
            "type": "uint32",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenPrice"
          }
        ]
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
    "name": "purchaseVendingItem",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "index_"
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
    "name": "requireHoldGENKAI",
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
    "name": "requireHoldVX",
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
    "name": "treasuryAddress",
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
    "name": "vendingItems",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isNativeToken"
      },
      {
        "type": "uint32",
        "name": "amountAvailable"
      },
      {
        "type": "uint32",
        "name": "amountPurchased"
      },
      {
        "type": "uint32",
        "name": "startTime"
      },
      {
        "type": "uint32",
        "name": "endTime"
      },
      {
        "type": "uint32",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "tokenPrice"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract