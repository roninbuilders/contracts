import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2515,
  address: '0xe78ec1a0bc59cd412bf085d8662a2445af2e58e3' as const,
  contract_name: 'Proxy',
  display_name: 'Axie Voting Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xf99ad53bdb5f042a2db046a99b8fc156a1999c3e',
  created_at: 1715926788,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "address",
        "name": "_admin"
      },
      {
        "type": "bytes",
        "name": "_data"
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
    "inputs": []
  },
  {
    "name": "ErrInvalidProof",
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
    "name": "ErrUnauthorized",
    "type": "error",
    "inputs": []
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