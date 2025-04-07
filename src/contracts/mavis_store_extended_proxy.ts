import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1621,
  address: '0xa650570c41ee2f8448a40e2b45c92f5d2ba13d2f' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Mavis Store Extended Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x7dae19d2eb633af6bc5624744aa0965bcb01368e',
  created_at: 1706524699,
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
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ErrInsufficientAmountTokenIn",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInsufficientPayment",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidArrayLength",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "ErrInvalidFirstTokenInPath",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidLastTokenInPath",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidNonce",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidOrderPrice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidOrderQuantity",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidPathLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidPayServiceAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidPaymentToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidRecordedReferralAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidTotalCommissionRatio",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidTreasury",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidTreasuryAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrMismatchArrayLength",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "ErrNotFoundGameSaleInfo",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrOrderAlreadyFinalized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrOrderExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrOutOfStock",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrPaymentTokenNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnauthorizedCancelRequester",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrWrongReceivedRONFlag",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AllowedAllPaymentTokens",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "flag",
        "indexed": true
      }
    ]
  },
  {
    "name": "GameItemSaleInfoUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "merchantId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "skuHash",
        "indexed": true
      },
      {
        "type": "string",
        "name": "sku"
      },
      {
        "type": "tuple",
        "name": "gameItemSaleInfo",
        "components": [
          {
            "type": "uint256",
            "name": "supply"
          },
          {
            "type": "bool",
            "name": "isAlreadyExists"
          }
        ]
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
    "name": "KanataRouterUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "router",
        "indexed": true
      }
    ]
  },
  {
    "name": "NoncePayServiceIncreased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "payService",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nonce",
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
      },
      {
        "type": "address",
        "name": "requester"
      }
    ]
  },
  {
    "name": "OrderPaymentSuccess",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "merchantId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "orderHash",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "orderData",
        "components": [
          {
            "type": "uint256",
            "name": "merchantId"
          },
          {
            "type": "string",
            "name": "sku"
          },
          {
            "type": "string",
            "name": "orderId"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "address",
            "name": "payService"
          },
          {
            "type": "uint256",
            "name": "validUntil"
          },
          {
            "type": "uint256",
            "name": "pricePerUnit"
          },
          {
            "type": "uint256",
            "name": "quantity"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "address",
            "name": "paymentToken"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "allocations",
        "components": [
          {
            "type": "uint8",
            "name": "treasuryType"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "ratio"
          },
          {
            "type": "uint256",
            "name": "value"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "address",
        "name": "treasury"
      },
      {
        "type": "address",
        "name": "paidToken"
      },
      {
        "type": "uint256",
        "name": "amountPaidToken"
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
    "name": "PayServiceInfosUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "payServices"
      },
      {
        "type": "address[]",
        "name": "treasuries",
        "indexed": true
      }
    ]
  },
  {
    "name": "PaymentTokensAllowed",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "bool",
        "name": "allowed",
        "indexed": true
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
    "name": "StoreCommissionAddressUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "marketCommission"
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
    "name": "WRONHelperUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "wronHelper",
        "indexed": true
      }
    ]
  },
  {
    "name": "WRONUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "wron",
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
            "name": "merchantId"
          },
          {
            "type": "string",
            "name": "sku"
          },
          {
            "type": "string",
            "name": "orderId"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "address",
            "name": "payService"
          },
          {
            "type": "uint256",
            "name": "validUntil"
          },
          {
            "type": "uint256",
            "name": "pricePerUnit"
          },
          {
            "type": "uint256",
            "name": "quantity"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "address",
            "name": "paymentToken"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "getAllowedAllPaymentTokens",
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
    "name": "getGameItemSaleInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "merchantId"
      },
      {
        "type": "string",
        "name": "sku"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "supply"
          },
          {
            "type": "bool",
            "name": "isAlreadyExists"
          }
        ]
      }
    ]
  },
  {
    "name": "getKatanaRouter",
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
    "name": "getNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "payService"
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
    "name": "getStoreCommission",
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
    "name": "getTreasury",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "payService"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getWron",
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
    "name": "getWronHelper",
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
    "name": "increaseNoncePayService",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "payService"
      }
    ],
    "outputs": []
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
        "name": "katanaRouter"
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
        "type": "address",
        "name": "storeCommission"
      },
      {
        "type": "bool",
        "name": "isAllowedAllPaymentTokens"
      },
      {
        "type": "address[]",
        "name": "paymentTokens"
      },
      {
        "type": "address[]",
        "name": "payServices"
      },
      {
        "type": "address[]",
        "name": "treasuries"
      }
    ],
    "outputs": []
  },
  {
    "name": "isPaymentTokenAllowed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "orderFinalized",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hash"
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
    "name": "payWithRON",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "uint256",
            "name": "merchantId"
          },
          {
            "type": "string",
            "name": "sku"
          },
          {
            "type": "string",
            "name": "orderId"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "address",
            "name": "payService"
          },
          {
            "type": "uint256",
            "name": "validUntil"
          },
          {
            "type": "uint256",
            "name": "pricePerUnit"
          },
          {
            "type": "uint256",
            "name": "quantity"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "address",
            "name": "paymentToken"
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
    "name": "payWithToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "uint256",
            "name": "merchantId"
          },
          {
            "type": "string",
            "name": "sku"
          },
          {
            "type": "string",
            "name": "orderId"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "address",
            "name": "payService"
          },
          {
            "type": "uint256",
            "name": "validUntil"
          },
          {
            "type": "uint256",
            "name": "pricePerUnit"
          },
          {
            "type": "uint256",
            "name": "quantity"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "address",
            "name": "paymentToken"
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
    "name": "setAllowedAllPaymentTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "flag"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGameItemSaleInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "merchantId"
      },
      {
        "type": "string[]",
        "name": "skus"
      },
      {
        "type": "uint256[]",
        "name": "newSupplies"
      }
    ],
    "outputs": []
  },
  {
    "name": "setKatanaRouter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "katanaRouter"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPayServiceInfos",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "payServices"
      },
      {
        "type": "address[]",
        "name": "treasuries"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPaymentTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "bool",
        "name": "allowed"
      }
    ],
    "outputs": []
  },
  {
    "name": "setStoreCommission",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "storeCommission"
      }
    ],
    "outputs": []
  },
  {
    "name": "setWRON",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "wron"
      }
    ],
    "outputs": []
  },
  {
    "name": "setWRONHelper",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
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
    "name": "swapRONAndPay",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "uint256",
            "name": "merchantId"
          },
          {
            "type": "string",
            "name": "sku"
          },
          {
            "type": "string",
            "name": "orderId"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "address",
            "name": "payService"
          },
          {
            "type": "uint256",
            "name": "validUntil"
          },
          {
            "type": "uint256",
            "name": "pricePerUnit"
          },
          {
            "type": "uint256",
            "name": "quantity"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "address",
            "name": "paymentToken"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "signature"
      },
      {
        "type": "address[]",
        "name": "path"
      },
      {
        "type": "uint256",
        "name": "deadline"
      }
    ],
    "outputs": []
  },
  {
    "name": "swapTokenAndPay",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "uint256",
            "name": "merchantId"
          },
          {
            "type": "string",
            "name": "sku"
          },
          {
            "type": "string",
            "name": "orderId"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "address",
            "name": "payService"
          },
          {
            "type": "uint256",
            "name": "validUntil"
          },
          {
            "type": "uint256",
            "name": "pricePerUnit"
          },
          {
            "type": "uint256",
            "name": "quantity"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "address",
            "name": "paymentToken"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "signature"
      },
      {
        "type": "uint256",
        "name": "amountIn"
      },
      {
        "type": "address[]",
        "name": "path"
      },
      {
        "type": "uint256",
        "name": "deadline"
      }
    ],
    "outputs": []
  },
  {
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract