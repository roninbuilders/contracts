import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37707,
  address: '0x3ec83de2204c940e023257dc9e38387a5212a40b' as const,
  contract_name: 'CryptoIngotsViews',
  display_name: 'Crypto Ingots Views',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1762101776,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_cryptoIngotsAddress"
      }
    ]
  },
  {
    "name": "batchGetTokenDetails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "denomination"
          },
          {
            "type": "uint8",
            "name": "network"
          },
          {
            "type": "uint256",
            "name": "mintTimestamp"
          },
          {
            "type": "uint256",
            "name": "mintPrice"
          },
          {
            "type": "bool",
            "name": "locked"
          },
          {
            "type": "uint256",
            "name": "lockEndTime"
          },
          {
            "type": "uint256",
            "name": "lockDuration"
          },
          {
            "type": "address",
            "name": "owner"
          }
        ]
      }
    ]
  },
  {
    "name": "cryptoIngots",
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
    "name": "getLockedTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getTokenDetails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "denomination"
          },
          {
            "type": "uint8",
            "name": "network"
          },
          {
            "type": "uint256",
            "name": "mintTimestamp"
          },
          {
            "type": "uint256",
            "name": "mintPrice"
          },
          {
            "type": "bool",
            "name": "locked"
          },
          {
            "type": "uint256",
            "name": "lockEndTime"
          },
          {
            "type": "uint256",
            "name": "lockDuration"
          },
          {
            "type": "address",
            "name": "owner"
          }
        ]
      }
    ]
  },
  {
    "name": "getTotalValue",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getTotalValueByNetwork",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint8",
        "name": "network"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "tokensOfOwnerByDenomination",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256",
        "name": "denomination"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "tokensOfOwnerByNetwork",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint8",
        "name": "network"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract