import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 29549,
  address: '0xefe59559d4ce3a7302c8be466e7840d772f748b6' as const,
  contract_name: 'FishingFrenzyChestFactory',
  display_name: 'Fishing Frenzy Chest Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742793662,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "chestNFTAddress"
      },
      {
        "type": "address",
        "name": "defaultAdminAddress"
      },
      {
        "type": "address",
        "name": "adminFactoryAddress"
      },
      {
        "type": "address",
        "name": "minterFactoryAddress"
      },
      {
        "type": "uint256",
        "name": "initialMaxMintBatch"
      }
    ]
  },
  {
    "name": "MaxMintBatchUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMaxMintBatch"
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
    "name": "ADMIN_FACTORY_ROLE",
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
    "name": "MINTER_FACTORY_ROLE",
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
    "name": "airdropChests",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "req",
        "components": [
          {
            "type": "uint16",
            "name": "tierId"
          },
          {
            "type": "address[]",
            "name": "to"
          },
          {
            "type": "uint256[]",
            "name": "quantities"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "chestNFT",
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
    "name": "maxMintBatch",
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
    "name": "mintBatchChest",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint16[]",
        "name": "tierIds"
      },
      {
        "type": "uint256[]",
        "name": "quantities"
      }
    ],
    "outputs": []
  },
  {
    "name": "mintBatchChestByTier",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint16",
        "name": "tierId"
      },
      {
        "type": "uint256",
        "name": "quantity"
      }
    ],
    "outputs": []
  },
  {
    "name": "mintBatchChestWithSignature",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "req",
        "components": [
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint128",
            "name": "validityStartTimestamp"
          },
          {
            "type": "uint128",
            "name": "validityEndTimestamp"
          },
          {
            "type": "bytes32",
            "name": "uid"
          },
          {
            "type": "uint16[]",
            "name": "itemIds"
          },
          {
            "type": "uint256[]",
            "name": "quantities"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "mintNumber"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "mintMapping",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
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
    "name": "setMaxMintBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMaxMintBatch"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMintNumber",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      },
      {
        "type": "uint256",
        "name": "_mintNumber"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract