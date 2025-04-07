import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4862,
  address: '0x90e83d532a4ad13940139c8ace0b93b0ddbd323a' as const,
  contract_name: 'TokenAdminRegistry',
  display_name: 'Token Admin Registry',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1730294325,
  abi: [
  {
    "name": "AlreadyRegistered",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "InvalidTokenPoolToken",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "OnlyAdministrator",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      },
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "OnlyPendingAdministrator",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      },
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "OnlyRegistryModuleOrOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      }
    ]
  },
  {
    "name": "ZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AdministratorTransferRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "currentAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "AdministratorTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "OwnershipTransferRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
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
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      }
    ]
  },
  {
    "name": "PoolSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "previousPool",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newPool",
        "indexed": true
      }
    ]
  },
  {
    "name": "RegistryModuleAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "module"
      }
    ]
  },
  {
    "name": "RegistryModuleRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "module",
        "indexed": true
      }
    ]
  },
  {
    "name": "acceptAdminRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "localToken"
      }
    ],
    "outputs": []
  },
  {
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "addRegistryModule",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "module"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAllConfiguredTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "startIndex"
      },
      {
        "type": "uint64",
        "name": "maxCount"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "tokens"
      }
    ]
  },
  {
    "name": "getPool",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getPools",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getTokenConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "administrator"
          },
          {
            "type": "address",
            "name": "pendingAdministrator"
          },
          {
            "type": "address",
            "name": "tokenPool"
          }
        ]
      }
    ]
  },
  {
    "name": "isAdministrator",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "localToken"
      },
      {
        "type": "address",
        "name": "administrator"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isRegistryModule",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "module"
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
    "name": "proposeAdministrator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "localToken"
      },
      {
        "type": "address",
        "name": "administrator"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeRegistryModule",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "module"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "localToken"
      },
      {
        "type": "address",
        "name": "pool"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferAdminRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "localToken"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": []
  },
  {
    "name": "typeAndVersion",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract