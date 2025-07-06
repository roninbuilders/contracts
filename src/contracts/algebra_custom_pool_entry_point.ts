import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35325,
  address: '0x4a3bc48c156384f9564fd65a53a2f3d534d8f2b7' as const,
  contract_name: 'AlgebraCustomPoolEntryPoint',
  display_name: 'Algebra Custom Pool Entry Point',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1749134293,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_factory"
      }
    ]
  },
  {
    "name": "afterCreatePoolHook",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "plugin"
      },
      {
        "type": "address",
        "name": "pool"
      },
      {
        "type": "address",
        "name": "deployer"
      }
    ],
    "outputs": []
  },
  {
    "name": "beforeCreatePoolHook",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "pool"
      },
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "address",
        "name": "deployer"
      },
      {
        "type": "address",
        "name": "token0"
      },
      {
        "type": "address",
        "name": "token1"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "createCustomPool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "deployer"
      },
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "address",
        "name": "tokenA"
      },
      {
        "type": "address",
        "name": "tokenB"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "customPool"
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
    "name": "setFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "pool"
      },
      {
        "type": "uint16",
        "name": "newFee"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPlugin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "pool"
      },
      {
        "type": "address",
        "name": "newPluginAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPluginConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "pool"
      },
      {
        "type": "uint8",
        "name": "newConfig"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTickSpacing",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "pool"
      },
      {
        "type": "int24",
        "name": "newTickSpacing"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract