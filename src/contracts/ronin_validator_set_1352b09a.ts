import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2942,
  address: '0x02034357e0d8299fa98938ba18b618c91352b09a' as const,
  contract_name: 'RoninValidatorSet',
  display_name: 'Ronin Validator Set',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1718685411,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ErrAlreadyRequestedEmergencyExit",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrAlreadyRequestedRevokingCandidate",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrAlreadyRequestedUpdatingCommissionRate",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrAlreadyWrappedEpoch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrAtEndOfEpochOnly",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrCallerMustBeCoinbase",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrCannotBailout",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "validator"
      }
    ]
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
    "name": "ErrExceedsMaxNumberOfCandidate",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrExistentCandidate",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrExistentCandidateAdmin",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "candidateAdminAddr"
      }
    ]
  },
  {
    "name": "ErrExistentTreasury",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "treasuryAddr"
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
    "name": "ErrInvalidCommissionRate",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidEffectiveDaysOnwards",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidMaxPrioritizedValidatorNumber",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidMinEffectiveDaysOnwards",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrLockedFundMightBeRecycled",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "cid"
      }
    ]
  },
  {
    "name": "ErrLockedFundReleaseInfoNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "cid"
      }
    ]
  },
  {
    "name": "ErrNonExistentCandidate",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrPeriodEndingBlockNotTracked",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "period"
      },
      {
        "type": "uint256",
        "name": "firstTrackedPeriod"
      }
    ]
  },
  {
    "name": "ErrPeriodNotEndedYet",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "period"
      }
    ]
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
    "name": "ErrTrustedOrgCannotRenounce",
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
    "name": "ErrUnauthorizedReceiveRON",
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
    "name": "NonExistentRecyclingInfo",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BlockProducerSetUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "period",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "epoch",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "cids"
      }
    ]
  },
  {
    "name": "BlockRewardDeprecated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "rewardAmount"
      },
      {
        "type": "uint8",
        "name": "deprecatedType"
      }
    ]
  },
  {
    "name": "BlockRewardSubmitted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "submittedAmount"
      },
      {
        "type": "uint256",
        "name": "bonusAmount"
      }
    ]
  },
  {
    "name": "BridgeOperatorRewardDistributed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
        "indexed": true
      },
      {
        "type": "address",
        "name": "bridgeOperator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipientAddr",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "BridgeOperatorRewardDistributionFailed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
        "indexed": true
      },
      {
        "type": "address",
        "name": "bridgeOperator",
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
    "name": "BridgeOperatorSetUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "period",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "epoch",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "bridgeOperators"
      }
    ]
  },
  {
    "name": "CandidateGranted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
        "indexed": true
      },
      {
        "type": "address",
        "name": "treasuryAddr",
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
    "name": "CandidateRevokingTimestampUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "revokingTimestamp"
      }
    ]
  },
  {
    "name": "CandidateTopupDeadlineUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "topupDeadline"
      }
    ]
  },
  {
    "name": "CandidatesRevoked",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "cids"
      }
    ]
  },
  {
    "name": "CommissionRateUpdateScheduled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "effectiveTimestamp"
      },
      {
        "type": "uint256",
        "name": "rate"
      }
    ]
  },
  {
    "name": "CommissionRateUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "rate"
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
    "name": "DeprecatedRewardRecycleFailed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipientAddr",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "balance"
      }
    ]
  },
  {
    "name": "DeprecatedRewardRecycled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipientAddr",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "EmergencyExitLockedAmountUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "EmergencyExitLockedFundReleased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "unlockedAmount"
      }
    ]
  },
  {
    "name": "EmergencyExitLockedFundReleasingFailed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "unlockedAmount"
      },
      {
        "type": "uint256",
        "name": "contractBalance"
      }
    ]
  },
  {
    "name": "EmergencyExitRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "lockedAmount"
      }
    ]
  },
  {
    "name": "EmergencyExpiryDurationUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "EmptyValidatorSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "period",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "epoch",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "fallbackCids"
      }
    ]
  },
  {
    "name": "FastFinalityRewardDistributed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
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
      }
    ]
  },
  {
    "name": "FastFinalityRewardDistributionFailed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
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
    "name": "MaxValidatorCandidateUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "threshold"
      }
    ]
  },
  {
    "name": "MinEffectiveDaysOnwardsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "numOfDays"
      }
    ]
  },
  {
    "name": "MiningRewardDistributed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
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
      }
    ]
  },
  {
    "name": "MiningRewardDistributionFailed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
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
    "name": "StakingRewardDistributed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "totalAmount"
      },
      {
        "type": "address[]",
        "name": "cids"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "StakingRewardDistributionFailed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "totalAmount"
      },
      {
        "type": "address[]",
        "name": "cids"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "uint256",
        "name": "contractBalance"
      }
    ]
  },
  {
    "name": "ValidatorPunished",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "period",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "jailedUntil"
      },
      {
        "type": "uint256",
        "name": "deductedStakingAmount"
      },
      {
        "type": "bool",
        "name": "blockProducerRewardDeprecated"
      },
      {
        "type": "bool",
        "name": "bridgeOperatorRewardDeprecated"
      }
    ]
  },
  {
    "name": "ValidatorSetUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "period",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "epoch",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "cids"
      }
    ]
  },
  {
    "name": "ValidatorUnjailed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "period"
      }
    ]
  },
  {
    "name": "WrappedUpEpoch",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "periodNumber",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "epochNumber",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "periodEnding"
      }
    ]
  },
  {
    "name": "ZeroSumFastFinalityScore",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "epoch",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "cids"
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
    "name": "checkJailed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensus"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "checkJailedAtBlock",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      },
      {
        "type": "uint256",
        "name": "blockNum"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "checkManyJailed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "consensusList"
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
      }
    ]
  },
  {
    "name": "checkManyJailedById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "candidateIds"
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
      }
    ]
  },
  {
    "name": "checkMiningRewardDeprecated",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensus"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "checkMiningRewardDeprecatedAtPeriod",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensus"
      },
      {
        "type": "uint256",
        "name": "period"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "currentPeriod",
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
    "name": "currentPeriodStartAtBlock",
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
    "name": "emergencyExitLockedAmount",
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
    "name": "emergencyExpiryDuration",
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
    "name": "epochEndingAt",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_block"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "epochOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_block"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "execApplyValidatorCandidate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "candidateAdmin"
      },
      {
        "type": "address",
        "name": "cid"
      },
      {
        "type": "address",
        "name": "treasuryAddr"
      },
      {
        "type": "uint256",
        "name": "commissionRate"
      }
    ],
    "outputs": []
  },
  {
    "name": "execBailOut",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "validatorId"
      },
      {
        "type": "uint256",
        "name": "period"
      }
    ],
    "outputs": []
  },
  {
    "name": "execChangeAdminAddr",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cid"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "execChangeConsensusAddr",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cid"
      },
      {
        "type": "address",
        "name": "newConsensusAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "execChangeTreasuryAddr",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cid"
      },
      {
        "type": "address",
        "name": "newTreasury"
      }
    ],
    "outputs": []
  },
  {
    "name": "execReleaseLockedFundForEmergencyExitRequest",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cid"
      },
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "execRequestEmergencyExit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cid"
      },
      {
        "type": "uint256",
        "name": "secLeftToRevoke"
      }
    ],
    "outputs": []
  },
  {
    "name": "execRequestRenounceCandidate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cid"
      },
      {
        "type": "uint256",
        "name": "secsLeft"
      }
    ],
    "outputs": []
  },
  {
    "name": "execRequestUpdateCommissionRate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cid"
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
    "name": "execSlash",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "validatorId"
      },
      {
        "type": "uint256",
        "name": "newJailedUntil"
      },
      {
        "type": "uint256",
        "name": "slashAmount"
      },
      {
        "type": "bool",
        "name": "cannotBailout"
      }
    ],
    "outputs": []
  },
  {
    "name": "getBlockProducerIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "cids"
      }
    ]
  },
  {
    "name": "getBlockProducers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "consensusList"
      }
    ]
  },
  {
    "name": "getCandidateInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensus"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "__shadowedAdmin"
          },
          {
            "type": "address",
            "name": "__shadowedConsensus"
          },
          {
            "type": "address",
            "name": "__shadowedTreasury"
          },
          {
            "type": "address",
            "name": "____deprecatedBridgeOperatorAddr"
          },
          {
            "type": "uint256",
            "name": "commissionRate"
          },
          {
            "type": "uint256",
            "name": "revokingTimestamp"
          },
          {
            "type": "uint256",
            "name": "topupDeadline"
          }
        ]
      }
    ]
  },
  {
    "name": "getCandidateInfoById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "cid"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "__shadowedAdmin"
          },
          {
            "type": "address",
            "name": "__shadowedConsensus"
          },
          {
            "type": "address",
            "name": "__shadowedTreasury"
          },
          {
            "type": "address",
            "name": "____deprecatedBridgeOperatorAddr"
          },
          {
            "type": "uint256",
            "name": "commissionRate"
          },
          {
            "type": "uint256",
            "name": "revokingTimestamp"
          },
          {
            "type": "uint256",
            "name": "topupDeadline"
          }
        ]
      }
    ]
  },
  {
    "name": "getCandidateInfos",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "list",
        "components": [
          {
            "type": "address",
            "name": "__shadowedAdmin"
          },
          {
            "type": "address",
            "name": "__shadowedConsensus"
          },
          {
            "type": "address",
            "name": "__shadowedTreasury"
          },
          {
            "type": "address",
            "name": "____deprecatedBridgeOperatorAddr"
          },
          {
            "type": "uint256",
            "name": "commissionRate"
          },
          {
            "type": "uint256",
            "name": "revokingTimestamp"
          },
          {
            "type": "uint256",
            "name": "topupDeadline"
          }
        ]
      }
    ]
  },
  {
    "name": "getCommissionChangeSchedule",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensus"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "effectiveTimestamp"
          },
          {
            "type": "uint256",
            "name": "commissionRate"
          }
        ]
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
    "name": "getEmergencyExitInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensus"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "_info",
        "components": [
          {
            "type": "uint256",
            "name": "lockedAmount"
          },
          {
            "type": "uint256",
            "name": "recyclingAt"
          }
        ]
      }
    ]
  },
  {
    "name": "getJailedTimeLeft",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensus"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isJailed_"
      },
      {
        "type": "uint256",
        "name": "blockLeft_"
      },
      {
        "type": "uint256",
        "name": "epochLeft_"
      }
    ]
  },
  {
    "name": "getJailedTimeLeftAtBlock",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensus"
      },
      {
        "type": "uint256",
        "name": "_blockNum"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isJailed_"
      },
      {
        "type": "uint256",
        "name": "blockLeft_"
      },
      {
        "type": "uint256",
        "name": "epochLeft_"
      }
    ]
  },
  {
    "name": "getLastUpdatedBlock",
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
    "name": "getPeriodEndBlock",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "period"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "endedAtBlock"
      }
    ]
  },
  {
    "name": "getValidatorCandidateIds",
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
    "name": "getValidatorCandidates",
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
    "name": "getValidatorIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "cids"
      }
    ]
  },
  {
    "name": "getValidators",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "consensusList"
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
        "name": "__slashIndicatorContract"
      },
      {
        "type": "address",
        "name": "__stakingContract"
      },
      {
        "type": "address",
        "name": "__stakingVestingContract"
      },
      {
        "type": "address",
        "name": "__maintenanceContract"
      },
      {
        "type": "address",
        "name": "__roninTrustedOrganizationContract"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256",
        "name": "__maxValidatorCandidate"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256",
        "name": "__minEffectiveDaysOnwards"
      },
      {
        "type": "uint256",
        "name": "__numberOfBlocksInEpoch"
      },
      {
        "type": "uint256[2]",
        "name": "__emergencyExitConfigs"
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
        "name": "fastFinalityTrackingContract"
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
        "name": "profileContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "isBlockProducer",
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
        "type": "bool"
      }
    ]
  },
  {
    "name": "isBlockProducerById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isCandidateAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr"
      },
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
    "name": "isCandidateAdminById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "candidateId"
      },
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
    "name": "isPeriodEnding",
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
    "name": "isValidatorCandidate",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensus"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "maxPrioritizedValidatorNumber",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "_maximumPrioritizedValidatorNumber"
      }
    ]
  },
  {
    "name": "maxValidatorCandidate",
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
    "name": "maxValidatorNumber",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "_maximumValidatorNumber"
      }
    ]
  },
  {
    "name": "minEffectiveDaysOnward",
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
    "name": "numberOfBlocksInEpoch",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "_numberOfBlocks"
      }
    ]
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
    "name": "setEmergencyExitLockedAmount",
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
    "name": "setEmergencyExpiryDuration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "duration"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxValidatorCandidate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_number"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinEffectiveDaysOnwards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_numOfDays"
      }
    ],
    "outputs": []
  },
  {
    "name": "submitBlockReward",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "totalBlockProducer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "total"
      }
    ]
  },
  {
    "name": "totalDeprecatedReward",
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
    "name": "tryGetPeriodOfEpoch",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_epoch"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "_filled"
      },
      {
        "type": "uint256",
        "name": "_periodNumber"
      }
    ]
  },
  {
    "name": "validatorCount",
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
    "name": "wrapUpEpoch",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract