import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1128,
  address: '0x5ada2a3e8a56c43f3d7e306a606ec5561bf0b2fc' as const,
  contract_name: 'NameChecker',
  display_name: 'Name Checker',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1699254612,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": []
  },
  {
    "name": "TotalSubStringTooLarge",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "total"
      }
    ]
  },
  {
    "name": "ForbiddenWordsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "wordCount"
      },
      {
        "type": "bool",
        "name": "shouldForbid"
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
    "name": "WordRangeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "min"
      },
      {
        "type": "uint8",
        "name": "max"
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
    "name": "containsBlacklistedWord",
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
    "name": "containsInvalidCharacter",
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
        "type": "bool"
      }
    ]
  },
  {
    "name": "forbidden",
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
    "name": "getAllSubStrings",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "str"
      }
    ],
    "outputs": [
      {
        "type": "string[]",
        "name": "subStrings"
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
    "name": "getWordRange",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8",
        "name": "min"
      },
      {
        "type": "uint8",
        "name": "max"
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
        "type": "uint8",
        "name": "min"
      },
      {
        "type": "uint8",
        "name": "max"
      }
    ],
    "outputs": []
  },
  {
    "name": "pack",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "string",
        "name": "str"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "packed"
      }
    ]
  },
  {
    "name": "packBulk",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "string[]",
        "name": "strs"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "packeds"
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
    "name": "setForbiddenWords",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "packedWords"
      },
      {
        "type": "bool",
        "name": "shouldForbid"
      }
    ],
    "outputs": []
  },
  {
    "name": "setForbiddenWords",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string[]",
        "name": "words"
      },
      {
        "type": "bool",
        "name": "shouldForbid"
      }
    ],
    "outputs": []
  },
  {
    "name": "setWordRange",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "min"
      },
      {
        "type": "uint8",
        "name": "max"
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
    "name": "totalSubString",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "strlen"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "total"
      },
      {
        "type": "uint256",
        "name": "min"
      },
      {
        "type": "uint256",
        "name": "max"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract