import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36271,
  address: '0xd11a5b07f42933c63083feada443e07aa76e3625' as const,
  contract_name: 'TokenHouse',
  display_name: 'Token House',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753073028,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "manager_"
      }
    ]
  },
  {
    "name": "HouseLost",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "GAME_ID"
      },
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "loss"
      }
    ]
  },
  {
    "name": "HouseWon",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "GAME_ID"
      },
      {
        "type": "uint256",
        "name": "profit"
      }
    ]
  },
  {
    "name": "Transfer",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "ReflectionsFromContractBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "__init__",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address",
        "name": "manager_"
      }
    ],
    "outputs": []
  },
  {
    "name": "__init__",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "manager_"
      }
    ],
    "outputs": []
  },
  {
    "name": "balanceOf",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "batchGameStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "GAME_IDs"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "batchGetPriceChange",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "startIndex"
      },
      {
        "type": "uint256",
        "name": "endIndex"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "calculatePrice",
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
    "name": "clone",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "decimals",
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
    "name": "deposit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "disableCloning",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "enableCloning",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "exitFee",
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
    "name": "gameStats",
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
        "name": "totalProfitIn"
      },
      {
        "type": "uint256",
        "name": "totalDebtOut"
      }
    ]
  },
  {
    "name": "getApproxAverageEvenlySplitPriceChanges",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "numDataPoints"
      },
      {
        "type": "uint256",
        "name": "averageCount"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getAverageTimeAndPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "indexes"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getEvenlySplitPriceChanges",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "numDataPoints"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getListOfPriceChanges",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "indexes"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getPriceChange",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPriceChangeCount",
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
    "name": "getTotalProfits",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "int256"
      }
    ]
  },
  {
    "name": "hardSetResolutionsPending",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "resolutionsPending_"
      }
    ],
    "outputs": []
  },
  {
    "name": "houseProfit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "GAME_ID"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "initialized",
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
    "name": "lockTime",
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
    "name": "manager",
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
    "name": "maxPayout",
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
    "name": "maxPayoutPerGame",
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
    "name": "name",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
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
    "name": "payout",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "GAME_ID"
      },
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ],
    "outputs": []
  },
  {
    "name": "randomRequestResolved",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "randomRequested",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "recoverETH",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "recoverForeignToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": []
  },
  {
    "name": "reflectPercentage",
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
    "name": "resolutionsPending",
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
    "name": "resume",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setExitFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "exitFee_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLockTime",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newLockTime"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxPayoutPerGame",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMaxPayout"
      }
    ],
    "outputs": []
  },
  {
    "name": "setReflectionPercentage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newPercent"
      }
    ],
    "outputs": []
  },
  {
    "name": "symbol",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "timeUntilUnlock",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "token",
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
    "name": "tokenToContractBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "totalShares",
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
    "name": "totalSupply",
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
    "name": "userInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "balance"
      },
      {
        "type": "uint256",
        "name": "totalStaked"
      },
      {
        "type": "uint256",
        "name": "totalWithdrawn"
      },
      {
        "type": "uint256",
        "name": "unlockTime"
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
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "withdrawFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract