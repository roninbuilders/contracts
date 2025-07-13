import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 32950,
  address: '0x49dd4a9c86b70ba5345772de941d63c9f1c77a90' as const,
  contract_name: 'HunterV4',
  display_name: 'Hunter V4',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744234656,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_name"
      },
      {
        "type": "address[5]",
        "name": "_hunters"
      },
      {
        "type": "address",
        "name": "_hunterTrophy"
      },
      {
        "type": "address",
        "name": "_wron"
      },
      {
        "type": "address",
        "name": "_katanaRouter"
      }
    ]
  },
  {
    "name": "Claimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "claimant",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "destination"
      }
    ]
  },
  {
    "name": "Deposited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "depositor",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "wronAmount"
      },
      {
        "type": "uint256",
        "name": "claimableAmount"
      },
      {
        "type": "bytes32",
        "name": "secretHash"
      },
      {
        "type": "uint256",
        "name": "feePercentage"
      }
    ]
  },
  {
    "name": "KATANA_ROUTER",
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
    "name": "MAX_FEE_PERCENTAGE",
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
    "name": "WRON",
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
    "name": "claim",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "secret"
      },
      {
        "type": "address",
        "name": "destination"
      }
    ],
    "outputs": []
  },
  {
    "name": "deposit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "secretHash"
      },
      {
        "type": "uint256",
        "name": "feePercentage"
      }
    ],
    "outputs": []
  },
  {
    "name": "depositToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes32",
        "name": "secretHash"
      },
      {
        "type": "uint256",
        "name": "feePercentage"
      }
    ],
    "outputs": []
  },
  {
    "name": "deposits",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "claimableWron"
      },
      {
        "type": "bytes32",
        "name": "secretHash"
      }
    ]
  },
  {
    "name": "hunterTrophy",
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
    "name": "hunters",
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
    "name": "initialized",
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
    "name": "name",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "receiveWron",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "setHunters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[5]",
        "name": "_hunters"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferWron",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferWronToFactory",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "wronBalance",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract