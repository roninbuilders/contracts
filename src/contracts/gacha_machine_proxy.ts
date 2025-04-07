import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1350,
  address: '0x3e0674b1ddc84b0cfd9d773bb2ce23fe8f445de3' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Gacha Machine Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x384be343fc9e44d012ca5aca8023cd0a6e455575',
  created_at: 1702275155,
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
    "name": "admin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "admin_"
      }
    ]
  },
  {
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "implementation_"
      }
    ]
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeToAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
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
    "name": "ErrCeilingNotHigherThanFloor",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "floor"
      },
      {
        "type": "uint256",
        "name": "ceiling"
      }
    ]
  },
  {
    "name": "ErrDuplicateRequestHash",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ]
  },
  {
    "name": "ErrGetFinalizedFromCoordinatorFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInsufficientRandomFee",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "estFee"
      }
    ]
  },
  {
    "name": "ErrInvalidAxieVaultInterface",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidChestCategoryLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidNonce",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidNonceForCancelled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidPrizeCategory",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidRecipient",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidRequestStatus",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "status"
      }
    ]
  },
  {
    "name": "ErrInvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidSlipAmount",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "slipAmount"
      },
      {
        "type": "uint256",
        "name": "totalChestAmount"
      }
    ]
  },
  {
    "name": "ErrInvalidSlipOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidStatusToCancelRequest",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidTotalProbabilities",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNotFoundAxieVault",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrRequestNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ]
  },
  {
    "name": "ErrSignatureExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnauthorizedCaller",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AxieContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "axieContract"
      }
    ]
  },
  {
    "name": "AxieVaultRanOut",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "axieVault"
      },
      {
        "type": "uint256",
        "name": "rewarded"
      },
      {
        "type": "uint256",
        "name": "totalAxieRewards"
      }
    ]
  },
  {
    "name": "AxieVaultUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "axieVault"
      }
    ]
  },
  {
    "name": "ConsumableERC1155ContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "consumableERC1155"
      }
    ]
  },
  {
    "name": "GachaRollFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "tuple[]",
        "name": "chests",
        "components": [
          {
            "type": "uint8",
            "name": "category"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "pot",
        "components": [
          {
            "type": "uint256",
            "name": "cocoAmt"
          },
          {
            "type": "uint256",
            "name": "premiumCocoAmt"
          },
          {
            "type": "uint256",
            "name": "spiritShellAmt"
          }
        ]
      },
      {
        "type": "uint256[]",
        "name": "axieRewards"
      }
    ]
  },
  {
    "name": "GachaRollRequested",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
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
        "type": "address",
        "name": "slipOwner"
      },
      {
        "type": "uint256",
        "name": "slipOwnerNonce"
      },
      {
        "type": "uint256",
        "name": "expiry"
      },
      {
        "type": "tuple",
        "name": "reqInfo",
        "components": [
          {
            "type": "address",
            "name": "requester"
          },
          {
            "type": "uint256",
            "name": "slipAmount"
          },
          {
            "type": "tuple[]",
            "name": "chests",
            "components": [
              {
                "type": "uint8",
                "name": "category"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "uint8",
            "name": "status"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "address",
            "name": "slipOwner"
          }
        ]
      }
    ]
  },
  {
    "name": "GasForFulfillmentUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "gasPerRoll"
      },
      {
        "type": "uint64",
        "name": "constantGas"
      },
      {
        "type": "uint64",
        "name": "gasPerAxieClaim"
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "version"
      }
    ]
  },
  {
    "name": "MaterialContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "materialContract"
      }
    ]
  },
  {
    "name": "MintConsumableFailed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "MintMaterialFailed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "NonceInvalidated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "slipOwner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nonce"
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
    "name": "PrizeProbabilityUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "tuple[][]",
        "name": "prizeProbability",
        "components": [
          {
            "type": "uint8",
            "name": "class"
          },
          {
            "type": "uint256",
            "name": "rate"
          }
        ]
      }
    ]
  },
  {
    "name": "QuantityForMintPrizeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "quantity"
      }
    ]
  },
  {
    "name": "RewardingAxiesCorrupted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "rewarded"
      },
      {
        "type": "uint256",
        "name": "totalAxieRewards"
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
    "name": "RollCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "slipOwner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "requester",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "reqInfo",
        "components": [
          {
            "type": "address",
            "name": "requester"
          },
          {
            "type": "uint256",
            "name": "slipAmount"
          },
          {
            "type": "tuple[]",
            "name": "chests",
            "components": [
              {
                "type": "uint8",
                "name": "category"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "uint8",
            "name": "status"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "address",
            "name": "slipOwner"
          }
        ]
      }
    ]
  },
  {
    "name": "TransferAxieAtIndexFailed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "index"
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
    "name": "DOMAIN_SEPARATOR",
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
    "name": "TYPE_HASH",
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
    "name": "cancelRoll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ],
    "outputs": []
  },
  {
    "name": "configureGasForFulfillment",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64",
        "name": "gasPerRoll"
      },
      {
        "type": "uint64",
        "name": "constantGas"
      },
      {
        "type": "uint64",
        "name": "gasPerAxieClaim"
      }
    ],
    "outputs": []
  },
  {
    "name": "estimateFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "rollNum"
      },
      {
        "type": "uint256",
        "name": "gasPrice"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "estFee"
      },
      {
        "type": "uint256",
        "name": "callbackGasLimit"
      }
    ]
  },
  {
    "name": "getAxieContract",
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
    "name": "getAxieVault",
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
    "name": "getConfiguredGasForFulfillment",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64",
        "name": "gasPerRoll"
      },
      {
        "type": "uint64",
        "name": "constantGas"
      },
      {
        "type": "uint64",
        "name": "gasPerAxieClaim"
      }
    ]
  },
  {
    "name": "getConsumableERC1155Contract",
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
    "name": "getMaterialContract",
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
    "name": "getNonceBitmapLowerBound",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "slipOwner"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPrizeProbability",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[][]",
        "name": "prizeProbabilities",
        "components": [
          {
            "type": "uint8",
            "name": "class"
          },
          {
            "type": "uint256",
            "name": "rate"
          }
        ]
      }
    ]
  },
  {
    "name": "getQuantityForMintPrize",
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
    "name": "getRequestHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "slipOwner"
      },
      {
        "type": "uint256",
        "name": "slipOwnerNonce"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
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
        "name": "reqHash"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "reqInfo",
        "components": [
          {
            "type": "address",
            "name": "requester"
          },
          {
            "type": "uint256",
            "name": "slipAmount"
          },
          {
            "type": "tuple[]",
            "name": "chests",
            "components": [
              {
                "type": "uint8",
                "name": "category"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "uint8",
            "name": "status"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "address",
            "name": "slipOwner"
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
        "type": "address",
        "name": "axieContract"
      },
      {
        "type": "address",
        "name": "materialContract"
      },
      {
        "type": "address",
        "name": "consumableERC1155"
      },
      {
        "type": "address",
        "name": "axieVault"
      },
      {
        "type": "uint256",
        "name": "maxGasForFulfillment"
      },
      {
        "type": "uint256",
        "name": "quantityForMintPrize"
      },
      {
        "type": "tuple[][]",
        "name": "prizeProbability",
        "components": [
          {
            "type": "uint8",
            "name": "class"
          },
          {
            "type": "uint256",
            "name": "rate"
          }
        ]
      },
      {
        "type": "address",
        "name": "vrfCoordinator_"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64",
        "name": "gasPerRoll"
      },
      {
        "type": "uint64",
        "name": "constantGas"
      },
      {
        "type": "uint64",
        "name": "gasPerAxieClaim"
      }
    ],
    "outputs": []
  },
  {
    "name": "isCancelableRequest",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
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
        "name": "slipOwner"
      },
      {
        "type": "uint256",
        "name": "slipOwnerNonce"
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
    "inputs": [],
    "outputs": []
  },
  {
    "name": "paused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
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
        "name": "account"
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
    "name": "roll",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "chests",
        "components": [
          {
            "type": "uint8",
            "name": "category"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "address",
        "name": "slipOwner"
      },
      {
        "type": "uint256",
        "name": "slipOwnerNonce"
      },
      {
        "type": "uint256",
        "name": "expiry"
      },
      {
        "type": "uint256",
        "name": "slipAmount"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      },
      {
        "type": "tuple",
        "name": "mReqInfo",
        "components": [
          {
            "type": "address",
            "name": "requester"
          },
          {
            "type": "uint256",
            "name": "slipAmount"
          },
          {
            "type": "tuple[]",
            "name": "chests",
            "components": [
              {
                "type": "uint8",
                "name": "category"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "uint8",
            "name": "status"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "address",
            "name": "slipOwner"
          }
        ]
      }
    ]
  },
  {
    "name": "setAxieContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "axieContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "setAxieVault",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "axieVault"
      }
    ],
    "outputs": []
  },
  {
    "name": "setConsumableERC1155Contract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "consumableERC1155"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaterialContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "materialContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPrizeProbability",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[][]",
        "name": "prizeProbability",
        "components": [
          {
            "type": "uint8",
            "name": "class"
          },
          {
            "type": "uint256",
            "name": "rate"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setQuantityForMintPrize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "quantity"
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
    "inputs": [],
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract