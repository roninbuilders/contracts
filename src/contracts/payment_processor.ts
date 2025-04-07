import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27681,
  address: '0x9a1d00000000fc540e2000560054812452eb5366' as const,
  contract_name: 'PaymentProcessor',
  display_name: 'Payment Processor',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742222909,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "configurationContract"
      },
      {
        "type": "address",
        "name": "roleServer"
      }
    ]
  },
  {
    "name": "Error__BadConstructorArgument",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyDirectCalls",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__CallerIsNotSettingsRegistryOrSelf",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__InvalidConstructorArguments",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__MaxGracePeriodExceeded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__ProtocolFeeOrTaxExceedsCap",
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
    "name": "RoleUpdatesRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "roleServer",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
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
    "name": "__activateTstore",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "acceptOffer",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "acceptOfferAdvanced",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkAcceptOffers",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkAcceptOffersAdvanced",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkBuyListings",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkBuyListingsAdvanced",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "buyListing",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "buyListingAdvanced",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkCollectionTrustedChannels",
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
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isAllowed"
      }
    ]
  },
  {
    "name": "checkSyncCollectionSettings",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkSyncTokenPricingBounds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "checkTrustedPermitProcessors",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "permitProcessor"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isTrusted"
      }
    ]
  },
  {
    "name": "checkWhitelistedPaymentMethod",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "whitelistId"
      },
      {
        "type": "address",
        "name": "paymentMethod"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isWhitelisted"
      }
    ]
  },
  {
    "name": "collectionBountySettings",
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
        "type": "uint16",
        "name": "royaltyBountyNumerator"
      },
      {
        "type": "address",
        "name": "exclusiveBountyReceiver"
      }
    ]
  },
  {
    "name": "collectionConstrainedPaymentMethod",
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
        "type": "address"
      }
    ]
  },
  {
    "name": "collectionPaymentSettings",
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
        "type": "tuple",
        "components": [
          {
            "type": "bool",
            "name": "initialized"
          },
          {
            "type": "uint8",
            "name": "paymentSettings"
          },
          {
            "type": "uint32",
            "name": "paymentMethodWhitelistId"
          },
          {
            "type": "address",
            "name": "royaltyBackfillReceiver"
          },
          {
            "type": "uint16",
            "name": "royaltyBackfillNumerator"
          },
          {
            "type": "uint16",
            "name": "royaltyBountyNumerator"
          },
          {
            "type": "uint8",
            "name": "flags"
          }
        ]
      }
    ]
  },
  {
    "name": "collectionRoyaltyBackfillSettings",
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
        "type": "uint16",
        "name": "royaltyBackfillNumerator"
      },
      {
        "type": "address",
        "name": "royaltyBackfillReceiver"
      }
    ]
  },
  {
    "name": "destroyCosigner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "getCeilingPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getDefaultPaymentMethods",
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
    "name": "getDomainSeparator",
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
    "name": "getFloorPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getProtocolFeeVersion",
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
    "name": "getProtocolFees",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "version"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "protocolFees",
        "components": [
          {
            "type": "address",
            "name": "protocolFeeReceiver"
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
            "name": "versionExpiration"
          }
        ]
      }
    ]
  },
  {
    "name": "getProtocolFees",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "name": "protocolFees",
        "components": [
          {
            "type": "address",
            "name": "protocolFeeReceiver"
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
            "name": "versionExpiration"
          }
        ]
      }
    ]
  },
  {
    "name": "isDefaultPaymentMethod",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "paymentMethod"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isNonceUsed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isUsed"
      }
    ]
  },
  {
    "name": "isPaymentMethodWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "paymentMethodWhitelistId"
      },
      {
        "type": "address",
        "name": "paymentMethod"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
    "name": "masterNonces",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "registrySyncSettings",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "registryUpdateTokenPricingBounds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "tuple[]",
        "name": "pricingBounds",
        "components": [
          {
            "type": "bool",
            "name": "isSet"
          },
          {
            "type": "uint120",
            "name": "floorPrice"
          },
          {
            "type": "uint120",
            "name": "ceilingPrice"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "registryUpdateTrustedChannels",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "address[]",
        "name": "channelsToUpdate"
      },
      {
        "type": "bool",
        "name": "channelsAdded"
      }
    ],
    "outputs": []
  },
  {
    "name": "registryUpdateTrustedPermitProcessors",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "permitProcessors"
      },
      {
        "type": "bool",
        "name": "permitProcessorsAdded"
      }
    ],
    "outputs": []
  },
  {
    "name": "registryUpdateWhitelistPaymentMethods",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "paymentMethodWhitelistId"
      },
      {
        "type": "address[]",
        "name": "paymentMethods"
      },
      {
        "type": "bool",
        "name": "paymentMethodsAdded"
      }
    ],
    "outputs": []
  },
  {
    "name": "remainingFillableQuantity",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "orderDigest"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint8",
            "name": "state"
          },
          {
            "type": "uint248",
            "name": "remainingFillableQuantity"
          }
        ]
      }
    ]
  },
  {
    "name": "revokeMasterNonce",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "revokeOrderDigest",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "revokeSingleNonce",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "setProtocolFees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "protocolFees",
        "components": [
          {
            "type": "address",
            "name": "protocolFeeReceiver"
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
            "name": "versionExpiration"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "gracePeriodSeconds"
      }
    ],
    "outputs": []
  },
  {
    "name": "sweepCollection",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "sweepCollectionAdvanced",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "wrappedNativeCoinAddress",
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