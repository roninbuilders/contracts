import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36287,
  address: '0x1fdc7e3a707e2ccb96d44de077dc21a36a2a2c80' as const,
  contract_name: 'MarketAdminPermissionChecker',
  display_name: 'Market Admin Permission Checker',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753097199,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "initialOwner"
      },
      {
        "type": "address",
        "name": "marketAdmin_"
      },
      {
        "type": "address",
        "name": "marketAdminPauseGuardian_"
      }
    ]
  },
  {
    "name": "MarketAdminIsPaused",
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
    "name": "Unauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MarketAdminPaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "caller",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isMarketAdminPaused"
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
    "name": "SetMarketAdmin",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldAdmin",
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
    "name": "SetMarketAdminPauseGuardian",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldPauseGuardian",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newPauseGuardian",
        "indexed": true
      }
    ]
  },
  {
    "name": "checkUpdatePermission",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "callerAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "marketAdmin",
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
    "name": "marketAdminPauseGuardian",
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
    "name": "marketAdminPaused",
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
    "name": "pauseMarketAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setMarketAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newMarketAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMarketAdminPauseGuardian",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newPauseGuardian"
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
    "name": "unpauseMarketAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract