import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 23934,
  address: '0x071a2b577603f4b63d7528fb7f57cd9fddf9bb04' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Payments Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xa424c64b7cf88adbc40c3e87376bcaa4a795388b',
  created_at: 1738685161,
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
        "name": "admin_"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ]
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
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
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
  },
  {
    "name": "admin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "admin_"
      }
    ]
  },
  {
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "implementation_"
      }
    ]
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeToAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
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
    "name": "InsufficientETH",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientTokenAllowance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientTokenBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPriceConverter",
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
    "name": "PriceNotActive",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PriceNotFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
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
    "name": "PaymentCompleted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "payor",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "priceId",
        "indexed": true
      },
      {
        "type": "string",
        "name": "productId",
        "indexed": true
      },
      {
        "type": "string",
        "name": "userId"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "paymentAmount"
      }
    ]
  },
  {
    "name": "PriceConverterUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newPriceConverter",
        "indexed": true
      }
    ]
  },
  {
    "name": "USDPriceCreated",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "price",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "string",
            "name": "productId"
          },
          {
            "type": "bool",
            "name": "isActive"
          }
        ]
      }
    ]
  },
  {
    "name": "USDPriceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "price",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "string",
            "name": "productId"
          },
          {
            "type": "bool",
            "name": "isActive"
          }
        ]
      }
    ]
  },
  {
    "name": "createUSDPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "string",
        "name": "productId"
      },
      {
        "type": "bool",
        "name": "isActive"
      }
    ],
    "outputs": []
  },
  {
    "name": "getPriceInToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "priceId"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "getPriceInUSD",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "priceId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
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
        "name": "initialSafeAddress"
      },
      {
        "type": "address",
        "name": "initialPriceConverter"
      }
    ],
    "outputs": []
  },
  {
    "name": "makeETHPayment",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "priceId"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "string",
        "name": "userId"
      }
    ],
    "outputs": []
  },
  {
    "name": "makeTokenPayment",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "priceId"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "string",
        "name": "userId"
      }
    ],
    "outputs": []
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
    "name": "priceConverter",
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
    "name": "prices",
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
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "string",
        "name": "productId"
      },
      {
        "type": "bool",
        "name": "isActive"
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
    "name": "safeAddress",
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
    "name": "setPriceConverter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newPriceConverter"
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
    "name": "updateUSDPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "priceId"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "string",
        "name": "productId"
      },
      {
        "type": "bool",
        "name": "isActive"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawETH",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract