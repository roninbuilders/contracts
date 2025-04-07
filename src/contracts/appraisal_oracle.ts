import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25696,
  address: '0x92d4b135f93bcd94123eeabac4d0ad2fbe774f75' as const,
  contract_name: 'AppraisalOracle',
  display_name: 'Appraisal Oracle',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739879944,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
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
    "name": "NewAppraiser",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAppraiser",
        "indexed": true
      }
    ]
  },
  {
    "name": "_isAppraiser",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_address"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "_setAppraiser",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAppraiser"
      }
    ],
    "outputs": []
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
    "name": "verifyAppraisals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "wire",
        "components": [
          {
            "type": "address[]",
            "name": "appraisalTokens"
          },
          {
            "type": "uint256[]",
            "name": "appraisalLengths"
          },
          {
            "type": "uint256[]",
            "name": "appraisalTokenIds"
          },
          {
            "type": "uint256[]",
            "name": "appraisalValues"
          },
          {
            "type": "uint256",
            "name": "appraisalGoodUntil"
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "verifySignature",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hash"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract