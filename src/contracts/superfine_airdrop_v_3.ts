import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 185,
  address: '0x27013d274aa60c6e6883aa2130e8b01249eb11d4' as const,
  contract_name: 'SuperfineAirdropV3',
  display_name: 'Superfine Airdrop V3',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1685614246,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "maxBatchSize"
      },
      {
        "type": "uint256",
        "name": "feePerBatch"
      }
    ]
  },
  {
    "name": "AirdropCampaignCreated",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "campaignId"
      },
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "tuple[]",
        "name": "assets",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "assetAddress"
          },
          {
            "type": "uint256",
            "name": "assetId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "maxBatchSize"
      }
    ]
  },
  {
    "name": "AirdropCampaignUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "campaignId"
      },
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "tuple[]",
        "name": "assets",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "assetAddress"
          },
          {
            "type": "uint256",
            "name": "assetId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "maxBatchSize"
      }
    ]
  },
  {
    "name": "AssetsAirdropped",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "campaignId"
      },
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "tuple[]",
        "name": "assets",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "assetAddress"
          },
          {
            "type": "uint256",
            "name": "assetId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "address[]",
        "name": "recipients"
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
    "name": "airdrop",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "campaignId"
      },
      {
        "type": "uint256[]",
        "name": "assetIndexes"
      },
      {
        "type": "address[]",
        "name": "recipients"
      }
    ],
    "outputs": []
  },
  {
    "name": "createAirdropCampaign",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "campaignId"
      },
      {
        "type": "tuple[]",
        "name": "assets",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "assetAddress"
          },
          {
            "type": "uint256",
            "name": "assetId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "estimateAirdropFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "numAssets"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
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
            "type": "tuple[]",
            "name": "assets",
            "components": [
              {
                "type": "uint8",
                "name": "assetType"
              },
              {
                "type": "address",
                "name": "assetAddress"
              },
              {
                "type": "uint256",
                "name": "assetId"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "maxBatchSize"
          },
          {
            "type": "uint256",
            "name": "chargedFee"
          },
          {
            "type": "bool",
            "name": "airdropStarted"
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
    "name": "setFeePerBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newFee"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxBatchSize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newSize"
      }
    ],
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
    "name": "updateCampaign",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "campaignId"
      },
      {
        "type": "tuple[]",
        "name": "assets",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "assetAddress"
          },
          {
            "type": "uint256",
            "name": "assetId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawAirdropFee",
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