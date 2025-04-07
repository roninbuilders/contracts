import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4208,
  address: '0x700ec85fcac3c8b6e62a7549ea5b40dd28026def' as const,
  contract_name: 'AchievementMinterProxy',
  display_name: 'Achievement Minter Proxy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1727131646,
  abi: [
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
    "name": "achievementSettingsForId",
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
        "type": "bool",
        "name": "isRepeatable"
      },
      {
        "type": "bool",
        "name": "isPaused"
      }
    ]
  },
  {
    "name": "addMinterForId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address",
        "name": "_newMinter"
      },
      {
        "type": "uint256",
        "name": "_id"
      }
    ],
    "outputs": []
  },
  {
    "name": "addMinters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_tokens"
      },
      {
        "type": "address[]",
        "name": "_newMinters"
      },
      {
        "type": "uint256[]",
        "name": "_ids"
      }
    ],
    "outputs": []
  },
  {
    "name": "disableRepeatForId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_id"
      }
    ],
    "outputs": []
  },
  {
    "name": "enableRepeatForId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_id"
      }
    ],
    "outputs": []
  },
  {
    "name": "isMinterForId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address",
        "name": "_minter"
      },
      {
        "type": "uint256",
        "name": "_id"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isMinterForIdsBatch",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address",
        "name": "_minter"
      },
      {
        "type": "uint256[]",
        "name": "_ids"
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
      }
    ]
  },
  {
    "name": "mintAchievement",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address",
        "name": "_account"
      },
      {
        "type": "uint256",
        "name": "_id"
      }
    ],
    "outputs": []
  },
  {
    "name": "mintAchievementBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address[]",
        "name": "_accounts"
      },
      {
        "type": "uint256",
        "name": "_id"
      }
    ],
    "outputs": []
  },
  {
    "name": "mintAchievements",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_tokens"
      },
      {
        "type": "address[]",
        "name": "_accounts"
      },
      {
        "type": "uint256[]",
        "name": "_ids"
      }
    ],
    "outputs": []
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
    "name": "pauseAllMinting",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "pauseMintingForId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_id"
      }
    ],
    "outputs": []
  },
  {
    "name": "pauseMintingForMany",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256[]",
        "name": "_ids"
      }
    ],
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
    "name": "removeMinterForId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address",
        "name": "_oldMinter"
      },
      {
        "type": "uint256",
        "name": "_id"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeMinters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_tokens"
      },
      {
        "type": "address[]",
        "name": "_oldMinters"
      },
      {
        "type": "uint256[]",
        "name": "_ids"
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
    "name": "setAchievementSettingsForId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_id"
      },
      {
        "type": "bool",
        "name": "_isRepeatable"
      },
      {
        "type": "bool",
        "name": "_isPaused"
      },
      {
        "type": "address",
        "name": "_newMinter"
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
    "name": "unpauseAllMinting",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "unpauseMintingForId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_id"
      }
    ],
    "outputs": []
  },
  {
    "name": "unpauseMintingForMany",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256[]",
        "name": "_ids"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract