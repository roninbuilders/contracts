import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1375,
  address: '0x2399f330325e5912c1678a087b9aee0ecab7226f' as const,
  contract_name: 'GachaMachine',
  display_name: 'Gacha Machine',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1702544913,
  abi: [
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
        "name": "requestHash"
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
        "name": "estimatedRandomFee"
      }
    ]
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
        "name": "requestHash"
      }
    ]
  },
  {
    "name": "ErrSignatureExpired",
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
        "name": "requestHash",
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
        "name": "requestHash",
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
        "name": "requestHash",
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
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "expireTimestamp"
      },
      {
        "type": "uint256",
        "name": "slipAmount"
      },
      {
        "type": "address",
        "name": "requester"
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
    "name": "MaxGasForFulfillmentUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "maxGasForFulfillment"
      }
    ]
  },
  {
    "name": "MintConsumableFailed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash",
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
        "name": "requestHash",
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
        "name": "requestHash",
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
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "tuple",
        "name": "requestInfo",
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
          }
        ]
      }
    ]
  },
  {
    "name": "TransferAxieFailed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash",
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
    "name": "UserNonceIncreased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nonce"
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
    "name": "DEFAULT_GAS_PRICE",
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
        "type": "uint256",
        "name": "nonce"
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
        "name": "estimatedFee"
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
    "name": "getMaxGasForFulfillment",
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
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "nonce"
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
    "name": "getUserNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "isCancelableRequest",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "nonce"
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
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "expireTimestamp"
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
    "outputs": []
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
    "name": "setMaxGasForFulfillment",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "maxGasForFulfillment"
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