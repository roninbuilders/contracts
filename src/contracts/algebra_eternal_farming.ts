import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36044,
  address: '0xc10c2a7e9c30003f8a59c4e77a2f68b07cfb123c' as const,
  contract_name: 'AlgebraEternalFarming',
  display_name: 'Algebra Eternal Farming',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751631628,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_deployer"
      },
      {
        "type": "address",
        "name": "_nonfungiblePositionManager"
      }
    ]
  },
  {
    "name": "anotherFarmingIsActive",
    "type": "error",
    "inputs": []
  },
  {
    "name": "claimToZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "emergencyActivated",
    "type": "error",
    "inputs": []
  },
  {
    "name": "farmDoesNotExist",
    "type": "error",
    "inputs": []
  },
  {
    "name": "incentiveNotExist",
    "type": "error",
    "inputs": []
  },
  {
    "name": "incentiveStopped",
    "type": "error",
    "inputs": []
  },
  {
    "name": "invalidPool",
    "type": "error",
    "inputs": []
  },
  {
    "name": "invalidTokenAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "minimalPositionWidthTooWide",
    "type": "error",
    "inputs": []
  },
  {
    "name": "pluginNotConnected",
    "type": "error",
    "inputs": []
  },
  {
    "name": "poolReentrancyLock",
    "type": "error",
    "inputs": []
  },
  {
    "name": "positionIsTooNarrow",
    "type": "error",
    "inputs": []
  },
  {
    "name": "reentrancyLock",
    "type": "error",
    "inputs": []
  },
  {
    "name": "tokenAlreadyFarmed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "zeroLiquidity",
    "type": "error",
    "inputs": []
  },
  {
    "name": "zeroRewardAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EmergencyWithdraw",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "newStatus"
      }
    ]
  },
  {
    "name": "EternalFarmingCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "rewardToken",
        "indexed": true
      },
      {
        "type": "address",
        "name": "bonusRewardToken",
        "indexed": true
      },
      {
        "type": "address",
        "name": "pool",
        "indexed": true
      },
      {
        "type": "address",
        "name": "virtualPool"
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "reward"
      },
      {
        "type": "uint256",
        "name": "bonusReward"
      },
      {
        "type": "uint24",
        "name": "minimalAllowedPositionWidth"
      }
    ]
  },
  {
    "name": "FarmEnded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "incentiveId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "rewardAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "bonusRewardToken"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256",
        "name": "reward"
      },
      {
        "type": "uint256",
        "name": "bonusReward"
      }
    ]
  },
  {
    "name": "FarmEntered",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "incentiveId",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "liquidity"
      }
    ]
  },
  {
    "name": "FarmingCenter",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "farmingCenter",
        "indexed": true
      }
    ]
  },
  {
    "name": "IncentiveDeactivated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "incentiveId",
        "indexed": true
      }
    ]
  },
  {
    "name": "RewardAmountsDecreased",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "rewardAmount"
      },
      {
        "type": "uint256",
        "name": "bonusRewardAmount"
      },
      {
        "type": "bytes32",
        "name": "incentiveId"
      }
    ]
  },
  {
    "name": "RewardClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "reward"
      },
      {
        "type": "address",
        "name": "rewardAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      }
    ]
  },
  {
    "name": "RewardsAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "rewardAmount"
      },
      {
        "type": "uint256",
        "name": "bonusRewardAmount"
      },
      {
        "type": "bytes32",
        "name": "incentiveId"
      }
    ]
  },
  {
    "name": "RewardsCollected",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes32",
        "name": "incentiveId"
      },
      {
        "type": "uint256",
        "name": "rewardAmount"
      },
      {
        "type": "uint256",
        "name": "bonusRewardAmount"
      }
    ]
  },
  {
    "name": "RewardsRatesChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint128",
        "name": "rewardRate"
      },
      {
        "type": "uint128",
        "name": "bonusRewardRate"
      },
      {
        "type": "bytes32",
        "name": "incentiveId"
      }
    ]
  },
  {
    "name": "FARMINGS_ADMINISTRATOR_ROLE",
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
    "name": "INCENTIVE_MAKER_ROLE",
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
    "name": "addRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "key",
        "components": [
          {
            "type": "address",
            "name": "rewardToken"
          },
          {
            "type": "address",
            "name": "bonusRewardToken"
          },
          {
            "type": "address",
            "name": "pool"
          },
          {
            "type": "uint256",
            "name": "nonce"
          }
        ]
      },
      {
        "type": "uint128",
        "name": "rewardAmount"
      },
      {
        "type": "uint128",
        "name": "bonusRewardAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimReward",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "rewardToken"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amountRequested"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "reward"
      }
    ]
  },
  {
    "name": "claimRewardFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "rewardToken"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amountRequested"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "reward"
      }
    ]
  },
  {
    "name": "collectRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "key",
        "components": [
          {
            "type": "address",
            "name": "rewardToken"
          },
          {
            "type": "address",
            "name": "bonusRewardToken"
          },
          {
            "type": "address",
            "name": "pool"
          },
          {
            "type": "uint256",
            "name": "nonce"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "_owner"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "reward"
      },
      {
        "type": "uint256",
        "name": "bonusReward"
      }
    ]
  },
  {
    "name": "createEternalFarming",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "key",
        "components": [
          {
            "type": "address",
            "name": "rewardToken"
          },
          {
            "type": "address",
            "name": "bonusRewardToken"
          },
          {
            "type": "address",
            "name": "pool"
          },
          {
            "type": "uint256",
            "name": "nonce"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint128",
            "name": "reward"
          },
          {
            "type": "uint128",
            "name": "bonusReward"
          },
          {
            "type": "uint128",
            "name": "rewardRate"
          },
          {
            "type": "uint128",
            "name": "bonusRewardRate"
          },
          {
            "type": "uint24",
            "name": "minimalPositionWidth"
          }
        ]
      },
      {
        "type": "address",
        "name": "plugin"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "virtualPool"
      }
    ]
  },
  {
    "name": "deactivateIncentive",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "key",
        "components": [
          {
            "type": "address",
            "name": "rewardToken"
          },
          {
            "type": "address",
            "name": "bonusRewardToken"
          },
          {
            "type": "address",
            "name": "pool"
          },
          {
            "type": "uint256",
            "name": "nonce"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "decreaseRewardsAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "key",
        "components": [
          {
            "type": "address",
            "name": "rewardToken"
          },
          {
            "type": "address",
            "name": "bonusRewardToken"
          },
          {
            "type": "address",
            "name": "pool"
          },
          {
            "type": "uint256",
            "name": "nonce"
          }
        ]
      },
      {
        "type": "uint128",
        "name": "rewardAmount"
      },
      {
        "type": "uint128",
        "name": "bonusRewardAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "enterFarming",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "key",
        "components": [
          {
            "type": "address",
            "name": "rewardToken"
          },
          {
            "type": "address",
            "name": "bonusRewardToken"
          },
          {
            "type": "address",
            "name": "pool"
          },
          {
            "type": "uint256",
            "name": "nonce"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "exitFarming",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "key",
        "components": [
          {
            "type": "address",
            "name": "rewardToken"
          },
          {
            "type": "address",
            "name": "bonusRewardToken"
          },
          {
            "type": "address",
            "name": "pool"
          },
          {
            "type": "uint256",
            "name": "nonce"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "_owner"
      }
    ],
    "outputs": []
  },
  {
    "name": "farmingCenter",
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
    "name": "farms",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes32",
        "name": "incentiveId"
      }
    ],
    "outputs": [
      {
        "type": "uint128",
        "name": "liquidity"
      },
      {
        "type": "int24",
        "name": "tickLower"
      },
      {
        "type": "int24",
        "name": "tickUpper"
      },
      {
        "type": "uint256",
        "name": "innerRewardGrowth0"
      },
      {
        "type": "uint256",
        "name": "innerRewardGrowth1"
      }
    ]
  },
  {
    "name": "getRewardInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "key",
        "components": [
          {
            "type": "address",
            "name": "rewardToken"
          },
          {
            "type": "address",
            "name": "bonusRewardToken"
          },
          {
            "type": "address",
            "name": "pool"
          },
          {
            "type": "uint256",
            "name": "nonce"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "reward"
      },
      {
        "type": "uint256",
        "name": "bonusReward"
      }
    ]
  },
  {
    "name": "incentiveKeys",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "pool"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "rewardToken"
      },
      {
        "type": "address",
        "name": "bonusRewardToken"
      },
      {
        "type": "address",
        "name": "pool"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ]
  },
  {
    "name": "incentives",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "incentiveId"
      }
    ],
    "outputs": [
      {
        "type": "uint128",
        "name": "totalReward"
      },
      {
        "type": "uint128",
        "name": "bonusReward"
      },
      {
        "type": "address",
        "name": "virtualPoolAddress"
      },
      {
        "type": "uint24",
        "name": "minimalPositionWidth"
      },
      {
        "type": "bool",
        "name": "deactivated"
      },
      {
        "type": "address",
        "name": "pluginAddress"
      }
    ]
  },
  {
    "name": "isEmergencyWithdrawActivated",
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
    "name": "isIncentiveDeactivated",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "incentiveId"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "res"
      }
    ]
  },
  {
    "name": "nonfungiblePositionManager",
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
    "name": "numOfIncentives",
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
    "name": "rewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "rewardToken"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "rewardAmount"
      }
    ]
  },
  {
    "name": "setEmergencyWithdrawStatus",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "newStatus"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFarmingCenterAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_farmingCenter"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "key",
        "components": [
          {
            "type": "address",
            "name": "rewardToken"
          },
          {
            "type": "address",
            "name": "bonusRewardToken"
          },
          {
            "type": "address",
            "name": "pool"
          },
          {
            "type": "uint256",
            "name": "nonce"
          }
        ]
      },
      {
        "type": "uint128",
        "name": "rewardRate"
      },
      {
        "type": "uint128",
        "name": "bonusRewardRate"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract