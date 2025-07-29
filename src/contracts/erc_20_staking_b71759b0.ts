import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27802,
  address: '0xe3c054930b7257ad59b4c33a4d96da7db71759b0' as const,
  contract_name: 'ERC20Staking',
  display_name: 'ERC20 Staking',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742446456,
  abi: [
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
    "name": "CouldNotRefund",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrDistributionOverlapped",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "newIndex"
      },
      {
        "type": "tuple",
        "name": "newDts",
        "components": [
          {
            "type": "uint256",
            "name": "rps"
          },
          {
            "type": "uint64",
            "name": "startedAt"
          },
          {
            "type": "uint64",
            "name": "endedAt"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "affectedDts",
        "components": [
          {
            "type": "uint256",
            "name": "rps"
          },
          {
            "type": "uint64",
            "name": "startedAt"
          },
          {
            "type": "uint64",
            "name": "endedAt"
          }
        ]
      }
    ]
  },
  {
    "name": "ErrInvalidEndedAt",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidLength",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "ErrInvalidReward",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidStartedAt",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidTimestampDistribution",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNothingToUpdate",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrOutOfRange",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "upperBound"
      },
      {
        "type": "uint256",
        "name": "actual"
      }
    ]
  },
  {
    "name": "ErrTransferNativeFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "ErrUnstakedFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "stakingTotal"
      },
      {
        "type": "uint256",
        "name": "currentAmount"
      },
      {
        "type": "uint256",
        "name": "requestedAmount"
      }
    ]
  },
  {
    "name": "ErrUpdateDistributionTooSoon",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrViolateMinClaimTimeRule",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "expectedTime"
      },
      {
        "type": "uint64",
        "name": "waitTime"
      }
    ]
  },
  {
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientContextValue",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MathOverflowedMulDiv",
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
    "name": "ValueContextInitialized",
    "type": "error",
    "inputs": []
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
    "name": "OwnershipTransferStarted",
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
    "name": "RewardClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
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
      }
    ]
  },
  {
    "name": "RewardDistributionSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "rewardToken",
        "indexed": true
      },
      {
        "type": "tuple[]",
        "name": "distribution",
        "components": [
          {
            "type": "uint256",
            "name": "rps"
          },
          {
            "type": "uint64",
            "name": "startedAt"
          },
          {
            "type": "uint64",
            "name": "endedAt"
          }
        ]
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
        "type": "address",
        "name": "stakingToken",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "stakedAmount"
      },
      {
        "type": "uint256",
        "name": "updatedAmount"
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
        "type": "address",
        "name": "stakingToken",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "unstakedAmount"
      },
      {
        "type": "uint256",
        "name": "updatedAmount"
      }
    ]
  },
  {
    "name": "CLAIM_COOLDOWN",
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
    "name": "COOLDOWN_TO_NEXT_UPDATE_DTS",
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
    "name": "MIN_OFFSET_DURATION",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "addRewardDistribution",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "rewardToken"
      },
      {
        "type": "tuple",
        "name": "dts",
        "components": [
          {
            "type": "uint256",
            "name": "rps"
          },
          {
            "type": "uint64",
            "name": "startedAt"
          },
          {
            "type": "uint64",
            "name": "endedAt"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "takenAmount"
      }
    ]
  },
  {
    "name": "claimRewardsFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "rwTokens"
      },
      {
        "type": "uint256[]",
        "name": "claimedAmounts"
      }
    ]
  },
  {
    "name": "getAllRewardDistributions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "rwTokens"
      },
      {
        "type": "tuple[][]",
        "name": "distributions",
        "components": [
          {
            "type": "uint256",
            "name": "rps"
          },
          {
            "type": "uint64",
            "name": "startedAt"
          },
          {
            "type": "uint64",
            "name": "endedAt"
          }
        ]
      }
    ]
  },
  {
    "name": "getDistributionAmountsInRange",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "startedTimestamp"
      },
      {
        "type": "uint64",
        "name": "endedTimestamp"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "rewardTokens"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "getPoolStats",
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
        "name": "stakingTotal"
      },
      {
        "type": "uint64",
        "name": "lastDistributionUpdated"
      },
      {
        "type": "address[]",
        "name": "rewardTokens"
      },
      {
        "type": "uint256[]",
        "name": "claimedAmounts"
      },
      {
        "type": "uint256[]",
        "name": "distributedAmounts"
      }
    ]
  },
  {
    "name": "getRewardDistributionsOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "rewardToken"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "distributions",
        "components": [
          {
            "type": "uint256",
            "name": "rps"
          },
          {
            "type": "uint64",
            "name": "startedAt"
          },
          {
            "type": "uint64",
            "name": "endedAt"
          }
        ]
      }
    ]
  },
  {
    "name": "getUserStats",
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
        "name": "stakingAmount"
      },
      {
        "type": "address[]",
        "name": "rwTokens"
      },
      {
        "type": "uint256[]",
        "name": "claimableAmounts"
      },
      {
        "type": "uint256[]",
        "name": "claimedAmounts"
      },
      {
        "type": "uint64",
        "name": "lastClaimedAt"
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "refunder"
      },
      {
        "type": "address",
        "name": "stakingToken"
      },
      {
        "type": "address[]",
        "name": "rewardTokens"
      },
      {
        "type": "tuple[]",
        "name": "dtsArr",
        "components": [
          {
            "type": "uint256",
            "name": "rps"
          },
          {
            "type": "uint64",
            "name": "startedAt"
          },
          {
            "type": "uint64",
            "name": "endedAt"
          }
        ]
      }
    ],
    "outputs": []
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
    "name": "peekAddRewardDistribution",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "rewardToken"
      },
      {
        "type": "tuple",
        "name": "dts",
        "components": [
          {
            "type": "uint256",
            "name": "rps"
          },
          {
            "type": "uint64",
            "name": "startedAt"
          },
          {
            "type": "uint64",
            "name": "endedAt"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "requiredAmount"
      }
    ]
  },
  {
    "name": "peekUpdateRewardDistribution",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "rewardToken"
      },
      {
        "type": "uint256",
        "name": "index"
      },
      {
        "type": "tuple",
        "name": "dts",
        "components": [
          {
            "type": "uint256",
            "name": "rps"
          },
          {
            "type": "uint64",
            "name": "startedAt"
          },
          {
            "type": "uint64",
            "name": "endedAt"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "refundAmount"
      },
      {
        "type": "uint256",
        "name": "requiredAmount"
      }
    ]
  },
  {
    "name": "pendingOwner",
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
    "name": "stake",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "unstake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateRewardDistribution",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "rewardToken"
      },
      {
        "type": "uint256",
        "name": "index"
      },
      {
        "type": "tuple",
        "name": "dts",
        "components": [
          {
            "type": "uint256",
            "name": "rps"
          },
          {
            "type": "uint64",
            "name": "startedAt"
          },
          {
            "type": "uint64",
            "name": "endedAt"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "refundAmount"
      },
      {
        "type": "uint256",
        "name": "takenAmount"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract