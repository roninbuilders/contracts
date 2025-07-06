import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34962,
  address: '0xe2098b96227ec9ab5be2b6a58669aceb77e387e4' as const,
  contract_name: 'LpValidator',
  display_name: 'Lp Validator',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1747913522,
  abi: [
  {
    "name": "ApproveFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExternalCallFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidFeeConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInstructionType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidNfpm",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidObservation",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidObservationCardinality",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidParams",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPool",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPoolAmountMin",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSigner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidStrategy",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSwapRouter",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTickWidth",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidVaultConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
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
    "name": "PriceSanityCheckFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignatureExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "version"
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
    "name": "configManager",
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
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_configManager"
      },
      {
        "type": "address[]",
        "name": "_whitelistNfpms"
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setWhitelistNfpms",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_whitelistNfpms"
      },
      {
        "type": "bool",
        "name": "isWhitelist"
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
    "name": "validateConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nfpm"
      },
      {
        "type": "uint24",
        "name": "fee"
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
        "type": "int24",
        "name": "tickLower"
      },
      {
        "type": "int24",
        "name": "tickUpper"
      },
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "bool",
            "name": "allowDeposit"
          },
          {
            "type": "uint8",
            "name": "rangeStrategyType"
          },
          {
            "type": "uint8",
            "name": "tvlStrategyType"
          },
          {
            "type": "address",
            "name": "principalToken"
          },
          {
            "type": "address[]",
            "name": "supportedAddresses"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "validateNfpm",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nfpm"
      }
    ],
    "outputs": []
  },
  {
    "name": "validateObservationCardinality",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nfpm"
      },
      {
        "type": "uint24",
        "name": "fee"
      },
      {
        "type": "address",
        "name": "token0"
      },
      {
        "type": "address",
        "name": "token1"
      }
    ],
    "outputs": []
  },
  {
    "name": "validatePriceSanity",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "pool"
      }
    ],
    "outputs": []
  },
  {
    "name": "validateTickWidth",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token0"
      },
      {
        "type": "address",
        "name": "token1"
      },
      {
        "type": "int24",
        "name": "tickLower"
      },
      {
        "type": "int24",
        "name": "tickUpper"
      },
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "bool",
            "name": "allowDeposit"
          },
          {
            "type": "uint8",
            "name": "rangeStrategyType"
          },
          {
            "type": "uint8",
            "name": "tvlStrategyType"
          },
          {
            "type": "address",
            "name": "principalToken"
          },
          {
            "type": "address[]",
            "name": "supportedAddresses"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistNfpms",
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract