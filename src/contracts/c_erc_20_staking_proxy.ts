import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 349,
  address: '0xc737cca751142ac9b51cb8ef475042dfcea9287a' as const,
  contract_name: 'CErc20StakingProxy',
  display_name: 'C Erc 20 Staking Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x146d28f098bd7def5d2bf0c56f3582f0923ed31f',
  created_at: 1678817469,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "underlying_"
      },
      {
        "type": "address",
        "name": "comptroller_"
      },
      {
        "type": "string",
        "name": "name_"
      },
      {
        "type": "string",
        "name": "symbol_"
      },
      {
        "type": "address",
        "name": "admin_"
      },
      {
        "type": "address",
        "name": "collateralStakingManagerInterface_"
      },
      {
        "type": "address",
        "name": "implementation_"
      }
    ]
  },
  {
    "name": "NewImplementation",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldImplementation"
      },
      {
        "type": "address",
        "name": "newImplementation"
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "_setImplementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "implementation_"
      }
    ],
    "outputs": []
  },
  {
    "name": "admin",
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
    "name": "collateralStakingManagerInterface",
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
    "name": "comptroller",
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
    "name": "currentCollateralAmount",
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
    "name": "globalCollateralLimit",
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
    "name": "implementation",
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
    "name": "isCErc20Staking",
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
    "name": "symbol",
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
    "name": "underlying",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi,
  proxy_abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract