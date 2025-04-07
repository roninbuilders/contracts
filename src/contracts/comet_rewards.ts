import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27522,
  address: '0x31cdee8609bc15fd33cc525f101b70a81b2b1e59' as const,
  contract_name: 'CometRewards',
  display_name: 'Comet Rewards',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1741884223,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "governor_"
      }
    ]
  },
  {
    "name": "AlreadyConfigured",
    "type": "error",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "BadData",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidUInt64",
    "type": "error",
    "inputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "NotPermitted",
    "type": "error",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "NotSupported",
    "type": "error",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "TransferOutFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "GovernorTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldGovernor",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newGovernor",
        "indexed": true
      }
    ]
  },
  {
    "name": "RewardClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "src",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "RewardsClaimedSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "address",
        "name": "comet",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "claim",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "comet"
      },
      {
        "type": "address",
        "name": "src"
      },
      {
        "type": "bool",
        "name": "shouldAccrue"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "comet"
      },
      {
        "type": "address",
        "name": "src"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "bool",
        "name": "shouldAccrue"
      }
    ],
    "outputs": []
  },
  {
    "name": "getRewardOwed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "comet"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "owed"
          }
        ]
      }
    ]
  },
  {
    "name": "governor",
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
    "name": "rewardConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint64",
        "name": "rescaleFactor"
      },
      {
        "type": "bool",
        "name": "shouldUpscale"
      },
      {
        "type": "uint256",
        "name": "multiplier"
      }
    ]
  },
  {
    "name": "rewardsClaimed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
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
    "name": "setRewardConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "comet"
      },
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRewardConfigWithMultiplier",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "comet"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "multiplier"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRewardsClaimed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "comet"
      },
      {
        "type": "address[]",
        "name": "users"
      },
      {
        "type": "uint256[]",
        "name": "claimedAmounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferGovernor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newGovernor"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract