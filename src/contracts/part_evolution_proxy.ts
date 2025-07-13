import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1351,
  address: '0x6e8699915b5328363855af28543d4bdb7439db71' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Part Evolution Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xed8f143c8ae16442ba0a87ebcf78532d1e1ad3d3',
  created_at: 1702269527,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "address",
        "name": "admin_"
      },
      {
        "type": "bytes",
        "name": "_data"
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
    "name": "admin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "admin_"
      }
    ]
  },
  {
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "implementation_"
      }
    ]
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeToAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
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
    "name": "ErrExcessiveInputAmount",
    "type": "error",
    "inputs": []
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
    "name": "ErrRequestPaymentAmountFailed",
    "type": "error",
    "inputs": []
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
    "name": "getAxieDelegation",
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
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV3",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "axieDelegation"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV4",
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