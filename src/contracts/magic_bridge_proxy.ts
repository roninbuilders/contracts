import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36275,
  address: '0x37687d638ea2d25df5350d37d5bccbf7fff1f2b3' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Magic Bridge Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xbe59cf28cdd24310e0d47fcebc110a727b554c71',
  created_at: 1753073190,
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
    "inputs": [
      {
        "type": "address",
        "name": "mailbox_"
      }
    ]
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
    "name": "ERC20InsufficientAllowance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "allowance"
      },
      {
        "type": "uint256",
        "name": "needed"
      }
    ]
  },
  {
    "name": "ERC20InsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      },
      {
        "type": "uint256",
        "name": "balance"
      },
      {
        "type": "uint256",
        "name": "needed"
      }
    ]
  },
  {
    "name": "ERC20InvalidApprover",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "approver"
      }
    ]
  },
  {
    "name": "ERC20InvalidReceiver",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "receiver"
      }
    ]
  },
  {
    "name": "ERC20InvalidSender",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      }
    ]
  },
  {
    "name": "ERC20InvalidSpender",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      }
    ]
  },
  {
    "name": "FailedCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnableInvalidOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "OwnableUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
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
    "name": "Approval",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "spender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "GasSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "domain"
      },
      {
        "type": "uint256",
        "name": "gas"
      }
    ]
  },
  {
    "name": "HookSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_hook"
      }
    ]
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
    "name": "IsmSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_ism"
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
    "name": "ReceivedTransferRemote",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "origin",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "recipient",
        "indexed": true
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
    "name": "SentTransferRemote",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "destination",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "Transfer",
    "type": "event",
    "inputs": [
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
        "name": "value"
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
    "name": "PACKAGE_VERSION",
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
    "name": "allowance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "spender"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "approve",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
        "name": "account_"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "decimals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "destinationGas",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "destinationDomain"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "gasLimit"
      }
    ]
  },
  {
    "name": "domains",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32[]"
      }
    ]
  },
  {
    "name": "enrollRemoteRouter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "_domain"
      },
      {
        "type": "bytes32",
        "name": "_router"
      }
    ],
    "outputs": []
  },
  {
    "name": "enrollRemoteRouters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32[]",
        "name": "_domains"
      },
      {
        "type": "bytes32[]",
        "name": "_addresses"
      }
    ],
    "outputs": []
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
    "name": "getRoleMembers",
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
        "type": "address[]"
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
    "name": "handle",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint32",
        "name": "_origin"
      },
      {
        "type": "bytes32",
        "name": "_sender"
      },
      {
        "type": "bytes",
        "name": "_message"
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
    "name": "hook",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "hook_"
      },
      {
        "type": "address",
        "name": "interchainSecurityModule_"
      }
    ],
    "outputs": []
  },
  {
    "name": "interchainSecurityModule",
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
    "name": "localDomain",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "mailbox",
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
    "name": "name",
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
    "name": "quoteGasPayment",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "_destinationDomain"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "quoteTransferRemote",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "_destination"
      },
      {
        "type": "bytes32",
        "name": "_recipient"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "quotes",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
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
    "name": "routers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "_domain"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "setDestinationGas",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "domain"
      },
      {
        "type": "uint256",
        "name": "gas"
      }
    ],
    "outputs": []
  },
  {
    "name": "setDestinationGas",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "gasConfigs",
        "components": [
          {
            "type": "uint32",
            "name": "domain"
          },
          {
            "type": "uint256",
            "name": "gas"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setHook",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_hook"
      }
    ],
    "outputs": []
  },
  {
    "name": "setInterchainSecurityModule",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_module"
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
    "name": "symbol",
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
    "name": "totalSupply",
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
    "name": "transfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "transferFrom",
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
        "name": "value"
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
    "name": "transferRemote",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint32",
        "name": "_destination"
      },
      {
        "type": "bytes32",
        "name": "_recipient"
      },
      {
        "type": "uint256",
        "name": "_amountOrId"
      },
      {
        "type": "bytes",
        "name": "_hookMetadata"
      },
      {
        "type": "address",
        "name": "_hook"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "messageId"
      }
    ]
  },
  {
    "name": "transferRemote",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint32",
        "name": "_destination"
      },
      {
        "type": "bytes32",
        "name": "_recipient"
      },
      {
        "type": "uint256",
        "name": "_amountOrId"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "messageId"
      }
    ]
  },
  {
    "name": "unenrollRemoteRouter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "_domain"
      }
    ],
    "outputs": []
  },
  {
    "name": "unenrollRemoteRouters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32[]",
        "name": "_domains"
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