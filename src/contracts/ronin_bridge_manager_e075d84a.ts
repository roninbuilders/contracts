import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 977,
  address: '0x5fa49e6ca54a9daa8eca4f403adbde5ee075d84a' as const,
  contract_name: 'RoninBridgeManager',
  display_name: 'Ronin Bridge Manager',
  is_deprecated: true,
  is_proxy: false,
  proxy_to: false,
  created_at: 1697614133,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "num"
      },
      {
        "type": "uint256",
        "name": "denom"
      },
      {
        "type": "uint256",
        "name": "roninChainId"
      },
      {
        "type": "uint256",
        "name": "expiryDuration"
      },
      {
        "type": "address",
        "name": "bridgeContract"
      },
      {
        "type": "address[]",
        "name": "callbackRegisters"
      },
      {
        "type": "address[]",
        "name": "bridgeOperators"
      },
      {
        "type": "address[]",
        "name": "governors"
      },
      {
        "type": "uint96[]",
        "name": "voteWeights"
      },
      {
        "type": "uint8[]",
        "name": "targetOptions"
      },
      {
        "type": "address[]",
        "name": "targets"
      }
    ]
  },
  {
    "name": "ErrAlreadyVoted",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "voter"
      }
    ]
  },
  {
    "name": "ErrBridgeOperatorAlreadyExisted",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "bridgeOperator"
      }
    ]
  },
  {
    "name": "ErrBridgeOperatorUpdateFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "bridgeOperator"
      }
    ]
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
    "name": "ErrCurrentProposalIsNotCompleted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrDuplicated",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrInsufficientGas",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "proposalHash"
      }
    ]
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
    "name": "ErrInvalidChainId",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "uint256",
        "name": "actual"
      },
      {
        "type": "uint256",
        "name": "expected"
      }
    ]
  },
  {
    "name": "ErrInvalidExpiryTimestamp",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidOrder",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrInvalidProposal",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "actual"
      },
      {
        "type": "bytes32",
        "name": "expected"
      }
    ]
  },
  {
    "name": "ErrInvalidProposalNonce",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrInvalidSignatures",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
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
    "name": "ErrInvalidVoteWeight",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
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
    "name": "ErrOnlySelfCall",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrQueryForEmptyVote",
    "type": "error",
    "inputs": []
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
    "name": "ErrUnsupportedInterface",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId"
      },
      {
        "type": "address",
        "name": "addr"
      }
    ]
  },
  {
    "name": "ErrUnsupportedVoteType",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrVoteIsFinalized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrZeroAddress",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
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
    "name": "BridgeOperatorUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "governor",
        "indexed": true
      },
      {
        "type": "address",
        "name": "fromBridgeOperator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "toBridgeOperator",
        "indexed": true
      }
    ]
  },
  {
    "name": "BridgeOperatorsAdded",
    "type": "event",
    "inputs": [
      {
        "type": "bool[]",
        "name": "statuses"
      },
      {
        "type": "uint96[]",
        "name": "voteWeights"
      },
      {
        "type": "address[]",
        "name": "governors"
      },
      {
        "type": "address[]",
        "name": "bridgeOperators"
      }
    ]
  },
  {
    "name": "BridgeOperatorsRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "bool[]",
        "name": "statuses"
      },
      {
        "type": "address[]",
        "name": "bridgeOperators"
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
    "name": "GlobalProposalCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "round",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "proposalHash",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "proposal",
        "components": [
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "chainId"
          },
          {
            "type": "uint256",
            "name": "expiryTimestamp"
          },
          {
            "type": "address[]",
            "name": "targets"
          },
          {
            "type": "uint256[]",
            "name": "values"
          },
          {
            "type": "bytes[]",
            "name": "calldatas"
          },
          {
            "type": "uint256[]",
            "name": "gasAmounts"
          }
        ]
      },
      {
        "type": "bytes32",
        "name": "globalProposalHash"
      },
      {
        "type": "tuple",
        "name": "globalProposal",
        "components": [
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "expiryTimestamp"
          },
          {
            "type": "uint8[]",
            "name": "targetOptions"
          },
          {
            "type": "uint256[]",
            "name": "values"
          },
          {
            "type": "bytes[]",
            "name": "calldatas"
          },
          {
            "type": "uint256[]",
            "name": "gasAmounts"
          }
        ]
      },
      {
        "type": "address",
        "name": "creator"
      }
    ]
  },
  {
    "name": "Notified",
    "type": "event",
    "inputs": [
      {
        "type": "bytes",
        "name": "callData"
      },
      {
        "type": "address[]",
        "name": "registers"
      },
      {
        "type": "bool[]",
        "name": "statuses"
      },
      {
        "type": "bytes[]",
        "name": "returnDatas"
      }
    ]
  },
  {
    "name": "ProposalApproved",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "proposalHash",
        "indexed": true
      }
    ]
  },
  {
    "name": "ProposalCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "chainId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "round",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "proposalHash",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "proposal",
        "components": [
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "chainId"
          },
          {
            "type": "uint256",
            "name": "expiryTimestamp"
          },
          {
            "type": "address[]",
            "name": "targets"
          },
          {
            "type": "uint256[]",
            "name": "values"
          },
          {
            "type": "bytes[]",
            "name": "calldatas"
          },
          {
            "type": "uint256[]",
            "name": "gasAmounts"
          }
        ]
      },
      {
        "type": "address",
        "name": "creator"
      }
    ]
  },
  {
    "name": "ProposalExecuted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "proposalHash",
        "indexed": true
      },
      {
        "type": "bool[]",
        "name": "successCalls"
      },
      {
        "type": "bytes[]",
        "name": "returnDatas"
      }
    ]
  },
  {
    "name": "ProposalExpired",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "proposalHash",
        "indexed": true
      }
    ]
  },
  {
    "name": "ProposalExpiryDurationChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "duration",
        "indexed": true
      }
    ]
  },
  {
    "name": "ProposalRejected",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "proposalHash",
        "indexed": true
      }
    ]
  },
  {
    "name": "ProposalVoted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "proposalHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "voter",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "support"
      },
      {
        "type": "uint256",
        "name": "weight"
      }
    ]
  },
  {
    "name": "TargetOptionUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "targetOption",
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
    "name": "ThresholdUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "numerator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "denominator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "previousNumerator"
      },
      {
        "type": "uint256",
        "name": "previousDenominator"
      }
    ]
  },
  {
    "name": "DOMAIN_SEPARATOR",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "addBridgeOperators",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint96[]",
        "name": "voteWeights"
      },
      {
        "type": "address[]",
        "name": "governors"
      },
      {
        "type": "address[]",
        "name": "bridgeOperators"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "addeds"
      }
    ]
  },
  {
    "name": "castGlobalProposalBySignatures",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "globalProposal",
        "components": [
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "expiryTimestamp"
          },
          {
            "type": "uint8[]",
            "name": "targetOptions"
          },
          {
            "type": "uint256[]",
            "name": "values"
          },
          {
            "type": "bytes[]",
            "name": "calldatas"
          },
          {
            "type": "uint256[]",
            "name": "gasAmounts"
          }
        ]
      },
      {
        "type": "uint8[]",
        "name": "supports_"
      },
      {
        "type": "tuple[]",
        "name": "signatures",
        "components": [
          {
            "type": "uint8",
            "name": "v"
          },
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
  },
  {
    "name": "castProposalBySignatures",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "proposal",
        "components": [
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "chainId"
          },
          {
            "type": "uint256",
            "name": "expiryTimestamp"
          },
          {
            "type": "address[]",
            "name": "targets"
          },
          {
            "type": "uint256[]",
            "name": "values"
          },
          {
            "type": "bytes[]",
            "name": "calldatas"
          },
          {
            "type": "uint256[]",
            "name": "gasAmounts"
          }
        ]
      },
      {
        "type": "uint8[]",
        "name": "supports_"
      },
      {
        "type": "tuple[]",
        "name": "signatures",
        "components": [
          {
            "type": "uint8",
            "name": "v"
          },
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
  },
  {
    "name": "castProposalVoteForCurrentNetwork",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "proposal",
        "components": [
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "chainId"
          },
          {
            "type": "uint256",
            "name": "expiryTimestamp"
          },
          {
            "type": "address[]",
            "name": "targets"
          },
          {
            "type": "uint256[]",
            "name": "values"
          },
          {
            "type": "bytes[]",
            "name": "calldatas"
          },
          {
            "type": "uint256[]",
            "name": "gasAmounts"
          }
        ]
      },
      {
        "type": "uint8",
        "name": "support"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_voteWeight"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "deleteExpired",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_chainId"
      },
      {
        "type": "uint256",
        "name": "_round"
      }
    ],
    "outputs": []
  },
  {
    "name": "getBridgeOperatorOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "governors"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "bridgeOperators"
      }
    ]
  },
  {
    "name": "getBridgeOperatorWeight",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "bridgeOperator"
      }
    ],
    "outputs": [
      {
        "type": "uint96",
        "name": "weight"
      }
    ]
  },
  {
    "name": "getBridgeOperators",
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
    "name": "getCallbackRegisters",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "registers"
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
    "name": "getFullBridgeOperatorInfos",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "governors"
      },
      {
        "type": "address[]",
        "name": "bridgeOperators"
      },
      {
        "type": "uint96[]",
        "name": "weights"
      }
    ]
  },
  {
    "name": "getGlobalProposalSignatures",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "round_"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "voters"
      },
      {
        "type": "uint8[]",
        "name": "supports_"
      },
      {
        "type": "tuple[]",
        "name": "signatures",
        "components": [
          {
            "type": "uint8",
            "name": "v"
          },
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
    ]
  },
  {
    "name": "getGovernorWeight",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "governor"
      }
    ],
    "outputs": [
      {
        "type": "uint96",
        "name": "weight"
      }
    ]
  },
  {
    "name": "getGovernorWeights",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "governors"
      }
    ],
    "outputs": [
      {
        "type": "uint96[]",
        "name": "weights"
      }
    ]
  },
  {
    "name": "getGovernors",
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
    "name": "getGovernorsOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "bridgeOperators"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "governors"
      }
    ]
  },
  {
    "name": "getProposalExpiryDuration",
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
    "name": "getProposalSignatures",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_chainId"
      },
      {
        "type": "uint256",
        "name": "_round"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "_voters"
      },
      {
        "type": "uint8[]",
        "name": "_supports"
      },
      {
        "type": "tuple[]",
        "name": "_signatures",
        "components": [
          {
            "type": "uint8",
            "name": "v"
          },
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
    ]
  },
  {
    "name": "getThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "num_"
      },
      {
        "type": "uint256",
        "name": "denom_"
      }
    ]
  },
  {
    "name": "getTotalWeight",
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
    "name": "globalProposalVoted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "round_"
      },
      {
        "type": "address",
        "name": "voter"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isBridgeOperator",
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
    "name": "minimumVoteWeight",
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
    "name": "proposalVoted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_chainId"
      },
      {
        "type": "uint256",
        "name": "_round"
      },
      {
        "type": "address",
        "name": "_voter"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "propose",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_chainId"
      },
      {
        "type": "uint256",
        "name": "_expiryTimestamp"
      },
      {
        "type": "address[]",
        "name": "_targets"
      },
      {
        "type": "uint256[]",
        "name": "_values"
      },
      {
        "type": "bytes[]",
        "name": "_calldatas"
      },
      {
        "type": "uint256[]",
        "name": "_gasAmounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "proposeGlobal",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "expiryTimestamp"
      },
      {
        "type": "uint8[]",
        "name": "targetOptions"
      },
      {
        "type": "uint256[]",
        "name": "values"
      },
      {
        "type": "bytes[]",
        "name": "calldatas"
      },
      {
        "type": "uint256[]",
        "name": "gasAmounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "proposeGlobalProposalStructAndCastVotes",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "globalProposal",
        "components": [
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "expiryTimestamp"
          },
          {
            "type": "uint8[]",
            "name": "targetOptions"
          },
          {
            "type": "uint256[]",
            "name": "values"
          },
          {
            "type": "bytes[]",
            "name": "calldatas"
          },
          {
            "type": "uint256[]",
            "name": "gasAmounts"
          }
        ]
      },
      {
        "type": "uint8[]",
        "name": "supports_"
      },
      {
        "type": "tuple[]",
        "name": "signatures",
        "components": [
          {
            "type": "uint8",
            "name": "v"
          },
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
  },
  {
    "name": "proposeProposalForCurrentNetwork",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "expiryTimestamp"
      },
      {
        "type": "address[]",
        "name": "targets"
      },
      {
        "type": "uint256[]",
        "name": "values"
      },
      {
        "type": "bytes[]",
        "name": "calldatas"
      },
      {
        "type": "uint256[]",
        "name": "gasAmounts"
      },
      {
        "type": "uint8",
        "name": "support"
      }
    ],
    "outputs": []
  },
  {
    "name": "proposeProposalStructAndCastVotes",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_proposal",
        "components": [
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "chainId"
          },
          {
            "type": "uint256",
            "name": "expiryTimestamp"
          },
          {
            "type": "address[]",
            "name": "targets"
          },
          {
            "type": "uint256[]",
            "name": "values"
          },
          {
            "type": "bytes[]",
            "name": "calldatas"
          },
          {
            "type": "uint256[]",
            "name": "gasAmounts"
          }
        ]
      },
      {
        "type": "uint8[]",
        "name": "_supports"
      },
      {
        "type": "tuple[]",
        "name": "_signatures",
        "components": [
          {
            "type": "uint8",
            "name": "v"
          },
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
  },
  {
    "name": "registerCallbacks",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "registers"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "registereds"
      }
    ]
  },
  {
    "name": "removeBridgeOperators",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "bridgeOperators"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "removeds"
      }
    ]
  },
  {
    "name": "resolveTargets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8[]",
        "name": "targetOptions"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "targets"
      }
    ]
  },
  {
    "name": "round",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "setThreshold",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "numerator"
      },
      {
        "type": "uint256",
        "name": "denominator"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "sumGovernorsWeight",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "governors"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "sum"
      }
    ]
  },
  {
    "name": "totalBridgeOperator",
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
    "name": "unregisterCallbacks",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "registers"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "unregistereds"
      }
    ]
  },
  {
    "name": "updateBridgeOperator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newBridgeOperator"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateManyTargetOption",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8[]",
        "name": "targetOptions"
      },
      {
        "type": "address[]",
        "name": "targets"
      }
    ],
    "outputs": []
  },
  {
    "name": "vote",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "status"
      },
      {
        "type": "bytes32",
        "name": "hash"
      },
      {
        "type": "uint256",
        "name": "againstVoteWeight"
      },
      {
        "type": "uint256",
        "name": "forVoteWeight"
      },
      {
        "type": "uint256",
        "name": "expiryTimestamp"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract