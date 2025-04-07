import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5868,
  address: '0x36278457936460c0e7429aebf1bccd5061e1d0c1' as const,
  contract_name: 'PixelDungeonsShop',
  display_name: 'Pixel Dungeons Shop',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1734266458,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address",
        "name": "_items"
      },
      {
        "type": "address",
        "name": "_recipient"
      }
    ]
  },
  {
    "name": "InvalidRecipient",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      }
    ]
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
    "name": "ProductAlreadyPurchased",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "productId"
      },
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "ProductLimitReached",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ProductMissingItems",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ProductMissingPrice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ProductNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "productId"
      }
    ]
  },
  {
    "name": "ProductUnavailable",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "productId"
      }
    ]
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SafeERC20FailedOperation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
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
    "name": "ProductAvailabilityChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "productId",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "available"
      }
    ]
  },
  {
    "name": "ProductCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "productId",
        "indexed": true
      }
    ]
  },
  {
    "name": "ProductGifted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "productId",
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
    "name": "ProductPurchased",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "productId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      }
    ]
  },
  {
    "name": "MAX_PRODUCTS",
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
    "name": "addProduct",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_price"
      },
      {
        "type": "bool",
        "name": "_available"
      },
      {
        "type": "uint256[]",
        "name": "_itemIds"
      },
      {
        "type": "uint256[]",
        "name": "_itemAmounts"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getProducts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "price"
          },
          {
            "type": "bool",
            "name": "available"
          },
          {
            "type": "uint256[]",
            "name": "itemIds"
          },
          {
            "type": "uint256[]",
            "name": "itemAmounts"
          }
        ]
      }
    ]
  },
  {
    "name": "gift",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_productId"
      },
      {
        "type": "address",
        "name": "_account"
      }
    ],
    "outputs": []
  },
  {
    "name": "items",
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
    "name": "products",
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
        "name": "price"
      },
      {
        "type": "bool",
        "name": "available"
      }
    ]
  },
  {
    "name": "purchase",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_productId"
      }
    ],
    "outputs": []
  },
  {
    "name": "recipient",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setAvailable",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_id"
      },
      {
        "type": "bool",
        "name": "_available"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRecipient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "token",
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract