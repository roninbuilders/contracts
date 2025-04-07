import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27686,
  address: '0x9a1d001a842c5e6c74b33f2aeedec07f0cb20bc4' as const,
  contract_name: 'CollectionSettingsRegistry',
  display_name: 'Collection Settings Registry',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742222741,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "defaultContractOwner_"
      }
    ]
  },
  {
    "name": "CollectionSettingsRegistry__CallerDoesNotOwnPaymentMethodWhitelist",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CollectionSettingsRegistry__CallerDoesNotOwnTrustedPermitProcessorList",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CollectionSettingsRegistry__CallerMustHaveElevatedPermissionsForSpecifiedNFT",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CollectionSettingsRegistry__CannotSyncRemovalOfWhitelistedPaymentMethod",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CollectionSettingsRegistry__CeilingPriceMustBeGreaterThanFloorPrice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CollectionSettingsRegistry__InputArrayLengthCannotBeZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CollectionSettingsRegistry__InputArrayLengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CollectionSettingsRegistry__PaymentMethodWhitelistDoesNotExist",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CollectionSettingsRegistry__PaymentMethodWhitelistInvalidState",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CollectionSettingsRegistry__PaymentMethodWhitelistOwnershipCannotBeTransferredToZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CollectionSettingsRegistry__RoyaltyBackfillNumeratorCannotExceedFeeDenominator",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CollectionSettingsRegistry__RoyaltyBountyNumeratorCannotExceedFeeDenominator",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatedPaymentMethodWhitelist",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "paymentMethodWhitelistId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "whitelistOwner",
        "indexed": true
      },
      {
        "type": "string",
        "name": "whitelistName"
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
    "name": "ReassignedPaymentMethodWhitelistOwnership",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "id",
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
    "name": "UpdatedCollectionPaymentSettings",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "params",
        "components": [
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
            "name": "constrainedPricingPaymentMethod"
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
            "type": "uint16",
            "name": "extraData"
          },
          {
            "type": "uint120",
            "name": "collectionMinimumFloorPrice"
          },
          {
            "type": "uint120",
            "name": "collectionMaximumCeilingPrice"
          }
        ]
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
    "name": "addTrustedChannelForCollection",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "address[]",
        "name": "channels"
      },
      {
        "type": "address[]",
        "name": "paymentProcessorsToSync"
      }
    ],
    "outputs": []
  },
  {
    "name": "addTrustedPermitProcessors",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "permitProcessors"
      },
      {
        "type": "address[]",
        "name": "paymentProcessorsToSync"
      }
    ],
    "outputs": []
  },
  {
    "name": "createPaymentMethodWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "whitelistName"
      }
    ],
    "outputs": [
      {
        "type": "uint32",
        "name": "paymentMethodWhitelistId"
      }
    ]
  },
  {
    "name": "getCollectionSettings",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "bytes32[]",
        "name": "dataExtensions"
      },
      {
        "type": "bytes32[]",
        "name": "wordExtensions"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "collectionCoreSettings",
        "components": [
          {
            "type": "bool",
            "name": "initialized"
          },
          {
            "type": "uint8",
            "name": "paymentSettingsType"
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
            "type": "uint16",
            "name": "extraData"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "collectionPricingBounds",
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
      },
      {
        "type": "address",
        "name": "constrainedPricingPaymentMethod"
      },
      {
        "type": "address",
        "name": "exclusiveBountyReceiver"
      },
      {
        "type": "bytes[]",
        "name": "data"
      },
      {
        "type": "bytes32[]",
        "name": "words"
      }
    ]
  },
  {
    "name": "getCollectionSettingsExtendedData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "bytes32[]",
        "name": "extensions"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "data"
      }
    ]
  },
  {
    "name": "getCollectionSettingsExtendedWords",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "bytes32[]",
        "name": "extensions"
      }
    ],
    "outputs": [
      {
        "type": "bytes32[]",
        "name": "words"
      }
    ]
  },
  {
    "name": "getTokenBoundPricing",
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
        "type": "tuple",
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
    ]
  },
  {
    "name": "getTrustedChannels",
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
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getWhitelistedPaymentMethods",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "paymentMethodWhitelistId"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "isCollectionSettingsInitialized",
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
        "name": "isInitialized"
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
    "name": "isTrustedChannelForCollection",
    "type": "function",
    "stateMutability": "view",
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
        "name": "channelIsTrusted"
      }
    ]
  },
  {
    "name": "isTrustedPermitProcessor",
    "type": "function",
    "stateMutability": "view",
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
    "name": "isWhitelistedPaymentMethod",
    "type": "function",
    "stateMutability": "view",
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
        "name": "paymentMethodWhitelisted"
      }
    ]
  },
  {
    "name": "lastPaymentMethodWhitelistId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "paymentMethodWhitelistOwners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "paymentMethodWhitelistId"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "reassignOwnershipOfPaymentMethodWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "id"
      },
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeTrustedChannelForCollection",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "address[]",
        "name": "channels"
      },
      {
        "type": "address[]",
        "name": "paymentProcessorsToSync"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeTrustedPermitProcessors",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "permitProcessors"
      },
      {
        "type": "address[]",
        "name": "paymentProcessorsToSync"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceOwnershipOfPaymentMethodWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "id"
      }
    ],
    "outputs": []
  },
  {
    "name": "setCollectionPaymentSettings",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "tuple",
        "name": "params",
        "components": [
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
            "name": "constrainedPricingPaymentMethod"
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
            "type": "uint16",
            "name": "extraData"
          },
          {
            "type": "uint120",
            "name": "collectionMinimumFloorPrice"
          },
          {
            "type": "uint120",
            "name": "collectionMaximumCeilingPrice"
          }
        ]
      },
      {
        "type": "bytes32[]",
        "name": "dataExtensions"
      },
      {
        "type": "bytes[]",
        "name": "dataSettings"
      },
      {
        "type": "bytes32[]",
        "name": "wordExtensions"
      },
      {
        "type": "bytes32[]",
        "name": "wordSettings"
      },
      {
        "type": "address[]",
        "name": "paymentProcessorsToSync"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTokenPricingBounds",
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
      },
      {
        "type": "address[]",
        "name": "paymentProcessorsToSync"
      }
    ],
    "outputs": []
  },
  {
    "name": "syncRemovedPaymentMethodsFromWhitelist",
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
        "type": "address[]",
        "name": "paymentProcessorsToSync"
      }
    ],
    "outputs": []
  },
  {
    "name": "unwhitelistPaymentMethod",
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
        "type": "address[]",
        "name": "paymentProcessorsToSync"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistPaymentMethod",
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
        "type": "address[]",
        "name": "paymentProcessorsToSync"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract