import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2946,
  address: '0xae4788294759c1ea2d095766cc902786ba2280dc' as const,
  contract_name: 'TransparentProxyV2',
  display_name: 'Ronin Random Beacon Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xeefa82a9f0ecce5ce6052c15e48ff7ec2d95f83a',
  created_at: 1718685396,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "logic"
      },
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
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
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "functionDelegateCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "name": "ErrAlreadyFinalizedBeacon",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "period"
      }
    ]
  },
  {
    "name": "ErrAlreadySubmitted",
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
    "name": "ErrInvalidChainId",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "expected"
      },
      {
        "type": "uint256",
        "name": "actual"
      }
    ]
  },
  {
    "name": "ErrInvalidKeyHash",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "expected"
      },
      {
        "type": "bytes32",
        "name": "actual"
      }
    ]
  },
  {
    "name": "ErrInvalidPeriod",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidProof",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidRandomRequest",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "expected"
      },
      {
        "type": "bytes32",
        "name": "actual"
      }
    ]
  },
  {
    "name": "ErrInvalidThresholdConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidVerifyingContract",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "expected"
      },
      {
        "type": "address",
        "name": "actual"
      }
    ]
  },
  {
    "name": "ErrLengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrLengthMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrNotActivated",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "untilPeriod"
      }
    ]
  },
  {
    "name": "ErrNotEndedChangeKeyHashCooldown",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNotEndedRegisterCooldown",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNotFinalizedBeacon",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "period"
      }
    ]
  },
  {
    "name": "ErrOutOfRange",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
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
    "name": "ErrUnauthorizedCall",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
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
    "name": "BeaconFinalized",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "period",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
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
    "name": "RandomSeedFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "period",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      }
    ]
  },
  {
    "name": "RandomSeedRequested",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "period",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "req",
        "components": [
          {
            "type": "uint256",
            "name": "period"
          },
          {
            "type": "uint256",
            "name": "prevBeacon"
          },
          {
            "type": "uint256",
            "name": "chainId"
          },
          {
            "type": "address",
            "name": "verifyingContract"
          }
        ]
      }
    ]
  },
  {
    "name": "SlashUnavailabilityThresholdUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "ValidatorSetSaved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "period",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "pickedAll"
      },
      {
        "type": "uint256",
        "name": "nRV"
      },
      {
        "type": "address[]",
        "name": "nonRotatingValidators"
      },
      {
        "type": "address[]",
        "name": "rotatingValidators"
      },
      {
        "type": "uint256[]",
        "name": "rotatingStakeAmounts"
      }
    ]
  },
  {
    "name": "ValidatorThresholdUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "validatorType",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "threshold"
      }
    ]
  },
  {
    "name": "COOLDOWN_PERIOD_THRESHOLD",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "threshold"
      }
    ]
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
    "name": "bulkSetValidatorThresholds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8[]",
        "name": "validatorTypes"
      },
      {
        "type": "uint256[]",
        "name": "thresholds"
      }
    ],
    "outputs": []
  },
  {
    "name": "calcKeyHash",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256[2]",
        "name": "publicKeys"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "keyHash"
      }
    ]
  },
  {
    "name": "execFinalizeBeaconAndPendingCids",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "lastUpdatedPeriod"
      },
      {
        "type": "uint256",
        "name": "newPeriod"
      },
      {
        "type": "address[]",
        "name": "allCids"
      }
    ],
    "outputs": []
  },
  {
    "name": "execRecordAndSlashUnavailability",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "lastUpdatedPeriod"
      },
      {
        "type": "uint256",
        "name": "newPeriod"
      },
      {
        "type": "address",
        "name": "slashIndicator"
      },
      {
        "type": "address[]",
        "name": "allCids"
      }
    ],
    "outputs": []
  },
  {
    "name": "execRequestRandomSeedForNextPeriod",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "lastUpdatedPeriod"
      },
      {
        "type": "uint256",
        "name": "newPeriod"
      }
    ],
    "outputs": []
  },
  {
    "name": "fulfillRandomSeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "req",
        "components": [
          {
            "type": "uint256",
            "name": "period"
          },
          {
            "type": "uint256",
            "name": "prevBeacon"
          },
          {
            "type": "uint256",
            "name": "chainId"
          },
          {
            "type": "address",
            "name": "verifyingContract"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "proof",
        "components": [
          {
            "type": "uint256[2]",
            "name": "pk"
          },
          {
            "type": "uint256[2]",
            "name": "gamma"
          },
          {
            "type": "uint256",
            "name": "c"
          },
          {
            "type": "uint256",
            "name": "s"
          },
          {
            "type": "uint256",
            "name": "seed"
          },
          {
            "type": "address",
            "name": "uWitness"
          },
          {
            "type": "uint256[2]",
            "name": "cGammaWitness"
          },
          {
            "type": "uint256[2]",
            "name": "sHashWitness"
          },
          {
            "type": "uint256",
            "name": "zInv"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "getActivatedAtPeriod",
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
    "name": "getBeaconData",
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
        "name": "value"
      },
      {
        "type": "bool",
        "name": "finalized"
      },
      {
        "type": "uint256",
        "name": "submissionCount"
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
    "name": "getLastFinalizedPeriod",
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
    "name": "getRequestHash",
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
        "type": "bytes32",
        "name": "reqHash"
      }
    ]
  },
  {
    "name": "getSavedValidatorSet",
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
        "type": "tuple",
        "components": [
          {
            "type": "bool",
            "name": "_pickAll"
          },
          {
            "type": "tuple",
            "name": "_sorted",
            "components": [
              {
                "type": "uint16",
                "name": "_nRV"
              },
              {
                "type": "address[]",
                "name": "_nonRotatingValidators"
              },
              {
                "type": "tuple[]",
                "name": "_rotatingValidators",
                "components": [
                  {
                    "type": "address",
                    "name": "_cid"
                  },
                  {
                    "type": "uint96",
                    "name": "_staked"
                  }
                ]
              }
            ]
          },
          {
            "type": "tuple",
            "name": "_unsorted",
            "components": [
              {
                "type": "address[]",
                "name": "_cids"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "getSelectedValidatorSet",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "period"
      },
      {
        "type": "uint256",
        "name": "epoch"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "pickedCids"
      }
    ]
  },
  {
    "name": "getUnavailabilityCount",
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
        "type": "uint256",
        "name": "count"
      }
    ]
  },
  {
    "name": "getUnavailabilityCountById",
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
        "type": "uint256",
        "name": "count"
      }
    ]
  },
  {
    "name": "getUnavailabilitySlashThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "threshold"
      }
    ]
  },
  {
    "name": "getValidatorThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "validatorType"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "threshold"
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
        "name": "profile"
      },
      {
        "type": "address",
        "name": "staking"
      },
      {
        "type": "address",
        "name": "trustedOrg"
      },
      {
        "type": "address",
        "name": "validatorSet"
      },
      {
        "type": "uint256",
        "name": "slashThreshold"
      },
      {
        "type": "uint256",
        "name": "activatedAtPeriod"
      },
      {
        "type": "uint8[]",
        "name": "validatorTypes"
      },
      {
        "type": "uint256[]",
        "name": "thresholds"
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
    "inputs": [],
    "outputs": []
  },
  {
    "name": "isSubmittedAt",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "period"
      },
      {
        "type": "address",
        "name": "consensus"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "submitted"
      }
    ]
  },
  {
    "name": "isSubmittedAtById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "period"
      },
      {
        "type": "address",
        "name": "cid"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "submitted"
      }
    ]
  },
  {
    "name": "isSubmittedAtByKeyHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "period"
      },
      {
        "type": "bytes32",
        "name": "keyHash"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "submitted"
      }
    ]
  },
  {
    "name": "pickValidatorSetForCurrentPeriod",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "epoch"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "pickedCids"
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
    "name": "setUnavailabilitySlashThreshold",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "threshold"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract