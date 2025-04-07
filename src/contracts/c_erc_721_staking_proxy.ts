import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 347,
  address: '0xd54c02d1880e33f53ca2e516a0e979eea30c265c' as const,
  contract_name: 'CErc721StakingProxy',
  display_name: 'C Erc 721 Staking Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x0fd2881a59f900a00cd69d8720fde429232c61d5',
  created_at: 1673981478,
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
        "name": "collateralStakingManagerInterface_"
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
    "name": "collateralStakingManagerInterface",
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
    "name": "isCErc721Staking",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
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