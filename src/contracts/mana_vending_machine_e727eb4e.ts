import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3318,
  address: '0xd5c7e6257d264ede9cc7a2e74e52df65e727eb4e' as const,
  contract_name: 'ManaVendingMachine',
  display_name: 'Mana Vending Machine',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1721411235,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
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
    "name": "PurchasePackages",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "uint256[]",
        "name": "quantities"
      },
      {
        "type": "uint256",
        "name": "totalEth"
      },
      {
        "type": "uint256",
        "name": "totalMana"
      }
    ]
  },
  {
    "name": "contractBalance",
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
    "name": "getManaBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPackageFromId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "pkgId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "manaQty"
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
            "type": "uint256",
            "name": "manaQty"
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
    "name": "manaBalances",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
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
    "name": "packages",
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
        "name": "manaQty"
      },
      {
        "type": "uint256",
        "name": "price"
      }
    ]
  },
  {
    "name": "pkgQty",
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
    "name": "purchasePackages",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_qty"
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
    "name": "setPackages",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_manaQty"
      },
      {
        "type": "uint256[]",
        "name": "_prices"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract