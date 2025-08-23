import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36707,
  address: '0xe8379043706a211305287d0053156fc44e53ea4f' as const,
  contract_name: 'BlackmarketChestsV2',
  display_name: 'Blackmarket Chests V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1755874543,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_vrfCoordinator"
      },
      {
        "type": "address",
        "name": "_primateria"
      },
      {
        "type": "address",
        "name": "_poolWallet"
      },
      {
        "type": "address",
        "name": "_treasuryAddress"
      },
      {
        "type": "address",
        "name": "_admin"
      }
    ]
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
    "name": "DailyLimitReached",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "current"
      },
      {
        "type": "uint256",
        "name": "limit"
      }
    ]
  },
  {
    "name": "EmergencyLimitExceeded",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "requested"
      },
      {
        "type": "uint256",
        "name": "allowed"
      }
    ]
  },
  {
    "name": "EmptyPrizeArray",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExcessiveETHSent",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "sent"
      },
      {
        "type": "uint256",
        "name": "required"
      }
    ]
  },
  {
    "name": "FeaturePaused",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "feature"
      }
    ]
  },
  {
    "name": "InsufficientPoolBalance",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "required"
      },
      {
        "type": "uint256",
        "name": "available"
      }
    ]
  },
  {
    "name": "InvalidChestType",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "chestType"
      }
    ]
  },
  {
    "name": "InvalidPrizeConfiguration",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidVRFCallback",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidWithdrawalRequest",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestId"
      }
    ]
  },
  {
    "name": "ProbabilitySumInvalid",
    "type": "error",
    "inputs": [
      {
        "type": "uint16",
        "name": "sum"
      }
    ]
  },
  {
    "name": "RateLimitError",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "timeRemaining"
      }
    ]
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RequestAlreadyFulfilled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SafeERC20FailedOperation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "UnauthorizedAccess",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      },
      {
        "type": "bytes32",
        "name": "requiredRole"
      }
    ]
  },
  {
    "name": "VRFRequestFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "VolumeSpikeDetected",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "increase"
      },
      {
        "type": "uint256",
        "name": "threshold"
      }
    ]
  },
  {
    "name": "WithdrawalAlreadyExecuted",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestId"
      }
    ]
  },
  {
    "name": "WithdrawalDelayNotMet",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "executeAfter"
      },
      {
        "type": "uint256",
        "name": "currentTime"
      }
    ]
  },
  {
    "name": "ZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ChestOpenRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "chestType",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "requestId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "ChestOpened",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "chestType",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "prize",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "requestId"
      }
    ]
  },
  {
    "name": "CircuitBreakerTriggered",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "string",
        "name": "reason"
      },
      {
        "type": "uint256",
        "name": "triggerValue"
      },
      {
        "type": "uint256",
        "name": "threshold"
      }
    ]
  },
  {
    "name": "FeaturePausedStateChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "feature",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "paused"
      },
      {
        "type": "address",
        "name": "changedBy",
        "indexed": true
      }
    ]
  },
  {
    "name": "MetricRecorded",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "metricName",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "bytes32",
        "name": "category"
      }
    ]
  },
  {
    "name": "PrizesUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "chestType",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "prizeCount"
      },
      {
        "type": "address",
        "name": "updatedBy",
        "indexed": true
      }
    ]
  },
  {
    "name": "RateLimitExceeded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "operation",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "currentCount"
      },
      {
        "type": "uint256",
        "name": "maxAllowed"
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
    "name": "VRFGasLimitUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldLimit"
      },
      {
        "type": "uint256",
        "name": "newLimit"
      },
      {
        "type": "address",
        "name": "updatedBy",
        "indexed": true
      }
    ]
  },
  {
    "name": "VRFGasPriceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldPrice"
      },
      {
        "type": "uint256",
        "name": "newPrice"
      },
      {
        "type": "address",
        "name": "updatedBy",
        "indexed": true
      }
    ]
  },
  {
    "name": "WithdrawalExecuted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "executor",
        "indexed": true
      }
    ]
  },
  {
    "name": "WithdrawalRequested",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "string",
        "name": "reason"
      },
      {
        "type": "address",
        "name": "requester",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "executeAfter"
      }
    ]
  },
  {
    "name": "CHEST_FIRE_DUST",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "CHEST_OPENING_PAUSED",
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
    "name": "CHEST_ZAND",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
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
    "name": "DEPLOYMENT_TIMESTAMP",
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
    "name": "EMERGENCY_ROLE",
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
    "name": "EMERGENCY_WITHDRAWAL_PERCENT",
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
    "name": "FIRE_DUST_ID",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "GOVERNANCE_ROLE",
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
    "name": "MAX_DAILY_WITHDRAWAL_PERCENT",
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
    "name": "MIN_TIME_BETWEEN_OPENS",
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
    "name": "POOL_WALLET",
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
    "name": "PRIMATERIA",
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
    "name": "PRIZE_UPDATES_PAUSED",
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
    "name": "SPIKE_THRESHOLD_PERCENT",
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
    "name": "TICKET_ID",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "TREASURY_ADDRESS",
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
    "name": "TREASURY_ROLE",
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
    "name": "VRF_COORDINATOR",
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
    "name": "WINDOW_1_HOUR",
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
    "name": "WINDOW_1_MIN",
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
    "name": "WINDOW_5_MIN",
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
    "name": "WITHDRAWALS_PAUSED",
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
    "name": "WITHDRAWAL_DELAY",
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
    "name": "ZAND_ID",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "chestPrizes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "tokenId"
      },
      {
        "type": "uint16",
        "name": "cumulativeProbability"
      },
      {
        "type": "uint128",
        "name": "amount"
      },
      {
        "type": "uint8",
        "name": "reserved"
      }
    ]
  },
  {
    "name": "chestTypeEnabled",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "chestsOpenedToday",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "currentDay",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "dailyChestLimit",
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
    "name": "emergencyWithdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "string",
        "name": "reason"
      }
    ],
    "outputs": []
  },
  {
    "name": "emergencyWithdrawnToday",
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
    "name": "executeWithdrawal",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestId"
      }
    ],
    "outputs": []
  },
  {
    "name": "fulfillRandomness",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "randomness"
      }
    ],
    "outputs": []
  },
  {
    "name": "getChestPrizes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "chestType"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint8",
            "name": "tokenId"
          },
          {
            "type": "uint16",
            "name": "cumulativeProbability"
          },
          {
            "type": "uint128",
            "name": "amount"
          },
          {
            "type": "uint8",
            "name": "reserved"
          }
        ]
      }
    ]
  },
  {
    "name": "getRateLimitInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "bytes32",
        "name": "operation"
      }
    ],
    "outputs": [
      {
        "type": "uint32",
        "name": "currentCount"
      },
      {
        "type": "uint32",
        "name": "maxAllowed"
      },
      {
        "type": "uint256",
        "name": "resetTime"
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
    "name": "getVRFFee",
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
    "name": "isDailyLimitReached",
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
    "name": "isFeaturePaused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "feature"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "lastEmergencyDay",
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
    "name": "openChest",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint8",
        "name": "chestType"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "requestId"
      }
    ]
  },
  {
    "name": "pauseFeature",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "feature"
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
        "name": "callerConfirmation"
      }
    ],
    "outputs": []
  },
  {
    "name": "requestWithdrawal",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "string",
        "name": "reason"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "requestId"
      }
    ]
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
    "name": "setDailyLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint128",
        "name": "newLimit"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPrizes",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "chestType"
      },
      {
        "type": "tuple[]",
        "name": "prizes",
        "components": [
          {
            "type": "uint8",
            "name": "tokenId"
          },
          {
            "type": "uint16",
            "name": "cumulativeProbability"
          },
          {
            "type": "uint128",
            "name": "amount"
          },
          {
            "type": "uint8",
            "name": "reserved"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setVRFCallbackGasLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newLimit"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVRFGasPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newPrice"
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
    "name": "totalChestsOpened",
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
    "name": "unpauseFeature",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "feature"
      }
    ],
    "outputs": []
  },
  {
    "name": "userChestsOpened",
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
    "name": "userLastOpenTime",
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
    "name": "userRateWindows",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "uint64",
        "name": "windowStart"
      },
      {
        "type": "uint32",
        "name": "requestCount"
      },
      {
        "type": "uint32",
        "name": "maxRequests"
      }
    ]
  },
  {
    "name": "userVolume",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint128",
        "name": "dailyVolume"
      },
      {
        "type": "uint128",
        "name": "hourlyVolume"
      },
      {
        "type": "uint64",
        "name": "lastHour"
      },
      {
        "type": "uint64",
        "name": "lastDay"
      }
    ]
  },
  {
    "name": "vrfCallbackGasLimit",
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
    "name": "vrfGasPrice",
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
    "name": "vrfRequests",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "requester"
      },
      {
        "type": "uint8",
        "name": "chestType"
      },
      {
        "type": "bool",
        "name": "fulfilled"
      },
      {
        "type": "uint64",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "withdrawalRequests",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "uint128",
        "name": "amount"
      },
      {
        "type": "uint64",
        "name": "requestTime"
      },
      {
        "type": "uint64",
        "name": "executeAfter"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "bool",
        "name": "executed"
      },
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract