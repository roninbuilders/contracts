import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36516,
  address: '0x7ff9a0cc1e029b51eea4e65a93b9a130b5bf6953' as const,
  contract_name: 'RonenWithdrawal',
  display_name: 'Ronen Withdrawal',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1754038877,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address",
        "name": "_signer"
      }
    ]
  },
  {
    "name": "BelowMinimumAmount",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "provided"
      },
      {
        "type": "uint256",
        "name": "minimum"
      }
    ]
  },
  {
    "name": "CannotRescueMainToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ContractMigrating",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DeadlineTooFar",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "uint256",
        "name": "maxAllowed"
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
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "requested"
      },
      {
        "type": "uint256",
        "name": "available"
      }
    ]
  },
  {
    "name": "InvalidServerNonce",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "provided"
      },
      {
        "type": "uint256",
        "name": "expected"
      }
    ]
  },
  {
    "name": "InvalidServerSignature",
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
    "inputs": []
  },
  {
    "name": "InvalidSignatureLength",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "provided"
      },
      {
        "type": "uint256",
        "name": "expected"
      }
    ]
  },
  {
    "name": "InvalidTokenAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MigrationNotStarted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotAContract",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "OnlyOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      },
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "OnlyPendingOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      },
      {
        "type": "address",
        "name": "pendingOwner"
      }
    ]
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
    "name": "ServerApprovalExpired",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "validUntil"
      },
      {
        "type": "uint256",
        "name": "currentTime"
      }
    ]
  },
  {
    "name": "ServerSignatureAlreadyUsed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ServerSignatureNotValidYet",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "validFrom"
      },
      {
        "type": "uint256",
        "name": "currentTime"
      }
    ]
  },
  {
    "name": "SignatureExpired",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "uint256",
        "name": "currentTime"
      }
    ]
  },
  {
    "name": "SignatureMalleabilityError",
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
    "name": "UnauthorizedUser",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "provided"
      },
      {
        "type": "address",
        "name": "expected"
      }
    ]
  },
  {
    "name": "ZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
  },
  {
    "name": "ExpiredSignaturesCleaned",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "count"
      }
    ]
  },
  {
    "name": "MigrationCompleted",
    "type": "event",
    "inputs": []
  },
  {
    "name": "MigrationStarted",
    "type": "event",
    "inputs": []
  },
  {
    "name": "MinWithdrawalAmountUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newAmount"
      }
    ]
  },
  {
    "name": "OwnershipTransferInitiated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "currentOwner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "pendingOwner",
        "indexed": true
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
    "name": "ServerNonceIncremented",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newNonce"
      }
    ]
  },
  {
    "name": "ServerSignerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousSigner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newSigner",
        "indexed": true
      }
    ]
  },
  {
    "name": "TokensMigrated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newContract",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "TokensRescued",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "Withdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "MAX_DEADLINE_DURATION",
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
    "name": "SIGNATURE_VALID_FROM_BUFFER",
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "cancelMigration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "cleanExpiredSignatures",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "digests"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "completeMigration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
    "name": "getBalance",
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
    "name": "getDomainSeparator",
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
    "name": "getServerSigner",
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
    "name": "incrementServerNonce",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "isMigrating",
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
    "name": "migrateTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newContractAddress"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "minWithdrawalAmount",
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
    "name": "nonces",
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
    "name": "pendingOwner",
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
    "name": "rescueTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "serverNonce",
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
    "name": "serverSignatureInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "validUntil"
      },
      {
        "type": "bool",
        "name": "used"
      }
    ]
  },
  {
    "name": "setMinWithdrawalAmount",
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
    "name": "startMigration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
    "name": "updateServerSigner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newSigner"
      }
    ],
    "outputs": []
  },
  {
    "name": "validateSignatures",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "uint256",
        "name": "validUntil"
      },
      {
        "type": "bytes",
        "name": "userSignature"
      },
      {
        "type": "bytes",
        "name": "serverSignature"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "verifyServerApproval",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "validUntil"
      },
      {
        "type": "uint256",
        "name": "sigNonce"
      },
      {
        "type": "bytes",
        "name": "serverSignature"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "uint256",
        "name": "validUntil"
      },
      {
        "type": "bytes",
        "name": "userSignature"
      },
      {
        "type": "bytes",
        "name": "serverSignature"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract