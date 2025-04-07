import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 29619,
  address: '0x4c524e05130bdb9c49b0d6fdacbed3f09a2d516c' as const,
  contract_name: 'ProjectTokensManager',
  display_name: 'Project Tokens Manager',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1743092336,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "wrappedAssetManager_"
      },
      {
        "type": "address",
        "name": "houseManager_"
      }
    ]
  },
  {
    "name": "NewTokenAssetListed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "wrapper"
      },
      {
        "type": "address",
        "name": "house"
      },
      {
        "type": "address",
        "name": "viewer"
      }
    ]
  },
  {
    "name": "allTokens",
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
    "name": "canCreate",
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
    "name": "canPlayForOthers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "createTokenContracts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "wrapper"
      },
      {
        "type": "address",
        "name": "house"
      },
      {
        "type": "address",
        "name": "viewer"
      }
    ]
  },
  {
    "name": "fetchAllPartnerInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "start"
      },
      {
        "type": "uint256",
        "name": "end"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "partnerIds"
      },
      {
        "type": "address[]",
        "name": "fundReceivers"
      },
      {
        "type": "string[]",
        "name": "names"
      }
    ]
  },
  {
    "name": "fetchAllTokens",
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
    "name": "fetchAllTokensAndAssets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
      },
      {
        "type": "address[]",
        "name": "wrappers"
      },
      {
        "type": "address[]",
        "name": "houses"
      },
      {
        "type": "address[]",
        "name": "viewers"
      }
    ]
  },
  {
    "name": "fetchParnterInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "partnerIds"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "fundReceivers"
      },
      {
        "type": "string[]",
        "name": "names"
      }
    ]
  },
  {
    "name": "fetchTokenAssets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "wrapper"
      },
      {
        "type": "address",
        "name": "house"
      },
      {
        "type": "address",
        "name": "viewer"
      }
    ]
  },
  {
    "name": "getFundReceiver",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "partner"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getHouse",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getViewer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getWrapper",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "hardOverrideSetTokenAssets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "wrapper"
      },
      {
        "type": "address",
        "name": "house"
      },
      {
        "type": "address",
        "name": "viewer"
      },
      {
        "type": "bool",
        "name": "addToList"
      }
    ],
    "outputs": []
  },
  {
    "name": "houseManager",
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
    "name": "isListedToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isValidPartner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "partnerNonce_"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isWrappedAsset",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "wrapper"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "listPartner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "partnerNonce"
      },
      {
        "type": "address",
        "name": "fundReceiver"
      },
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": []
  },
  {
    "name": "manager",
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
    "name": "paginateTokenAssets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "startIndex"
      },
      {
        "type": "uint256",
        "name": "endIndex"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "wrappers"
      },
      {
        "type": "address[]",
        "name": "houses"
      },
      {
        "type": "address[]",
        "name": "viewers"
      }
    ]
  },
  {
    "name": "paginateTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "startIndex"
      },
      {
        "type": "uint256",
        "name": "endIndex"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "partnerInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isApproved"
      },
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "address",
        "name": "fundReceiver"
      },
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "removeListedPartner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "partnerNonce_"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeTokenSupport",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "bool",
        "name": "deleteAssetsFromMemory"
      }
    ],
    "outputs": []
  },
  {
    "name": "setCanCreate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "bool",
        "name": "canCreate_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setManagers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "wrappedAssetManager_"
      },
      {
        "type": "address",
        "name": "houseManager_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPartnerData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "partnerNonce_"
      },
      {
        "type": "address",
        "name": "fundReceiver"
      },
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": []
  },
  {
    "name": "tokenAssets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "wrapper"
      },
      {
        "type": "address",
        "name": "house"
      },
      {
        "type": "address",
        "name": "viewer"
      },
      {
        "type": "uint256",
        "name": "index"
      }
    ]
  },
  {
    "name": "withdrawETH",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "wrappedAssetManager",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract