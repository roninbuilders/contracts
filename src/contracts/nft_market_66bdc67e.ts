import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37033,
  address: '0x298edcf5911b267d0d699044865aadda66bdc67e' as const,
  contract_name: 'NftMarket',
  display_name: 'Nft Market',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1757679007,
  abi: [
  {
    "name": "FeeLowerThanDiscount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeesExceed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "IncorrectEthAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InputInvalidFee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientQuantity",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidQuantity",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotApproved",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotExpiration",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotListing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotLowerPrice",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "currentPrice"
      }
    ]
  },
  {
    "name": "NotOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotPayToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotSeller",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotSupportNFT",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OperatorFeeTransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RoyaltyTransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SafeERC20FailedOperation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "SellerPaymentFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NFTListed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "address",
        "name": "payToken"
      },
      {
        "type": "uint256",
        "name": "salePeriod"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "address",
        "name": "seller"
      },
      {
        "type": "uint8",
        "name": "tokenType"
      },
      {
        "type": "uint256",
        "name": "siteId"
      }
    ]
  },
  {
    "name": "NFTListingCanceled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "seller"
      },
      {
        "type": "uint8",
        "name": "tokenType"
      }
    ]
  },
  {
    "name": "NFTSold",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "seller"
      },
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "address",
        "name": "payToken"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "uint8",
        "name": "tokenType"
      },
      {
        "type": "uint256",
        "name": "siteId"
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
    "name": "RoleAdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "previousAdminRole",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "newAdminRole",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleGranted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleRevoked",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
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
    "name": "DEFAULT_ADMIN_ROLE",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getAllSitePayableTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_siteId"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getRoleAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getSitePlatformFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_siteId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "basis"
          },
          {
            "type": "uint256",
            "name": "discount"
          },
          {
            "type": "uint256",
            "name": "commission"
          },
          {
            "type": "address",
            "name": "operator"
          }
        ]
      }
    ]
  },
  {
    "name": "getSiteRoyalty",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_siteId"
      },
      {
        "type": "address",
        "name": "_tokenAddress"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "uint256",
            "name": "fee"
          }
        ]
      }
    ]
  },
  {
    "name": "grantRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "hasRole",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "isSitePayableTokenAllowed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_siteId"
      },
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
    "name": "purchase",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "address",
        "name": "seller"
      },
      {
        "type": "uint256",
        "name": "siteId"
      }
    ],
    "outputs": []
  },
  {
    "name": "putOnSale",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "payToken"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "uint256",
        "name": "salePeriod"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "uint256",
        "name": "siteId"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeFromSale",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
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
    "name": "renounceRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "revokeRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSiteConfigs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_siteId"
      },
      {
        "type": "address[]",
        "name": "_payableTokens"
      },
      {
        "type": "uint256",
        "name": "_basis"
      },
      {
        "type": "uint256",
        "name": "_discount"
      },
      {
        "type": "uint256",
        "name": "_commission"
      },
      {
        "type": "address",
        "name": "_operator"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSitePayableToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_siteId"
      },
      {
        "type": "address[]",
        "name": "_addresses"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSitePlatformFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_siteId"
      },
      {
        "type": "uint256",
        "name": "_basis"
      },
      {
        "type": "uint256",
        "name": "_discount"
      },
      {
        "type": "uint256",
        "name": "_commission"
      },
      {
        "type": "address",
        "name": "_operator"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSiteRoyalty",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_siteId"
      },
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "address",
        "name": "_creator"
      },
      {
        "type": "uint256",
        "name": "_fee"
      }
    ],
    "outputs": []
  },
  {
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "updateOnSale",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "payToken"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "uint256",
        "name": "salePeriod"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "uint256",
        "name": "siteId"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract