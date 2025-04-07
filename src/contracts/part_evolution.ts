import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5189,
  address: '0x22ec90551744c7eb97915f2153b5a3e9aca77b2c' as const,
  contract_name: 'PartEvolution',
  display_name: 'Part Evolution',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1731928418,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ErrBodyPartAlreadyEvolved",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrBodyPartNotYetEvolved",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrBodyPartStillEvolving",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrBurnMaterialFailed",
    "type": "error",
    "inputs": []
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
    "name": "ErrExcessiveInputAmount",
    "type": "error",
    "inputs": []
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
    "name": "ErrInvalidPath",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidPathLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrLevelNotReach",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "evolvedPartCount"
      },
      {
        "type": "uint256",
        "name": "axieLevel"
      }
    ]
  },
  {
    "name": "ErrMaxEvolved",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrMaxEvolvedPart",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNotAuthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNotExistPartEvolvedWaitsForCompletion",
    "type": "error",
    "inputs": []
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
    "name": "ErrRequestPaymentAmountFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OutRangeValue",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "uint256",
        "name": "max"
      }
    ]
  },
  {
    "name": "AxieContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "axieContract"
      }
    ]
  },
  {
    "name": "BoostCostMultiplierUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "EvolutionDurationUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "EvolutionFeesUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "fees"
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
    "name": "MaterialContractAddressUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "materialContractAddress"
      }
    ]
  },
  {
    "name": "MaterialCostsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "costs"
      }
    ]
  },
  {
    "name": "PartDevolved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "axieId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "partId",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isNightmareCleansed"
      }
    ]
  },
  {
    "name": "PartEvolutionCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "axieId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "finishTs",
        "indexed": true
      }
    ]
  },
  {
    "name": "PartEvolutionFinished",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "axieId",
        "indexed": true
      }
    ]
  },
  {
    "name": "Paused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "PaymentConfigsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256[]",
        "name": "evolutionFees"
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
    "name": "SpecialMaterialCostUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "specialMaterialCost"
      }
    ]
  },
  {
    "name": "TreasuryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "treasury"
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "DEFAULT_ADDITION_GAS",
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
    "name": "MAX_PERCENTAGE",
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
    "name": "completePartEvolution",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ],
    "outputs": []
  },
  {
    "name": "devolvePart",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "uint8",
        "name": "partId"
      }
    ],
    "outputs": []
  },
  {
    "name": "evolvePart",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "uint8",
        "name": "partId"
      },
      {
        "type": "bool",
        "name": "boosted"
      },
      {
        "type": "uint256",
        "name": "amountInMax"
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
    "name": "getAxieNightmareContract",
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
    "name": "getBoostCostMultiplier",
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
    "name": "getConsumableContract",
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
    "name": "getEvolutionDuration",
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
    "name": "getEvolutionInfo",
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
            "type": "uint8",
            "name": "status"
          },
          {
            "type": "uint8",
            "name": "partId"
          },
          {
            "type": "uint256",
            "name": "finishTimestamp"
          }
        ]
      }
    ]
  },
  {
    "name": "getMaterialCosts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "costs"
      }
    ]
  },
  {
    "name": "getPaymentConfigs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getPriceFeed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
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
    "name": "getSpecialMaterialCost",
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
    "name": "getTreasury",
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
        "name": "axieContract"
      },
      {
        "type": "address",
        "name": "materialContract"
      },
      {
        "type": "address",
        "name": "treasury"
      },
      {
        "type": "uint256[]",
        "name": "materialCosts"
      },
      {
        "type": "uint256",
        "name": "costMultiplier"
      },
      {
        "type": "uint256",
        "name": "evolutionDuration"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256[]",
        "name": "evolutionFees"
      },
      {
        "type": "uint256",
        "name": "specialMaterialCost"
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
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "consumableERC1155Contract"
      },
      {
        "type": "address",
        "name": "nightmareContract"
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
    "name": "isReadyToComplete",
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
        "type": "bool"
      }
    ]
  },
  {
    "name": "pause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "paused",
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
    "name": "setAxieContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setBoostCostMultiplier",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "multiplier"
      }
    ],
    "outputs": []
  },
  {
    "name": "setEvolutionDuration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "duration"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaterialContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaterialCosts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "costs"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPaymentConfigs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256[]",
        "name": "evolutionFees"
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
    "name": "setSpecialMaterialCost",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "cost"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "treasury"
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract