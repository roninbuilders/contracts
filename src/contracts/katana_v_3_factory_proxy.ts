import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5241,
  address: '0x1f0b70d9a137e3caef0ceacd312bc5f81da0cc0c' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Katana V3 Factory Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xcbb65f6e545130624bb126fae28bd3181060378a',
  created_at: 1732163857,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "address",
        "name": "admin_"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "admin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "admin_"
      }
    ]
  },
  {
    "name": "changeAdmin",
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
    "name": "implementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "implementation_"
      }
    ]
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeToAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "FeeAmountEnabled",
    "type": "event",
    "inputs": [
      {
        "type": "uint24",
        "name": "fee",
        "indexed": true
      },
      {
        "type": "int24",
        "name": "tickSpacing",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "protocolFeeNum"
      },
      {
        "type": "uint8",
        "name": "protocolFeeDen"
      }
    ]
  },
  {
    "name": "FlashLoanPermissionUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "enabled",
        "indexed": true
      }
    ]
  },
  {
    "name": "PoolCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token0",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token1",
        "indexed": true
      },
      {
        "type": "uint24",
        "name": "fee",
        "indexed": true
      },
      {
        "type": "int24",
        "name": "tickSpacing"
      },
      {
        "type": "address",
        "name": "pool"
      }
    ]
  },
  {
    "name": "TreasuryChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldTreasury",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newTreasury",
        "indexed": true
      }
    ]
  },
  {
    "name": "beacon",
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
    "name": "createPool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenA"
      },
      {
        "type": "address",
        "name": "tokenB"
      },
      {
        "type": "uint24",
        "name": "fee"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pool"
      }
    ]
  },
  {
    "name": "enableFeeAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint24",
        "name": "fee"
      },
      {
        "type": "int24",
        "name": "tickSpacing"
      },
      {
        "type": "uint8",
        "name": "feeProtocolNum"
      },
      {
        "type": "uint8",
        "name": "feeProtocolDen"
      }
    ],
    "outputs": []
  },
  {
    "name": "feeAmountProtocol",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint24"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "numerator"
      },
      {
        "type": "uint8",
        "name": "denominator"
      }
    ]
  },
  {
    "name": "feeAmountTickSpacing",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint24"
      }
    ],
    "outputs": [
      {
        "type": "int24"
      }
    ]
  },
  {
    "name": "flashLoanEnabled",
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
    "name": "getPool",
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
        "type": "uint24"
      }
    ],
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
        "name": "beacon_"
      },
      {
        "type": "address",
        "name": "owner_"
      },
      {
        "type": "address",
        "name": "treasury_"
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
    "name": "parameters",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "factory"
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
        "type": "uint24",
        "name": "fee"
      },
      {
        "type": "int24",
        "name": "tickSpacing"
      }
    ]
  },
  {
    "name": "setTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_treasury"
      }
    ],
    "outputs": []
  },
  {
    "name": "toggleFlashLoanPermission",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "treasury",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract