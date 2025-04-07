import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 113,
  address: '0x3036eb56e7e28851a56b87f037101ab3630933ab' as const,
  contract_name: 'RoninGatewayV2',
  display_name: 'Ronin Gateway V2',
  is_deprecated: true,
  is_proxy: false,
  proxy_to: false,
  created_at: 1680588521,
  abi: [
  {
    "name": "ErrCallerMustBeBridgeTrackingContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrCallerMustBeRoninTrustedOrgContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrCallerMustBeValidatorContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrZeroCodeContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BridgeTrackingContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "DepositVoted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "bridgeOperator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "chainId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "receiptHash"
      }
    ]
  },
  {
    "name": "Deposited",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "receiptHash"
      },
      {
        "type": "tuple",
        "name": "receipt",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint8",
            "name": "kind"
          },
          {
            "type": "tuple",
            "name": "mainchain",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "ronin",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
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
        "type": "uint8",
        "name": "version"
      }
    ]
  },
  {
    "name": "MainchainWithdrew",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "receiptHash"
      },
      {
        "type": "tuple",
        "name": "receipt",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint8",
            "name": "kind"
          },
          {
            "type": "tuple",
            "name": "mainchain",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "ronin",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "MinimumThresholdsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "uint256[]",
        "name": "threshold"
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
    "name": "RoninTrustedOrganizationContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "ThresholdUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "numerator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "denominator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "previousNumerator"
      },
      {
        "type": "uint256",
        "name": "previousDenominator"
      }
    ]
  },
  {
    "name": "TokenMapped",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "roninTokens"
      },
      {
        "type": "address[]",
        "name": "mainchainTokens"
      },
      {
        "type": "uint256[]",
        "name": "chainIds"
      },
      {
        "type": "uint8[]",
        "name": "standards"
      }
    ]
  },
  {
    "name": "TrustedThresholdUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "numerator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "denominator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "previousNumerator"
      },
      {
        "type": "uint256",
        "name": "previousDenominator"
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
    "name": "ValidatorContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "WithdrawalRequested",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "receiptHash"
      },
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint8",
            "name": "kind"
          },
          {
            "type": "tuple",
            "name": "mainchain",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "ronin",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "WithdrawalSignaturesRequested",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "receiptHash"
      },
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint8",
            "name": "kind"
          },
          {
            "type": "tuple",
            "name": "mainchain",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "ronin",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
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
    "name": "WITHDRAWAL_MIGRATOR",
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
    "name": "bridgeTrackingContract",
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
    "name": "bulkRequestWithdrawalFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_requests",
        "components": [
          {
            "type": "address",
            "name": "recipientAddr"
          },
          {
            "type": "address",
            "name": "tokenAddr"
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
      },
      {
        "type": "uint256",
        "name": "_chainId"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkSubmitWithdrawalSignatures",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_withdrawals"
      },
      {
        "type": "bytes[]",
        "name": "_signatures"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_voteWeight"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "depositFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_receipt",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint8",
            "name": "kind"
          },
          {
            "type": "tuple",
            "name": "mainchain",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "ronin",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "depositVote",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "status"
      },
      {
        "type": "bytes32",
        "name": "finalHash"
      },
      {
        "type": "uint256",
        "name": "expiredAt"
      },
      {
        "type": "uint256",
        "name": "createdAt"
      }
    ]
  },
  {
    "name": "depositVoted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_chainId"
      },
      {
        "type": "uint256",
        "name": "_depositId"
      },
      {
        "type": "address",
        "name": "_voter"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "emergencyPauser",
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
    "name": "getMainchainToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_roninToken"
      },
      {
        "type": "uint256",
        "name": "_chainId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "_token",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "address",
            "name": "tokenAddr"
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
    "name": "getThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "num_"
      },
      {
        "type": "uint256",
        "name": "denom_"
      }
    ]
  },
  {
    "name": "getTrustedThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "trustedNum_"
      },
      {
        "type": "uint256",
        "name": "trustedDenom_"
      }
    ]
  },
  {
    "name": "getWithdrawalSignatures",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_withdrawalId"
      },
      {
        "type": "address[]",
        "name": "_validators"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "_signatures"
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
        "name": "_roleSetter"
      },
      {
        "type": "uint256",
        "name": "_numerator"
      },
      {
        "type": "uint256",
        "name": "_denominator"
      },
      {
        "type": "uint256",
        "name": "_trustedNumerator"
      },
      {
        "type": "uint256",
        "name": "_trustedDenominator"
      },
      {
        "type": "address[]",
        "name": "_withdrawalMigrators"
      },
      {
        "type": "address[][2]",
        "name": "_packedAddresses"
      },
      {
        "type": "uint256[][2]",
        "name": "_packedNumbers"
      },
      {
        "type": "uint8[]",
        "name": "_standards"
      }
    ],
    "outputs": []
  },
  {
    "name": "mainchainWithdrew",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_withdrawalId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "mainchainWithdrewVote",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "status"
      },
      {
        "type": "bytes32",
        "name": "finalHash"
      },
      {
        "type": "uint256",
        "name": "expiredAt"
      },
      {
        "type": "uint256",
        "name": "createdAt"
      }
    ]
  },
  {
    "name": "mainchainWithdrewVoted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_withdrawalId"
      },
      {
        "type": "address",
        "name": "_voter"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "mapTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_roninTokens"
      },
      {
        "type": "address[]",
        "name": "_mainchainTokens"
      },
      {
        "type": "uint256[]",
        "name": "_chainIds"
      },
      {
        "type": "uint8[]",
        "name": "_standards"
      }
    ],
    "outputs": []
  },
  {
    "name": "markWithdrawalMigrated",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "migrateWithdrawals",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_requests",
        "components": [
          {
            "type": "address",
            "name": "recipientAddr"
          },
          {
            "type": "address",
            "name": "tokenAddr"
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
      },
      {
        "type": "address[]",
        "name": "_requesters"
      }
    ],
    "outputs": []
  },
  {
    "name": "minimumThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "minimumTrustedVoteWeight",
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
    "name": "minimumVoteWeight",
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
    "name": "nonce",
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
    "name": "requestWithdrawalFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_request",
        "components": [
          {
            "type": "address",
            "name": "recipientAddr"
          },
          {
            "type": "address",
            "name": "tokenAddr"
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
      },
      {
        "type": "uint256",
        "name": "_chainId"
      }
    ],
    "outputs": []
  },
  {
    "name": "requestWithdrawalSignatures",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_withdrawalId"
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
    "name": "roninTrustedOrganizationContract",
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
    "name": "setBridgeTrackingContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setEmergencyPauser",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinimumThresholds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_tokens"
      },
      {
        "type": "uint256[]",
        "name": "_thresholds"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRoninTrustedOrganizationContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setThreshold",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_numerator"
      },
      {
        "type": "uint256",
        "name": "_denominator"
      }
    ],
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
    "name": "setTrustedThreshold",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_trustedNumerator"
      },
      {
        "type": "uint256",
        "name": "_trustedDenominator"
      }
    ],
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
    "name": "setValidatorContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
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
    "name": "tryBulkAcknowledgeMainchainWithdrew",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_withdrawalIds"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "_executedReceipts"
      }
    ]
  },
  {
    "name": "tryBulkDepositFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_receipts",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint8",
            "name": "kind"
          },
          {
            "type": "tuple",
            "name": "mainchain",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "ronin",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "_executedReceipts"
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
    "name": "withdrawal",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint8",
        "name": "kind"
      },
      {
        "type": "tuple",
        "name": "mainchain",
        "components": [
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "address",
            "name": "tokenAddr"
          },
          {
            "type": "uint256",
            "name": "chainId"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "ronin",
        "components": [
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "address",
            "name": "tokenAddr"
          },
          {
            "type": "uint256",
            "name": "chainId"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "info",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "quantity"
          }
        ]
      }
    ]
  },
  {
    "name": "withdrawalCount",
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
    "name": "withdrawalMigrated",
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
    "name": "withdrawalStatVote",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "status"
      },
      {
        "type": "bytes32",
        "name": "finalHash"
      },
      {
        "type": "uint256",
        "name": "expiredAt"
      },
      {
        "type": "uint256",
        "name": "createdAt"
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