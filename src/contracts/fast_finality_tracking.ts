import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2945,
  address: '0xa5ac7555d34cb77585dab49ad6ae12827298fed0' as const,
  contract_name: 'FastFinalityTracking',
  display_name: 'Fast Finality Tracking',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1718685417,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ErrCallerMustBeCoinbase",
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
    "name": "ErrOncePerBlock",
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
    "name": "getManyFinalityScores",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "epoch"
      },
      {
        "type": "address[]",
        "name": "consensuses"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "scores"
      }
    ]
  },
  {
    "name": "getManyFinalityScoresById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "epoch"
      },
      {
        "type": "address[]",
        "name": "cids"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "scores"
      }
    ]
  },
  {
    "name": "getManyFinalityVoteCounts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "epoch"
      },
      {
        "type": "address[]",
        "name": "addrs"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "voteCounts"
      }
    ]
  },
  {
    "name": "getManyFinalityVoteCountsById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "epoch"
      },
      {
        "type": "address[]",
        "name": "cids"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "voteCounts"
      }
    ]
  },
  {
    "name": "getNormalizedStake",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "period"
      },
      {
        "type": "address",
        "name": "cid"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "normalizedStake"
      }
    ]
  },
  {
    "name": "getNormalizedSum",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "period"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "normalizedSum"
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "validatorContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "profileContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV3",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "stakingContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "latestTrackingBlock",
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
    "name": "recordFinality",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "voters"
      }
    ],
    "outputs": []
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract