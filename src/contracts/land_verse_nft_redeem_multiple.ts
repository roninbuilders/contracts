import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35784,
  address: '0x2f2c1d8fc5c242d6c9fc14b9e9997f55eff2d61a' as const,
  contract_name: 'LandVerseNFTRedeemMultiple',
  display_name: 'Land Verse NFT Redeem Multiple',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1750849219,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "address",
        "name": "nftAddress"
      },
      {
        "type": "uint256",
        "name": "newMaxTokensLimit"
      }
    ]
  },
  {
    "name": "MaxBatchSizeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldSize"
      },
      {
        "type": "uint256",
        "name": "newSize"
      }
    ]
  },
  {
    "name": "MaxConfigParamsLimitUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldLimit"
      },
      {
        "type": "uint256",
        "name": "newLimit"
      }
    ]
  },
  {
    "name": "MaxTokensLimitUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldLimit"
      },
      {
        "type": "uint256",
        "name": "newLimit"
      }
    ]
  },
  {
    "name": "NFTRedeemMultiple",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "string[]",
        "name": "params"
      },
      {
        "type": "string[]",
        "name": "values"
      },
      {
        "type": "uint256",
        "name": "minTokenId"
      },
      {
        "type": "uint256",
        "name": "maxTokenId"
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
    "name": "MAX_STRING_LENGTH",
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
    "name": "maxBatchSize",
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
    "name": "maxConfigParamsLimit",
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
    "name": "maxTokensLimit",
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
    "name": "redeemMultipleNFTs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "string[]",
        "name": "params"
      },
      {
        "type": "string[]",
        "name": "values"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setMaxBatchSize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMaxBatchSize"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxConfigParamsLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMaxConfigParamsLimit"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxTokensLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMaxTokensLimit"
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