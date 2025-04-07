import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 142,
  address: '0x946397dedfd2f79b75a72b322944a21c3240c9c3' as const,
  contract_name: 'RoninGovernanceAdmin',
  display_name: 'Ronin Governance Admin',
  is_deprecated: true,
  is_proxy: false,
  proxy_to: false,
  created_at: 1679636552,
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
        "name": "_bridgeContract"
      },
      {
        "type": "address",
        "name": "_validatorContract"
      },
      {
        "type": "uint256",
        "name": "_proposalExpiryDuration"
      }
    ]
  },
  {
    "name": "ErrCallerMustBeBridgeContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrCallerMustBeRoninTrustedOrgContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrCallerMustBeValidatorContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrProxyCallFailed",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "methodSignature"
      }
    ]
  },
  {
    "name": "ErrZeroCodeContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BridgeContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "BridgeOperatorsApproved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_period"
      },
      {
        "type": "uint256",
        "name": "_epoch"
      },
      {
        "type": "address[]",
        "name": "_operators"
      }
    ]
  },
  {
    "name": "EmergencyExitPollApproved",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_voteHash"
      }
    ]
  },
  {
    "name": "EmergencyExitPollCreated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_voteHash"
      },
      {
        "type": "address",
        "name": "_consensusAddr"
      },
      {
        "type": "address",
        "name": "_recipientAfterUnlockedFund"
      },
      {
        "type": "uint256",
        "name": "_requestedAt"
      },
      {
        "type": "uint256",
        "name": "_expiredAt"
      }
    ]
  },
  {
    "name": "EmergencyExitPollExpired",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_voteHash"
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
    "name": "RoninTrustedOrganizationContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "ValidatorContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address"
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
    "name": "bridgeContract",
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
    "name": "bridgeOperatorsVoted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_period"
      },
      {
        "type": "uint256",
        "name": "_epoch"
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
    "name": "castGlobalProposalBySignatures",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_globalProposal",
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
        "name": "_consensusAddr"
      },
      {
        "type": "address",
        "name": "_recipientAfterUnlockedFund"
      },
      {
        "type": "uint256",
        "name": "_requestedAt"
      },
      {
        "type": "uint256",
        "name": "_expiredAt"
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
    "name": "getBridgeOperatorVotingSignatures",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_period"
      },
      {
        "type": "uint256",
        "name": "_epoch"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "_voters"
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
    "name": "lastSyncedBridgeOperatorSetInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "period"
          },
          {
            "type": "uint256",
            "name": "epoch"
          },
          {
            "type": "address[]",
            "name": "operators"
          }
        ]
      }
    ]
  },
  {
    "name": "lastVotedBlock",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_bridgeVoter"
      }
    ],
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
        "name": "_expiryTimestamp"
      },
      {
        "type": "uint8[]",
        "name": "_targetOptions"
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
    "name": "proposeGlobalProposalStructAndCastVotes",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_globalProposal",
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
    "name": "roninTrustedOrganizationContract",
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
    "name": "setBridgeContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
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
    "name": "setRoninTrustedOrganizationContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setValidatorContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "validatorContract",
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
    "name": "voteBridgeOperatorsBySignatures",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_ballot",
        "components": [
          {
            "type": "uint256",
            "name": "period"
          },
          {
            "type": "uint256",
            "name": "epoch"
          },
          {
            "type": "address[]",
            "name": "operators"
          }
        ]
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
    "name": "voteEmergencyExit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_voteHash"
      },
      {
        "type": "address",
        "name": "_consensusAddr"
      },
      {
        "type": "address",
        "name": "_recipientAfterUnlockedFund"
      },
      {
        "type": "uint256",
        "name": "_requestedAt"
      },
      {
        "type": "uint256",
        "name": "_expiredAt"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract