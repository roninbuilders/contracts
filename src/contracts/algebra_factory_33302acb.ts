import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35319,
  address: '0x10253594a832f967994b44f33411940533302acb' as const,
  contract_name: 'AlgebraFactory',
  display_name: 'Algebra Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1749134167,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_poolDeployer"
      }
    ]
  },
  {
    "name": "CustomPool",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "deployer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token0",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token1",
        "indexed": true
      },
      {
        "type": "address",
        "name": "pool"
      }
    ]
  },
  {
    "name": "DefaultCommunityFee",
    "type": "event",
    "inputs": [
      {
        "type": "uint16",
        "name": "newDefaultCommunityFee"
      }
    ]
  },
  {
    "name": "DefaultFee",
    "type": "event",
    "inputs": [
      {
        "type": "uint16",
        "name": "newDefaultFee"
      }
    ]
  },
  {
    "name": "DefaultPluginFactory",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "defaultPluginFactoryAddress"
      }
    ]
  },
  {
    "name": "DefaultTickspacing",
    "type": "event",
    "inputs": [
      {
        "type": "int24",
        "name": "newDefaultTickspacing"
      }
    ]
  },
  {
    "name": "OwnershipTransferStarted",
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
    "name": "Pool",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token0",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token1",
        "indexed": true
      },
      {
        "type": "address",
        "name": "pool"
      }
    ]
  },
  {
    "name": "RenounceOwnershipFinish",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "RenounceOwnershipStart",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "uint256",
        "name": "finishTimestamp"
      }
    ]
  },
  {
    "name": "RenounceOwnershipStop",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "timestamp"
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
    "name": "VaultFactory",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newVaultFactory"
      }
    ]
  },
  {
    "name": "CUSTOM_POOL_DEPLOYER",
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
    "name": "POOLS_ADMINISTRATOR_ROLE",
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
    "name": "POOL_INIT_CODE_HASH",
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "computeCustomPoolAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "deployer"
      },
      {
        "type": "address",
        "name": "token0"
      },
      {
        "type": "address",
        "name": "token1"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "customPool"
      }
    ]
  },
  {
    "name": "computePoolAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token0"
      },
      {
        "type": "address",
        "name": "token1"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pool"
      }
    ]
  },
  {
    "name": "createCustomPool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "deployer"
      },
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "address",
        "name": "tokenA"
      },
      {
        "type": "address",
        "name": "tokenB"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "customPool"
      }
    ]
  },
  {
    "name": "createPool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenA"
      },
      {
        "type": "address",
        "name": "tokenB"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pool"
      }
    ]
  },
  {
    "name": "customPoolByPair",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "defaultCommunityFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16"
      }
    ]
  },
  {
    "name": "defaultConfigurationForPool",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16",
        "name": "communityFee"
      },
      {
        "type": "int24",
        "name": "tickSpacing"
      },
      {
        "type": "uint16",
        "name": "fee"
      }
    ]
  },
  {
    "name": "defaultFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16"
      }
    ]
  },
  {
    "name": "defaultPluginFactory",
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
    "name": "defaultTickspacing",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int24"
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
    "name": "hasRoleOrOwner",
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
    "name": "pendingOwner",
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
    "name": "poolByPair",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "poolDeployer",
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
    "name": "renounceOwnershipStartTimestamp",
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
    "name": "setDefaultCommunityFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint16",
        "name": "newDefaultCommunityFee"
      }
    ],
    "outputs": []
  },
  {
    "name": "setDefaultFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint16",
        "name": "newDefaultFee"
      }
    ],
    "outputs": []
  },
  {
    "name": "setDefaultPluginFactory",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newDefaultPluginFactory"
      }
    ],
    "outputs": []
  },
  {
    "name": "setDefaultTickspacing",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "int24",
        "name": "newDefaultTickspacing"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVaultFactory",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newVaultFactory"
      }
    ],
    "outputs": []
  },
  {
    "name": "startRenounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "stopRenounceOwnership",
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
    "name": "vaultFactory",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract