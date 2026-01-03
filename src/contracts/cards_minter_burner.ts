import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 38042,
  address: '0x2943ec415021b19f38738072d686d5c33c1d859b' as const,
  contract_name: 'CardsMinterBurner',
  display_name: 'Cards Minter Burner',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1764883492,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_cardsNFT"
      },
      {
        "type": "address[]",
        "name": "_minters"
      },
      {
        "type": "address[]",
        "name": "_burners"
      },
      {
        "type": "address[]",
        "name": "_pausers"
      }
    ]
  },
  {
    "name": "CardsMinterBurner__ArrayLengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CardsMinterBurner__InvalidAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CardsMinterBurner__InvalidInputLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CardsMinterBurner__NotBurner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CardsMinterBurner__NotMinter",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CardsMinterBurner__NotMinterAndBurner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CardsMinterBurner__NotPauser",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BurnerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "burner",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isBurner"
      }
    ]
  },
  {
    "name": "CardsBurned",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "burner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "batchSize",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ]
  },
  {
    "name": "CardsMinted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "minter",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "batchSize",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ]
  },
  {
    "name": "CardsNFTUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cardsNFT",
        "indexed": true
      }
    ]
  },
  {
    "name": "MinterUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "minter",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isMinter"
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
    "name": "Paused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "PauserUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pauser",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isPauser"
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "burnAndMint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_burnTokenIds"
      },
      {
        "type": "address[]",
        "name": "_mintTo"
      },
      {
        "type": "uint256[]",
        "name": "_mintTokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "burnBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "burners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "burner"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isBurner"
      }
    ]
  },
  {
    "name": "cardsNFT",
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
    "name": "mintBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_to"
      },
      {
        "type": "uint256[]",
        "name": "_tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "minters",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "minter"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isMinter"
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
    "name": "pause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "paused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "pausers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "pauser"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isPauser"
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
    "name": "setBurners",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_burners"
      },
      {
        "type": "bool",
        "name": "_isBurner"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_minters"
      },
      {
        "type": "bool",
        "name": "_isMinter"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPausers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_pausers"
      },
      {
        "type": "bool",
        "name": "_isPauser"
      }
    ],
    "outputs": []
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract