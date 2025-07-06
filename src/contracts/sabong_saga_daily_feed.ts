import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35878,
  address: '0x4c472b1119eac1571921251443e977e0dd780122' as const,
  contract_name: 'SabongSagaDailyFeed',
  display_name: 'Sabong Saga Daily Feed',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751123109,
  abi: [
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
    "name": "AffectionGained",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "affectionPoints"
      }
    ]
  },
  {
    "name": "BatchFeedCompleted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalFeeds"
      },
      {
        "type": "uint256",
        "name": "successfulFeeds"
      },
      {
        "type": "uint256",
        "name": "totalAffectionGained"
      }
    ]
  },
  {
    "name": "Feed",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "itemId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "statBoosted"
      },
      {
        "type": "uint256",
        "name": "boostAmount"
      },
      {
        "type": "uint256",
        "name": "expiryTime"
      },
      {
        "type": "uint256",
        "name": "affectionGained"
      }
    ]
  },
  {
    "name": "FeedItemConfigured",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "itemId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "itemType"
      },
      {
        "type": "uint8",
        "name": "targetStat"
      },
      {
        "type": "uint256",
        "name": "boostAmount"
      },
      {
        "type": "uint256",
        "name": "duration"
      },
      {
        "type": "uint256",
        "name": "affectionPoints"
      },
      {
        "type": "bool",
        "name": "isRandom"
      }
    ]
  },
  {
    "name": "FeedWithImmortalItem",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "itemId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "expiryTime"
      },
      {
        "type": "bool",
        "name": "immortalApplied"
      },
      {
        "type": "uint256",
        "name": "affectionGained"
      }
    ]
  },
  {
    "name": "ImmortalExpired",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "collection",
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
    "name": "StatBoostAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "statType",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "boostAmount"
      },
      {
        "type": "uint256",
        "name": "expiryTime"
      },
      {
        "type": "uint256",
        "name": "boostIndex"
      }
    ]
  },
  {
    "name": "StatBoostExpired",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "statType",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "boostIndex"
      },
      {
        "type": "uint256",
        "name": "expiredAmount"
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
    "name": "CHICKENS",
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
    "name": "CONFIG_SETTER",
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
    "name": "GENESIS",
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
    "name": "batchFeedChicken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256[]",
        "name": "itemIds"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "configureFeedItem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "itemId"
      },
      {
        "type": "uint8",
        "name": "itemType"
      },
      {
        "type": "uint8",
        "name": "targetStat"
      },
      {
        "type": "uint256",
        "name": "boostAmount"
      },
      {
        "type": "uint256",
        "name": "duration"
      },
      {
        "type": "uint256",
        "name": "affectionPoints"
      },
      {
        "type": "bool",
        "name": "isRandom"
      },
      {
        "type": "uint256",
        "name": "healthBoostAmount"
      },
      {
        "type": "uint256",
        "name": "otherBoostAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "deactivateFeedItem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "itemId"
      }
    ],
    "outputs": []
  },
  {
    "name": "feedChicken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "itemId"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "getActiveStatBoosts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint8",
        "name": "statType"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "activeBoosts",
        "components": [
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "expiryTime"
          },
          {
            "type": "uint256",
            "name": "itemId"
          },
          {
            "type": "bool",
            "name": "isActive"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "totalBoost"
      }
    ]
  },
  {
    "name": "getAllActiveBoosts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "cockrage"
      },
      {
        "type": "uint256",
        "name": "ferocity"
      },
      {
        "type": "uint256",
        "name": "attack"
      },
      {
        "type": "uint256",
        "name": "speed"
      },
      {
        "type": "uint256",
        "name": "defence"
      },
      {
        "type": "uint256",
        "name": "evasion"
      },
      {
        "type": "uint256",
        "name": "health"
      }
    ]
  },
  {
    "name": "getBaseStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "stats",
        "components": [
          {
            "type": "uint256",
            "name": "cockrage"
          },
          {
            "type": "uint256",
            "name": "ferocity"
          },
          {
            "type": "uint256",
            "name": "attack"
          },
          {
            "type": "uint256",
            "name": "speed"
          },
          {
            "type": "uint256",
            "name": "defence"
          },
          {
            "type": "uint256",
            "name": "evasion"
          },
          {
            "type": "uint256",
            "name": "health"
          }
        ]
      }
    ]
  },
  {
    "name": "getChickenStatus",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "stats",
        "components": [
          {
            "type": "uint256",
            "name": "cockrage"
          },
          {
            "type": "uint256",
            "name": "ferocity"
          },
          {
            "type": "uint256",
            "name": "attack"
          },
          {
            "type": "uint256",
            "name": "speed"
          },
          {
            "type": "uint256",
            "name": "defence"
          },
          {
            "type": "uint256",
            "name": "evasion"
          },
          {
            "type": "uint256",
            "name": "health"
          }
        ]
      },
      {
        "type": "bool",
        "name": "isImmortal"
      },
      {
        "type": "uint256",
        "name": "immortalTimeLeft"
      }
    ]
  },
  {
    "name": "getFeedItemConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "itemId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "item",
        "components": [
          {
            "type": "uint8",
            "name": "itemType"
          },
          {
            "type": "uint8",
            "name": "targetStat"
          },
          {
            "type": "uint256",
            "name": "boostAmount"
          },
          {
            "type": "uint256",
            "name": "duration"
          },
          {
            "type": "uint256",
            "name": "affectionPoints"
          },
          {
            "type": "bool",
            "name": "isRandom"
          },
          {
            "type": "bool",
            "name": "isActive"
          },
          {
            "type": "uint256",
            "name": "healthBoostAmount"
          },
          {
            "type": "uint256",
            "name": "otherBoostAmount"
          }
        ]
      }
    ]
  },
  {
    "name": "getImmortalEffect",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "immortal",
        "components": [
          {
            "type": "uint256",
            "name": "expiryTime"
          },
          {
            "type": "bool",
            "name": "isActive"
          }
        ]
      },
      {
        "type": "bool",
        "name": "isExpired"
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
        "name": "_RESOURCES"
      },
      {
        "type": "address",
        "name": "_GENESIS"
      },
      {
        "type": "address",
        "name": "_CHICKENS"
      }
    ],
    "outputs": []
  },
  {
    "name": "isChickenImmortal",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isImmortal"
      },
      {
        "type": "uint256",
        "name": "timeUntilExpiry"
      }
    ]
  },
  {
    "name": "maxActiveBoostedStats",
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
    "name": "setBaseStats",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "tuple",
        "name": "stats",
        "components": [
          {
            "type": "uint256",
            "name": "cockrage"
          },
          {
            "type": "uint256",
            "name": "ferocity"
          },
          {
            "type": "uint256",
            "name": "attack"
          },
          {
            "type": "uint256",
            "name": "speed"
          },
          {
            "type": "uint256",
            "name": "defence"
          },
          {
            "type": "uint256",
            "name": "evasion"
          },
          {
            "type": "uint256",
            "name": "health"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxActiveBoostedStats",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_max"
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