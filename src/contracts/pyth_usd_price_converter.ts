import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 23931,
  address: '0x619f473f6f6fcbe399f0b7cc2e971e8b19c1ac01' as const,
  contract_name: 'PythUsdPriceConverter',
  display_name: 'Pyth Usd Price Converter',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1738684489,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_pythAddress"
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
    "name": "PriceFeedRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      }
    ]
  },
  {
    "name": "PriceFeedSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "feedId"
      },
      {
        "type": "uint32",
        "name": "maxAge"
      }
    ]
  },
  {
    "name": "convertUSDToToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "usdAmount"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "tokenAmount"
      }
    ]
  },
  {
    "name": "getTokenPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getUpdateFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "updateData"
      }
    ],
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
    "name": "pyth",
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
    "name": "removeUSDPriceFeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
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
    "name": "setUSDPriceFeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "bytes32",
        "name": "priceFeed"
      },
      {
        "type": "uint32",
        "name": "maxAge"
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
        "name": "newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "updatePriceFeeds",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "updateData"
      }
    ],
    "outputs": []
  },
  {
    "name": "usdPriceFeeds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "feedId"
      },
      {
        "type": "uint32",
        "name": "allowedMaxAge"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract