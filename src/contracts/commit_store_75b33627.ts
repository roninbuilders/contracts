import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4959,
  address: '0xd154a8ce39b93098f3c55ffd94418def75b33627' as const,
  contract_name: 'CommitStore',
  display_name: 'Commit Store',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1730713041,
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
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "address",
            "name": "onRamp"
          },
          {
            "type": "address",
            "name": "rmnProxy"
          }
        ]
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
    "inputs": []
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
    "name": "InvalidCommitStoreConfig",
    "type": "error",
    "inputs": []
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
    "name": "InvalidInterval",
    "type": "error",
    "inputs": [
      {
        "type": "tuple",
        "name": "interval",
        "components": [
          {
            "type": "uint64",
            "name": "min"
          },
          {
            "type": "uint64",
            "name": "max"
          }
        ]
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
    "name": "NonUniqueSignatures",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OracleCannotBeZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PausedError",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RootAlreadyCommitted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignaturesOutOfRegistration",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StaleReport",
    "type": "error",
    "inputs": []
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
    "name": "ConfigSet",
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
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "address",
            "name": "onRamp"
          },
          {
            "type": "address",
            "name": "rmnProxy"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "dynamicConfig",
        "components": [
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
    "name": "LatestPriceEpochAndRoundSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint40",
        "name": "oldEpochAndRound"
      },
      {
        "type": "uint40",
        "name": "newEpochAndRound"
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
    "name": "ReportAccepted",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "report",
        "components": [
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
          },
          {
            "type": "tuple",
            "name": "interval",
            "components": [
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
            "type": "bytes32",
            "name": "merkleRoot"
          }
        ]
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
    "name": "SequenceNumberSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "oldSeqNum"
      },
      {
        "type": "uint64",
        "name": "newSeqNum"
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
            "name": "priceRegistry"
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
    "name": "getLatestPriceEpochAndRound",
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
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "address",
            "name": "onRamp"
          },
          {
            "type": "address",
            "name": "rmnProxy"
          }
        ]
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
    "name": "isBlessed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "root"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isUnpausedAndNotCursed",
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
    "name": "resetUnblessedRoots",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "rootToReset"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLatestPriceEpochAndRound",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint40",
        "name": "latestPriceEpochAndRound"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinSeqNr",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64",
        "name": "minSeqNr"
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
        "type": "bytes32",
        "name": "rawVs"
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "verify",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "hashedLeaves"
      },
      {
        "type": "bytes32[]",
        "name": "proofs"
      },
      {
        "type": "uint256",
        "name": "proofFlagBits"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract