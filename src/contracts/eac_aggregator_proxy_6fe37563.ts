import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 7200,
  address: '0x6299c5da1fdf2ce3f9991ea81d06d9246fe37563' as const,
  contract_name: 'EACAggregatorProxy',
  display_name: 'EAC Aggregator Proxy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1736951325,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_aggregator"
      },
      {
        "type": "address",
        "name": "_accessController"
      }
    ]
  },
  {
    "name": "AnswerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "int256",
        "name": "current",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "roundId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "updatedAt"
      }
    ]
  },
  {
    "name": "NewRound",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "roundId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "startedBy",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "startedAt"
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "accessController",
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
    "name": "aggregator",
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
    "name": "confirmAggregator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_aggregator"
      }
    ],
    "outputs": []
  },
  {
    "name": "decimals",
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
    "name": "description",
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
    "name": "getAnswer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_roundId"
      }
    ],
    "outputs": [
      {
        "type": "int256"
      }
    ]
  },
  {
    "name": "getRoundData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint80",
        "name": "_roundId"
      }
    ],
    "outputs": [
      {
        "type": "uint80",
        "name": "roundId"
      },
      {
        "type": "int256",
        "name": "answer"
      },
      {
        "type": "uint256",
        "name": "startedAt"
      },
      {
        "type": "uint256",
        "name": "updatedAt"
      },
      {
        "type": "uint80",
        "name": "answeredInRound"
      }
    ]
  },
  {
    "name": "getTimestamp",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_roundId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "latestAnswer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int256"
      }
    ]
  },
  {
    "name": "latestRound",
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
    "name": "latestRoundData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint80",
        "name": "roundId"
      },
      {
        "type": "int256",
        "name": "answer"
      },
      {
        "type": "uint256",
        "name": "startedAt"
      },
      {
        "type": "uint256",
        "name": "updatedAt"
      },
      {
        "type": "uint80",
        "name": "answeredInRound"
      }
    ]
  },
  {
    "name": "latestTimestamp",
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
    "name": "phaseAggregators",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint16"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "phaseId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16"
      }
    ]
  },
  {
    "name": "proposeAggregator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_aggregator"
      }
    ],
    "outputs": []
  },
  {
    "name": "proposedAggregator",
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
    "name": "proposedGetRoundData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint80",
        "name": "_roundId"
      }
    ],
    "outputs": [
      {
        "type": "uint80",
        "name": "roundId"
      },
      {
        "type": "int256",
        "name": "answer"
      },
      {
        "type": "uint256",
        "name": "startedAt"
      },
      {
        "type": "uint256",
        "name": "updatedAt"
      },
      {
        "type": "uint80",
        "name": "answeredInRound"
      }
    ]
  },
  {
    "name": "proposedLatestRoundData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint80",
        "name": "roundId"
      },
      {
        "type": "int256",
        "name": "answer"
      },
      {
        "type": "uint256",
        "name": "startedAt"
      },
      {
        "type": "uint256",
        "name": "updatedAt"
      },
      {
        "type": "uint80",
        "name": "answeredInRound"
      }
    ]
  },
  {
    "name": "setController",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_accessController"
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
        "name": "_to"
      }
    ],
    "outputs": []
  },
  {
    "name": "version",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract