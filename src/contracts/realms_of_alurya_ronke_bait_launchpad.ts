import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 33911,
  address: '0xf1f415abf36dc04c3fe59a1638383f5258d22522' as const,
  contract_name: 'RealmsOfAluryaRonkeBaitLaunchpad',
  display_name: 'Realms Of Alurya Ronke Bait Launchpad',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1745393079,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "items"
      },
      {
        "type": "uint256",
        "name": "itemId"
      }
    ]
  },
  {
    "name": "AccessControlBadConfirmation",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AccessControlEnforcedDefaultAdminDelay",
    "type": "error",
    "inputs": [
      {
        "type": "uint48",
        "name": "schedule"
      }
    ]
  },
  {
    "name": "AccessControlEnforcedDefaultAdminRules",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AccessControlInvalidDefaultAdmin",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "defaultAdmin"
      }
    ]
  },
  {
    "name": "AccessControlUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "neededRole"
      }
    ]
  },
  {
    "name": "SafeCastOverflowedUintDowncast",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "bits"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "DefaultAdminDelayChangeCanceled",
    "type": "event",
    "inputs": []
  },
  {
    "name": "DefaultAdminDelayChangeScheduled",
    "type": "event",
    "inputs": [
      {
        "type": "uint48",
        "name": "newDelay"
      },
      {
        "type": "uint48",
        "name": "effectSchedule"
      }
    ]
  },
  {
    "name": "DefaultAdminTransferCanceled",
    "type": "event",
    "inputs": []
  },
  {
    "name": "DefaultAdminTransferScheduled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin",
        "indexed": true
      },
      {
        "type": "uint48",
        "name": "acceptSchedule"
      }
    ]
  },
  {
    "name": "RoleAdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "previousAdminRole",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "newAdminRole",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleGranted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleRevoked",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "DEFAULT_ADMIN_ROLE",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "LAUNCHPAD_ROLE",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "acceptDefaultAdminTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "beginDefaultAdminTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "cancelDefaultAdminTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "changeDefaultAdminDelay",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint48",
        "name": "newDelay"
      }
    ],
    "outputs": []
  },
  {
    "name": "defaultAdmin",
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
    "name": "defaultAdminDelay",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint48"
      }
    ]
  },
  {
    "name": "defaultAdminDelayIncreaseWait",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint48"
      }
    ]
  },
  {
    "name": "getRoleAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "grantRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "hasRole",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "mintLaunchpad",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "bytes",
        "name": "extraData"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "mintedTokenIds"
      },
      {
        "type": "uint256[]",
        "name": "mintedAmounts"
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
    "name": "pendingDefaultAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "newAdmin"
      },
      {
        "type": "uint48",
        "name": "schedule"
      }
    ]
  },
  {
    "name": "pendingDefaultAdminDelay",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint48",
        "name": "newDelay"
      },
      {
        "type": "uint48",
        "name": "schedule"
      }
    ]
  },
  {
    "name": "renounceRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "revokeRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "rollbackDefaultAdminDelay",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setItemId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "itemId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setItems",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "items"
      }
    ],
    "outputs": []
  },
  {
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract