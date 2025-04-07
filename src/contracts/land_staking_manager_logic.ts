import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 159,
  address: '0xe78918abc57f7a3e6abdf7fe1d0da90ed8b92e26' as const,
  contract_name: 'LandStakingManager',
  display_name: 'Land Staking Manager Logic',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1656494787,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
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
    "name": "MinClaimedBlocksUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_new",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_old",
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
    "name": "PoolWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
      }
    ]
  },
  {
    "name": "UserRewardUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
      },
      {
        "type": "address",
        "name": "_user"
      },
      {
        "type": "tuple",
        "name": "_rewardInfo",
        "components": [
          {
            "type": "uint256",
            "name": "debitedRewards"
          },
          {
            "type": "uint256",
            "name": "lastUpdatedBlock"
          },
          {
            "type": "uint256",
            "name": "lastClaimedBlock"
          }
        ]
      }
    ]
  },
  {
    "name": "WRON",
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
    "name": "allocateRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "_rewardToken"
      },
      {
        "type": "uint256",
        "name": "_earnedRewards"
      }
    ]
  },
  {
    "name": "canObtainRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
      },
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "getCurrentLandWeight",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "_lw",
        "components": [
          {
            "type": "uint256[5]",
            "name": "landTypeWeight"
          },
          {
            "type": "uint256",
            "name": "startedAtBlock"
          }
        ]
      }
    ]
  },
  {
    "name": "getLandWeight",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256[5]",
            "name": "landTypeWeight"
          },
          {
            "type": "uint256",
            "name": "startedAtBlock"
          }
        ]
      }
    ]
  },
  {
    "name": "getPendingRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
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
    "name": "getPoolInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "stakingToken"
          },
          {
            "type": "address",
            "name": "rewardToken"
          },
          {
            "type": "tuple[]",
            "name": "landWeight",
            "components": [
              {
                "type": "uint256[5]",
                "name": "landTypeWeight"
              },
              {
                "type": "uint256",
                "name": "startedAtBlock"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "getRewardTokenOfPool",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
      }
    ],
    "outputs": [
      {
        "type": "address"
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
        "name": "_admin"
      },
      {
        "type": "address",
        "name": "_wron"
      },
      {
        "type": "uint256",
        "name": "_minClaimedBlocks"
      }
    ],
    "outputs": []
  },
  {
    "name": "isPoolWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "minClaimedBlocks",
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
    "name": "poolInfo",
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
        "name": "stakingToken"
      },
      {
        "type": "address",
        "name": "rewardToken"
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
    "name": "resetRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinClaimedBlocks",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_minClaimedBlocks"
      }
    ],
    "outputs": []
  },
  {
    "name": "syncRewardInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
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
    "name": "updateLandWeights",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
      },
      {
        "type": "uint256[5]",
        "name": "_values"
      },
      {
        "type": "uint256",
        "name": "_startedAtBlock"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateSpecificLandWeights",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
      },
      {
        "type": "uint256",
        "name": "_index"
      },
      {
        "type": "uint256[5]",
        "name": "_values"
      },
      {
        "type": "uint256",
        "name": "_startedAtBlock"
      }
    ],
    "outputs": []
  },
  {
    "name": "userRewards",
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
        "type": "uint256",
        "name": "debitedRewards"
      },
      {
        "type": "uint256",
        "name": "lastUpdatedBlock"
      },
      {
        "type": "uint256",
        "name": "lastClaimedBlock"
      }
    ]
  },
  {
    "name": "whitelistPools",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_pools"
      },
      {
        "type": "uint256[]",
        "name": "_startedAtBlocks"
      },
      {
        "type": "uint256[5][]",
        "name": "_landTypeWeights"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawNativeToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract