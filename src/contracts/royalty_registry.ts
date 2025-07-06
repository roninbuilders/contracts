import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34865,
  address: '0x7744f75b7d38a44b16313c969bdf9737e37132a8' as const,
  contract_name: 'RoyaltyRegistry',
  display_name: 'Royalty Registry',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1747307157,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ExceedBpsCap",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeeSettingsDoNotExist",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidBasicPoints",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRecipient",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRoyaltyLookupAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TotalRecipientAmountExceedsUpperBound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnauthorizedCaller",
    "type": "error",
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
    "name": "PlatformFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "platform",
        "indexed": true
      },
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "settings",
        "components": [
          {
            "type": "tuple[]",
            "name": "feeDists",
            "components": [
              {
                "type": "address",
                "name": "recipient"
              },
              {
                "type": "uint16",
                "name": "bps"
              }
            ]
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
    "name": "RoyaltyAddressLookupRegistered",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "address",
        "name": "royaltyAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "by",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoyaltyFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "settings",
        "components": [
          {
            "type": "tuple[]",
            "name": "feeDists",
            "components": [
              {
                "type": "address",
                "name": "recipient"
              },
              {
                "type": "uint16",
                "name": "bps"
              }
            ]
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
    "name": "BASIC_POINT",
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
    "name": "PLATFORM_BPS_CAP",
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
    "name": "ROYALTY_BPS_CAP",
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
    "name": "deletePlatformFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "platform"
      },
      {
        "type": "address",
        "name": "collection"
      }
    ],
    "outputs": []
  },
  {
    "name": "deleteRoyaltyFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      }
    ],
    "outputs": []
  },
  {
    "name": "getPlatformAndRoyaltyFees",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "salePrice"
      },
      {
        "type": "bool",
        "name": "fallbackERC2981"
      }
    ],
    "outputs": [
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
      }
    ]
  },
  {
    "name": "getPlatformFeeSettings",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "platform"
      },
      {
        "type": "address",
        "name": "collection"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "settings",
        "components": [
          {
            "type": "tuple[]",
            "name": "feeDists",
            "components": [
              {
                "type": "address",
                "name": "recipient"
              },
              {
                "type": "uint16",
                "name": "bps"
              }
            ]
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
    "name": "getPlatformFees",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "platform"
      },
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "salePrice"
      }
    ],
    "outputs": [
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
    "name": "getRoyaltyFeeSettings",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "settings",
        "components": [
          {
            "type": "tuple[]",
            "name": "feeDists",
            "components": [
              {
                "type": "address",
                "name": "recipient"
              },
              {
                "type": "uint16",
                "name": "bps"
              }
            ]
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
    "name": "getRoyaltyFees",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "salePrice"
      },
      {
        "type": "bool",
        "name": "fallbackERC2981"
      }
    ],
    "outputs": [
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
        "type": "address[]",
        "name": "platforms"
      },
      {
        "type": "address[]",
        "name": "collections"
      },
      {
        "type": "tuple[][]",
        "name": "feeDists",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint16",
            "name": "bps"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "lookupRoyaltyAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "overrideRoyaltyFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "tuple[]",
        "name": "feeDist",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint16",
            "name": "bps"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "registerRoyaltyAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "address",
        "name": "royaltyAddress"
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
    "name": "tryGetPlatformAndRoyaltyFees",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "platform"
      },
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "salePrice"
      },
      {
        "type": "bool",
        "name": "fallbackERC2981"
      }
    ],
    "outputs": [
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
      }
    ]
  },
  {
    "name": "updatePlatformFees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "platform"
      },
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "tuple[]",
        "name": "feeDist",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint16",
            "name": "bps"
          }
        ]
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract