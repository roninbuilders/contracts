import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34990,
  address: '0x52976cd34445bfb939da12303a1f37d5911d1181' as const,
  contract_name: 'MerklStrategy',
  display_name: 'Merkl Strategy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1747985127,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_configManager"
      }
    ]
  },
  {
    "name": "ApproveFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ECDSAInvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ECDSAInvalidSignatureLength",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "length"
      }
    ]
  },
  {
    "name": "ECDSAInvalidSignatureS",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "s"
      }
    ]
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
    "name": "NotEnoughAmountOut",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SafeERC20FailedOperation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "SignatureExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SwapFailed",
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
    "name": "MerklRewardsClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "principalToken"
      },
      {
        "type": "uint256",
        "name": "principalAmount"
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
    "name": "valueOf",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "tuple",
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
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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