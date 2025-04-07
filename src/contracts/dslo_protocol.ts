import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27656,
  address: '0xcab2fa2eeab7065b45cbcf6e3936dde2506b4f6c' as const,
  contract_name: 'DSLOProtocol',
  display_name: 'DSLO Protocol',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742202490,
  abi: [
  {
    "name": "FeeCollected",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "NonceIncreased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "maker",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "oldNonce"
      },
      {
        "type": "uint256",
        "name": "newNonce"
      }
    ]
  },
  {
    "name": "OrderCanceled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "maker",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "orderHash"
      },
      {
        "type": "uint256",
        "name": "remainingRaw"
      }
    ]
  },
  {
    "name": "OrderFilled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "taker",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "orderHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "remaining"
      },
      {
        "type": "uint256",
        "name": "makingAmount"
      },
      {
        "type": "uint256",
        "name": "takingAmount"
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
    "name": "UpdateGuardian",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "bool",
        "name": "grantOrRevoke"
      }
    ]
  },
  {
    "name": "UpdateOperator",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "bool",
        "name": "grantOrRevoke"
      }
    ]
  },
  {
    "name": "UpdatedDSOrderSigner",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_address"
      }
    ]
  },
  {
    "name": "UpdatedInteractionWhitelist",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_address"
      },
      {
        "type": "bool",
        "name": "isWhitelist"
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
    "name": "DS_LIMIT_ORDER_TYPEHASH",
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
    "name": "LIMIT_ORDER_TYPEHASH",
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
    "name": "advanceNonce",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "and",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "targets"
      },
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "arbitraryStaticCall",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "cancelBatchOrders",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "orders",
        "components": [
          {
            "type": "uint256",
            "name": "salt"
          },
          {
            "type": "address",
            "name": "makerAsset"
          },
          {
            "type": "address",
            "name": "takerAsset"
          },
          {
            "type": "address",
            "name": "maker"
          },
          {
            "type": "address",
            "name": "receiver"
          },
          {
            "type": "address",
            "name": "allowedSender"
          },
          {
            "type": "uint256",
            "name": "makingAmount"
          },
          {
            "type": "uint256",
            "name": "takingAmount"
          },
          {
            "type": "uint256",
            "name": "feeConfig"
          },
          {
            "type": "bytes",
            "name": "makerAssetData"
          },
          {
            "type": "bytes",
            "name": "takerAssetData"
          },
          {
            "type": "bytes",
            "name": "getMakerAmount"
          },
          {
            "type": "bytes",
            "name": "getTakerAmount"
          },
          {
            "type": "bytes",
            "name": "predicate"
          },
          {
            "type": "bytes",
            "name": "interaction"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "cancelOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "uint256",
            "name": "salt"
          },
          {
            "type": "address",
            "name": "makerAsset"
          },
          {
            "type": "address",
            "name": "takerAsset"
          },
          {
            "type": "address",
            "name": "maker"
          },
          {
            "type": "address",
            "name": "receiver"
          },
          {
            "type": "address",
            "name": "allowedSender"
          },
          {
            "type": "uint256",
            "name": "makingAmount"
          },
          {
            "type": "uint256",
            "name": "takingAmount"
          },
          {
            "type": "uint256",
            "name": "feeConfig"
          },
          {
            "type": "bytes",
            "name": "makerAssetData"
          },
          {
            "type": "bytes",
            "name": "takerAssetData"
          },
          {
            "type": "bytes",
            "name": "getMakerAmount"
          },
          {
            "type": "bytes",
            "name": "getTakerAmount"
          },
          {
            "type": "bytes",
            "name": "predicate"
          },
          {
            "type": "bytes",
            "name": "interaction"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "checkPredicate",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "uint256",
            "name": "salt"
          },
          {
            "type": "address",
            "name": "makerAsset"
          },
          {
            "type": "address",
            "name": "takerAsset"
          },
          {
            "type": "address",
            "name": "maker"
          },
          {
            "type": "address",
            "name": "receiver"
          },
          {
            "type": "address",
            "name": "allowedSender"
          },
          {
            "type": "uint256",
            "name": "makingAmount"
          },
          {
            "type": "uint256",
            "name": "takingAmount"
          },
          {
            "type": "uint256",
            "name": "feeConfig"
          },
          {
            "type": "bytes",
            "name": "makerAssetData"
          },
          {
            "type": "bytes",
            "name": "takerAssetData"
          },
          {
            "type": "bytes",
            "name": "getMakerAmount"
          },
          {
            "type": "bytes",
            "name": "getTakerAmount"
          },
          {
            "type": "bytes",
            "name": "predicate"
          },
          {
            "type": "bytes",
            "name": "interaction"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "disableLogic",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "enableLogic",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "eq",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "fillBatchOrdersTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "tuple[]",
            "name": "orders",
            "components": [
              {
                "type": "uint256",
                "name": "salt"
              },
              {
                "type": "address",
                "name": "makerAsset"
              },
              {
                "type": "address",
                "name": "takerAsset"
              },
              {
                "type": "address",
                "name": "maker"
              },
              {
                "type": "address",
                "name": "receiver"
              },
              {
                "type": "address",
                "name": "allowedSender"
              },
              {
                "type": "uint256",
                "name": "makingAmount"
              },
              {
                "type": "uint256",
                "name": "takingAmount"
              },
              {
                "type": "uint256",
                "name": "feeConfig"
              },
              {
                "type": "bytes",
                "name": "makerAssetData"
              },
              {
                "type": "bytes",
                "name": "takerAssetData"
              },
              {
                "type": "bytes",
                "name": "getMakerAmount"
              },
              {
                "type": "bytes",
                "name": "getTakerAmount"
              },
              {
                "type": "bytes",
                "name": "predicate"
              },
              {
                "type": "bytes",
                "name": "interaction"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "signatures",
            "components": [
              {
                "type": "bytes",
                "name": "orderSignature"
              },
              {
                "type": "bytes",
                "name": "opSignature"
              }
            ]
          },
          {
            "type": "uint32[]",
            "name": "opExpireTimes"
          },
          {
            "type": "uint256",
            "name": "takingAmount"
          },
          {
            "type": "uint256",
            "name": "thresholdAmount"
          },
          {
            "type": "address",
            "name": "target"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "actualMakingAmount"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256",
        "name": "makerAssetFeeCollected"
      },
      {
        "type": "uint256",
        "name": "takerAssetFeeCollected"
      }
    ]
  },
  {
    "name": "fillOrderTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "tuple",
            "name": "order",
            "components": [
              {
                "type": "uint256",
                "name": "salt"
              },
              {
                "type": "address",
                "name": "makerAsset"
              },
              {
                "type": "address",
                "name": "takerAsset"
              },
              {
                "type": "address",
                "name": "maker"
              },
              {
                "type": "address",
                "name": "receiver"
              },
              {
                "type": "address",
                "name": "allowedSender"
              },
              {
                "type": "uint256",
                "name": "makingAmount"
              },
              {
                "type": "uint256",
                "name": "takingAmount"
              },
              {
                "type": "uint256",
                "name": "feeConfig"
              },
              {
                "type": "bytes",
                "name": "makerAssetData"
              },
              {
                "type": "bytes",
                "name": "takerAssetData"
              },
              {
                "type": "bytes",
                "name": "getMakerAmount"
              },
              {
                "type": "bytes",
                "name": "getTakerAmount"
              },
              {
                "type": "bytes",
                "name": "predicate"
              },
              {
                "type": "bytes",
                "name": "interaction"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "signature",
            "components": [
              {
                "type": "bytes",
                "name": "orderSignature"
              },
              {
                "type": "bytes",
                "name": "opSignature"
              }
            ]
          },
          {
            "type": "uint32",
            "name": "opExpireTime"
          },
          {
            "type": "address",
            "name": "target"
          },
          {
            "type": "bytes",
            "name": "callbackData"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "amountData",
        "components": [
          {
            "type": "uint256",
            "name": "makingAmount"
          },
          {
            "type": "uint256",
            "name": "takingAmount"
          },
          {
            "type": "uint256",
            "name": "thresholdAmount"
          }
        ]
      },
      {
        "type": "address",
        "name": "sender"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getMakerAmount",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256",
        "name": "orderMakerAmount"
      },
      {
        "type": "uint256",
        "name": "orderTakerAmount"
      },
      {
        "type": "uint256",
        "name": "swapTakerAmount"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getTakerAmount",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256",
        "name": "orderMakerAmount"
      },
      {
        "type": "uint256",
        "name": "orderTakerAmount"
      },
      {
        "type": "uint256",
        "name": "swapMakerAmount"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "gt",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "guardians",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "hashDSOrder",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "dsOrder",
        "components": [
          {
            "type": "bytes32",
            "name": "orderHash"
          },
          {
            "type": "uint32",
            "name": "opExpireTime"
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
    "name": "hashOrder",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "uint256",
            "name": "salt"
          },
          {
            "type": "address",
            "name": "makerAsset"
          },
          {
            "type": "address",
            "name": "takerAsset"
          },
          {
            "type": "address",
            "name": "maker"
          },
          {
            "type": "address",
            "name": "receiver"
          },
          {
            "type": "address",
            "name": "allowedSender"
          },
          {
            "type": "uint256",
            "name": "makingAmount"
          },
          {
            "type": "uint256",
            "name": "takingAmount"
          },
          {
            "type": "uint256",
            "name": "feeConfig"
          },
          {
            "type": "bytes",
            "name": "makerAssetData"
          },
          {
            "type": "bytes",
            "name": "takerAssetData"
          },
          {
            "type": "bytes",
            "name": "getMakerAmount"
          },
          {
            "type": "bytes",
            "name": "getTakerAmount"
          },
          {
            "type": "bytes",
            "name": "predicate"
          },
          {
            "type": "bytes",
            "name": "interaction"
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
    "name": "increaseNonce",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "lt",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "nonce",
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
    "name": "nonceEquals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "makerAddress"
      },
      {
        "type": "uint256",
        "name": "makerNonce"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "operators",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "or",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "targets"
      },
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
    "name": "remaining",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "remainingRaw",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "remainingsRaw",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "orderHashes"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "timestampBelow",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "time"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
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
    "name": "updateDSOrderSigner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_address"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateGuardian",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "bool",
        "name": "grantOrRevoke"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateInteractionWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_address"
      },
      {
        "type": "bool",
        "name": "isWhitelist"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateOperator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "bool",
        "name": "grantOrRevoke"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract