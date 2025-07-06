import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1266,
  address: '0x53a11a02195d284c78b79801056ea893a2e6ea09' as const,
  contract_name: 'MarketGateway',
  display_name: 'Market Gateway',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1700712603,
  abi: [
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
        "type": "bool"
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
    "name": "InterfacesUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "string[]",
        "name": "interfaces"
      },
      {
        "type": "address[]",
        "name": "addresses"
      }
    ]
  },
  {
    "name": "KatanaRouterUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "KatanaRouterContract"
      }
    ]
  },
  {
    "name": "MarketCommissionConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "referralFeature"
      },
      {
        "type": "address",
        "name": "marketCommission"
      },
      {
        "type": "bool",
        "name": "autoTransferReferralReward"
      }
    ]
  },
  {
    "name": "MinMarketFeePercentageUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "minMarketFeePercentage"
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
        "name": "allowed"
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
    "name": "TreasuryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "WRONConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "wronContract"
      },
      {
        "type": "address",
        "name": "wronHelper"
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
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
    "name": "getInterface",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "interfaceName"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getMarketCommissionConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "referralFeature"
      },
      {
        "type": "address",
        "name": "marketCommission"
      },
      {
        "type": "bool",
        "name": "autoTransferReferralReward"
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
        "name": "wronContract"
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
        "type": "bool",
        "name": "referralFeature"
      },
      {
        "type": "address",
        "name": "marketCommission"
      },
      {
        "type": "bool",
        "name": "autoTransferReferralReward"
      },
      {
        "type": "address[]",
        "name": "paymentTokens"
      },
      {
        "type": "string[]",
        "name": "interfaces"
      },
      {
        "type": "address[][2]",
        "name": "addresses"
      }
    ],
    "outputs": []
  },
  {
    "name": "interactWith",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "interfaceName"
      },
      {
        "type": "bytes",
        "name": "data"
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
    "name": "setInterfaces",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string[]",
        "name": "interfaces"
      },
      {
        "type": "address[]",
        "name": "addresses"
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
        "name": "routerContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMarketCommissionConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "referralFeature"
      },
      {
        "type": "address",
        "name": "marketCommission"
      },
      {
        "type": "bool",
        "name": "autoTransferReferralReward"
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
    "name": "setWRONConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "wronAddr"
      },
      {
        "type": "address",
        "name": "wronHelperAddr"
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
    "name": "wronHelper",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract