import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 6804,
  address: '0x8f9c975f2fbdf6c171cce21f949342031198ae3f' as const,
  contract_name: 'SupraRouterContract',
  display_name: 'Supra Router Contract',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1736774333,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "OwnershipTransferStarted",
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
    "name": "_depositContract",
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
    "name": "_supraGeneratorContract",
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "depositContract",
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
    "name": "freezeUpgradability",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "generateRequest",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_functionSig"
      },
      {
        "type": "uint8",
        "name": "_rngCount"
      },
      {
        "type": "uint256",
        "name": "_numConfirmations"
      },
      {
        "type": "uint256",
        "name": "_clientSeed"
      },
      {
        "type": "address",
        "name": "_clientWalletAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "generateRequest",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_functionSig"
      },
      {
        "type": "uint8",
        "name": "_rngCount"
      },
      {
        "type": "uint256",
        "name": "_numConfirmations"
      },
      {
        "type": "address",
        "name": "_clientWalletAddress"
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
    "name": "rngCallback",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256[]",
        "name": "rngList"
      },
      {
        "type": "address",
        "name": "_clientContractAddress"
      },
      {
        "type": "string",
        "name": "_functionSig"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      },
      {
        "type": "bytes"
      }
    ]
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
    "name": "updateDepositContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_contractAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateGeneratorContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_contractAddress"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract