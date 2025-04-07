import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2548,
  address: '0x2c1726346d83cbf848bd3c2b208ec70d32a9e44a' as const,
  contract_name: 'TransparentProxyOZv4_9_5',
  display_name: 'Katana Governance Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x082c33e95956e360f97703ce20ad7bcaa5c9a754',
  created_at: 1716205744,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
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
    "name": "AllowedActorUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "actor",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "allowed"
      }
    ]
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
    "name": "RouterUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "address",
        "name": "oldRouter",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newRouter",
        "indexed": true
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
    "name": "enableFeeAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint24",
        "name": "fee"
      },
      {
        "type": "int24",
        "name": "tickSpacing"
      },
      {
        "type": "uint8",
        "name": "feeProtocolNum"
      },
      {
        "type": "uint8",
        "name": "feeProtocolDen"
      }
    ],
    "outputs": []
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
    "name": "getPositionManager",
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
    "name": "getRouter",
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
    "name": "getV2Factory",
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
    "name": "getV3Factory",
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
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "v3Factory"
      },
      {
        "type": "address",
        "name": "positionManager"
      },
      {
        "type": "address",
        "name": "v3Migrator"
      },
      {
        "type": "address",
        "name": "legacyPermissionedRouter"
      },
      {
        "type": "address",
        "name": "aggregateRouter"
      }
    ],
    "outputs": []
  },
  {
    "name": "isAllowedActor",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "actor"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
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
    "name": "setAllowedActor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "actor"
      },
      {
        "type": "bool",
        "name": "allowed"
      }
    ],
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
    "name": "setRouter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "router"
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
    "name": "toggleFlashLoanPermission",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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