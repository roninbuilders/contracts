import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35227,
  address: '0x8602d7e979165c3e2ca043fb824c7bb70e2d2860' as const,
  contract_name: 'RealmsOfAluryaHuntAndMintEvent',
  display_name: 'Realms Of Alurya Hunt And Mint Event',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1748944741,
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
    "name": "AccessControlEnforcedDefaultAdminDelay",
    "type": "error",
    "inputs": [
      {
        "type": "uint48",
        "name": "schedule"
      }
    ]
  },
  {
    "name": "AccessControlEnforcedDefaultAdminRules",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AccessControlInvalidDefaultAdmin",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "defaultAdmin"
      }
    ]
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
    "name": "ECDSAInvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ECDSAInvalidSignatureLength",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "length"
      }
    ]
  },
  {
    "name": "ECDSAInvalidSignatureS",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "s"
      }
    ]
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
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SafeCastOverflowedUintDowncast",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "bits"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "DefaultAdminDelayChangeCanceled",
    "type": "event",
    "inputs": []
  },
  {
    "name": "DefaultAdminDelayChangeScheduled",
    "type": "event",
    "inputs": [
      {
        "type": "uint48",
        "name": "newDelay"
      },
      {
        "type": "uint48",
        "name": "effectSchedule"
      }
    ]
  },
  {
    "name": "DefaultAdminTransferCanceled",
    "type": "event",
    "inputs": []
  },
  {
    "name": "DefaultAdminTransferScheduled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin",
        "indexed": true
      },
      {
        "type": "uint48",
        "name": "acceptSchedule"
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
    "name": "Lock",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "playerId",
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
    "name": "Mint",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "playerId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "Redeem",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "playerId",
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
    "name": "Stake",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "playerId",
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
    "name": "Unstake",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "playerId",
        "indexed": true
      }
    ]
  },
  {
    "name": "Upgrade",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "playerId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "perk",
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
    "name": "REALMS_OF_ALURYA_ROLE",
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
    "name": "acceptDefaultAdminTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "addFunds",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "beginDefaultAdminTransfer",
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
    "name": "cancelDefaultAdminTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "changeDefaultAdminDelay",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint48",
        "name": "newDelay"
      }
    ],
    "outputs": []
  },
  {
    "name": "defaultAdmin",
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
    "name": "defaultAdminDelay",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint48"
      }
    ]
  },
  {
    "name": "defaultAdminDelayIncreaseWait",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint48"
      }
    ]
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
    "name": "firstPerkStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      },
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
        "name": "paymentReceiver"
      },
      {
        "type": "address",
        "name": "hunt"
      },
      {
        "type": "address",
        "name": "pets"
      },
      {
        "type": "address",
        "name": "islands"
      },
      {
        "type": "address",
        "name": "synergians"
      },
      {
        "type": "address",
        "name": "badges"
      },
      {
        "type": "address",
        "name": "items"
      }
    ],
    "outputs": []
  },
  {
    "name": "lock",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "request",
        "components": [
          {
            "type": "address",
            "name": "operator"
          },
          {
            "type": "bytes32",
            "name": "playerId"
          },
          {
            "type": "uint256",
            "name": "validUntil"
          },
          {
            "type": "address",
            "name": "asset"
          },
          {
            "type": "bytes32",
            "name": "name"
          },
          {
            "type": "uint256",
            "name": "nonce"
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
    "name": "mint",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "request",
        "components": [
          {
            "type": "address",
            "name": "operator"
          },
          {
            "type": "bytes32",
            "name": "playerId"
          },
          {
            "type": "uint256",
            "name": "price"
          },
          {
            "type": "string",
            "name": "uri"
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
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
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
    "name": "pendingDefaultAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "newAdmin"
      },
      {
        "type": "uint48",
        "name": "schedule"
      }
    ]
  },
  {
    "name": "pendingDefaultAdminDelay",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint48",
        "name": "newDelay"
      },
      {
        "type": "uint48",
        "name": "schedule"
      }
    ]
  },
  {
    "name": "redeem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "request",
        "components": [
          {
            "type": "address",
            "name": "operator"
          },
          {
            "type": "bytes32",
            "name": "playerId"
          },
          {
            "type": "uint256",
            "name": "validUntil"
          },
          {
            "type": "uint256",
            "name": "currencyAmount"
          },
          {
            "type": "uint256",
            "name": "itemId"
          },
          {
            "type": "bool",
            "name": "burn"
          },
          {
            "type": "uint256",
            "name": "nonce"
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
        "name": "callerConfirmation"
      }
    ],
    "outputs": []
  },
  {
    "name": "retrieveFunds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
    "name": "rollbackDefaultAdminDelay",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "secondPerkStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "setAssetsAddresses",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "hunt"
      },
      {
        "type": "address",
        "name": "pets"
      },
      {
        "type": "address",
        "name": "islands"
      },
      {
        "type": "address",
        "name": "synergians"
      },
      {
        "type": "address",
        "name": "badges"
      },
      {
        "type": "address",
        "name": "items"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPaymentReceiver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "paymentReceiver"
      }
    ],
    "outputs": []
  },
  {
    "name": "stake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "request",
        "components": [
          {
            "type": "address",
            "name": "operator"
          },
          {
            "type": "bytes32",
            "name": "playerId"
          },
          {
            "type": "uint256",
            "name": "validUntil"
          },
          {
            "type": "address",
            "name": "asset"
          },
          {
            "type": "bytes32",
            "name": "name"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "nonce"
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
    "name": "thirdPerkStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "unstake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "request",
        "components": [
          {
            "type": "address",
            "name": "operator"
          },
          {
            "type": "bytes32",
            "name": "playerId"
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
    "name": "upgrade",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "request",
        "components": [
          {
            "type": "address",
            "name": "operator"
          },
          {
            "type": "bytes32",
            "name": "playerId"
          },
          {
            "type": "uint256",
            "name": "perk"
          },
          {
            "type": "uint256",
            "name": "price"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract