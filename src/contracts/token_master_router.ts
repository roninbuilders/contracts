import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27689,
  address: '0x0e00009d00d1000069ed00a908e00081f5006008' as const,
  contract_name: 'TokenMasterRouter',
  display_name: 'Token Master Router',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742222999,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "roleServer"
      },
      {
        "type": "bytes32",
        "name": "roleSet"
      },
      {
        "type": "address",
        "name": "trustedForwarderFactory"
      }
    ]
  },
  {
    "name": "Error__BadConstructorArgument",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Error__InvalidSignatureV",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyDirectCalls",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Ownership__CallerIsNotTokenOrOwnerOrAdmin",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Ownership__CallerIsNotTokenOrOwnerOrAdminOrRole",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RoleClient__Unauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TStoreAlreadyActivated",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TStoreNotSupported",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TloadTestContractDeploymentFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__AmountToSpendExceedsMax",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__BadCalldataLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__CallerNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__CosignatureExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__CosignatureInvalid",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__DeployedTokenAddressMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__FailedToDepositInitialPairedFunds",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__FailedToTransferPairedToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__InvalidDeploymentSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__InvalidInfrastructureFeeBPS",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__InvalidMessageValue",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__InvalidRecipient",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__NativeValueNotAllowedOnERC20",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__OrderDisabled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__OrderDoesNotMeetMinimum",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__OrderExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__OrderMaxPerWalletExceeded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__OrderMaxTotalExceeded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__OrderSignerUnauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__PairedTokenPairingRestricted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__PermitNotCompatibleWithNativeValue",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__PermitTransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__TokenFactoryNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__TokenNotDeployedByTokenMaster",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterRouter__TransactionOriginatedFromUntrustedChannel",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AllowedPairToDeployersUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "deployer",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "allowed"
      }
    ]
  },
  {
    "name": "AllowedPairToTokensUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "tokenAllowedToPair",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "allowed"
      }
    ]
  },
  {
    "name": "AllowedTokenFactoryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenFactory",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "allowed"
      }
    ]
  },
  {
    "name": "BuyOrderDisabled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "creatorBuyIdentifier",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "disabled"
      }
    ]
  },
  {
    "name": "BuyOrderFilled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountPurchased"
      },
      {
        "type": "uint256",
        "name": "totalCost"
      }
    ]
  },
  {
    "name": "InfrastructureFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint16",
        "name": "infrastructureFeeBPS"
      }
    ]
  },
  {
    "name": "OrderSignerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken",
        "indexed": true
      },
      {
        "type": "address",
        "name": "signer",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "allowed"
      }
    ]
  },
  {
    "name": "PartnerFeeRecipientProposed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "proposedPartnerFeeRecipient"
      }
    ]
  },
  {
    "name": "PartnerFeeRecipientUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "partnerFeeRecipient"
      }
    ]
  },
  {
    "name": "SellOrderDisabled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "creatorSellIdentifier",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "disabled"
      }
    ]
  },
  {
    "name": "SellOrderFilled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken",
        "indexed": true
      },
      {
        "type": "address",
        "name": "seller",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountSold"
      },
      {
        "type": "uint256",
        "name": "totalReceived"
      }
    ]
  },
  {
    "name": "SpendOrderDisabled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "creatorSpendIdentifier",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "disabled"
      }
    ]
  },
  {
    "name": "SpendOrderFilled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "creatorSpendIdentifier",
        "indexed": true
      },
      {
        "type": "address",
        "name": "spender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountSpent"
      },
      {
        "type": "uint256",
        "name": "multiplier"
      }
    ]
  },
  {
    "name": "TokenMasterTokenDeployed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken",
        "indexed": true
      },
      {
        "type": "address",
        "name": "pairedToken",
        "indexed": true
      },
      {
        "type": "address",
        "name": "tokenFactory",
        "indexed": true
      }
    ]
  },
  {
    "name": "TokenSettingsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "blockTransactionsFromUntrustedChannels"
      },
      {
        "type": "bool",
        "name": "restrictPairingToLists"
      }
    ]
  },
  {
    "name": "TrustedChannelUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "channel",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "allowed"
      }
    ]
  },
  {
    "name": "__activateTstore",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "acceptProposedPartnerFeeReceiver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken"
      },
      {
        "type": "address",
        "name": "expectedPartnerFeeRecipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "allowedTokenFactory",
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
    "name": "buyTokens",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "buyOrder",
        "components": [
          {
            "type": "address",
            "name": "tokenMasterToken"
          },
          {
            "type": "uint256",
            "name": "tokensToBuy"
          },
          {
            "type": "uint256",
            "name": "pairedValueIn"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "buyTokensAdvanced",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "buyOrder",
        "components": [
          {
            "type": "address",
            "name": "tokenMasterToken"
          },
          {
            "type": "uint256",
            "name": "tokensToBuy"
          },
          {
            "type": "uint256",
            "name": "pairedValueIn"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "signedOrder",
        "components": [
          {
            "type": "bytes32",
            "name": "creatorIdentifier"
          },
          {
            "type": "address",
            "name": "tokenMasterOracle"
          },
          {
            "type": "address",
            "name": "baseToken"
          },
          {
            "type": "uint256",
            "name": "baseValue"
          },
          {
            "type": "uint256",
            "name": "maxPerWallet"
          },
          {
            "type": "uint256",
            "name": "maxTotal"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "address",
            "name": "hook"
          },
          {
            "type": "tuple",
            "name": "signature",
            "components": [
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "cosignature",
            "components": [
              {
                "type": "address",
                "name": "signer"
              },
              {
                "type": "uint256",
                "name": "expiration"
              },
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "hookExtraData"
          },
          {
            "type": "bytes",
            "name": "oracleExtraData"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "permitTransfer",
        "components": [
          {
            "type": "address",
            "name": "permitProcessor"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "permitAmount"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "bytes",
            "name": "signedPermit"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "deployToken",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "deploymentParameters",
        "components": [
          {
            "type": "address",
            "name": "tokenFactory"
          },
          {
            "type": "bytes32",
            "name": "tokenSalt"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "bool",
            "name": "blockTransactionsFromUntrustedChannels"
          },
          {
            "type": "bool",
            "name": "restrictPairingToLists"
          },
          {
            "type": "tuple",
            "name": "poolParams",
            "components": [
              {
                "type": "string",
                "name": "name"
              },
              {
                "type": "string",
                "name": "symbol"
              },
              {
                "type": "uint8",
                "name": "tokenDecimals"
              },
              {
                "type": "address",
                "name": "initialOwner"
              },
              {
                "type": "address",
                "name": "pairedToken"
              },
              {
                "type": "uint256",
                "name": "initialPairedTokenToDeposit"
              },
              {
                "type": "bytes",
                "name": "encodedInitializationArgs"
              },
              {
                "type": "address",
                "name": "defaultTransferValidator"
              },
              {
                "type": "bool",
                "name": "useRouterForPairedTransfers"
              },
              {
                "type": "address",
                "name": "partnerFeeRecipient"
              },
              {
                "type": "uint256",
                "name": "partnerFeeBPS"
              }
            ]
          },
          {
            "type": "uint16",
            "name": "maxInfrastructureFeeBPS"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "signature",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "disableBuyOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken"
      },
      {
        "type": "tuple",
        "name": "signedOrder",
        "components": [
          {
            "type": "bytes32",
            "name": "creatorIdentifier"
          },
          {
            "type": "address",
            "name": "tokenMasterOracle"
          },
          {
            "type": "address",
            "name": "baseToken"
          },
          {
            "type": "uint256",
            "name": "baseValue"
          },
          {
            "type": "uint256",
            "name": "maxPerWallet"
          },
          {
            "type": "uint256",
            "name": "maxTotal"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "address",
            "name": "hook"
          },
          {
            "type": "tuple",
            "name": "signature",
            "components": [
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "cosignature",
            "components": [
              {
                "type": "address",
                "name": "signer"
              },
              {
                "type": "uint256",
                "name": "expiration"
              },
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "hookExtraData"
          },
          {
            "type": "bytes",
            "name": "oracleExtraData"
          }
        ]
      },
      {
        "type": "bool",
        "name": "disabled"
      }
    ],
    "outputs": []
  },
  {
    "name": "disableSellOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken"
      },
      {
        "type": "tuple",
        "name": "signedOrder",
        "components": [
          {
            "type": "bytes32",
            "name": "creatorIdentifier"
          },
          {
            "type": "address",
            "name": "tokenMasterOracle"
          },
          {
            "type": "address",
            "name": "baseToken"
          },
          {
            "type": "uint256",
            "name": "baseValue"
          },
          {
            "type": "uint256",
            "name": "maxPerWallet"
          },
          {
            "type": "uint256",
            "name": "maxTotal"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "address",
            "name": "hook"
          },
          {
            "type": "tuple",
            "name": "signature",
            "components": [
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "cosignature",
            "components": [
              {
                "type": "address",
                "name": "signer"
              },
              {
                "type": "uint256",
                "name": "expiration"
              },
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "hookExtraData"
          },
          {
            "type": "bytes",
            "name": "oracleExtraData"
          }
        ]
      },
      {
        "type": "bool",
        "name": "disabled"
      }
    ],
    "outputs": []
  },
  {
    "name": "disableSpendOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken"
      },
      {
        "type": "tuple",
        "name": "signedOrder",
        "components": [
          {
            "type": "bytes32",
            "name": "creatorIdentifier"
          },
          {
            "type": "address",
            "name": "tokenMasterOracle"
          },
          {
            "type": "address",
            "name": "baseToken"
          },
          {
            "type": "uint256",
            "name": "baseValue"
          },
          {
            "type": "uint256",
            "name": "maxPerWallet"
          },
          {
            "type": "uint256",
            "name": "maxTotal"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "address",
            "name": "hook"
          },
          {
            "type": "tuple",
            "name": "signature",
            "components": [
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "cosignature",
            "components": [
              {
                "type": "address",
                "name": "signer"
              },
              {
                "type": "uint256",
                "name": "expiration"
              },
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "hookExtraData"
          },
          {
            "type": "bytes",
            "name": "oracleExtraData"
          }
        ]
      },
      {
        "type": "bool",
        "name": "disabled"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAllowedPairToDeployers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "allowedPairToDeployers"
      }
    ]
  },
  {
    "name": "getAllowedPairToTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "allowedPairToTokens"
      }
    ]
  },
  {
    "name": "getBuyTrackingData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken"
      },
      {
        "type": "tuple",
        "name": "signedOrder",
        "components": [
          {
            "type": "bytes32",
            "name": "creatorIdentifier"
          },
          {
            "type": "address",
            "name": "tokenMasterOracle"
          },
          {
            "type": "address",
            "name": "baseToken"
          },
          {
            "type": "uint256",
            "name": "baseValue"
          },
          {
            "type": "uint256",
            "name": "maxPerWallet"
          },
          {
            "type": "uint256",
            "name": "maxTotal"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "address",
            "name": "hook"
          },
          {
            "type": "tuple",
            "name": "signature",
            "components": [
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "cosignature",
            "components": [
              {
                "type": "address",
                "name": "signer"
              },
              {
                "type": "uint256",
                "name": "expiration"
              },
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "hookExtraData"
          },
          {
            "type": "bytes",
            "name": "oracleExtraData"
          }
        ]
      },
      {
        "type": "address",
        "name": "buyer"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalBought"
      },
      {
        "type": "uint256",
        "name": "totalWalletBought"
      },
      {
        "type": "bool",
        "name": "orderDisabled"
      },
      {
        "type": "bool",
        "name": "signatureValid"
      },
      {
        "type": "bool",
        "name": "cosignatureValid"
      }
    ]
  },
  {
    "name": "getOrderSigners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "orderSigners"
      }
    ]
  },
  {
    "name": "getSellTrackingData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken"
      },
      {
        "type": "tuple",
        "name": "signedOrder",
        "components": [
          {
            "type": "bytes32",
            "name": "creatorIdentifier"
          },
          {
            "type": "address",
            "name": "tokenMasterOracle"
          },
          {
            "type": "address",
            "name": "baseToken"
          },
          {
            "type": "uint256",
            "name": "baseValue"
          },
          {
            "type": "uint256",
            "name": "maxPerWallet"
          },
          {
            "type": "uint256",
            "name": "maxTotal"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "address",
            "name": "hook"
          },
          {
            "type": "tuple",
            "name": "signature",
            "components": [
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "cosignature",
            "components": [
              {
                "type": "address",
                "name": "signer"
              },
              {
                "type": "uint256",
                "name": "expiration"
              },
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "hookExtraData"
          },
          {
            "type": "bytes",
            "name": "oracleExtraData"
          }
        ]
      },
      {
        "type": "address",
        "name": "seller"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalSold"
      },
      {
        "type": "uint256",
        "name": "totalWalletSold"
      },
      {
        "type": "bool",
        "name": "orderDisabled"
      },
      {
        "type": "bool",
        "name": "signatureValid"
      },
      {
        "type": "bool",
        "name": "cosignatureValid"
      }
    ]
  },
  {
    "name": "getSpendTrackingData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken"
      },
      {
        "type": "tuple",
        "name": "signedOrder",
        "components": [
          {
            "type": "bytes32",
            "name": "creatorIdentifier"
          },
          {
            "type": "address",
            "name": "tokenMasterOracle"
          },
          {
            "type": "address",
            "name": "baseToken"
          },
          {
            "type": "uint256",
            "name": "baseValue"
          },
          {
            "type": "uint256",
            "name": "maxPerWallet"
          },
          {
            "type": "uint256",
            "name": "maxTotal"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "address",
            "name": "hook"
          },
          {
            "type": "tuple",
            "name": "signature",
            "components": [
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "cosignature",
            "components": [
              {
                "type": "address",
                "name": "signer"
              },
              {
                "type": "uint256",
                "name": "expiration"
              },
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "hookExtraData"
          },
          {
            "type": "bytes",
            "name": "oracleExtraData"
          }
        ]
      },
      {
        "type": "address",
        "name": "spender"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalMultipliersSpent"
      },
      {
        "type": "uint256",
        "name": "totalWalletMultipliersSpent"
      },
      {
        "type": "bool",
        "name": "orderDisabled"
      },
      {
        "type": "bool",
        "name": "signatureValid"
      },
      {
        "type": "bool",
        "name": "cosignatureValid"
      }
    ]
  },
  {
    "name": "getTokenSettings",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "deployedByTokenMaster"
      },
      {
        "type": "bool",
        "name": "blockTransactionsFromUntrustedChannels"
      },
      {
        "type": "bool",
        "name": "restrictPairingToLists"
      },
      {
        "type": "address",
        "name": "partnerFeeRecipient"
      }
    ]
  },
  {
    "name": "getTrustedChannels",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "trustedChannels"
      }
    ]
  },
  {
    "name": "infrastructureFeeBPS",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16"
      }
    ]
  },
  {
    "name": "isTrustedForwarder",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "forwarder"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "onRoleHolderChanged",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "roleHolder"
      }
    ],
    "outputs": []
  },
  {
    "name": "orderTracking",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "orderDisabled"
      },
      {
        "type": "uint256",
        "name": "orderTotal"
      }
    ]
  },
  {
    "name": "partnerProposeFeeReceiver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken"
      },
      {
        "type": "address",
        "name": "proposedPartnerFeeRecipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "sellTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "sellOrder",
        "components": [
          {
            "type": "address",
            "name": "tokenMasterToken"
          },
          {
            "type": "uint256",
            "name": "tokensToSell"
          },
          {
            "type": "uint256",
            "name": "minimumOut"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "sellTokensAdvanced",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "sellOrder",
        "components": [
          {
            "type": "address",
            "name": "tokenMasterToken"
          },
          {
            "type": "uint256",
            "name": "tokensToSell"
          },
          {
            "type": "uint256",
            "name": "minimumOut"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "signedOrder",
        "components": [
          {
            "type": "bytes32",
            "name": "creatorIdentifier"
          },
          {
            "type": "address",
            "name": "tokenMasterOracle"
          },
          {
            "type": "address",
            "name": "baseToken"
          },
          {
            "type": "uint256",
            "name": "baseValue"
          },
          {
            "type": "uint256",
            "name": "maxPerWallet"
          },
          {
            "type": "uint256",
            "name": "maxTotal"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "address",
            "name": "hook"
          },
          {
            "type": "tuple",
            "name": "signature",
            "components": [
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "cosignature",
            "components": [
              {
                "type": "address",
                "name": "signer"
              },
              {
                "type": "uint256",
                "name": "expiration"
              },
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "hookExtraData"
          },
          {
            "type": "bytes",
            "name": "oracleExtraData"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setAllowedTokenFactory",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenFactory"
      },
      {
        "type": "bool",
        "name": "allowed"
      }
    ],
    "outputs": []
  },
  {
    "name": "setInfrastructureFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint16",
        "name": "_infrastructureFeeBPS"
      }
    ],
    "outputs": []
  },
  {
    "name": "setOrderSigner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken"
      },
      {
        "type": "address",
        "name": "signer"
      },
      {
        "type": "bool",
        "name": "allowed"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTokenAllowedPairToDeployer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "address",
        "name": "deployer"
      },
      {
        "type": "bool",
        "name": "allowed"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTokenAllowedPairToToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "address",
        "name": "tokenAllowedToPair"
      },
      {
        "type": "bool",
        "name": "allowed"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTokenAllowedTrustedChannel",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "address",
        "name": "channel"
      },
      {
        "type": "bool",
        "name": "allowed"
      }
    ],
    "outputs": []
  },
  {
    "name": "spendTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "spendOrder",
        "components": [
          {
            "type": "address",
            "name": "tokenMasterToken"
          },
          {
            "type": "uint256",
            "name": "multiplier"
          },
          {
            "type": "uint256",
            "name": "maxAmountToSpend"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "signedOrder",
        "components": [
          {
            "type": "bytes32",
            "name": "creatorIdentifier"
          },
          {
            "type": "address",
            "name": "tokenMasterOracle"
          },
          {
            "type": "address",
            "name": "baseToken"
          },
          {
            "type": "uint256",
            "name": "baseValue"
          },
          {
            "type": "uint256",
            "name": "maxPerWallet"
          },
          {
            "type": "uint256",
            "name": "maxTotal"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "address",
            "name": "hook"
          },
          {
            "type": "tuple",
            "name": "signature",
            "components": [
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "cosignature",
            "components": [
              {
                "type": "address",
                "name": "signer"
              },
              {
                "type": "uint256",
                "name": "expiration"
              },
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "hookExtraData"
          },
          {
            "type": "bytes",
            "name": "oracleExtraData"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "transferCreatorShareToMarket",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken"
      },
      {
        "type": "uint256",
        "name": "transferAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateTokenSettings",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "bool",
        "name": "blockTransactionsFromUntrustedChannels"
      },
      {
        "type": "bool",
        "name": "restrictPairingToLists"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawCreatorShare",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterToken"
      },
      {
        "type": "address",
        "name": "withdrawTo"
      },
      {
        "type": "uint256",
        "name": "withdrawAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawFees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokenMasterTokens"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract