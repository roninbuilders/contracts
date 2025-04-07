import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2070,
  address: '0xc457943c59cc5b192bdab622513d02f97d0cc02b' as const,
  contract_name: 'Staking',
  display_name: 'Staking',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1711428488,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ErrAdminOfAnyActivePoolForbidden",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      }
    ]
  },
  {
    "name": "ErrCannotTransferRON",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrContractTypeNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      }
    ]
  },
  {
    "name": "ErrDuplicated",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrInactivePool",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr"
      },
      {
        "type": "address",
        "name": "poolId"
      }
    ]
  },
  {
    "name": "ErrInsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "uint256",
        "name": "currentBalance"
      },
      {
        "type": "uint256",
        "name": "sendAmount"
      }
    ]
  },
  {
    "name": "ErrInsufficientDelegatingAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInsufficientStakingAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidArguments",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrInvalidArrays",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidCommissionRate",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidPoolShare",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrMigrateWasAdminAlreadyDone",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrOnlyPoolAdminAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrPoolAdminForbidden",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrRecipientRevert",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrStakingAmountLeft",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrThreeInteractionAddrsNotEqual",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnauthorized",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "uint8",
        "name": "expectedRole"
      }
    ]
  },
  {
    "name": "ErrUndelegateTooEarly",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUndelegateZeroAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnexpectedInternalCall",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "uint8",
        "name": "expectedContractType"
      },
      {
        "type": "address",
        "name": "actual"
      }
    ]
  },
  {
    "name": "ErrUnstakeTooEarly",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnstakeZeroAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrZeroCodeContract",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ]
  },
  {
    "name": "ErrZeroValue",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CommissionRateRangeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "minRate"
      },
      {
        "type": "uint256",
        "name": "maxRate"
      }
    ]
  },
  {
    "name": "ContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType",
        "indexed": true
      },
      {
        "type": "address",
        "name": "addr",
        "indexed": true
      }
    ]
  },
  {
    "name": "CooldownSecsToUndelegateUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "minSecs"
      }
    ]
  },
  {
    "name": "Delegated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "delegator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "MigrateWasAdminDisabled",
    "type": "event",
    "inputs": []
  },
  {
    "name": "MigrateWasAdminFinished",
    "type": "event",
    "inputs": []
  },
  {
    "name": "MinValidatorStakingAmountUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "threshold"
      }
    ]
  },
  {
    "name": "PoolApproved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "admin",
        "indexed": true
      }
    ]
  },
  {
    "name": "PoolSharesUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "period",
        "indexed": true
      },
      {
        "type": "address",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "shares"
      }
    ]
  },
  {
    "name": "PoolsDeprecated",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "poolIds"
      }
    ]
  },
  {
    "name": "PoolsUpdateConflicted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "period",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "poolIds"
      }
    ]
  },
  {
    "name": "PoolsUpdateFailed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "period",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "poolIds"
      },
      {
        "type": "uint256[]",
        "name": "rewards"
      }
    ]
  },
  {
    "name": "PoolsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "period",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "poolIds"
      },
      {
        "type": "uint256[]",
        "name": "aRps"
      },
      {
        "type": "uint256[]",
        "name": "shares"
      }
    ]
  },
  {
    "name": "RewardClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "poolId",
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
    "name": "Staked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "StakeholderChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "oldAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "StakingAmountDeductFailed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "contractBalance"
      }
    ]
  },
  {
    "name": "StakingAmountTransferFailed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "admin",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "contractBalance"
      }
    ]
  },
  {
    "name": "Undelegated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "delegator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "Unstaked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "UserRewardUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "debited"
      }
    ]
  },
  {
    "name": "WaitingSecsToRevokeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "secs"
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "DEFAULT_ADDITION_GAS",
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
    "name": "MIGRATOR_ROLE",
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
    "name": "PERIOD_DURATION",
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
    "name": "applyValidatorCandidate",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "candidateAdmin"
      },
      {
        "type": "address",
        "name": "consensusAddr"
      },
      {
        "type": "address",
        "name": "treasuryAddr"
      },
      {
        "type": "uint256",
        "name": "commissionRate"
      },
      {
        "type": "bytes",
        "name": "pubkey"
      },
      {
        "type": "bytes",
        "name": "proofOfPossession"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkUndelegate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "consensusAddrs"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
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
        "type": "address[]",
        "name": "consensusAddrList"
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
    "name": "cooldownSecsToUndelegate",
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
    "name": "delegate",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "delegateRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "consensusAddrList"
      },
      {
        "type": "address",
        "name": "consensusAddrDst"
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
    "name": "disableMigrateWasAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "execChangeAdminAddr",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "poolId"
      },
      {
        "type": "address",
        "name": "currAdminAddr"
      },
      {
        "type": "address",
        "name": "newAdminAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "execDeductStakingAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "poolId"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "actualDeductingAmount_"
      }
    ]
  },
  {
    "name": "execDeprecatePools",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "poolIds"
      },
      {
        "type": "uint256",
        "name": "newPeriod"
      }
    ],
    "outputs": []
  },
  {
    "name": "execRecordRewards",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address[]",
        "name": "poolIds"
      },
      {
        "type": "uint256[]",
        "name": "rewards"
      },
      {
        "type": "uint256",
        "name": "period"
      }
    ],
    "outputs": []
  },
  {
    "name": "getCommissionRateRange",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
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
    "name": "getContract",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "contract_"
      }
    ]
  },
  {
    "name": "getManySelfStakings",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "consensusAddrs"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "selfStakings_"
      }
    ]
  },
  {
    "name": "getManySelfStakingsById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "poolIds"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "selfStakings_"
      }
    ]
  },
  {
    "name": "getManyStakingAmounts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "consensusAddrs"
      },
      {
        "type": "address[]",
        "name": "userList"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "stakingAmounts"
      }
    ]
  },
  {
    "name": "getManyStakingAmountsById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "poolIds"
      },
      {
        "type": "address[]",
        "name": "userList"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "stakingAmounts"
      }
    ]
  },
  {
    "name": "getManyStakingTotals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "consensusAddrs"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "stakingAmounts_"
      }
    ]
  },
  {
    "name": "getManyStakingTotalsById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "poolIds"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "stakingAmounts_"
      }
    ]
  },
  {
    "name": "getPoolAddressOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getPoolDetail",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "uint256",
        "name": "stakingAmount"
      },
      {
        "type": "uint256",
        "name": "stakingTotal"
      }
    ]
  },
  {
    "name": "getPoolDetailById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "poolId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "uint256",
        "name": "stakingAmount"
      },
      {
        "type": "uint256",
        "name": "stakingTotal"
      }
    ]
  },
  {
    "name": "getReward",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr"
      },
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
    "name": "getRewardById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "poolId"
      },
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
    "name": "getRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "address[]",
        "name": "consensusAddrs"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "rewards_"
      }
    ]
  },
  {
    "name": "getRewardsById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "address[]",
        "name": "poolIds"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "rewards_"
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
    "name": "getStakingAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr"
      },
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
    "name": "getStakingTotal",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr"
      }
    ],
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "__validatorContract"
      },
      {
        "type": "uint256",
        "name": "__minValidatorStakingAmount"
      },
      {
        "type": "uint256",
        "name": "__maxCommissionRate"
      },
      {
        "type": "uint256",
        "name": "__cooldownSecsToUndelegate"
      },
      {
        "type": "uint256",
        "name": "__waitingSecsToRevoke"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "initializeV3",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "__profileContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV4",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "address",
        "name": "migrator"
      }
    ],
    "outputs": []
  },
  {
    "name": "isAdminOfActivePool",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "migrateWasAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "poolIds"
      },
      {
        "type": "address[]",
        "name": "admins"
      },
      {
        "type": "bool[]",
        "name": "flags"
      }
    ],
    "outputs": []
  },
  {
    "name": "minValidatorStakingAmount",
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
    "name": "redelegate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddrSrc"
      },
      {
        "type": "address",
        "name": "consensusAddrDst"
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "requestEmergencyExit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "requestRenounce",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "requestUpdateCommissionRate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr"
      },
      {
        "type": "uint256",
        "name": "effectiveDaysOnwards"
      },
      {
        "type": "uint256",
        "name": "commissionRate"
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
    "name": "setCommissionRateRange",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "minRate"
      },
      {
        "type": "uint256",
        "name": "maxRate"
      }
    ],
    "outputs": []
  },
  {
    "name": "setContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      },
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setCooldownSecsToUndelegate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "cooldownSecs"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinValidatorStakingAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "threshold"
      }
    ],
    "outputs": []
  },
  {
    "name": "setWaitingSecsToRevoke",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "secs"
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
        "type": "address",
        "name": "consensusAddr"
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
    "name": "undelegate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr"
      },
      {
        "type": "uint256",
        "name": "amount"
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
        "type": "address",
        "name": "consensusAddr"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "waitingSecsToRevoke",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract