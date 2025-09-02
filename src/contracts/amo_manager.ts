import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36731,
  address: '0x70924f77509dc1eb9384077b12ca049aa2168d6f' as const,
  contract_name: 'AmoManager',
  display_name: 'Amo Manager',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1754448618,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_dstable"
      },
      {
        "type": "address",
        "name": "_collateralHolderVault"
      },
      {
        "type": "address",
        "name": "_oracle"
      }
    ]
  },
  {
    "name": "AccessControlBadConfirmation",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AccessControlUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "neededRole"
      }
    ]
  },
  {
    "name": "AmoSupplyInvariantViolation",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "startingSupply"
      },
      {
        "type": "uint256",
        "name": "endingSupply"
      }
    ]
  },
  {
    "name": "AmoVaultAlreadyEnabled",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault"
      }
    ]
  },
  {
    "name": "CannotTransferDStable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InactiveAmoVault",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault"
      }
    ]
  },
  {
    "name": "IncorrectBaseCurrencyUnit",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "baseCurrencyUnit"
      }
    ]
  },
  {
    "name": "InsufficientAllocation",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "requested"
      },
      {
        "type": "uint256",
        "name": "available"
      }
    ]
  },
  {
    "name": "InsufficientProfits",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "takeProfitValueInBase"
      },
      {
        "type": "int256",
        "name": "availableProfitInBase"
      }
    ]
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AllocationSurplus",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "surplusInDstable"
      }
    ]
  },
  {
    "name": "AmoAllocated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "dstableAmount"
      }
    ]
  },
  {
    "name": "AmoDeallocated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "dstableAmount"
      }
    ]
  },
  {
    "name": "AmoVaultSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isActive"
      }
    ]
  },
  {
    "name": "OracleSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newOracle",
        "indexed": true
      }
    ]
  },
  {
    "name": "ProfitsWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "RoleAdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "previousAdminRole",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "newAdminRole",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleGranted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleRevoked",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "AMO_ALLOCATOR_ROLE",
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
    "name": "DEFAULT_ADMIN_ROLE",
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
    "name": "FEE_COLLECTOR_ROLE",
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
    "name": "allocateAmo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault"
      },
      {
        "type": "uint256",
        "name": "dstableAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "amoVaultAllocation",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "amoVaults",
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
    "name": "availableProfitInBase",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int256"
      }
    ]
  },
  {
    "name": "availableVaultProfitsInBase",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "vaultAddress"
      }
    ],
    "outputs": [
      {
        "type": "int256"
      }
    ]
  },
  {
    "name": "baseCurrencyUnit",
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
    "name": "baseValueToDstableAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "baseValue"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "collateralHolderVault",
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
    "name": "deallocateAmo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault"
      },
      {
        "type": "uint256",
        "name": "dstableAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "decreaseAmoSupply",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "dstableAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "disableAmoVault",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault"
      }
    ],
    "outputs": []
  },
  {
    "name": "dstable",
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
    "name": "dstableAmountToBaseValue",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "dstableAmount"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "enableAmoVault",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault"
      }
    ],
    "outputs": []
  },
  {
    "name": "getRoleAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "grantRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "hasRole",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isAmoActive",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "oracle",
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
    "name": "renounceRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "callerConfirmation"
      }
    ],
    "outputs": []
  },
  {
    "name": "revokeRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBaseCurrencyUnit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newBaseCurrencyUnit"
      }
    ],
    "outputs": []
  },
  {
    "name": "setCollateralVault",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_collateralVault"
      }
    ],
    "outputs": []
  },
  {
    "name": "setOracle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newOracle"
      }
    ],
    "outputs": []
  },
  {
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "totalAllocated",
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
    "name": "totalAmoSupply",
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
    "name": "totalCollateralValue",
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
    "name": "transferFromAmoVaultToHoldingVault",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault"
      },
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
    "name": "transferFromHoldingVaultToAmoVault",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault"
      },
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
    "name": "withdrawProfits",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "amoVault"
      },
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "address",
        "name": "takeProfitToken"
      },
      {
        "type": "uint256",
        "name": "takeProfitAmount"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "takeProfitValueInBase"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract