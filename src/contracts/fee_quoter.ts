import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35939,
  address: '0xe67e30b1b4f80a35852488757c3efc093903651a' as const,
  contract_name: 'FeeQuoter',
  display_name: 'Fee Quoter',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751314688,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "staticConfig",
        "components": [
          {
            "type": "uint96",
            "name": "maxFeeJuelsPerMsg"
          },
          {
            "type": "address",
            "name": "linkToken"
          },
          {
            "type": "uint32",
            "name": "tokenPriceStalenessThreshold"
          }
        ]
      },
      {
        "type": "address[]",
        "name": "priceUpdaters"
      },
      {
        "type": "address[]",
        "name": "feeTokens"
      },
      {
        "type": "tuple[]",
        "name": "tokenPriceFeeds",
        "components": [
          {
            "type": "address",
            "name": "sourceToken"
          },
          {
            "type": "tuple",
            "name": "feedConfig",
            "components": [
              {
                "type": "address",
                "name": "dataFeedAddress"
              },
              {
                "type": "uint8",
                "name": "tokenDecimals"
              },
              {
                "type": "bool",
                "name": "isEnabled"
              }
            ]
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "tokenTransferFeeConfigArgs",
        "components": [
          {
            "type": "uint64",
            "name": "destChainSelector"
          },
          {
            "type": "tuple[]",
            "name": "tokenTransferFeeConfigs",
            "components": [
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "tuple",
                "name": "tokenTransferFeeConfig",
                "components": [
                  {
                    "type": "uint32",
                    "name": "minFeeUSDCents"
                  },
                  {
                    "type": "uint32",
                    "name": "maxFeeUSDCents"
                  },
                  {
                    "type": "uint16",
                    "name": "deciBps"
                  },
                  {
                    "type": "uint32",
                    "name": "destGasOverhead"
                  },
                  {
                    "type": "uint32",
                    "name": "destBytesOverhead"
                  },
                  {
                    "type": "bool",
                    "name": "isEnabled"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "premiumMultiplierWeiPerEthArgs",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint64",
            "name": "premiumMultiplierWeiPerEth"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "destChainConfigArgs",
        "components": [
          {
            "type": "uint64",
            "name": "destChainSelector"
          },
          {
            "type": "tuple",
            "name": "destChainConfig",
            "components": [
              {
                "type": "bool",
                "name": "isEnabled"
              },
              {
                "type": "uint16",
                "name": "maxNumberOfTokensPerMsg"
              },
              {
                "type": "uint32",
                "name": "maxDataBytes"
              },
              {
                "type": "uint32",
                "name": "maxPerMsgGasLimit"
              },
              {
                "type": "uint32",
                "name": "destGasOverhead"
              },
              {
                "type": "uint8",
                "name": "destGasPerPayloadByteBase"
              },
              {
                "type": "uint8",
                "name": "destGasPerPayloadByteHigh"
              },
              {
                "type": "uint16",
                "name": "destGasPerPayloadByteThreshold"
              },
              {
                "type": "uint32",
                "name": "destDataAvailabilityOverheadGas"
              },
              {
                "type": "uint16",
                "name": "destGasPerDataAvailabilityByte"
              },
              {
                "type": "uint16",
                "name": "destDataAvailabilityMultiplierBps"
              },
              {
                "type": "bytes4",
                "name": "chainFamilySelector"
              },
              {
                "type": "bool",
                "name": "enforceOutOfOrder"
              },
              {
                "type": "uint16",
                "name": "defaultTokenFeeUSDCents"
              },
              {
                "type": "uint32",
                "name": "defaultTokenDestGasOverhead"
              },
              {
                "type": "uint32",
                "name": "defaultTxGasLimit"
              },
              {
                "type": "uint64",
                "name": "gasMultiplierWeiPerEth"
              },
              {
                "type": "uint32",
                "name": "gasPriceStalenessThreshold"
              },
              {
                "type": "uint32",
                "name": "networkFeeUSDCents"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "CannotTransferToSelf",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DataFeedValueOutOfUint224Range",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DestinationChainNotEnabled",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      }
    ]
  },
  {
    "name": "ExtraArgOutOfOrderExecutionMustBeTrue",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeeTokenNotSupported",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "Invalid32ByteAddress",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "encodedAddress"
      }
    ]
  },
  {
    "name": "InvalidChainFamilySelector",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "chainFamilySelector"
      }
    ]
  },
  {
    "name": "InvalidDestBytesOverhead",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint32",
        "name": "destBytesOverhead"
      }
    ]
  },
  {
    "name": "InvalidDestChainConfig",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      }
    ]
  },
  {
    "name": "InvalidEVMAddress",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "encodedAddress"
      }
    ]
  },
  {
    "name": "InvalidExtraArgsData",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidExtraArgsTag",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidFeeRange",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "minFeeUSDCents"
      },
      {
        "type": "uint256",
        "name": "maxFeeUSDCents"
      }
    ]
  },
  {
    "name": "InvalidSVMExtraArgsWritableBitmap",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "accountIsWritableBitmap"
      },
      {
        "type": "uint256",
        "name": "numAccounts"
      }
    ]
  },
  {
    "name": "InvalidStaticConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTokenReceiver",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MessageComputeUnitLimitTooHigh",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MessageFeeTooHigh",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "msgFeeJuels"
      },
      {
        "type": "uint256",
        "name": "maxFeeJuelsPerMsg"
      }
    ]
  },
  {
    "name": "MessageGasLimitTooHigh",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MessageTooLarge",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "maxSize"
      },
      {
        "type": "uint256",
        "name": "actualSize"
      }
    ]
  },
  {
    "name": "MustBeProposedOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCallableByOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnerCannotBeZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReportForwarderUnauthorized",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "forwarder"
      },
      {
        "type": "address",
        "name": "workflowOwner"
      },
      {
        "type": "bytes10",
        "name": "workflowName"
      },
      {
        "type": "bytes2",
        "name": "reportName"
      }
    ]
  },
  {
    "name": "SourceTokenDataTooLarge",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "StaleGasPrice",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      },
      {
        "type": "uint256",
        "name": "threshold"
      },
      {
        "type": "uint256",
        "name": "timePassed"
      }
    ]
  },
  {
    "name": "TokenNotSupported",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "TooManySVMExtraArgsAccounts",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "numAccounts"
      },
      {
        "type": "uint256",
        "name": "maxAccounts"
      }
    ]
  },
  {
    "name": "UnauthorizedCaller",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      }
    ]
  },
  {
    "name": "UnsupportedNumberOfTokens",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "numberOfTokens"
      },
      {
        "type": "uint256",
        "name": "maxNumberOfTokensPerMsg"
      }
    ]
  },
  {
    "name": "ZeroAddressNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AuthorizedCallerAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      }
    ]
  },
  {
    "name": "AuthorizedCallerRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      }
    ]
  },
  {
    "name": "DestChainAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "destChainConfig",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint16",
            "name": "maxNumberOfTokensPerMsg"
          },
          {
            "type": "uint32",
            "name": "maxDataBytes"
          },
          {
            "type": "uint32",
            "name": "maxPerMsgGasLimit"
          },
          {
            "type": "uint32",
            "name": "destGasOverhead"
          },
          {
            "type": "uint8",
            "name": "destGasPerPayloadByteBase"
          },
          {
            "type": "uint8",
            "name": "destGasPerPayloadByteHigh"
          },
          {
            "type": "uint16",
            "name": "destGasPerPayloadByteThreshold"
          },
          {
            "type": "uint32",
            "name": "destDataAvailabilityOverheadGas"
          },
          {
            "type": "uint16",
            "name": "destGasPerDataAvailabilityByte"
          },
          {
            "type": "uint16",
            "name": "destDataAvailabilityMultiplierBps"
          },
          {
            "type": "bytes4",
            "name": "chainFamilySelector"
          },
          {
            "type": "bool",
            "name": "enforceOutOfOrder"
          },
          {
            "type": "uint16",
            "name": "defaultTokenFeeUSDCents"
          },
          {
            "type": "uint32",
            "name": "defaultTokenDestGasOverhead"
          },
          {
            "type": "uint32",
            "name": "defaultTxGasLimit"
          },
          {
            "type": "uint64",
            "name": "gasMultiplierWeiPerEth"
          },
          {
            "type": "uint32",
            "name": "gasPriceStalenessThreshold"
          },
          {
            "type": "uint32",
            "name": "networkFeeUSDCents"
          }
        ]
      }
    ]
  },
  {
    "name": "DestChainConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "destChainConfig",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint16",
            "name": "maxNumberOfTokensPerMsg"
          },
          {
            "type": "uint32",
            "name": "maxDataBytes"
          },
          {
            "type": "uint32",
            "name": "maxPerMsgGasLimit"
          },
          {
            "type": "uint32",
            "name": "destGasOverhead"
          },
          {
            "type": "uint8",
            "name": "destGasPerPayloadByteBase"
          },
          {
            "type": "uint8",
            "name": "destGasPerPayloadByteHigh"
          },
          {
            "type": "uint16",
            "name": "destGasPerPayloadByteThreshold"
          },
          {
            "type": "uint32",
            "name": "destDataAvailabilityOverheadGas"
          },
          {
            "type": "uint16",
            "name": "destGasPerDataAvailabilityByte"
          },
          {
            "type": "uint16",
            "name": "destDataAvailabilityMultiplierBps"
          },
          {
            "type": "bytes4",
            "name": "chainFamilySelector"
          },
          {
            "type": "bool",
            "name": "enforceOutOfOrder"
          },
          {
            "type": "uint16",
            "name": "defaultTokenFeeUSDCents"
          },
          {
            "type": "uint32",
            "name": "defaultTokenDestGasOverhead"
          },
          {
            "type": "uint32",
            "name": "defaultTxGasLimit"
          },
          {
            "type": "uint64",
            "name": "gasMultiplierWeiPerEth"
          },
          {
            "type": "uint32",
            "name": "gasPriceStalenessThreshold"
          },
          {
            "type": "uint32",
            "name": "networkFeeUSDCents"
          }
        ]
      }
    ]
  },
  {
    "name": "FeeTokenAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "feeToken",
        "indexed": true
      }
    ]
  },
  {
    "name": "FeeTokenRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "feeToken",
        "indexed": true
      }
    ]
  },
  {
    "name": "OwnershipTransferRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      }
    ]
  },
  {
    "name": "OwnershipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      }
    ]
  },
  {
    "name": "PremiumMultiplierWeiPerEthUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "premiumMultiplierWeiPerEth"
      }
    ]
  },
  {
    "name": "PriceFeedPerTokenUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "priceFeedConfig",
        "components": [
          {
            "type": "address",
            "name": "dataFeedAddress"
          },
          {
            "type": "uint8",
            "name": "tokenDecimals"
          },
          {
            "type": "bool",
            "name": "isEnabled"
          }
        ]
      }
    ]
  },
  {
    "name": "ReportPermissionSet",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reportId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "permission",
        "components": [
          {
            "type": "address",
            "name": "forwarder"
          },
          {
            "type": "bytes10",
            "name": "workflowName"
          },
          {
            "type": "bytes2",
            "name": "reportName"
          },
          {
            "type": "address",
            "name": "workflowOwner"
          },
          {
            "type": "bool",
            "name": "isAllowed"
          }
        ]
      }
    ]
  },
  {
    "name": "TokenTransferFeeConfigDeleted",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      }
    ]
  },
  {
    "name": "TokenTransferFeeConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "tokenTransferFeeConfig",
        "components": [
          {
            "type": "uint32",
            "name": "minFeeUSDCents"
          },
          {
            "type": "uint32",
            "name": "maxFeeUSDCents"
          },
          {
            "type": "uint16",
            "name": "deciBps"
          },
          {
            "type": "uint32",
            "name": "destGasOverhead"
          },
          {
            "type": "uint32",
            "name": "destBytesOverhead"
          },
          {
            "type": "bool",
            "name": "isEnabled"
          }
        ]
      }
    ]
  },
  {
    "name": "UsdPerTokenUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "UsdPerUnitGasUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChain",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "FEE_BASE_DECIMALS",
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
    "name": "KEYSTONE_PRICE_DECIMALS",
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "applyAuthorizedCallerUpdates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "authorizedCallerArgs",
        "components": [
          {
            "type": "address[]",
            "name": "addedCallers"
          },
          {
            "type": "address[]",
            "name": "removedCallers"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "applyDestChainConfigUpdates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "destChainConfigArgs",
        "components": [
          {
            "type": "uint64",
            "name": "destChainSelector"
          },
          {
            "type": "tuple",
            "name": "destChainConfig",
            "components": [
              {
                "type": "bool",
                "name": "isEnabled"
              },
              {
                "type": "uint16",
                "name": "maxNumberOfTokensPerMsg"
              },
              {
                "type": "uint32",
                "name": "maxDataBytes"
              },
              {
                "type": "uint32",
                "name": "maxPerMsgGasLimit"
              },
              {
                "type": "uint32",
                "name": "destGasOverhead"
              },
              {
                "type": "uint8",
                "name": "destGasPerPayloadByteBase"
              },
              {
                "type": "uint8",
                "name": "destGasPerPayloadByteHigh"
              },
              {
                "type": "uint16",
                "name": "destGasPerPayloadByteThreshold"
              },
              {
                "type": "uint32",
                "name": "destDataAvailabilityOverheadGas"
              },
              {
                "type": "uint16",
                "name": "destGasPerDataAvailabilityByte"
              },
              {
                "type": "uint16",
                "name": "destDataAvailabilityMultiplierBps"
              },
              {
                "type": "bytes4",
                "name": "chainFamilySelector"
              },
              {
                "type": "bool",
                "name": "enforceOutOfOrder"
              },
              {
                "type": "uint16",
                "name": "defaultTokenFeeUSDCents"
              },
              {
                "type": "uint32",
                "name": "defaultTokenDestGasOverhead"
              },
              {
                "type": "uint32",
                "name": "defaultTxGasLimit"
              },
              {
                "type": "uint64",
                "name": "gasMultiplierWeiPerEth"
              },
              {
                "type": "uint32",
                "name": "gasPriceStalenessThreshold"
              },
              {
                "type": "uint32",
                "name": "networkFeeUSDCents"
              }
            ]
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "applyFeeTokensUpdates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "feeTokensToRemove"
      },
      {
        "type": "address[]",
        "name": "feeTokensToAdd"
      }
    ],
    "outputs": []
  },
  {
    "name": "applyPremiumMultiplierWeiPerEthUpdates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "premiumMultiplierWeiPerEthArgs",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint64",
            "name": "premiumMultiplierWeiPerEth"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "applyTokenTransferFeeConfigUpdates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "tokenTransferFeeConfigArgs",
        "components": [
          {
            "type": "uint64",
            "name": "destChainSelector"
          },
          {
            "type": "tuple[]",
            "name": "tokenTransferFeeConfigs",
            "components": [
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "tuple",
                "name": "tokenTransferFeeConfig",
                "components": [
                  {
                    "type": "uint32",
                    "name": "minFeeUSDCents"
                  },
                  {
                    "type": "uint32",
                    "name": "maxFeeUSDCents"
                  },
                  {
                    "type": "uint16",
                    "name": "deciBps"
                  },
                  {
                    "type": "uint32",
                    "name": "destGasOverhead"
                  },
                  {
                    "type": "uint32",
                    "name": "destBytesOverhead"
                  },
                  {
                    "type": "bool",
                    "name": "isEnabled"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "tokensToUseDefaultFeeConfigs",
        "components": [
          {
            "type": "uint64",
            "name": "destChainSelector"
          },
          {
            "type": "address",
            "name": "token"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "convertTokenAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "fromToken"
      },
      {
        "type": "uint256",
        "name": "fromTokenAmount"
      },
      {
        "type": "address",
        "name": "toToken"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getAllAuthorizedCallers",
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
    "name": "getDestChainConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint16",
            "name": "maxNumberOfTokensPerMsg"
          },
          {
            "type": "uint32",
            "name": "maxDataBytes"
          },
          {
            "type": "uint32",
            "name": "maxPerMsgGasLimit"
          },
          {
            "type": "uint32",
            "name": "destGasOverhead"
          },
          {
            "type": "uint8",
            "name": "destGasPerPayloadByteBase"
          },
          {
            "type": "uint8",
            "name": "destGasPerPayloadByteHigh"
          },
          {
            "type": "uint16",
            "name": "destGasPerPayloadByteThreshold"
          },
          {
            "type": "uint32",
            "name": "destDataAvailabilityOverheadGas"
          },
          {
            "type": "uint16",
            "name": "destGasPerDataAvailabilityByte"
          },
          {
            "type": "uint16",
            "name": "destDataAvailabilityMultiplierBps"
          },
          {
            "type": "bytes4",
            "name": "chainFamilySelector"
          },
          {
            "type": "bool",
            "name": "enforceOutOfOrder"
          },
          {
            "type": "uint16",
            "name": "defaultTokenFeeUSDCents"
          },
          {
            "type": "uint32",
            "name": "defaultTokenDestGasOverhead"
          },
          {
            "type": "uint32",
            "name": "defaultTxGasLimit"
          },
          {
            "type": "uint64",
            "name": "gasMultiplierWeiPerEth"
          },
          {
            "type": "uint32",
            "name": "gasPriceStalenessThreshold"
          },
          {
            "type": "uint32",
            "name": "networkFeeUSDCents"
          }
        ]
      }
    ]
  },
  {
    "name": "getDestinationChainGasPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint224",
            "name": "value"
          },
          {
            "type": "uint32",
            "name": "timestamp"
          }
        ]
      }
    ]
  },
  {
    "name": "getFeeTokens",
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
    "name": "getPremiumMultiplierWeiPerEth",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "uint64",
        "name": "premiumMultiplierWeiPerEth"
      }
    ]
  },
  {
    "name": "getStaticConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint96",
            "name": "maxFeeJuelsPerMsg"
          },
          {
            "type": "address",
            "name": "linkToken"
          },
          {
            "type": "uint32",
            "name": "tokenPriceStalenessThreshold"
          }
        ]
      }
    ]
  },
  {
    "name": "getTokenAndGasPrices",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint64",
        "name": "destChainSelector"
      }
    ],
    "outputs": [
      {
        "type": "uint224",
        "name": "tokenPrice"
      },
      {
        "type": "uint224",
        "name": "gasPriceValue"
      }
    ]
  },
  {
    "name": "getTokenPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint224",
            "name": "value"
          },
          {
            "type": "uint32",
            "name": "timestamp"
          }
        ]
      }
    ]
  },
  {
    "name": "getTokenPriceFeedConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "dataFeedAddress"
          },
          {
            "type": "uint8",
            "name": "tokenDecimals"
          },
          {
            "type": "bool",
            "name": "isEnabled"
          }
        ]
      }
    ]
  },
  {
    "name": "getTokenPrices",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint224",
            "name": "value"
          },
          {
            "type": "uint32",
            "name": "timestamp"
          }
        ]
      }
    ]
  },
  {
    "name": "getTokenTransferFeeConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      },
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "tokenTransferFeeConfig",
        "components": [
          {
            "type": "uint32",
            "name": "minFeeUSDCents"
          },
          {
            "type": "uint32",
            "name": "maxFeeUSDCents"
          },
          {
            "type": "uint16",
            "name": "deciBps"
          },
          {
            "type": "uint32",
            "name": "destGasOverhead"
          },
          {
            "type": "uint32",
            "name": "destBytesOverhead"
          },
          {
            "type": "bool",
            "name": "isEnabled"
          }
        ]
      }
    ]
  },
  {
    "name": "getValidatedFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      },
      {
        "type": "tuple",
        "name": "message",
        "components": [
          {
            "type": "bytes",
            "name": "receiver"
          },
          {
            "type": "bytes",
            "name": "data"
          },
          {
            "type": "tuple[]",
            "name": "tokenAmounts",
            "components": [
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
            "type": "address",
            "name": "feeToken"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "feeTokenAmount"
      }
    ]
  },
  {
    "name": "getValidatedTokenPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "uint224"
      }
    ]
  },
  {
    "name": "onReport",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "metadata"
      },
      {
        "type": "bytes",
        "name": "report"
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
    "name": "processMessageArgs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      },
      {
        "type": "address",
        "name": "feeToken"
      },
      {
        "type": "uint256",
        "name": "feeTokenAmount"
      },
      {
        "type": "bytes",
        "name": "extraArgs"
      },
      {
        "type": "bytes",
        "name": "messageReceiver"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "msgFeeJuels"
      },
      {
        "type": "bool",
        "name": "isOutOfOrderExecution"
      },
      {
        "type": "bytes",
        "name": "convertedExtraArgs"
      },
      {
        "type": "bytes",
        "name": "tokenReceiver"
      }
    ]
  },
  {
    "name": "processPoolReturnData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      },
      {
        "type": "tuple[]",
        "name": "onRampTokenTransfers",
        "components": [
          {
            "type": "address",
            "name": "sourcePoolAddress"
          },
          {
            "type": "bytes",
            "name": "destTokenAddress"
          },
          {
            "type": "bytes",
            "name": "extraData"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "bytes",
            "name": "destExecData"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "sourceTokenAmounts",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "destExecDataPerToken"
      }
    ]
  },
  {
    "name": "setReportPermissions",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "permissions",
        "components": [
          {
            "type": "address",
            "name": "forwarder"
          },
          {
            "type": "bytes10",
            "name": "workflowName"
          },
          {
            "type": "bytes2",
            "name": "reportName"
          },
          {
            "type": "address",
            "name": "workflowOwner"
          },
          {
            "type": "bool",
            "name": "isAllowed"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "pure",
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
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": []
  },
  {
    "name": "typeAndVersion",
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
    "name": "updatePrices",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "priceUpdates",
        "components": [
          {
            "type": "tuple[]",
            "name": "tokenPriceUpdates",
            "components": [
              {
                "type": "address",
                "name": "sourceToken"
              },
              {
                "type": "uint224",
                "name": "usdPerToken"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "gasPriceUpdates",
            "components": [
              {
                "type": "uint64",
                "name": "destChainSelector"
              },
              {
                "type": "uint224",
                "name": "usdPerUnitGas"
              }
            ]
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "updateTokenPriceFeeds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "tokenPriceFeedUpdates",
        "components": [
          {
            "type": "address",
            "name": "sourceToken"
          },
          {
            "type": "tuple",
            "name": "feedConfig",
            "components": [
              {
                "type": "address",
                "name": "dataFeedAddress"
              },
              {
                "type": "uint8",
                "name": "tokenDecimals"
              },
              {
                "type": "bool",
                "name": "isEnabled"
              }
            ]
          }
        ]
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract