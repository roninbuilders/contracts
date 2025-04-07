import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 134,
  address: '0x7f27e35170472e7f107d3e55c2b9bcd44aa01dd5' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Land Staking Manager',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x4fb09aa272ba5df9e6f41b77cca6b0ac0664dee2',
  created_at: 1656494799,
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
    "name": "admin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "admin_"
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
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "implementation_"
      }
    ]
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeToAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
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
            "name": "lastClaimedTimestamp"
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
        "name": "_minClaimedTimeWindow"
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