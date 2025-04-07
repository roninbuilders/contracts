import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1130,
  address: '0x662852853614cbbb5d04bf2e29955b97e3c50b69' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'RON Registrar Controller Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xaae506b2232eaea59238ffe501a9e6cfc8f9b843',
  created_at: 1699254612,
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
    "stateMutability": "payable",
    "inputs": []
  },
  {
    "name": "CommitmentTooNew",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "commitment"
      }
    ]
  },
  {
    "name": "CommitmentTooOld",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "commitment"
      }
    ]
  },
  {
    "name": "DurationTooShort",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "duration"
      }
    ]
  },
  {
    "name": "ErrInvalidRegisterProtectedName",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "address",
        "name": "requestOwner"
      },
      {
        "type": "bool",
        "name": "nameProtected"
      },
      {
        "type": "bool",
        "name": "ownerWhitelisted"
      }
    ]
  },
  {
    "name": "ErrRequestedForProtectedName",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      }
    ]
  },
  {
    "name": "InsufficientValue",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidArrayLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MaxCommitmentAgeTooHigh",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MaxCommitmentAgeTooLow",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NameNotAvailable",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      }
    ]
  },
  {
    "name": "NullAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ResolverRequiredWhenDataSupplied",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Unauthorized",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      }
    ]
  },
  {
    "name": "UnexpiredCommitmentExists",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "commitment"
      }
    ]
  },
  {
    "name": "CommitmentAgeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "minCommitmentAge"
      },
      {
        "type": "uint256",
        "name": "maxCommitmentAge"
      }
    ]
  },
  {
    "name": "DomainPriceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newDomainPrice"
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
    "name": "MinRegistrationDurationUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "duration"
      }
    ]
  },
  {
    "name": "NameRegistered",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "ronPrice"
      },
      {
        "type": "uint256",
        "name": "usdPrice"
      },
      {
        "type": "uint64",
        "name": "expires"
      }
    ]
  },
  {
    "name": "NameRenewed",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "cost"
      },
      {
        "type": "uint64",
        "name": "expires"
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
    "name": "ProtectedNamesWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "address[]",
        "name": "owners"
      },
      {
        "type": "bool",
        "name": "status"
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
        "type": "address",
        "name": "addr",
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
    "name": "MIN_DOMAIN_LENGTH",
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
    "name": "available",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "bulkWhitelistProtectedNames",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "address[]",
        "name": "owners"
      },
      {
        "type": "bool",
        "name": "status"
      }
    ],
    "outputs": []
  },
  {
    "name": "commit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "commitment"
      }
    ],
    "outputs": []
  },
  {
    "name": "computeCommitment",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint64",
        "name": "duration"
      },
      {
        "type": "bytes32",
        "name": "secret"
      },
      {
        "type": "address",
        "name": "resolver"
      },
      {
        "type": "bytes[]",
        "name": "data"
      },
      {
        "type": "bool",
        "name": "reverseRecord"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "computeId",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "id"
      }
    ]
  },
  {
    "name": "getCommitmentAgeRange",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "minCommitmentAge"
      },
      {
        "type": "uint256",
        "name": "maxCommitmentAge"
      }
    ]
  },
  {
    "name": "getMinRegistrationDuration",
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
    "name": "getNameChecker",
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
    "name": "getPriceOracle",
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
    "name": "getRNSUnified",
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
    "name": "getReverseRegistrar",
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
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getWhitelistProtectedNameStatus",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "address",
        "name": "owner"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "status"
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
        "name": "admin"
      },
      {
        "type": "address",
        "name": "pauser"
      },
      {
        "type": "address",
        "name": "treasury"
      },
      {
        "type": "uint256",
        "name": "maxCommitmentAge"
      },
      {
        "type": "uint256",
        "name": "minCommitmentAge"
      },
      {
        "type": "uint256",
        "name": "minRegistrationDuration"
      },
      {
        "type": "address",
        "name": "rnsUnified"
      },
      {
        "type": "address",
        "name": "nameChecker"
      },
      {
        "type": "address",
        "name": "priceOracle"
      },
      {
        "type": "address",
        "name": "reverseRegistrar"
      }
    ],
    "outputs": []
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
    "name": "register",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint64",
        "name": "duration"
      },
      {
        "type": "bytes32",
        "name": "secret"
      },
      {
        "type": "address",
        "name": "resolver"
      },
      {
        "type": "bytes[]",
        "name": "data"
      },
      {
        "type": "bool",
        "name": "reverseRecord"
      }
    ],
    "outputs": []
  },
  {
    "name": "registerProtectedName",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint64",
        "name": "duration"
      },
      {
        "type": "address",
        "name": "resolver"
      },
      {
        "type": "bytes[]",
        "name": "data"
      },
      {
        "type": "bool",
        "name": "reverseRecord"
      }
    ],
    "outputs": []
  },
  {
    "name": "renew",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "uint64",
        "name": "duration"
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
    "name": "rentPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "uint64",
        "name": "duration"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "usdPrice"
      },
      {
        "type": "uint256",
        "name": "ronPrice"
      }
    ]
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
    "name": "setCommitmentAge",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "minCommitmentAge"
      },
      {
        "type": "uint256",
        "name": "maxCommitmentAge"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinRegistrationDuration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "duration"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPriceOracle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "priceOracle"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
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
    "name": "valid",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract