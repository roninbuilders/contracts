import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2028,
  address: '0xcededf4ebeb13ac40def04b2f8bb0d661bbecb86' as const,
  contract_name: 'MysteryBoxClaimer',
  display_name: 'Mystery Box Claimer',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1711309367,
  abi: [
  {
    "name": "ErrClaimPaused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrFulfilled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNoIndexFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNoRewardsLeft",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrWrongRewardType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
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
    "name": "MysteryBoxClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "boxId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "reward",
        "components": [
          {
            "type": "uint256",
            "name": "rewardType"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "address",
            "name": "tokenHolder"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenAmount"
          },
          {
            "type": "uint256",
            "name": "supply"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "rewardIndex"
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
    "name": "MysteryBox",
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
    "name": "MysteryBoxRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "rewardType"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "address",
        "name": "tokenHolder"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "tokenAmount"
      },
      {
        "type": "uint256",
        "name": "supply"
      }
    ]
  },
  {
    "name": "MysteryBoxRewardsTotalSupply",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "VRFReqHashToMysteryBoxClaimData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "fulfilled"
      },
      {
        "type": "uint256",
        "name": "boxId"
      },
      {
        "type": "address",
        "name": "claimer"
      }
    ]
  },
  {
    "name": "burnAddress",
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
    "name": "claimMysteryBox",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_boxId"
      }
    ],
    "outputs": []
  },
  {
    "name": "createBoxRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_boxIds"
      },
      {
        "type": "tuple[][]",
        "name": "_rewardsData",
        "components": [
          {
            "type": "uint256",
            "name": "rewardType"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "address",
            "name": "tokenHolder"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenAmount"
          },
          {
            "type": "uint256",
            "name": "supply"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "deleteBoxRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_boxIds"
      },
      {
        "type": "uint256[]",
        "name": "_rewardIndexes"
      }
    ],
    "outputs": []
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_mysteryBox"
      },
      {
        "type": "address",
        "name": "_vrfCoordinator"
      },
      {
        "type": "address",
        "name": "_wrapper"
      }
    ],
    "outputs": []
  },
  {
    "name": "onERC1155BatchReceived",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "onERC1155Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
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
    "name": "rawFulfillRandomSeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_reqHash"
      },
      {
        "type": "uint256",
        "name": "_randomSeed"
      }
    ],
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
    "name": "rescueAssets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_tokenTypes"
      },
      {
        "type": "address[]",
        "name": "_tokenAddresses"
      },
      {
        "type": "uint256[]",
        "name": "_tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "_tokenAmounts"
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
    "name": "togglePauseClaiming",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_value"
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
    "name": "updateBoxRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_boxIds"
      },
      {
        "type": "uint256[]",
        "name": "_rewardIndexes"
      },
      {
        "type": "tuple[]",
        "name": "_newRewardsData",
        "components": [
          {
            "type": "uint256",
            "name": "rewardType"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "address",
            "name": "tokenHolder"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenAmount"
          },
          {
            "type": "uint256",
            "name": "supply"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "vrfCoordinator",
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
    "name": "wrapper",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract