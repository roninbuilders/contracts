import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 177,
  address: '0xfca143fe2751a992e8cff2eb5d64eda809049295' as const,
  contract_name: 'BridgeTracking',
  display_name: 'Bridge Tracking',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1679636483,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ErrCallerMustBeBridgeContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrCallerMustBeValidatorContract",
    "type": "error",
    "inputs": []
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
    "name": "ValidatorContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address"
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
    "name": "getManyTotalBallots",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_period"
      },
      {
        "type": "address[]",
        "name": "_bridgeOperators"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_res"
      }
    ]
  },
  {
    "name": "handleVoteApproved",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_kind"
      },
      {
        "type": "uint256",
        "name": "_requestId"
      }
    ],
    "outputs": []
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
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
        "name": "_startedAtBlock"
      }
    ],
    "outputs": []
  },
  {
    "name": "recordVote",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_kind"
      },
      {
        "type": "uint256",
        "name": "_requestId"
      },
      {
        "type": "address",
        "name": "_operator"
      }
    ],
    "outputs": []
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
    "name": "startedAtBlock",
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
    "name": "totalBallots",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_period"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_totalBallots"
      }
    ]
  },
  {
    "name": "totalBallotsOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_period"
      },
      {
        "type": "address",
        "name": "_bridgeOperator"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "totalVotes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_period"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_totalVotes"
      }
    ]
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract