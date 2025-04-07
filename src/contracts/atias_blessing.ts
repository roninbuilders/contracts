import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 147,
  address: '0x9d3936dbd9a794ee31ef9f13814233d435bd806c' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Atias Blessing',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x9dbae14350f54370b11503ebedde62445007b512',
  created_at: 1686041020,
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
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ErrActivateBeforeStartingBlock",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrAlreadyActivatedStreak",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrCallerNotDelegated",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrComputedPriceTooLarge",
    "type": "error",
    "inputs": [
      {
        "type": "int32",
        "name": "expo1"
      },
      {
        "type": "int32",
        "name": "expo2"
      },
      {
        "type": "int64",
        "name": "price1"
      }
    ]
  },
  {
    "name": "ErrExceedDailyPrayThreshold",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrExponentTooLarge",
    "type": "error",
    "inputs": [
      {
        "type": "int32",
        "name": "expo"
      }
    ]
  },
  {
    "name": "ErrFreezeTimeEnded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInsufficientPayment",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidActiveStreakLifeTime",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidOrderOfRestorationCosts",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidResetDuration",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNoLostStreak",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrStartNewStreakByDelegatee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrZeroLostStreakCount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ActiveStreakLifeTimeChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "streakLifeTime"
      }
    ]
  },
  {
    "name": "DailyPrayerThresholdUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "dailyPrayerThreshold"
      }
    ]
  },
  {
    "name": "FreezePeriodUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newFreezePeriod"
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
    "name": "PaymentTokenUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newPaymentToken"
      }
    ]
  },
  {
    "name": "PrayerCountSynced",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "prayer",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "prayerCountInfo",
        "components": [
          {
            "type": "uint64",
            "name": "syncedDayIndex"
          },
          {
            "type": "uint64",
            "name": "countPerDay"
          }
        ]
      }
    ]
  },
  {
    "name": "PriceFeedDataUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "priceFeedData",
        "components": [
          {
            "type": "uint8",
            "name": "tokenInDecimal"
          },
          {
            "type": "uint8",
            "name": "tokenOutDecimal"
          },
          {
            "type": "address",
            "name": "pyth"
          },
          {
            "type": "bytes32",
            "name": "priceId"
          },
          {
            "type": "uint256",
            "name": "maxAcceptableAge"
          }
        ]
      }
    ]
  },
  {
    "name": "ResetDurationUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newResetDuration"
      }
    ]
  },
  {
    "name": "RestorationCostUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "newRestorationCosts",
        "components": [
          {
            "type": "uint32",
            "name": "lowerMilestone"
          },
          {
            "type": "uint80",
            "name": "costInUsd"
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
    "name": "StreakRestored",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "restoredStreakCount",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "lastUpdated",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "costInUsd"
      },
      {
        "type": "uint256",
        "name": "costInPaymentToken"
      }
    ]
  },
  {
    "name": "StreakUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newAmount",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newLastUpdated",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "longestStreakCount"
      }
    ]
  },
  {
    "name": "TreasuryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newTreasury"
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
    "name": "activateStreak",
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
    "name": "forceRestoreStreak",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "addresses"
      },
      {
        "type": "uint256[]",
        "name": "streaks"
      }
    ],
    "outputs": []
  },
  {
    "name": "getActivationStatus",
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
        "type": "bool",
        "name": "isLostStreak"
      },
      {
        "type": "bool",
        "name": "hasPrayedToday"
      }
    ]
  },
  {
    "name": "getActiveStreakLifeTime",
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
    "name": "getAllRestorationCosts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint32",
            "name": "lowerMilestone"
          },
          {
            "type": "uint80",
            "name": "costInUsd"
          }
        ]
      }
    ]
  },
  {
    "name": "getDailyPrayerCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "prayer"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getDailyPrayerThreshold",
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
    "name": "getFreezePeriod",
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
    "name": "getPaymentToken",
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
    "name": "getPriceFeedData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint8",
            "name": "tokenInDecimal"
          },
          {
            "type": "uint8",
            "name": "tokenOutDecimal"
          },
          {
            "type": "address",
            "name": "pyth"
          },
          {
            "type": "bytes32",
            "name": "priceId"
          },
          {
            "type": "uint256",
            "name": "maxAcceptableAge"
          }
        ]
      }
    ]
  },
  {
    "name": "getResetDuration",
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
    "name": "getRestorationCosts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "lostStreakCount"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "costInUsd"
      },
      {
        "type": "uint256",
        "name": "costInPaymentToken"
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
    "name": "getStartedAtBlock",
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
    "name": "getStreak",
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
        "type": "uint256",
        "name": "currentStreakCount"
      },
      {
        "type": "uint256",
        "name": "lastActivated"
      },
      {
        "type": "uint256",
        "name": "longestStreakCount"
      },
      {
        "type": "uint256",
        "name": "lostStreakCount"
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
        "type": "uint256",
        "name": "streakLifeTime"
      },
      {
        "type": "uint256",
        "name": "startedAtBlock"
      },
      {
        "type": "address",
        "name": "admin"
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
        "type": "uint256",
        "name": "streakLifeTime"
      },
      {
        "type": "uint256",
        "name": "resetTime"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV3",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "freezePeriod"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "address",
        "name": "treasury"
      },
      {
        "type": "tuple[]",
        "name": "restorationCosts",
        "components": [
          {
            "type": "uint32",
            "name": "lowerMilestone"
          },
          {
            "type": "uint80",
            "name": "costInUsd"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "priceFeedData",
        "components": [
          {
            "type": "uint8",
            "name": "tokenInDecimal"
          },
          {
            "type": "uint8",
            "name": "tokenOutDecimal"
          },
          {
            "type": "address",
            "name": "pyth"
          },
          {
            "type": "bytes32",
            "name": "priceId"
          },
          {
            "type": "uint256",
            "name": "maxAcceptableAge"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "dailyPrayerThreshold"
      }
    ],
    "outputs": []
  },
  {
    "name": "isRestorable",
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
    "name": "restoreStreak",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "maxAmountIn"
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
    "name": "setDailyPrayerThreshold",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "dailyPrayerThreshold"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFreezePeriod",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newFreezePeriod"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPaymentToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "paymentToken"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPriceFeedData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "priceFeedData",
        "components": [
          {
            "type": "uint8",
            "name": "tokenInDecimal"
          },
          {
            "type": "uint8",
            "name": "tokenOutDecimal"
          },
          {
            "type": "address",
            "name": "pyth"
          },
          {
            "type": "bytes32",
            "name": "priceId"
          },
          {
            "type": "uint256",
            "name": "maxAcceptableAge"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setResetDuration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newResetDuration"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRestorationCosts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "restorationCosts",
        "components": [
          {
            "type": "uint32",
            "name": "lowerMilestone"
          },
          {
            "type": "uint80",
            "name": "costInUsd"
          }
        ]
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
        "name": "treasury"
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