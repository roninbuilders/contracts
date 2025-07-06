import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34961,
  address: '0x46ba78754baae4219071a250f43d38e27a91338a' as const,
  contract_name: 'ConfigManager',
  display_name: 'Config Manager',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1747913465,
  abi: [
  {
    "name": "ApproveFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EnumerableMapNonexistentKey",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "key"
      }
    ]
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
    "name": "InvalidParams",
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
    "name": "MaxHarvestSlippageSet",
    "type": "event",
    "inputs": [
      {
        "type": "int24",
        "name": "_maxHarvestSlippage"
      }
    ]
  },
  {
    "name": "MaxPositionsSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "_maxPositions"
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
    "name": "SetFeeConfig",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "allowDeposit"
      },
      {
        "type": "tuple",
        "name": "_feeConfig",
        "components": [
          {
            "type": "uint16",
            "name": "vaultOwnerFeeBasisPoint"
          },
          {
            "type": "address",
            "name": "vaultOwner"
          },
          {
            "type": "uint16",
            "name": "platformFeeBasisPoint"
          },
          {
            "type": "address",
            "name": "platformFeeRecipient"
          },
          {
            "type": "uint64",
            "name": "gasFeeX64"
          },
          {
            "type": "address",
            "name": "gasFeeRecipient"
          }
        ]
      }
    ]
  },
  {
    "name": "SetStrategyConfig",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_strategy",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_principalToken",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "_config"
      }
    ]
  },
  {
    "name": "SetTypedTokens",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "_typedTokens"
      },
      {
        "type": "uint256[]",
        "name": "_typedTokenTypes"
      }
    ]
  },
  {
    "name": "VaultPausedSet",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "_isVaultPaused"
      }
    ]
  },
  {
    "name": "WhitelistAutomator",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "_automators"
      },
      {
        "type": "bool",
        "name": "_isWhitelisted"
      }
    ]
  },
  {
    "name": "WhitelistSigner",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "_signers"
      },
      {
        "type": "bool",
        "name": "_isWhitelisted"
      }
    ]
  },
  {
    "name": "WhitelistStrategy",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "_strategies"
      },
      {
        "type": "bool",
        "name": "_isWhitelisted"
      }
    ]
  },
  {
    "name": "WhitelistSwapRouter",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "_swapRouters"
      },
      {
        "type": "bool",
        "name": "_isWhitelisted"
      }
    ]
  },
  {
    "name": "getFeeConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bool",
        "name": "allowDeposit"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint16",
            "name": "vaultOwnerFeeBasisPoint"
          },
          {
            "type": "address",
            "name": "vaultOwner"
          },
          {
            "type": "uint16",
            "name": "platformFeeBasisPoint"
          },
          {
            "type": "address",
            "name": "platformFeeRecipient"
          },
          {
            "type": "uint64",
            "name": "gasFeeX64"
          },
          {
            "type": "address",
            "name": "gasFeeRecipient"
          }
        ]
      }
    ]
  },
  {
    "name": "getStrategyConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_strategy"
      },
      {
        "type": "address",
        "name": "_principalToken"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "getTypedToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_type"
      }
    ]
  },
  {
    "name": "getTypedTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "_typedTokens"
      },
      {
        "type": "uint256[]",
        "name": "_typedTokenTypes"
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
        "type": "address[]",
        "name": "_whitelistStrategies"
      },
      {
        "type": "address[]",
        "name": "_whitelistSwapRouters"
      },
      {
        "type": "address[]",
        "name": "_whitelistAutomator"
      },
      {
        "type": "address[]",
        "name": "_whitelistSigners"
      },
      {
        "type": "address[]",
        "name": "_typedTokens"
      },
      {
        "type": "uint256[]",
        "name": "_typedTokenTypes"
      },
      {
        "type": "uint16",
        "name": "_vaultOwnerFeeBasisPoint"
      },
      {
        "type": "uint16",
        "name": "_platformFeeBasisPoint"
      },
      {
        "type": "uint16",
        "name": "_privatePlatformFeeBasisPoint"
      },
      {
        "type": "address",
        "name": "_feeCollector"
      },
      {
        "type": "address[]",
        "name": "_strategies"
      },
      {
        "type": "address[]",
        "name": "_principalTokens"
      },
      {
        "type": "bytes[]",
        "name": "_configs"
      }
    ],
    "outputs": []
  },
  {
    "name": "isMatchedWithType",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_type"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isVaultPaused",
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
    "name": "isWhitelistSigner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_signer"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isWhitelistedAutomator",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_automator"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isWhitelistedStrategy",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_strategy"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isWhitelistedSwapRouter",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_swapRouter"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "maxHarvestSlippage",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int24"
      }
    ]
  },
  {
    "name": "maxPositions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
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
    "name": "setFeeConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "allowDeposit"
      },
      {
        "type": "tuple",
        "name": "_feeConfig",
        "components": [
          {
            "type": "uint16",
            "name": "vaultOwnerFeeBasisPoint"
          },
          {
            "type": "address",
            "name": "vaultOwner"
          },
          {
            "type": "uint16",
            "name": "platformFeeBasisPoint"
          },
          {
            "type": "address",
            "name": "platformFeeRecipient"
          },
          {
            "type": "uint64",
            "name": "gasFeeX64"
          },
          {
            "type": "address",
            "name": "gasFeeRecipient"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxHarvestSlippage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "int24",
        "name": "_maxHarvestSlippage"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxPositions",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_maxPositions"
      }
    ],
    "outputs": []
  },
  {
    "name": "setStrategyConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_strategy"
      },
      {
        "type": "address",
        "name": "_principalToken"
      },
      {
        "type": "bytes",
        "name": "_config"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTypedTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_typedTokens"
      },
      {
        "type": "uint256[]",
        "name": "_typedTokenTypes"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVaultPaused",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_isVaultPaused"
      }
    ],
    "outputs": []
  },
  {
    "name": "strategyConfigs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
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
    "name": "whitelistAutomator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_automators"
      },
      {
        "type": "bool",
        "name": "_isWhitelisted"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistAutomators",
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
    "name": "whitelistSigner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_signers"
      },
      {
        "type": "bool",
        "name": "_isWhitelisted"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistSigners",
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
    "name": "whitelistStrategies",
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
    "name": "whitelistStrategy",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_strategies"
      },
      {
        "type": "bool",
        "name": "_isWhitelisted"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistSwapRouter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_swapRouters"
      },
      {
        "type": "bool",
        "name": "_isWhitelisted"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistSwapRouters",
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