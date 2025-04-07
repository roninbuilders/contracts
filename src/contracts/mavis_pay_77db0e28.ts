import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 424,
  address: '0xb9a0914da17b460ff382da8924d9d23f77db0e28' as const,
  contract_name: 'MavisPay',
  display_name: 'Mavis Pay',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1691120479,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AcceptedERC20TokenChange",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_merchant",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_token",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "_accepted"
      }
    ]
  },
  {
    "name": "AcceptedRONChange",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_merchant",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "_accepted"
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
    "name": "MerchantUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_merchant",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "_enabled"
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
    "name": "PaymentComplete",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "_request",
        "components": [
          {
            "type": "address",
            "name": "_to"
          },
          {
            "type": "uint256",
            "name": "_amount"
          },
          {
            "type": "uint256",
            "name": "_maxAmountPaid"
          },
          {
            "type": "bytes",
            "name": "_paymentReference"
          },
          {
            "type": "uint256",
            "name": "_validUntil"
          },
          {
            "type": "address[]",
            "name": "_path"
          }
        ]
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
    "name": "WhitelistUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "enabled"
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
    "name": "MERCHANT_ROLE",
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
    "name": "MERCHANT_WHITELIST_ENABLED",
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
    "name": "getAmountsIn",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_path"
      },
      {
        "type": "uint256",
        "name": "_amountOut"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "amountsIn"
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
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_katanaRouter"
      },
      {
        "type": "address",
        "name": "_admin"
      }
    ],
    "outputs": []
  },
  {
    "name": "isMerchantWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_merchant"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "merchantAcceptRON",
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
    "name": "merchantAcceptToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
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
    "name": "pay",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_request",
        "components": [
          {
            "type": "address",
            "name": "_to"
          },
          {
            "type": "uint256",
            "name": "_amount"
          },
          {
            "type": "uint256",
            "name": "_maxAmountPaid"
          },
          {
            "type": "bytes",
            "name": "_paymentReference"
          },
          {
            "type": "uint256",
            "name": "_validUntil"
          },
          {
            "type": "address[]",
            "name": "_path"
          }
        ]
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
    "name": "setAcceptRON",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_accepted"
      }
    ],
    "outputs": []
  },
  {
    "name": "setAcceptRON",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_merchant"
      },
      {
        "type": "bool",
        "name": "_accepted"
      }
    ],
    "outputs": []
  },
  {
    "name": "setAllowedToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_merchant"
      },
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "bool",
        "name": "_allowed"
      }
    ],
    "outputs": []
  },
  {
    "name": "setAllowedToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "bool",
        "name": "_allowed"
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
    "name": "updateMerchant",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_merchant"
      },
      {
        "type": "bool",
        "name": "_enabled"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_enabled"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract