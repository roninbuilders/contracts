import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 194,
  address: '0x8bd81a19420bad681b7bfc20e703ebd8e253782d' as const,
  contract_name: 'ERC20StakingManagerProxyDeprecated',
  display_name: 'Staking Manager',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xe1147ff24e404ba38202ea4aee04191ef0890db2',
  created_at: 1632969648,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_proxyTo"
      },
      {
        "type": "uint256",
        "name": "_minClaimedBlocks"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "AdminRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
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
    "name": "ProxyUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_new",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_old",
        "indexed": true
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "admin",
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
    "name": "blockRewards",
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
        "name": "fromBlock"
      },
      {
        "type": "uint256",
        "name": "rewardPerBlock"
      }
    ]
  },
  {
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
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
      },
      {
        "type": "uint256",
        "name": "accumulatedRewardsPerShare"
      },
      {
        "type": "uint256",
        "name": "lastSyncedBlock"
      },
      {
        "type": "uint256",
        "name": "startedAtBlock"
      }
    ]
  },
  {
    "name": "proxyType",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "removeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
    "name": "updateProxyTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newProxyTo"
      }
    ],
    "outputs": []
  },
  {
    "name": "userRewardInfo",
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
        "name": "creditedRewards"
      },
      {
        "type": "uint256",
        "name": "lastClaimedBlock"
      }
    ]
  },
  {
    "name": "withdrawEther",
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
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "AdminRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "MinClaimedTimeWindowUpdated",
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
    "name": "PoolSynced",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
      },
      {
        "type": "uint256",
        "name": "_accumulatedPerShare"
      },
      {
        "type": "uint256",
        "name": "_lastSyncedBlock"
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
    "name": "RewardPerBlockUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
      },
      {
        "type": "tuple[]",
        "name": "_blockRewards",
        "components": [
          {
            "type": "uint256",
            "name": "fromBlock"
          },
          {
            "type": "uint256",
            "name": "rewardPerBlock"
          }
        ]
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
            "name": "creditedRewards"
          },
          {
            "type": "uint256",
            "name": "lastClaimedTimestamp"
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
    "name": "admin",
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
    "name": "blockRewards",
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
        "name": "fromBlock"
      },
      {
        "type": "uint256",
        "name": "rewardPerBlock"
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
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "getBlockReward",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
      },
      {
        "type": "uint256",
        "name": "_blockNumber"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_reward"
      }
    ]
  },
  {
    "name": "getChainID",
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
    "name": "getIntervalRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
      },
      {
        "type": "uint256",
        "name": "_fromBlock"
      },
      {
        "type": "uint256",
        "name": "_toBlock"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_result"
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
            "type": "uint256",
            "name": "accumulatedRewardsPerShare"
          },
          {
            "type": "uint256",
            "name": "lastSyncedBlock"
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
    "name": "isPoolStarted",
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
    "name": "minClaimedTimeWindow",
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
      },
      {
        "type": "uint256",
        "name": "accumulatedRewardsPerShare"
      },
      {
        "type": "uint256",
        "name": "lastSyncedBlock"
      },
      {
        "type": "uint256",
        "name": "startedAtBlock"
      }
    ]
  },
  {
    "name": "removeAdmin",
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
    "name": "setFutureBlockReward",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
      },
      {
        "type": "uint256",
        "name": "_fromBlock"
      },
      {
        "type": "uint256",
        "name": "_rewardPerBlock"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinClaimedTimeWindow",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_minClaimedTimeWindow"
      }
    ],
    "outputs": []
  },
  {
    "name": "syncPool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_pool"
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
      },
      {
        "type": "uint256",
        "name": "_newStakingAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateUnstartedPools",
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
        "type": "uint256[]",
        "name": "_rewardPerBlocks"
      }
    ],
    "outputs": []
  },
  {
    "name": "userRewardInfo",
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
        "name": "creditedRewards"
      },
      {
        "type": "uint256",
        "name": "lastClaimedTimestamp"
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
        "type": "uint256[]",
        "name": "_rewardPerBlocks"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawEther",
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract