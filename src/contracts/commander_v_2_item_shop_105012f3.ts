import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34666,
  address: '0x3976df2a0d6a971c2b814ce1510f8bfb105012f3' as const,
  contract_name: 'CommanderV2ItemShop',
  display_name: 'Commander V2 Item Shop',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1746557307,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_initialOwner"
      }
    ]
  },
  {
    "name": "ExceedsMaxSupply",
    "type": "error",
    "inputs": []
  },
  {
    "name": "IncorrectRonAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientAllowance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientFacilityLevel",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidCollectionAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPageSize",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPaymentToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidReferralFeeBps",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ItemNotFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ItemSoldOut",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MainContractNotSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MintFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MintNotStarted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotWhitelisted",
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
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "WhitelistNotEnabledForItem",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AddressesAddedToWhitelist",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "addresses"
      }
    ]
  },
  {
    "name": "AddressesRemovedFromWhitelist",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "addresses"
      }
    ]
  },
  {
    "name": "ItemAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "uint256",
        "name": "ronPrice"
      },
      {
        "type": "uint256",
        "name": "maxSupply"
      },
      {
        "type": "uint256",
        "name": "maxPerWallet"
      },
      {
        "type": "uint256",
        "name": "facilityIndexMinimum"
      },
      {
        "type": "uint256",
        "name": "mintStart"
      }
    ]
  },
  {
    "name": "ItemFacilityRequirementUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newFacilityIndexMinimum"
      }
    ]
  },
  {
    "name": "ItemMaxPerWalletUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newMaxPerWalletSupply"
      }
    ]
  },
  {
    "name": "ItemMintStartUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newMintStart"
      }
    ]
  },
  {
    "name": "ItemPurchased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "tokenCost"
      },
      {
        "type": "uint256",
        "name": "ronCost"
      },
      {
        "type": "address",
        "name": "referrer"
      },
      {
        "type": "uint256",
        "name": "tokenReferralAmountPaid"
      },
      {
        "type": "uint256",
        "name": "ronReferralAmountPaid"
      }
    ]
  },
  {
    "name": "ItemRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      }
    ]
  },
  {
    "name": "ItemRonPriceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newRonPrice"
      }
    ]
  },
  {
    "name": "ItemSupplyUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newMaxSupply"
      }
    ]
  },
  {
    "name": "ItemTokenPriceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newPrice"
      }
    ]
  },
  {
    "name": "ItemWhitelistUsageUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "useWhitelist"
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
    "name": "ReferralFeeBpsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newReferralFeeBps"
      }
    ]
  },
  {
    "name": "ReferralPaid",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "referrer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenAmount"
      },
      {
        "type": "uint256",
        "name": "ronAmount"
      }
    ]
  },
  {
    "name": "ReferralPaymentFailed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "referrer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "internalId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenAmountAttempted"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "ronAmountAttempted"
      },
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "name": "addAddressesToWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "address[]",
        "name": "_addresses"
      }
    ],
    "outputs": []
  },
  {
    "name": "addItem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_collection"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "address",
        "name": "_paymentToken"
      },
      {
        "type": "uint256",
        "name": "_price"
      },
      {
        "type": "uint256",
        "name": "_ronPrice"
      },
      {
        "type": "uint256",
        "name": "_maxSupply"
      },
      {
        "type": "uint256",
        "name": "_maxPerWallet"
      },
      {
        "type": "uint256",
        "name": "_facilityIndexMinimum"
      },
      {
        "type": "uint256",
        "name": "_mintStart"
      }
    ],
    "outputs": []
  },
  {
    "name": "buyItem",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "getItem",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "uint256",
            "name": "price"
          },
          {
            "type": "uint256",
            "name": "ronPrice"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint256",
            "name": "maxSupply"
          },
          {
            "type": "uint256",
            "name": "maxPerWallet"
          },
          {
            "type": "uint256",
            "name": "currentSupply"
          },
          {
            "type": "uint256",
            "name": "facilityIndexMinimum"
          },
          {
            "type": "uint256",
            "name": "mintStart"
          },
          {
            "type": "bool",
            "name": "exists"
          }
        ]
      }
    ]
  },
  {
    "name": "getItemsByCollection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_collection"
      },
      {
        "type": "uint256",
        "name": "_startInternalId"
      },
      {
        "type": "uint256",
        "name": "_pageSize"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "matchingItems",
        "components": [
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "uint256",
            "name": "price"
          },
          {
            "type": "uint256",
            "name": "ronPrice"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint256",
            "name": "maxSupply"
          },
          {
            "type": "uint256",
            "name": "maxPerWallet"
          },
          {
            "type": "uint256",
            "name": "currentSupply"
          },
          {
            "type": "uint256",
            "name": "facilityIndexMinimum"
          },
          {
            "type": "uint256",
            "name": "mintStart"
          },
          {
            "type": "bool",
            "name": "exists"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "nextInternalId"
      }
    ]
  },
  {
    "name": "isAddressWhitelistedForItem",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "itemAddressIsWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
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
    "name": "itemCounter",
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
    "name": "itemUsesWhitelist",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "items",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "uint256",
        "name": "ronPrice"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "maxSupply"
      },
      {
        "type": "uint256",
        "name": "maxPerWallet"
      },
      {
        "type": "uint256",
        "name": "currentSupply"
      },
      {
        "type": "uint256",
        "name": "facilityIndexMinimum"
      },
      {
        "type": "uint256",
        "name": "mintStart"
      },
      {
        "type": "bool",
        "name": "exists"
      }
    ]
  },
  {
    "name": "mainContract",
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
    "name": "playersBuyHistory",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
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
    "name": "referralFeeBps",
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
    "name": "referralNativeBonusPaid",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "referralTokenBonusPaid",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "removeAddressesFromWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "address[]",
        "name": "_addresses"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeItem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setItemWhitelistUsage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "bool",
        "name": "_useWhitelist"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMainContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_mainContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "setReferralFeeBps",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newReferralFeeBps"
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
    "name": "updateItemFacilityRequirement",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "uint256",
        "name": "_newFacilityIndexMinimum"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateItemMaxPerWallet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "uint256",
        "name": "_newMaxPerWallet"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateItemMintStart",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "uint256",
        "name": "_newMintStart"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateItemPaymentToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "address",
        "name": "_newPaymentToken"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateItemRonPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "uint256",
        "name": "_newRonPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateItemSupply",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "uint256",
        "name": "_newMaxSupply"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateItemTokenPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_internalId"
      },
      {
        "type": "uint256",
        "name": "_newPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawRon",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract