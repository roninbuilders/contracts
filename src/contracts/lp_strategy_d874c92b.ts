import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35050,
  address: '0xaf1ddbd60d6aa4a2d44c628c40ebb8c6d874c92b' as const,
  contract_name: 'LpStrategy',
  display_name: 'Lp Strategy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1748270920,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_optimalSwapper"
      },
      {
        "type": "address",
        "name": "_validator"
      },
      {
        "type": "address",
        "name": "_lpFeeTaker"
      }
    ]
  },
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
    "name": "InsufficientAmountOut",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAsset",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidFeeConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInstructionType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidNumberOfAssets",
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
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignatureExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "T",
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
    "name": "FeeCollected",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "vaultAddress",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "feeType",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "LpStrategyCompound",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "vaultAddress"
      },
      {
        "type": "uint256",
        "name": "amount0Collected"
      },
      {
        "type": "uint256",
        "name": "amount1Collected"
      },
      {
        "type": "tuple[]",
        "name": "compoundAssets",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "strategy"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ]
  },
  {
    "name": "convert",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "assets",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "strategy"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "vaultConfig",
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
      },
      {
        "type": "tuple",
        "name": "feeConfig",
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
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "returnAssets",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "strategy"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ]
  },
  {
    "name": "convertFromPrincipal",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "existingAsset",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "strategy"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "principalTokenAmount"
      },
      {
        "type": "tuple",
        "name": "vaultConfig",
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
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "strategy"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ]
  },
  {
    "name": "convertToPrincipal",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "existingAsset",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "strategy"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "shares"
      },
      {
        "type": "uint256",
        "name": "totalSupply"
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
      },
      {
        "type": "tuple",
        "name": "feeConfig",
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
    "outputs": [
      {
        "type": "tuple[]",
        "name": "returnAssets",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "strategy"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ]
  },
  {
    "name": "harvest",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "asset",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "strategy"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "address",
        "name": "tokenOut"
      },
      {
        "type": "uint256",
        "name": "amountTokenOutMin"
      },
      {
        "type": "tuple",
        "name": "vaultConfig",
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
      },
      {
        "type": "tuple",
        "name": "feeConfig",
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
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "strategy"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ]
  },
  {
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "optimalSwapper",
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
    "name": "revalidate",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "asset",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "strategy"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
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
    "name": "validator",
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
    "name": "valueOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "asset",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "strategy"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "address",
        "name": "principalToken"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "valueInPrincipal"
      }
    ]
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract