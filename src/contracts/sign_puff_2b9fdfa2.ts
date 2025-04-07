import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3302,
  address: '0x72195defc317f7b1fa1895ddfbec6cce2b9fdfa2' as const,
  contract_name: 'SignPuff',
  display_name: 'Sign Puff',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1714838391,
  abi: [
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
    "name": "SignIn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "continueNum"
      },
      {
        "type": "uint256",
        "name": "totalNum"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "BEGIN_TIME",
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
    "name": "acceptOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "importData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "importUserInfos",
        "components": [
          {
            "type": "address",
            "name": "user"
          },
          {
            "type": "uint256",
            "name": "continueNum"
          },
          {
            "type": "uint256",
            "name": "totalNum"
          },
          {
            "type": "uint256",
            "name": "lastTime"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "interval",
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
    "name": "pendingOwner",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setPendingOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "signIn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "signInInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "available"
      },
      {
        "type": "uint256",
        "name": "userContinueNum"
      },
      {
        "type": "uint256",
        "name": "userTotalNum"
      }
    ]
  },
  {
    "name": "timeToCrycle",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256",
        "name": "_timestamp"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_crycle"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract