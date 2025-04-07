import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25800,
  address: '0x1ef26361a270c3b055069172c341bd1525b34fc6' as const,
  contract_name: 'JumpRateModelV2',
  display_name: 'Jump Rate Model V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1706725306,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "baseRatePerYear"
      },
      {
        "type": "uint256",
        "name": "multiplierPerYear"
      },
      {
        "type": "uint256",
        "name": "jumpMultiplierPerYear"
      },
      {
        "type": "uint256",
        "name": "kink_"
      },
      {
        "type": "address",
        "name": "owner_"
      }
    ]
  },
  {
    "name": "NewAdmin",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "previousAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewInterestParams",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "baseRatePerBlock"
      },
      {
        "type": "uint256",
        "name": "multiplierPerBlock"
      },
      {
        "type": "uint256",
        "name": "jumpMultiplierPerBlock"
      },
      {
        "type": "uint256",
        "name": "kink"
      }
    ]
  },
  {
    "name": "baseRatePerBlock",
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
    "name": "blocksPerYear",
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
    "name": "getBorrowRate",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "cash"
      },
      {
        "type": "uint256",
        "name": "borrows"
      },
      {
        "type": "uint256",
        "name": "reserves"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getSupplyRate",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "cash"
      },
      {
        "type": "uint256",
        "name": "borrows"
      },
      {
        "type": "uint256",
        "name": "reserves"
      },
      {
        "type": "uint256",
        "name": "reserveFactorMantissa"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "jumpMultiplierPerBlock",
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
    "name": "kink",
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
    "name": "multiplierPerBlock",
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
    "name": "setAdmin",
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
    "name": "updateBlocksPerYear",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "blocksPerYear_"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateJumpRateModel",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "baseRatePerYear"
      },
      {
        "type": "uint256",
        "name": "multiplierPerYear"
      },
      {
        "type": "uint256",
        "name": "jumpMultiplierPerYear"
      },
      {
        "type": "uint256",
        "name": "kink_"
      }
    ],
    "outputs": []
  },
  {
    "name": "utilizationRate",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256",
        "name": "cash"
      },
      {
        "type": "uint256",
        "name": "borrows"
      },
      {
        "type": "uint256",
        "name": "reserves"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract