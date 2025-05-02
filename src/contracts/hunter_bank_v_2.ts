import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 32990,
  address: '0x3c152aa5c2a654a4e0078c33ed03ff195ce788dc' as const,
  contract_name: 'HunterBankV2',
  display_name: 'Hunter Bank V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744255445,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      }
    ]
  },
  {
    "name": "depositorCount",
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
    "name": "getDeposit",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "secretHash"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "hunterContract"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "bool",
        "name": "swap"
      },
      {
        "type": "address",
        "name": "tokenToSwapTo"
      },
      {
        "type": "bool",
        "name": "exists"
      }
    ]
  },
  {
    "name": "getDepositorCount",
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
    "name": "getHunterContracts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "hunterContracts",
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
    "name": "isHunterContract",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
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
    "name": "receiveFees",
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
      }
    ],
    "outputs": []
  },
  {
    "name": "recordDeposit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "secretHash"
      },
      {
        "type": "address",
        "name": "hunterContract"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "bool",
        "name": "swap"
      },
      {
        "type": "address",
        "name": "tokenToSwapTo"
      },
      {
        "type": "address",
        "name": "depositor"
      }
    ],
    "outputs": []
  },
  {
    "name": "registerHunter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "hunter"
      }
    ],
    "outputs": []
  },
  {
    "name": "tokenFees",
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
    "name": "totalWRONFees",
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
    "name": "updateDepositAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "secretHash"
      },
      {
        "type": "uint256",
        "name": "newAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawFees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
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