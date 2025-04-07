import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 270,
  address: '0xcaef47717e49c82deec1a2eebde6d1f5bebfd3ba' as const,
  contract_name: 'IAP',
  display_name: 'IAP',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1688028591,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_superAdmin"
      }
    ]
  },
  {
    "name": "Purchase",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      }
    ]
  },
  {
    "name": "Withdraw",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "withdrawer",
        "indexed": true
      },
      {
        "type": "string",
        "name": "cutId"
      }
    ]
  },
  {
    "name": "getCutBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "cutId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "listProducts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "string",
            "name": "id"
          }
        ]
      }
    ]
  },
  {
    "name": "listRevShares",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint256",
            "name": "weight"
          }
        ]
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "purchaseProduct",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "productId"
      },
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "string",
        "name": "cutId"
      },
      {
        "type": "int256",
        "name": "timestamp"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateCatalogAdmins",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "newCatalogAdmins"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateProducts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "newProducts",
        "components": [
          {
            "type": "string",
            "name": "id"
          }
        ]
      },
      {
        "type": "address",
        "name": "newPurchaseSigner"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateRevShares",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "newRevShares",
        "components": [
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint256",
            "name": "weight"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "newRevShareCutWeight"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateSuperAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newSuperAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawCut",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "cutId"
      },
      {
        "type": "int256",
        "name": "timestamp"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract