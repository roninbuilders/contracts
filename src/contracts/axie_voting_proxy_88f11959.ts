import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37898,
  address: '0x94032e653a0316e1062e86051eae6c9b88f11959' as const,
  contract_name: 'TransparentProxyOZv4_9_5',
  display_name: 'Axie Voting Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x3eb2f2432966140d5263ee9bf1dfb3d5abdcd937',
  created_at: 1763538073,
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ErrAlreadyVoted",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "ErrExceededMaxDelegators",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidApprovedPercentage",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidDelegatee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidProof",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidSnapshotSetter",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidStatus",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "needed"
      },
      {
        "type": "uint8",
        "name": "current"
      }
    ]
  },
  {
    "name": "ErrInvalidVoteType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrMerkleRootNotSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrVotingPeriodEnded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DelegationCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "delegator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "delegatee",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "votingPower",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "axsStaked"
      },
      {
        "type": "uint256",
        "name": "totalVotingPower"
      },
      {
        "type": "uint256",
        "name": "totalAxsStaked"
      },
      {
        "type": "uint256",
        "name": "axieScore"
      }
    ]
  },
  {
    "name": "DelegationRevoked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "delegator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "delegatee",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "votingPower"
      },
      {
        "type": "uint256",
        "name": "axsStaked"
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
    "name": "SnapshotSet",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "merkleRoot",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "axsStakedQuorum"
      },
      {
        "type": "uint32",
        "name": "approvedPercentage"
      }
    ]
  },
  {
    "name": "VoteCast",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "voter",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "vote",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "votingPower"
      },
      {
        "type": "uint256",
        "name": "axsStaked"
      },
      {
        "type": "uint256",
        "name": "axieScore"
      }
    ]
  },
  {
    "name": "VoteCastForDelegations",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "delegatee",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "vote",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "votingPower"
      },
      {
        "type": "uint256",
        "name": "axsStaked"
      },
      {
        "type": "address[]",
        "name": "delegators",
        "indexed": true
      }
    ]
  },
  {
    "name": "MAX_DELEGATORS_PER_DELEGATEE",
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
    "name": "MAX_PERCENTAGE",
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
    "name": "castVote",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "vote"
      },
      {
        "type": "bytes32[]",
        "name": "merkleProof"
      },
      {
        "type": "uint256",
        "name": "votingPower"
      },
      {
        "type": "uint256",
        "name": "axsStaked"
      },
      {
        "type": "uint256",
        "name": "axieScore"
      }
    ],
    "outputs": []
  },
  {
    "name": "castVoteForDelegations",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "vote"
      }
    ],
    "outputs": []
  },
  {
    "name": "delegateVote",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "merkleProof"
      },
      {
        "type": "uint256",
        "name": "votingPower"
      },
      {
        "type": "uint256",
        "name": "axsStaked"
      },
      {
        "type": "uint256",
        "name": "axieScore"
      },
      {
        "type": "address",
        "name": "newDelegatee"
      }
    ],
    "outputs": []
  },
  {
    "name": "getCurrentDelegatee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getDelegationInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "delegators"
      },
      {
        "type": "uint256",
        "name": "votingPower"
      },
      {
        "type": "uint256",
        "name": "axsStaked"
      }
    ]
  },
  {
    "name": "getInformation",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "id"
      },
      {
        "type": "string",
        "name": "title"
      },
      {
        "type": "tuple",
        "name": "votingPeriod",
        "components": [
          {
            "type": "uint40",
            "name": "startedAt"
          },
          {
            "type": "uint40",
            "name": "endedAt"
          },
          {
            "type": "uint176",
            "name": "__reserved"
          }
        ]
      },
      {
        "type": "address",
        "name": "snapshotSetter"
      },
      {
        "type": "tuple",
        "name": "snapshot",
        "components": [
          {
            "type": "bytes32",
            "name": "merkleRoot"
          },
          {
            "type": "uint256",
            "name": "axsStakedQuorum"
          },
          {
            "type": "uint32",
            "name": "approvedPercentage"
          }
        ]
      }
    ]
  },
  {
    "name": "getSnapshot",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "bytes32",
            "name": "merkleRoot"
          },
          {
            "type": "uint256",
            "name": "axsStakedQuorum"
          },
          {
            "type": "uint32",
            "name": "approvedPercentage"
          }
        ]
      }
    ]
  },
  {
    "name": "getStatus",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "getVotingStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "snapshotAXSVoted"
          },
          {
            "type": "uint256",
            "name": "yesVotePower"
          },
          {
            "type": "uint256",
            "name": "noVotePower"
          }
        ]
      }
    ]
  },
  {
    "name": "hasVoted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
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
        "type": "string",
        "name": "id"
      },
      {
        "type": "string",
        "name": "title"
      },
      {
        "type": "tuple",
        "name": "votingPeriod",
        "components": [
          {
            "type": "uint40",
            "name": "startedAt"
          },
          {
            "type": "uint40",
            "name": "endedAt"
          },
          {
            "type": "uint176",
            "name": "__reserved"
          }
        ]
      },
      {
        "type": "address",
        "name": "snapshotSetter"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSnapshot",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "merkleRoot"
      },
      {
        "type": "uint256",
        "name": "axsStakedQuorum"
      },
      {
        "type": "uint32",
        "name": "approvedPercentage"
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
        "name": "voter"
      },
      {
        "type": "bytes32[]",
        "name": "merkleProof"
      },
      {
        "type": "uint256",
        "name": "votingPower"
      },
      {
        "type": "uint256",
        "name": "axsStaked"
      },
      {
        "type": "uint256",
        "name": "axieScore"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract