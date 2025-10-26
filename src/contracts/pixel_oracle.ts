import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37381,
  address: '0x620cb3eb88ec7913987609707a0093080ee8caa0' as const,
  contract_name: 'PixelOracle',
  display_name: 'Pixel Oracle',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1759827307,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
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
    "name": "BatchTooLarge",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DataTooStale",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EmptyEntities",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EnforcedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpectedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidBatchSize",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidEpoch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidKey",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidKeyConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidMinUpdateInterval",
    "type": "error",
    "inputs": []
  },
  {
    "name": "KeyAlreadyExists",
    "type": "error",
    "inputs": []
  },
  {
    "name": "KeyNotEnabled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "KeyNotFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "KeyStateNotSet",
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
    "name": "UpdateTooFrequent",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ValueOutOfBounds",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BatchKeyStateUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "keyIds"
      },
      {
        "type": "uint256[]",
        "name": "entityIds"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "EmergencyPaused",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "EmergencyUnpaused",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "timestamp"
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
    "name": "KeyAdded",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "bool",
            "name": "enabled"
          },
          {
            "type": "bool",
            "name": "isMultiKey"
          },
          {
            "type": "uint8",
            "name": "decimals"
          },
          {
            "type": "uint64",
            "name": "minEpochStep"
          },
          {
            "type": "uint256",
            "name": "minUpdateInterval"
          },
          {
            "type": "uint256",
            "name": "maxStaleness"
          },
          {
            "type": "uint256",
            "name": "minValue"
          },
          {
            "type": "uint256",
            "name": "maxValue"
          }
        ]
      }
    ]
  },
  {
    "name": "KeyConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "bool",
            "name": "enabled"
          },
          {
            "type": "bool",
            "name": "isMultiKey"
          },
          {
            "type": "uint8",
            "name": "decimals"
          },
          {
            "type": "uint64",
            "name": "minEpochStep"
          },
          {
            "type": "uint256",
            "name": "minUpdateInterval"
          },
          {
            "type": "uint256",
            "name": "maxStaleness"
          },
          {
            "type": "uint256",
            "name": "minValue"
          },
          {
            "type": "uint256",
            "name": "maxValue"
          }
        ]
      }
    ]
  },
  {
    "name": "KeyEnabledStatusChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyId",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "enabled"
      }
    ]
  },
  {
    "name": "KeyStateUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "entityId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "MaxBatchSizeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newSize"
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
    "name": "ORACLE_ADMIN_ROLE",
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
    "name": "ORACLE_UPDATER_ROLE",
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
    "name": "addKey",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyId"
      },
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "bool",
            "name": "enabled"
          },
          {
            "type": "bool",
            "name": "isMultiKey"
          },
          {
            "type": "uint8",
            "name": "decimals"
          },
          {
            "type": "uint64",
            "name": "minEpochStep"
          },
          {
            "type": "uint256",
            "name": "minUpdateInterval"
          },
          {
            "type": "uint256",
            "name": "maxStaleness"
          },
          {
            "type": "uint256",
            "name": "minValue"
          },
          {
            "type": "uint256",
            "name": "maxValue"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "batchUpdateKeyState",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "entityUpdates",
        "components": [
          {
            "type": "bytes32",
            "name": "keyId"
          },
          {
            "type": "uint256",
            "name": "entityId"
          },
          {
            "type": "tuple",
            "name": "entityState",
            "components": [
              {
                "type": "uint256",
                "name": "value"
              },
              {
                "type": "uint256",
                "name": "epoch"
              },
              {
                "type": "uint256",
                "name": "lastUpdateTs"
              }
            ]
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "emergencyPause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "emergencyUnpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "getKeyConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "bool",
            "name": "enabled"
          },
          {
            "type": "bool",
            "name": "isMultiKey"
          },
          {
            "type": "uint8",
            "name": "decimals"
          },
          {
            "type": "uint64",
            "name": "minEpochStep"
          },
          {
            "type": "uint256",
            "name": "minUpdateInterval"
          },
          {
            "type": "uint256",
            "name": "maxStaleness"
          },
          {
            "type": "uint256",
            "name": "minValue"
          },
          {
            "type": "uint256",
            "name": "maxValue"
          }
        ]
      }
    ]
  },
  {
    "name": "getMultiFreshKey",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyId"
      },
      {
        "type": "uint256",
        "name": "entityId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "entityState",
        "components": [
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "uint256",
            "name": "epoch"
          },
          {
            "type": "uint256",
            "name": "lastUpdateTs"
          }
        ]
      }
    ]
  },
  {
    "name": "getMultiKey",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyId"
      },
      {
        "type": "uint256",
        "name": "entityId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "entityState",
        "components": [
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "uint256",
            "name": "epoch"
          },
          {
            "type": "uint256",
            "name": "lastUpdateTs"
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
    "name": "getSingleFreshKey",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "entityState",
        "components": [
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "uint256",
            "name": "epoch"
          },
          {
            "type": "uint256",
            "name": "lastUpdateTs"
          }
        ]
      }
    ]
  },
  {
    "name": "getSingleKey",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "entityState",
        "components": [
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "uint256",
            "name": "epoch"
          },
          {
            "type": "uint256",
            "name": "lastUpdateTs"
          }
        ]
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
      }
    ],
    "outputs": []
  },
  {
    "name": "keyExists",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyId"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "exists"
      }
    ]
  },
  {
    "name": "maxBatchSize",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint128"
      }
    ]
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
    "name": "setKeyEnabled",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyId"
      },
      {
        "type": "bool",
        "name": "enabled"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxBatchSize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint128",
        "name": "newMaxBatchSize"
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
    "name": "updateKeyConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyId"
      },
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "bool",
            "name": "enabled"
          },
          {
            "type": "bool",
            "name": "isMultiKey"
          },
          {
            "type": "uint8",
            "name": "decimals"
          },
          {
            "type": "uint64",
            "name": "minEpochStep"
          },
          {
            "type": "uint256",
            "name": "minUpdateInterval"
          },
          {
            "type": "uint256",
            "name": "maxStaleness"
          },
          {
            "type": "uint256",
            "name": "minValue"
          },
          {
            "type": "uint256",
            "name": "maxValue"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "updateKeyState",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "entityUpdate",
        "components": [
          {
            "type": "bytes32",
            "name": "keyId"
          },
          {
            "type": "uint256",
            "name": "entityId"
          },
          {
            "type": "tuple",
            "name": "entityState",
            "components": [
              {
                "type": "uint256",
                "name": "value"
              },
              {
                "type": "uint256",
                "name": "epoch"
              },
              {
                "type": "uint256",
                "name": "lastUpdateTs"
              }
            ]
          }
        ]
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract