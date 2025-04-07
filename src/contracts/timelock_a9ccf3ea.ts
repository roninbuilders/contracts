import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2481,
  address: '0xd297a0cd328e299283e3e7dc5936b173a9ccf3ea' as const,
  contract_name: 'Timelock',
  display_name: 'Timelock',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1715762644,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "minDelay"
      },
      {
        "type": "address[]",
        "name": "proposers"
      },
      {
        "type": "address[]",
        "name": "executors"
      },
      {
        "type": "address",
        "name": "admin"
      }
    ]
  },
  {
    "name": "CallExecuted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "index",
        "indexed": true
      },
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ]
  },
  {
    "name": "CallSalt",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "salt"
      }
    ]
  },
  {
    "name": "CallScheduled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "index",
        "indexed": true
      },
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "bytes32",
        "name": "predecessor"
      },
      {
        "type": "uint256",
        "name": "delay"
      }
    ]
  },
  {
    "name": "Cancelled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id",
        "indexed": true
      }
    ]
  },
  {
    "name": "MinDelayChange",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldDuration"
      },
      {
        "type": "uint256",
        "name": "newDuration"
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
    "name": "CANCELLER_ROLE",
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
    "name": "EXECUTOR_ROLE",
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
    "name": "PROPOSER_ROLE",
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
    "name": "TIMELOCK_ADMIN_ROLE",
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
    "name": "cancel",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id"
      }
    ],
    "outputs": []
  },
  {
    "name": "execute",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "payload"
      },
      {
        "type": "bytes32",
        "name": "predecessor"
      },
      {
        "type": "bytes32",
        "name": "salt"
      }
    ],
    "outputs": []
  },
  {
    "name": "executeBatch",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address[]",
        "name": "targets"
      },
      {
        "type": "uint256[]",
        "name": "values"
      },
      {
        "type": "bytes[]",
        "name": "payloads"
      },
      {
        "type": "bytes32",
        "name": "predecessor"
      },
      {
        "type": "bytes32",
        "name": "salt"
      }
    ],
    "outputs": []
  },
  {
    "name": "getMinDelay",
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
    "name": "getTimestamp",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "hashOperation",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "bytes32",
        "name": "predecessor"
      },
      {
        "type": "bytes32",
        "name": "salt"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "hashOperationBatch",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "address[]",
        "name": "targets"
      },
      {
        "type": "uint256[]",
        "name": "values"
      },
      {
        "type": "bytes[]",
        "name": "payloads"
      },
      {
        "type": "bytes32",
        "name": "predecessor"
      },
      {
        "type": "bytes32",
        "name": "salt"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "isOperation",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isOperationDone",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isOperationPending",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isOperationReady",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "onERC1155BatchReceived",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "onERC1155Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
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
    "name": "schedule",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "bytes32",
        "name": "predecessor"
      },
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "uint256",
        "name": "delay"
      }
    ],
    "outputs": []
  },
  {
    "name": "scheduleBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "targets"
      },
      {
        "type": "uint256[]",
        "name": "values"
      },
      {
        "type": "bytes[]",
        "name": "payloads"
      },
      {
        "type": "bytes32",
        "name": "predecessor"
      },
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "uint256",
        "name": "delay"
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
  },
  {
    "name": "updateDelay",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newDelay"
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