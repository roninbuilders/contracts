import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37297,
  address: '0xf706226d9fc969eba1bf56136734023d4fd57b1f' as const,
  contract_name: 'MultiTokenStaking',
  display_name: 'Multi Token Staking',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1759487410,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "EmergencyWithdraw",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "PoolCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "stakingToken",
        "indexed": true
      },
      {
        "type": "address",
        "name": "rewardToken",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "rewardPerSecond"
      },
      {
        "type": "string",
        "name": "name"
      }
    ]
  },
  {
    "name": "PoolEnded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "endTime"
      }
    ]
  },
  {
    "name": "PoolUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newRewardPerSecond"
      }
    ]
  },
  {
    "name": "RewardsClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "Staked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "poolId",
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
    "name": "UnstakeRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "requestTime"
      },
      {
        "type": "uint256",
        "name": "requestIndex"
      }
    ]
  },
  {
    "name": "UnstakeRequestsCleaned",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "cleanedCount"
      }
    ]
  },
  {
    "name": "Unstaked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "requestIndex"
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
    "name": "POOL_MANAGER_ROLE",
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
    "name": "PRECISION",
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
    "name": "UNSTAKE_DELAY",
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
    "name": "batchClaimUnstake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_requestIndices"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimUnstake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_requestIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "cleanupClaimedRequests",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "createPool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_stakingToken"
      },
      {
        "type": "address",
        "name": "_rewardToken"
      },
      {
        "type": "uint256",
        "name": "_rewardPerSecond"
      },
      {
        "type": "string",
        "name": "_name"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "emergencyWithdrawUser",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": []
  },
  {
    "name": "endPool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      }
    ],
    "outputs": []
  },
  {
    "name": "getPoolInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "stakingToken"
      },
      {
        "type": "address",
        "name": "rewardToken"
      },
      {
        "type": "uint256",
        "name": "rewardPerSecond"
      },
      {
        "type": "uint256",
        "name": "totalStaked"
      },
      {
        "type": "uint256",
        "name": "lastRewardTime"
      },
      {
        "type": "uint256",
        "name": "accRewardPerShare"
      },
      {
        "type": "bool",
        "name": "active"
      },
      {
        "type": "bool",
        "name": "ended"
      },
      {
        "type": "string",
        "name": "name"
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
    "name": "getUnclaimedUnstakeRequests",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "requests",
        "components": [
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "requestTime"
          },
          {
            "type": "uint256",
            "name": "poolId"
          },
          {
            "type": "bool",
            "name": "claimed"
          }
        ]
      },
      {
        "type": "uint256[]",
        "name": "indices"
      }
    ]
  },
  {
    "name": "getUnstakeRequestStatus",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      },
      {
        "type": "uint256",
        "name": "_requestIndex"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "requestTime"
      },
      {
        "type": "uint256",
        "name": "poolId"
      },
      {
        "type": "bool",
        "name": "claimed"
      },
      {
        "type": "bool",
        "name": "canClaim"
      },
      {
        "type": "uint256",
        "name": "timeRemaining"
      }
    ]
  },
  {
    "name": "getUserInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "rewardDebt"
      },
      {
        "type": "uint256",
        "name": "pendingRewards"
      }
    ]
  },
  {
    "name": "getUserUnstakeRequests",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "requestTime"
          },
          {
            "type": "uint256",
            "name": "poolId"
          },
          {
            "type": "bool",
            "name": "claimed"
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
    "name": "pendingReward",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "pools",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "stakingToken"
      },
      {
        "type": "address",
        "name": "rewardToken"
      },
      {
        "type": "uint256",
        "name": "rewardPerSecond"
      },
      {
        "type": "uint256",
        "name": "totalStaked"
      },
      {
        "type": "uint256",
        "name": "lastRewardTime"
      },
      {
        "type": "uint256",
        "name": "accRewardPerShare"
      },
      {
        "type": "bool",
        "name": "active"
      },
      {
        "type": "bool",
        "name": "ended"
      },
      {
        "type": "string",
        "name": "name"
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
    "name": "requestUnstake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "uint256",
        "name": "_amount"
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
    "name": "setPoolStatus",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "bool",
        "name": "_active"
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
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "uint256",
        "name": "_amount"
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
    "name": "totalPoolsCreated",
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "unstakeRequests",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "requestTime"
      },
      {
        "type": "uint256",
        "name": "poolId"
      },
      {
        "type": "bool",
        "name": "claimed"
      }
    ]
  },
  {
    "name": "updateRewardPerSecond",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "uint256",
        "name": "_rewardPerSecond"
      }
    ],
    "outputs": []
  },
  {
    "name": "userInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "rewardDebt"
      },
      {
        "type": "uint256",
        "name": "pendingRewards"
      }
    ]
  },
  {
    "name": "userUnstakeRequestCount",
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
    "name": "withdrawRewardTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolId"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract