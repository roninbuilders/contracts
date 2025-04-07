import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27678,
  address: '0x00000000b77ae1fe200078d60f382e962f472e23' as const,
  contract_name: 'RoleServer',
  display_name: 'Role Server',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742222690,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      }
    ]
  },
  {
    "name": "RoleServer__ArrayLengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RoleServer__CallerMustBeAdmin",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RoleServer__ZeroAddress",
    "type": "error",
    "inputs": []
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
    "name": "setRoleHolder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "roleHolder"
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
        "type": "bytes32[]",
        "name": "roles"
      },
      {
        "type": "address[]",
        "name": "roleHolders"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract