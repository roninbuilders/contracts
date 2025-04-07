import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27682,
  address: '0x9a1d00e769a108df1cbc3bffcf867b64ba2e9eff' as const,
  contract_name: 'ModuleAcceptOffers',
  display_name: 'Module Accept Offers',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742222834,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "configurationContract"
      }
    ]
  },
  {
    "name": "PaymentProcessor__AmountExceedsMaximum",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__AmountForERC1155SalesGreaterThanZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__AmountForERC721SalesMustEqualOne",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__BadCalldataLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__BadPaymentMethod",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__CosignatureHasExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__CosignerHasSelfDestructed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__DispensingTokenWasUnsuccessful",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__EIP1271SignatureInvalid",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__FailedToTransferProceeds",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__FeeOnTopCannotBeGreaterThanItemPrice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__InputArrayLengthCannotBeZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__InputArrayLengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__InvalidBulkOrderHeight",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__InvalidConstructorArguments",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__InvalidOfferType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__InvalidOrderProtocol",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__InvalidSignatureV",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__MarketplaceAndRoyaltyFeesWillExceedSalePrice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__NotAuthorizedByCosigner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__OnchainRoyaltiesExceedMaximumApprovedRoyaltyFee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__OrderHasExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__OrderIsEitherCancelledOrFilled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__PartialFillsNotSupportedForNonDivisibleItems",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__PaymentCoinIsNotAnApprovedPaymentMethod",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__PermitProcessorNotTrusted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__PermitsAreNotCompatibleWithBulkOrders",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__ProtocolFeeOrTaxExceedsCap",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__ProtocolFeeVersionExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__RanOutOfNativeFunds",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__SalePriceAboveMaximumCeiling",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__SalePriceBelowMinimumFloor",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__SignatureAlreadyUsedOrRevoked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__SignatureNotUsedOrRevoked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__TradeOriginatedFromUntrustedChannel",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__TradingIsPausedForCollection",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__UnableToFillMinimumRequestedQuantity",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__UnauthorizedOrder",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__UnauthorizedTaker",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AcceptOfferERC1155",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "seller",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "beneficiary"
      },
      {
        "type": "address",
        "name": "paymentCoin"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "salePrice"
      }
    ]
  },
  {
    "name": "AcceptOfferERC721",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "seller",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "beneficiary"
      },
      {
        "type": "address",
        "name": "paymentCoin"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "salePrice"
      }
    ]
  },
  {
    "name": "BuyListingERC1155",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "seller",
        "indexed": true
      },
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "beneficiary"
      },
      {
        "type": "address",
        "name": "paymentCoin"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "salePrice"
      }
    ]
  },
  {
    "name": "BuyListingERC721",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "seller",
        "indexed": true
      },
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "beneficiary"
      },
      {
        "type": "address",
        "name": "paymentCoin"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "salePrice"
      }
    ]
  },
  {
    "name": "DestroyedCosigner",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cosigner",
        "indexed": true
      }
    ]
  },
  {
    "name": "MasterNonceInvalidated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ]
  },
  {
    "name": "NonceInvalidated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "wasCancellation"
      }
    ]
  },
  {
    "name": "NonceRestored",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      }
    ]
  },
  {
    "name": "OrderDigestInvalidated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderDigest",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "wasCancellation"
      }
    ]
  },
  {
    "name": "OrderDigestItemsFilled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderDigest",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountFilled"
      }
    ]
  },
  {
    "name": "OrderDigestItemsRestored",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderDigest",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountRestoredToOrder"
      }
    ]
  },
  {
    "name": "OrderDigestOpened",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderDigest",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "orderStartAmount"
      }
    ]
  },
  {
    "name": "PaymentMethodAddedToWhitelist",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "paymentMethodWhitelistId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "paymentMethod",
        "indexed": true
      }
    ]
  },
  {
    "name": "PaymentMethodRemovedFromWhitelist",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "paymentMethodWhitelistId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "paymentMethod",
        "indexed": true
      }
    ]
  },
  {
    "name": "PermittedOrderNonceInvalidated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "permitNonce",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "orderNonce",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "wasCancellation"
      }
    ]
  },
  {
    "name": "ProtocolFeesUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newProtocolFeeRecipient",
        "indexed": true
      },
      {
        "type": "uint16",
        "name": "minimumProtocolFeeBps"
      },
      {
        "type": "uint16",
        "name": "marketplaceFeeProtocolTaxBps"
      },
      {
        "type": "uint16",
        "name": "feeOnTopProtocolTaxBps"
      },
      {
        "type": "uint48",
        "name": "gracePeriodExpiration"
      }
    ]
  },
  {
    "name": "TrustedChannelAddedForCollection",
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
      }
    ]
  },
  {
    "name": "TrustedChannelRemovedForCollection",
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
      }
    ]
  },
  {
    "name": "TrustedPermitProcessorAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "permitProcessor",
        "indexed": true
      }
    ]
  },
  {
    "name": "TrustedPermitProcessorRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "permitProcessor",
        "indexed": true
      }
    ]
  },
  {
    "name": "UpdatedCollectionLevelPricingBoundaries",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "floorPrice"
      },
      {
        "type": "uint256",
        "name": "ceilingPrice"
      }
    ]
  },
  {
    "name": "UpdatedCollectionPaymentSettings",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "paymentSettings"
      },
      {
        "type": "uint32",
        "name": "paymentMethodWhitelistId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "constrainedPricingPaymentMethod",
        "indexed": true
      },
      {
        "type": "uint16",
        "name": "royaltyBackfillNumerator"
      },
      {
        "type": "address",
        "name": "royaltyBackfillReceiver"
      },
      {
        "type": "uint16",
        "name": "royaltyBountyNumerator"
      },
      {
        "type": "address",
        "name": "exclusiveBountyReceiver"
      },
      {
        "type": "bool",
        "name": "blockTradesFromUntrustedChannels"
      },
      {
        "type": "bool",
        "name": "useRoyaltyBackfillAsRoyaltySource"
      }
    ]
  },
  {
    "name": "UpdatedTokenLevelPricingBoundaries",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "floorPrice"
      },
      {
        "type": "uint256",
        "name": "ceilingPrice"
      }
    ]
  },
  {
    "name": "acceptOffer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "offerType"
      },
      {
        "type": "tuple",
        "name": "saleDetails",
        "components": [
          {
            "type": "uint256",
            "name": "protocol"
          },
          {
            "type": "address",
            "name": "maker"
          },
          {
            "type": "address",
            "name": "beneficiary"
          },
          {
            "type": "address",
            "name": "marketplace"
          },
          {
            "type": "address",
            "name": "fallbackRoyaltyRecipient"
          },
          {
            "type": "address",
            "name": "paymentMethod"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "itemPrice"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "uint256",
            "name": "marketplaceFeeNumerator"
          },
          {
            "type": "uint256",
            "name": "maxRoyaltyFeeNumerator"
          },
          {
            "type": "uint256",
            "name": "requestedFillAmount"
          },
          {
            "type": "uint256",
            "name": "minimumFillAmount"
          },
          {
            "type": "uint256",
            "name": "protocolFeeVersion"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "buyerSignature",
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
        "name": "tokenSetProof",
        "components": [
          {
            "type": "bytes32[]",
            "name": "proof"
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
            "type": "address",
            "name": "taker"
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
        "type": "tuple",
        "name": "feeOnTop",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "acceptOfferAdvanced",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "advancedBid",
        "components": [
          {
            "type": "uint256",
            "name": "offerType"
          },
          {
            "type": "tuple",
            "name": "advancedOrder",
            "components": [
              {
                "type": "tuple",
                "name": "saleDetails",
                "components": [
                  {
                    "type": "uint256",
                    "name": "protocol"
                  },
                  {
                    "type": "address",
                    "name": "maker"
                  },
                  {
                    "type": "address",
                    "name": "beneficiary"
                  },
                  {
                    "type": "address",
                    "name": "marketplace"
                  },
                  {
                    "type": "address",
                    "name": "fallbackRoyaltyRecipient"
                  },
                  {
                    "type": "address",
                    "name": "paymentMethod"
                  },
                  {
                    "type": "address",
                    "name": "tokenAddress"
                  },
                  {
                    "type": "uint256",
                    "name": "tokenId"
                  },
                  {
                    "type": "uint256",
                    "name": "amount"
                  },
                  {
                    "type": "uint256",
                    "name": "itemPrice"
                  },
                  {
                    "type": "uint256",
                    "name": "nonce"
                  },
                  {
                    "type": "uint256",
                    "name": "expiration"
                  },
                  {
                    "type": "uint256",
                    "name": "marketplaceFeeNumerator"
                  },
                  {
                    "type": "uint256",
                    "name": "maxRoyaltyFeeNumerator"
                  },
                  {
                    "type": "uint256",
                    "name": "requestedFillAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "minimumFillAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "protocolFeeVersion"
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
                    "type": "address",
                    "name": "taker"
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
                "type": "tuple",
                "name": "permitContext",
                "components": [
                  {
                    "type": "address",
                    "name": "permitProcessor"
                  },
                  {
                    "type": "uint256",
                    "name": "permitNonce"
                  }
                ]
              }
            ]
          },
          {
            "type": "tuple",
            "name": "sellerPermitSignature",
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
        ]
      },
      {
        "type": "tuple",
        "name": "bulkOrderProof",
        "components": [
          {
            "type": "uint256",
            "name": "orderIndex"
          },
          {
            "type": "bytes32[]",
            "name": "proof"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "feeOnTop",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "tokenSetProof",
        "components": [
          {
            "type": "bytes32[]",
            "name": "proof"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkAcceptOffers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "params",
        "components": [
          {
            "type": "uint256",
            "name": "offerType"
          },
          {
            "type": "tuple",
            "name": "saleDetails",
            "components": [
              {
                "type": "uint256",
                "name": "protocol"
              },
              {
                "type": "address",
                "name": "maker"
              },
              {
                "type": "address",
                "name": "beneficiary"
              },
              {
                "type": "address",
                "name": "marketplace"
              },
              {
                "type": "address",
                "name": "fallbackRoyaltyRecipient"
              },
              {
                "type": "address",
                "name": "paymentMethod"
              },
              {
                "type": "address",
                "name": "tokenAddress"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "uint256",
                "name": "itemPrice"
              },
              {
                "type": "uint256",
                "name": "nonce"
              },
              {
                "type": "uint256",
                "name": "expiration"
              },
              {
                "type": "uint256",
                "name": "marketplaceFeeNumerator"
              },
              {
                "type": "uint256",
                "name": "maxRoyaltyFeeNumerator"
              },
              {
                "type": "uint256",
                "name": "requestedFillAmount"
              },
              {
                "type": "uint256",
                "name": "minimumFillAmount"
              },
              {
                "type": "uint256",
                "name": "protocolFeeVersion"
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
                "type": "address",
                "name": "taker"
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
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "feesOnTop",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "tokenSetProofs",
        "components": [
          {
            "type": "bytes32[]",
            "name": "proof"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkAcceptOffersAdvanced",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "advancedBidsArray",
        "components": [
          {
            "type": "uint256",
            "name": "offerType"
          },
          {
            "type": "tuple",
            "name": "advancedOrder",
            "components": [
              {
                "type": "tuple",
                "name": "saleDetails",
                "components": [
                  {
                    "type": "uint256",
                    "name": "protocol"
                  },
                  {
                    "type": "address",
                    "name": "maker"
                  },
                  {
                    "type": "address",
                    "name": "beneficiary"
                  },
                  {
                    "type": "address",
                    "name": "marketplace"
                  },
                  {
                    "type": "address",
                    "name": "fallbackRoyaltyRecipient"
                  },
                  {
                    "type": "address",
                    "name": "paymentMethod"
                  },
                  {
                    "type": "address",
                    "name": "tokenAddress"
                  },
                  {
                    "type": "uint256",
                    "name": "tokenId"
                  },
                  {
                    "type": "uint256",
                    "name": "amount"
                  },
                  {
                    "type": "uint256",
                    "name": "itemPrice"
                  },
                  {
                    "type": "uint256",
                    "name": "nonce"
                  },
                  {
                    "type": "uint256",
                    "name": "expiration"
                  },
                  {
                    "type": "uint256",
                    "name": "marketplaceFeeNumerator"
                  },
                  {
                    "type": "uint256",
                    "name": "maxRoyaltyFeeNumerator"
                  },
                  {
                    "type": "uint256",
                    "name": "requestedFillAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "minimumFillAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "protocolFeeVersion"
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
                    "type": "address",
                    "name": "taker"
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
                "type": "tuple",
                "name": "permitContext",
                "components": [
                  {
                    "type": "address",
                    "name": "permitProcessor"
                  },
                  {
                    "type": "uint256",
                    "name": "permitNonce"
                  }
                ]
              }
            ]
          },
          {
            "type": "tuple",
            "name": "sellerPermitSignature",
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
        ]
      },
      {
        "type": "tuple[]",
        "name": "bulkOrderProofs",
        "components": [
          {
            "type": "uint256",
            "name": "orderIndex"
          },
          {
            "type": "bytes32[]",
            "name": "proof"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "feesOnTop",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "tokenSetProofs",
        "components": [
          {
            "type": "bytes32[]",
            "name": "proof"
          }
        ]
      }
    ],
    "outputs": []
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract