import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27790,
  address: '0x36f7dcaabcb76ff147cf5f5380e10d9c92352b1d' as const,
  contract_name: 'ManaVendingMachine',
  display_name: 'Mana Vending Machine',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742408240,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_pyth"
      },
      {
        "type": "address",
        "name": "_usdcToken"
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
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
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
    "name": "PurchaseEvent",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "uint256",
        "name": "package"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "uint256",
        "name": "amountSpent"
      }
    ]
  },
  {
    "name": "PurchaseEventUSDC",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "uint256",
        "name": "package"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "uint256",
        "name": "amountSpent"
      }
    ]
  },
  {
    "name": "fetchPrice",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "updateData"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "int64",
            "name": "price"
          },
          {
            "type": "uint64",
            "name": "conf"
          },
          {
            "type": "int32",
            "name": "expo"
          },
          {
            "type": "uint256",
            "name": "publishTime"
          }
        ]
      }
    ]
  },
  {
    "name": "getFeedID",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "string",
            "name": "symbol"
          },
          {
            "type": "bytes32",
            "name": "id"
          }
        ]
      }
    ]
  },
  {
    "name": "getPackageFromIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "packageIndex"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "string",
            "name": "packageId"
          },
          {
            "type": "uint256",
            "name": "price"
          }
        ]
      }
    ]
  },
  {
    "name": "getPackages",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "string",
            "name": "packageId"
          },
          {
            "type": "uint256",
            "name": "price"
          }
        ]
      }
    ]
  },
  {
    "name": "getPkgQty",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "getPythAddress",
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
    "name": "getUSDCAddress",
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
    "name": "lockCrypto",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_locked"
      }
    ],
    "outputs": []
  },
  {
    "name": "lockUSDCToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_locked"
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
    "name": "purchasePackage",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_index"
      },
      {
        "type": "uint256",
        "name": "_quantity"
      },
      {
        "type": "bytes[]",
        "name": "updateData"
      }
    ],
    "outputs": []
  },
  {
    "name": "purchasePackageWithUSDC",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_index"
      },
      {
        "type": "uint256",
        "name": "_quantity"
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
    "name": "setFeedID",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_symbol"
      },
      {
        "type": "bytes32",
        "name": "_id"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPackages",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string[]",
        "name": "_packageIds"
      },
      {
        "type": "uint256[]",
        "name": "_prices"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPythAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_pyth"
      }
    ],
    "outputs": []
  },
  {
    "name": "setUSDCAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_USDCAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVaultAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_vaultAdress"
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
    "name": "usdcToken",
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
    "name": "vaultAddress",
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
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawAllUSDC",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawUSDCToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract