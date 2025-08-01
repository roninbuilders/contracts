import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 340,
  address: '0x4642720767a068e41fb7734db39c00fb0b66a7ee' as const,
  contract_name: 'CErc721MainchainProxy',
  display_name: 'C Erc 721 Mainchain Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x211a7919f00ebabfdab0bbbbb5b4285a41819183',
  created_at: 1672169628,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "comptroller_"
      },
      {
        "type": "address",
        "name": "underlying_"
      },
      {
        "type": "string",
        "name": "name_"
      },
      {
        "type": "string",
        "name": "symbol_"
      },
      {
        "type": "address",
        "name": "admin_"
      },
      {
        "type": "address",
        "name": "implementation_"
      }
    ]
  },
  {
    "name": "NewImplementation",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldImplementation"
      },
      {
        "type": "address",
        "name": "newImplementation"
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "_setImplementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "implementation_"
      }
    ],
    "outputs": []
  },
  {
    "name": "accountTokens",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "admin",
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
    "name": "comptroller",
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
    "name": "name",
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
    "name": "symbol",
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
    "name": "tokenOwners",
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
    "name": "underlying",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi,
  proxy_abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract