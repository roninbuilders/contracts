import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 949,
  address: '0x8ae952d538e9c25120e9c75fba0718750f81313a' as const,
  contract_name: 'Staking',
  display_name: 'Staking',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1697443098,
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
    "name": "ErrCannotInitTransferRON",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      },
      {
        "type": "string",
        "name": "extraInfo"
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
        "name": "poolAddr"
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
        "name": "consensuAddr",
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
        "name": "validator",
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
        "name": "poolAddr",
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
        "name": "validator"
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
        "name": "poolAddrs"
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
        "name": "poolAddrs"
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
        "name": "poolAddrs"
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
        "name": "poolAddr",
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
    "name": "Staked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "consensuAddr",
        "indexed": true
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
        "name": "validator",
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
        "name": "validator",
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
        "name": "consensuAddr",
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
        "name": "consensuAddr",
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
        "name": "poolAddr",
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
        "name": "_candidateAdmin"
      },
      {
        "type": "address",
        "name": "_consensusAddr"
      },
      {
        "type": "address",
        "name": "_treasuryAddr"
      },
      {
        "type": "uint256",
        "name": "_commissionRate"
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
        "name": "_consensusAddrs"
      },
      {
        "type": "uint256[]",
        "name": "_amounts"
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
        "name": "_consensusAddrList"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amount"
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
        "name": "_consensusAddr"
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
        "name": "_consensusAddrList"
      },
      {
        "type": "address",
        "name": "_consensusAddrDst"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ]
  },
  {
    "name": "execDeductStakingAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_consensusAddr"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_actualDeductingAmount"
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
        "name": "_pools"
      },
      {
        "type": "uint256",
        "name": "_newPeriod"
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
        "name": "_consensusAddrs"
      },
      {
        "type": "uint256[]",
        "name": "_rewards"
      },
      {
        "type": "uint256",
        "name": "_period"
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
        "name": "_pools"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_selfStakings"
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
        "name": "_poolAddrs"
      },
      {
        "type": "address[]",
        "name": "_userList"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_stakingAmounts"
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
        "name": "_poolList"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_stakingAmounts"
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
        "name": "_poolAdminAddr"
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
        "name": "_poolAddr"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "_admin"
      },
      {
        "type": "uint256",
        "name": "_stakingAmount"
      },
      {
        "type": "uint256",
        "name": "_stakingTotal"
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
        "name": "_poolAddr"
      },
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
    "name": "getRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      },
      {
        "type": "address[]",
        "name": "_poolAddrList"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_rewards"
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
        "name": "_poolAddr"
      },
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
    "name": "getStakingTotal",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_poolAddr"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "isAdminOfActivePool",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_poolAdminAddr"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
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
        "name": "_consensusAddrSrc"
      },
      {
        "type": "address",
        "name": "_consensusAddrDst"
      },
      {
        "type": "uint256",
        "name": "_amount"
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
        "name": "_consensusAddr"
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
        "name": "_consensusAddr"
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
        "name": "_consensusAddr"
      },
      {
        "type": "uint256",
        "name": "_effectiveDaysOnwards"
      },
      {
        "type": "uint256",
        "name": "_commissionRate"
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
        "name": "_minRate"
      },
      {
        "type": "uint256",
        "name": "_maxRate"
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
        "name": "_cooldownSecs"
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
        "name": "_threshold"
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
        "name": "_secs"
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
        "name": "_consensusAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "tmp_re_applyValidatorCandidate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_candidateAdmin"
      },
      {
        "type": "address",
        "name": "_consensusAddr"
      },
      {
        "type": "address",
        "name": "_treasuryAddr"
      },
      {
        "type": "uint256",
        "name": "_commissionRate"
      }
    ],
    "outputs": []
  },
  {
    "name": "undelegate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_consensusAddr"
      },
      {
        "type": "uint256",
        "name": "_amount"
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
        "name": "_consensusAddr"
      },
      {
        "type": "uint256",
        "name": "_amount"
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