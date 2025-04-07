import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 456,
  address: '0x16a62a921e7fec5bf867ff5c805b662db757b778' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Ronin VRF Coordinator Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xdf3fec9dbe1875d437483b85e1cc8466dddc6b42',
  created_at: 1692000372,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "address",
        "name": "admin_"
      },
      {
        "type": "bytes",
        "name": "_data"
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
    "name": "admin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "admin_"
      }
    ]
  },
  {
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "implementation_"
      }
    ]
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
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
  },
  {
    "type": "receive",
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
    "name": "CallerIsNotAConsumer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DuplicateOracle",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyHash"
      },
      {
        "type": "address",
        "name": "oracleAddr"
      }
    ]
  },
  {
    "name": "EmptyOracleSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrComputedPriceTooLarge",
    "type": "error",
    "inputs": [
      {
        "type": "int32",
        "name": "expo1"
      },
      {
        "type": "int32",
        "name": "expo2"
      },
      {
        "type": "int64",
        "name": "price1"
      }
    ]
  },
  {
    "name": "ErrExponentTooLarge",
    "type": "error",
    "inputs": [
      {
        "type": "int32",
        "name": "expo"
      }
    ]
  },
  {
    "name": "ErrUnauthorizedConsumer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FulfillTooSoon",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientFee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidArrayLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidConfig",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "field"
      }
    ]
  },
  {
    "name": "InvalidFulfillOrder",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "expectedKeyHash"
      }
    ]
  },
  {
    "name": "InvalidGasPrice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPeriod",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidProofSeed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRefundAddress",
    "type": "error",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "InvalidSender",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "expectedSender"
      }
    ]
  },
  {
    "name": "KeyHashAlreadyAdded",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyHash"
      }
    ]
  },
  {
    "name": "LengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Locked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NullValue",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
      }
    ]
  },
  {
    "name": "OperatorCannotFulfill",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyHash"
      }
    ]
  },
  {
    "name": "RandomRequestAlreadyFinalized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RequestHashNotFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RequireNonNullValue",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "field"
      }
    ]
  },
  {
    "name": "UnexistedKeyHash",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyHash"
      }
    ]
  },
  {
    "name": "WrongRandomRequest",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AddressWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "addr",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "status",
        "indexed": true
      }
    ]
  },
  {
    "name": "AllScoresUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "period",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "avgScoreDecreased"
      },
      {
        "type": "bytes32[]",
        "name": "keyHashes"
      },
      {
        "type": "uint64[]",
        "name": "newScores"
      }
    ]
  },
  {
    "name": "ConstantFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "constantFee"
      }
    ]
  },
  {
    "name": "GasAfterPaymentCalculationUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gasCost"
      }
    ]
  },
  {
    "name": "GasToEstimateRandomFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gasCost"
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
    "name": "MaxResponseBlockUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "numBlock"
      }
    ]
  },
  {
    "name": "NewPeriod",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "currentPeriod",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "startAt"
      }
    ]
  },
  {
    "name": "OracleUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "keyHashes"
      },
      {
        "type": "address[]",
        "name": "oracleAddrs"
      }
    ]
  },
  {
    "name": "OraclesAdded",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "keyHashes"
      },
      {
        "type": "address[]",
        "name": "oracleAddrs"
      }
    ]
  },
  {
    "name": "OraclesRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "keyHashes"
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
    "name": "PeriodDurationUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "periodDuration"
      }
    ]
  },
  {
    "name": "PythConverterUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pyth",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "priceId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "tokenDecimal"
      },
      {
        "type": "uint256",
        "name": "maxAcceptableAge"
      }
    ]
  },
  {
    "name": "RandomSeedFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "randomSeed"
      },
      {
        "type": "uint256",
        "name": "requestValue"
      },
      {
        "type": "uint256",
        "name": "refundAmount"
      },
      {
        "type": "uint256",
        "name": "paymentAmount"
      },
      {
        "type": "uint256",
        "name": "constantFee"
      },
      {
        "type": "bool",
        "name": "callbackResult"
      }
    ]
  },
  {
    "name": "RandomSeedRequested",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "request",
        "components": [
          {
            "type": "uint256",
            "name": "blockNumber"
          },
          {
            "type": "uint256",
            "name": "callbackGasLimit"
          },
          {
            "type": "uint256",
            "name": "gasPrice"
          },
          {
            "type": "uint256",
            "name": "gasFee"
          },
          {
            "type": "address",
            "name": "requester"
          },
          {
            "type": "address",
            "name": "consumer"
          },
          {
            "type": "address",
            "name": "refundAddr"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "usdConstantFee"
          },
          {
            "type": "uint256",
            "name": "ronConstantFee"
          },
          {
            "type": "bytes32[]",
            "name": "orderedKeyHashes"
          }
        ]
      }
    ]
  },
  {
    "name": "RefundFailed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "refundAddr"
      },
      {
        "type": "uint256",
        "name": "refundAmount"
      }
    ]
  },
  {
    "name": "ScoreUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "keyHash",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "action",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "score"
      }
    ]
  },
  {
    "name": "ScoringConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "indicator"
      },
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "tuple",
            "name": "forFulfill",
            "components": [
              {
                "type": "uint8",
                "name": "lower"
              },
              {
                "type": "uint8",
                "name": "upper"
              },
              {
                "type": "uint8",
                "name": "blockInterval"
              },
              {
                "type": "uint232",
                "name": "_reservedInner"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "forAssign",
            "components": [
              {
                "type": "uint8",
                "name": "score"
              },
              {
                "type": "uint248",
                "name": "_reservedInner"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "forAll",
            "components": [
              {
                "type": "uint32",
                "name": "maxResponseBlock"
              },
              {
                "type": "uint64",
                "name": "periodDuration"
              },
              {
                "type": "uint160",
                "name": "_reservedInner"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "TreasuryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "treasury"
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
    "name": "WhitelistAllChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "status",
        "indexed": true
      }
    ]
  },
  {
    "name": "addOracles",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "keyHashes"
      },
      {
        "type": "address[]",
        "name": "oracleAddrs"
      }
    ],
    "outputs": []
  },
  {
    "name": "constantFee",
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
    "name": "estimateRequestRandomFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "callbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "gasPrice"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "estimateRandomFee"
      }
    ]
  },
  {
    "name": "fulfillRandomSeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
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
      },
      {
        "type": "tuple",
        "name": "req",
        "components": [
          {
            "type": "uint256",
            "name": "blockNumber"
          },
          {
            "type": "uint256",
            "name": "callbackGasLimit"
          },
          {
            "type": "uint256",
            "name": "gasPrice"
          },
          {
            "type": "uint256",
            "name": "gasFee"
          },
          {
            "type": "address",
            "name": "requester"
          },
          {
            "type": "address",
            "name": "consumer"
          },
          {
            "type": "address",
            "name": "refundAddr"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "usdConstantFee"
          },
          {
            "type": "uint256",
            "name": "ronConstantFee"
          },
          {
            "type": "bytes32[]",
            "name": "orderedKeyHashes"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "paymentAmount"
      }
    ]
  },
  {
    "name": "gasAfterPaymentCalculation",
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
    "name": "gasToEstimateRandomFee",
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
    "name": "getCurrentPeriod",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "periodNum"
      },
      {
        "type": "uint256",
        "name": "startedAt"
      }
    ]
  },
  {
    "name": "getKeyHashesAndScores",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32[]",
        "name": "keyHashes"
      },
      {
        "type": "uint64[]",
        "name": "scores"
      }
    ]
  },
  {
    "name": "getOperatorStat",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyHash"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "currentPeriod"
      },
      {
        "type": "uint256",
        "name": "score"
      },
      {
        "type": "uint256",
        "name": "assignCount"
      },
      {
        "type": "uint256",
        "name": "fulfillCount"
      }
    ]
  },
  {
    "name": "getOracleInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyHash"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "oracleInfo",
        "components": [
          {
            "type": "address",
            "name": "oracleAddr"
          },
          {
            "type": "uint32",
            "name": "index"
          },
          {
            "type": "uint64",
            "name": "infoUpdatedAtPeriod"
          }
        ]
      }
    ]
  },
  {
    "name": "getRandomRequestHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consumer"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ]
  },
  {
    "name": "getRandomRequestNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consumer"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "nonce"
      }
    ]
  },
  {
    "name": "getScoringConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "tuple",
            "name": "forFulfill",
            "components": [
              {
                "type": "uint8",
                "name": "lower"
              },
              {
                "type": "uint8",
                "name": "upper"
              },
              {
                "type": "uint8",
                "name": "blockInterval"
              },
              {
                "type": "uint232",
                "name": "_reservedInner"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "forAssign",
            "components": [
              {
                "type": "uint8",
                "name": "score"
              },
              {
                "type": "uint248",
                "name": "_reservedInner"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "forAll",
            "components": [
              {
                "type": "uint32",
                "name": "maxResponseBlock"
              },
              {
                "type": "uint64",
                "name": "periodDuration"
              },
              {
                "type": "uint160",
                "name": "_reservedInner"
              }
            ]
          }
        ]
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
        "name": "admin"
      },
      {
        "type": "uint256",
        "name": "gasToEstimateRandomFee_"
      },
      {
        "type": "uint256",
        "name": "gasAfterPaymentCalculation_"
      },
      {
        "type": "uint256",
        "name": "constantFee_"
      },
      {
        "type": "address",
        "name": "treasury_"
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
        "type": "tuple",
        "name": "periodConfig",
        "components": [
          {
            "type": "uint128",
            "name": "periodNum"
          },
          {
            "type": "uint128",
            "name": "startAt"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "scoringConfig",
        "components": [
          {
            "type": "tuple",
            "name": "forFulfill",
            "components": [
              {
                "type": "uint8",
                "name": "lower"
              },
              {
                "type": "uint8",
                "name": "upper"
              },
              {
                "type": "uint8",
                "name": "blockInterval"
              },
              {
                "type": "uint232",
                "name": "_reservedInner"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "forAssign",
            "components": [
              {
                "type": "uint8",
                "name": "score"
              },
              {
                "type": "uint248",
                "name": "_reservedInner"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "forAll",
            "components": [
              {
                "type": "uint32",
                "name": "maxResponseBlock"
              },
              {
                "type": "uint64",
                "name": "periodDuration"
              },
              {
                "type": "uint160",
                "name": "_reservedInner"
              }
            ]
          }
        ]
      },
      {
        "type": "address",
        "name": "pyth"
      },
      {
        "type": "uint8",
        "name": "usdDecimal"
      },
      {
        "type": "bytes32",
        "name": "priceId"
      },
      {
        "type": "uint256",
        "name": "maxAcceptableAge"
      },
      {
        "type": "uint256",
        "name": "usdConstantFee"
      },
      {
        "type": "uint256",
        "name": "gasToEstimateRandomFee_"
      },
      {
        "type": "uint256",
        "name": "gasAfterPaymentCalculation_"
      },
      {
        "type": "bytes32[]",
        "name": "keyHashes"
      },
      {
        "type": "address[]",
        "name": "oracles"
      }
    ],
    "outputs": []
  },
  {
    "name": "isOracleInturn",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "req",
        "components": [
          {
            "type": "uint256",
            "name": "blockNumber"
          },
          {
            "type": "uint256",
            "name": "callbackGasLimit"
          },
          {
            "type": "uint256",
            "name": "gasPrice"
          },
          {
            "type": "uint256",
            "name": "gasFee"
          },
          {
            "type": "address",
            "name": "requester"
          },
          {
            "type": "address",
            "name": "consumer"
          },
          {
            "type": "address",
            "name": "refundAddr"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "usdConstantFee"
          },
          {
            "type": "uint256",
            "name": "ronConstantFee"
          },
          {
            "type": "bytes32[]",
            "name": "orderedKeyHashes"
          }
        ]
      },
      {
        "type": "bytes32",
        "name": "oracleKeyHash"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "yes"
      }
    ]
  },
  {
    "name": "isWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "keyHash",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256[2]",
        "name": "publicKey"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "oracleAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyHash"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "oracle"
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
    "name": "priceFeed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint8",
            "name": "tokenDecimal"
          },
          {
            "type": "address",
            "name": "pyth"
          },
          {
            "type": "bytes32",
            "name": "priceId"
          },
          {
            "type": "uint256",
            "name": "maxAcceptableAge"
          }
        ]
      }
    ]
  },
  {
    "name": "removeOracles",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "keyHashes"
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
    "name": "requestFinalized",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "reqStatus",
        "components": [
          {
            "type": "bool",
            "name": "finalized"
          },
          {
            "type": "uint8",
            "name": "version"
          },
          {
            "type": "address",
            "name": "finalizedBy"
          }
        ]
      }
    ]
  },
  {
    "name": "requestFinalizedAtBlock",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ],
    "outputs": [
      {
        "type": "uint64",
        "name": "blk"
      }
    ]
  },
  {
    "name": "requestRandomSeed",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "callbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "gasPrice"
      },
      {
        "type": "address",
        "name": "consumer"
      },
      {
        "type": "address",
        "name": "refundAddress"
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
    "name": "setConstantFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "constantFee_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGasAfterPaymentCalculation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "gas"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGasToEstimateRandomFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "gas"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPriceFeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "pyth"
      },
      {
        "type": "uint8",
        "name": "tokenDecimal"
      },
      {
        "type": "bytes32",
        "name": "priceId"
      },
      {
        "type": "uint256",
        "name": "maxAcceptableAge"
      }
    ],
    "outputs": []
  },
  {
    "name": "setScoringConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "scoringConfig",
        "components": [
          {
            "type": "tuple",
            "name": "forFulfill",
            "components": [
              {
                "type": "uint8",
                "name": "lower"
              },
              {
                "type": "uint8",
                "name": "upper"
              },
              {
                "type": "uint8",
                "name": "blockInterval"
              },
              {
                "type": "uint232",
                "name": "_reservedInner"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "forAssign",
            "components": [
              {
                "type": "uint8",
                "name": "score"
              },
              {
                "type": "uint248",
                "name": "_reservedInner"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "forAll",
            "components": [
              {
                "type": "uint32",
                "name": "maxResponseBlock"
              },
              {
                "type": "uint64",
                "name": "periodDuration"
              },
              {
                "type": "uint160",
                "name": "_reservedInner"
              }
            ]
          }
        ]
      },
      {
        "type": "uint256",
        "name": "indicator"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "tuple",
            "name": "forFulfill",
            "components": [
              {
                "type": "uint8",
                "name": "lower"
              },
              {
                "type": "uint8",
                "name": "upper"
              },
              {
                "type": "uint8",
                "name": "blockInterval"
              },
              {
                "type": "uint232",
                "name": "_reservedInner"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "forAssign",
            "components": [
              {
                "type": "uint8",
                "name": "score"
              },
              {
                "type": "uint248",
                "name": "_reservedInner"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "forAll",
            "components": [
              {
                "type": "uint32",
                "name": "maxResponseBlock"
              },
              {
                "type": "uint64",
                "name": "periodDuration"
              },
              {
                "type": "uint160",
                "name": "_reservedInner"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "setTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "treasury_"
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
    "name": "treasury",
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "updateOracles",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "keyHashes"
      },
      {
        "type": "address[]",
        "name": "oracleAddrs"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      },
      {
        "type": "bool",
        "name": "status"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistAllAddresses",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "status"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistedAll",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract