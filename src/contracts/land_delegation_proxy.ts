import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1577,
  address: '0x6e1c680981a101bf6dc794e1d3ba7fa496eea12e' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Land Delegation Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xa4ea87af70ef27c06c816d0dba0153fe52194a3e',
  created_at: 1705558633,
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
    "name": "AgreementExpiredOrNotYetStarted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AlreadyAssignedFor",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "steward"
      },
      {
        "type": "bytes32",
        "name": "agreementHash"
      }
    ]
  },
  {
    "name": "AlreadyClaimed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AlreadySubmited",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AlreadyTerminated",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExceedsMaxLevel",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpiredAgreement",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FixedSalaryInvalidConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientAmount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "required"
      }
    ]
  },
  {
    "name": "InvalidConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidDuration",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidOwnerOf",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      }
    ]
  },
  {
    "name": "InvalidRatio",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidShortString",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "signer"
      }
    ]
  },
  {
    "name": "NFTIsForbidden",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "NativeValueShouldBeZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NullAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnerIsSteward",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PayoutTokenIsForbidden",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "RatioExceedMaxPercentage",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RewardSharingInvalidConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignatureExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignatureUsed",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "signature"
      }
    ]
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
    "name": "TerminationTooEarly",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Unauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnexistAgreement",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnknownSteward",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AgreementExtended",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "submitter",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "agreementHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "depositAmount"
      },
      {
        "type": "uint64",
        "name": "endAt"
      }
    ]
  },
  {
    "name": "AgreementSubmitted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "submitter",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "agreementHash",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "agreement",
        "components": [
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint8",
            "name": "payoutOption"
          },
          {
            "type": "uint8",
            "name": "extensionRule"
          },
          {
            "type": "uint8",
            "name": "earlyTermination"
          },
          {
            "type": "tuple[]",
            "name": "payouts",
            "components": [
              {
                "type": "uint8",
                "name": "recipientOpt"
              },
              {
                "type": "uint256",
                "name": "ratio"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "salary"
          },
          {
            "type": "uint256",
            "name": "level"
          },
          {
            "type": "address",
            "name": "payoutToken"
          },
          {
            "type": "address",
            "name": "nft"
          },
          {
            "type": "uint256[]",
            "name": "ids"
          },
          {
            "type": "address[]",
            "name": "acceptances"
          },
          {
            "type": "uint64",
            "name": "duration"
          },
          {
            "type": "string",
            "name": "agreementCode"
          }
        ]
      }
    ]
  },
  {
    "name": "AgreementTerminated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "submitter",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "agreementHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "terminatedAt"
      }
    ]
  },
  {
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
  },
  {
    "name": "EarningsClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "caller",
        "indexed": true
      },
      {
        "type": "address",
        "name": "payee",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "agreementHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "payout"
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
    "name": "MaxLevelUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "maxLevel"
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
    "name": "Refunded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "refundAddr",
        "indexed": true
      },
      {
        "type": "address",
        "name": "payoutToken",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "refundAmount"
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
    "name": "TerminationMinDurationUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newTerminationMinDuration"
      }
    ]
  },
  {
    "name": "TokenStatusUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isBlacklisted"
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
    "name": "MAX_PERCENTAGE",
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
    "name": "NATIVE_TOKEN",
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
    "name": "extendAgreement",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "agreementHash"
      },
      {
        "type": "uint64",
        "name": "duration"
      },
      {
        "type": "uint64",
        "name": "validUntil"
      },
      {
        "type": "bytes",
        "name": "approvalSig"
      }
    ],
    "outputs": []
  },
  {
    "name": "forceTerminateAgreement",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "agreementHashes"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAgreementOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nft"
      },
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "agreementHash"
      }
    ]
  },
  {
    "name": "getAllAgreementHashes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32[]",
        "name": "agreementHashes"
      }
    ]
  },
  {
    "name": "getAssignedAgreements",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "steward"
      }
    ],
    "outputs": [
      {
        "type": "bytes32[]",
        "name": "agreementHashes"
      }
    ]
  },
  {
    "name": "getCurrentState",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "agreementHash"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "realTimeAgreement",
        "components": [
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint8",
            "name": "payoutOption"
          },
          {
            "type": "uint8",
            "name": "extensionRule"
          },
          {
            "type": "uint8",
            "name": "earlyTermination"
          },
          {
            "type": "uint64",
            "name": "terminatedAt"
          },
          {
            "type": "uint64",
            "name": "submittedAt"
          },
          {
            "type": "address",
            "name": "steward"
          },
          {
            "type": "uint64",
            "name": "endAt"
          },
          {
            "type": "address",
            "name": "payoutToken"
          },
          {
            "type": "address",
            "name": "nft"
          },
          {
            "type": "uint256",
            "name": "salary"
          },
          {
            "type": "uint256",
            "name": "released"
          },
          {
            "type": "uint256[]",
            "name": "ids"
          }
        ]
      }
    ]
  },
  {
    "name": "getMaxLevel",
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
    "name": "getStructAgreementHash",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "tuple",
        "name": "agreement",
        "components": [
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint8",
            "name": "payoutOption"
          },
          {
            "type": "uint8",
            "name": "extensionRule"
          },
          {
            "type": "uint8",
            "name": "earlyTermination"
          },
          {
            "type": "tuple[]",
            "name": "payouts",
            "components": [
              {
                "type": "uint8",
                "name": "recipientOpt"
              },
              {
                "type": "uint256",
                "name": "ratio"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "salary"
          },
          {
            "type": "uint256",
            "name": "level"
          },
          {
            "type": "address",
            "name": "payoutToken"
          },
          {
            "type": "address",
            "name": "nft"
          },
          {
            "type": "uint256[]",
            "name": "ids"
          },
          {
            "type": "address[]",
            "name": "acceptances"
          },
          {
            "type": "uint64",
            "name": "duration"
          },
          {
            "type": "string",
            "name": "agreementCode"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "structHash"
      }
    ]
  },
  {
    "name": "getStructExtendAgreementHash",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes32",
        "name": "agreementHash"
      },
      {
        "type": "uint64",
        "name": "duration"
      },
      {
        "type": "uint256",
        "name": "depositAmount"
      },
      {
        "type": "uint64",
        "name": "validUntil"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "structHash"
      }
    ]
  },
  {
    "name": "getStructTerminateAgreementHash",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes32",
        "name": "agreementHash"
      },
      {
        "type": "uint64",
        "name": "validUntil"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "structHash"
      }
    ]
  },
  {
    "name": "getTerminationMinDuration",
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
    "name": "getTokenStatus",
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
        "type": "bool",
        "name": "isBlacklisted"
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
        "type": "uint256",
        "name": "maxLevel"
      },
      {
        "type": "uint256",
        "name": "terminationMinDuration"
      },
      {
        "type": "address[]",
        "name": "pausers"
      },
      {
        "type": "address[]",
        "name": "operators"
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
    "name": "setMaxLevel",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "maxLevel"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTerminationMinDuration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "terminationMinDuration"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTokenStatus",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "bool",
        "name": "shouldBlacklist"
      }
    ],
    "outputs": []
  },
  {
    "name": "submitDelegationAgreement",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "agreement",
        "components": [
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint8",
            "name": "payoutOption"
          },
          {
            "type": "uint8",
            "name": "extensionRule"
          },
          {
            "type": "uint8",
            "name": "earlyTermination"
          },
          {
            "type": "tuple[]",
            "name": "payouts",
            "components": [
              {
                "type": "uint8",
                "name": "recipientOpt"
              },
              {
                "type": "uint256",
                "name": "ratio"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "salary"
          },
          {
            "type": "uint256",
            "name": "level"
          },
          {
            "type": "address",
            "name": "payoutToken"
          },
          {
            "type": "address",
            "name": "nft"
          },
          {
            "type": "uint256[]",
            "name": "ids"
          },
          {
            "type": "address[]",
            "name": "acceptances"
          },
          {
            "type": "uint64",
            "name": "duration"
          },
          {
            "type": "string",
            "name": "agreementCode"
          }
        ]
      },
      {
        "type": "address",
        "name": "steward"
      },
      {
        "type": "bytes",
        "name": "ownerSig"
      },
      {
        "type": "bytes",
        "name": "stewardSig"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "currentState",
        "components": [
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint8",
            "name": "payoutOption"
          },
          {
            "type": "uint8",
            "name": "extensionRule"
          },
          {
            "type": "uint8",
            "name": "earlyTermination"
          },
          {
            "type": "uint64",
            "name": "terminatedAt"
          },
          {
            "type": "uint64",
            "name": "submittedAt"
          },
          {
            "type": "address",
            "name": "steward"
          },
          {
            "type": "uint64",
            "name": "endAt"
          },
          {
            "type": "address",
            "name": "payoutToken"
          },
          {
            "type": "address",
            "name": "nft"
          },
          {
            "type": "uint256",
            "name": "salary"
          },
          {
            "type": "uint256",
            "name": "released"
          },
          {
            "type": "uint256[]",
            "name": "ids"
          }
        ]
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
    "name": "terminateAgreement",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "agreementHash"
      },
      {
        "type": "uint64",
        "name": "validUntil"
      },
      {
        "type": "bytes",
        "name": "approvalSig"
      }
    ],
    "outputs": []
  },
  {
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "validateAgreement",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "agreement",
        "components": [
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint8",
            "name": "payoutOption"
          },
          {
            "type": "uint8",
            "name": "extensionRule"
          },
          {
            "type": "uint8",
            "name": "earlyTermination"
          },
          {
            "type": "tuple[]",
            "name": "payouts",
            "components": [
              {
                "type": "uint8",
                "name": "recipientOpt"
              },
              {
                "type": "uint256",
                "name": "ratio"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "salary"
          },
          {
            "type": "uint256",
            "name": "level"
          },
          {
            "type": "address",
            "name": "payoutToken"
          },
          {
            "type": "address",
            "name": "nft"
          },
          {
            "type": "uint256[]",
            "name": "ids"
          },
          {
            "type": "address[]",
            "name": "acceptances"
          },
          {
            "type": "uint64",
            "name": "duration"
          },
          {
            "type": "string",
            "name": "agreementCode"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isValid"
      },
      {
        "type": "bytes",
        "name": "reason"
      }
    ]
  },
  {
    "name": "validateAndCheckSubmissionEligibility",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "agreement",
        "components": [
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint8",
            "name": "payoutOption"
          },
          {
            "type": "uint8",
            "name": "extensionRule"
          },
          {
            "type": "uint8",
            "name": "earlyTermination"
          },
          {
            "type": "tuple[]",
            "name": "payouts",
            "components": [
              {
                "type": "uint8",
                "name": "recipientOpt"
              },
              {
                "type": "uint256",
                "name": "ratio"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "salary"
          },
          {
            "type": "uint256",
            "name": "level"
          },
          {
            "type": "address",
            "name": "payoutToken"
          },
          {
            "type": "address",
            "name": "nft"
          },
          {
            "type": "uint256[]",
            "name": "ids"
          },
          {
            "type": "address[]",
            "name": "acceptances"
          },
          {
            "type": "uint64",
            "name": "duration"
          },
          {
            "type": "string",
            "name": "agreementCode"
          }
        ]
      },
      {
        "type": "address",
        "name": "steward"
      },
      {
        "type": "address",
        "name": "submitter"
      },
      {
        "type": "uint256",
        "name": "nativeAmount"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isValid"
      },
      {
        "type": "bytes",
        "name": "reason"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract