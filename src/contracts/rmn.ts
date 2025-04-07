import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4960,
  address: '0x01f8ac0f88bfd2cf6ba756d64a51ed295b7632a7' as const,
  contract_name: 'RMN',
  display_name: 'RMN',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1730294292,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "tuple[]",
            "name": "voters",
            "components": [
              {
                "type": "address",
                "name": "blessVoteAddr"
              },
              {
                "type": "address",
                "name": "curseVoteAddr"
              },
              {
                "type": "uint8",
                "name": "blessWeight"
              },
              {
                "type": "uint8",
                "name": "curseWeight"
              }
            ]
          },
          {
            "type": "uint16",
            "name": "blessWeightThreshold"
          },
          {
            "type": "uint16",
            "name": "curseWeightThreshold"
          }
        ]
      }
    ]
  },
  {
    "name": "InvalidConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReusedCurseId",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "voter"
      },
      {
        "type": "bytes16",
        "name": "curseId"
      }
    ]
  },
  {
    "name": "SubjectsMustBeStrictlyIncreasing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnauthorizedVoter",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "voter"
      }
    ]
  },
  {
    "name": "UnvoteToCurseNoop",
    "type": "error",
    "inputs": []
  },
  {
    "name": "VoteToBlessForbiddenDuringActiveGlobalCurse",
    "type": "error",
    "inputs": []
  },
  {
    "name": "VoteToBlessNoop",
    "type": "error",
    "inputs": []
  },
  {
    "name": "VoteToCurseNoop",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AlreadyBlessed",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "configVersion",
        "indexed": true
      },
      {
        "type": "address",
        "name": "voter",
        "indexed": true
      },
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
    ]
  },
  {
    "name": "AlreadyVotedToBless",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "configVersion",
        "indexed": true
      },
      {
        "type": "address",
        "name": "voter",
        "indexed": true
      },
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
    ]
  },
  {
    "name": "ConfigSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "configVersion",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "tuple[]",
            "name": "voters",
            "components": [
              {
                "type": "address",
                "name": "blessVoteAddr"
              },
              {
                "type": "address",
                "name": "curseVoteAddr"
              },
              {
                "type": "uint8",
                "name": "blessWeight"
              },
              {
                "type": "uint8",
                "name": "curseWeight"
              }
            ]
          },
          {
            "type": "uint16",
            "name": "blessWeightThreshold"
          },
          {
            "type": "uint16",
            "name": "curseWeightThreshold"
          }
        ]
      }
    ]
  },
  {
    "name": "CurseLifted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes16",
        "name": "subject"
      }
    ]
  },
  {
    "name": "Cursed",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "configVersion",
        "indexed": true
      },
      {
        "type": "bytes16",
        "name": "subject"
      },
      {
        "type": "uint64",
        "name": "blockTimestamp"
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
    "name": "PermaBlessedCommitStoreAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "commitStore"
      }
    ]
  },
  {
    "name": "PermaBlessedCommitStoreRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "commitStore"
      }
    ]
  },
  {
    "name": "SkippedUnvoteToCurse",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "voter",
        "indexed": true
      },
      {
        "type": "bytes16",
        "name": "subject"
      },
      {
        "type": "bytes28",
        "name": "onchainCursesHash"
      },
      {
        "type": "bytes28",
        "name": "cursesHash"
      }
    ]
  },
  {
    "name": "TaggedRootBlessVotesReset",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "configVersion",
        "indexed": true
      },
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
      },
      {
        "type": "bool",
        "name": "wasBlessed"
      }
    ]
  },
  {
    "name": "TaggedRootBlessed",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "configVersion",
        "indexed": true
      },
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
      },
      {
        "type": "uint16",
        "name": "accumulatedWeight"
      }
    ]
  },
  {
    "name": "UnvotedToCurse",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "configVersion",
        "indexed": true
      },
      {
        "type": "address",
        "name": "voter",
        "indexed": true
      },
      {
        "type": "bytes16",
        "name": "subject"
      },
      {
        "type": "uint8",
        "name": "weight"
      },
      {
        "type": "bytes28",
        "name": "cursesHash"
      },
      {
        "type": "uint16",
        "name": "remainingAccumulatedWeight"
      }
    ]
  },
  {
    "name": "VotedToBless",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "configVersion",
        "indexed": true
      },
      {
        "type": "address",
        "name": "voter",
        "indexed": true
      },
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
      },
      {
        "type": "uint8",
        "name": "weight"
      }
    ]
  },
  {
    "name": "VotedToCurse",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "configVersion",
        "indexed": true
      },
      {
        "type": "address",
        "name": "voter",
        "indexed": true
      },
      {
        "type": "bytes16",
        "name": "subject"
      },
      {
        "type": "bytes16",
        "name": "curseId"
      },
      {
        "type": "uint8",
        "name": "weight"
      },
      {
        "type": "uint64",
        "name": "blockTimestamp"
      },
      {
        "type": "bytes28",
        "name": "cursesHash"
      },
      {
        "type": "uint16",
        "name": "accumulatedWeight"
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
    "name": "getBlessProgress",
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
        "type": "address[]",
        "name": "blessVoteAddrs"
      },
      {
        "type": "uint16",
        "name": "accumulatedWeight"
      },
      {
        "type": "bool",
        "name": "blessed"
      }
    ]
  },
  {
    "name": "getConfigDetails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32",
        "name": "version"
      },
      {
        "type": "uint32",
        "name": "blockNumber"
      },
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "tuple[]",
            "name": "voters",
            "components": [
              {
                "type": "address",
                "name": "blessVoteAddr"
              },
              {
                "type": "address",
                "name": "curseVoteAddr"
              },
              {
                "type": "uint8",
                "name": "blessWeight"
              },
              {
                "type": "uint8",
                "name": "curseWeight"
              }
            ]
          },
          {
            "type": "uint16",
            "name": "blessWeightThreshold"
          },
          {
            "type": "uint16",
            "name": "curseWeightThreshold"
          }
        ]
      }
    ]
  },
  {
    "name": "getCurseProgress",
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
        "type": "address[]",
        "name": "curseVoteAddrs"
      },
      {
        "type": "bytes28[]",
        "name": "cursesHashes"
      },
      {
        "type": "uint16",
        "name": "accumulatedWeight"
      },
      {
        "type": "bool",
        "name": "cursed"
      }
    ]
  },
  {
    "name": "getCursedSubjectsCount",
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
    "name": "getPermaBlessedCommitStores",
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
    "name": "getRecordedCurseRelatedOps",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "offset"
      },
      {
        "type": "uint256",
        "name": "limit"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint8",
            "name": "tag"
          },
          {
            "type": "uint64",
            "name": "blockTimestamp"
          },
          {
            "type": "bool",
            "name": "cursed"
          },
          {
            "type": "address",
            "name": "curseVoteAddr"
          },
          {
            "type": "bytes16",
            "name": "subject"
          },
          {
            "type": "bytes16",
            "name": "curseId"
          }
        ]
      }
    ]
  },
  {
    "name": "getRecordedCurseRelatedOpsCount",
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
    "name": "ownerCurse",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes16",
        "name": "curseId"
      },
      {
        "type": "bytes16[]",
        "name": "subjects"
      }
    ],
    "outputs": []
  },
  {
    "name": "ownerRemoveThenAddPermaBlessedCommitStores",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "removes"
      },
      {
        "type": "address[]",
        "name": "adds"
      }
    ],
    "outputs": []
  },
  {
    "name": "ownerResetBlessVotes",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "taggedRoots",
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
    "outputs": []
  },
  {
    "name": "ownerUnvoteToCurse",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "ownerUnvoteToCurseRequests",
        "components": [
          {
            "type": "address",
            "name": "curseVoteAddr"
          },
          {
            "type": "tuple",
            "name": "unit",
            "components": [
              {
                "type": "bytes16",
                "name": "subject"
              },
              {
                "type": "bytes28",
                "name": "cursesHash"
              }
            ]
          },
          {
            "type": "bool",
            "name": "forceUnvote"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "tuple[]",
            "name": "voters",
            "components": [
              {
                "type": "address",
                "name": "blessVoteAddr"
              },
              {
                "type": "address",
                "name": "curseVoteAddr"
              },
              {
                "type": "uint8",
                "name": "blessWeight"
              },
              {
                "type": "uint8",
                "name": "curseWeight"
              }
            ]
          },
          {
            "type": "uint16",
            "name": "blessWeightThreshold"
          },
          {
            "type": "uint16",
            "name": "curseWeightThreshold"
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
    "name": "unvoteToCurse",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "unvoteToCurseRequests",
        "components": [
          {
            "type": "bytes16",
            "name": "subject"
          },
          {
            "type": "bytes28",
            "name": "cursesHash"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "voteToBless",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "taggedRoots",
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
    "outputs": []
  },
  {
    "name": "voteToCurse",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes16",
        "name": "curseId"
      },
      {
        "type": "bytes16[]",
        "name": "subjects"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract