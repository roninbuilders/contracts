import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36263,
  address: '0xaa3665a1261560e4f15ad540e35df571659902aa' as const,
  contract_name: 'House',
  display_name: 'House',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753070724,
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
    "name": "Approval",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "spender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "Deposit",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "depositor"
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "Withdraw",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "withdrawer"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "MIN_PRICE",
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
    "name": "RONToContractBalance",
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
    "name": "allowance",
    "type": "function",
    "stateMutability": "pure",
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
  },
  {
    "name": "approve",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
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
    "name": "decimals",
    "type": "function",
    "stateMutability": "pure",
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
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "enableInGamePausing",
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
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "GAME_ID"
      }
    ],
    "outputs": []
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
    "stateMutability": "pure",
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
    "name": "publicStaking",
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
    "name": "recoverForeignToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
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
    "name": "setEnableInGamePausing",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "isEnabled"
      }
    ],
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
    "name": "setFeeExemption",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "bool",
        "name": "isExempt"
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
    "name": "setMaxContribution",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "max"
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
    "name": "setMinPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "percentOfCurrent"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPublicStaking",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "isPublic"
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
    "stateMutability": "pure",
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
    "name": "transfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "transferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
      },
      {
        "type": "bool",
        "name": "isFeeExempt"
      },
      {
        "type": "uint256",
        "name": "maxContribution"
      }
    ]
  },
  {
    "name": "volumeIn",
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
    "name": "volumeOut",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract