import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27770,
  address: '0x04bd48ca2026cf4f5b181f9e3a7bd6050b8728a3' as const,
  contract_name: 'GoldRushSeason',
  display_name: 'Gold Rush Season',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742325734,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_admin"
      },
      {
        "type": "address",
        "name": "_attestor"
      }
    ]
  },
  {
    "name": "BeneficiaryLengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BeneficiarySumMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BulkCashinParamsLengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BulkParamsLengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CashInIdAlreadyRedeemed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpiredRedemption",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ForgedSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidShortString",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NewGuildEntryNotAdded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NewPlayerEntryNotAdded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoBeneficiaries",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotAGuild",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PlayerNotInFavorMap",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SenderNotRedeemingPlayer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StringTooLong",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "str"
      }
    ]
  },
  {
    "name": "ValueTooSmallCheckDecimals",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroAddressNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
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
    "name": "RoyalFavorAdjusted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint256",
        "name": "oldValue"
      },
      {
        "type": "uint256",
        "name": "newValue"
      },
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "name": "RoyalFavorCashIn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint256",
        "name": "cashInId"
      },
      {
        "type": "uint256",
        "name": "guildId"
      },
      {
        "type": "address[]",
        "name": "beneficiaries"
      },
      {
        "type": "uint256[]",
        "name": "beneficiaryValues"
      }
    ]
  },
  {
    "name": "ADJUSTER_ROLE",
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
    "name": "ADMIN_ROLE",
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
    "name": "NO_GUILD",
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
    "name": "ROYAL_FAVOR_DECIMALS",
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
    "name": "adjustFavor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint256",
        "name": "newValue"
      },
      {
        "type": "uint256",
        "name": "guildId"
      },
      {
        "type": "string",
        "name": "reason"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkAdjustFavor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "players"
      },
      {
        "type": "uint256[]",
        "name": "newValue"
      },
      {
        "type": "uint256[]",
        "name": "guildIds"
      },
      {
        "type": "string[]",
        "name": "reasons"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkCashIn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "rfrs",
        "components": [
          {
            "type": "address",
            "name": "player"
          },
          {
            "type": "uint256",
            "name": "cashInId"
          },
          {
            "type": "uint256",
            "name": "guildId"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "address[]",
            "name": "beneficiaries"
          },
          {
            "type": "uint256[]",
            "name": "beneficiaryValues"
          }
        ]
      },
      {
        "type": "bytes[]",
        "name": "attesationSignatures"
      }
    ],
    "outputs": []
  },
  {
    "name": "cashIn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "rfr",
        "components": [
          {
            "type": "address",
            "name": "player"
          },
          {
            "type": "uint256",
            "name": "cashInId"
          },
          {
            "type": "uint256",
            "name": "guildId"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "address[]",
            "name": "beneficiaries"
          },
          {
            "type": "uint256[]",
            "name": "beneficiaryValues"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "attesationSignature"
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
    "name": "getAllGuildIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getAllGuildsFavor",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getAllPlayers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getAllPlayersFavor",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getBulkGuildsFavor",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "guildIds"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getBulkPlayersFavor",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "players"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getGuildFavor",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "guildId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPlayerFavor",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "player"
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
    "name": "getRoyalFavorRedemptionTypedDataHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "rfr",
        "components": [
          {
            "type": "address",
            "name": "player"
          },
          {
            "type": "uint256",
            "name": "cashInId"
          },
          {
            "type": "uint256",
            "name": "guildId"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "address[]",
            "name": "beneficiaries"
          },
          {
            "type": "uint256[]",
            "name": "beneficiaryValues"
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
    "name": "grantAdjusterRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "adjuster"
      }
    ],
    "outputs": []
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
    "name": "isCashInRedeemed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "cashInId"
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
    "name": "revokeAdjusterRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "adjuster"
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
    "name": "royalFavorAttestor",
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
    "name": "royalFavorSum",
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
    "name": "swapRoyalFavorAttestor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAttestor"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract