import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4954,
  address: '0x4da0e07b4d03f73b0dea4b379d6fe1b5317135da' as const,
  contract_name: 'AxieForge',
  display_name: 'Axie Forge',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1730791686,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AddressIsNotContract",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ]
  },
  {
    "name": "AddressIsNull",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "AxieLevelTooLow",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ]
  },
  {
    "name": "AxieStillInCooldown",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ]
  },
  {
    "name": "ErrComputedPriceTooLarge",
    "type": "error",
    "inputs": [
      {
        "type": "int32",
        "name": "expo1"
      },
      {
        "type": "int32",
        "name": "expo2"
      },
      {
        "type": "int64",
        "name": "price1"
      }
    ]
  },
  {
    "name": "ErrExponentTooLarge",
    "type": "error",
    "inputs": [
      {
        "type": "int32",
        "name": "expo"
      }
    ]
  },
  {
    "name": "ErrPositiveExponent",
    "type": "error",
    "inputs": [
      {
        "type": "int32",
        "name": "expo"
      }
    ]
  },
  {
    "name": "InvalidArrayLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAxieNonce",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ]
  },
  {
    "name": "InvalidFeeAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidQuantity",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "signer"
      }
    ]
  },
  {
    "name": "LengthMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "NonexistentBlueprint",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      }
    ]
  },
  {
    "name": "NotAxieOwner",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ]
  },
  {
    "name": "SignatureExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenContractTypeNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      }
    ]
  },
  {
    "name": "AxieContractAddressUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "axieContractAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "AxieCooldownSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "timestamp",
        "indexed": true
      }
    ]
  },
  {
    "name": "BlueprintAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "blueprintId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "blueprint",
        "components": [
          {
            "type": "tuple[]",
            "name": "ingredients",
            "components": [
              {
                "type": "uint8",
                "name": "tokenType"
              },
              {
                "type": "uint248",
                "name": "quantity"
              },
              {
                "type": "uint256",
                "name": "id"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "outputItems",
            "components": [
              {
                "type": "uint8",
                "name": "tokenType"
              },
              {
                "type": "uint248",
                "name": "quantity"
              },
              {
                "type": "uint256",
                "name": "id"
              }
            ]
          },
          {
            "type": "uint240",
            "name": "feeInUSD"
          },
          {
            "type": "uint16",
            "name": "requiredAxieLevel"
          }
        ]
      }
    ]
  },
  {
    "name": "BlueprintUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "blueprintId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "updatedBlueprint",
        "components": [
          {
            "type": "tuple[]",
            "name": "ingredients",
            "components": [
              {
                "type": "uint8",
                "name": "tokenType"
              },
              {
                "type": "uint248",
                "name": "quantity"
              },
              {
                "type": "uint256",
                "name": "id"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "outputItems",
            "components": [
              {
                "type": "uint8",
                "name": "tokenType"
              },
              {
                "type": "uint248",
                "name": "quantity"
              },
              {
                "type": "uint256",
                "name": "id"
              }
            ]
          },
          {
            "type": "uint240",
            "name": "feeInUSD"
          },
          {
            "type": "uint16",
            "name": "requiredAxieLevel"
          }
        ]
      }
    ]
  },
  {
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
  },
  {
    "name": "ForgingCompleted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "requester",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "blueprintId",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "axieIds"
      },
      {
        "type": "tuple[]",
        "name": "updatedAxieInfos",
        "components": [
          {
            "type": "uint128",
            "name": "cooldown"
          },
          {
            "type": "uint128",
            "name": "nonce"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "feeInAXS"
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
    "name": "PaymentConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "feeReceiver",
        "indexed": true
      },
      {
        "type": "address",
        "name": "paymentToken",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "priceFeed",
        "components": [
          {
            "type": "uint8",
            "name": "tokenInDecimal"
          },
          {
            "type": "uint8",
            "name": "tokenOutDecimal"
          },
          {
            "type": "address",
            "name": "pyth"
          },
          {
            "type": "bytes32",
            "name": "priceId"
          },
          {
            "type": "uint256",
            "name": "maxAcceptableAge"
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
    "name": "TokenContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType",
        "indexed": true
      },
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
    "name": "DOMAIN_SEPARATOR",
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
    "name": "FORGE_TYPEHASH",
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
    "name": "SIGNER_ROLE",
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
    "name": "addBlueprint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "blueprint",
        "components": [
          {
            "type": "tuple[]",
            "name": "ingredients",
            "components": [
              {
                "type": "uint8",
                "name": "tokenType"
              },
              {
                "type": "uint248",
                "name": "quantity"
              },
              {
                "type": "uint256",
                "name": "id"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "outputItems",
            "components": [
              {
                "type": "uint8",
                "name": "tokenType"
              },
              {
                "type": "uint248",
                "name": "quantity"
              },
              {
                "type": "uint256",
                "name": "id"
              }
            ]
          },
          {
            "type": "uint240",
            "name": "feeInUSD"
          },
          {
            "type": "uint16",
            "name": "requiredAxieLevel"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "blueprintId"
      }
    ]
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
    "name": "forge",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "blueprintId"
      },
      {
        "type": "uint256[]",
        "name": "axieIds"
      },
      {
        "type": "tuple[]",
        "name": "axieInfos",
        "components": [
          {
            "type": "uint128",
            "name": "cooldown"
          },
          {
            "type": "uint128",
            "name": "nonce"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAxieContract",
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
    "name": "getAxieInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint128",
            "name": "cooldown"
          },
          {
            "type": "uint128",
            "name": "nonce"
          }
        ]
      }
    ]
  },
  {
    "name": "getBlueprintById",
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
        "components": [
          {
            "type": "tuple[]",
            "name": "ingredients",
            "components": [
              {
                "type": "uint8",
                "name": "tokenType"
              },
              {
                "type": "uint248",
                "name": "quantity"
              },
              {
                "type": "uint256",
                "name": "id"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "outputItems",
            "components": [
              {
                "type": "uint8",
                "name": "tokenType"
              },
              {
                "type": "uint248",
                "name": "quantity"
              },
              {
                "type": "uint256",
                "name": "id"
              }
            ]
          },
          {
            "type": "uint240",
            "name": "feeInUSD"
          },
          {
            "type": "uint16",
            "name": "requiredAxieLevel"
          }
        ]
      }
    ]
  },
  {
    "name": "getPaymentConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint8",
            "name": "tokenInDecimal"
          },
          {
            "type": "uint8",
            "name": "tokenOutDecimal"
          },
          {
            "type": "address",
            "name": "pyth"
          },
          {
            "type": "bytes32",
            "name": "priceId"
          },
          {
            "type": "uint256",
            "name": "maxAcceptableAge"
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
    "name": "getTokenContract",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      }
    ],
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
        "type": "address[]",
        "name": "operators"
      },
      {
        "type": "address",
        "name": "signer"
      },
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "address",
        "name": "feeReceiver"
      },
      {
        "type": "address",
        "name": "axieContract"
      },
      {
        "type": "address",
        "name": "materialContract"
      },
      {
        "type": "address",
        "name": "consumableContract"
      },
      {
        "type": "address",
        "name": "slpContract"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "tuple",
        "name": "priceFeed",
        "components": [
          {
            "type": "uint8",
            "name": "tokenInDecimal"
          },
          {
            "type": "uint8",
            "name": "tokenOutDecimal"
          },
          {
            "type": "address",
            "name": "pyth"
          },
          {
            "type": "bytes32",
            "name": "priceId"
          },
          {
            "type": "uint256",
            "name": "maxAcceptableAge"
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
    "name": "setAxieCooldown",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "uint128",
        "name": "timestamp"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPaymentConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "feeReceiver"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "tuple",
        "name": "priceFeed",
        "components": [
          {
            "type": "uint8",
            "name": "tokenInDecimal"
          },
          {
            "type": "uint8",
            "name": "tokenOutDecimal"
          },
          {
            "type": "address",
            "name": "pyth"
          },
          {
            "type": "bytes32",
            "name": "priceId"
          },
          {
            "type": "uint256",
            "name": "maxAcceptableAge"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setTokenContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      },
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
  },
  {
    "name": "updateBlueprint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "blueprint",
        "components": [
          {
            "type": "tuple[]",
            "name": "ingredients",
            "components": [
              {
                "type": "uint8",
                "name": "tokenType"
              },
              {
                "type": "uint248",
                "name": "quantity"
              },
              {
                "type": "uint256",
                "name": "id"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "outputItems",
            "components": [
              {
                "type": "uint8",
                "name": "tokenType"
              },
              {
                "type": "uint248",
                "name": "quantity"
              },
              {
                "type": "uint256",
                "name": "id"
              }
            ]
          },
          {
            "type": "uint240",
            "name": "feeInUSD"
          },
          {
            "type": "uint16",
            "name": "requiredAxieLevel"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract