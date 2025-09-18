import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37040,
  address: '0xb1ea40b38ebd26a880f79a02b183675ef14636c3' as const,
  contract_name: 'HordeLaunchpadProxy',
  display_name: 'Horde Launchpad Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xa9aa53f3d8706d58c87576dc8f16cb5b23c096e3',
  created_at: 1757960752,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "address",
        "name": "admin_"
      },
      {
        "type": "bytes",
        "name": "_data"
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
    "name": "ERC1967InvalidAdmin",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
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
    "name": "FailedCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ProxyDeniedAdminAccess",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
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
    "name": "ErrEnforcedLaunchPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrErc20DistributionFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrErc20PaymentFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrExpectedLaunchPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrFeeExceedsLimit",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInsufficientTokenOwnership",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "tokenContract"
      },
      {
        "type": "uint256",
        "name": "required"
      },
      {
        "type": "uint256",
        "name": "owned"
      }
    ]
  },
  {
    "name": "ErrInsufficientTxValue",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "actual"
      },
      {
        "type": "uint256",
        "name": "expected"
      }
    ]
  },
  {
    "name": "ErrInvalidCreator",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidFeeConfiguration",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidLaunchSupply",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidLaunchpadId",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidMaxMintablePerWallet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidMaxSupply",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidRoyalty",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidStageIndex",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidStageTime",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidStageType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidTier",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidTokenGatingConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidTokenGatingData",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidTokenStandard",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrLimitPerWalletExceeded",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "limitPerWallet"
      },
      {
        "type": "uint256",
        "name": "remainMintable"
      },
      {
        "type": "uint256",
        "name": "mintQuantity"
      }
    ]
  },
  {
    "name": "ErrMaxSupplyExceeded",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "remainingSupply"
      },
      {
        "type": "uint256",
        "name": "mintQuantity"
      }
    ]
  },
  {
    "name": "ErrMinterNotAllowed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "minter"
      }
    ]
  },
  {
    "name": "ErrNFTContractExisted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNFTContractNotExisted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNotEligibleForStage",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrPaymentDistributionFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrRefundFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrStageEnded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrStageNotStarted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrStageSupplyExceeded",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "maxSupply"
      },
      {
        "type": "uint256",
        "name": "remainingSupply"
      },
      {
        "type": "uint256",
        "name": "mintQuantity"
      }
    ]
  },
  {
    "name": "ErrTokenAlreadyRedeemed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "tokenContract"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "ErrTokenNotEligible",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "tokenContract"
      }
    ]
  },
  {
    "name": "ErrUnsupportedNFTInterface",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUserNotInTier",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrWronPaymentFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrZeroMintQuantity",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AllStagesCompleted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalMinted"
      }
    ]
  },
  {
    "name": "HordeLaunchpadInitialized",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "address[]",
        "name": "operators"
      },
      {
        "type": "address[]",
        "name": "pausers"
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
    "name": "LaunchPaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "LaunchUnpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "LaunchpadCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "creator",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "standard"
      },
      {
        "type": "uint256",
        "name": "launchSupply"
      },
      {
        "type": "bool",
        "name": "allowCumulativeLimit"
      }
    ]
  },
  {
    "name": "LaunchpadStatusChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "status"
      }
    ]
  },
  {
    "name": "MintSuccess",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "minter",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "mintQuantity"
      },
      {
        "type": "uint256",
        "name": "actualPrice"
      },
      {
        "type": "uint8",
        "name": "stageIndex"
      },
      {
        "type": "uint8",
        "name": "stageType"
      }
    ]
  },
  {
    "name": "NFTContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newContract",
        "indexed": true
      }
    ]
  },
  {
    "name": "RequirementTokenRedeemed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "stageIndex",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "address",
        "name": "tokenContract"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "quantity"
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
    "name": "StageConfigured",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "stageIndex",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "stageType"
      },
      {
        "type": "bytes",
        "name": "stageData"
      }
    ]
  },
  {
    "name": "TierAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "stageIndex",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "tierId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "tier",
        "components": [
          {
            "type": "uint80",
            "name": "mintPrice"
          },
          {
            "type": "uint32",
            "name": "mintableLimit"
          },
          {
            "type": "uint144",
            "name": "_reserved"
          }
        ]
      }
    ]
  },
  {
    "name": "TierUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "stageIndex",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "tierId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "tier",
        "components": [
          {
            "type": "uint80",
            "name": "mintPrice"
          },
          {
            "type": "uint32",
            "name": "mintableLimit"
          },
          {
            "type": "uint144",
            "name": "_reserved"
          }
        ]
      }
    ]
  },
  {
    "name": "UserAssignedToTier",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "stageIndex",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "tierId"
      }
    ]
  },
  {
    "name": "WhitelistUsersAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "stageIndex",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "users"
      }
    ]
  },
  {
    "name": "WhitelistUsersRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "stageIndex",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "users"
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
    "name": "MAX_FEE_BPS",
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
    "name": "MAX_STAGES",
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
    "name": "PUBLIC_STAGE_INDEX",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "addNewStages",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint8[]",
        "name": "stageTypes"
      },
      {
        "type": "bytes[]",
        "name": "stageDatas"
      }
    ],
    "outputs": []
  },
  {
    "name": "addNewTierInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint8",
        "name": "stageIndex"
      },
      {
        "type": "tuple",
        "name": "userTierData",
        "components": [
          {
            "type": "uint80",
            "name": "mintPrice"
          },
          {
            "type": "uint32",
            "name": "mintableLimit"
          },
          {
            "type": "uint144",
            "name": "_reserved"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "newTierId"
      }
    ]
  },
  {
    "name": "addWhitelistUsers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint8",
        "name": "stageIndex"
      },
      {
        "type": "address[]",
        "name": "users"
      }
    ],
    "outputs": []
  },
  {
    "name": "areAllStagesCompleted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "assignUsersToTier",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint8",
        "name": "stageIndex"
      },
      {
        "type": "uint8[]",
        "name": "tierIds"
      },
      {
        "type": "address[][]",
        "name": "usersByTier"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkAndUpdateLaunchpadStatus",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isCompleted"
      }
    ]
  },
  {
    "name": "checkIsEligible",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint8",
        "name": "stageIndex"
      },
      {
        "type": "address",
        "name": "minter"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "createLaunchpad",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint8",
        "name": "standard"
      },
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "uint256",
        "name": "launchSupply"
      },
      {
        "type": "bool",
        "name": "allowCumulativeLimit"
      },
      {
        "type": "tuple[]",
        "name": "allocations",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint16",
            "name": "feeBps"
          },
          {
            "type": "uint8",
            "name": "party"
          },
          {
            "type": "uint72",
            "name": "_reserved"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "publicStage",
        "components": [
          {
            "type": "tuple",
            "name": "config",
            "components": [
              {
                "type": "uint64",
                "name": "startTime"
              },
              {
                "type": "uint64",
                "name": "endTime"
              },
              {
                "type": "uint32",
                "name": "maxMintablePerWallet"
              },
              {
                "type": "uint32",
                "name": "maxSupply"
              },
              {
                "type": "uint64",
                "name": "_reserved"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "paymentInfo",
            "components": [
              {
                "type": "address",
                "name": "currency"
              },
              {
                "type": "uint80",
                "name": "mintPrice"
              },
              {
                "type": "uint16",
                "name": "_reserved"
              }
            ]
          }
        ]
      },
      {
        "type": "uint8[]",
        "name": "conditionalTypes"
      },
      {
        "type": "bytes[]",
        "name": "conditionalStages"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAllConstants",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "maxPercentage"
      },
      {
        "type": "uint32",
        "name": "infiniteLimit"
      },
      {
        "type": "uint8",
        "name": "publicStageIndex"
      },
      {
        "type": "uint64",
        "name": "infiniteTimestamp"
      }
    ]
  },
  {
    "name": "getAllStages",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": [
      {
        "type": "uint256[][3]",
        "name": "stageIndexes"
      },
      {
        "type": "tuple",
        "name": "publicStage",
        "components": [
          {
            "type": "tuple",
            "name": "config",
            "components": [
              {
                "type": "uint64",
                "name": "startTime"
              },
              {
                "type": "uint64",
                "name": "endTime"
              },
              {
                "type": "uint32",
                "name": "maxMintablePerWallet"
              },
              {
                "type": "uint32",
                "name": "maxSupply"
              },
              {
                "type": "uint64",
                "name": "_reserved"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "paymentInfo",
            "components": [
              {
                "type": "address",
                "name": "currency"
              },
              {
                "type": "uint80",
                "name": "mintPrice"
              },
              {
                "type": "uint16",
                "name": "_reserved"
              }
            ]
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "whitelistStages",
        "components": [
          {
            "type": "tuple",
            "name": "config",
            "components": [
              {
                "type": "uint64",
                "name": "startTime"
              },
              {
                "type": "uint64",
                "name": "endTime"
              },
              {
                "type": "uint32",
                "name": "maxMintablePerWallet"
              },
              {
                "type": "uint32",
                "name": "maxSupply"
              },
              {
                "type": "uint64",
                "name": "_reserved"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "paymentInfo",
            "components": [
              {
                "type": "address",
                "name": "currency"
              },
              {
                "type": "uint80",
                "name": "mintPrice"
              },
              {
                "type": "uint16",
                "name": "_reserved"
              }
            ]
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "tokenGatedStages",
        "components": [
          {
            "type": "tuple",
            "name": "config",
            "components": [
              {
                "type": "uint64",
                "name": "startTime"
              },
              {
                "type": "uint64",
                "name": "endTime"
              },
              {
                "type": "uint32",
                "name": "maxMintablePerWallet"
              },
              {
                "type": "uint32",
                "name": "maxSupply"
              },
              {
                "type": "uint64",
                "name": "_reserved"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "paymentInfo",
            "components": [
              {
                "type": "address",
                "name": "currency"
              },
              {
                "type": "uint80",
                "name": "mintPrice"
              },
              {
                "type": "uint16",
                "name": "_reserved"
              }
            ]
          },
          {
            "type": "uint32",
            "name": "limitQtyPerReqToken"
          },
          {
            "type": "address[]",
            "name": "requirementTokens"
          },
          {
            "type": "uint64",
            "name": "_reserved"
          }
        ]
      }
    ]
  },
  {
    "name": "getCurrentStage",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "stageIndex"
      },
      {
        "type": "uint8",
        "name": "stageType"
      }
    ]
  },
  {
    "name": "getLaunchpadData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "uint8",
        "name": "standard"
      },
      {
        "type": "uint256",
        "name": "launchSupply"
      },
      {
        "type": "bool",
        "name": "allowCumulativeLimit"
      },
      {
        "type": "tuple[]",
        "name": "allocations",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint16",
            "name": "feeBps"
          },
          {
            "type": "uint8",
            "name": "party"
          },
          {
            "type": "uint72",
            "name": "_reserved"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "latestStageIndex"
      }
    ]
  },
  {
    "name": "getMintedQuantity",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint8",
        "name": "stageIndex"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getMintedQuantityByUser",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint8",
        "name": "stageIndex"
      },
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getRedeemedInfos",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint8",
        "name": "stageIndex"
      },
      {
        "type": "address",
        "name": "reqToken"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "redeemedAmounts"
      },
      {
        "type": "uint256[]",
        "name": "remainAmounts"
      }
    ]
  },
  {
    "name": "getRedeemedTokenQuantity",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint8",
        "name": "stageIndex"
      },
      {
        "type": "address",
        "name": "tokenContract"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "getTierOfUser",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint8"
      },
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "hasTier"
      },
      {
        "type": "tuple",
        "name": "tierInfo",
        "components": [
          {
            "type": "uint80",
            "name": "mintPrice"
          },
          {
            "type": "uint32",
            "name": "mintableLimit"
          },
          {
            "type": "uint144",
            "name": "_reserved"
          }
        ]
      }
    ]
  },
  {
    "name": "getTotalMinted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getTotalMintedByUser",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getWronConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "wronToken"
          },
          {
            "type": "address",
            "name": "helper"
          },
          {
            "type": "bool",
            "name": "enabled"
          },
          {
            "type": "uint232",
            "name": "_reserved"
          }
        ]
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
        "name": "admin"
      },
      {
        "type": "address[]",
        "name": "operators"
      },
      {
        "type": "address[]",
        "name": "pausers"
      },
      {
        "type": "address",
        "name": "wronToken"
      },
      {
        "type": "address",
        "name": "wronHelper"
      }
    ],
    "outputs": []
  },
  {
    "name": "isPaused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "mint",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "param",
        "components": [
          {
            "type": "address",
            "name": "nftContract"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "mintQuantity"
          },
          {
            "type": "bool",
            "name": "isMintAllPossible"
          },
          {
            "type": "uint8",
            "name": "stageIndex"
          },
          {
            "type": "uint8",
            "name": "tierId"
          },
          {
            "type": "bytes",
            "name": "extraData"
          },
          {
            "type": "bytes",
            "name": "tokenGatingData"
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "pauseLaunch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeWhitelistUsers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint8",
        "name": "stageIndex"
      },
      {
        "type": "address[]",
        "name": "users"
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
    "name": "setWronConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "wron"
      },
      {
        "type": "address",
        "name": "wronHelper"
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
    "name": "unpauseLaunch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateNftContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "oldContract"
      },
      {
        "type": "address",
        "name": "newContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateStage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint8",
        "name": "stageIndex"
      },
      {
        "type": "bytes",
        "name": "stageData"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateTierInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint8",
        "name": "stageIndex"
      },
      {
        "type": "uint8",
        "name": "tierId"
      },
      {
        "type": "tuple",
        "name": "userTier",
        "components": [
          {
            "type": "uint80",
            "name": "mintPrice"
          },
          {
            "type": "uint32",
            "name": "mintableLimit"
          },
          {
            "type": "uint144",
            "name": "_reserved"
          }
        ]
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract