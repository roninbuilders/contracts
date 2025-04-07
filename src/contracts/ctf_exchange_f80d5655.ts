import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 6327,
  address: '0x29272a72c79243a7cd93cea1c2d75ab3f80d5655' as const,
  contract_name: 'CTFExchange',
  display_name: 'CTF Exchange',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1736440947,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_collateral"
      },
      {
        "type": "address",
        "name": "_ctf"
      },
      {
        "type": "address",
        "name": "_proxyFactory"
      },
      {
        "type": "address",
        "name": "_safeFactory"
      },
      {
        "type": "address",
        "name": "_proxyWalletFactory"
      }
    ]
  },
  {
    "name": "AlreadyRegistered",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeeTooHigh",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidComplement",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidNonce",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTokenId",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MakingGtRemaining",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MismatchedTokenIds",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotAdmin",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotCrossing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotOperator",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotTaker",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OrderExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OrderFilledOrCancelled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Paused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TooLittleTokensReceived",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeeCharged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "receiver",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "NewAdmin",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAdminAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "admin",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewOperator",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newOperatorAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "admin",
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
        "name": "orderHash",
        "indexed": true
      }
    ]
  },
  {
    "name": "OrderFilled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "maker",
        "indexed": true
      },
      {
        "type": "address",
        "name": "taker",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "makerAssetId"
      },
      {
        "type": "uint256",
        "name": "takerAssetId"
      },
      {
        "type": "uint256",
        "name": "makerAmountFilled"
      },
      {
        "type": "uint256",
        "name": "takerAmountFilled"
      },
      {
        "type": "uint256",
        "name": "fee"
      }
    ]
  },
  {
    "name": "OrdersMatched",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "takerOrderHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "takerOrderMaker",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "makerAssetId"
      },
      {
        "type": "uint256",
        "name": "takerAssetId"
      },
      {
        "type": "uint256",
        "name": "makerAmountFilled"
      },
      {
        "type": "uint256",
        "name": "takerAmountFilled"
      }
    ]
  },
  {
    "name": "ProxyFactoryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldProxyFactory",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newProxyFactory",
        "indexed": true
      }
    ]
  },
  {
    "name": "ProxyWalletFactoryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldProxyFactory",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newProxyFactory",
        "indexed": true
      }
    ]
  },
  {
    "name": "RemovedAdmin",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "removedAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "admin",
        "indexed": true
      }
    ]
  },
  {
    "name": "RemovedOperator",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "removedOperator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "admin",
        "indexed": true
      }
    ]
  },
  {
    "name": "SafeFactoryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldSafeFactory",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newSafeFactory",
        "indexed": true
      }
    ]
  },
  {
    "name": "TokenRegistered",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "token0",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "token1",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "conditionId",
        "indexed": true
      }
    ]
  },
  {
    "name": "TradingPaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pauser",
        "indexed": true
      }
    ]
  },
  {
    "name": "TradingUnpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pauser",
        "indexed": true
      }
    ]
  },
  {
    "name": "addAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin_"
      }
    ],
    "outputs": []
  },
  {
    "name": "addOperator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "operator_"
      }
    ],
    "outputs": []
  },
  {
    "name": "admins",
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
            "name": "maker"
          },
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address",
            "name": "taker"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "makerAmount"
          },
          {
            "type": "uint256",
            "name": "takerAmount"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "feeRateBps"
          },
          {
            "type": "uint8",
            "name": "side"
          },
          {
            "type": "uint8",
            "name": "signatureType"
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
    "name": "cancelOrders",
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
            "name": "maker"
          },
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address",
            "name": "taker"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "makerAmount"
          },
          {
            "type": "uint256",
            "name": "takerAmount"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "feeRateBps"
          },
          {
            "type": "uint8",
            "name": "side"
          },
          {
            "type": "uint8",
            "name": "signatureType"
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
    "name": "domainSeparator",
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
    "name": "fillOrder",
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
            "name": "maker"
          },
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address",
            "name": "taker"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "makerAmount"
          },
          {
            "type": "uint256",
            "name": "takerAmount"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "feeRateBps"
          },
          {
            "type": "uint8",
            "name": "side"
          },
          {
            "type": "uint8",
            "name": "signatureType"
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "fillAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "fillOrders",
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
            "name": "maker"
          },
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address",
            "name": "taker"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "makerAmount"
          },
          {
            "type": "uint256",
            "name": "takerAmount"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "feeRateBps"
          },
          {
            "type": "uint8",
            "name": "side"
          },
          {
            "type": "uint8",
            "name": "signatureType"
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      },
      {
        "type": "uint256[]",
        "name": "fillAmounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "getCollateral",
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
    "name": "getComplement",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getConditionId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getCtf",
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
    "name": "getMaxFeeRate",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
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
        "type": "tuple",
        "components": [
          {
            "type": "bool",
            "name": "isFilledOrCancelled"
          },
          {
            "type": "uint256",
            "name": "remaining"
          }
        ]
      }
    ]
  },
  {
    "name": "getPolyProxyFactoryImplementation",
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
    "name": "getPolyProxyWalletAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getProxyFactory",
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
    "name": "getProxyWalletAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getSafeAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getSafeFactory",
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
    "name": "getSafeFactoryImplementation",
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
            "name": "maker"
          },
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address",
            "name": "taker"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "makerAmount"
          },
          {
            "type": "uint256",
            "name": "takerAmount"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "feeRateBps"
          },
          {
            "type": "uint8",
            "name": "side"
          },
          {
            "type": "uint8",
            "name": "signatureType"
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
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "incrementNonce",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "isAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "usr"
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
        "name": "usr"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isValidNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "usr"
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
    "name": "matchOrders",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "takerOrder",
        "components": [
          {
            "type": "uint256",
            "name": "salt"
          },
          {
            "type": "address",
            "name": "maker"
          },
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address",
            "name": "taker"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "makerAmount"
          },
          {
            "type": "uint256",
            "name": "takerAmount"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "feeRateBps"
          },
          {
            "type": "uint8",
            "name": "side"
          },
          {
            "type": "uint8",
            "name": "signatureType"
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "makerOrders",
        "components": [
          {
            "type": "uint256",
            "name": "salt"
          },
          {
            "type": "address",
            "name": "maker"
          },
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address",
            "name": "taker"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "makerAmount"
          },
          {
            "type": "uint256",
            "name": "takerAmount"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "feeRateBps"
          },
          {
            "type": "uint8",
            "name": "side"
          },
          {
            "type": "uint8",
            "name": "signatureType"
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "takerFillAmount"
      },
      {
        "type": "uint256[]",
        "name": "makerFillAmounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "nonces",
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
    "name": "onERC1155BatchReceived",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
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
    "name": "onERC1155Received",
    "type": "function",
    "stateMutability": "nonpayable",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "orderStatus",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isFilledOrCancelled"
      },
      {
        "type": "uint256",
        "name": "remaining"
      }
    ]
  },
  {
    "name": "parentCollectionId",
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
    "name": "pauseTrading",
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
    "name": "proxyFactory",
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
    "name": "proxyWalletFactory",
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
    "name": "registerToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "complement"
      },
      {
        "type": "bytes32",
        "name": "conditionId"
      }
    ],
    "outputs": []
  },
  {
    "name": "registry",
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
        "name": "complement"
      },
      {
        "type": "bytes32",
        "name": "conditionId"
      }
    ]
  },
  {
    "name": "removeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeOperator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceAdminRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "renounceOperatorRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "safeFactory",
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
    "name": "setProxyFactory",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newProxyFactory"
      }
    ],
    "outputs": []
  },
  {
    "name": "setProxyWalletFactory",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newProxyFactory"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSafeFactory",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newSafeFactory"
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
    "name": "unpauseTrading",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "validateComplement",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "complement"
      }
    ],
    "outputs": []
  },
  {
    "name": "validateOrder",
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
            "name": "maker"
          },
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address",
            "name": "taker"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "makerAmount"
          },
          {
            "type": "uint256",
            "name": "takerAmount"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "feeRateBps"
          },
          {
            "type": "uint8",
            "name": "side"
          },
          {
            "type": "uint8",
            "name": "signatureType"
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
    "name": "validateOrderSignature",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash"
      },
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
            "name": "maker"
          },
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address",
            "name": "taker"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "makerAmount"
          },
          {
            "type": "uint256",
            "name": "takerAmount"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "feeRateBps"
          },
          {
            "type": "uint8",
            "name": "side"
          },
          {
            "type": "uint8",
            "name": "signatureType"
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
    "name": "validateTokenId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract