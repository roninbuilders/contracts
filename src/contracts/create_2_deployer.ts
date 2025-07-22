import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36286,
  address: '0x15b63535cf60b958d3552a75578f89695ce1bc91' as const,
  contract_name: 'Create2Deployer',
  display_name: 'Create 2 Deployer',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753096848,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "Create2EmptyBytecode",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedDeployment",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "balance"
      },
      {
        "type": "uint256",
        "name": "needed"
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
    "name": "computeAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "bytes32",
        "name": "codeHash"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "computeAddressWithDeployer",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "bytes32",
        "name": "codeHash"
      },
      {
        "type": "address",
        "name": "deployer"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "deploy",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "bytes",
        "name": "code"
      }
    ],
    "outputs": []
  },
  {
    "name": "deployERC1820Implementer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes32",
        "name": "salt"
      }
    ],
    "outputs": []
  },
  {
    "name": "killCreate2Deployer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "payoutAddress"
      }
    ],
    "outputs": []
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
    "name": "pause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
    "name": "unpause",
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