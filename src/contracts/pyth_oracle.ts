import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1666,
  address: '0x41b3805bafc04c498de063888445783139aa9f6d' as const,
  contract_name: 'PythOracle',
  display_name: 'Pyth Oracle',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1706644418,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "pythContract"
      },
      {
        "type": "address",
        "name": "_katanaOracle"
      }
    ]
  },
  {
    "name": "NewAdmin",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "previousAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "cTokenToPriceFeed",
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
        "name": "basePriceId"
      },
      {
        "type": "bytes32",
        "name": "quotePriceId"
      },
      {
        "type": "uint32",
        "name": "inputDecimals"
      }
    ]
  },
  {
    "name": "decimalScale",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int32"
      }
    ]
  },
  {
    "name": "getUnderlyingDecimals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "cToken"
      }
    ],
    "outputs": [
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "getUnderlyingPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "cToken"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "katanaOracle",
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
    "name": "setAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "setKatanaOracle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_katanaOracle"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPriceFeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cToken"
      },
      {
        "type": "bytes32",
        "name": "basePriceId"
      },
      {
        "type": "bytes32",
        "name": "quotePriceId"
      },
      {
        "type": "uint8",
        "name": "inputDecimals"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract