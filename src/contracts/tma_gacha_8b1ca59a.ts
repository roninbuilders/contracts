import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4239,
  address: '0xd0683ac77c45beac7d7e520a9e60f6258b1ca59a' as const,
  contract_name: 'TMAGacha',
  display_name: 'TMA Gacha',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1727227979,
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
    "name": "EnforcedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpectedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "GachaFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInputs",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidItemContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidNFTContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRecipient",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRewardTable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRewardTableInput",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTokenContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidValidatorContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MainnetNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoValidatorContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignatureAlreadyUsed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignatureExpired",
    "type": "error",
    "inputs": []
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
    "name": "UnknownNetwork",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FundsSentToTreasury",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "treasuryAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "GachaCompleted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "wallet",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tableId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "randomNumber"
      },
      {
        "type": "tuple",
        "name": "reward",
        "components": [
          {
            "type": "uint256[]",
            "name": "tokenIds"
          },
          {
            "type": "uint256[]",
            "name": "tokenAmounts"
          },
          {
            "type": "uint256",
            "name": "ronAmount"
          }
        ]
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
    "name": "ItemContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newContract"
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
    "name": "RewardTableDeleted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tableId",
        "indexed": true
      }
    ]
  },
  {
    "name": "RewardTableUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tableId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "newTable",
        "components": [
          {
            "type": "uint256[]",
            "name": "costTokenIds"
          },
          {
            "type": "uint256[]",
            "name": "costTokenAmounts"
          },
          {
            "type": "tuple[]",
            "name": "rewards",
            "components": [
              {
                "type": "uint256[]",
                "name": "tokenIds"
              },
              {
                "type": "uint256[]",
                "name": "tokenAmounts"
              },
              {
                "type": "uint256",
                "name": "ronAmount"
              }
            ]
          },
          {
            "type": "uint256[]",
            "name": "chanceRanges"
          },
          {
            "type": "uint256",
            "name": "totalChance"
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
    "name": "TreasuryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newAddress",
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
    "name": "ValidatorContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newContract",
        "indexed": true
      }
    ]
  },
  {
    "name": "Withdraw",
    "type": "event",
    "inputs": [
      {
        "type": "address",
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
    "name": "REWARD_TABLE_HIGH",
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
    "name": "REWARD_TABLE_LOW",
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
    "name": "REWARD_TABLE_MEDIUM",
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
    "name": "adminDeleteRewardTable",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tableId"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminSetItemContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "itemContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminSetRewardTable",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tableId"
      },
      {
        "type": "tuple",
        "name": "input",
        "components": [
          {
            "type": "uint256[]",
            "name": "costTokenIds"
          },
          {
            "type": "uint256[]",
            "name": "costTokenAmounts"
          },
          {
            "type": "tuple[]",
            "name": "rewards",
            "components": [
              {
                "type": "uint256[]",
                "name": "tokenIds"
              },
              {
                "type": "uint256[]",
                "name": "tokenAmounts"
              },
              {
                "type": "uint256",
                "name": "ronAmount"
              }
            ]
          },
          {
            "type": "uint256[]",
            "name": "chances"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "adminSetTreasuryAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newTreasuryAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminSetValidatorContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "validator"
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
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminWithdrawAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "gacha",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "rewardTableId"
      },
      {
        "type": "tuple",
        "name": "payload",
        "components": [
          {
            "type": "uint256",
            "name": "number"
          },
          {
            "type": "uint256",
            "name": "expireTime"
          },
          {
            "type": "bytes",
            "name": "signature"
          },
          {
            "type": "bool",
            "name": "verifyMessageHash"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "getRewardTable",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tableId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256[]",
            "name": "costTokenIds"
          },
          {
            "type": "uint256[]",
            "name": "costTokenAmounts"
          },
          {
            "type": "tuple[]",
            "name": "rewards",
            "components": [
              {
                "type": "uint256[]",
                "name": "tokenIds"
              },
              {
                "type": "uint256[]",
                "name": "tokenAmounts"
              },
              {
                "type": "uint256",
                "name": "ronAmount"
              }
            ]
          },
          {
            "type": "uint256[]",
            "name": "chanceRanges"
          },
          {
            "type": "uint256",
            "name": "totalChance"
          }
        ]
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
    "name": "getStorage",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "itemContract"
          },
          {
            "type": "tuple[]",
            "name": "rewardTables",
            "components": [
              {
                "type": "uint256[]",
                "name": "costTokenIds"
              },
              {
                "type": "uint256[]",
                "name": "costTokenAmounts"
              },
              {
                "type": "tuple[]",
                "name": "rewards",
                "components": [
                  {
                    "type": "uint256[]",
                    "name": "tokenIds"
                  },
                  {
                    "type": "uint256[]",
                    "name": "tokenAmounts"
                  },
                  {
                    "type": "uint256",
                    "name": "ronAmount"
                  }
                ]
              },
              {
                "type": "uint256[]",
                "name": "chances"
              }
            ]
          }
        ]
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
        "type": "tuple",
        "name": "_initializer",
        "components": [
          {
            "type": "address",
            "name": "adminAddress"
          },
          {
            "type": "address",
            "name": "itemContract"
          },
          {
            "type": "uint256[]",
            "name": "rewardTableIDs"
          },
          {
            "type": "tuple[]",
            "name": "rewardTables",
            "components": [
              {
                "type": "uint256[]",
                "name": "costTokenIds"
              },
              {
                "type": "uint256[]",
                "name": "costTokenAmounts"
              },
              {
                "type": "tuple[]",
                "name": "rewards",
                "components": [
                  {
                    "type": "uint256[]",
                    "name": "tokenIds"
                  },
                  {
                    "type": "uint256[]",
                    "name": "tokenAmounts"
                  },
                  {
                    "type": "uint256",
                    "name": "ronAmount"
                  }
                ]
              },
              {
                "type": "uint256[]",
                "name": "chances"
              }
            ]
          }
        ]
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
    "name": "treasuryAddress",
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
    "name": "validatorContract",
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
    "name": "version",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract