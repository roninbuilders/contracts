import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36545,
  address: '0xcbf466bb65e5bebce7b274d0decddfc866384e19' as const,
  contract_name: 'StakingImplementationV2',
  display_name: 'Staking Implementation V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753824055,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AlreadyWithdrawn",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BlackListed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ClaimFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ERC20InsufficientAllowance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "allowance"
      },
      {
        "type": "uint256",
        "name": "needed"
      }
    ]
  },
  {
    "name": "ERC20InsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      },
      {
        "type": "uint256",
        "name": "balance"
      },
      {
        "type": "uint256",
        "name": "needed"
      }
    ]
  },
  {
    "name": "ERC20InvalidApprover",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "approver"
      }
    ]
  },
  {
    "name": "ERC20InvalidReceiver",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "receiver"
      }
    ]
  },
  {
    "name": "ERC20InvalidSender",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      }
    ]
  },
  {
    "name": "ERC20InvalidSpender",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      }
    ]
  },
  {
    "name": "FunctionDeprecatedUseTheNewOne",
    "type": "error",
    "inputs": []
  },
  {
    "name": "GamePaused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidFeePercentage",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidFeePercentageCap",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidFeeReceiver",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidLockDuration",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRewardToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSecondStakingToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidStakingToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoFeesToClaim",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoRewardsForToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoRewardsToDistribute",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoStakedTokens",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotAuthorized",
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
    "name": "ProvidedIndexNotCorrect",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RewardTokenNotWhitelisted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SecondStakingTokenAlreadySet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TH_SAFE_TRANSFER_FAILED",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TH_SAFE_TRANSFER_FROM_FAILED",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "WithdrawAlreadyExists",
    "type": "error",
    "inputs": []
  },
  {
    "name": "WithdrawalNotUnlocked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Approval",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "spender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "ClaimedFees",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "feeReceiver",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "ClaimedFeesV2",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "feeReceiver",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "ClaimedRewardV2",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "address",
        "name": "rewardToken",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "ClaimedRewards",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "lastCommitedDistributionIndex"
      },
      {
        "type": "bool",
        "name": "autoStake"
      }
    ]
  },
  {
    "name": "FeePercentageCapChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "oldFeePercentageCap"
      },
      {
        "type": "uint256",
        "name": "newFeePercentageCap"
      }
    ]
  },
  {
    "name": "FeePercentageChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "oldFeePercentage"
      },
      {
        "type": "uint256",
        "name": "newFeePercentage"
      }
    ]
  },
  {
    "name": "FeeReceiverChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "oldFeeReceiver",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newFeeReceiver",
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
    "name": "LockDurationChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "oldLockDuration"
      },
      {
        "type": "uint256",
        "name": "newLockDuration"
      }
    ]
  },
  {
    "name": "NewDistribution",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "distributionIndex"
      },
      {
        "type": "uint256",
        "name": "start"
      },
      {
        "type": "uint256",
        "name": "rewards"
      },
      {
        "type": "uint256",
        "name": "totalSupply"
      }
    ]
  },
  {
    "name": "NewDistributionV2",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "distributionIndex"
      },
      {
        "type": "uint256",
        "name": "start"
      },
      {
        "type": "uint256",
        "name": "rewards"
      },
      {
        "type": "uint256",
        "name": "totalSupply"
      },
      {
        "type": "address",
        "name": "rewardToken"
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
    "name": "RewardTokenWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isWhitelisted"
      }
    ]
  },
  {
    "name": "SecondStakingTokenSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "Staked",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "StakedV2",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ]
  },
  {
    "name": "StakingPaused",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId"
      }
    ]
  },
  {
    "name": "StakingUnpaused",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId"
      }
    ]
  },
  {
    "name": "Transfer",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "Unstaked",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes32",
        "name": "withdrawalId"
      },
      {
        "type": "uint256",
        "name": "lockedWithdrawalTill"
      }
    ]
  },
  {
    "name": "UnstakedV2",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes32",
        "name": "withdrawalId"
      },
      {
        "type": "uint256",
        "name": "lockedWithdrawalTill"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ]
  },
  {
    "name": "Withdrawal",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes32",
        "name": "withdrawalId"
      }
    ]
  },
  {
    "name": "WithdrawalV2",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes32",
        "name": "withdrawalId"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ]
  },
  {
    "name": "DIVIDER",
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
    "name": "FEE_PERCENTAGE_CAP",
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
    "name": "LOCK_DURATION_CAP",
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
    "name": "allowance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "spender"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "approve",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "claimFees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimFees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "claimRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "autoStake"
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
        "type": "address",
        "name": "_rewardToken"
      }
    ],
    "outputs": []
  },
  {
    "name": "commitUser",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_account"
      },
      {
        "type": "uint256",
        "name": "_distIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "createDistribution",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_rewardToken"
      }
    ],
    "outputs": []
  },
  {
    "name": "createDistribution",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "decimals",
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
    "name": "distributionRewardToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "distributions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "start"
      },
      {
        "type": "uint256",
        "name": "end"
      },
      {
        "type": "uint256",
        "name": "rewards"
      },
      {
        "type": "uint256",
        "name": "capitalLastRatio"
      },
      {
        "type": "uint256",
        "name": "lastInteraction"
      }
    ]
  },
  {
    "name": "feePercentage",
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
    "name": "feeReceiver",
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
    "name": "gameId",
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
    "name": "getCurrentDistributionRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_rewardToken"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "incomingRewards"
      }
    ]
  },
  {
    "name": "getPendingRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_account"
      },
      {
        "type": "address",
        "name": "_rewardToken"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "rewards"
      }
    ]
  },
  {
    "name": "getRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_account"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "rewards"
      }
    ]
  },
  {
    "name": "getUserBalances",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_account"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "stakingTokenBalance"
      },
      {
        "type": "uint256",
        "name": "secondStakingTokenBalance"
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
        "name": "_gameId"
      },
      {
        "type": "string",
        "name": "_name"
      },
      {
        "type": "string",
        "name": "_symbol"
      },
      {
        "type": "uint256",
        "name": "_lockDuration"
      },
      {
        "type": "address",
        "name": "_stakingToken"
      },
      {
        "type": "address",
        "name": "_feeReceiver"
      },
      {
        "type": "uint256",
        "name": "_feePercentage"
      },
      {
        "type": "address",
        "name": "_secondStakingToken"
      }
    ],
    "outputs": []
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_gameId"
      },
      {
        "type": "string",
        "name": "_name"
      },
      {
        "type": "string",
        "name": "_symbol"
      },
      {
        "type": "uint256",
        "name": "_lockDuration"
      },
      {
        "type": "address",
        "name": "_stakingToken"
      },
      {
        "type": "address",
        "name": "_feeReceiver"
      },
      {
        "type": "uint256",
        "name": "_feePercentage"
      }
    ],
    "outputs": []
  },
  {
    "name": "isPaused",
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
    "name": "lockDuration",
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
    "name": "name",
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
    "name": "pauseGame",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
    "name": "rewardTokenWhitelist",
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
    "name": "secondStakingToken",
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
    "name": "secondTokenBalance",
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
    "name": "secondTokenTotalSupply",
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
    "name": "setFeePercentage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_feePercentage"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFeePercentageCap",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_feePercentageCap"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFeeReceiver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_feeReceiver"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLockDuration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_lockDuration"
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
        "name": "_token"
      },
      {
        "type": "bool",
        "name": "_isWhitelisted"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSecondStakingTokenAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_secondStakingToken"
      }
    ],
    "outputs": []
  },
  {
    "name": "stake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "address",
        "name": "_tokenAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "stake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "stakingToken",
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
    "name": "symbol",
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
    "name": "totalFees",
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
    "name": "totalFeesByToken",
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
    "name": "totalRewards",
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
    "name": "totalRewardsByToken",
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
    "name": "totalSupply",
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
    "name": "totalUnstaked",
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
    "name": "transfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_value"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "transferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_from"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_value"
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
    "name": "unpauseGame",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "unstake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "withdrawalId"
      }
    ]
  },
  {
    "name": "unstake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "address",
        "name": "_tokenAddress"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "withdrawalId"
      }
    ]
  },
  {
    "name": "unstakeRequestToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "unstakeRequests",
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
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "unlockAt"
      },
      {
        "type": "bool",
        "name": "claimed"
      }
    ]
  },
  {
    "name": "userLastDist",
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
    "name": "userLastInteraction",
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
    "name": "userRatio",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
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
    "name": "userRewards",
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
    "name": "userRewardsByToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
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
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_withdrawalId"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract