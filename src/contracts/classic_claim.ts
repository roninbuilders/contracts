import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3314,
  address: '0x85bd5e10e8e527bb99a3bde12a36377a834f5e28' as const,
  contract_name: 'ClassicClaim',
  display_name: 'Classic Claim',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1721400258,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_nft"
      },
      {
        "type": "uint256",
        "name": "_startAt"
      },
      {
        "type": "uint256",
        "name": "_finishAt"
      },
      {
        "type": "address",
        "name": "_verifier"
      }
    ]
  },
  {
    "name": "Claim",
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
        "name": "nftId"
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
    "name": "finishAt",
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
    "name": "mint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_nonce"
      },
      {
        "type": "uint256",
        "name": "_num"
      },
      {
        "type": "uint8",
        "name": "_v"
      },
      {
        "type": "bytes32",
        "name": "_r"
      },
      {
        "type": "bytes32",
        "name": "_s"
      }
    ],
    "outputs": []
  },
  {
    "name": "nft",
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
    "name": "nonces",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
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
    "name": "startAt",
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
    "name": "totalMintNum",
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