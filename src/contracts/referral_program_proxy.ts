import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 7564,
  address: '0x011d35771044dc13f91249ce5d6fe5af00b83d23' as const,
  contract_name: 'MainProxy',
  display_name: 'Referral Program Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xd3a135f905a98b17dd89b3cd0e59f23d760a4288',
  created_at: 1737419836,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "logic"
      },
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "bytes",
        "name": "data"
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
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AlreadyRestricted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExceedsAvailableRewards",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Forbidden",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientContractBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidParameters",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidReferee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidReferralSigner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidReferralType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidReferrer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRewardAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidWithdrawalAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NonceAlreadyUsed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RefereeAlreadyReferred",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReferralNotFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReferrerTypeMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RestrictedReferrer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignatureExpired",
    "type": "error",
    "inputs": []
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
    "name": "ReferralAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "referrer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "referee",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "referralType"
      }
    ]
  },
  {
    "name": "ReferralRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "referee",
        "indexed": true
      },
      {
        "type": "address",
        "name": "referrer",
        "indexed": true
      }
    ]
  },
  {
    "name": "ReferralTypeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "referrer",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "newType"
      },
      {
        "type": "uint8",
        "name": "oldType"
      }
    ]
  },
  {
    "name": "ReferralUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "referrer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "referee",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "referralType"
      }
    ]
  },
  {
    "name": "RewardRecorded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "referrer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "rewardAmount"
      }
    ]
  },
  {
    "name": "Withdrawal",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "referrer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "remaining"
      }
    ]
  },
  {
    "name": "AMBASSADOR_REWARD_PERCENT",
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
    "name": "BASIC_REWARD_PERCENT",
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
    "name": "DISCOUNT_PERCENT",
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
    "name": "FEE_DENOMINATOR",
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
    "name": "MIN_WITHDRAWAL_AMOUNT",
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
    "name": "addReferral",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "addReferralCalldata"
      }
    ],
    "outputs": []
  },
  {
    "name": "calculateDiscountAndReward",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "referee"
      },
      {
        "type": "uint256",
        "name": "feeAmount"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "referrer"
      },
      {
        "type": "uint256",
        "name": "discountAmount"
      },
      {
        "type": "uint256",
        "name": "rewardAmount"
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
        "name": "referralSigner"
      }
    ],
    "outputs": []
  },
  {
    "name": "mainContract_",
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
    "name": "recordReward",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "referrer"
      }
    ],
    "outputs": []
  },
  {
    "name": "referralRecords",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "referralSigner_",
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
    "name": "referrers",
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
        "name": "rewards"
      },
      {
        "type": "uint256",
        "name": "totalReward"
      },
      {
        "type": "uint256",
        "name": "totalWithdrawn"
      },
      {
        "type": "uint8",
        "name": "referralType"
      }
    ]
  },
  {
    "name": "removeReferral",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "restrictReferrer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "referrer"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMainContractAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "mainContract"
      }
    ],
    "outputs": []
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
    "name": "transferReferralSigner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "referralSigner"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateMinWithdrawalAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_minWithdrawalAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateReferral",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "referrer"
      },
      {
        "type": "address",
        "name": "referee"
      },
      {
        "type": "uint8",
        "name": "referralType"
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "expirationTime"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateReferralType",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "referrer"
      },
      {
        "type": "uint8",
        "name": "referralType"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "withdrawalAmount"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract