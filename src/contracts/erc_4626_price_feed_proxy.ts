import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35937,
  address: '0xde471274f1b684476d341eb131224f389ad4a270' as const,
  contract_name: 'ERC4626PriceFeedFactory',
  display_name: 'ERC4626 Price Feed Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xa2f8e029f0b2872d28be54d9c3486008a14c3e48',
  created_at: 1751387245,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "FailedDeployment",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "balance"
      },
      {
        "type": "uint256",
        "name": "needed"
      }
    ]
  },
  {
    "name": "OwnableInvalidOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "OwnableUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "OwnershipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true
      }
    ]
  },
  {
    "name": "PriceFeedCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "vault",
        "indexed": true
      },
      {
        "type": "address",
        "name": "priceFeed",
        "indexed": true
      }
    ]
  },
  {
    "name": "createPriceFeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "vault"
      },
      {
        "type": "string",
        "name": "description"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "priceFeed"
      }
    ]
  },
  {
    "name": "implementation",
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
    "name": "priceFeedsByVault",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "version"
      }
    ]
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_vault"
      },
      {
        "type": "string",
        "name": "_description"
      }
    ],
    "outputs": []
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
    "name": "vault",
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