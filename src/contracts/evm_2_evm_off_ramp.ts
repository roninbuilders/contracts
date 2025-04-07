import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5525,
  address: '0x79dd7db8adebf6622852a5ace471a78edc6c0883' as const,
  contract_name: 'EVM2EVMOffRamp',
  display_name: 'EVM2 EVM Off Ramp',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1733253165,
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
            "name": "commitStore"
          },
          {
            "type": "uint64",
            "name": "chainSelector"
          },
          {
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "address",
            "name": "onRamp"
          },
          {
            "type": "address",
            "name": "prevOffRamp"
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
    "name": "CanOnlySelfCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CommitStoreAlreadyInUse",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ConfigDigestMismatch",
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
    "name": "CursedByRMN",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DestinationGasAmountCountMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "messageId"
      },
      {
        "type": "uint64",
        "name": "sequenceNumber"
      }
    ]
  },
  {
    "name": "EmptyReport",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExecutionError",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "err"
      }
    ]
  },
  {
    "name": "ForkedChain",
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
    "name": "InvalidConfig",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "errorType"
      }
    ]
  },
  {
    "name": "InvalidDataLength",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "expected"
      },
      {
        "type": "uint256",
        "name": "got"
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
    "name": "InvalidManualExecutionGasLimit",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "messageId"
      },
      {
        "type": "uint256",
        "name": "oldLimit"
      },
      {
        "type": "uint256",
        "name": "newLimit"
      }
    ]
  },
  {
    "name": "InvalidMessageId",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidNewState",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "sequenceNumber"
      },
      {
        "type": "uint8",
        "name": "newState"
      }
    ]
  },
  {
    "name": "InvalidSourceChain",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      }
    ]
  },
  {
    "name": "InvalidTokenGasOverride",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "messageId"
      },
      {
        "type": "uint256",
        "name": "tokenIndex"
      },
      {
        "type": "uint256",
        "name": "oldLimit"
      },
      {
        "type": "uint256",
        "name": "tokenGasOverride"
      }
    ]
  },
  {
    "name": "ManualExecutionGasLimitMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ManualExecutionNotYetEnabled",
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
    "name": "NotACompatiblePool",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "notPool"
      }
    ]
  },
  {
    "name": "OnlyCallableByAdminOrOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OracleCannotBeZeroAddress",
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
    "name": "ReceiverError",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "err"
      }
    ]
  },
  {
    "name": "ReleaseOrMintBalanceMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountReleased"
      },
      {
        "type": "uint256",
        "name": "balancePre"
      },
      {
        "type": "uint256",
        "name": "balancePost"
      }
    ]
  },
  {
    "name": "RootNotCommitted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenDataMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "sequenceNumber"
      }
    ]
  },
  {
    "name": "TokenHandlingError",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "err"
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
    "name": "UnauthorizedTransmitter",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnexpectedTokenData",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnsupportedNumberOfTokens",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "sequenceNumber"
      }
    ]
  },
  {
    "name": "WrongMessageLength",
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
    "name": "ZeroAddressNotAllowed",
    "type": "error",
    "inputs": []
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
    "name": "AlreadyAttempted",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "sequenceNumber"
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
            "name": "commitStore"
          },
          {
            "type": "uint64",
            "name": "chainSelector"
          },
          {
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "address",
            "name": "onRamp"
          },
          {
            "type": "address",
            "name": "prevOffRamp"
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
            "type": "uint32",
            "name": "permissionLessExecutionThresholdSeconds"
          },
          {
            "type": "uint32",
            "name": "maxDataBytes"
          },
          {
            "type": "uint16",
            "name": "maxNumberOfTokensPerMsg"
          },
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "address",
            "name": "priceRegistry"
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
        "type": "uint32",
        "name": "previousConfigBlockNumber"
      },
      {
        "type": "bytes32",
        "name": "configDigest"
      },
      {
        "type": "uint64",
        "name": "configCount"
      },
      {
        "type": "address[]",
        "name": "signers"
      },
      {
        "type": "address[]",
        "name": "transmitters"
      },
      {
        "type": "uint8",
        "name": "f"
      },
      {
        "type": "bytes",
        "name": "onchainConfig"
      },
      {
        "type": "uint64",
        "name": "offchainConfigVersion"
      },
      {
        "type": "bytes",
        "name": "offchainConfig"
      }
    ]
  },
  {
    "name": "ExecutionStateChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "sequenceNumber",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "messageId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "state"
      },
      {
        "type": "bytes",
        "name": "returnData"
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
    "name": "SkippedAlreadyExecutedMessage",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "sequenceNumber",
        "indexed": true
      }
    ]
  },
  {
    "name": "SkippedIncorrectNonce",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "nonce",
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
    "name": "SkippedSenderWithPreviousRampMessageInflight",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "nonce",
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
    "name": "TokenAggregateRateLimitAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sourceToken"
      },
      {
        "type": "address",
        "name": "destToken"
      }
    ]
  },
  {
    "name": "TokenAggregateRateLimitRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sourceToken"
      },
      {
        "type": "address",
        "name": "destToken"
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
    "name": "Transmitted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "configDigest"
      },
      {
        "type": "uint32",
        "name": "epoch"
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
    "name": "ccipReceive",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "bytes32",
            "name": "messageId"
          },
          {
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "bytes",
            "name": "sender"
          },
          {
            "type": "bytes",
            "name": "data"
          },
          {
            "type": "tuple[]",
            "name": "destTokenAmounts",
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
          }
        ]
      }
    ],
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
    "name": "executeSingleMessage",
    "type": "function",
    "stateMutability": "nonpayable",
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
      },
      {
        "type": "bytes[]",
        "name": "offchainTokenData"
      },
      {
        "type": "uint32[]",
        "name": "tokenGasOverrides"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAllRateLimitTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "sourceTokens"
      },
      {
        "type": "address[]",
        "name": "destTokens"
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
        "components": [
          {
            "type": "uint32",
            "name": "permissionLessExecutionThresholdSeconds"
          },
          {
            "type": "uint32",
            "name": "maxDataBytes"
          },
          {
            "type": "uint16",
            "name": "maxNumberOfTokensPerMsg"
          },
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "address",
            "name": "priceRegistry"
          }
        ]
      }
    ]
  },
  {
    "name": "getExecutionState",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "sequenceNumber"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
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
        "type": "uint64",
        "name": "nonce"
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
            "name": "commitStore"
          },
          {
            "type": "uint64",
            "name": "chainSelector"
          },
          {
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "address",
            "name": "onRamp"
          },
          {
            "type": "address",
            "name": "prevOffRamp"
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
    "name": "getTransmitters",
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
    "name": "latestConfigDetails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32",
        "name": "configCount"
      },
      {
        "type": "uint32",
        "name": "blockNumber"
      },
      {
        "type": "bytes32",
        "name": "configDigest"
      }
    ]
  },
  {
    "name": "latestConfigDigestAndEpoch",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "scanLogs"
      },
      {
        "type": "bytes32",
        "name": "configDigest"
      },
      {
        "type": "uint32",
        "name": "epoch"
      }
    ]
  },
  {
    "name": "manuallyExecute",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "report",
        "components": [
          {
            "type": "tuple[]",
            "name": "messages",
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
          },
          {
            "type": "bytes[][]",
            "name": "offchainTokenData"
          },
          {
            "type": "bytes32[]",
            "name": "proofs"
          },
          {
            "type": "uint256",
            "name": "proofFlagBits"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "gasLimitOverrides",
        "components": [
          {
            "type": "uint256",
            "name": "receiverExecutionGasLimit"
          },
          {
            "type": "uint32[]",
            "name": "tokenGasOverrides"
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
    "name": "setOCR2Config",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "signers"
      },
      {
        "type": "address[]",
        "name": "transmitters"
      },
      {
        "type": "uint8",
        "name": "f"
      },
      {
        "type": "bytes",
        "name": "onchainConfig"
      },
      {
        "type": "uint64",
        "name": "offchainConfigVersion"
      },
      {
        "type": "bytes",
        "name": "offchainConfig"
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
    "name": "transmit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[3]",
        "name": "reportContext"
      },
      {
        "type": "bytes",
        "name": "report"
      },
      {
        "type": "bytes32[]",
        "name": "rs"
      },
      {
        "type": "bytes32[]",
        "name": "ss"
      },
      {
        "type": "bytes32"
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
    "name": "updateRateLimitTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "removes",
        "components": [
          {
            "type": "address",
            "name": "sourceToken"
          },
          {
            "type": "address",
            "name": "destToken"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "adds",
        "components": [
          {
            "type": "address",
            "name": "sourceToken"
          },
          {
            "type": "address",
            "name": "destToken"
          }
        ]
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract