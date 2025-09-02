import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36710,
  address: '0x833388fb7885cbfd8aab361263cd07d39e591074' as const,
  contract_name: 'RonenDailyCheckin',
  display_name: 'Ronen Daily Checkin',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1756029784,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_ronenToken"
      },
      {
        "type": "address",
        "name": "_signer"
      }
    ]
  },
  {
    "name": "CannotRescueMainToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CheckInTooSoon",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "lastDay"
      },
      {
        "type": "uint256",
        "name": "currentDay"
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
    "name": "InsufficientContractBalance",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "required"
      },
      {
        "type": "uint256",
        "name": "available"
      }
    ]
  },
  {
    "name": "InvalidMaxRewardStreak",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "maxRewardStreak"
      }
    ]
  },
  {
    "name": "InvalidRewardIncrement",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "increment"
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
    "name": "SignatureAlreadyUsed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignatureExpired",
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
    "name": "SignatureNotValidYet",
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
    "name": "InsufficientBalance",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "required"
      },
      {
        "type": "uint256",
        "name": "available"
      }
    ]
  },
  {
    "name": "MaxRewardStreakUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMaxRewardStreak"
      }
    ]
  },
  {
    "name": "OwnershipTransferStarted",
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
    "name": "RewardIncrementUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newIncrement"
      }
    ]
  },
  {
    "name": "RonenDailyCheckInReward",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "streak"
      },
      {
        "type": "uint256",
        "name": "reward"
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
    "name": "UserStreakReset",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      }
    ]
  },
  {
    "name": "CHECK_IN_WINDOW",
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
    "name": "checkIn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "validUntil"
      },
      {
        "type": "bytes",
        "name": "serverSignature"
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
    "name": "getUserStreak",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "lastDay"
      },
      {
        "type": "uint256",
        "name": "currentStreak"
      }
    ]
  },
  {
    "name": "increaseUserStreak",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "increment"
      }
    ],
    "outputs": []
  },
  {
    "name": "maxRewardStreak",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
    "name": "resetUserStreak",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": []
  },
  {
    "name": "rewardIncrement",
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
    "name": "ronenToken",
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
    "name": "serverSigner",
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
    "name": "updateMaxRewardStreak",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMaxRewardStreak"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateRewardIncrement",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newIncrement"
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
    "name": "usedSignatures",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "userStreaks",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "lastDay"
      },
      {
        "type": "uint256",
        "name": "currentStreak"
      }
    ]
  },
  {
    "name": "verifyServerSignature",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "validUntil"
      },
      {
        "type": "uint256",
        "name": "nonce"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract