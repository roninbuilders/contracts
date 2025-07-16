import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34213,
  address: '0x1d1aecb6d32f21355694e63161dc4bd35e02d7da' as const,
  contract_name: 'ItemShop',
  display_name: 'Item Shop',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1745738601,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_initialOwner"
      }
    ]
  },
  {
    "name": "ExceedsMaxSupply",
    "type": "error",
    "inputs": []
  },
  {
    "name": "IncorrectRonAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientAllowance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidCollectionAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPageSize",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ItemNotFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ItemSoldOut",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MainContractNotSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MintFailed",
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
    "name": "PaymentTokenNotSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ItemAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "uint256",
        "name": "ronPrice"
      },
      {
        "type": "uint256",
        "name": "maxSupply"
      }
    ]
  },
  {
    "name": "ItemPurchased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "tokenCost"
      },
      {
        "type": "uint256",
        "name": "ronCost"
      }
    ]
  },
  {
    "name": "ItemRonPriceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newRonPrice"
      }
    ]
  },
  {
    "name": "ItemSupplyUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newMaxSupply"
      }
    ]
  },
  {
    "name": "ItemTokenPriceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newPrice"
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
    "name": "addItem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_collection"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "uint256",
        "name": "_price"
      },
      {
        "type": "uint256",
        "name": "_ronPrice"
      },
      {
        "type": "uint256",
        "name": "_maxSupply"
      }
    ],
    "outputs": []
  },
  {
    "name": "buyItem",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "getItem",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "uint256",
            "name": "price"
          },
          {
            "type": "uint256",
            "name": "ronPrice"
          },
          {
            "type": "uint256",
            "name": "maxSupply"
          },
          {
            "type": "uint256",
            "name": "currentSupply"
          },
          {
            "type": "bool",
            "name": "exists"
          }
        ]
      }
    ]
  },
  {
    "name": "getItemsByCollection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_collection"
      },
      {
        "type": "uint256",
        "name": "_startInternalId"
      },
      {
        "type": "uint256",
        "name": "_pageSize"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "matchingItems",
        "components": [
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "uint256",
            "name": "price"
          },
          {
            "type": "uint256",
            "name": "ronPrice"
          },
          {
            "type": "uint256",
            "name": "maxSupply"
          },
          {
            "type": "uint256",
            "name": "currentSupply"
          },
          {
            "type": "bool",
            "name": "exists"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "nextInternalId"
      }
    ]
  },
  {
    "name": "itemCounter",
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
    "name": "items",
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
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "uint256",
        "name": "ronPrice"
      },
      {
        "type": "uint256",
        "name": "maxSupply"
      },
      {
        "type": "uint256",
        "name": "currentSupply"
      },
      {
        "type": "bool",
        "name": "exists"
      }
    ]
  },
  {
    "name": "mainContract",
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
    "name": "paymentToken",
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
    "name": "setMainContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_mainContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPaymentToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_paymentToken"
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
    "name": "updateItemRonPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "uint256",
        "name": "_newRonPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateItemSupply",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "uint256",
        "name": "_newMaxSupply"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateItemTokenPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "uint256",
        "name": "_newPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawRon",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract