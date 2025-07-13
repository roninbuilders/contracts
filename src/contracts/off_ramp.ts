import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35940,
  address: '0x77fdbd20ed582794b1d9f1a8a94e4a60494d677e' as const,
  contract_name: 'OffRamp',
  display_name: 'Off Ramp',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751314706,
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
            "type": "uint64",
            "name": "chainSelector"
          },
          {
            "type": "uint16",
            "name": "gasForCallExactCheck"
          },
          {
            "type": "address",
            "name": "rmnRemote"
          },
          {
            "type": "address",
            "name": "tokenAdminRegistry"
          },
          {
            "type": "address",
            "name": "nonceManager"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "dynamicConfig",
        "components": [
          {
            "type": "address",
            "name": "feeQuoter"
          },
          {
            "type": "uint32",
            "name": "permissionLessExecutionThresholdSeconds"
          },
          {
            "type": "address",
            "name": "messageInterceptor"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "sourceChainConfigs",
        "components": [
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "bool",
            "name": "isRMNVerificationDisabled"
          },
          {
            "type": "bytes",
            "name": "onRamp"
          }
        ]
      }
    ]
  },
  {
    "name": "CanOnlySelfCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CannotTransferToSelf",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CommitOnRampMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "reportOnRamp"
      },
      {
        "type": "bytes",
        "name": "configOnRamp"
      }
    ]
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
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      }
    ]
  },
  {
    "name": "EmptyBatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EmptyReport",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      }
    ]
  },
  {
    "name": "ExecutionError",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "messageId"
      },
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
    "name": "InsufficientGasToCompleteTx",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "err"
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
    "name": "InvalidInterval",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      },
      {
        "type": "uint64",
        "name": "min"
      },
      {
        "type": "uint64",
        "name": "max"
      }
    ]
  },
  {
    "name": "InvalidManualExecutionGasLimit",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      },
      {
        "type": "bytes32",
        "name": "messageId"
      },
      {
        "type": "uint256",
        "name": "newLimit"
      }
    ]
  },
  {
    "name": "InvalidManualExecutionTokenGasOverride",
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
    "name": "InvalidMessageDestChainSelector",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "messageDestChainSelector"
      }
    ]
  },
  {
    "name": "InvalidNewState",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      },
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
    "name": "InvalidOnRampUpdate",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      }
    ]
  },
  {
    "name": "InvalidProof",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRoot",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LeavesCannotBeEmpty",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ManualExecutionGasAmountCountMismatch",
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
    "name": "ManualExecutionGasLimitMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ManualExecutionNotYetEnabled",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      }
    ]
  },
  {
    "name": "MessageValidationError",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "errorReason"
      }
    ]
  },
  {
    "name": "MustBeProposedOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NonUniqueSignatures",
    "type": "error",
    "inputs": []
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
    "name": "OnlyCallableByOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OracleCannotBeZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnerCannotBeZero",
    "type": "error",
    "inputs": []
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
    "name": "RootAlreadyCommitted",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      },
      {
        "type": "bytes32",
        "name": "merkleRoot"
      }
    ]
  },
  {
    "name": "RootBlessingMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      },
      {
        "type": "bytes32",
        "name": "merkleRoot"
      },
      {
        "type": "bool",
        "name": "isBlessed"
      }
    ]
  },
  {
    "name": "RootNotCommitted",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      }
    ]
  },
  {
    "name": "SignatureVerificationNotAllowedInExecutionPlugin",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignatureVerificationRequiredInCommitPlugin",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignaturesOutOfRegistration",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SourceChainNotEnabled",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      }
    ]
  },
  {
    "name": "SourceChainSelectorMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "reportSourceChainSelector"
      },
      {
        "type": "uint64",
        "name": "messageSourceChainSelector"
      }
    ]
  },
  {
    "name": "StaleCommitReport",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StaticConfigCannotBeChanged",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "ocrPluginType"
      }
    ]
  },
  {
    "name": "TokenDataMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      },
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
        "type": "address",
        "name": "target"
      },
      {
        "type": "bytes",
        "name": "err"
      }
    ]
  },
  {
    "name": "UnauthorizedSigner",
    "type": "error",
    "inputs": []
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
    "name": "WrongNumberOfSignatures",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroAddressNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroChainSelectorNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AlreadyAttempted",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      },
      {
        "type": "uint64",
        "name": "sequenceNumber"
      }
    ]
  },
  {
    "name": "CommitReportAccepted",
    "type": "event",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "blessedMerkleRoots",
        "components": [
          {
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "bytes",
            "name": "onRampAddress"
          },
          {
            "type": "uint64",
            "name": "minSeqNr"
          },
          {
            "type": "uint64",
            "name": "maxSeqNr"
          },
          {
            "type": "bytes32",
            "name": "merkleRoot"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "unblessedMerkleRoots",
        "components": [
          {
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "bytes",
            "name": "onRampAddress"
          },
          {
            "type": "uint64",
            "name": "minSeqNr"
          },
          {
            "type": "uint64",
            "name": "maxSeqNr"
          },
          {
            "type": "bytes32",
            "name": "merkleRoot"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "priceUpdates",
        "components": [
          {
            "type": "tuple[]",
            "name": "tokenPriceUpdates",
            "components": [
              {
                "type": "address",
                "name": "sourceToken"
              },
              {
                "type": "uint224",
                "name": "usdPerToken"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "gasPriceUpdates",
            "components": [
              {
                "type": "uint64",
                "name": "destChainSelector"
              },
              {
                "type": "uint224",
                "name": "usdPerUnitGas"
              }
            ]
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
        "type": "uint8",
        "name": "ocrPluginType"
      },
      {
        "type": "bytes32",
        "name": "configDigest"
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
        "name": "F"
      }
    ]
  },
  {
    "name": "DynamicConfigSet",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "dynamicConfig",
        "components": [
          {
            "type": "address",
            "name": "feeQuoter"
          },
          {
            "type": "uint32",
            "name": "permissionLessExecutionThresholdSeconds"
          },
          {
            "type": "address",
            "name": "messageInterceptor"
          }
        ]
      }
    ]
  },
  {
    "name": "ExecutionStateChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector",
        "indexed": true
      },
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
        "type": "bytes32",
        "name": "messageHash"
      },
      {
        "type": "uint8",
        "name": "state"
      },
      {
        "type": "bytes",
        "name": "returnData"
      },
      {
        "type": "uint256",
        "name": "gasUsed"
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
    "name": "RootRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "root"
      }
    ]
  },
  {
    "name": "SkippedAlreadyExecutedMessage",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      },
      {
        "type": "uint64",
        "name": "sequenceNumber"
      }
    ]
  },
  {
    "name": "SkippedReportExecution",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      }
    ]
  },
  {
    "name": "SourceChainConfigSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "sourceConfig",
        "components": [
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint64",
            "name": "minSeqNr"
          },
          {
            "type": "bool",
            "name": "isRMNVerificationDisabled"
          },
          {
            "type": "bytes",
            "name": "onRamp"
          }
        ]
      }
    ]
  },
  {
    "name": "SourceChainSelectorAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      }
    ]
  },
  {
    "name": "StaticConfigSet",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "staticConfig",
        "components": [
          {
            "type": "uint64",
            "name": "chainSelector"
          },
          {
            "type": "uint16",
            "name": "gasForCallExactCheck"
          },
          {
            "type": "address",
            "name": "rmnRemote"
          },
          {
            "type": "address",
            "name": "tokenAdminRegistry"
          },
          {
            "type": "address",
            "name": "nonceManager"
          }
        ]
      }
    ]
  },
  {
    "name": "Transmitted",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "ocrPluginType",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "configDigest"
      },
      {
        "type": "uint64",
        "name": "sequenceNumber"
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
    "name": "applySourceChainConfigUpdates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "sourceChainConfigUpdates",
        "components": [
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "bool",
            "name": "isRMNVerificationDisabled"
          },
          {
            "type": "bytes",
            "name": "onRamp"
          }
        ]
      }
    ],
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
    "name": "commit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[2]",
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
        "type": "bytes32",
        "name": "rawVs"
      }
    ],
    "outputs": []
  },
  {
    "name": "execute",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[2]",
        "name": "reportContext"
      },
      {
        "type": "bytes",
        "name": "report"
      }
    ],
    "outputs": []
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
            "type": "tuple",
            "name": "header",
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
                "type": "uint64",
                "name": "destChainSelector"
              },
              {
                "type": "uint64",
                "name": "sequenceNumber"
              },
              {
                "type": "uint64",
                "name": "nonce"
              }
            ]
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
            "type": "address",
            "name": "receiver"
          },
          {
            "type": "uint256",
            "name": "gasLimit"
          },
          {
            "type": "tuple[]",
            "name": "tokenAmounts",
            "components": [
              {
                "type": "bytes",
                "name": "sourcePoolAddress"
              },
              {
                "type": "address",
                "name": "destTokenAddress"
              },
              {
                "type": "uint32",
                "name": "destGasAmount"
              },
              {
                "type": "bytes",
                "name": "extraData"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
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
    "name": "getAllSourceChainConfigs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64[]"
      },
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint64",
            "name": "minSeqNr"
          },
          {
            "type": "bool",
            "name": "isRMNVerificationDisabled"
          },
          {
            "type": "bytes",
            "name": "onRamp"
          }
        ]
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
            "type": "address",
            "name": "feeQuoter"
          },
          {
            "type": "uint32",
            "name": "permissionLessExecutionThresholdSeconds"
          },
          {
            "type": "address",
            "name": "messageInterceptor"
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
        "name": "sourceChainSelector"
      },
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
    "name": "getLatestPriceSequenceNumber",
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
    "name": "getMerkleRoot",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      },
      {
        "type": "bytes32",
        "name": "root"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getSourceChainConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint64",
            "name": "minSeqNr"
          },
          {
            "type": "bool",
            "name": "isRMNVerificationDisabled"
          },
          {
            "type": "bytes",
            "name": "onRamp"
          }
        ]
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
            "type": "uint64",
            "name": "chainSelector"
          },
          {
            "type": "uint16",
            "name": "gasForCallExactCheck"
          },
          {
            "type": "address",
            "name": "rmnRemote"
          },
          {
            "type": "address",
            "name": "tokenAdminRegistry"
          },
          {
            "type": "address",
            "name": "nonceManager"
          }
        ]
      }
    ]
  },
  {
    "name": "latestConfigDetails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "ocrPluginType"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "ocrConfig",
        "components": [
          {
            "type": "tuple",
            "name": "configInfo",
            "components": [
              {
                "type": "bytes32",
                "name": "configDigest"
              },
              {
                "type": "uint8",
                "name": "F"
              },
              {
                "type": "uint8",
                "name": "n"
              },
              {
                "type": "bool",
                "name": "isSignatureVerificationEnabled"
              }
            ]
          },
          {
            "type": "address[]",
            "name": "signers"
          },
          {
            "type": "address[]",
            "name": "transmitters"
          }
        ]
      }
    ]
  },
  {
    "name": "manuallyExecute",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "reports",
        "components": [
          {
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "tuple[]",
            "name": "messages",
            "components": [
              {
                "type": "tuple",
                "name": "header",
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
                    "type": "uint64",
                    "name": "destChainSelector"
                  },
                  {
                    "type": "uint64",
                    "name": "sequenceNumber"
                  },
                  {
                    "type": "uint64",
                    "name": "nonce"
                  }
                ]
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
                "type": "address",
                "name": "receiver"
              },
              {
                "type": "uint256",
                "name": "gasLimit"
              },
              {
                "type": "tuple[]",
                "name": "tokenAmounts",
                "components": [
                  {
                    "type": "bytes",
                    "name": "sourcePoolAddress"
                  },
                  {
                    "type": "address",
                    "name": "destTokenAddress"
                  },
                  {
                    "type": "uint32",
                    "name": "destGasAmount"
                  },
                  {
                    "type": "bytes",
                    "name": "extraData"
                  },
                  {
                    "type": "uint256",
                    "name": "amount"
                  }
                ]
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
        "type": "tuple[][]",
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
            "name": "feeQuoter"
          },
          {
            "type": "uint32",
            "name": "permissionLessExecutionThresholdSeconds"
          },
          {
            "type": "address",
            "name": "messageInterceptor"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setOCR3Configs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "ocrConfigArgs",
        "components": [
          {
            "type": "bytes32",
            "name": "configDigest"
          },
          {
            "type": "uint8",
            "name": "ocrPluginType"
          },
          {
            "type": "uint8",
            "name": "F"
          },
          {
            "type": "bool",
            "name": "isSignatureVerificationEnabled"
          },
          {
            "type": "address[]",
            "name": "signers"
          },
          {
            "type": "address[]",
            "name": "transmitters"
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
    "name": "typeAndVersion",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract