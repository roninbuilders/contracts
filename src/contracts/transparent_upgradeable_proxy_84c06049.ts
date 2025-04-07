import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25632,
  address: '0x2702efe572a76c6e6d6b2e45379111ff84c06049' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Transparent Upgradeable Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xbfe08e48893978109dae460537610da26230ee4e',
  created_at: 1739460815,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "address",
        "name": "initialOwner"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ]
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "ERC1967InvalidAdmin",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      }
    ]
  },
  {
    "name": "ERC1967InvalidImplementation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      }
    ]
  },
  {
    "name": "ERC1967NonPayable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ProxyDeniedAdminAccess",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "AddressInsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientPurchaseAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidOps",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRate",
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
    "name": "ProfileNotExist",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RefundFailed",
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
    "name": "SellForNothing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenNotGraduated",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenNotTrading",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TradingAlreadyOpen",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Bought",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountIn"
      },
      {
        "type": "uint256",
        "name": "amountOutReceived"
      }
    ]
  },
  {
    "name": "Graduated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "upgradedToken",
        "indexed": true
      },
      {
        "type": "address",
        "name": "uniswapPair",
        "indexed": true
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
    "name": "Launched",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "creator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "pair",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "length"
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
    "name": "Sold",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "seller",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountIn"
      },
      {
        "type": "uint256",
        "name": "amountOutReceived"
      }
    ]
  },
  {
    "name": "K",
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
    "name": "assetRate",
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
    "name": "buy",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountIn"
      },
      {
        "type": "uint256",
        "name": "amountOutMin"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "factory",
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
    "name": "fee",
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
    "name": "feeTo",
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
    "name": "getConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "feeTo"
          },
          {
            "type": "address",
            "name": "factory"
          },
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "uint256",
            "name": "initialSupply"
          },
          {
            "type": "uint256",
            "name": "fee"
          },
          {
            "type": "uint256",
            "name": "assetRate"
          },
          {
            "type": "uint256",
            "name": "gradThreshold"
          },
          {
            "type": "uint256",
            "name": "maxTx"
          },
          {
            "type": "address",
            "name": "tokenFactory"
          },
          {
            "type": "address",
            "name": "wrappedNativeToken"
          },
          {
            "type": "address",
            "name": "wrappedNativeTokenForwarder"
          }
        ]
      }
    ]
  },
  {
    "name": "getUserTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "gradThreshold",
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
    "name": "initialSupply",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "feeTo"
          },
          {
            "type": "address",
            "name": "factory"
          },
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "uint256",
            "name": "initialSupply"
          },
          {
            "type": "uint256",
            "name": "fee"
          },
          {
            "type": "uint256",
            "name": "assetRate"
          },
          {
            "type": "uint256",
            "name": "gradThreshold"
          },
          {
            "type": "uint256",
            "name": "maxTx"
          },
          {
            "type": "address",
            "name": "tokenFactory"
          },
          {
            "type": "address",
            "name": "wrappedNativeToken"
          },
          {
            "type": "address",
            "name": "wrappedNativeTokenForwarder"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "launch",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "_name"
      },
      {
        "type": "string",
        "name": "_ticker"
      },
      {
        "type": "uint8[]",
        "name": "cores"
      },
      {
        "type": "string",
        "name": "desc"
      },
      {
        "type": "string",
        "name": "img"
      },
      {
        "type": "string[4]",
        "name": "urls"
      },
      {
        "type": "uint256",
        "name": "purchaseAmount"
      }
    ],
    "outputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "maxTx",
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
    "name": "profile",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "user"
      }
    ]
  },
  {
    "name": "profiles",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "router",
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
    "name": "sell",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountIn"
      },
      {
        "type": "uint256",
        "name": "amountOutMin"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "setConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "feeTo"
          },
          {
            "type": "address",
            "name": "factory"
          },
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "uint256",
            "name": "initialSupply"
          },
          {
            "type": "uint256",
            "name": "fee"
          },
          {
            "type": "uint256",
            "name": "assetRate"
          },
          {
            "type": "uint256",
            "name": "gradThreshold"
          },
          {
            "type": "uint256",
            "name": "maxTx"
          },
          {
            "type": "address",
            "name": "tokenFactory"
          },
          {
            "type": "address",
            "name": "wrappedNativeToken"
          },
          {
            "type": "address",
            "name": "wrappedNativeTokenForwarder"
          }
        ]
      },
      {
        "type": "bool",
        "name": "shouldOverrideDefaultFields"
      }
    ],
    "outputs": []
  },
  {
    "name": "tokenFactory",
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
    "name": "tokenInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "funToken"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "pair"
      },
      {
        "type": "address",
        "name": "upgradedToken"
      },
      {
        "type": "tuple",
        "name": "data",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "string",
            "name": "name"
          },
          {
            "type": "string",
            "name": "_name"
          },
          {
            "type": "string",
            "name": "ticker"
          },
          {
            "type": "uint256",
            "name": "supply"
          },
          {
            "type": "uint256",
            "name": "price"
          },
          {
            "type": "uint256",
            "name": "marketCap"
          },
          {
            "type": "uint256",
            "name": "liquidity"
          },
          {
            "type": "uint256",
            "name": "volume"
          },
          {
            "type": "uint256",
            "name": "volume24H"
          },
          {
            "type": "uint256",
            "name": "prevPrice"
          },
          {
            "type": "uint256",
            "name": "lastUpdated"
          }
        ]
      },
      {
        "type": "string",
        "name": "description"
      },
      {
        "type": "string",
        "name": "image"
      },
      {
        "type": "string",
        "name": "twitter"
      },
      {
        "type": "string",
        "name": "telegram"
      },
      {
        "type": "string",
        "name": "youtube"
      },
      {
        "type": "string",
        "name": "website"
      },
      {
        "type": "bool",
        "name": "trading"
      },
      {
        "type": "bool",
        "name": "tradingOnUniswap"
      }
    ]
  },
  {
    "name": "tokenInfos",
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
    "name": "unwrapToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "srcTokenAddress"
      },
      {
        "type": "address[]",
        "name": "accounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "wrappedNativeToken",
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
    "name": "wrappedNativeTokenForwarder",
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