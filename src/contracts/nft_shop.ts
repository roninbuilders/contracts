import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3316,
  address: '0xb43018e260c1bbbcd33f1c3d96482fdd106a54a8' as const,
  contract_name: 'NFTShop',
  display_name: 'NFT Shop',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1721399760,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_WETH"
      },
      {
        "type": "address",
        "name": "_receiver"
      }
    ]
  },
  {
    "name": "Buy",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "cost"
      },
      {
        "type": "address",
        "name": "receiveNFT"
      },
      {
        "type": "uint256[]",
        "name": "nftIds"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "FinishAtChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldValue"
      },
      {
        "type": "uint256",
        "name": "newValue"
      }
    ]
  },
  {
    "name": "ItemChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "cost"
      },
      {
        "type": "address",
        "name": "receiveNFT"
      },
      {
        "type": "uint256",
        "name": "receiveNum"
      },
      {
        "type": "bool",
        "name": "available"
      }
    ]
  },
  {
    "name": "NftSupplyChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nft"
      },
      {
        "type": "uint256",
        "name": "oldSupply"
      },
      {
        "type": "uint256",
        "name": "newSupply"
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
    "name": "ReceiverChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldReceiver"
      },
      {
        "type": "address",
        "name": "newReceiver"
      }
    ]
  },
  {
    "name": "StartAtChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldValue"
      },
      {
        "type": "uint256",
        "name": "newValue"
      }
    ]
  },
  {
    "name": "WETH",
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
    "name": "acceptOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "addItems",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_paymentTokens"
      },
      {
        "type": "uint256[]",
        "name": "_costs"
      },
      {
        "type": "address[]",
        "name": "_receiveNFTs"
      },
      {
        "type": "uint256[]",
        "name": "_receiveNums"
      }
    ],
    "outputs": []
  },
  {
    "name": "allItems",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "itemList",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint256",
            "name": "cost"
          },
          {
            "type": "address",
            "name": "receiveNFT"
          },
          {
            "type": "uint256",
            "name": "receiveNum"
          },
          {
            "type": "bool",
            "name": "available"
          }
        ]
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
        "name": "_id"
      },
      {
        "type": "uint256",
        "name": "_cost"
      },
      {
        "type": "uint256",
        "name": "_receiveNum"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeItems",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_items",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint256",
            "name": "cost"
          },
          {
            "type": "address",
            "name": "receiveNFT"
          },
          {
            "type": "uint256",
            "name": "receiveNum"
          },
          {
            "type": "bool",
            "name": "available"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "changeReceiver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_receiver"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeSupply",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_nft"
      },
      {
        "type": "uint256",
        "name": "_num"
      }
    ],
    "outputs": []
  },
  {
    "name": "disableItems",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_ids"
      }
    ],
    "outputs": []
  },
  {
    "name": "enableItems",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_ids"
      }
    ],
    "outputs": []
  },
  {
    "name": "finishAt",
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
    "name": "itemArrayLength",
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
    "name": "itemLength",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "length"
      }
    ]
  },
  {
    "name": "items",
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
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "cost"
      },
      {
        "type": "address",
        "name": "receiveNFT"
      },
      {
        "type": "uint256",
        "name": "receiveNum"
      },
      {
        "type": "bool",
        "name": "available"
      }
    ]
  },
  {
    "name": "nftSelled",
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
    "name": "nftSupply",
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
    "name": "pendingOwner",
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
    "name": "receiver",
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
    "name": "setFinishAt",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_finishAt"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPendingOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setStartAt",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_startAt"
      }
    ],
    "outputs": []
  },
  {
    "name": "startAt",
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
    "name": "userBuyed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract