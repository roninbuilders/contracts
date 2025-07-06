import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36005,
  address: '0x4c4abcdd1de6f1ae55f9d7abed037e2ca1030fc6' as const,
  contract_name: 'EliteTokenPublicSale',
  display_name: 'Elite Token Public Sale',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751703063,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_eliteTokenAddress"
      },
      {
        "type": "address",
        "name": "_usdcTokenAddress"
      },
      {
        "type": "uint256",
        "name": "_saleStartTime"
      },
      {
        "type": "uint256",
        "name": "_saleEndTime"
      },
      {
        "type": "uint256",
        "name": "_elitePricePerUSDC"
      },
      {
        "type": "uint256",
        "name": "_maxEliteToSell"
      },
      {
        "type": "uint256",
        "name": "_minPurchaseUSDC"
      },
      {
        "type": "uint256",
        "name": "_maxPurchaseUSDC"
      }
    ]
  },
  {
    "name": "EnforcedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpectedPause",
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
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ElitePurchased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "usdcPaid"
      },
      {
        "type": "uint256",
        "name": "eliteReceived"
      }
    ]
  },
  {
    "name": "FundsWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "Paused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "SaleParametersUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newStartTime"
      },
      {
        "type": "uint256",
        "name": "newEndTime"
      },
      {
        "type": "uint256",
        "name": "newPrice"
      },
      {
        "type": "uint256",
        "name": "newMaxElite"
      },
      {
        "type": "uint256",
        "name": "newMinPurchase"
      },
      {
        "type": "uint256",
        "name": "newMaxPurchase"
      }
    ]
  },
  {
    "name": "SalePaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true
      }
    ]
  },
  {
    "name": "SaleUnpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "buyElite",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "usdcAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "elitePricePerUSDC",
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
    "name": "eliteToken",
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
    "name": "maxEliteToSell",
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
    "name": "maxPurchaseUSDC",
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
    "name": "minPurchaseUSDC",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "saleEndTime",
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
    "name": "saleStartTime",
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
    "name": "totalEliteSold",
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "updateSaleParameters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newStartTime"
      },
      {
        "type": "uint256",
        "name": "_newEndTime"
      },
      {
        "type": "uint256",
        "name": "_newElitePricePerUSDC"
      },
      {
        "type": "uint256",
        "name": "_newMaxEliteToSell"
      },
      {
        "type": "uint256",
        "name": "_newMinPurchaseUSDC"
      },
      {
        "type": "uint256",
        "name": "_newMaxPurchaseUSDC"
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
    "name": "withdrawUSDC",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract