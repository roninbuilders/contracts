import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36399,
  address: '0x2bb1b58640871f323a32fdfb709b3429f1dbdfb9' as const,
  contract_name: 'AgentStation',
  display_name: 'Agent Station',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753692213,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AccessControlBadConfirmation",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AccessControlUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "neededRole"
      }
    ]
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "AddressInsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "AmountSentIsZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ERC1967InvalidImplementation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      }
    ]
  },
  {
    "name": "ERC1967NonPayable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Erc20DepositNotEnabled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeeNotSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "IncorrectAmount",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "expected"
      },
      {
        "type": "uint256",
        "name": "actual"
      }
    ]
  },
  {
    "name": "InsufficientAmount",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "minimum"
      },
      {
        "type": "uint256",
        "name": "actual"
      }
    ]
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPaymentToken",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "paymentToken"
      }
    ]
  },
  {
    "name": "LimitReached",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "limit"
      },
      {
        "type": "uint256",
        "name": "consumed"
      }
    ]
  },
  {
    "name": "NativeDepositNotEnabled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NativeTransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SafeERC20FailedOperation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "UUPSUnauthorizedCallContext",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UUPSUnsupportedProxiableUUID",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "slot"
      }
    ]
  },
  {
    "name": "AbilityUnlocked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "string",
        "name": "agentId"
      },
      {
        "type": "string",
        "name": "ability"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "AdminWithdrawal",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "admin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "destination",
        "indexed": true
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "CreditAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "creditType"
      },
      {
        "type": "string",
        "name": "agentId"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "DefaultUnlockErc20FeeSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "DefaultUnlockNativeFeeSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "version"
      }
    ]
  },
  {
    "name": "LimitInfoSet",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "ability"
      },
      {
        "type": "bool",
        "name": "isLimited"
      },
      {
        "type": "uint256",
        "name": "limit"
      }
    ]
  },
  {
    "name": "PaymentTokenSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "paymentToken"
      }
    ]
  },
  {
    "name": "RerollErc20FeeSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "RerollNativeFeeSet",
    "type": "event",
    "inputs": [
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
    "name": "UnlockNativeFeeSet",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "ability"
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "UPGRADER_ROLE",
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
    "name": "UPGRADE_INTERFACE_VERSION",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "adminCredit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user_"
      },
      {
        "type": "uint8",
        "name": "creditType_"
      },
      {
        "type": "string",
        "name": "agentId_"
      },
      {
        "type": "address",
        "name": "paymentToken_"
      },
      {
        "type": "uint256",
        "name": "amount_"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminUnlock",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user_"
      },
      {
        "type": "string",
        "name": "agentId_"
      },
      {
        "type": "string",
        "name": "ability_"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminWithdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "destination_"
      },
      {
        "type": "address",
        "name": "paymentToken_"
      },
      {
        "type": "uint256",
        "name": "amount_"
      }
    ],
    "outputs": []
  },
  {
    "name": "eip712Domain",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes1",
        "name": "fields"
      },
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "version"
      },
      {
        "type": "uint256",
        "name": "chainId"
      },
      {
        "type": "address",
        "name": "verifyingContract"
      },
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "uint256[]",
        "name": "extensions"
      }
    ]
  },
  {
    "name": "getDefaultUnlockErc20Fee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "paymentToken_"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getDefaultUnlockNativeFee",
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
    "name": "getLimitInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "ability_"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "bool",
            "name": "isLimited"
          },
          {
            "type": "uint256",
            "name": "limit"
          },
          {
            "type": "uint256",
            "name": "consumed"
          }
        ]
      }
    ]
  },
  {
    "name": "getPaymentToken",
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
    "name": "getRerollErc20Fee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "paymentToken_"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getRerollNativeFee",
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
    "name": "getUnlockNativeFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "ability_"
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
    "inputs": [],
    "outputs": []
  },
  {
    "name": "proxiableUUID",
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
    "name": "recharge",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "agentId_"
      },
      {
        "type": "uint256",
        "name": "amount_"
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
        "name": "callerConfirmation"
      }
    ],
    "outputs": []
  },
  {
    "name": "reroll",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "agentId_"
      },
      {
        "type": "address",
        "name": "paymentToken_"
      },
      {
        "type": "uint256",
        "name": "amount_"
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
    "name": "setDefaultUnlockErc20Fee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "paymentToken_"
      },
      {
        "type": "uint256",
        "name": "fee_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setDefaultUnlockNativeFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "fee_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLimitInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "ability_"
      },
      {
        "type": "bool",
        "name": "isLimited_"
      },
      {
        "type": "uint256",
        "name": "limit_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPaymentToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "paymentToken_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRerollErc20Fee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "paymentToken_"
      },
      {
        "type": "uint256",
        "name": "fee_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRerollNativeFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "fee_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setUnlockNativeFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "ability_"
      },
      {
        "type": "uint256",
        "name": "fee_"
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
    "name": "unlock",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "agentId_"
      },
      {
        "type": "string",
        "name": "ability_"
      }
    ],
    "outputs": []
  },
  {
    "name": "unlock",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "agentId_"
      },
      {
        "type": "string",
        "name": "ability_"
      },
      {
        "type": "address",
        "name": "paymentToken_"
      },
      {
        "type": "uint256",
        "name": "amount_"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract