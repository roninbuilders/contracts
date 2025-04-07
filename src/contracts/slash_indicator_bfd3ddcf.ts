import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1804,
  address: '0xe50a177c5a80b32fee5222d2c45f476abfd3ddcf' as const,
  contract_name: 'SlashIndicator',
  display_name: 'Slash Indicator',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1709535688,
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
    "name": "ErrCallerMustBeJailedInTheCurrentPeriod",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrCannotSlashAValidatorTwiceOrSlashMoreThanOneValidatorInOneBlock",
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
    "name": "ErrEvidenceAlreadySubmitted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInsufficientCreditScoreToBailOut",
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
    "name": "ErrInvalidCreditScoreConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidCutOffPercentageConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidThreshold",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
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
    "name": "ErrUnregisteredPublicKey",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrValidatorHasBailedOutPreviously",
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
    "name": "BailedOut",
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
      },
      {
        "type": "uint256",
        "name": "usedCreditScore"
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
        "name": "cids"
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
    "name": "FastFinalitySlashingConfigsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "slashFastFinalityAmount"
      },
      {
        "type": "uint256",
        "name": "fastFinalityJailUntilBlock"
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
    "name": "Slashed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
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
    "name": "bailOut",
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
    "name": "checkBailedOutAtPeriod",
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
    "name": "currentUnavailabilityIndicator",
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
        "name": "validatorIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "execUpdateCreditScores",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "validatorIds"
      },
      {
        "type": "uint256",
        "name": "period"
      }
    ],
    "outputs": []
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
    "name": "getCreditScore",
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
    "name": "getFastFinalitySlashingConfigs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "slashFastFinalityAmount_"
      },
      {
        "type": "uint256",
        "name": "fastFinalityJailUntilBlock_"
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
        "name": "consensusAddrs"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "resultList"
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
        "name": "consensus"
      },
      {
        "type": "uint256",
        "name": "period"
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
        "type": "uint256[4]"
      },
      {
        "type": "uint256[2]"
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
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "roninGovernanceAdminContract"
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
        "type": "address",
        "name": "profileContract"
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
    "name": "precompileValidateFastFinalityAddress",
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
    "name": "setFastFinalitySlashingConfigs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "slashAmount"
      },
      {
        "type": "uint256",
        "name": "jailUntilBlock"
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
        "name": "tier1Threshold"
      },
      {
        "type": "uint256",
        "name": "tier2Threshold"
      },
      {
        "type": "uint256",
        "name": "slashAmountForTier2"
      },
      {
        "type": "uint256",
        "name": "jailDurationForTier2"
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
        "name": "consensusAddr"
      },
      {
        "type": "bytes",
        "name": "header1"
      },
      {
        "type": "bytes",
        "name": "header2"
      }
    ],
    "outputs": []
  },
  {
    "name": "slashFastFinality",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr"
      },
      {
        "type": "bytes",
        "name": "voterPublicKey"
      },
      {
        "type": "uint256",
        "name": "targetBlockNumber"
      },
      {
        "type": "bytes32[2]",
        "name": "targetBlockHash"
      },
      {
        "type": "bytes[][2]",
        "name": "listOfPublicKey"
      },
      {
        "type": "bytes[2]",
        "name": "aggregatedSignature"
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
        "name": "consensusAddr"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract