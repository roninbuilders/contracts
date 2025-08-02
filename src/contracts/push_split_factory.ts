import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36508,
  address: '0x8e8eb0cc6ae34a38b67d5cf91aca38f60bc3ecf4' as const,
  contract_name: 'PushSplitFactory',
  display_name: 'Push Split Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753989640,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_splitsWarehouse"
      }
    ]
  },
  {
    "name": "SplitCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "split",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "splitParams",
        "components": [
          {
            "type": "address[]",
            "name": "recipients"
          },
          {
            "type": "uint256[]",
            "name": "allocations"
          },
          {
            "type": "uint256",
            "name": "totalAllocation"
          },
          {
            "type": "uint16",
            "name": "distributionIncentive"
          }
        ]
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "bytes32",
        "name": "salt"
      }
    ]
  },
  {
    "name": "SplitCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "split",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "splitParams",
        "components": [
          {
            "type": "address[]",
            "name": "recipients"
          },
          {
            "type": "uint256[]",
            "name": "allocations"
          },
          {
            "type": "uint256",
            "name": "totalAllocation"
          },
          {
            "type": "uint16",
            "name": "distributionIncentive"
          }
        ]
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ]
  },
  {
    "name": "SPLIT_WALLET_IMPLEMENTATION",
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
    "name": "createSplit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_splitParams",
        "components": [
          {
            "type": "address[]",
            "name": "recipients"
          },
          {
            "type": "uint256[]",
            "name": "allocations"
          },
          {
            "type": "uint256",
            "name": "totalAllocation"
          },
          {
            "type": "uint16",
            "name": "distributionIncentive"
          }
        ]
      },
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_creator"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "split"
      }
    ]
  },
  {
    "name": "createSplitDeterministic",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_splitParams",
        "components": [
          {
            "type": "address[]",
            "name": "recipients"
          },
          {
            "type": "uint256[]",
            "name": "allocations"
          },
          {
            "type": "uint256",
            "name": "totalAllocation"
          },
          {
            "type": "uint16",
            "name": "distributionIncentive"
          }
        ]
      },
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_creator"
      },
      {
        "type": "bytes32",
        "name": "_salt"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "split"
      }
    ]
  },
  {
    "name": "isDeployed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "_splitParams",
        "components": [
          {
            "type": "address[]",
            "name": "recipients"
          },
          {
            "type": "uint256[]",
            "name": "allocations"
          },
          {
            "type": "uint256",
            "name": "totalAllocation"
          },
          {
            "type": "uint16",
            "name": "distributionIncentive"
          }
        ]
      },
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "bytes32",
        "name": "_salt"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "split"
      },
      {
        "type": "bool",
        "name": "exists"
      }
    ]
  },
  {
    "name": "nonces",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_hash"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "predictDeterministicAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "_splitParams",
        "components": [
          {
            "type": "address[]",
            "name": "recipients"
          },
          {
            "type": "uint256[]",
            "name": "allocations"
          },
          {
            "type": "uint256",
            "name": "totalAllocation"
          },
          {
            "type": "uint16",
            "name": "distributionIncentive"
          }
        ]
      },
      {
        "type": "address",
        "name": "_owner"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "predictDeterministicAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "_splitParams",
        "components": [
          {
            "type": "address[]",
            "name": "recipients"
          },
          {
            "type": "uint256[]",
            "name": "allocations"
          },
          {
            "type": "uint256",
            "name": "totalAllocation"
          },
          {
            "type": "uint16",
            "name": "distributionIncentive"
          }
        ]
      },
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "bytes32",
        "name": "_salt"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract