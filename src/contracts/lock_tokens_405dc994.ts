import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25514,
  address: '0x4acfea67832a32ea284c8e1a516827de405dc994' as const,
  contract_name: 'LockTokens',
  display_name: 'Lock Tokens',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739347027,
  abi: [
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SafeERC20FailedOperation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "BatchLockCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "numberOfLocks"
      }
    ]
  },
  {
    "name": "LockDurationModified",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "lockIndex"
      },
      {
        "type": "uint256",
        "name": "newUnlockTime"
      }
    ]
  },
  {
    "name": "TokensLocked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "unlockTime"
      }
    ]
  },
  {
    "name": "TokensWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "MAX_LOCKS_PER_USER",
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
    "name": "batchLockTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_tokens"
      },
      {
        "type": "uint256[]",
        "name": "_amounts"
      },
      {
        "type": "uint8[]",
        "name": "_months"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAllLockedTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint8",
            "name": "decimals"
          },
          {
            "type": "uint256",
            "name": "unlockTime"
          },
          {
            "type": "uint256",
            "name": "remainingTime"
          }
        ]
      }
    ]
  },
  {
    "name": "getLocksForToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint8",
            "name": "decimals"
          },
          {
            "type": "uint256",
            "name": "unlockTime"
          },
          {
            "type": "uint256",
            "name": "remainingTime"
          }
        ]
      }
    ]
  },
  {
    "name": "getRemainingLockTime",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      },
      {
        "type": "uint256",
        "name": "_lockIndex"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getUserLocks",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "unlockTime"
          }
        ]
      }
    ]
  },
  {
    "name": "getUserLocksInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint8",
            "name": "decimals"
          },
          {
            "type": "uint256",
            "name": "unlockTime"
          },
          {
            "type": "uint256",
            "name": "remainingTime"
          }
        ]
      }
    ]
  },
  {
    "name": "hasLockedTokens",
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
    "name": "isLocked",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      },
      {
        "type": "uint256",
        "name": "_lockIndex"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "lockTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "uint8",
        "name": "_months"
      }
    ],
    "outputs": []
  },
  {
    "name": "lockingUsers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "userLocks",
    "type": "function",
    "stateMutability": "view",
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
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "unlockTime"
      }
    ]
  },
  {
    "name": "withdrawTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_lockIndex"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract