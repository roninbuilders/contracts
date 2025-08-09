import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36591,
  address: '0xb710ae1276896447b2ef45f0f8a0c8f3a002b598' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Sabong Saga Random Crafting Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xc7c793d987b6b64b36ff4b904ad6a4b41ea1062d',
  created_at: 1754666507,
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
    "name": "AccessControlBadConfirmation",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AccessControlUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "neededRole"
      }
    ]
  },
  {
    "name": "EnforcedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrDuplicateTokenIdInPool",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "ErrInsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "required"
      },
      {
        "type": "uint256",
        "name": "available"
      }
    ]
  },
  {
    "name": "ErrInvalidAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidMaterials",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidResourceIds",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidTokenAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidWeight",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNoWeightedOutputsInPool",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId"
      }
    ]
  },
  {
    "name": "ErrPoolInactive",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId"
      }
    ]
  },
  {
    "name": "ErrPoolNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId"
      }
    ]
  },
  {
    "name": "ErrResourceNotAccepted",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId"
      },
      {
        "type": "uint256",
        "name": "resourceId"
      }
    ]
  },
  {
    "name": "ErrTokenNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "ErrTooManyMaterials",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrTooManyResourceIds",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrTooManyWeightedOutputs",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrTransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "neededRole"
      }
    ]
  },
  {
    "name": "ExpectedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "version"
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
    "name": "PoolActivated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      }
    ]
  },
  {
    "name": "PoolCraftingCompleted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "uint256",
        "name": "totalCrafted"
      },
      {
        "type": "string",
        "name": "referralCode"
      }
    ]
  },
  {
    "name": "PoolCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "string",
        "name": "name"
      }
    ]
  },
  {
    "name": "PoolDeactivated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      }
    ]
  },
  {
    "name": "PoolNameUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "string",
        "name": "newName"
      }
    ]
  },
  {
    "name": "PoolUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      }
    ]
  },
  {
    "name": "PoolWeightedOutputActivated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "PoolWeightedOutputAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "weight"
      }
    ]
  },
  {
    "name": "PoolWeightedOutputDeactivated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "PoolWeightedOutputUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newWeight"
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
    "name": "COCK",
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
    "name": "FEATHERS",
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
    "name": "MANAGER_ROLE",
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
    "name": "MAX_ACCEPTED_RESOURCE_IDS",
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
    "name": "MAX_CRAFT_AMOUNT",
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
    "name": "MAX_MATERIALS_PER_POOL",
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
    "name": "MAX_WEIGHTED_OUTPUTS_PER_POOL",
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
    "name": "PAUSER_ROLE",
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
    "name": "REFERRAL",
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
    "name": "RESOURCES",
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
    "name": "addWeightedOutputToPool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "uint256",
        "name": "_weight"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchGetPoolInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_poolIds"
      }
    ],
    "outputs": [
      {
        "type": "string[]",
        "name": "names"
      },
      {
        "type": "bool[]",
        "name": "existsArray"
      },
      {
        "type": "bool[]",
        "name": "activeArray"
      },
      {
        "type": "uint256[]",
        "name": "totalWeights"
      },
      {
        "type": "uint256[]",
        "name": "outputCounts"
      }
    ]
  },
  {
    "name": "batchGetPools",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_poolIds"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "poolsData",
        "components": [
          {
            "type": "tuple[]",
            "name": "materials",
            "components": [
              {
                "type": "uint8",
                "name": "tokenType"
              },
              {
                "type": "address",
                "name": "tokenAddress"
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
            "type": "uint256[]",
            "name": "acceptedResourceIds"
          },
          {
            "type": "bool",
            "name": "exists"
          },
          {
            "type": "bool",
            "name": "active"
          },
          {
            "type": "string",
            "name": "name"
          },
          {
            "type": "uint256",
            "name": "totalWeight"
          }
        ]
      }
    ]
  },
  {
    "name": "craftFromPool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "uint256[]",
        "name": "_resourceIds"
      },
      {
        "type": "uint256[]",
        "name": "_resourceAmounts"
      },
      {
        "type": "string",
        "name": "_referralCode"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "createPool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_name"
      },
      {
        "type": "tuple[]",
        "name": "_materials",
        "components": [
          {
            "type": "uint8",
            "name": "tokenType"
          },
          {
            "type": "address",
            "name": "tokenAddress"
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
        "type": "uint256[]",
        "name": "_acceptedResourceIds"
      },
      {
        "type": "uint256[]",
        "name": "_outputTokenIds"
      },
      {
        "type": "uint256[]",
        "name": "_outputWeights"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getActivePoolCount",
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
    "name": "getActivePoolIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getAllPoolIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getPool",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "materials",
        "components": [
          {
            "type": "uint8",
            "name": "tokenType"
          },
          {
            "type": "address",
            "name": "tokenAddress"
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
        "type": "uint256[]",
        "name": "acceptedResourceIds"
      },
      {
        "type": "bool",
        "name": "exists"
      },
      {
        "type": "bool",
        "name": "active"
      },
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "uint256",
        "name": "totalWeight"
      }
    ]
  },
  {
    "name": "getPoolActiveWeightedOutputCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPoolActiveWeightedOutputs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "weight"
          },
          {
            "type": "bool",
            "name": "active"
          }
        ]
      }
    ]
  },
  {
    "name": "getPoolCount",
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
    "name": "getPoolCraftingCost",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "materials",
        "components": [
          {
            "type": "uint8",
            "name": "tokenType"
          },
          {
            "type": "address",
            "name": "tokenAddress"
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
  },
  {
    "name": "getPoolInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "bool",
        "name": "exists"
      },
      {
        "type": "bool",
        "name": "active"
      },
      {
        "type": "uint256",
        "name": "totalWeight"
      },
      {
        "type": "uint256",
        "name": "weightedOutputCount"
      },
      {
        "type": "uint256",
        "name": "materialCount"
      },
      {
        "type": "uint256",
        "name": "acceptedResourceCount"
      }
    ]
  },
  {
    "name": "getPoolName",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "getPoolTotalWeight",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPoolWeightedOutputCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPoolWeightedOutputs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "weight"
          },
          {
            "type": "bool",
            "name": "active"
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
    "name": "getRoleMembers",
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
        "type": "address[]"
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
        "name": "_COCK"
      },
      {
        "type": "address",
        "name": "_RESOURCES"
      },
      {
        "type": "address",
        "name": "_FEATHERS"
      },
      {
        "type": "address",
        "name": "_REFERRAL"
      },
      {
        "type": "address",
        "name": "_FEE_WALLET"
      }
    ],
    "outputs": []
  },
  {
    "name": "isPoolActive",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isPoolResourceAccepted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "uint256",
        "name": "_resourceId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "nextPoolId",
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
    "name": "poolExists",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "poolIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "poolResourceAccepted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "poolWeightedOutputIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "pools",
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
        "name": "totalWeight"
      },
      {
        "type": "bool",
        "name": "exists"
      },
      {
        "type": "bool",
        "name": "active"
      },
      {
        "type": "string",
        "name": "name"
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
        "name": "callerConfirmation"
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
    "name": "setPoolActive",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "bool",
        "name": "_active"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPoolName",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "string",
        "name": "_newName"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPoolWeightedOutputActive",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "bool",
        "name": "_active"
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
  },
  {
    "name": "updateFeeWallet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_address"
      }
    ],
    "outputs": []
  },
  {
    "name": "updatePoolConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "tuple[]",
        "name": "_materials",
        "components": [
          {
            "type": "uint8",
            "name": "tokenType"
          },
          {
            "type": "address",
            "name": "tokenAddress"
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
        "type": "uint256[]",
        "name": "_acceptedResourceIds"
      },
      {
        "type": "uint256[]",
        "name": "_outputTokenIds"
      },
      {
        "type": "uint256[]",
        "name": "_outputWeights"
      }
    ],
    "outputs": []
  },
  {
    "name": "updatePoolWeightedOutput",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "uint256",
        "name": "_newWeight"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract