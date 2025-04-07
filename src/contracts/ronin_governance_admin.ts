import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1807,
  address: '0x70fd02049333337a534a9383149c9a99ddf65495' as const,
  contract_name: 'RoninGovernanceAdmin',
  display_name: 'Ronin Governance Admin',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1709535721,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_roninChainId"
      },
      {
        "type": "address",
        "name": "_roninTrustedOrganizationContract"
      },
      {
        "type": "address",
        "name": "_validatorContract"
      },
      {
        "type": "uint256",
        "name": "_expiryDuration"
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
    "name": "ErrInvalidVoteHash",
    "type": "error",
    "inputs": []
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
    "name": "ErrQueryForExpiredVote",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrQueryForNonExistentVote",
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
    "name": "ErrUnexpectedInternalCall",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "uint8",
        "name": "expectedContractType"
      },
      {
        "type": "address",
        "name": "actual"
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
    "name": "EmergencyExitPollApproved",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "voteHash"
      }
    ]
  },
  {
    "name": "EmergencyExitPollCreated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "voteHash"
      },
      {
        "type": "address",
        "name": "validatorId"
      },
      {
        "type": "address",
        "name": "recipientAfterUnlockedFund"
      },
      {
        "type": "uint256",
        "name": "requestedAt"
      },
      {
        "type": "uint256",
        "name": "expiredAt"
      }
    ]
  },
  {
    "name": "EmergencyExitPollExpired",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "voteHash"
      }
    ]
  },
  {
    "name": "EmergencyExitPollVoted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "voteHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "voter",
        "indexed": true
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
    "name": "castProposalBySignatures",
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
    "name": "castProposalVoteForCurrentNetwork",
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
        "type": "uint8",
        "name": "_support"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeProxyAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_proxy"
      },
      {
        "type": "address",
        "name": "_newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "createEmergencyExitPoll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "validatorId"
      },
      {
        "type": "address",
        "name": "recipientAfterUnlockedFund"
      },
      {
        "type": "uint256",
        "name": "requestedAt"
      },
      {
        "type": "uint256",
        "name": "expiredAt"
      }
    ],
    "outputs": []
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
    "name": "emergencyPollVoted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_voteHash"
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
    "name": "getProxyAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_proxy"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getProxyImplementation",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_proxy"
      }
    ],
    "outputs": [
      {
        "type": "address"
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
    "name": "proposeProposalForCurrentNetwork",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
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
      },
      {
        "type": "uint8",
        "name": "_support"
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
    "name": "roninChainId",
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
    "name": "setProposalExpiryDuration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_expiryDuration"
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
  },
  {
    "name": "voteEmergencyExit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "voteHash"
      },
      {
        "type": "address",
        "name": "validatorId"
      },
      {
        "type": "address",
        "name": "recipientAfterUnlockedFund"
      },
      {
        "type": "uint256",
        "name": "requestedAt"
      },
      {
        "type": "uint256",
        "name": "expiredAt"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract