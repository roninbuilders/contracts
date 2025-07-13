import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 24471,
  address: '0x3ef234bc2a04d86f6041e419458d9acbd077f2c1' as const,
  contract_name: 'TransparentProxyOZv4_9_5',
  display_name: 'Collection Offer Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xf0ac6d807d2afa88ef5d2e266d03c69bed4726d9',
  created_at: 1738826817,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "logic"
      },
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "bytes",
        "name": "data"
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
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "wron"
      },
      {
        "type": "address",
        "name": "wronHelper"
      }
    ]
  },
  {
    "name": "ERC1155_TRANSFER_FAILED",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ERC20_TRANSFER_FAILED",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ERC721_TRANSFER_FAILED",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpiredSignature",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "InActiveOffer",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "start"
      },
      {
        "type": "uint256",
        "name": "end"
      }
    ]
  },
  {
    "name": "InvalidLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRoyaltyRegistry",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSender",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidShortString",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      },
      {
        "type": "address",
        "name": "actual"
      },
      {
        "type": "address",
        "name": "expected"
      }
    ]
  },
  {
    "name": "InvalidState",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "actual"
      },
      {
        "type": "uint8",
        "name": "expected"
      }
    ]
  },
  {
    "name": "InvalidTotalRoyaltyFees",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MismatchedArraysLength",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "MismatchedOfferAndOrder",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "NotReadyToUnlock",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "unlockTime"
      }
    ]
  },
  {
    "name": "NotTrustedVerifier",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OutOfStock",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StringTooLong",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "str"
      }
    ]
  },
  {
    "name": "UnexpectedTotalRecipientAmounts",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UsedNonce",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ]
  },
  {
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
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
    "name": "OfferCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "offerHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "offer",
        "components": [
          {
            "type": "address",
            "name": "buyer"
          },
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "bool",
            "name": "isERC721"
          },
          {
            "type": "uint64",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint40",
            "name": "startTime"
          },
          {
            "type": "uint40",
            "name": "endTime"
          },
          {
            "type": "uint80",
            "name": "itemPrice"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "string",
            "name": "metadata"
          }
        ]
      }
    ]
  },
  {
    "name": "OfferSettled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "offerHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "offer",
        "components": [
          {
            "type": "address",
            "name": "buyer"
          },
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "bool",
            "name": "isERC721"
          },
          {
            "type": "uint64",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint40",
            "name": "startTime"
          },
          {
            "type": "uint40",
            "name": "endTime"
          },
          {
            "type": "uint80",
            "name": "itemPrice"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "string",
            "name": "metadata"
          }
        ]
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "OrderFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "offerHash",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "offer",
        "components": [
          {
            "type": "address",
            "name": "buyer"
          },
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "bool",
            "name": "isERC721"
          },
          {
            "type": "uint64",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint40",
            "name": "startTime"
          },
          {
            "type": "uint40",
            "name": "endTime"
          },
          {
            "type": "uint80",
            "name": "itemPrice"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "string",
            "name": "metadata"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "bytes32",
            "name": "offerHash"
          },
          {
            "type": "address",
            "name": "seller"
          },
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "uint256[]",
            "name": "ids"
          },
          {
            "type": "uint256[]",
            "name": "amounts"
          },
          {
            "type": "uint256",
            "name": "unlockTime"
          },
          {
            "type": "uint256",
            "name": "masterNonce"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "recipients",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "newFulfilledAmount"
      }
    ]
  },
  {
    "name": "OrderLocked",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "offerHash",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "offer",
        "components": [
          {
            "type": "address",
            "name": "buyer"
          },
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "bool",
            "name": "isERC721"
          },
          {
            "type": "uint64",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint40",
            "name": "startTime"
          },
          {
            "type": "uint40",
            "name": "endTime"
          },
          {
            "type": "uint80",
            "name": "itemPrice"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "string",
            "name": "metadata"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "bytes32",
            "name": "offerHash"
          },
          {
            "type": "address",
            "name": "seller"
          },
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "uint256[]",
            "name": "ids"
          },
          {
            "type": "uint256[]",
            "name": "amounts"
          },
          {
            "type": "uint256",
            "name": "unlockTime"
          },
          {
            "type": "uint256",
            "name": "masterNonce"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "newLockedAmount"
      }
    ]
  },
  {
    "name": "OrderReturned",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "offerHash",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "offer",
        "components": [
          {
            "type": "address",
            "name": "buyer"
          },
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "bool",
            "name": "isERC721"
          },
          {
            "type": "uint64",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint40",
            "name": "startTime"
          },
          {
            "type": "uint40",
            "name": "endTime"
          },
          {
            "type": "uint80",
            "name": "itemPrice"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "string",
            "name": "metadata"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "bytes32",
            "name": "offerHash"
          },
          {
            "type": "address",
            "name": "seller"
          },
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "uint256[]",
            "name": "ids"
          },
          {
            "type": "uint256[]",
            "name": "amounts"
          },
          {
            "type": "uint256",
            "name": "unlockTime"
          },
          {
            "type": "uint256",
            "name": "masterNonce"
          }
        ]
      },
      {
        "type": "bool",
        "name": "collectionReturnSuccess",
        "indexed": true
      }
    ]
  },
  {
    "name": "OrderStateTransition",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "from"
      },
      {
        "type": "uint8",
        "name": "to"
      }
    ]
  },
  {
    "name": "OrderUnlocked",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "offerHash",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "offer",
        "components": [
          {
            "type": "address",
            "name": "buyer"
          },
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "bool",
            "name": "isERC721"
          },
          {
            "type": "uint64",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint40",
            "name": "startTime"
          },
          {
            "type": "uint40",
            "name": "endTime"
          },
          {
            "type": "uint80",
            "name": "itemPrice"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "string",
            "name": "metadata"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "bytes32",
            "name": "offerHash"
          },
          {
            "type": "address",
            "name": "seller"
          },
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "uint256[]",
            "name": "ids"
          },
          {
            "type": "uint256[]",
            "name": "amounts"
          },
          {
            "type": "uint256",
            "name": "unlockTime"
          },
          {
            "type": "uint256",
            "name": "masterNonce"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "newLockedAmount"
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
    "name": "RoyaltyRegistryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "royaltyRegistry"
      }
    ]
  },
  {
    "name": "TrustedVerifierUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newVerifier",
        "indexed": true
      }
    ]
  },
  {
    "name": "UnorderedNonceInvalidation",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "word"
      },
      {
        "type": "uint256",
        "name": "mask"
      }
    ]
  },
  {
    "name": "UnorderedNonceUsed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nonce"
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
    "name": "GAS_FOR_NATIVE_TRANSFER",
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
    "name": "PERMIT_FULFILL_ORDER_TYPE_HASH",
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
    "name": "PERMIT_SETTLE_BATCH_OFFERS_TYPE_HASH",
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
    "name": "PERMIT_SETTLE_OFFER_TYPE_HASH",
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
    "name": "WRON",
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
    "name": "WRON_HELPER",
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
    "name": "cancelOffersAt",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "nonces"
      }
    ],
    "outputs": []
  },
  {
    "name": "eip712Domain",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes1",
        "name": "fields"
      },
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "version"
      },
      {
        "type": "uint256",
        "name": "chainId"
      },
      {
        "type": "address",
        "name": "verifyingContract"
      },
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "uint256[]",
        "name": "extensions"
      }
    ]
  },
  {
    "name": "fulfillOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "offer",
        "components": [
          {
            "type": "address",
            "name": "buyer"
          },
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "bool",
            "name": "isERC721"
          },
          {
            "type": "uint64",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint40",
            "name": "startTime"
          },
          {
            "type": "uint40",
            "name": "endTime"
          },
          {
            "type": "uint80",
            "name": "itemPrice"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "string",
            "name": "metadata"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "bytes32",
            "name": "offerHash"
          },
          {
            "type": "address",
            "name": "seller"
          },
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "uint256[]",
            "name": "ids"
          },
          {
            "type": "uint256[]",
            "name": "amounts"
          },
          {
            "type": "uint256",
            "name": "unlockTime"
          },
          {
            "type": "uint256",
            "name": "masterNonce"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes",
        "name": "sig"
      }
    ],
    "outputs": []
  },
  {
    "name": "getCommissionContract",
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
    "name": "getFulfillmentInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "offerHash"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint64",
            "name": "lockedAmount"
          },
          {
            "type": "uint64",
            "name": "fulfilledAmount"
          }
        ]
      }
    ]
  },
  {
    "name": "getLockingPeriod",
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
    "name": "getMasterNonce",
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
    "name": "getRoyaltyRegistry",
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
    "name": "getStateOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
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
        "type": "address",
        "name": "commissionContract"
      },
      {
        "type": "uint64",
        "name": "lockingPeriod"
      },
      {
        "type": "address",
        "name": "trustedVerifier_"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "royaltyRegistry"
      }
    ],
    "outputs": []
  },
  {
    "name": "invalidateUnorderedNonce",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "wordPos"
      },
      {
        "type": "uint256",
        "name": "mask"
      }
    ],
    "outputs": []
  },
  {
    "name": "isUsedNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256",
        "name": "nonce"
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
    "stateMutability": "pure",
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
    "stateMutability": "pure",
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
    "stateMutability": "pure",
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
    "name": "rejectBatchOrders",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "offers",
        "components": [
          {
            "type": "address",
            "name": "buyer"
          },
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "bool",
            "name": "isERC721"
          },
          {
            "type": "uint64",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint40",
            "name": "startTime"
          },
          {
            "type": "uint40",
            "name": "endTime"
          },
          {
            "type": "uint80",
            "name": "itemPrice"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "string",
            "name": "metadata"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "orders",
        "components": [
          {
            "type": "bytes32",
            "name": "offerHash"
          },
          {
            "type": "address",
            "name": "seller"
          },
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "uint256[]",
            "name": "ids"
          },
          {
            "type": "uint256[]",
            "name": "amounts"
          },
          {
            "type": "uint256",
            "name": "unlockTime"
          },
          {
            "type": "uint256",
            "name": "masterNonce"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "rejectOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "offer",
        "components": [
          {
            "type": "address",
            "name": "buyer"
          },
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "bool",
            "name": "isERC721"
          },
          {
            "type": "uint64",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint40",
            "name": "startTime"
          },
          {
            "type": "uint40",
            "name": "endTime"
          },
          {
            "type": "uint80",
            "name": "itemPrice"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "string",
            "name": "metadata"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "bytes32",
            "name": "offerHash"
          },
          {
            "type": "address",
            "name": "seller"
          },
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "uint256[]",
            "name": "ids"
          },
          {
            "type": "uint256[]",
            "name": "amounts"
          },
          {
            "type": "uint256",
            "name": "unlockTime"
          },
          {
            "type": "uint256",
            "name": "masterNonce"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "releaseNonLockingOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "offer",
        "components": [
          {
            "type": "address",
            "name": "buyer"
          },
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "bool",
            "name": "isERC721"
          },
          {
            "type": "uint64",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint40",
            "name": "startTime"
          },
          {
            "type": "uint40",
            "name": "endTime"
          },
          {
            "type": "uint80",
            "name": "itemPrice"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "string",
            "name": "metadata"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "bytes32",
            "name": "offerHash"
          },
          {
            "type": "address",
            "name": "seller"
          },
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "uint256[]",
            "name": "ids"
          },
          {
            "type": "uint256[]",
            "name": "amounts"
          },
          {
            "type": "uint256",
            "name": "unlockTime"
          },
          {
            "type": "uint256",
            "name": "masterNonce"
          }
        ]
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
    "name": "settleBatchOffers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "params",
        "components": [
          {
            "type": "tuple",
            "name": "offer",
            "components": [
              {
                "type": "address",
                "name": "buyer"
              },
              {
                "type": "address",
                "name": "collection"
              },
              {
                "type": "bool",
                "name": "isERC721"
              },
              {
                "type": "uint64",
                "name": "amount"
              },
              {
                "type": "address",
                "name": "paymentToken"
              },
              {
                "type": "uint40",
                "name": "startTime"
              },
              {
                "type": "uint40",
                "name": "endTime"
              },
              {
                "type": "uint80",
                "name": "itemPrice"
              },
              {
                "type": "uint256",
                "name": "nonce"
              },
              {
                "type": "string",
                "name": "metadata"
              }
            ]
          },
          {
            "type": "uint256[]",
            "name": "ids"
          },
          {
            "type": "uint256[]",
            "name": "amounts"
          },
          {
            "type": "bytes",
            "name": "buyerSig"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes",
        "name": "verifierSig"
      }
    ],
    "outputs": []
  },
  {
    "name": "settleOffer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "param",
        "components": [
          {
            "type": "tuple",
            "name": "offer",
            "components": [
              {
                "type": "address",
                "name": "buyer"
              },
              {
                "type": "address",
                "name": "collection"
              },
              {
                "type": "bool",
                "name": "isERC721"
              },
              {
                "type": "uint64",
                "name": "amount"
              },
              {
                "type": "address",
                "name": "paymentToken"
              },
              {
                "type": "uint40",
                "name": "startTime"
              },
              {
                "type": "uint40",
                "name": "endTime"
              },
              {
                "type": "uint80",
                "name": "itemPrice"
              },
              {
                "type": "uint256",
                "name": "nonce"
              },
              {
                "type": "string",
                "name": "metadata"
              }
            ]
          },
          {
            "type": "uint256[]",
            "name": "ids"
          },
          {
            "type": "uint256[]",
            "name": "amounts"
          },
          {
            "type": "bytes",
            "name": "buyerSig"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes",
        "name": "verifierSig"
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
  },
  {
    "name": "trustedVerifier",
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
    "name": "updateTrustedVerifier",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "trustedVerifier_"
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