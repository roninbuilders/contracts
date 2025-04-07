import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 7682,
  address: '0xb2037d887e63c5d278ed910cda341409522378fe' as const,
  contract_name: 'PlayingCards',
  display_name: 'Playing Cards',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1736774411,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "supraSC"
      },
      {
        "type": "address",
        "name": "clientWalletAddress_"
      }
    ]
  },
  {
    "name": "logGas",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gas"
      },
      {
        "type": "uint256",
        "name": "price"
      }
    ]
  },
  {
    "name": "distribute",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "request"
      },
      {
        "type": "uint256[]",
        "name": "rngList"
      }
    ],
    "outputs": []
  },
  {
    "name": "fetchRandomNumberWithSeeds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_randomNumberSize"
      },
      {
        "type": "uint256",
        "name": "_numberOfConfirmation"
      },
      {
        "type": "uint256",
        "name": "_clientSeeds"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "findJoker",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "guessCards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "joker",
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
    "name": "lucky",
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
    "name": "requestList",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_requestId"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "requestResult",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_requestId"
      },
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "teenPatti",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "teen_patti_1",
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
    "name": "teen_patti_2",
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
    "name": "teen_patti_3",
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