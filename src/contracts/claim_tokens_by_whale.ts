import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 33467,
  address: '0xec31ef28d6b0ba03ac0f5e37fc5cfd04d9d4c5dc' as const,
  contract_name: 'ClaimTokensByWhale',
  display_name: 'Claim Tokens By Whale',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744737392,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_feeAddress"
      },
      {
        "type": "address",
        "name": "_testerAddress"
      }
    ]
  },
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
    "name": "TokensClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
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
    "name": "TokensExpired",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
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
    "name": "TokensReclaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
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
    "name": "TokensSent",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
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
    "name": "claimFee",
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
    "name": "claimTokens",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_claimIndex"
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
    "name": "getUserClaimsPaginated",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      },
      {
        "type": "uint256",
        "name": "_startIndex"
      },
      {
        "type": "uint256",
        "name": "_pageSize"
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
            "name": "sender"
          },
          {
            "type": "address",
            "name": "recipient"
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
            "type": "string",
            "name": "symbol"
          },
          {
            "type": "string",
            "name": "name"
          },
          {
            "type": "uint256",
            "name": "unlockTime"
          },
          {
            "type": "uint256",
            "name": "expirationTime"
          },
          {
            "type": "uint256",
            "name": "remainingTime"
          },
          {
            "type": "bool",
            "name": "claimed"
          }
        ]
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "lockFee",
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
    "name": "pendingFees",
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
    "name": "reclaimExpiredTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_recipient"
      },
      {
        "type": "uint256",
        "name": "_claimIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "sendTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address[]",
        "name": "_recipients"
      },
      {
        "type": "uint256[]",
        "name": "_amounts"
      },
      {
        "type": "uint256[]",
        "name": "_unlockTimes"
      }
    ],
    "outputs": []
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
    "name": "setTesterAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newTesterAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "testerAddress",
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
    "name": "tokenUsers",
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
        "type": "address"
      }
    ]
  },
  {
    "name": "userClaims",
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
        "type": "address",
        "name": "sender"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "unlockTime"
      },
      {
        "type": "uint256",
        "name": "expirationTime"
      },
      {
        "type": "bool",
        "name": "claimed"
      },
      {
        "type": "uint8",
        "name": "decimals"
      },
      {
        "type": "string",
        "name": "symbol"
      },
      {
        "type": "string",
        "name": "name"
      }
    ]
  },
  {
    "name": "userLockedTokenCount",
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
  },
  {
    "name": "withdrawFees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract