import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37477,
  address: '0x455be830568b52e96d29c45adc8977fcdbea48ed' as const,
  contract_name: 'StrategyDirectory',
  display_name: 'Strategy Directory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1760668455,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
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
    "name": "ProjectInfoUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "StrategyRegistered",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "strategyAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "StrategyUnregistered",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "strategyAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "allTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "getAllTokens",
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
    "name": "getStrategy",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_strategyAddress"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getTokenCount",
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
    "name": "getTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_page"
      },
      {
        "type": "uint256",
        "name": "_pageSize"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
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
    "name": "projectInfos",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "twitterAddress"
      },
      {
        "type": "string",
        "name": "collectionAddress"
      },
      {
        "type": "string",
        "name": "discordInviteLink"
      }
    ]
  },
  {
    "name": "registerStrategy",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "address",
        "name": "_strategyAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "strategies",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "tokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
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
  },
  {
    "name": "unregisterStrategy",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateProjectInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "string",
        "name": "_twitterAddress"
      },
      {
        "type": "string",
        "name": "_collectionAddress"
      },
      {
        "type": "string",
        "name": "_discordInviteLink"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract