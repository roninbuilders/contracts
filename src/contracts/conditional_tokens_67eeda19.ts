import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 6162,
  address: '0x79286025f402b685b77d8094d449860467eeda19' as const,
  contract_name: 'ConditionalTokens',
  display_name: 'Conditional Tokens',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1735558133,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "configuredFeeBps"
      },
      {
        "type": "address",
        "name": "configuredFeeReceiver"
      }
    ]
  },
  {
    "name": "ConfiguredFeeTooHigh",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "passed"
      },
      {
        "type": "uint256",
        "name": "max"
      }
    ]
  },
  {
    "name": "NotTheFeeOperator",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "NullFeeReceiver",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReductionPercentExceedMaximum",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "percent"
      }
    ]
  },
  {
    "name": "ApprovalForAll",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "approved"
      }
    ]
  },
  {
    "name": "ConditionPreparation",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "conditionId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "oracle",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "questionId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "outcomeSlotCount"
      }
    ]
  },
  {
    "name": "ConditionResolution",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "conditionId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "oracle",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "questionId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "outcomeSlotCount"
      },
      {
        "type": "uint256[]",
        "name": "payoutNumerators"
      }
    ]
  },
  {
    "name": "FeeBpsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldFeeBps"
      },
      {
        "type": "uint256",
        "name": "newFeeBps"
      }
    ]
  },
  {
    "name": "FeeReceiverUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldFeeReceiver"
      },
      {
        "type": "address",
        "name": "newFeeReceiver"
      }
    ]
  },
  {
    "name": "FeeReductionConfigured",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "bps"
      },
      {
        "type": "uint256",
        "name": "expiration"
      }
    ]
  },
  {
    "name": "PayoutRedemption",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "redeemer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "collateralToken",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "parentCollectionId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "conditionId"
      },
      {
        "type": "uint256[]",
        "name": "indexSets"
      },
      {
        "type": "uint256",
        "name": "payout"
      },
      {
        "type": "uint256",
        "name": "fee"
      }
    ]
  },
  {
    "name": "PositionSplit",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "stakeholder",
        "indexed": true
      },
      {
        "type": "address",
        "name": "collateralToken"
      },
      {
        "type": "bytes32",
        "name": "parentCollectionId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "conditionId",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "partition"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "PositionsMerge",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "stakeholder",
        "indexed": true
      },
      {
        "type": "address",
        "name": "collateralToken"
      },
      {
        "type": "bytes32",
        "name": "parentCollectionId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "conditionId",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "partition"
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "TransferBatch",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "values"
      }
    ]
  },
  {
    "name": "TransferSingle",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from",
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
        "name": "value"
      }
    ]
  },
  {
    "name": "URI",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "value"
      },
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
      }
    ]
  },
  {
    "name": "ADMIN_ROLE",
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
    "name": "WHITELIST_ROLE",
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
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "balanceOfBatch",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "accounts"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "configureFeeBps",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newFeeBps"
      }
    ],
    "outputs": []
  },
  {
    "name": "configureFeeReceiver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newReceiver"
      }
    ],
    "outputs": []
  },
  {
    "name": "configureFeeReduction",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "uint256",
        "name": "percent"
      },
      {
        "type": "uint256",
        "name": "expiration"
      }
    ],
    "outputs": []
  },
  {
    "name": "configureFeeReductionWithSig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "reductionMsg",
        "components": [
          {
            "type": "address",
            "name": "account"
          },
          {
            "type": "uint256",
            "name": "percent"
          },
          {
            "type": "uint256",
            "name": "expiration"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "feeBps",
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
    "name": "feeReceiver",
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
    "name": "feeReductions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "percent"
      },
      {
        "type": "uint256",
        "name": "expiration"
      }
    ]
  },
  {
    "name": "getCollectionId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "parentCollectionId"
      },
      {
        "type": "bytes32",
        "name": "conditionId"
      },
      {
        "type": "uint256",
        "name": "indexSet"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getConditionId",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "address",
        "name": "oracle"
      },
      {
        "type": "bytes32",
        "name": "questionId"
      },
      {
        "type": "uint256",
        "name": "outcomeSlotCount"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getOutcomeSlotCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "conditionId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPositionId",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "address",
        "name": "collateralToken"
      },
      {
        "type": "bytes32",
        "name": "collectionId"
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
    "name": "grantAdmin",
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
    "name": "grantOperator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newOperator"
      }
    ],
    "outputs": []
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
    "name": "grantWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_whitelist"
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
    "name": "hashReductionMsg",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "reductionMsg",
        "components": [
          {
            "type": "address",
            "name": "account"
          },
          {
            "type": "uint256",
            "name": "percent"
          },
          {
            "type": "uint256",
            "name": "expiration"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "isAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isApprovedForAll",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "address",
        "name": "operator"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isOperator",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "guardian"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isTransferAllowed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      },
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isWhitelist",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "whitelist"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "mergePositions",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collateralToken"
      },
      {
        "type": "bytes32",
        "name": "parentCollectionId"
      },
      {
        "type": "bytes32",
        "name": "conditionId"
      },
      {
        "type": "uint256[]",
        "name": "partition"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "payoutDenominator",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "payoutNumerators",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "prepareCondition",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "oracle"
      },
      {
        "type": "bytes32",
        "name": "questionId"
      },
      {
        "type": "uint256",
        "name": "outcomeSlotCount"
      }
    ],
    "outputs": []
  },
  {
    "name": "redeemPositions",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collateralToken"
      },
      {
        "type": "bytes32",
        "name": "parentCollectionId"
      },
      {
        "type": "bytes32",
        "name": "conditionId"
      },
      {
        "type": "uint256[]",
        "name": "indexSets"
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
    "name": "reportPayouts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "questionId"
      },
      {
        "type": "uint256[]",
        "name": "payouts"
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
    "name": "safeBatchTransferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "safeTransferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "setApprovalForAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "bool",
        "name": "approved"
      }
    ],
    "outputs": []
  },
  {
    "name": "splitPosition",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collateralToken"
      },
      {
        "type": "bytes32",
        "name": "parentCollectionId"
      },
      {
        "type": "bytes32",
        "name": "conditionId"
      },
      {
        "type": "uint256[]",
        "name": "partition"
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "uri",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract