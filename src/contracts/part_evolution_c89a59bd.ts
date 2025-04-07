import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1518,
  address: '0x70e8c0667aaf20b8e97ec3f8ec11ef2bc89a59bd' as const,
  contract_name: 'PartEvolution',
  display_name: 'Part Evolution',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1704872376,
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
        "name": "baseToken"
      },
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
    "name": "RouterContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "routerContract"
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
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ],
    "outputs": []
  },
  {
    "name": "evolvePart",
    "type": "function",
    "stateMutability": "nonpayable",
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
        "type": "address[]",
        "name": "path"
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
        "type": "address"
      },
      {
        "type": "uint256[]"
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
    "name": "getRouterContract",
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
        "type": "address[3]",
        "name": "paymentInfoAddr"
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
        "name": "baseToken"
      },
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
    "name": "setRouterContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "routerContract"
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