import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3794,
  address: '0x6ff760dbba98f4df494eaaa1fd2f4b26ac35fbc7' as const,
  contract_name: 'SignPuffV2',
  display_name: 'Sign Puff V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1724381908,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "verifier"
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
    "name": "SignIn",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "taskType"
      },
      {
        "type": "uint256",
        "name": "subTaskType"
      },
      {
        "type": "uint256",
        "name": "score"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "VerifierChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldVerifier"
      },
      {
        "type": "address",
        "name": "newVerifier"
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
    "name": "getUsedNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
    "name": "setVerifier",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_verifier"
      }
    ],
    "outputs": []
  },
  {
    "name": "signIn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "taskType"
      },
      {
        "type": "uint256",
        "name": "subTaskType"
      },
      {
        "type": "uint256",
        "name": "score"
      },
      {
        "type": "uint8",
        "name": "v"
      },
      {
        "type": "bytes32",
        "name": "r"
      },
      {
        "type": "bytes32",
        "name": "s"
      }
    ],
    "outputs": []
  },
  {
    "name": "verifier",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract