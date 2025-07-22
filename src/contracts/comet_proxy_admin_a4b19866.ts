import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36290,
  address: '0x3da3a88c419c4d2805101423907ae801a4b19866' as const,
  contract_name: 'CometProxyAdmin',
  display_name: 'Comet Proxy Admin',
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
      }
    ]
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
    "name": "SetMarketAdminPermissionChecker",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldMarketAdminPermissionChecker",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newMarketAdminPermissionChecker",
        "indexed": true
      }
    ]
  },
  {
    "name": "changeProxyAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "proxy"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "deployAndUpgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "configuratorProxy"
      },
      {
        "type": "address",
        "name": "cometProxy"
      }
    ],
    "outputs": []
  },
  {
    "name": "deployUpgradeToAndCall",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "configuratorProxy"
      },
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "getProxyAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "proxy"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getProxyImplementation",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "proxy"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "marketAdminPermissionChecker",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setMarketAdminPermissionChecker",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newMarketAdminPermissionChecker"
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
    "name": "upgrade",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "proxy"
      },
      {
        "type": "address",
        "name": "implementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "proxy"
      },
      {
        "type": "address",
        "name": "implementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract