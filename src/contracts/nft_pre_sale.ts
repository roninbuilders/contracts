import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35442,
  address: '0xcb7d8a95a8b031db74f2f285ed3425bafc7245a9' as const,
  contract_name: 'nftPreSale',
  display_name: 'nft Pre Sale',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1749563921,
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
    "name": "boxesBoughtLog",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "who"
      },
      {
        "type": "uint256",
        "name": "box"
      },
      {
        "type": "uint256",
        "name": "quantity"
      }
    ]
  },
  {
    "name": "boxSales",
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
        "name": "price"
      },
      {
        "type": "uint256",
        "name": "quantity"
      }
    ]
  },
  {
    "name": "boxesBought",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
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
    "name": "buyBox",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "box"
      },
      {
        "type": "uint256",
        "name": "quantity_"
      }
    ],
    "outputs": []
  },
  {
    "name": "buyerID",
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
    "name": "getBoxFeatures",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "box"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "price"
          },
          {
            "type": "uint256",
            "name": "quantity"
          }
        ]
      }
    ]
  },
  {
    "name": "getBoxPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "box"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getBoxQuantity",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "box"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getBuys",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "who"
      }
    ],
    "outputs": [
      {
        "type": "uint256[6]"
      }
    ]
  },
  {
    "name": "isPresale",
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
    "name": "isWhitelist",
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
    "name": "setBoxPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "box"
      },
      {
        "type": "uint256",
        "name": "price_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBoxQuantity",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "box"
      },
      {
        "type": "uint256",
        "name": "quantity_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "who"
      },
      {
        "type": "bool",
        "name": "set"
      }
    ],
    "outputs": []
  },
  {
    "name": "tooglePreSale",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "toogleWhitelist",
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
  },
  {
    "name": "whitelist",
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
    "name": "withdrawEth",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount_"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount_"
      },
      {
        "type": "address",
        "name": "token_"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract