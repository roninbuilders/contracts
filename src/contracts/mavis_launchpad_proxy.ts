import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2086,
  address: '0xa8e9fdf57bbd991c3f494273198606632769db99' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Mavis Launchpad Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xcc586c388ba7449e885848033ee8350dc8cdd4a3',
  created_at: 1711516331,
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
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
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
    "name": "ErrDuplicatedAllowedUser",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrEnforcedLaunchPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrExpectedLaunchPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrFallbackFailed",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "ErrFeeExceedsMintPrice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrHasValueWhileMintByERC20",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "currency"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "ErrIncorrectConditionalType",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "expected"
      }
    ]
  },
  {
    "name": "ErrIncorrectStageType",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "actual"
      },
      {
        "type": "uint8",
        "name": "expected"
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
    "name": "ErrInvalidAllowedUser",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidAmountMintablePerReqToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidCreator",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidCurrency",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidFeeBasicPoint",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidFeeParty",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidFeeRecipient",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidLaunchSupply",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "sumSuppliesCondStg"
      },
      {
        "type": "uint256",
        "name": "launchSupply"
      }
    ]
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
    "name": "ErrInvalidRequirementToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidSignerAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidStageIndex",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidStageLogicAddress",
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
    "name": "ErrInvalidTierId",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidTokenStandard",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrLengthMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4"
      }
    ]
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
    "name": "ErrMismatchMintQtyAndSumReqQty",
    "type": "error",
    "inputs": []
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
    "name": "ErrNotAllowedCallingAccessControl",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "ErrNotOwnRequirementToken",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "ErrNotZeroSupplyForPublicStage",
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
    "name": "ErrSumReqQuantitiesInsufficient",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "sumReqQuantities"
      },
      {
        "type": "uint256",
        "name": "actualQuantity"
      }
    ]
  },
  {
    "name": "ErrTokenIdRedeemed",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "ErrTooMuchConditionalStages",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnsupportedNFTInterface",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrZeroAddress",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "ErrZeroLaunchSupply",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrZeroMintQuantity",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrZeroReqQuantity",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedInnerCall",
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
    "name": "AllowUsersAdded",
    "type": "event",
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
        "name": "allowUsers"
      }
    ]
  },
  {
    "name": "AllowUsersRemoved",
    "type": "event",
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
        "name": "allowUsers"
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
        "name": "account"
      },
      {
        "type": "address",
        "name": "nftContract"
      }
    ]
  },
  {
    "name": "LaunchUnpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "address",
        "name": "nftContract"
      }
    ]
  },
  {
    "name": "LaunchpadDataAdded",
    "type": "event",
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
        "name": "launchpadSupply"
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
        "name": "stageTypes"
      },
      {
        "type": "bytes[]",
        "name": "stageDatas"
      },
      {
        "type": "uint8[]",
        "name": "stageIndexes"
      }
    ]
  },
  {
    "name": "LaunchpadDataUpdated",
    "type": "event",
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
        "name": "launchpadSupply"
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
      }
    ]
  },
  {
    "name": "MintQuantityRecorded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "total"
      },
      {
        "type": "uint256",
        "name": "totalMintedPerWallet"
      }
    ]
  },
  {
    "name": "MintSuccess",
    "type": "event",
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
            "type": "bytes",
            "name": "extraData"
          }
        ]
      },
      {
        "type": "uint8",
        "name": "stageType"
      },
      {
        "type": "address",
        "name": "sender"
      },
      {
        "type": "address",
        "name": "minter"
      },
      {
        "type": "uint256",
        "name": "actualPrice"
      },
      {
        "type": "uint256",
        "name": "actualMintQuantity"
      },
      {
        "type": "uint256[]",
        "name": "mintedIds"
      },
      {
        "type": "uint256[]",
        "name": "mintedAmounts"
      },
      {
        "type": "tuple[]",
        "name": "shares",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "value"
          }
        ]
      }
    ]
  },
  {
    "name": "NFTContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "launchId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "oldAddress"
      },
      {
        "type": "address",
        "name": "newAddress"
      }
    ]
  },
  {
    "name": "NewStageInfoAdded",
    "type": "event",
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
      },
      {
        "type": "uint8[]",
        "name": "newStageIndexes"
      }
    ]
  },
  {
    "name": "NewTierAdded",
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
    ]
  },
  {
    "name": "RequirementTokenRedeemed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "reqToken"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "requestRedeemPerIds"
      },
      {
        "type": "uint256[]",
        "name": "actualRedeemedPerIds"
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
    "name": "StageInfoUpdated",
    "type": "event",
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
    ]
  },
  {
    "name": "StageLogicUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8[]",
        "name": "stageTypes"
      },
      {
        "type": "address[]",
        "name": "logicAddrs"
      }
    ]
  },
  {
    "name": "SwapForwarderUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newSwapForwarder"
      }
    ]
  },
  {
    "name": "TierInfoUpdated",
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
    ]
  },
  {
    "name": "UsersAssignedToTier",
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
        "type": "uint8[]",
        "name": "tierIds"
      },
      {
        "type": "address[][]",
        "name": "usersByTier"
      }
    ]
  },
  {
    "name": "WronConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "wron"
      },
      {
        "type": "address",
        "name": "wronHelper"
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
    "name": "addAllowUsers",
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
        "name": "allowUsers"
      }
    ],
    "outputs": []
  },
  {
    "name": "addNewLaunchpad",
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
        "name": "launchpadSupply"
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
    "name": "addNewStageInfos",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
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
    "outputs": [
      {
        "type": "uint8",
        "name": "newTierId"
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
    "name": "execute",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint8",
        "name": "stageType"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
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
    "name": "getAllLaunchpads",
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
            "type": "address",
            "name": "allowedToken"
          },
          {
            "type": "uint32",
            "name": "limitQtyPerReqToken"
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
        "name": "allocs",
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
    "name": "getMintedQtyAtStage",
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
    "name": "getMintedQtyByUserAtStage",
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
    "name": "getStageLogicsOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8[]",
        "name": "stageTypes"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "logics"
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
    "name": "getTotalMintedOfNFTContract",
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
    "name": "getWronConfigs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "wron"
      },
      {
        "type": "address",
        "name": "wronHelper"
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
        "name": "wron"
      },
      {
        "type": "address",
        "name": "wronHelper"
      },
      {
        "type": "uint8[]",
        "name": "stageTypes"
      },
      {
        "type": "address[]",
        "name": "logicAddrs"
      },
      {
        "type": "address",
        "name": "swapForwarder"
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
    "name": "pausedOf",
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
    "name": "removeAllowUsers",
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
        "name": "allowUsers"
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
    "name": "setStageLogicAddresses",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8[]",
        "name": "stageTypes"
      },
      {
        "type": "address[]",
        "name": "logicAddrs"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSwapForwarder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "swapForwarder"
      }
    ],
    "outputs": []
  },
  {
    "name": "setWronConfigs",
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
    "name": "trustedForwarder",
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
    "name": "updateLaunchpadInfo",
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
        "name": "launchpadSupply"
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
        "name": "oldNftContract"
      },
      {
        "type": "address",
        "name": "newNftContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateStageInfo",
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