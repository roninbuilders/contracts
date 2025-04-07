import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3311,
  address: '0x23e972baea76d3efe49a381f372f113bb7917cd8' as const,
  contract_name: 'GoldenCoinShop',
  display_name: 'Golden Coin Shop',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1721399862,
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
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "cost"
      },
      {
        "type": "uint256",
        "name": "reward"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "DailyGoldenLimitChanged",
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
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "cost"
      },
      {
        "type": "uint256",
        "name": "reward"
      },
      {
        "type": "bool",
        "name": "available"
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
        "name": "_tokens"
      },
      {
        "type": "uint256[]",
        "name": "_costs"
      },
      {
        "type": "uint256[]",
        "name": "_rewards"
      },
      {
        "type": "uint256[]",
        "name": "_dailyLimits"
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
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "cost"
          },
          {
            "type": "uint256",
            "name": "reward"
          },
          {
            "type": "uint256",
            "name": "dailyLimit"
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
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_cost"
      },
      {
        "type": "uint256",
        "name": "_reward"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeDailyGoldenLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_limit"
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
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "cost"
          },
          {
            "type": "uint256",
            "name": "reward"
          },
          {
            "type": "uint256",
            "name": "dailyLimit"
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
    "name": "changeReciever",
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
    "name": "dailyGoldenLimit",
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
    "name": "globalBuyed",
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
    "name": "globalDailyBuyed",
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
    "name": "globalLast",
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
    "name": "interval",
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
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "cost"
      },
      {
        "type": "uint256",
        "name": "reward"
      },
      {
        "type": "uint256",
        "name": "dailyLimit"
      },
      {
        "type": "bool",
        "name": "available"
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
        "type": "uint256"
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
  },
  {
    "name": "userDailyBuyed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_id"
      },
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "userLast",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
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