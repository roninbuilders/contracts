import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4447,
  address: '0x52937be1eeef634c2efbaca2930ac987ea04ffa1' as const,
  contract_name: 'KalodiumGacha',
  display_name: 'Kalodium Gacha',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1728416712,
  abi: [
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
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
    "name": "allowedPlayGacha",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "_enabled"
      }
    ]
  },
  {
    "name": "batchPlayedGacha",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "kalodiumUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_manager",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_newKalodium"
      }
    ]
  },
  {
    "name": "playedGacha",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_price"
      }
    ]
  },
  {
    "name": "priceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_manager",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_newPrice"
      }
    ]
  },
  {
    "name": "redeemAmountUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_manager",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_newPrice"
      }
    ]
  },
  {
    "name": "redeemedDaily",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_unixTs"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ]
  },
  {
    "name": "addDelegatedBurner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_account"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchPlayGacha",
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
    "name": "batchPlayWaitTime",
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
    "name": "dailyRedeemAmount",
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
    "name": "delegatePlayGacha",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_account"
      }
    ],
    "outputs": []
  },
  {
    "name": "delegatedBurners",
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
    "name": "gachaPrice",
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
        "type": "uint256",
        "name": "_gachaPrice"
      },
      {
        "type": "uint256",
        "name": "_dailyRedeemAmount"
      },
      {
        "type": "address",
        "name": "_kalodiumAddress"
      },
      {
        "type": "bool",
        "name": "_playGachaEnabled"
      }
    ],
    "outputs": []
  },
  {
    "name": "kalodium",
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
    "name": "lastBatchBurnTs",
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
    "name": "lastClaimTs",
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
    "name": "maxBatchBurnAmount",
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
    "name": "minBatchBurnAmount",
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
    "name": "minKaloBalanceForBurn",
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
    "name": "playGacha",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "playGachaEnabled",
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
    "name": "redeemDaily",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "removeDelegatedBurner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_account"
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
    "name": "setBatchPlayWaitTime",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newWaitTime"
      }
    ],
    "outputs": []
  },
  {
    "name": "setDailyRedeemAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "setKalodiumAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxBatchBurnAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinBatchBurnAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinKaloBalanceForBurn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPlayGachaEnabled",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_enabled"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_price"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract