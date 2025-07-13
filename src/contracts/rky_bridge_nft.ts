import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34916,
  address: '0x1bdecee320fc8e583cc95c29f80119ec9c06001d' as const,
  contract_name: 'RKYBridgeNFT',
  display_name: 'RKY Bridge NFT',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1747667471,
  abi: [
  {
    "name": "ChainAlreadyAuthorized",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "chainId"
      }
    ]
  },
  {
    "name": "ChainDoesNotExist",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "chainId"
      }
    ]
  },
  {
    "name": "ChainNotAuthorized",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "chainId"
      }
    ]
  },
  {
    "name": "ContractAlreadyAuthorized",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress"
      }
    ]
  },
  {
    "name": "ContractNotAuthorized",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress"
      }
    ]
  },
  {
    "name": "InsufficientFee",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "provided"
      },
      {
        "type": "uint256",
        "name": "required"
      }
    ]
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "IsNotAddressContract",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress"
      }
    ]
  },
  {
    "name": "NFTAlreadyDeposited",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "NFTDoesNotExist",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id"
      }
    ]
  },
  {
    "name": "NonceAlreadyUsed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
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
    "name": "TransferFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "UnsupportedInterface",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress"
      },
      {
        "type": "uint8",
        "name": "expectedType"
      }
    ]
  },
  {
    "name": "YouNotOwnerOfNFT",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "fakeOwner"
      }
    ]
  },
  {
    "name": "ZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroChainId",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AuthorizedContractAdded",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "collection",
        "components": [
          {
            "type": "address",
            "name": "contractAddress"
          },
          {
            "type": "uint8",
            "name": "interfaceType"
          },
          {
            "type": "bool",
            "name": "isAuthorized"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint256",
            "name": "migrationFee"
          }
        ]
      }
    ]
  },
  {
    "name": "AuthorizedNFTCollectionAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "AuthorizedNFTCollectionRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "ChainAdded",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "chain",
        "components": [
          {
            "type": "string",
            "name": "name"
          },
          {
            "type": "uint256",
            "name": "chainId"
          },
          {
            "type": "bool",
            "name": "isAuthorized"
          }
        ]
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "version"
      }
    ]
  },
  {
    "name": "MigrationFeeSeted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "migrationFee"
      }
    ]
  },
  {
    "name": "NFTDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "destinationChainId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nonce"
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
    "name": "addAuthorizedChains",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "chainId"
      },
      {
        "type": "string",
        "name": "chainName"
      }
    ],
    "outputs": []
  },
  {
    "name": "addAuthorizedNFTCollection",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "addressAddedCollections",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "depositNFT",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "destinationChainId"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAllAddressesAddedCollections",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getAuthorizedNFTCollection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "contractAddress"
          },
          {
            "type": "uint8",
            "name": "interfaceType"
          },
          {
            "type": "bool",
            "name": "isAuthorized"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint256",
            "name": "migrationFee"
          }
        ]
      }
    ]
  },
  {
    "name": "getNFTsByWallet",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "wallet"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "bytes32",
            "name": "id"
          },
          {
            "type": "address",
            "name": "contractAddress"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "chainId"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint256",
            "name": "nonce"
          }
        ]
      }
    ]
  },
  {
    "name": "idsAuthorizedChains",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_treasury"
      }
    ],
    "outputs": []
  },
  {
    "name": "isChainAuthorized",
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
    "name": "isCollectionAuthorized",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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