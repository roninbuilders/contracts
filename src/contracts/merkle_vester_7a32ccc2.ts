import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37447,
  address: '0x33c9ddb735b0b47ec5ced7b0142135a97a32ccc2' as const,
  contract_name: 'MerkleVester',
  display_name: 'Merkle Vester',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744212554,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "benefactor"
      },
      {
        "type": "uint256",
        "name": "_claimFee"
      },
      {
        "type": "address",
        "name": "_feeCollector"
      },
      {
        "type": "address",
        "name": "_feeSetter"
      },
      {
        "type": "address[]",
        "name": "_postClaimHandlers"
      },
      {
        "type": "uint256",
        "name": "_maxClaimFee"
      },
      {
        "type": "bool",
        "name": "_shouldPayClaimFeeOnlyOnce"
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
    "name": "AlreadyFullyUnlocked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AlreadyTerminated",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AmountZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ClaimFeeExceedsMaximum",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ClaimHandlerAlreadyWhitelisted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ClaimHandlerNotYetWhitelisted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DeflationaryTokensNotSupported",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientFunds",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAllocation",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAllocationType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidFeeCollector",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidFeeFundsSent",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidFeeSetter",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidMerkleProof",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidWithdrawal",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotCancellable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotRevokable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotTransferable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PostClaimHandlerNotWhitelisted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrancyGuardReentrantCall",
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
    "name": "SameBeneficiaryAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroBeneficiary",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroToken",
    "type": "error",
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
    "name": "ScheduleCanceled",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "id"
      }
    ]
  },
  {
    "name": "ScheduleRevoked",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "id"
      }
    ]
  },
  {
    "name": "TransferredBeneficiary",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "id"
      },
      {
        "type": "address",
        "name": "newBeneficiary"
      }
    ]
  },
  {
    "name": "BENEFACTOR",
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
    "name": "FEE_SETTER_ROLE",
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
    "name": "POST_CLAIM_HANDLER_MANAGER",
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
    "name": "addAllocationRoot",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "merkleRoot"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "addPostClaimHandlerToWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "postClaimHandler"
      }
    ],
    "outputs": []
  },
  {
    "name": "cancel",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "rootIndex"
      },
      {
        "type": "bytes",
        "name": "decodableArgs"
      },
      {
        "type": "bytes32[]",
        "name": "proof"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimFee",
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
    "name": "defund",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "feeCollector",
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
    "name": "feeSetter",
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
    "name": "fund",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "getCalendarLeafAllocationData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "rootIndex"
      },
      {
        "type": "bytes",
        "name": "decodableArgs"
      },
      {
        "type": "bytes32[]",
        "name": "proof"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "tuple",
            "name": "allocation",
            "components": [
              {
                "type": "string",
                "name": "id"
              },
              {
                "type": "address",
                "name": "originalBeneficiary"
              },
              {
                "type": "uint256",
                "name": "totalAllocation"
              },
              {
                "type": "bool",
                "name": "cancelable"
              },
              {
                "type": "bool",
                "name": "revokable"
              },
              {
                "type": "bool",
                "name": "transferableByAdmin"
              },
              {
                "type": "bool",
                "name": "transferableByBeneficiary"
              }
            ]
          },
          {
            "type": "string",
            "name": "calendarUnlockScheduleId"
          },
          {
            "type": "tuple",
            "name": "distributionState",
            "components": [
              {
                "type": "address",
                "name": "withdrawalAddress"
              },
              {
                "type": "uint32",
                "name": "terminatedTimestamp"
              },
              {
                "type": "uint256",
                "name": "withdrawn"
              },
              {
                "type": "uint256",
                "name": "terminatedWithdrawn"
              },
              {
                "type": "uint256",
                "name": "fundedAmount"
              },
              {
                "type": "uint256",
                "name": "terminatedAmount"
              }
            ]
          }
        ]
      },
      {
        "type": "tuple",
        "components": [
          {
            "type": "string",
            "name": "unlockScheduleId"
          },
          {
            "type": "uint32[]",
            "name": "unlockTimestamps"
          },
          {
            "type": "uint256[]",
            "name": "unlockAmounts"
          }
        ]
      }
    ]
  },
  {
    "name": "getCalendarLeafHash",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "string",
        "name": "allocationType"
      },
      {
        "type": "tuple",
        "name": "allocation",
        "components": [
          {
            "type": "string",
            "name": "id"
          },
          {
            "type": "address",
            "name": "originalBeneficiary"
          },
          {
            "type": "uint256",
            "name": "totalAllocation"
          },
          {
            "type": "bool",
            "name": "cancelable"
          },
          {
            "type": "bool",
            "name": "revokable"
          },
          {
            "type": "bool",
            "name": "transferableByAdmin"
          },
          {
            "type": "bool",
            "name": "transferableByBeneficiary"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "unlockSchedule",
        "components": [
          {
            "type": "string",
            "name": "unlockScheduleId"
          },
          {
            "type": "uint32[]",
            "name": "unlockTimestamps"
          },
          {
            "type": "uint256[]",
            "name": "unlockAmounts"
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
    "name": "getClaimFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "allocationId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getIntervalLeafAllocationData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "rootIndex"
      },
      {
        "type": "bytes",
        "name": "decodableArgs"
      },
      {
        "type": "bytes32[]",
        "name": "proof"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "tuple",
            "name": "allocation",
            "components": [
              {
                "type": "string",
                "name": "id"
              },
              {
                "type": "address",
                "name": "originalBeneficiary"
              },
              {
                "type": "uint256",
                "name": "totalAllocation"
              },
              {
                "type": "bool",
                "name": "cancelable"
              },
              {
                "type": "bool",
                "name": "revokable"
              },
              {
                "type": "bool",
                "name": "transferableByAdmin"
              },
              {
                "type": "bool",
                "name": "transferableByBeneficiary"
              }
            ]
          },
          {
            "type": "string",
            "name": "intervalUnlockScheduleId"
          },
          {
            "type": "tuple",
            "name": "distributionState",
            "components": [
              {
                "type": "address",
                "name": "withdrawalAddress"
              },
              {
                "type": "uint32",
                "name": "terminatedTimestamp"
              },
              {
                "type": "uint256",
                "name": "withdrawn"
              },
              {
                "type": "uint256",
                "name": "terminatedWithdrawn"
              },
              {
                "type": "uint256",
                "name": "fundedAmount"
              },
              {
                "type": "uint256",
                "name": "terminatedAmount"
              }
            ]
          }
        ]
      },
      {
        "type": "tuple",
        "components": [
          {
            "type": "string",
            "name": "unlockScheduleId"
          },
          {
            "type": "tuple[]",
            "name": "pieces",
            "components": [
              {
                "type": "uint32",
                "name": "startDate"
              },
              {
                "type": "uint32",
                "name": "periodLength"
              },
              {
                "type": "uint32",
                "name": "numberOfPeriods"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "getIntervalLeafHash",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "string",
        "name": "allocationType"
      },
      {
        "type": "tuple",
        "name": "allocation",
        "components": [
          {
            "type": "string",
            "name": "id"
          },
          {
            "type": "address",
            "name": "originalBeneficiary"
          },
          {
            "type": "uint256",
            "name": "totalAllocation"
          },
          {
            "type": "bool",
            "name": "cancelable"
          },
          {
            "type": "bool",
            "name": "revokable"
          },
          {
            "type": "bool",
            "name": "transferableByAdmin"
          },
          {
            "type": "bool",
            "name": "transferableByBeneficiary"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "unlockSchedule",
        "components": [
          {
            "type": "string",
            "name": "unlockScheduleId"
          },
          {
            "type": "tuple[]",
            "name": "pieces",
            "components": [
              {
                "type": "uint32",
                "name": "startDate"
              },
              {
                "type": "uint32",
                "name": "periodLength"
              },
              {
                "type": "uint32",
                "name": "numberOfPeriods"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
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
    "name": "getLeafJustAllocationData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "rootIndex"
      },
      {
        "type": "bytes",
        "name": "decodableArgs"
      },
      {
        "type": "bytes32[]",
        "name": "proof"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "string",
            "name": "id"
          },
          {
            "type": "address",
            "name": "originalBeneficiary"
          },
          {
            "type": "uint256",
            "name": "totalAllocation"
          },
          {
            "type": "bool",
            "name": "cancelable"
          },
          {
            "type": "bool",
            "name": "revokable"
          },
          {
            "type": "bool",
            "name": "transferableByAdmin"
          },
          {
            "type": "bool",
            "name": "transferableByBeneficiary"
          }
        ]
      }
    ]
  },
  {
    "name": "getPostClaimHandlers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "postClaimHandlers"
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
    "name": "merkleRoots",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "multicall",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "results"
      }
    ]
  },
  {
    "name": "removePostClaimHandlerToWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "postClaimHandler"
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
    "name": "rescueTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_errantTokenAddress"
      },
      {
        "type": "address",
        "name": "_rescueAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "revoke",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "rootIndex"
      },
      {
        "type": "bytes",
        "name": "decodableArgs"
      },
      {
        "type": "bytes32[]",
        "name": "proof"
      }
    ],
    "outputs": []
  },
  {
    "name": "revokeAll",
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
    "name": "schedules",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "withdrawalAddress"
      },
      {
        "type": "uint32",
        "name": "terminatedTimestamp"
      },
      {
        "type": "uint256",
        "name": "withdrawn"
      },
      {
        "type": "uint256",
        "name": "terminatedWithdrawn"
      },
      {
        "type": "uint256",
        "name": "fundedAmount"
      },
      {
        "type": "uint256",
        "name": "terminatedAmount"
      }
    ]
  },
  {
    "name": "setClaimFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_claimFee"
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
    "name": "token",
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
    "name": "totalWithdrawn",
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
    "name": "transferBeneficiaryAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newBeneficiaryAddress"
      },
      {
        "type": "uint32",
        "name": "rootIndex"
      },
      {
        "type": "bytes",
        "name": "decodableArgs"
      },
      {
        "type": "bytes32[]",
        "name": "proof"
      }
    ],
    "outputs": []
  },
  {
    "name": "validateLeaf",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes32",
        "name": "merkleRoot"
      },
      {
        "type": "bytes",
        "name": "leafArguments"
      },
      {
        "type": "bytes32[]",
        "name": "proof"
      }
    ],
    "outputs": []
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
  },
  {
    "name": "withdraw",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "withdrawalAmount"
      },
      {
        "type": "uint32",
        "name": "rootIndex"
      },
      {
        "type": "bytes",
        "name": "decodableArgs"
      },
      {
        "type": "bytes32[]",
        "name": "proof"
      },
      {
        "type": "address",
        "name": "postClaimHandler"
      },
      {
        "type": "bytes",
        "name": "extraData"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdraw",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "withdrawalAmount"
      },
      {
        "type": "uint32",
        "name": "rootIndex"
      },
      {
        "type": "bytes",
        "name": "decodableArgs"
      },
      {
        "type": "bytes32[]",
        "name": "proof"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract