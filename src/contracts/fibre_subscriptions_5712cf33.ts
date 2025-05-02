import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 26055,
  address: '0x1aac8e59c81cf9c90f8b6faf7c6c487f5712cf33' as const,
  contract_name: 'FibreSubscriptions',
  display_name: 'Fibre Subscriptions',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1740739588,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_feeAddress"
      }
    ]
  },
  {
    "name": "FeeAddressUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldFeeAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newFeeAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "SubscriptionCreated",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "discordId"
      },
      {
        "type": "uint256",
        "name": "expirationTime"
      }
    ]
  },
  {
    "name": "SubscriptionExtended",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "discordId"
      },
      {
        "type": "uint256",
        "name": "newExpirationTime"
      }
    ]
  },
  {
    "name": "SubscriptionTierAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "uint256",
        "name": "duration"
      }
    ]
  },
  {
    "name": "SubscriptionTierStatusChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "active"
      }
    ]
  },
  {
    "name": "SubscriptionTierUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "uint256",
        "name": "duration"
      }
    ]
  },
  {
    "name": "activeSubscriptionsCount",
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
    "name": "addSubscriptionTier",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_price"
      },
      {
        "type": "uint256",
        "name": "_duration"
      },
      {
        "type": "string",
        "name": "_name"
      }
    ],
    "outputs": []
  },
  {
    "name": "createSubscriptionByOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "discordId"
      },
      {
        "type": "uint256",
        "name": "duration"
      },
      {
        "type": "string",
        "name": "tierName"
      }
    ],
    "outputs": []
  },
  {
    "name": "feeAddress",
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
    "name": "getActiveSubscriptionsCount",
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
    "name": "getCurrentSubscriptionTier",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "discordId"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "getRemainingTime",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "discordId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getSubscriptionTier",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tierId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "uint256",
        "name": "duration"
      },
      {
        "type": "bool",
        "name": "active"
      },
      {
        "type": "string",
        "name": "name"
      }
    ]
  },
  {
    "name": "getSubscriptionTiersCount",
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
    "name": "getTotalSubscriptions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "discordId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "isSubscribed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "discordId"
      }
    ],
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
    "name": "setFeeAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newFeeAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSubscriptionTierStatus",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tierId"
      },
      {
        "type": "bool",
        "name": "_active"
      }
    ],
    "outputs": []
  },
  {
    "name": "subscribe",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "discordId"
      },
      {
        "type": "uint256",
        "name": "tierId"
      }
    ],
    "outputs": []
  },
  {
    "name": "subscriptionTiers",
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
        "name": "duration"
      },
      {
        "type": "bool",
        "name": "active"
      },
      {
        "type": "string",
        "name": "name"
      }
    ]
  },
  {
    "name": "subscriptions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "expirationTime"
      },
      {
        "type": "uint256",
        "name": "totalSubscriptions"
      },
      {
        "type": "string",
        "name": "currentTierName"
      }
    ]
  },
  {
    "name": "updateSubscriptionTier",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tierId"
      },
      {
        "type": "uint256",
        "name": "_price"
      },
      {
        "type": "uint256",
        "name": "_duration"
      },
      {
        "type": "string",
        "name": "_name"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract