import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 843,
  address: '0xc1f6fbc6da4234239f44becce0438545f8cdbf5e' as const,
  contract_name: 'Gifts',
  display_name: 'Gifts',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1696867423,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_nativeTokenWrapper"
      },
      {
        "type": "address",
        "name": "_restrictionController"
      }
    ]
  },
  {
    "name": "FailedtoRefundNativeToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "GiftAlreadyCancelled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "GiftAlreadyClaimed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "available"
      },
      {
        "type": "uint256",
        "name": "required"
      }
    ]
  },
  {
    "name": "InvalidControllerAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidGift",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPayload",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "message"
      }
    ]
  },
  {
    "name": "InvalidRestriction",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidVerifier",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TooManyGifts",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TooManyGiftsToCancel",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TooManyRestrictions",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TooManyTokens",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Unauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnmetRestriction",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "restriction"
      }
    ]
  },
  {
    "name": "ControllerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_restrictionController"
      }
    ]
  },
  {
    "name": "GiftCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_giftID",
        "indexed": true
      }
    ]
  },
  {
    "name": "GiftClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_giftID",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_claimedBy"
      }
    ]
  },
  {
    "name": "GiftCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_giftID",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_createdBy"
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
    "name": "MAX_GIFTS_PER_CANCEL_TX",
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
    "name": "MAX_GIFTS_PER_CREATEGIFTS",
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
    "name": "MAX_RESTRICTIONS_PER_GIFT",
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
    "name": "MAX_TOKENS_PER_GIFT",
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
    "name": "cancelGifts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_giftIDs"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimGift",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_giftID"
      },
      {
        "type": "address",
        "name": "_receiver"
      },
      {
        "type": "bytes",
        "name": "_signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "createGift",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_newGift",
        "components": [
          {
            "type": "tuple[]",
            "name": "tokens",
            "components": [
              {
                "type": "address",
                "name": "assetContract"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "restrictions",
            "components": [
              {
                "type": "string",
                "name": "id"
              },
              {
                "type": "bytes",
                "name": "args"
              }
            ]
          },
          {
            "type": "address",
            "name": "verifier"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "createGifts",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_newGift",
        "components": [
          {
            "type": "tuple[]",
            "name": "tokens",
            "components": [
              {
                "type": "address",
                "name": "assetContract"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "restrictions",
            "components": [
              {
                "type": "string",
                "name": "id"
              },
              {
                "type": "bytes",
                "name": "args"
              }
            ]
          },
          {
            "type": "address",
            "name": "verifier"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "emergencyExit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "getGift",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_verifier"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "currentGift",
        "components": [
          {
            "type": "uint256",
            "name": "giftID"
          },
          {
            "type": "uint256",
            "name": "createdAt"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "bool",
            "name": "claimed"
          },
          {
            "type": "bool",
            "name": "cancelled"
          },
          {
            "type": "tuple[]",
            "name": "restrictions",
            "components": [
              {
                "type": "string",
                "name": "id"
              },
              {
                "type": "bytes",
                "name": "args"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "tokens",
            "components": [
              {
                "type": "address",
                "name": "assetContract"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "getUnclaimedGifts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "giftsTemp",
        "components": [
          {
            "type": "uint256",
            "name": "giftID"
          },
          {
            "type": "uint256",
            "name": "createdAt"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "bool",
            "name": "claimed"
          },
          {
            "type": "bool",
            "name": "cancelled"
          },
          {
            "type": "tuple[]",
            "name": "restrictions",
            "components": [
              {
                "type": "string",
                "name": "id"
              },
              {
                "type": "bytes",
                "name": "args"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "tokens",
            "components": [
              {
                "type": "address",
                "name": "assetContract"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "isTrustedForwarder",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "forwarder"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
    "name": "onERC721Received",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
    "name": "updateController",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_restrictionController"
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