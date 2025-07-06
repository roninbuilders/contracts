import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 119,
  address: '0x3b3adf1422f84254b7fbb0e7ca62bd0865133fe3' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Market Gateway Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x56b90d7bbd0ed51cd4dc52fd059ffa21dbbbd729',
  created_at: 1682579265,
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
    "name": "InvalidLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRoyaltyRegistry",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTotalRoyaltyFees",
    "type": "error",
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
    "name": "MakerNonceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "maker",
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
    "name": "RoyaltyRegistryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "royaltyRegistry"
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
    "name": "getRoyaltyRegistry",
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
    "name": "incrementNonceMaker",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
        "type": "bool"
      },
      {
        "type": "address"
      },
      {
        "type": "bool"
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
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "royaltyRegistry"
      },
      {
        "type": "string[]",
        "name": "interfaces"
      },
      {
        "type": "address[]",
        "name": "logics"
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
    "name": "makerNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "maker"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "setRoyaltyRegistry",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "royaltyRegistry"
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