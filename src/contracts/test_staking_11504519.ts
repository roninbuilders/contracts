import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36646,
  address: '0x9113bdf83402b183c3f71a7995bdde3b11504519' as const,
  contract_name: 'TestStaking',
  display_name: 'Test Staking',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1755445696,
  abi: [
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
    "name": "updateLockMultipliers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "points",
        "components": [
          {
            "type": "uint256",
            "name": "lockDays"
          },
          {
            "type": "uint256",
            "name": "multiplier"
          }
        ]
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