import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37609,
  address: '0x408ce225520879ad3517f7f6c1b7bf16558b84c9' as const,
  contract_name: 'SimpleTopUp',
  display_name: 'Simple Top Up',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1761323116,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_treasury"
      },
      {
        "type": "address[]",
        "name": "_managers"
      }
    ]
  },
  {
    "name": "InvalidAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidArrayLengths",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTransfer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotManager",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ManagerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "manager",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isManager"
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
    "name": "TokenSettingsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "minTopUpAmount"
      },
      {
        "type": "bool",
        "name": "isEnabled"
      }
    ]
  },
  {
    "name": "TopUp",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "userAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "paymentTokenAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "paymentTokenAmount"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ]
  },
  {
    "name": "TreasuryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newTreasury",
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
    "name": "lifetimeTopUps",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "userAddress"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "managers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "manager"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isManager"
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
    "name": "rescueERC20",
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
    "name": "setManagers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_managers"
      },
      {
        "type": "bool[]",
        "name": "_statuses"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTokenSettings",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_tokenAddresses"
      },
      {
        "type": "uint256[]",
        "name": "_minTopUpAmounts"
      },
      {
        "type": "bool[]",
        "name": "_areEnabled"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_treasury"
      }
    ],
    "outputs": []
  },
  {
    "name": "togglePause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_pauseState"
      }
    ],
    "outputs": []
  },
  {
    "name": "toggleTokenEnabled",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_tokenAddresses"
      },
      {
        "type": "bool[]",
        "name": "_areEnabled"
      }
    ],
    "outputs": []
  },
  {
    "name": "tokenSettings",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "minTopUpAmount"
      },
      {
        "type": "bool",
        "name": "isEnabled"
      }
    ]
  },
  {
    "name": "topUp",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_userAddress"
      },
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "bytes",
        "name": "_data"
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
    "name": "treasury",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract