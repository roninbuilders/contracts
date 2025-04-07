import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 143,
  address: '0x94c3974c3890ed4767810ec420d0b35165c355a0' as const,
  contract_name: 'SuperfineRewardDistributionV1',
  display_name: 'Superfine Reward Distribution V1',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1686732686,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
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
    "name": "RewardsDistributed",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "requestId"
      },
      {
        "type": "string",
        "name": "campaignId"
      },
      {
        "type": "address",
        "name": "campaignCreator"
      },
      {
        "type": "tuple[]",
        "name": "rewards",
        "components": [
          {
            "type": "uint8",
            "name": "rewardType"
          },
          {
            "type": "address",
            "name": "rewardAddress"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "address[]",
        "name": "winners"
      }
    ]
  },
  {
    "name": "SuperfineCampaignCreated",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "campaignId"
      },
      {
        "type": "address",
        "name": "creator"
      }
    ]
  },
  {
    "name": "SuperfineCampaignUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "campaignId"
      },
      {
        "type": "address",
        "name": "creator"
      }
    ]
  },
  {
    "name": "createSuperfineCampaign",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "campaignId"
      },
      {
        "type": "uint256",
        "name": "numRewards"
      },
      {
        "type": "uint256",
        "name": "nativeReward"
      },
      {
        "type": "uint256",
        "name": "campaignFee"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "distributeRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "requestId"
      },
      {
        "type": "string",
        "name": "campaignId"
      },
      {
        "type": "tuple[]",
        "name": "rewards",
        "components": [
          {
            "type": "uint8",
            "name": "rewardType"
          },
          {
            "type": "address",
            "name": "rewardAddress"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "address[]",
        "name": "winners"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "getCampaignById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "campaignId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "string",
            "name": "campaignId"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "uint256",
            "name": "numRewards"
          },
          {
            "type": "uint256",
            "name": "totalNativeReward"
          },
          {
            "type": "uint256",
            "name": "chargedFee"
          },
          {
            "type": "bool",
            "name": "distributionStarted"
          }
        ]
      }
    ]
  },
  {
    "name": "getDistributedRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "winner"
      },
      {
        "type": "string",
        "name": "campaignId"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint8",
            "name": "rewardType"
          },
          {
            "type": "address",
            "name": "rewardAddress"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setOperators",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "operators"
      },
      {
        "type": "bool[]",
        "name": "isOperators"
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
    "name": "updateSuperfineCampaign",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "campaignId"
      },
      {
        "type": "uint256",
        "name": "newNumRewards"
      },
      {
        "type": "uint256",
        "name": "newNativeReward"
      },
      {
        "type": "uint256",
        "name": "newCampaignFee"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawCampaignFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract