import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27683,
  address: '0x9a1d005da1e3dabce14bc9734dee692a8978c71c' as const,
  contract_name: 'ModuleOnChainCancellation',
  display_name: 'Module On Chain Cancellation',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742222825,
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
    "name": "PaymentProcessor__InvalidConstructorArguments",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__InvalidSignatureV",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__NotAuthorizedByCosigner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__OrderIsEitherCancelledOrFilled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentProcessor__SignatureAlreadyUsedOrRevoked",
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
    "name": "destroyCosigner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cosigner"
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
        "type": "bytes32",
        "name": "orderDigest"
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
        "type": "uint256",
        "name": "nonce"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract