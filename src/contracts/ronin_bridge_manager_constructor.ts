import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3487,
  address: '0x89f25ef52e46e583ead6c5e1acd2471ed499c8c7' as const,
  contract_name: 'RoninBridgeManagerConstructor',
  display_name: 'Ronin Bridge Manager Constructor',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1722328225,
  abi: [
  {
    "name": "ErrBelowMinRequiredGovernors",
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
    "name": "ErrExistOneInternalCallFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      },
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "bytes",
        "name": "callData"
      }
    ]
  },
  {
    "name": "ErrGovernorNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "governor"
      }
    ]
  },
  {
    "name": "ErrGovernorNotMatch",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "required"
      },
      {
        "type": "address",
        "name": "sender"
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
    "name": "ErrInvalidInput",
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
    "name": "ErrOperatorNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
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
    "name": "BridgeOperatorAddingFailed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      }
    ]
  },
  {
    "name": "BridgeOperatorRemovingFailed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
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
    "name": "CallbackRegistered",
    "type": "event",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "bool"
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
            "type": "address",
            "name": "executor"
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
            "type": "address",
            "name": "executor"
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
    "name": "MinRequiredGovernorUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "min"
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
            "type": "address",
            "name": "executor"
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
    "outputs": []
  },
  {
    "name": "checkThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "voteWeight"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
    "name": "getGovernorOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "governor"
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
    "name": "getOperatorOf",
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
        "type": "address",
        "name": "operator"
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
        "name": "num"
      },
      {
        "type": "uint256",
        "name": "denom"
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
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
    ],
    "outputs": []
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
    "name": "registerCallbacks",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "registers"
      }
    ],
    "outputs": []
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
    "outputs": []
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
    "name": "setMinRequiredGovernor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "min"
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
        "name": "num"
      },
      {
        "type": "uint256",
        "name": "denom"
      }
    ],
    "outputs": []
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