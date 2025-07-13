import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36039,
  address: '0x480e5ddd62637568d2515268f525b34f5387537d' as const,
  contract_name: 'FarmingCenter',
  display_name: 'Farming Center',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751631634,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_eternalFarming"
      },
      {
        "type": "address",
        "name": "_nonfungiblePositionManager"
      }
    ]
  },
  {
    "name": "algebraPoolDeployer",
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
    "name": "applyLiquidityDelta",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "int256"
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
        "name": "rewardBalanceBefore"
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
    "name": "connectVirtualPoolToPlugin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newVirtualPool"
      },
      {
        "type": "address",
        "name": "plugin"
      }
    ],
    "outputs": []
  },
  {
    "name": "deposits",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "incentiveId"
      }
    ]
  },
  {
    "name": "disconnectVirtualPoolFromPlugin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "virtualPool"
      },
      {
        "type": "address",
        "name": "plugin"
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
    "name": "eternalFarming",
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
      }
    ],
    "outputs": []
  },
  {
    "name": "incentiveKeys",
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
    "name": "multicall",
    "type": "function",
    "stateMutability": "payable",
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
    "name": "virtualPoolAddresses",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "poolAddress"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "virtualPoolAddress"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract