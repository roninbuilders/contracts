import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 23936,
  address: '0x27d06694e6d64ce1a0cd0f98fcd928bce8150470' as const,
  contract_name: 'YetAnotherCheckIn',
  display_name: 'Yet Another Check In',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1738689432,
  abi: [
  {
    "name": "CheckInCooldown",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "cooldownExpiration"
      }
    ]
  },
  {
    "name": "InsufficientFee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CheckIn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
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
        "type": "uint8",
        "name": "version"
      }
    ]
  },
  {
    "name": "MigrationCompleted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "points"
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
    "name": "RewardAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
      },
      {
        "type": "tuple",
        "name": "reward",
        "components": [
          {
            "type": "uint8",
            "name": "rewardType"
          },
          {
            "type": "uint256[2]",
            "name": "amountRange"
          },
          {
            "type": "string",
            "name": "description"
          },
          {
            "type": "uint8",
            "name": "rarity"
          },
          {
            "type": "uint16",
            "name": "monsterType"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          }
        ]
      }
    ]
  },
  {
    "name": "RewardRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
      }
    ]
  },
  {
    "name": "RewardUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
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
    "name": "CONSECUTIVE_DAYS_REQUIRED",
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
    "name": "MINTER_ROLE",
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
    "name": "MYSTERY_BOX",
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
    "name": "NYANGKIT",
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
    "name": "PREVIOUS_CHECK_IN",
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
    "name": "RAGMON",
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
    "name": "REWARD_TOKEN",
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
    "name": "addCheckInRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_checkInRewards",
        "components": [
          {
            "type": "uint8",
            "name": "rewardType"
          },
          {
            "type": "uint256[2]",
            "name": "amountRange"
          },
          {
            "type": "string",
            "name": "description"
          },
          {
            "type": "uint8",
            "name": "rarity"
          },
          {
            "type": "uint16",
            "name": "monsterType"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "callbackGasLimit",
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
    "name": "canMigratePoints",
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
    "name": "checkIn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "checkInPoints",
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
    "name": "checkInRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "rewardType"
      },
      {
        "type": "string",
        "name": "description"
      },
      {
        "type": "uint8",
        "name": "rarity"
      },
      {
        "type": "uint16",
        "name": "monsterType"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "collect",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "cooldownPeriod",
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
    "name": "dailyPoints",
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
    "name": "estimateVRFCost",
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
    "name": "finalReward",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8",
        "name": "rewardType"
      },
      {
        "type": "string",
        "name": "description"
      },
      {
        "type": "uint8",
        "name": "rarity"
      },
      {
        "type": "uint16",
        "name": "monsterType"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "gasPrice",
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
    "name": "getCheckInRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint8",
            "name": "rewardType"
          },
          {
            "type": "uint256[2]",
            "name": "amountRange"
          },
          {
            "type": "string",
            "name": "description"
          },
          {
            "type": "uint8",
            "name": "rarity"
          },
          {
            "type": "uint16",
            "name": "monsterType"
          },
          {
            "type": "uint256",
            "name": "tokenId"
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
        "name": "_previousCheckIn"
      },
      {
        "type": "address",
        "name": "_ragmon"
      },
      {
        "type": "address",
        "name": "_nyangkit"
      },
      {
        "type": "address",
        "name": "_rewardToken"
      },
      {
        "type": "address",
        "name": "_mysteryBox"
      }
    ],
    "outputs": []
  },
  {
    "name": "isMigrationAllowed",
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
    "name": "lastCheckIn",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "lastCheckInDay",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "lastCollected",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "migrate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "migrated",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "nextCheckIn",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
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
    "name": "rawFulfillRandomSeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_reqHash"
      },
      {
        "type": "uint256",
        "name": "_randomSeed"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeCheckInReward",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": []
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
    "name": "setFinalReward",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_finalReward",
        "components": [
          {
            "type": "uint8",
            "name": "rewardType"
          },
          {
            "type": "uint256[2]",
            "name": "amountRange"
          },
          {
            "type": "string",
            "name": "description"
          },
          {
            "type": "uint8",
            "name": "rarity"
          },
          {
            "type": "uint16",
            "name": "monsterType"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setMigrationAllowed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_allowed"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRewardToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "rewardToken"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVRFCoordinator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_vrfCoordinator"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVRFVariables",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_callbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "_gasPrice"
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
    "name": "totalCheckInPerDay",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "updateCheckInReward",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
      },
      {
        "type": "tuple",
        "name": "_checkInReward",
        "components": [
          {
            "type": "uint8",
            "name": "rewardType"
          },
          {
            "type": "uint256[2]",
            "name": "amountRange"
          },
          {
            "type": "string",
            "name": "description"
          },
          {
            "type": "uint8",
            "name": "rarity"
          },
          {
            "type": "uint16",
            "name": "monsterType"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "vrfCoordinator",
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