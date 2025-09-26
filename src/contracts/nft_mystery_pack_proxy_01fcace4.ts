import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36624,
  address: '0x75a1964f9be4e661d3aeb05dbbcbcd9701fcace4' as const,
  contract_name: 'BeaconProxy',
  display_name: 'NFT Mystery Pack Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xbd3b247473dd3d8b14bc2e8e8fd5a5dc6e3dfbf1',
  created_at: 1751944785,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "beacon"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ]
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "ERC1967InvalidBeacon",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "beacon"
      }
    ]
  },
  {
    "name": "ERC1967InvalidImplementation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      }
    ]
  },
  {
    "name": "ERC1967NonPayable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AccessControlBadConfirmation",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AccessControlUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "neededRole"
      }
    ]
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "AddressInsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "AssetAlreadyExists",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BuybackExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BuybackNotEnabled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EnforcedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpectedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpectedSelectorPaused",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "selector"
      }
    ]
  },
  {
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InactivePack",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientAssets",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientBuybackBalance",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "available"
      },
      {
        "type": "uint256",
        "name": "required"
      }
    ]
  },
  {
    "name": "InsufficientFunds",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "available"
      },
      {
        "type": "uint256",
        "name": "required"
      }
    ]
  },
  {
    "name": "InsufficientRefundAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidBuybackPrice",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "buybackRatio"
      },
      {
        "type": "uint256",
        "name": "buybackPrice"
      }
    ]
  },
  {
    "name": "InvalidDecayConfig",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "interval"
      },
      {
        "type": "uint256",
        "name": "duration"
      }
    ]
  },
  {
    "name": "InvalidDecayRatioRange",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "startRatio"
      },
      {
        "type": "uint256",
        "name": "endRatio"
      }
    ]
  },
  {
    "name": "InvalidExpectedPrice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidMysteryPackManager",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPaymentToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPlatformFees",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "totalPlatformFees"
      },
      {
        "type": "uint256",
        "name": "packPrice"
      }
    ]
  },
  {
    "name": "InvalidPrice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRandomWordsLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRatio",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "have"
      },
      {
        "type": "uint256",
        "name": "want"
      }
    ]
  },
  {
    "name": "InvalidTierConfiguration",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTimeRange",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "endTime"
      }
    ]
  },
  {
    "name": "InvalidTotalTierRatios",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidVRFCoordinator",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidWithdrawalAccount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MathOverflowedMulDiv",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoTiers",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NonExistentAsset",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NonExistentPackId",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NonExistentRequest",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyManager",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OutOfStock",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId"
      }
    ]
  },
  {
    "name": "PackAlreadyPaused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RevenueScatteringFailed",
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
    "name": "SelectorPaused",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "selector"
      }
    ]
  },
  {
    "name": "TooManyPacks",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "maxPackOpenPerTx"
      }
    ]
  },
  {
    "name": "TransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AssetsDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "address",
        "name": "by"
      }
    ]
  },
  {
    "name": "AssetsWithdrew",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "address",
        "name": "to"
      }
    ]
  },
  {
    "name": "FundsDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "paymentToken",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "FundsWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "address",
        "name": "paymentToken",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": true
      }
    ]
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
    "name": "InsufficientBuybackFund",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "available"
      },
      {
        "type": "uint256",
        "name": "required"
      }
    ]
  },
  {
    "name": "MaxPackOpenPerTxUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "maxPackOpenPerTx"
      }
    ]
  },
  {
    "name": "MysteryPackOpened",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "requester",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint32",
        "name": "amount",
        "indexed": true
      },
      {
        "type": "bytes32[]",
        "name": "requestHashes"
      },
      {
        "type": "uint256",
        "name": "totalRequestPrice"
      }
    ]
  },
  {
    "name": "MysteryPackUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "newPack",
        "components": [
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint96",
            "name": "unitPrice"
          },
          {
            "type": "uint40",
            "name": "activationTime"
          },
          {
            "type": "uint32",
            "name": "buybackExpiration"
          },
          {
            "type": "uint32",
            "name": "decayInterval"
          },
          {
            "type": "uint32",
            "name": "decayDuration"
          },
          {
            "type": "uint16",
            "name": "buybackStartRatio"
          },
          {
            "type": "uint16",
            "name": "buybackEndRatio"
          },
          {
            "type": "bool",
            "name": "buybackEnabled"
          },
          {
            "type": "address",
            "name": "buybackToken"
          }
        ]
      }
    ]
  },
  {
    "name": "NFTPriceOverrode",
    "type": "event",
    "inputs": [
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
        "type": "uint256",
        "name": "price"
      }
    ]
  },
  {
    "name": "NFTSoldBack",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "buybackPrice"
      }
    ]
  },
  {
    "name": "NFTsClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ]
  },
  {
    "name": "PartialPaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "bytes4",
        "name": "selector",
        "indexed": true
      }
    ]
  },
  {
    "name": "PartialUnpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "bytes4",
        "name": "selector",
        "indexed": true
      }
    ]
  },
  {
    "name": "Paused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "RandomRequestFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "requester",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "revenue",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "numOpenedPacks"
      },
      {
        "type": "uint256[]",
        "name": "outOfStockHitsByTier"
      },
      {
        "type": "tuple",
        "name": "refundOutput",
        "components": [
          {
            "type": "bool",
            "name": "success"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "token"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "outputs",
        "components": [
          {
            "type": "uint256",
            "name": "tierId"
          },
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "recipients",
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
    ]
  },
  {
    "name": "RewardTiersUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "rewardTiers",
        "components": [
          {
            "type": "uint96",
            "name": "price"
          },
          {
            "type": "uint16",
            "name": "ratio"
          }
        ]
      }
    ]
  },
  {
    "name": "RoleAdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "previousAdminRole",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "newAdminRole",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleGranted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleRevoked",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "VRFCoordinatorAddressUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newCoordinator",
        "indexed": true
      }
    ]
  },
  {
    "name": "VRFCoordinatorMigrated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldCoordinator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newCoordinator",
        "indexed": true
      }
    ]
  },
  {
    "name": "DEFAULT_ADMIN_ROLE",
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
    "name": "DEPOSITOR_ROLE",
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
    "name": "MAX_GAS_FOR_TRANSFER_NATIVE",
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
    "name": "MAX_PACK_OPEN_PER_TX",
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
    "name": "MAX_PERCENTAGE",
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
    "name": "OPERATOR_ROLE",
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
    "name": "PAUSER_ROLE",
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
    "name": "batchClaimPendingNFTs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tierIds"
      },
      {
        "type": "address[][]",
        "name": "collections"
      },
      {
        "type": "uint256[][][]",
        "name": "tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchDepositAssetsToPack",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tierIds"
      },
      {
        "type": "address[]",
        "name": "collections"
      },
      {
        "type": "uint256[][]",
        "name": "ids"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchSellBackNFTs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tierIds"
      },
      {
        "type": "address[]",
        "name": "collections"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkOverrideBuybackBasePriceByNFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "collections"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint96[]",
        "name": "prices"
      }
    ],
    "outputs": []
  },
  {
    "name": "calculateBuybackPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId"
      },
      {
        "type": "uint256",
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "endTime"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "buybackPrice"
      }
    ]
  },
  {
    "name": "claimPendingNFTs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId"
      },
      {
        "type": "address[]",
        "name": "collections"
      },
      {
        "type": "uint256[][]",
        "name": "tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "depositAssetsToPack",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId"
      },
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      }
    ],
    "outputs": []
  },
  {
    "name": "depositFunds",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "estimateGasForVRFFulfillment",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "gasPrice"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalCallbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "totalRequestPrice"
      }
    ]
  },
  {
    "name": "getAssetsPendingToClaim",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId"
      },
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "items",
        "components": [
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          }
        ]
      }
    ]
  },
  {
    "name": "getAvailableAssetsInTier",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "items",
        "components": [
          {
            "type": "address",
            "name": "collection"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          }
        ]
      }
    ]
  },
  {
    "name": "getBuybackBasePrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId"
      },
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint96",
        "name": "price"
      }
    ]
  },
  {
    "name": "getLastFulfillmentTime",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
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
    "name": "getMaxPackOpenPerTx",
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
    "name": "getMysteryPack",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint96",
            "name": "unitPrice"
          },
          {
            "type": "uint40",
            "name": "activationTime"
          },
          {
            "type": "uint32",
            "name": "buybackExpiration"
          },
          {
            "type": "uint32",
            "name": "decayInterval"
          },
          {
            "type": "uint32",
            "name": "decayDuration"
          },
          {
            "type": "uint16",
            "name": "buybackStartRatio"
          },
          {
            "type": "uint16",
            "name": "buybackEndRatio"
          },
          {
            "type": "bool",
            "name": "buybackEnabled"
          },
          {
            "type": "address",
            "name": "buybackToken"
          }
        ]
      }
    ]
  },
  {
    "name": "getNFTPriceOverride",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint96",
        "name": "price"
      }
    ]
  },
  {
    "name": "getRequestInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "requester"
          },
          {
            "type": "uint96",
            "name": "packUnitPrice"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint32",
            "name": "amount"
          },
          {
            "type": "tuple[]",
            "name": "platformFeeForUnitPrice",
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
        ]
      }
    ]
  },
  {
    "name": "getRewardTiers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint96",
            "name": "price"
          },
          {
            "type": "uint16",
            "name": "ratio"
          }
        ]
      }
    ]
  },
  {
    "name": "getRoleAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getRoleMember",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getRoleMemberCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getWithdrawableBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "address",
        "name": "paymentToken"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "grantRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "hasRole",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
        "name": "owner"
      },
      {
        "type": "address",
        "name": "mysteryPackManager_"
      },
      {
        "type": "address",
        "name": "vrfCoordinator_"
      },
      {
        "type": "tuple",
        "name": "mysteryPack",
        "components": [
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint96",
            "name": "unitPrice"
          },
          {
            "type": "uint40",
            "name": "activationTime"
          },
          {
            "type": "uint32",
            "name": "buybackExpiration"
          },
          {
            "type": "uint32",
            "name": "decayInterval"
          },
          {
            "type": "uint32",
            "name": "decayDuration"
          },
          {
            "type": "uint16",
            "name": "buybackStartRatio"
          },
          {
            "type": "uint16",
            "name": "buybackEndRatio"
          },
          {
            "type": "bool",
            "name": "buybackEnabled"
          },
          {
            "type": "address",
            "name": "buybackToken"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "rewardTiers",
        "components": [
          {
            "type": "uint96",
            "name": "price"
          },
          {
            "type": "uint16",
            "name": "ratio"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "migrateVRFCoordinator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newCoordinator"
      }
    ],
    "outputs": []
  },
  {
    "name": "mysteryPackManager",
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
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "pure",
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
    "name": "openMysteryPack",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint32",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "gasPriceToFulFill"
      },
      {
        "type": "uint256",
        "name": "expectPrice"
      }
    ],
    "outputs": [
      {
        "type": "bytes32[]",
        "name": "requestHashes"
      }
    ]
  },
  {
    "name": "overrideBuybackBasePriceByNFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint96",
        "name": "price"
      }
    ],
    "outputs": []
  },
  {
    "name": "partialPaused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4",
        "name": "selector"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "pause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes4",
        "name": "selector"
      }
    ],
    "outputs": []
  },
  {
    "name": "paused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "result"
      }
    ]
  },
  {
    "name": "rawFulfillRandomSeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      },
      {
        "type": "uint256",
        "name": "randomSeed"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "callerConfirmation"
      }
    ],
    "outputs": []
  },
  {
    "name": "revokeRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "sellBackNFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId"
      },
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxPackOpenPerTx",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "maxPackOpenPerTx"
      }
    ],
    "outputs": []
  },
  {
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "view",
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes4",
        "name": "selector"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateMysteryPack",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "newPack",
        "components": [
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint96",
            "name": "unitPrice"
          },
          {
            "type": "uint40",
            "name": "activationTime"
          },
          {
            "type": "uint32",
            "name": "buybackExpiration"
          },
          {
            "type": "uint32",
            "name": "decayInterval"
          },
          {
            "type": "uint32",
            "name": "decayDuration"
          },
          {
            "type": "uint16",
            "name": "buybackStartRatio"
          },
          {
            "type": "uint16",
            "name": "buybackEndRatio"
          },
          {
            "type": "bool",
            "name": "buybackEnabled"
          },
          {
            "type": "address",
            "name": "buybackToken"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "tiers",
        "components": [
          {
            "type": "uint96",
            "name": "price"
          },
          {
            "type": "uint16",
            "name": "ratio"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "vrfCoordinator",
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
    "name": "withdrawAssetsFromPack",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tierId"
      },
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawFunds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract