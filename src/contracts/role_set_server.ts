import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27677,
  address: '0x00000000d7b37203f54e165fb204b57c30d15835' as const,
  contract_name: 'RoleSetServer',
  display_name: 'Role Set Server',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742222984,
  abi: [
  {
    "name": "RoleSetServer__ArrayLengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RoleSetServer__CallerMustBeAdmin",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RoleSetServer__ClearableMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RoleSetServer__InvalidAdminTransfer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RoleSetServer__RoleSetAlreadyCreated",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RoleSetServer__RoleUnclearable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RoleSetAdminPendingTransfer",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "roleSet",
        "indexed": true
      },
      {
        "type": "address",
        "name": "pendingAdmin",
        "indexed": true
      },
      {
        "type": "uint96",
        "name": "allowedTransferTimestamp"
      }
    ]
  },
  {
    "name": "RoleSetAdminUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "roleSet",
        "indexed": true
      },
      {
        "type": "address",
        "name": "prevAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newRoleHolder",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "clearable"
      }
    ]
  },
  {
    "name": "ADMIN_TRANSFER_DELAY",
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
    "name": "acceptRoleSetAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "roleSet"
      }
    ],
    "outputs": []
  },
  {
    "name": "createRoleSet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "roleSet"
      }
    ]
  },
  {
    "name": "getRoleHolder",
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
        "type": "address",
        "name": "roleHolder"
      }
    ]
  },
  {
    "name": "revokeRoleSetAdminTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "roleSet"
      }
    ],
    "outputs": []
  },
  {
    "name": "roleSetAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "roleSet"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "roleSetAdmin"
      }
    ]
  },
  {
    "name": "roleSetPendingAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "roleSet"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pendingAdmin"
      },
      {
        "type": "uint96",
        "name": "allowedTransferTimestamp"
      }
    ]
  },
  {
    "name": "setRoleHolder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "roleSet"
      },
      {
        "type": "bytes32",
        "name": "baseRole"
      },
      {
        "type": "address",
        "name": "newRoleHolder"
      },
      {
        "type": "bool",
        "name": "clearable"
      },
      {
        "type": "address[]",
        "name": "clients"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRoleHolders",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "roleSet"
      },
      {
        "type": "bytes32[]",
        "name": "baseRoles"
      },
      {
        "type": "address[]",
        "name": "newRoleHolders"
      },
      {
        "type": "bool[]",
        "name": "clearable"
      },
      {
        "type": "address[][]",
        "name": "clients"
      }
    ],
    "outputs": []
  },
  {
    "name": "syncClient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "roles"
      },
      {
        "type": "address",
        "name": "client"
      }
    ],
    "outputs": []
  },
  {
    "name": "syncClients",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "roles"
      },
      {
        "type": "address[][]",
        "name": "clients"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferRoleSetAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "roleSet"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract