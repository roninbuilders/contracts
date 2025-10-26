import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37464,
  address: '0xca7071160fae4211f974964c56ea16332a1c152f' as const,
  contract_name: 'TransparentProxyOZv4_9_5',
  display_name: 'Axie Battle Pass Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xcffe40c02899fa126e37d92f46fe09c8a20a6026',
  created_at: 1760596144,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
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
    "name": "InsufficientPayment",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPayment",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPaymentToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRecipient",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRewardType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSeasonTime",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LevelAlreadyClaimed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LevelLocked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LevelsEmpty",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NonExistentSeason",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SeasonNotActive",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignatureExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UsedNonce",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ]
  },
  {
    "name": "UserAlreadyQualified",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UserNotQualified",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BattlePassLevelUnlocked",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "seasonId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "materialMinted",
        "indexed": true
      },
      {
        "type": "uint8[]",
        "name": "levels"
      }
    ]
  },
  {
    "name": "BattlePassMinted",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "seasonId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "BattlePassQualified",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "seasonId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      }
    ]
  },
  {
    "name": "BattlePassRewardClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "seasonId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint8[]",
        "name": "levels"
      }
    ]
  },
  {
    "name": "CurrentLevelUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "seasonId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "level"
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "version"
      }
    ]
  },
  {
    "name": "LevelUnlocked",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "seasonId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "oldLevelUnlockedBitMap"
      },
      {
        "type": "uint256",
        "name": "newLevelUnlockedBitMap"
      }
    ]
  },
  {
    "name": "MaterialUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "material",
        "indexed": true
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
    "name": "RewardByLevelClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "seasonId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "oldClaimedBitMap"
      },
      {
        "type": "uint256",
        "name": "newClaimedBitMap"
      }
    ]
  },
  {
    "name": "RewardsConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "seasonId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "level",
        "indexed": true
      },
      {
        "type": "tuple[]",
        "name": "rewards",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "quantity"
          }
        ]
      }
    ]
  },
  {
    "name": "RewardsDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "caller",
        "indexed": true
      },
      {
        "type": "tuple[]",
        "name": "rewards",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "quantity"
          }
        ]
      }
    ]
  },
  {
    "name": "RewardsWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "tuple[]",
        "name": "rewards",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "quantity"
          }
        ]
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
    "name": "SeasonCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "seasonId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "seasonInfo",
        "components": [
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint96",
            "name": "price"
          },
          {
            "type": "uint64",
            "name": "startTime"
          },
          {
            "type": "uint64",
            "name": "endTime"
          },
          {
            "type": "uint8",
            "name": "battlePassMilestone"
          }
        ]
      }
    ]
  },
  {
    "name": "SeasonUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "seasonId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "seasonInfo",
        "components": [
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint96",
            "name": "price"
          },
          {
            "type": "uint64",
            "name": "startTime"
          },
          {
            "type": "uint64",
            "name": "endTime"
          },
          {
            "type": "uint8",
            "name": "battlePassMilestone"
          }
        ]
      }
    ]
  },
  {
    "name": "TreasuryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "treasury",
        "indexed": true
      }
    ]
  },
  {
    "name": "UnorderedNonceInvalidation",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "word"
      },
      {
        "type": "uint256",
        "name": "mask"
      }
    ]
  },
  {
    "name": "UnorderedNonceUsed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nonce"
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
    "name": "OPERATOR_ROLE",
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
    "name": "PERMIT_LEVEL_UP_TYPE_HASH",
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
    "name": "SIGNER_ROLE",
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
    "name": "buyBattlePass",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "seasonId"
      },
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "seasonId"
      },
      {
        "type": "uint8[]",
        "name": "levels"
      },
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "createSeason",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "seasonInfo",
        "components": [
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint96",
            "name": "price"
          },
          {
            "type": "uint64",
            "name": "startTime"
          },
          {
            "type": "uint64",
            "name": "endTime"
          },
          {
            "type": "uint8",
            "name": "battlePassMilestone"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint32",
        "name": "seasonId"
      }
    ]
  },
  {
    "name": "depositRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "rewards",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "quantity"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "domainSeparator",
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
    "name": "getLastSeasonId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "getMaterial",
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
    "name": "getRewardsPool",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "seasonId"
      },
      {
        "type": "uint8",
        "name": "level"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "quantity"
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
    "name": "getSeasonInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "seasonId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint96",
            "name": "price"
          },
          {
            "type": "uint64",
            "name": "startTime"
          },
          {
            "type": "uint64",
            "name": "endTime"
          },
          {
            "type": "uint8",
            "name": "battlePassMilestone"
          }
        ]
      }
    ]
  },
  {
    "name": "getTreasury",
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
    "name": "getUserProgress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "seasonId"
      },
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "bool",
            "name": "isQualified"
          },
          {
            "type": "uint8",
            "name": "currentLevel"
          },
          {
            "type": "uint256",
            "name": "unlockedLevelsBitMap"
          },
          {
            "type": "uint256",
            "name": "claimedLevelsBitMap"
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
      },
      {
        "type": "address",
        "name": "pauser"
      },
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "address",
        "name": "signer"
      },
      {
        "type": "address",
        "name": "treasury"
      },
      {
        "type": "address",
        "name": "material"
      }
    ],
    "outputs": []
  },
  {
    "name": "isLevelClaimed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "seasonId"
      },
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint8",
        "name": "level"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isLevelUnlocked",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "seasonId"
      },
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint8",
        "name": "level"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isUsedNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
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
    "name": "unlockAndClaimRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "seasonId"
      },
      {
        "type": "uint8[]",
        "name": "levels"
      },
      {
        "type": "uint256",
        "name": "userNonce"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes",
        "name": "signature"
      },
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "unlockLevels",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "seasonId"
      },
      {
        "type": "uint8[]",
        "name": "levels"
      },
      {
        "type": "uint256",
        "name": "userNonce"
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "updateMaterial",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "material"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateRewardsConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "seasonId"
      },
      {
        "type": "uint8[]",
        "name": "levels"
      },
      {
        "type": "tuple[][]",
        "name": "rewards",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "quantity"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "updateSeason",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "seasonId"
      },
      {
        "type": "tuple",
        "name": "seasonInfo",
        "components": [
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint96",
            "name": "price"
          },
          {
            "type": "uint64",
            "name": "startTime"
          },
          {
            "type": "uint64",
            "name": "endTime"
          },
          {
            "type": "uint8",
            "name": "battlePassMilestone"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "updateTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "treasury"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "tuple[]",
        "name": "rewards",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "quantity"
          }
        ]
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract