import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 357,
  address: '0x3ebc36b9545b4b858b1f233d8f2d933c0858f5f4' as const,
  contract_name: 'CErc20Proxy',
  display_name: 'C Erc 20 Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x0b9454699ede2c8e2a8a2e09ab7e1cdf1e17b934',
  created_at: 1684958689,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "underlying_"
      },
      {
        "type": "address",
        "name": "comptroller_"
      },
      {
        "type": "address",
        "name": "interestRateModel_"
      },
      {
        "type": "uint256",
        "name": "initialExchangeRateMantissa_"
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
        "type": "uint8",
        "name": "decimals_"
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
    "name": "accrualBlockNumber",
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
    "name": "borrowIndex",
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
    "name": "interestRateModel",
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
    "name": "pendingAdmin",
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
    "name": "protocolSeizeShareMantissa",
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
    "name": "reserveFactorMantissa",
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
    "name": "totalBorrows",
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
    "name": "totalReserves",
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
    "name": "totalSupply",
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