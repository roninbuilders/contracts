import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2549,
  address: '0x8abadb049daecc7846297c00c2e0295228e7228f' as const,
  contract_name: 'KatanaGovernance',
  display_name: 'Katana Governance',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1716205735,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnableInvalidOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "OwnableUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "Unauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FactoryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "address",
        "name": "factory"
      }
    ]
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
    "name": "PairCreated",
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
        "name": "pair"
      },
      {
        "type": "uint256",
        "name": "allPairsLength"
      }
    ]
  },
  {
    "name": "PairProxyUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newImpl",
        "indexed": true
      },
      {
        "type": "address",
        "name": "oldImpl",
        "indexed": true
      }
    ]
  },
  {
    "name": "PermissionUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint40",
        "name": "whitelistUntil"
      },
      {
        "type": "address[]",
        "name": "allowed"
      },
      {
        "type": "bool[]",
        "name": "statuses"
      }
    ]
  },
  {
    "name": "INIT_CODE_PAIR_HASH",
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
    "name": "allPairs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pair"
      }
    ]
  },
  {
    "name": "allPairsLength",
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
    "name": "allowedAll",
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
    "name": "createPair",
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
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pair"
      }
    ]
  },
  {
    "name": "createPairAndSetPermission",
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
        "type": "uint40",
        "name": "whitelistUntil"
      },
      {
        "type": "address[]",
        "name": "alloweds"
      },
      {
        "type": "bool[]",
        "name": "statuses"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pair"
      }
    ]
  },
  {
    "name": "getFactory",
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
    "name": "getManyTokensWhitelistInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "uint40[]",
        "name": "whitelistedUntils"
      }
    ]
  },
  {
    "name": "getPair",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenA"
      },
      {
        "type": "address",
        "name": "tokenB"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pair"
      }
    ]
  },
  {
    "name": "getWhitelistUntil",
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
        "type": "uint40"
      }
    ]
  },
  {
    "name": "getWhitelistedTokensFor",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "uint40[]",
        "name": "whitelistUntils"
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
        "name": "factory"
      }
    ],
    "outputs": []
  },
  {
    "name": "isAuthorized",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "authorized"
      }
    ]
  },
  {
    "name": "isAuthorized",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "authorized"
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
    "name": "pairImplementation",
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
    "name": "setAllowedAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "shouldAllow"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFactory",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "factory"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPairImplementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "impl"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPermission",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint40",
        "name": "whitelistUntil"
      },
      {
        "type": "address[]",
        "name": "alloweds"
      },
      {
        "type": "bool[]",
        "name": "statuses"
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
        "name": "newTreasury"
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
        "name": "newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "treasury",
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