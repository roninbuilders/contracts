import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 29684,
  address: '0xbfde1bed22ec88b06b6381558368aa31c829c69a' as const,
  contract_name: 'AAPReward',
  display_name: 'AAP Reward',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1743425357,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AddedApprovedReward",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_rewardAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_nftId",
        "indexed": true
      }
    ]
  },
  {
    "name": "AdminAccessSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_admin"
      },
      {
        "type": "bool",
        "name": "_enabled"
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
    "name": "ForceUpdateTargetReward",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_claimerAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_rewardAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_nftId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_totalClaimedValue"
      },
      {
        "type": "uint256",
        "name": "_claimedValue"
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
    "name": "RemovedApprovedReward",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_rewardAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_nftId",
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
        "name": "_requestAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_rewardAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_nftId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_totalClaimedValue"
      },
      {
        "type": "uint256",
        "name": "_claimedValue"
      }
    ]
  },
  {
    "name": "UpdatedSystemAddress",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_systemAddress",
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
    "name": "addApprovedRewardArray",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "rewardStructs",
        "components": [
          {
            "type": "uint8",
            "name": "nftType"
          },
          {
            "type": "address",
            "name": "rewardAddress"
          },
          {
            "type": "uint256",
            "name": "nftId"
          }
        ]
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
        "type": "uint8[]",
        "name": "_nftTypeArray"
      },
      {
        "type": "address[]",
        "name": "_rewardAddressArray"
      },
      {
        "type": "uint256[]",
        "name": "_nftIdArray"
      },
      {
        "type": "uint256[]",
        "name": "_totalAmountArray"
      },
      {
        "type": "uint256",
        "name": "_time"
      },
      {
        "type": "bytes",
        "name": "_signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimerRewardInfoMap",
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
        "type": "uint8",
        "name": "nftType"
      },
      {
        "type": "address",
        "name": "rewardAddress"
      },
      {
        "type": "uint256",
        "name": "nftId"
      },
      {
        "type": "uint256",
        "name": "totalAmount"
      },
      {
        "type": "uint256",
        "name": "claimed"
      }
    ]
  },
  {
    "name": "forceUpdateTargetReward",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_nftType"
      },
      {
        "type": "address",
        "name": "_claimerAddress"
      },
      {
        "type": "address",
        "name": "_rewardAddress"
      },
      {
        "type": "uint256",
        "name": "_nftId"
      },
      {
        "type": "uint256",
        "name": "_totalAmount"
      },
      {
        "type": "uint256",
        "name": "_claimed"
      }
    ],
    "outputs": []
  },
  {
    "name": "getApprovedRewardArray",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint8",
            "name": "nftType"
          },
          {
            "type": "address",
            "name": "rewardAddress"
          },
          {
            "type": "uint256",
            "name": "nftId"
          }
        ]
      }
    ]
  },
  {
    "name": "getClaimerWholeRewardStruct",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_claimerAddress"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint8",
            "name": "nftType"
          },
          {
            "type": "address",
            "name": "rewardAddress"
          },
          {
            "type": "uint256",
            "name": "nftId"
          },
          {
            "type": "uint256",
            "name": "totalAmount"
          },
          {
            "type": "uint256",
            "name": "claimed"
          }
        ]
      }
    ]
  },
  {
    "name": "getTargetReward",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_claimerAddress"
      },
      {
        "type": "address",
        "name": "_rewardAddress"
      },
      {
        "type": "uint256",
        "name": "_nftId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      },
      {
        "type": "uint256"
      },
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint8",
            "name": "nftType"
          },
          {
            "type": "address",
            "name": "rewardAddress"
          },
          {
            "type": "uint256",
            "name": "nftId"
          },
          {
            "type": "uint256",
            "name": "totalAmount"
          },
          {
            "type": "uint256",
            "name": "claimed"
          }
        ]
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "isAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "onERC1155BatchReceived",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "values"
      },
      {
        "type": "bytes",
        "name": "data"
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
        "type": "address",
        "name": "operator"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "data"
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
        "type": "address",
        "name": "operator"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes",
        "name": "data"
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
    "name": "removeApprovedRewardArray",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "rewardStructs",
        "components": [
          {
            "type": "uint8",
            "name": "nftType"
          },
          {
            "type": "address",
            "name": "rewardAddress"
          },
          {
            "type": "uint256",
            "name": "nftId"
          }
        ]
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
    "name": "setAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "bool",
        "name": "enabled"
      }
    ],
    "outputs": []
  },
  {
    "name": "setupSystemAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_systemAddress"
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
] as const satisfies Abi
} as const satisfies Contract
export default contract