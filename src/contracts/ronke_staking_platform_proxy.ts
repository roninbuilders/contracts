import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36824,
  address: '0x5c9e9d11a6fbee98397e60238d986ea4991cb6f7' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Ronke Staking Platform Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x38b4d7d4897159de8e0b50645a0dabea8ad015e4',
  created_at: 1756292376,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ]
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "ERC1967InvalidImplementation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      }
    ]
  },
  {
    "name": "ERC1967NonPayable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
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
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "AddressInsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "ArrayLengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ERC1967InvalidImplementation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      }
    ]
  },
  {
    "name": "ERC1967NonPayable",
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
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientFeePayment",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientTokenAllowance",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "required"
      },
      {
        "type": "uint256",
        "name": "current"
      }
    ]
  },
  {
    "name": "InvalidFeeRecipient",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidMultiplier",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidProof",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidStakingOption",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidStakingToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTokenId",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotTokenOwner",
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
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RemainingDaysZero",
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
    "name": "SeasonAlreadyActive",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SeasonNotActive",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SeasonStartTimeInThePast",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StakeInJail",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "jailStartTime"
      }
    ]
  },
  {
    "name": "StakingOptionAlreadyExists",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StakingOptionNotAvailable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StakingOptionNotFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StakingTokenTransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenAlreadyStaked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenNotStaked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UUPSUnauthorizedCallContext",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UUPSUnsupportedProxiableUUID",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "slot"
      }
    ]
  },
  {
    "name": "UserInJail",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "jailUntil"
      }
    ]
  },
  {
    "name": "BatchStaked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256",
        "name": "totalWeight"
      },
      {
        "type": "uint256",
        "name": "totalFees"
      }
    ]
  },
  {
    "name": "BatchUnstaked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256",
        "name": "totalRewards"
      },
      {
        "type": "uint256",
        "name": "totalStakingTokens"
      }
    ]
  },
  {
    "name": "BonusAmountUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldAmount"
      },
      {
        "type": "uint256",
        "name": "newAmount"
      }
    ]
  },
  {
    "name": "BonusPaid",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "bonusAmount"
      }
    ]
  },
  {
    "name": "Claimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "rewards"
      },
      {
        "type": "uint256",
        "name": "rewardDebt"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "uint256",
        "name": "jailUntil"
      }
    ]
  },
  {
    "name": "EmergencyUnstakeExecuted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "totalStakes"
      },
      {
        "type": "uint256",
        "name": "totalUsers"
      }
    ]
  },
  {
    "name": "FeeCharged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "fee"
      },
      {
        "type": "string",
        "name": "action"
      }
    ]
  },
  {
    "name": "FeeRecipientUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldRecipient",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newRecipient",
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
    "name": "JailStatusChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "jailed"
      },
      {
        "type": "uint256",
        "name": "jailUntil"
      }
    ]
  },
  {
    "name": "LockMultipliersUpdated",
    "type": "event",
    "inputs": []
  },
  {
    "name": "NftCollectionUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldCollection",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newCollection",
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
    "name": "PoolUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "accRewardPerWeight"
      },
      {
        "type": "uint256",
        "name": "lastUpdateTime"
      }
    ]
  },
  {
    "name": "RarityMerkleRootUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "newRoot"
      }
    ]
  },
  {
    "name": "RarityMultipliersUpdated",
    "type": "event",
    "inputs": []
  },
  {
    "name": "RewardTokenUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldToken",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newToken",
        "indexed": true
      }
    ]
  },
  {
    "name": "SeasonStarted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "start",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "end",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalRewards"
      }
    ]
  },
  {
    "name": "Staked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "lockDays"
      },
      {
        "type": "uint256",
        "name": "weight"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "uint256",
        "name": "rewardDebt"
      }
    ]
  },
  {
    "name": "StakingFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldFee"
      },
      {
        "type": "uint256",
        "name": "newFee"
      }
    ]
  },
  {
    "name": "StakingOptionAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "lockDays",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "multiplier"
      }
    ]
  },
  {
    "name": "StakingOptionRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "index",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "lockDays"
      }
    ]
  },
  {
    "name": "StakingOptionStatusChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "index",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "active"
      }
    ]
  },
  {
    "name": "StakingOptionUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "index",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "lockDays"
      },
      {
        "type": "uint256",
        "name": "multiplier"
      }
    ]
  },
  {
    "name": "StakingTokenConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "stakingToken",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "stakingAmount"
      }
    ]
  },
  {
    "name": "TokenStaked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "stakingToken",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "TokenUnstaked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "stakingToken",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "TotalWeightUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "totalWeight"
      },
      {
        "type": "bool",
        "name": "isIncrease"
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
    "name": "Unstaked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "rewards"
      },
      {
        "type": "bool",
        "name": "earlyUnstake"
      },
      {
        "type": "uint256",
        "name": "jailUntil"
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
    "name": "UPGRADE_INTERFACE_VERSION",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "addStakingOption",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "lockDays"
      },
      {
        "type": "uint256",
        "name": "multiplier"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchStake",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "bytes32[][]",
        "name": "rarityProofs"
      },
      {
        "type": "uint256[]",
        "name": "stakingOptionIndexes"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchUnstake",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "claim",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "emergencyUnstake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "startTokenId"
      },
      {
        "type": "uint256",
        "name": "endTokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAllStakers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getAllStakingOptions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "lockDays"
          },
          {
            "type": "uint256",
            "name": "multiplier"
          },
          {
            "type": "bool",
            "name": "active"
          }
        ]
      }
    ]
  },
  {
    "name": "getAvailableStakingOptions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "availableOptions",
        "components": [
          {
            "type": "uint256",
            "name": "lockDays"
          },
          {
            "type": "uint256",
            "name": "multiplier"
          },
          {
            "type": "bool",
            "name": "active"
          }
        ]
      }
    ]
  },
  {
    "name": "getBonusInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "bonusAmount"
      },
      {
        "type": "uint256",
        "name": "potentialQualifyingCount"
      },
      {
        "type": "uint256",
        "name": "currentBonusPerStake"
      }
    ]
  },
  {
    "name": "getFeeConfiguration",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "feeRecipient"
      },
      {
        "type": "uint256",
        "name": "stakingFee"
      }
    ]
  },
  {
    "name": "getFeeRecipient",
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
    "name": "getJailStatus",
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
    "name": "getSeasonInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "seasonStart"
      },
      {
        "type": "uint256",
        "name": "seasonEnd"
      },
      {
        "type": "uint256",
        "name": "totalRewards"
      },
      {
        "type": "uint256",
        "name": "emissionPerSec"
      },
      {
        "type": "uint256",
        "name": "totalWeight"
      },
      {
        "type": "uint256",
        "name": "accRewardPerWeight"
      },
      {
        "type": "uint256",
        "name": "lastUpdateTime"
      }
    ]
  },
  {
    "name": "getStakeBonusStatus",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isPotentiallyQualifying"
      }
    ]
  },
  {
    "name": "getStakeInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint256",
            "name": "stakedAt"
          },
          {
            "type": "uint256",
            "name": "lockDays"
          },
          {
            "type": "uint256",
            "name": "weight"
          },
          {
            "type": "uint256",
            "name": "rewardDebt"
          },
          {
            "type": "bool",
            "name": "active"
          },
          {
            "type": "uint256",
            "name": "jailStartTime"
          },
          {
            "type": "uint256",
            "name": "pausedRewardDebt"
          }
        ]
      }
    ]
  },
  {
    "name": "getStakedTokenAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "getStakingFee",
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
    "name": "getStakingOption",
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
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "lockDays"
          },
          {
            "type": "uint256",
            "name": "multiplier"
          },
          {
            "type": "bool",
            "name": "active"
          }
        ]
      }
    ]
  },
  {
    "name": "getStakingOptionIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "lockDays"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "index"
      }
    ]
  },
  {
    "name": "getStakingTokenConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "stakingToken"
      },
      {
        "type": "uint256",
        "name": "stakingAmount"
      }
    ]
  },
  {
    "name": "getUserStakes",
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
        "type": "uint256[]"
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
        "name": "_nftCollection"
      },
      {
        "type": "address",
        "name": "_rewardToken"
      },
      {
        "type": "address",
        "name": "_initialOwner"
      },
      {
        "type": "address",
        "name": "_feeRecipient"
      },
      {
        "type": "uint256",
        "name": "_stakingFee"
      },
      {
        "type": "address",
        "name": "_stakingToken"
      },
      {
        "type": "uint256",
        "name": "_stakingAmount"
      },
      {
        "type": "uint256",
        "name": "_bonusAmount"
      }
    ],
    "outputs": []
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
    "name": "pendingRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "pending"
      }
    ]
  },
  {
    "name": "proxiableUUID",
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
    "name": "removeStakingOption",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "resumeRewardsIfJailExpired",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBonusAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newBonusAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "setStakingOptionStatus",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
      },
      {
        "type": "bool",
        "name": "active"
      }
    ],
    "outputs": []
  },
  {
    "name": "stake",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes32[]",
        "name": "rarityProof"
      },
      {
        "type": "uint256",
        "name": "stakingOptionIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "startSeason",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_seasonStart"
      },
      {
        "type": "uint256",
        "name": "_totalRewards"
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "unstake",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateFeeRecipient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newRecipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateNftCollection",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newNftCollection"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateRarityMerkleRoot",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "newRoot"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateRarityMultipliers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[3]",
        "name": "multipliers"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateRewardToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newRewardToken"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateStakingAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newStakingAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateStakingFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newFee"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateStakingOption",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
      },
      {
        "type": "uint256",
        "name": "lockDays"
      },
      {
        "type": "uint256",
        "name": "multiplier"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateStakingToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newStakingToken"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract