import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35938,
  address: '0x345cc465bcb9a902b420320b8793c9a5d6064404' as const,
  contract_name: 'RMNRemote',
  display_name: 'RMN Remote',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751314667,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64",
        "name": "localChainSelector"
      },
      {
        "type": "address",
        "name": "legacyRMN"
      }
    ]
  },
  {
    "name": "AlreadyCursed",
    "type": "error",
    "inputs": [
      {
        "type": "bytes16",
        "name": "subject"
      }
    ]
  },
  {
    "name": "CannotTransferToSelf",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ConfigNotSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DuplicateOnchainPublicKey",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignerOrder",
    "type": "error",
    "inputs": []
  },
  {
    "name": "IsBlessedNotAvailable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MustBeProposedOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotCursed",
    "type": "error",
    "inputs": [
      {
        "type": "bytes16",
        "name": "subject"
      }
    ]
  },
  {
    "name": "NotEnoughSigners",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCallableByOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OutOfOrderSignatures",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnerCannotBeZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ThresholdNotMet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnexpectedSigner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroValueNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ConfigSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "version",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "bytes32",
            "name": "rmnHomeContractConfigDigest"
          },
          {
            "type": "tuple[]",
            "name": "signers",
            "components": [
              {
                "type": "address",
                "name": "onchainPublicKey"
              },
              {
                "type": "uint64",
                "name": "nodeIndex"
              }
            ]
          },
          {
            "type": "uint64",
            "name": "fSign"
          }
        ]
      }
    ]
  },
  {
    "name": "Cursed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes16[]",
        "name": "subjects"
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
    "name": "Uncursed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes16[]",
        "name": "subjects"
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
    "name": "curse",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes16",
        "name": "subject"
      }
    ],
    "outputs": []
  },
  {
    "name": "curse",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes16[]",
        "name": "subjects"
      }
    ],
    "outputs": []
  },
  {
    "name": "getCursedSubjects",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes16[]",
        "name": "subjects"
      }
    ]
  },
  {
    "name": "getLocalChainSelector",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64",
        "name": "localChainSelector"
      }
    ]
  },
  {
    "name": "getReportDigestHeader",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32",
        "name": "digestHeader"
      }
    ]
  },
  {
    "name": "getVersionedConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32",
        "name": "version"
      },
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "bytes32",
            "name": "rmnHomeContractConfigDigest"
          },
          {
            "type": "tuple[]",
            "name": "signers",
            "components": [
              {
                "type": "address",
                "name": "onchainPublicKey"
              },
              {
                "type": "uint64",
                "name": "nodeIndex"
              }
            ]
          },
          {
            "type": "uint64",
            "name": "fSign"
          }
        ]
      }
    ]
  },
  {
    "name": "isBlessed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "taggedRoot",
        "components": [
          {
            "type": "address",
            "name": "commitStore"
          },
          {
            "type": "bytes32",
            "name": "root"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isCursed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes16",
        "name": "subject"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isCursed",
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
    "name": "setConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "newConfig",
        "components": [
          {
            "type": "bytes32",
            "name": "rmnHomeContractConfigDigest"
          },
          {
            "type": "tuple[]",
            "name": "signers",
            "components": [
              {
                "type": "address",
                "name": "onchainPublicKey"
              },
              {
                "type": "uint64",
                "name": "nodeIndex"
              }
            ]
          },
          {
            "type": "uint64",
            "name": "fSign"
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
  },
  {
    "name": "uncurse",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes16",
        "name": "subject"
      }
    ],
    "outputs": []
  },
  {
    "name": "uncurse",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes16[]",
        "name": "subjects"
      }
    ],
    "outputs": []
  },
  {
    "name": "verify",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "offRampAddress"
      },
      {
        "type": "tuple[]",
        "name": "merkleRoots",
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
        "name": "signatures",
        "components": [
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract