import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4956,
  address: '0xee85902589eb0c7f88603bb203045b885a1c3a98' as const,
  contract_name: 'TransparentProxyOZv4_9_5',
  display_name: 'Axie Forge Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x588d8254002e90cadaec0c064de5d86f2e7b9724',
  created_at: 1730791686,
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
    "name": "ComputedPriceTooSmall",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "int8",
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
    "name": "LargeDecimal",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "decimal"
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
    "name": "PanicNegativeQuotePrice",
    "type": "error",
    "inputs": [
      {
        "type": "int256",
        "name": "answer"
      }
    ]
  },
  {
    "name": "PriceTooOld",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "latestTimestamp"
      },
      {
        "type": "uint256",
        "name": "maxAcceptableTimestamp"
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
    "name": "ChainlinkPriceFeedUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "aggregator",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "tokenInDecimal"
      },
      {
        "type": "uint8",
        "name": "tokenOutDecimal"
      },
      {
        "type": "string",
        "name": "description"
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
    "name": "MaxAcceptableAgeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "aggregator",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "maxAcceptableAge"
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
      }
    ]
  },
  {
    "name": "getPriceFeedData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "_aggregator"
          },
          {
            "type": "uint8",
            "name": "_tokenInDecimal"
          },
          {
            "type": "uint8",
            "name": "_tokenOutDecimal"
          },
          {
            "type": "uint64",
            "name": "_maxAcceptableAge"
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
        "type": "tuple",
        "name": "priceFeed",
        "components": [
          {
            "type": "address",
            "name": "_aggregator"
          },
          {
            "type": "uint8",
            "name": "_tokenInDecimal"
          },
          {
            "type": "uint8",
            "name": "_tokenOutDecimal"
          },
          {
            "type": "uint64",
            "name": "_maxAcceptableAge"
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
      }
    ],
    "outputs": []
  },
  {
    "name": "setPriceFeedData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "aggregator"
      },
      {
        "type": "uint8",
        "name": "tokenInDecimal"
      },
      {
        "type": "uint8",
        "name": "tokenOutDecimal"
      },
      {
        "type": "uint64",
        "name": "maxAcceptableAge"
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