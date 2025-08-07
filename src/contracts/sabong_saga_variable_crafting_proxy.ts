import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36541,
  address: '0x1239dd594d355197795d6c05596313ee613e2f74' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Sabong Saga Variable Crafting Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x83253736bd71e07e94bfbc9571bcf5952c8b1509',
  created_at: 1754368539,
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
    "name": "ErrAnyResourceMaterialWithoutAcceptedIds",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId"
      }
    ]
  },
  {
    "name": "ErrDuplicateResourceId",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "resourceId"
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
    "name": "ErrMultipleAnyResourceMaterials",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrRecipeInactive",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId"
      }
    ]
  },
  {
    "name": "ErrRecipeNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId"
      }
    ]
  },
  {
    "name": "ErrResourceIdNotAccepted",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "resourceId"
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
    "name": "ItemCrafted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "outputTokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "string",
        "name": "referrer"
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
    "name": "RecipeAcceptedResourceIdsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "newIds"
      }
    ]
  },
  {
    "name": "RecipeActivated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "RecipeCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "RecipeDeactivated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "RecipeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "ResourcesBurned",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "resourceIds"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
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
    "name": "MAX_ACCEPTED_RESOURCE_IDS_PER_RECIPE",
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
    "name": "MAX_MATERIALS_PER_RECIPE",
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
    "name": "activateRecipe",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchCheckResourceBalances",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256[]",
        "name": "resourceIds"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "balances"
      }
    ]
  },
  {
    "name": "batchGetRecipes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "outputTokenIds"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "recipesData",
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
            "type": "bool",
            "name": "exists"
          },
          {
            "type": "bool",
            "name": "isActive"
          }
        ]
      },
      {
        "type": "uint256[][]",
        "name": "acceptedResourceIdsArray"
      }
    ]
  },
  {
    "name": "craft",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256[]",
        "name": "resourceIds"
      },
      {
        "type": "uint256[]",
        "name": "resourceAmounts"
      },
      {
        "type": "string",
        "name": "referralCode"
      }
    ],
    "outputs": []
  },
  {
    "name": "deactivateRecipe",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAllRecipeIds",
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
    "name": "getCraftingCost",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId"
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "getRecipe",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId"
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
        "type": "bool",
        "name": "exists"
      },
      {
        "type": "bool",
        "name": "isActive"
      },
      {
        "type": "uint256[]",
        "name": "acceptedResourceIds"
      }
    ]
  },
  {
    "name": "getRecipeAcceptedResourceIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getRecipeCount",
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
    "name": "isRecipeActive",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isRecipeResourceIdAccepted",
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
    "name": "recipeAcceptedResourceIds",
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
    "name": "recipeExists",
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
    "name": "recipeIds",
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
    "name": "recipes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "exists"
      },
      {
        "type": "bool",
        "name": "isActive"
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
    "name": "setRecipe",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId"
      },
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
      }
    ],
    "outputs": []
  },
  {
    "name": "setRecipeAcceptedResourceIds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "outputTokenId"
      },
      {
        "type": "uint256[]",
        "name": "acceptedResourceIds"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract