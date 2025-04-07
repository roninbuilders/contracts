import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3486,
  address: '0x2ae89936fc398aea23c63db2404018fe361a8628' as const,
  contract_name: 'TransparentProxyV2',
  display_name: 'Ronin Bridge Manager Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xace8be70b25ac65b7c2ccd15ee3c5e8b2f2a12d3',
  created_at: 1722328225,
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
    "name": "ErrInvalidExecutor",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidExpiryTimestamp",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidInput",
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
    "name": "ErrLooseProposalInternallyRevert",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "callIndex"
      },
      {
        "type": "bytes",
        "name": "revertMsg"
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
    "name": "ErrProposalNotApproved",
    "type": "error",
    "inputs": []
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
    "name": "execute",
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
      }
    ],
    "outputs": []
  },
  {
    "name": "executeGlobal",
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
      }
    ],
    "outputs": []
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