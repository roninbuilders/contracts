import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36003,
  address: '0xd69892d9f1899aaef306bd475e53e0f19e79aa0a' as const,
  contract_name: 'EliteMarketplace',
  display_name: 'Elite Marketplace',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751672254,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_paymentTokenAddress"
      }
    ]
  },
  {
    "name": "OwnableInvalidOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "OwnableUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "ListingCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "listingId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "seller"
      }
    ]
  },
  {
    "name": "NFTBought",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "listingId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "address",
        "name": "seller"
      },
      {
        "type": "uint256",
        "name": "price"
      }
    ]
  },
  {
    "name": "NFTListed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "listingId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "seller"
      },
      {
        "type": "uint256",
        "name": "price"
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
    "name": "buyNFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_listingId"
      }
    ],
    "outputs": []
  },
  {
    "name": "cancelListing",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_listingId"
      }
    ],
    "outputs": []
  },
  {
    "name": "listNFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_nftContract"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "uint256",
        "name": "_price"
      }
    ],
    "outputs": []
  },
  {
    "name": "listings",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "address",
        "name": "seller"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "bool",
        "name": "active"
      }
    ]
  },
  {
    "name": "nextListingId",
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
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
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
    "name": "paymentToken",
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract