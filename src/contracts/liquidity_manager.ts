import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 7559,
  address: '0x13a9a85ba9c827b6cda0d978de05c47544f0eacb' as const,
  contract_name: 'LiquidityManager',
  display_name: 'Liquidity Manager',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1737419818,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "Forbidden",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAmountEth",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAmountToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidMinPercentageBase",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "version"
      }
    ]
  },
  {
    "name": "LiquidityAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amountToken"
      },
      {
        "type": "uint256",
        "name": "amountETH"
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "pair"
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
    "name": "addLiquidityForToken",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amountToken"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amountToken"
      },
      {
        "type": "uint256",
        "name": "_amountETH"
      },
      {
        "type": "uint256",
        "name": "_lpAmount"
      }
    ]
  },
  {
    "name": "checkHasLiquidity",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "computeUniV2Pair",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenA"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pair"
      },
      {
        "type": "bool",
        "name": "exists"
      }
    ]
  },
  {
    "name": "factory",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_uniswapV2Router"
      }
    ],
    "outputs": []
  },
  {
    "name": "mainContract",
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
    "name": "router",
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
    "name": "setMainContractAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_mainContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinPercentageBase",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_percentageBase"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRouter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_router"
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract