import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36538,
  address: '0xc199ef60897232d605fc110b49e52f79ab9dc0b6' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Sabong Saga Daily Feed V2 Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xb37d8c1a39192fcd65048898da950047829e421b',
  created_at: 1754365608,
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
    "name": "ECDSAInvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ECDSAInvalidSignatureLength",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "length"
      }
    ]
  },
  {
    "name": "ECDSAInvalidSignatureS",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "s"
      }
    ]
  },
  {
    "name": "EnforcedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrArrayLengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInsufficientBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidCollection",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidItemConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidItemType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidNonce",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidStatChoice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrItemNotActive",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrMaxStatsReached",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNoActiveBoostedStats",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNotAuthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrSignatureExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrStatAlreadyBoosted",
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
    "name": "BatchFeedCompleted",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "collectionType",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nftTokenId",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "feedItemIds"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "uint256",
        "name": "totalAffectionPoints"
      },
      {
        "type": "address",
        "name": "feeder"
      }
    ]
  },
  {
    "name": "BatchFeedItemsConfigured",
    "type": "event",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "itemIds"
      },
      {
        "type": "uint8[]",
        "name": "itemTypes"
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
      }
    ]
  },
  {
    "name": "ImmortalityGranted",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "collectionType",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nftTokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "expiryTime"
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
    "name": "MaxActiveBoostsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldValue"
      },
      {
        "type": "uint256",
        "name": "newValue"
      }
    ]
  },
  {
    "name": "NFTFed",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "collectionType",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nftTokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "feedItemId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "affectionPoints"
      },
      {
        "type": "address",
        "name": "feeder"
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
    "name": "StatBoosted",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "collectionType",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nftTokenId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "statType"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "expiryTime"
      }
    ]
  },
  {
    "name": "StatDebuffed",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "collectionType",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nftTokenId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "statType"
      }
    ]
  },
  {
    "name": "UltimateCookieUsed",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "collectionType",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nftTokenId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "selectedStat"
      },
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
        "name": "feedCount"
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
    "name": "batchConfigureFeedItems",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "itemIds"
      },
      {
        "type": "uint8[]",
        "name": "itemTypes"
      },
      {
        "type": "tuple[][]",
        "name": "statBoostsArray",
        "components": [
          {
            "type": "uint8",
            "name": "statType"
          },
          {
            "type": "uint128",
            "name": "amount"
          },
          {
            "type": "uint128",
            "name": "duration"
          }
        ]
      },
      {
        "type": "uint128[]",
        "name": "immortalDurations"
      },
      {
        "type": "uint8[]",
        "name": "debuffTypes"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchDisableFeedItems",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "itemIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchFeedNFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint8",
            "name": "collectionType"
          },
          {
            "type": "uint256",
            "name": "nftTokenId"
          },
          {
            "type": "uint256[]",
            "name": "feedItemIds"
          },
          {
            "type": "uint256[]",
            "name": "amounts"
          },
          {
            "type": "uint256",
            "name": "totalAffectionPoints"
          },
          {
            "type": "uint8[]",
            "name": "debuffStatChoices"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes",
        "name": "signature"
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
        "type": "tuple[]",
        "name": "statBoosts",
        "components": [
          {
            "type": "uint8",
            "name": "statType"
          },
          {
            "type": "uint128",
            "name": "amount"
          },
          {
            "type": "uint128",
            "name": "duration"
          }
        ]
      },
      {
        "type": "uint128",
        "name": "immortalDuration"
      },
      {
        "type": "uint8",
        "name": "debuffType"
      }
    ],
    "outputs": []
  },
  {
    "name": "disableFeedItem",
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
    "name": "feedNFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint8",
            "name": "collectionType"
          },
          {
            "type": "uint256",
            "name": "nftTokenId"
          },
          {
            "type": "uint256",
            "name": "feedItemId"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "affectionPoints"
          },
          {
            "type": "uint8",
            "name": "debuffStatChoice"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAddressNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getAllNFTStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "collectionType"
      },
      {
        "type": "uint256",
        "name": "nftTokenId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "response",
        "components": [
          {
            "type": "tuple[]",
            "name": "stats",
            "components": [
              {
                "type": "uint8",
                "name": "statType"
              },
              {
                "type": "uint256",
                "name": "totalValue"
              },
              {
                "type": "uint256",
                "name": "expiryTime"
              }
            ]
          },
          {
            "type": "bool",
            "name": "isImmortal"
          },
          {
            "type": "uint256",
            "name": "immortalExpiryTime"
          }
        ]
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
        "type": "uint8",
        "name": "itemType"
      },
      {
        "type": "tuple[]",
        "name": "statBoosts",
        "components": [
          {
            "type": "uint8",
            "name": "statType"
          },
          {
            "type": "uint128",
            "name": "amount"
          },
          {
            "type": "uint128",
            "name": "duration"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "immortalDuration"
      },
      {
        "type": "uint8",
        "name": "debuffType"
      },
      {
        "type": "bool",
        "name": "isActive"
      }
    ]
  },
  {
    "name": "getMaxActiveBoosts",
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
    "name": "getNFTStatus",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "collectionType"
      },
      {
        "type": "uint256",
        "name": "nftTokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint8[]",
        "name": "activeBoostedStats"
      },
      {
        "type": "uint256[]",
        "name": "boostAmounts"
      },
      {
        "type": "uint256[]",
        "name": "boostExpiryTimes"
      },
      {
        "type": "uint256",
        "name": "immortalExpiryTime"
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
    "name": "getStatBoost",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "collectionType"
      },
      {
        "type": "uint256",
        "name": "nftTokenId"
      },
      {
        "type": "uint8",
        "name": "statType"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isActive"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "expiryTime"
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
      },
      {
        "type": "address",
        "name": "_SIGNER_WALLET"
      }
    ],
    "outputs": []
  },
  {
    "name": "isNFTImmortal",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "collectionType"
      },
      {
        "type": "uint256",
        "name": "nftTokenId"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isImmortal"
      },
      {
        "type": "uint256",
        "name": "expiryTime"
      }
    ]
  },
  {
    "name": "maxActiveBoosts",
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
    "name": "setMaxActiveBoosts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMaxActiveBoosts"
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
    "name": "updateSignerWallet",
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