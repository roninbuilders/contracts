import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36266,
  address: '0x137b14b657897cd335308c7f22fe7275a26fcc99' as const,
  contract_name: 'HouseManager',
  display_name: 'House Manager',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753073136,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "houseImplementation_"
      },
      {
        "type": "address",
        "name": "manager_"
      }
    ]
  },
  {
    "name": "HouseCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "house"
      }
    ]
  },
  {
    "name": "allHouses",
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
    "name": "createHouse",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "house"
      }
    ]
  },
  {
    "name": "getHousesForTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "houseFor",
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
    "name": "houseImplementation",
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
    "name": "houseToToken",
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
    "name": "isHouse",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "house"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "manager",
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
    "name": "setImplementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract