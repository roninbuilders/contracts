import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36038,
  address: '0x2a61f5545ddfa2ea025238309895ec79b453e0e4' as const,
  contract_name: 'BasePluginV1Factory',
  display_name: 'Base Plugin V1 Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751631463,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_algebraFactory"
      }
    ]
  },
  {
    "name": "DefaultFeeConfiguration",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "newConfig",
        "components": [
          {
            "type": "uint16",
            "name": "alpha1"
          },
          {
            "type": "uint16",
            "name": "alpha2"
          },
          {
            "type": "uint32",
            "name": "beta1"
          },
          {
            "type": "uint32",
            "name": "beta2"
          },
          {
            "type": "uint16",
            "name": "gamma1"
          },
          {
            "type": "uint16",
            "name": "gamma2"
          },
          {
            "type": "uint16",
            "name": "baseFee"
          }
        ]
      }
    ]
  },
  {
    "name": "FarmingAddress",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newFarmingAddress"
      }
    ]
  },
  {
    "name": "ALGEBRA_BASE_PLUGIN_FACTORY_ADMINISTRATOR",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "afterCreatePoolHook",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "address"
      }
    ],
    "outputs": []
  },
  {
    "name": "algebraFactory",
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
    "name": "beforeCreatePoolHook",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "pool"
      },
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "createPluginForExistingPool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token0"
      },
      {
        "type": "address",
        "name": "token1"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "defaultFeeConfiguration",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16",
        "name": "alpha1"
      },
      {
        "type": "uint16",
        "name": "alpha2"
      },
      {
        "type": "uint32",
        "name": "beta1"
      },
      {
        "type": "uint32",
        "name": "beta2"
      },
      {
        "type": "uint16",
        "name": "gamma1"
      },
      {
        "type": "uint16",
        "name": "gamma2"
      },
      {
        "type": "uint16",
        "name": "baseFee"
      }
    ]
  },
  {
    "name": "farmingAddress",
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
    "name": "pluginByPool",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "poolAddress"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pluginAddress"
      }
    ]
  },
  {
    "name": "setDefaultFeeConfiguration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "newConfig",
        "components": [
          {
            "type": "uint16",
            "name": "alpha1"
          },
          {
            "type": "uint16",
            "name": "alpha2"
          },
          {
            "type": "uint32",
            "name": "beta1"
          },
          {
            "type": "uint32",
            "name": "beta2"
          },
          {
            "type": "uint16",
            "name": "gamma1"
          },
          {
            "type": "uint16",
            "name": "gamma2"
          },
          {
            "type": "uint16",
            "name": "baseFee"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setFarmingAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newFarmingAddress"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract