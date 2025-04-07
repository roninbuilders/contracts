import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2154,
  address: '0x64f58013256075ae41ac7c0a8936b7e758892a47' as const,
  contract_name: 'GuardianPendingArray',
  display_name: 'Guardian Pending Array',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1712571299,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_lockable"
      }
    ]
  },
  {
    "name": "GuardianRenounce",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "guardian",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      }
    ]
  },
  {
    "name": "GuardianSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "guardian",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      }
    ]
  },
  {
    "name": "PendingGuardianSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pendingGuardian",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      }
    ]
  },
  {
    "name": "LOCKABLE",
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
    "name": "acceptGuardianship",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_protege"
      }
    ],
    "outputs": []
  },
  {
    "name": "getLockedAssetsOfUsers",
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
        "type": "uint256[]",
        "name": "lockedAssets"
      }
    ]
  },
  {
    "name": "getLockedAssetsOfUsers",
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
        "name": "_maxLen"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "lockedAssets"
      }
    ]
  },
  {
    "name": "getPendingProteges",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_guardian"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "_proteges"
      }
    ]
  },
  {
    "name": "getProtegesFromGuardian",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_guardian"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "proteges"
      }
    ]
  },
  {
    "name": "guardianToUserIndex",
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
    "name": "guardianToUsers",
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
    "name": "guardianUserCount",
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
    "name": "guardians",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "lockMany",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "pendingGuardianArray",
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
    "name": "pendingGuardianUserCount",
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
    "name": "pendingGuardians",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "proposeGuardian",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_guardian"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounce",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_protege"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceAndTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_protege"
      },
      {
        "type": "uint256[]",
        "name": "_tokenIds"
      },
      {
        "type": "address",
        "name": "_recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "unlockMany",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "unlockManyAndTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_tokenIds"
      },
      {
        "type": "address",
        "name": "_recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "userData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "guardian"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract