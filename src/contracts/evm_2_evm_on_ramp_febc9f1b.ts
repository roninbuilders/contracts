import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4957,
  address: '0x02b60267bceeafdc45005e0fa0dd783efebc9f1b' as const,
  contract_name: 'EVM2EVMOnRamp',
  display_name: 'EVM2 EVM On Ramp',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1730712915,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "staticConfig",
        "components": [
          {
            "type": "address",
            "name": "linkToken"
          },
          {
            "type": "uint64",
            "name": "chainSelector"
          },
          {
            "type": "uint64",
            "name": "destChainSelector"
          },
          {
            "type": "uint64",
            "name": "defaultTxGasLimit"
          },
          {
            "type": "uint96",
            "name": "maxNopFeesJuels"
          },
          {
            "type": "address",
            "name": "prevOnRamp"
          },
          {
            "type": "address",
            "name": "rmnProxy"
          },
          {
            "type": "address",
            "name": "tokenAdminRegistry"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "dynamicConfig",
        "components": [
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "uint16",
            "name": "maxNumberOfTokensPerMsg"
          },
          {
            "type": "uint32",
            "name": "destGasOverhead"
          },
          {
            "type": "uint16",
            "name": "destGasPerPayloadByte"
          },
          {
            "type": "uint32",
            "name": "destDataAvailabilityOverheadGas"
          },
          {
            "type": "uint16",
            "name": "destGasPerDataAvailabilityByte"
          },
          {
            "type": "uint16",
            "name": "destDataAvailabilityMultiplierBps"
          },
          {
            "type": "address",
            "name": "priceRegistry"
          },
          {
            "type": "uint32",
            "name": "maxDataBytes"
          },
          {
            "type": "uint32",
            "name": "maxPerMsgGasLimit"
          },
          {
            "type": "uint16",
            "name": "defaultTokenFeeUSDCents"
          },
          {
            "type": "uint32",
            "name": "defaultTokenDestGasOverhead"
          },
          {
            "type": "bool",
            "name": "enforceOutOfOrder"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "rateLimiterConfig",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "feeTokenConfigs",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint32",
            "name": "networkFeeUSDCents"
          },
          {
            "type": "uint64",
            "name": "gasMultiplierWeiPerEth"
          },
          {
            "type": "uint64",
            "name": "premiumMultiplierWeiPerEth"
          },
          {
            "type": "bool",
            "name": "enabled"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "tokenTransferFeeConfigArgs",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint32",
            "name": "minFeeUSDCents"
          },
          {
            "type": "uint32",
            "name": "maxFeeUSDCents"
          },
          {
            "type": "uint16",
            "name": "deciBps"
          },
          {
            "type": "uint32",
            "name": "destGasOverhead"
          },
          {
            "type": "uint32",
            "name": "destBytesOverhead"
          },
          {
            "type": "bool",
            "name": "aggregateRateLimitEnabled"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "nopsAndWeights",
        "components": [
          {
            "type": "address",
            "name": "nop"
          },
          {
            "type": "uint16",
            "name": "weight"
          }
        ]
      }
    ]
  },
  {
    "name": "AggregateValueMaxCapacityExceeded",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "capacity"
      },
      {
        "type": "uint256",
        "name": "requested"
      }
    ]
  },
  {
    "name": "AggregateValueRateLimitReached",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "minWaitInSeconds"
      },
      {
        "type": "uint256",
        "name": "available"
      }
    ]
  },
  {
    "name": "BucketOverfilled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CannotSendZeroTokens",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CursedByRMN",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExtraArgOutOfOrderExecutionMustBeTrue",
    "type": "error",
    "inputs": []
  },
  {
    "name": "GetSupportedTokensFunctionalityRemovedCheckAdminRegistry",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidChainSelector",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "chainSelector"
      }
    ]
  },
  {
    "name": "InvalidConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidDestBytesOverhead",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint32",
        "name": "destBytesOverhead"
      }
    ]
  },
  {
    "name": "InvalidEVMAddress",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "encodedAddress"
      }
    ]
  },
  {
    "name": "InvalidExtraArgsTag",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidNopAddress",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "nop"
      }
    ]
  },
  {
    "name": "InvalidWithdrawParams",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LinkBalanceNotSettled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MaxFeeBalanceReached",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MessageGasLimitTooHigh",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MessageTooLarge",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "maxSize"
      },
      {
        "type": "uint256",
        "name": "actualSize"
      }
    ]
  },
  {
    "name": "MustBeCalledByRouter",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoFeesToPay",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoNopsToPay",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotAFeeToken",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "OnlyCallableByAdminOrOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCallableByOwnerOrAdmin",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCallableByOwnerOrAdminOrNop",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PriceNotFoundForToken",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "RouterMustSetOriginalSender",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SourceTokenDataTooLarge",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "TokenMaxCapacityExceeded",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "capacity"
      },
      {
        "type": "uint256",
        "name": "requested"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ]
  },
  {
    "name": "TokenRateLimitReached",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "minWaitInSeconds"
      },
      {
        "type": "uint256",
        "name": "available"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ]
  },
  {
    "name": "TooManyNops",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnsupportedNumberOfTokens",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnsupportedToken",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "AdminSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "CCIPSendRequested",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "message",
        "components": [
          {
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "address",
            "name": "sender"
          },
          {
            "type": "address",
            "name": "receiver"
          },
          {
            "type": "uint64",
            "name": "sequenceNumber"
          },
          {
            "type": "uint256",
            "name": "gasLimit"
          },
          {
            "type": "bool",
            "name": "strict"
          },
          {
            "type": "uint64",
            "name": "nonce"
          },
          {
            "type": "address",
            "name": "feeToken"
          },
          {
            "type": "uint256",
            "name": "feeTokenAmount"
          },
          {
            "type": "bytes",
            "name": "data"
          },
          {
            "type": "tuple[]",
            "name": "tokenAmounts",
            "components": [
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "bytes[]",
            "name": "sourceTokenData"
          },
          {
            "type": "bytes32",
            "name": "messageId"
          }
        ]
      }
    ]
  },
  {
    "name": "ConfigChanged",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      }
    ]
  },
  {
    "name": "ConfigSet",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "staticConfig",
        "components": [
          {
            "type": "address",
            "name": "linkToken"
          },
          {
            "type": "uint64",
            "name": "chainSelector"
          },
          {
            "type": "uint64",
            "name": "destChainSelector"
          },
          {
            "type": "uint64",
            "name": "defaultTxGasLimit"
          },
          {
            "type": "uint96",
            "name": "maxNopFeesJuels"
          },
          {
            "type": "address",
            "name": "prevOnRamp"
          },
          {
            "type": "address",
            "name": "rmnProxy"
          },
          {
            "type": "address",
            "name": "tokenAdminRegistry"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "dynamicConfig",
        "components": [
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "uint16",
            "name": "maxNumberOfTokensPerMsg"
          },
          {
            "type": "uint32",
            "name": "destGasOverhead"
          },
          {
            "type": "uint16",
            "name": "destGasPerPayloadByte"
          },
          {
            "type": "uint32",
            "name": "destDataAvailabilityOverheadGas"
          },
          {
            "type": "uint16",
            "name": "destGasPerDataAvailabilityByte"
          },
          {
            "type": "uint16",
            "name": "destDataAvailabilityMultiplierBps"
          },
          {
            "type": "address",
            "name": "priceRegistry"
          },
          {
            "type": "uint32",
            "name": "maxDataBytes"
          },
          {
            "type": "uint32",
            "name": "maxPerMsgGasLimit"
          },
          {
            "type": "uint16",
            "name": "defaultTokenFeeUSDCents"
          },
          {
            "type": "uint32",
            "name": "defaultTokenDestGasOverhead"
          },
          {
            "type": "bool",
            "name": "enforceOutOfOrder"
          }
        ]
      }
    ]
  },
  {
    "name": "FeeConfigSet",
    "type": "event",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "feeConfig",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint32",
            "name": "networkFeeUSDCents"
          },
          {
            "type": "uint64",
            "name": "gasMultiplierWeiPerEth"
          },
          {
            "type": "uint64",
            "name": "premiumMultiplierWeiPerEth"
          },
          {
            "type": "bool",
            "name": "enabled"
          }
        ]
      }
    ]
  },
  {
    "name": "NopPaid",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nop",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "NopsSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nopWeightsTotal"
      },
      {
        "type": "tuple[]",
        "name": "nopsAndWeights",
        "components": [
          {
            "type": "address",
            "name": "nop"
          },
          {
            "type": "uint16",
            "name": "weight"
          }
        ]
      }
    ]
  },
  {
    "name": "OwnershipTransferRequested",
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
      }
    ]
  },
  {
    "name": "OwnershipTransferred",
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
      }
    ]
  },
  {
    "name": "TokenTransferFeeConfigDeleted",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      }
    ]
  },
  {
    "name": "TokenTransferFeeConfigSet",
    "type": "event",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "transferFeeConfig",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint32",
            "name": "minFeeUSDCents"
          },
          {
            "type": "uint32",
            "name": "maxFeeUSDCents"
          },
          {
            "type": "uint16",
            "name": "deciBps"
          },
          {
            "type": "uint32",
            "name": "destGasOverhead"
          },
          {
            "type": "uint32",
            "name": "destBytesOverhead"
          },
          {
            "type": "bool",
            "name": "aggregateRateLimitEnabled"
          }
        ]
      }
    ]
  },
  {
    "name": "TokensConsumed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokens"
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
    "name": "currentRateLimiterState",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint128",
            "name": "tokens"
          },
          {
            "type": "uint32",
            "name": "lastUpdated"
          },
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      }
    ]
  },
  {
    "name": "forwardFromRouter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      },
      {
        "type": "tuple",
        "name": "message",
        "components": [
          {
            "type": "bytes",
            "name": "receiver"
          },
          {
            "type": "bytes",
            "name": "data"
          },
          {
            "type": "tuple[]",
            "name": "tokenAmounts",
            "components": [
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "address",
            "name": "feeToken"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "feeTokenAmount"
      },
      {
        "type": "address",
        "name": "originalSender"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getDynamicConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "name": "dynamicConfig",
        "components": [
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "uint16",
            "name": "maxNumberOfTokensPerMsg"
          },
          {
            "type": "uint32",
            "name": "destGasOverhead"
          },
          {
            "type": "uint16",
            "name": "destGasPerPayloadByte"
          },
          {
            "type": "uint32",
            "name": "destDataAvailabilityOverheadGas"
          },
          {
            "type": "uint16",
            "name": "destGasPerDataAvailabilityByte"
          },
          {
            "type": "uint16",
            "name": "destDataAvailabilityMultiplierBps"
          },
          {
            "type": "address",
            "name": "priceRegistry"
          },
          {
            "type": "uint32",
            "name": "maxDataBytes"
          },
          {
            "type": "uint32",
            "name": "maxPerMsgGasLimit"
          },
          {
            "type": "uint16",
            "name": "defaultTokenFeeUSDCents"
          },
          {
            "type": "uint32",
            "name": "defaultTokenDestGasOverhead"
          },
          {
            "type": "bool",
            "name": "enforceOutOfOrder"
          }
        ]
      }
    ]
  },
  {
    "name": "getExpectedNextSequenceNumber",
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
    "name": "getFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      },
      {
        "type": "tuple",
        "name": "message",
        "components": [
          {
            "type": "bytes",
            "name": "receiver"
          },
          {
            "type": "bytes",
            "name": "data"
          },
          {
            "type": "tuple[]",
            "name": "tokenAmounts",
            "components": [
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "address",
            "name": "feeToken"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "feeTokenAmount"
      }
    ]
  },
  {
    "name": "getFeeTokenConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "feeTokenConfig",
        "components": [
          {
            "type": "uint32",
            "name": "networkFeeUSDCents"
          },
          {
            "type": "uint64",
            "name": "gasMultiplierWeiPerEth"
          },
          {
            "type": "uint64",
            "name": "premiumMultiplierWeiPerEth"
          },
          {
            "type": "bool",
            "name": "enabled"
          }
        ]
      }
    ]
  },
  {
    "name": "getNopFeesJuels",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint96"
      }
    ]
  },
  {
    "name": "getNops",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "nopsAndWeights",
        "components": [
          {
            "type": "address",
            "name": "nop"
          },
          {
            "type": "uint16",
            "name": "weight"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "weightsTotal"
      }
    ]
  },
  {
    "name": "getPoolBySourceToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64"
      },
      {
        "type": "address",
        "name": "sourceToken"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getSenderNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "getStaticConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "linkToken"
          },
          {
            "type": "uint64",
            "name": "chainSelector"
          },
          {
            "type": "uint64",
            "name": "destChainSelector"
          },
          {
            "type": "uint64",
            "name": "defaultTxGasLimit"
          },
          {
            "type": "uint96",
            "name": "maxNopFeesJuels"
          },
          {
            "type": "address",
            "name": "prevOnRamp"
          },
          {
            "type": "address",
            "name": "rmnProxy"
          },
          {
            "type": "address",
            "name": "tokenAdminRegistry"
          }
        ]
      }
    ]
  },
  {
    "name": "getSupportedTokens",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint64"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getTokenLimitAdmin",
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
    "name": "getTokenTransferFeeConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "tokenTransferFeeConfig",
        "components": [
          {
            "type": "uint32",
            "name": "minFeeUSDCents"
          },
          {
            "type": "uint32",
            "name": "maxFeeUSDCents"
          },
          {
            "type": "uint16",
            "name": "deciBps"
          },
          {
            "type": "uint32",
            "name": "destGasOverhead"
          },
          {
            "type": "uint32",
            "name": "destBytesOverhead"
          },
          {
            "type": "bool",
            "name": "aggregateRateLimitEnabled"
          },
          {
            "type": "bool",
            "name": "isEnabled"
          }
        ]
      }
    ]
  },
  {
    "name": "linkAvailableForPayment",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int256"
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
    "name": "payNops",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setAdmin",
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
    "name": "setDynamicConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "dynamicConfig",
        "components": [
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "uint16",
            "name": "maxNumberOfTokensPerMsg"
          },
          {
            "type": "uint32",
            "name": "destGasOverhead"
          },
          {
            "type": "uint16",
            "name": "destGasPerPayloadByte"
          },
          {
            "type": "uint32",
            "name": "destDataAvailabilityOverheadGas"
          },
          {
            "type": "uint16",
            "name": "destGasPerDataAvailabilityByte"
          },
          {
            "type": "uint16",
            "name": "destDataAvailabilityMultiplierBps"
          },
          {
            "type": "address",
            "name": "priceRegistry"
          },
          {
            "type": "uint32",
            "name": "maxDataBytes"
          },
          {
            "type": "uint32",
            "name": "maxPerMsgGasLimit"
          },
          {
            "type": "uint16",
            "name": "defaultTokenFeeUSDCents"
          },
          {
            "type": "uint32",
            "name": "defaultTokenDestGasOverhead"
          },
          {
            "type": "bool",
            "name": "enforceOutOfOrder"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setFeeTokenConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "feeTokenConfigArgs",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint32",
            "name": "networkFeeUSDCents"
          },
          {
            "type": "uint64",
            "name": "gasMultiplierWeiPerEth"
          },
          {
            "type": "uint64",
            "name": "premiumMultiplierWeiPerEth"
          },
          {
            "type": "bool",
            "name": "enabled"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setNops",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "nopsAndWeights",
        "components": [
          {
            "type": "address",
            "name": "nop"
          },
          {
            "type": "uint16",
            "name": "weight"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setRateLimiterConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setTokenTransferFeeConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "tokenTransferFeeConfigArgs",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint32",
            "name": "minFeeUSDCents"
          },
          {
            "type": "uint32",
            "name": "maxFeeUSDCents"
          },
          {
            "type": "uint16",
            "name": "deciBps"
          },
          {
            "type": "uint32",
            "name": "destGasOverhead"
          },
          {
            "type": "uint32",
            "name": "destBytesOverhead"
          },
          {
            "type": "bool",
            "name": "aggregateRateLimitEnabled"
          }
        ]
      },
      {
        "type": "address[]",
        "name": "tokensToUseDefaultFeeConfigs"
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
        "name": "to"
      }
    ],
    "outputs": []
  },
  {
    "name": "typeAndVersion",
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
    "name": "withdrawNonLinkFees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "feeToken"
      },
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract