import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1284,
  address: '0x8a28c188a067dfa6aaec36e2b67b34d2c3042df9' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Mavis Pay Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xe2be7239bb060f650068251145f856617c843dec',
  created_at: 1701069325,
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
    "name": "PayServiceInfosUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "payServices",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "treasuries",
        "indexed": true
      }
    ]
  },
  {
    "name": "PaymentSuccess",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "price",
        "indexed": true
      },
      {
        "type": "address",
        "name": "paymentToken",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "validUntil"
      },
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "address",
        "name": "payToken"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "PaymentTokensAllowed",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens",
        "indexed": true
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
    "name": "WRON",
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
    "name": "allowedAllPaymentTokens",
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
    "name": "allowedPaymentToken",
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
        "type": "bool",
        "name": "allowedAllPaymentTokens"
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
    "name": "katanaRouterContract",
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
    "name": "payWithRON",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "address",
            "name": "payService"
          },
          {
            "type": "bytes32",
            "name": "orderId"
          },
          {
            "type": "uint256",
            "name": "validUntil"
          },
          {
            "type": "uint256",
            "name": "price"
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
            "type": "address",
            "name": "payService"
          },
          {
            "type": "bytes32",
            "name": "orderId"
          },
          {
            "type": "uint256",
            "name": "validUntil"
          },
          {
            "type": "uint256",
            "name": "price"
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
            "type": "address",
            "name": "payService"
          },
          {
            "type": "bytes32",
            "name": "orderId"
          },
          {
            "type": "uint256",
            "name": "validUntil"
          },
          {
            "type": "uint256",
            "name": "price"
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
            "type": "address",
            "name": "payService"
          },
          {
            "type": "bytes32",
            "name": "orderId"
          },
          {
            "type": "uint256",
            "name": "validUntil"
          },
          {
            "type": "uint256",
            "name": "price"
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
    "name": "wronHelperContract",
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