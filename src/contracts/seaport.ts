import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35144,
  address: '0x0000000000000068f116a894984e2db1123eb395' as const,
  contract_name: 'Seaport',
  display_name: 'Seaport',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742225577,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "conduitController"
      }
    ]
  },
  {
    "name": "BadContractSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BadFraction",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BadReturnValueFromERC20OnTransfer",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
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
        "name": "amount"
      }
    ]
  },
  {
    "name": "BadSignatureV",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "v"
      }
    ]
  },
  {
    "name": "CannotCancelOrder",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ConsiderationCriteriaResolverOutOfRange",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ConsiderationLengthNotEqualToTotalOriginal",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ConsiderationNotMet",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "orderIndex"
      },
      {
        "type": "uint256",
        "name": "considerationIndex"
      },
      {
        "type": "uint256",
        "name": "shortfallAmount"
      }
    ]
  },
  {
    "name": "CriteriaNotEnabledForItem",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ERC1155BatchTransferGenericFailure",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
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
        "name": "identifiers"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "InexactFraction",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientNativeTokensSupplied",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Invalid1155BatchTransferEncoding",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidBasicOrderParameterEncoding",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidCallToConduit",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "conduit"
      }
    ]
  },
  {
    "name": "InvalidConduit",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "conduitKey"
      },
      {
        "type": "address",
        "name": "conduit"
      }
    ]
  },
  {
    "name": "InvalidContractOrder",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ]
  },
  {
    "name": "InvalidERC721TransferAmount",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "InvalidFulfillmentComponentData",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidMsgValue",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "InvalidNativeOfferItem",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidProof",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRestrictedOrder",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ]
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSigner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTime",
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
    "name": "MismatchedFulfillmentOfferAndConsiderationComponents",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "fulfillmentIndex"
      }
    ]
  },
  {
    "name": "MissingFulfillmentComponentOnAggregation",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "side"
      }
    ]
  },
  {
    "name": "MissingItemAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MissingOriginalConsiderationItems",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NativeTokenTransferGenericFailure",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "NoContract",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "NoReentrantCalls",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoSpecifiedOrdersAvailable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OfferAndConsiderationRequiredOnFulfillment",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OfferCriteriaResolverOutOfRange",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OrderAlreadyFilled",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ]
  },
  {
    "name": "OrderCriteriaResolverOutOfRange",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "side"
      }
    ]
  },
  {
    "name": "OrderIsCancelled",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ]
  },
  {
    "name": "OrderPartiallyFilled",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ]
  },
  {
    "name": "PartialFillsNotEnabledForOrder",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TStoreAlreadyActivated",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TStoreNotSupported",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TloadTestContractDeploymentFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenTransferGenericFailure",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
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
        "name": "identifier"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "UnresolvedConsiderationCriteria",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "orderIndex"
      },
      {
        "type": "uint256",
        "name": "considerationIndex"
      }
    ]
  },
  {
    "name": "UnresolvedOfferCriteria",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "orderIndex"
      },
      {
        "type": "uint256",
        "name": "offerIndex"
      }
    ]
  },
  {
    "name": "UnusedItemParameters",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CounterIncremented",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newCounter"
      },
      {
        "type": "address",
        "name": "offerer",
        "indexed": true
      }
    ]
  },
  {
    "name": "OrderCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash"
      },
      {
        "type": "address",
        "name": "offerer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "zone",
        "indexed": true
      }
    ]
  },
  {
    "name": "OrderFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash"
      },
      {
        "type": "address",
        "name": "offerer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "zone",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "tuple[]",
        "name": "offer",
        "components": [
          {
            "type": "uint8",
            "name": "itemType"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "identifier"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "consideration",
        "components": [
          {
            "type": "uint8",
            "name": "itemType"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "identifier"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "recipient"
          }
        ]
      }
    ]
  },
  {
    "name": "OrderValidated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash"
      },
      {
        "type": "tuple",
        "name": "orderParameters",
        "components": [
          {
            "type": "address",
            "name": "offerer"
          },
          {
            "type": "address",
            "name": "zone"
          },
          {
            "type": "tuple[]",
            "name": "offer",
            "components": [
              {
                "type": "uint8",
                "name": "itemType"
              },
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "identifierOrCriteria"
              },
              {
                "type": "uint256",
                "name": "startAmount"
              },
              {
                "type": "uint256",
                "name": "endAmount"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "consideration",
            "components": [
              {
                "type": "uint8",
                "name": "itemType"
              },
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "identifierOrCriteria"
              },
              {
                "type": "uint256",
                "name": "startAmount"
              },
              {
                "type": "uint256",
                "name": "endAmount"
              },
              {
                "type": "address",
                "name": "recipient"
              }
            ]
          },
          {
            "type": "uint8",
            "name": "orderType"
          },
          {
            "type": "uint256",
            "name": "startTime"
          },
          {
            "type": "uint256",
            "name": "endTime"
          },
          {
            "type": "bytes32",
            "name": "zoneHash"
          },
          {
            "type": "uint256",
            "name": "salt"
          },
          {
            "type": "bytes32",
            "name": "conduitKey"
          },
          {
            "type": "uint256",
            "name": "totalOriginalConsiderationItems"
          }
        ]
      }
    ]
  },
  {
    "name": "OrdersMatched",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "orderHashes"
      }
    ]
  },
  {
    "name": "__activateTstore",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "cancel",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "orders",
        "components": [
          {
            "type": "address",
            "name": "offerer"
          },
          {
            "type": "address",
            "name": "zone"
          },
          {
            "type": "tuple[]",
            "name": "offer",
            "components": [
              {
                "type": "uint8",
                "name": "itemType"
              },
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "identifierOrCriteria"
              },
              {
                "type": "uint256",
                "name": "startAmount"
              },
              {
                "type": "uint256",
                "name": "endAmount"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "consideration",
            "components": [
              {
                "type": "uint8",
                "name": "itemType"
              },
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "identifierOrCriteria"
              },
              {
                "type": "uint256",
                "name": "startAmount"
              },
              {
                "type": "uint256",
                "name": "endAmount"
              },
              {
                "type": "address",
                "name": "recipient"
              }
            ]
          },
          {
            "type": "uint8",
            "name": "orderType"
          },
          {
            "type": "uint256",
            "name": "startTime"
          },
          {
            "type": "uint256",
            "name": "endTime"
          },
          {
            "type": "bytes32",
            "name": "zoneHash"
          },
          {
            "type": "uint256",
            "name": "salt"
          },
          {
            "type": "bytes32",
            "name": "conduitKey"
          },
          {
            "type": "uint256",
            "name": "counter"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "cancelled"
      }
    ]
  },
  {
    "name": "fulfillAdvancedOrder",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "tuple",
            "name": "parameters",
            "components": [
              {
                "type": "address",
                "name": "offerer"
              },
              {
                "type": "address",
                "name": "zone"
              },
              {
                "type": "tuple[]",
                "name": "offer",
                "components": [
                  {
                    "type": "uint8",
                    "name": "itemType"
                  },
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "uint256",
                    "name": "identifierOrCriteria"
                  },
                  {
                    "type": "uint256",
                    "name": "startAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "endAmount"
                  }
                ]
              },
              {
                "type": "tuple[]",
                "name": "consideration",
                "components": [
                  {
                    "type": "uint8",
                    "name": "itemType"
                  },
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "uint256",
                    "name": "identifierOrCriteria"
                  },
                  {
                    "type": "uint256",
                    "name": "startAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "endAmount"
                  },
                  {
                    "type": "address",
                    "name": "recipient"
                  }
                ]
              },
              {
                "type": "uint8",
                "name": "orderType"
              },
              {
                "type": "uint256",
                "name": "startTime"
              },
              {
                "type": "uint256",
                "name": "endTime"
              },
              {
                "type": "bytes32",
                "name": "zoneHash"
              },
              {
                "type": "uint256",
                "name": "salt"
              },
              {
                "type": "bytes32",
                "name": "conduitKey"
              },
              {
                "type": "uint256",
                "name": "totalOriginalConsiderationItems"
              }
            ]
          },
          {
            "type": "uint120",
            "name": "numerator"
          },
          {
            "type": "uint120",
            "name": "denominator"
          },
          {
            "type": "bytes",
            "name": "signature"
          },
          {
            "type": "bytes",
            "name": "extraData"
          }
        ]
      },
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "orderIndex"
          },
          {
            "type": "uint8",
            "name": "side"
          },
          {
            "type": "uint256",
            "name": "index"
          },
          {
            "type": "uint256",
            "name": "identifier"
          },
          {
            "type": "bytes32[]",
            "name": "criteriaProof"
          }
        ]
      },
      {
        "type": "bytes32",
        "name": "fulfillerConduitKey"
      },
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "fulfilled"
      }
    ]
  },
  {
    "name": "fulfillAvailableAdvancedOrders",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "tuple",
            "name": "parameters",
            "components": [
              {
                "type": "address",
                "name": "offerer"
              },
              {
                "type": "address",
                "name": "zone"
              },
              {
                "type": "tuple[]",
                "name": "offer",
                "components": [
                  {
                    "type": "uint8",
                    "name": "itemType"
                  },
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "uint256",
                    "name": "identifierOrCriteria"
                  },
                  {
                    "type": "uint256",
                    "name": "startAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "endAmount"
                  }
                ]
              },
              {
                "type": "tuple[]",
                "name": "consideration",
                "components": [
                  {
                    "type": "uint8",
                    "name": "itemType"
                  },
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "uint256",
                    "name": "identifierOrCriteria"
                  },
                  {
                    "type": "uint256",
                    "name": "startAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "endAmount"
                  },
                  {
                    "type": "address",
                    "name": "recipient"
                  }
                ]
              },
              {
                "type": "uint8",
                "name": "orderType"
              },
              {
                "type": "uint256",
                "name": "startTime"
              },
              {
                "type": "uint256",
                "name": "endTime"
              },
              {
                "type": "bytes32",
                "name": "zoneHash"
              },
              {
                "type": "uint256",
                "name": "salt"
              },
              {
                "type": "bytes32",
                "name": "conduitKey"
              },
              {
                "type": "uint256",
                "name": "totalOriginalConsiderationItems"
              }
            ]
          },
          {
            "type": "uint120",
            "name": "numerator"
          },
          {
            "type": "uint120",
            "name": "denominator"
          },
          {
            "type": "bytes",
            "name": "signature"
          },
          {
            "type": "bytes",
            "name": "extraData"
          }
        ]
      },
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "orderIndex"
          },
          {
            "type": "uint8",
            "name": "side"
          },
          {
            "type": "uint256",
            "name": "index"
          },
          {
            "type": "uint256",
            "name": "identifier"
          },
          {
            "type": "bytes32[]",
            "name": "criteriaProof"
          }
        ]
      },
      {
        "type": "tuple[][]",
        "components": [
          {
            "type": "uint256",
            "name": "orderIndex"
          },
          {
            "type": "uint256",
            "name": "itemIndex"
          }
        ]
      },
      {
        "type": "tuple[][]",
        "components": [
          {
            "type": "uint256",
            "name": "orderIndex"
          },
          {
            "type": "uint256",
            "name": "itemIndex"
          }
        ]
      },
      {
        "type": "bytes32",
        "name": "fulfillerConduitKey"
      },
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "maximumFulfilled"
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
      },
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "tuple",
            "name": "item",
            "components": [
              {
                "type": "uint8",
                "name": "itemType"
              },
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "identifier"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "address",
                "name": "recipient"
              }
            ]
          },
          {
            "type": "address",
            "name": "offerer"
          },
          {
            "type": "bytes32",
            "name": "conduitKey"
          }
        ]
      }
    ]
  },
  {
    "name": "fulfillAvailableOrders",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "tuple",
            "name": "parameters",
            "components": [
              {
                "type": "address",
                "name": "offerer"
              },
              {
                "type": "address",
                "name": "zone"
              },
              {
                "type": "tuple[]",
                "name": "offer",
                "components": [
                  {
                    "type": "uint8",
                    "name": "itemType"
                  },
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "uint256",
                    "name": "identifierOrCriteria"
                  },
                  {
                    "type": "uint256",
                    "name": "startAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "endAmount"
                  }
                ]
              },
              {
                "type": "tuple[]",
                "name": "consideration",
                "components": [
                  {
                    "type": "uint8",
                    "name": "itemType"
                  },
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "uint256",
                    "name": "identifierOrCriteria"
                  },
                  {
                    "type": "uint256",
                    "name": "startAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "endAmount"
                  },
                  {
                    "type": "address",
                    "name": "recipient"
                  }
                ]
              },
              {
                "type": "uint8",
                "name": "orderType"
              },
              {
                "type": "uint256",
                "name": "startTime"
              },
              {
                "type": "uint256",
                "name": "endTime"
              },
              {
                "type": "bytes32",
                "name": "zoneHash"
              },
              {
                "type": "uint256",
                "name": "salt"
              },
              {
                "type": "bytes32",
                "name": "conduitKey"
              },
              {
                "type": "uint256",
                "name": "totalOriginalConsiderationItems"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      },
      {
        "type": "tuple[][]",
        "components": [
          {
            "type": "uint256",
            "name": "orderIndex"
          },
          {
            "type": "uint256",
            "name": "itemIndex"
          }
        ]
      },
      {
        "type": "tuple[][]",
        "components": [
          {
            "type": "uint256",
            "name": "orderIndex"
          },
          {
            "type": "uint256",
            "name": "itemIndex"
          }
        ]
      },
      {
        "type": "bytes32",
        "name": "fulfillerConduitKey"
      },
      {
        "type": "uint256",
        "name": "maximumFulfilled"
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
      },
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "tuple",
            "name": "item",
            "components": [
              {
                "type": "uint8",
                "name": "itemType"
              },
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "identifier"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "address",
                "name": "recipient"
              }
            ]
          },
          {
            "type": "address",
            "name": "offerer"
          },
          {
            "type": "bytes32",
            "name": "conduitKey"
          }
        ]
      }
    ]
  },
  {
    "name": "fulfillBasicOrder",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "considerationToken"
          },
          {
            "type": "uint256",
            "name": "considerationIdentifier"
          },
          {
            "type": "uint256",
            "name": "considerationAmount"
          },
          {
            "type": "address",
            "name": "offerer"
          },
          {
            "type": "address",
            "name": "zone"
          },
          {
            "type": "address",
            "name": "offerToken"
          },
          {
            "type": "uint256",
            "name": "offerIdentifier"
          },
          {
            "type": "uint256",
            "name": "offerAmount"
          },
          {
            "type": "uint8",
            "name": "basicOrderType"
          },
          {
            "type": "uint256",
            "name": "startTime"
          },
          {
            "type": "uint256",
            "name": "endTime"
          },
          {
            "type": "bytes32",
            "name": "zoneHash"
          },
          {
            "type": "uint256",
            "name": "salt"
          },
          {
            "type": "bytes32",
            "name": "offererConduitKey"
          },
          {
            "type": "bytes32",
            "name": "fulfillerConduitKey"
          },
          {
            "type": "uint256",
            "name": "totalOriginalAdditionalRecipients"
          },
          {
            "type": "tuple[]",
            "name": "additionalRecipients",
            "components": [
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "address",
                "name": "recipient"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "fulfilled"
      }
    ]
  },
  {
    "name": "fulfillBasicOrder_efficient_6GL6yc",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "considerationToken"
          },
          {
            "type": "uint256",
            "name": "considerationIdentifier"
          },
          {
            "type": "uint256",
            "name": "considerationAmount"
          },
          {
            "type": "address",
            "name": "offerer"
          },
          {
            "type": "address",
            "name": "zone"
          },
          {
            "type": "address",
            "name": "offerToken"
          },
          {
            "type": "uint256",
            "name": "offerIdentifier"
          },
          {
            "type": "uint256",
            "name": "offerAmount"
          },
          {
            "type": "uint8",
            "name": "basicOrderType"
          },
          {
            "type": "uint256",
            "name": "startTime"
          },
          {
            "type": "uint256",
            "name": "endTime"
          },
          {
            "type": "bytes32",
            "name": "zoneHash"
          },
          {
            "type": "uint256",
            "name": "salt"
          },
          {
            "type": "bytes32",
            "name": "offererConduitKey"
          },
          {
            "type": "bytes32",
            "name": "fulfillerConduitKey"
          },
          {
            "type": "uint256",
            "name": "totalOriginalAdditionalRecipients"
          },
          {
            "type": "tuple[]",
            "name": "additionalRecipients",
            "components": [
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "address",
                "name": "recipient"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "fulfilled"
      }
    ]
  },
  {
    "name": "fulfillOrder",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "tuple",
            "name": "parameters",
            "components": [
              {
                "type": "address",
                "name": "offerer"
              },
              {
                "type": "address",
                "name": "zone"
              },
              {
                "type": "tuple[]",
                "name": "offer",
                "components": [
                  {
                    "type": "uint8",
                    "name": "itemType"
                  },
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "uint256",
                    "name": "identifierOrCriteria"
                  },
                  {
                    "type": "uint256",
                    "name": "startAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "endAmount"
                  }
                ]
              },
              {
                "type": "tuple[]",
                "name": "consideration",
                "components": [
                  {
                    "type": "uint8",
                    "name": "itemType"
                  },
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "uint256",
                    "name": "identifierOrCriteria"
                  },
                  {
                    "type": "uint256",
                    "name": "startAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "endAmount"
                  },
                  {
                    "type": "address",
                    "name": "recipient"
                  }
                ]
              },
              {
                "type": "uint8",
                "name": "orderType"
              },
              {
                "type": "uint256",
                "name": "startTime"
              },
              {
                "type": "uint256",
                "name": "endTime"
              },
              {
                "type": "bytes32",
                "name": "zoneHash"
              },
              {
                "type": "uint256",
                "name": "salt"
              },
              {
                "type": "bytes32",
                "name": "conduitKey"
              },
              {
                "type": "uint256",
                "name": "totalOriginalConsiderationItems"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      },
      {
        "type": "bytes32",
        "name": "fulfillerConduitKey"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "fulfilled"
      }
    ]
  },
  {
    "name": "getContractOffererNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "contractOfferer"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "nonce"
      }
    ]
  },
  {
    "name": "getCounter",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "offerer"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "counter"
      }
    ]
  },
  {
    "name": "getOrderHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "offerer"
          },
          {
            "type": "address",
            "name": "zone"
          },
          {
            "type": "tuple[]",
            "name": "offer",
            "components": [
              {
                "type": "uint8",
                "name": "itemType"
              },
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "identifierOrCriteria"
              },
              {
                "type": "uint256",
                "name": "startAmount"
              },
              {
                "type": "uint256",
                "name": "endAmount"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "consideration",
            "components": [
              {
                "type": "uint8",
                "name": "itemType"
              },
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "identifierOrCriteria"
              },
              {
                "type": "uint256",
                "name": "startAmount"
              },
              {
                "type": "uint256",
                "name": "endAmount"
              },
              {
                "type": "address",
                "name": "recipient"
              }
            ]
          },
          {
            "type": "uint8",
            "name": "orderType"
          },
          {
            "type": "uint256",
            "name": "startTime"
          },
          {
            "type": "uint256",
            "name": "endTime"
          },
          {
            "type": "bytes32",
            "name": "zoneHash"
          },
          {
            "type": "uint256",
            "name": "salt"
          },
          {
            "type": "bytes32",
            "name": "conduitKey"
          },
          {
            "type": "uint256",
            "name": "counter"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ]
  },
  {
    "name": "getOrderStatus",
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
        "type": "bool",
        "name": "isValidated"
      },
      {
        "type": "bool",
        "name": "isCancelled"
      },
      {
        "type": "uint256",
        "name": "totalFilled"
      },
      {
        "type": "uint256",
        "name": "totalSize"
      }
    ]
  },
  {
    "name": "incrementCounter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "newCounter"
      }
    ]
  },
  {
    "name": "information",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "version"
      },
      {
        "type": "bytes32",
        "name": "domainSeparator"
      },
      {
        "type": "address",
        "name": "conduitController"
      }
    ]
  },
  {
    "name": "matchAdvancedOrders",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "tuple",
            "name": "parameters",
            "components": [
              {
                "type": "address",
                "name": "offerer"
              },
              {
                "type": "address",
                "name": "zone"
              },
              {
                "type": "tuple[]",
                "name": "offer",
                "components": [
                  {
                    "type": "uint8",
                    "name": "itemType"
                  },
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "uint256",
                    "name": "identifierOrCriteria"
                  },
                  {
                    "type": "uint256",
                    "name": "startAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "endAmount"
                  }
                ]
              },
              {
                "type": "tuple[]",
                "name": "consideration",
                "components": [
                  {
                    "type": "uint8",
                    "name": "itemType"
                  },
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "uint256",
                    "name": "identifierOrCriteria"
                  },
                  {
                    "type": "uint256",
                    "name": "startAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "endAmount"
                  },
                  {
                    "type": "address",
                    "name": "recipient"
                  }
                ]
              },
              {
                "type": "uint8",
                "name": "orderType"
              },
              {
                "type": "uint256",
                "name": "startTime"
              },
              {
                "type": "uint256",
                "name": "endTime"
              },
              {
                "type": "bytes32",
                "name": "zoneHash"
              },
              {
                "type": "uint256",
                "name": "salt"
              },
              {
                "type": "bytes32",
                "name": "conduitKey"
              },
              {
                "type": "uint256",
                "name": "totalOriginalConsiderationItems"
              }
            ]
          },
          {
            "type": "uint120",
            "name": "numerator"
          },
          {
            "type": "uint120",
            "name": "denominator"
          },
          {
            "type": "bytes",
            "name": "signature"
          },
          {
            "type": "bytes",
            "name": "extraData"
          }
        ]
      },
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "orderIndex"
          },
          {
            "type": "uint8",
            "name": "side"
          },
          {
            "type": "uint256",
            "name": "index"
          },
          {
            "type": "uint256",
            "name": "identifier"
          },
          {
            "type": "bytes32[]",
            "name": "criteriaProof"
          }
        ]
      },
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "tuple[]",
            "name": "offerComponents",
            "components": [
              {
                "type": "uint256",
                "name": "orderIndex"
              },
              {
                "type": "uint256",
                "name": "itemIndex"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "considerationComponents",
            "components": [
              {
                "type": "uint256",
                "name": "orderIndex"
              },
              {
                "type": "uint256",
                "name": "itemIndex"
              }
            ]
          }
        ]
      },
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "tuple",
            "name": "item",
            "components": [
              {
                "type": "uint8",
                "name": "itemType"
              },
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "identifier"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "address",
                "name": "recipient"
              }
            ]
          },
          {
            "type": "address",
            "name": "offerer"
          },
          {
            "type": "bytes32",
            "name": "conduitKey"
          }
        ]
      }
    ]
  },
  {
    "name": "matchOrders",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "tuple",
            "name": "parameters",
            "components": [
              {
                "type": "address",
                "name": "offerer"
              },
              {
                "type": "address",
                "name": "zone"
              },
              {
                "type": "tuple[]",
                "name": "offer",
                "components": [
                  {
                    "type": "uint8",
                    "name": "itemType"
                  },
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "uint256",
                    "name": "identifierOrCriteria"
                  },
                  {
                    "type": "uint256",
                    "name": "startAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "endAmount"
                  }
                ]
              },
              {
                "type": "tuple[]",
                "name": "consideration",
                "components": [
                  {
                    "type": "uint8",
                    "name": "itemType"
                  },
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "uint256",
                    "name": "identifierOrCriteria"
                  },
                  {
                    "type": "uint256",
                    "name": "startAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "endAmount"
                  },
                  {
                    "type": "address",
                    "name": "recipient"
                  }
                ]
              },
              {
                "type": "uint8",
                "name": "orderType"
              },
              {
                "type": "uint256",
                "name": "startTime"
              },
              {
                "type": "uint256",
                "name": "endTime"
              },
              {
                "type": "bytes32",
                "name": "zoneHash"
              },
              {
                "type": "uint256",
                "name": "salt"
              },
              {
                "type": "bytes32",
                "name": "conduitKey"
              },
              {
                "type": "uint256",
                "name": "totalOriginalConsiderationItems"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      },
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "tuple[]",
            "name": "offerComponents",
            "components": [
              {
                "type": "uint256",
                "name": "orderIndex"
              },
              {
                "type": "uint256",
                "name": "itemIndex"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "considerationComponents",
            "components": [
              {
                "type": "uint256",
                "name": "orderIndex"
              },
              {
                "type": "uint256",
                "name": "itemIndex"
              }
            ]
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "tuple",
            "name": "item",
            "components": [
              {
                "type": "uint8",
                "name": "itemType"
              },
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "identifier"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "address",
                "name": "recipient"
              }
            ]
          },
          {
            "type": "address",
            "name": "offerer"
          },
          {
            "type": "bytes32",
            "name": "conduitKey"
          }
        ]
      }
    ]
  },
  {
    "name": "name",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "validate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "tuple",
            "name": "parameters",
            "components": [
              {
                "type": "address",
                "name": "offerer"
              },
              {
                "type": "address",
                "name": "zone"
              },
              {
                "type": "tuple[]",
                "name": "offer",
                "components": [
                  {
                    "type": "uint8",
                    "name": "itemType"
                  },
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "uint256",
                    "name": "identifierOrCriteria"
                  },
                  {
                    "type": "uint256",
                    "name": "startAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "endAmount"
                  }
                ]
              },
              {
                "type": "tuple[]",
                "name": "consideration",
                "components": [
                  {
                    "type": "uint8",
                    "name": "itemType"
                  },
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "uint256",
                    "name": "identifierOrCriteria"
                  },
                  {
                    "type": "uint256",
                    "name": "startAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "endAmount"
                  },
                  {
                    "type": "address",
                    "name": "recipient"
                  }
                ]
              },
              {
                "type": "uint8",
                "name": "orderType"
              },
              {
                "type": "uint256",
                "name": "startTime"
              },
              {
                "type": "uint256",
                "name": "endTime"
              },
              {
                "type": "bytes32",
                "name": "zoneHash"
              },
              {
                "type": "uint256",
                "name": "salt"
              },
              {
                "type": "bytes32",
                "name": "conduitKey"
              },
              {
                "type": "uint256",
                "name": "totalOriginalConsiderationItems"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "signature"
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract