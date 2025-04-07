import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 99,
  address: '0x056500e6028048db7fca81ac307008a9042605f3' as const,
  contract_name: 'SlashIndicator',
  display_name: 'Slash Indicator',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1680774283,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ErrCallPrecompiled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrCallerMustBeGovernanceAdminContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrCallerMustBeMaintenanceContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrCallerMustBeRoninTrustedOrgContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrCallerMustBeValidatorContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrZeroCodeContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BailedOut",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "validator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "period"
      },
      {
        "type": "uint256",
        "name": "usedCreditScore"
      }
    ]
  },
  {
    "name": "BridgeOperatorSlashingConfigsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "missingVotesRatioTier1"
      },
      {
        "type": "uint256",
        "name": "missingVotesRatioTier2"
      },
      {
        "type": "uint256",
        "name": "jailDurationForMissingVotesRatioTier2"
      },
      {
        "type": "uint256",
        "name": "skipBridgeOperatorSlashingThreshold"
      }
    ]
  },
  {
    "name": "BridgeVotingSlashingConfigsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "bridgeVotingThreshold"
      },
      {
        "type": "uint256",
        "name": "bridgeVotingSlashAmount"
      }
    ]
  },
  {
    "name": "CreditScoreConfigsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gainCreditScore"
      },
      {
        "type": "uint256",
        "name": "maxCreditScore"
      },
      {
        "type": "uint256",
        "name": "bailOutCostMultiplier"
      },
      {
        "type": "uint256",
        "name": "cutOffPercentageAfterBailout"
      }
    ]
  },
  {
    "name": "CreditScoresUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "validators"
      },
      {
        "type": "uint256[]",
        "name": "creditScores"
      }
    ]
  },
  {
    "name": "DoubleSignSlashingConfigsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "slashDoubleSignAmount"
      },
      {
        "type": "uint256",
        "name": "doubleSigningJailUntilBlock"
      },
      {
        "type": "uint256",
        "name": "doubleSigningOffsetLimitBlock"
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
    "name": "MaintenanceContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "RoninGovernanceAdminContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "RoninTrustedOrganizationContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "Slashed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "validator",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "slashType"
      },
      {
        "type": "uint256",
        "name": "period"
      }
    ]
  },
  {
    "name": "UnavailabilitySlashingConfigsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "unavailabilityTier1Threshold"
      },
      {
        "type": "uint256",
        "name": "unavailabilityTier2Threshold"
      },
      {
        "type": "uint256",
        "name": "slashAmountForUnavailabilityTier2Threshold"
      },
      {
        "type": "uint256",
        "name": "jailDurationForUnavailabilityTier2Threshold"
      }
    ]
  },
  {
    "name": "ValidatorContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "bailOut",
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
    "name": "checkBailedOutAtPeriod",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_validator"
      },
      {
        "type": "uint256",
        "name": "_period"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "currentUnavailabilityIndicator",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_validator"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "execResetCreditScores",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_validators"
      }
    ],
    "outputs": []
  },
  {
    "name": "execSlashBridgeOperator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_consensusAddr"
      },
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "uint256",
        "name": "_period"
      }
    ],
    "outputs": []
  },
  {
    "name": "getBridgeOperatorSlashingConfigs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "missingVotesRatioTier1_"
      },
      {
        "type": "uint256",
        "name": "missingVotesRatioTier2_"
      },
      {
        "type": "uint256",
        "name": "jailDurationForMissingVotesRatioTier2_"
      },
      {
        "type": "uint256",
        "name": "skipBridgeOperatorSlashingThreshold_"
      }
    ]
  },
  {
    "name": "getBridgeVotingSlashingConfigs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "bridgeVotingThreshold_"
      },
      {
        "type": "uint256",
        "name": "bridgeVotingSlashAmount_"
      }
    ]
  },
  {
    "name": "getCreditScore",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_validator"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getCreditScoreConfigs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "gainCreditScore_"
      },
      {
        "type": "uint256",
        "name": "maxCreditScore_"
      },
      {
        "type": "uint256",
        "name": "bailOutCostMultiplier_"
      },
      {
        "type": "uint256",
        "name": "cutOffPercentageAfterBailout_"
      }
    ]
  },
  {
    "name": "getDoubleSignSlashingConfigs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "slashDoubleSignAmount_"
      },
      {
        "type": "uint256",
        "name": "doubleSigningJailUntilBlock_"
      },
      {
        "type": "uint256",
        "name": "doubleSigningOffsetLimitBlock_"
      }
    ]
  },
  {
    "name": "getManyCreditScores",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_validators"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_resultList"
      }
    ]
  },
  {
    "name": "getUnavailabilityIndicator",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_validator"
      },
      {
        "type": "uint256",
        "name": "_period"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getUnavailabilitySlashingConfigs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "unavailabilityTier1Threshold_"
      },
      {
        "type": "uint256",
        "name": "unavailabilityTier2Threshold_"
      },
      {
        "type": "uint256",
        "name": "slashAmountForUnavailabilityTier2Threshold_"
      },
      {
        "type": "uint256",
        "name": "jailDurationForUnavailabilityTier2Threshold_"
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
        "type": "address",
        "name": "__maintenanceContract"
      },
      {
        "type": "address",
        "name": "__roninTrustedOrganizationContract"
      },
      {
        "type": "address",
        "name": "__roninGovernanceAdminContract"
      },
      {
        "type": "uint256[4]",
        "name": "_bridgeOperatorSlashingConfigs"
      },
      {
        "type": "uint256[2]",
        "name": "_bridgeVotingSlashingConfigs"
      },
      {
        "type": "uint256[3]",
        "name": "_doubleSignSlashingConfigs"
      },
      {
        "type": "uint256[4]",
        "name": "_unavailabilitySlashingConfigs"
      },
      {
        "type": "uint256[4]",
        "name": "_creditScoreConfigs"
      }
    ],
    "outputs": []
  },
  {
    "name": "lastUnavailabilitySlashedBlock",
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
    "name": "maintenanceContract",
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
    "name": "precompileValidateDoubleSignAddress",
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
    "name": "roninGovernanceAdminContract",
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
    "name": "roninTrustedOrganizationContract",
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
    "name": "setBridgeOperatorSlashingConfigs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_ratioTier1"
      },
      {
        "type": "uint256",
        "name": "_ratioTier2"
      },
      {
        "type": "uint256",
        "name": "_jailDurationTier2"
      },
      {
        "type": "uint256",
        "name": "_skipSlashingThreshold"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBridgeVotingSlashingConfigs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_threshold"
      },
      {
        "type": "uint256",
        "name": "_slashAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "setCreditScoreConfigs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_gainScore"
      },
      {
        "type": "uint256",
        "name": "_maxScore"
      },
      {
        "type": "uint256",
        "name": "_bailOutMultiplier"
      },
      {
        "type": "uint256",
        "name": "_cutOffPercentage"
      }
    ],
    "outputs": []
  },
  {
    "name": "setDoubleSignSlashingConfigs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_slashAmount"
      },
      {
        "type": "uint256",
        "name": "_jailUntilBlock"
      },
      {
        "type": "uint256",
        "name": "_offsetLimitBlock"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaintenanceContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRoninGovernanceAdminContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRoninTrustedOrganizationContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setUnavailabilitySlashingConfigs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tier1Threshold"
      },
      {
        "type": "uint256",
        "name": "_tier2Threshold"
      },
      {
        "type": "uint256",
        "name": "_slashAmountForTier2Threshold"
      },
      {
        "type": "uint256",
        "name": "_jailDurationForTier2Threshold"
      }
    ],
    "outputs": []
  },
  {
    "name": "setValidatorContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "slashBridgeVoting",
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
    "name": "slashDoubleSign",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_consensusAddr"
      },
      {
        "type": "bytes",
        "name": "_header1"
      },
      {
        "type": "bytes",
        "name": "_header2"
      }
    ],
    "outputs": []
  },
  {
    "name": "slashUnavailability",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_validatorAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateCreditScores",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_validators"
      },
      {
        "type": "uint256",
        "name": "_period"
      }
    ],
    "outputs": []
  },
  {
    "name": "validatorContract",
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