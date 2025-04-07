import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3312,
  address: '0x4525db8c82d1e83eae54085aa535c4303c27feca' as const,
  contract_name: 'Evolution',
  display_name: 'Evolution',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1721400558,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_burnNFTs"
      },
      {
        "type": "address[]",
        "name": "_evolutionNFTs"
      },
      {
        "type": "address",
        "name": "_verifier"
      }
    ]
  },
  {
    "name": "Evoluted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "address",
        "name": "burnNFT"
      },
      {
        "type": "uint256[]",
        "name": "burnNftId"
      },
      {
        "type": "address",
        "name": "evolutionNFT"
      },
      {
        "type": "uint256",
        "name": "evolutionNftId"
      }
    ]
  },
  {
    "name": "NewEvolutionDirection",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "burnNFT"
      },
      {
        "type": "address",
        "name": "evolutionNFT"
      },
      {
        "type": "bool",
        "name": "avaliable"
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
    "name": "addEvolutionDirection",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_burnNFT"
      },
      {
        "type": "address",
        "name": "_evolutionNFT"
      }
    ],
    "outputs": []
  },
  {
    "name": "delEvolutionDirection",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_burnNFT"
      },
      {
        "type": "address",
        "name": "_evolutionNFT"
      }
    ],
    "outputs": []
  },
  {
    "name": "evolution",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_burnNFT"
      },
      {
        "type": "uint256[]",
        "name": "_burnNftIds"
      },
      {
        "type": "address",
        "name": "_evolutionNFT"
      },
      {
        "type": "uint256",
        "name": "_evolutionNftId"
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
    "name": "evolutionDirection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
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