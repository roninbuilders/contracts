import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 140,
  address: '0x919a03764c1099ecb77e1532468d55e5baac8aff' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Reward Dispenser Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x699f472458a5e342b87f455bf06d2521ea2f2596',
  created_at: 1664011277,
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
    "name": "AlreadyDispensedPool",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CanceledOrFinishedPool",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DuplicatedRecipient",
    "type": "error",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "FinalizedPool",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInput",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotDraftPool",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StagedPool",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnexistedPool",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnstagedPool",
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
    "name": "PoolCanceled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "index",
        "indexed": true
      },
      {
        "type": "int256",
        "name": "cursorOfLastDispensed"
      }
    ]
  },
  {
    "name": "PoolCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "index",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalReward"
      }
    ]
  },
  {
    "name": "PoolDispensed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "index",
        "indexed": true
      },
      {
        "type": "int256",
        "name": "cursorOfLastDispensed"
      },
      {
        "type": "uint256",
        "name": "dispensedAmount"
      }
    ]
  },
  {
    "name": "PoolFinalized",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "index",
        "indexed": true
      }
    ]
  },
  {
    "name": "PoolStaged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "index",
        "indexed": true
      }
    ]
  },
  {
    "name": "PoolUnstaged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "index",
        "indexed": true
      }
    ]
  },
  {
    "name": "PoolUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "index",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalRewards"
      }
    ]
  },
  {
    "name": "RoleAdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "previousAdminRole",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "newAdminRole",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleGranted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleRevoked",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "APPROVER_ROLE",
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
    "name": "DEFAULT_ADMIN_ROLE",
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
    "name": "OPERATOR_ROLE",
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
    "name": "cancelPool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "createRewardPool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_name"
      },
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address[]",
        "name": "_recipients"
      },
      {
        "type": "uint256[]",
        "name": "_amounts"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "poolIndex_"
      }
    ]
  },
  {
    "name": "dispendRewardBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolIndex"
      },
      {
        "type": "uint256",
        "name": "_batchVolume"
      }
    ],
    "outputs": []
  },
  {
    "name": "getPoolInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolIndex"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "name_"
      },
      {
        "type": "address",
        "name": "token_"
      },
      {
        "type": "uint8",
        "name": "state_"
      },
      {
        "type": "uint256",
        "name": "scatterCursor_"
      },
      {
        "type": "uint256",
        "name": "totalRewardAmount_"
      },
      {
        "type": "uint256",
        "name": "totalDispensed_"
      },
      {
        "type": "uint256",
        "name": "totalRewardUser_"
      }
    ]
  },
  {
    "name": "getPoolRewardList",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolIndex"
      },
      {
        "type": "uint256",
        "name": "_batchCursor"
      },
      {
        "type": "uint256",
        "name": "_batchVolume"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "rewardAddresses_"
      },
      {
        "type": "uint256[]",
        "name": "rewardAmounts_"
      }
    ]
  },
  {
    "name": "getPools",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "indexes"
      },
      {
        "type": "string[]",
        "name": "names"
      },
      {
        "type": "uint256[]",
        "name": "totalRewardAmounts"
      },
      {
        "type": "uint256[]",
        "name": "totalRewardUsers"
      }
    ]
  },
  {
    "name": "getRoleAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getRoleMember",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getRoleMemberCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "grantRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "hasRole",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
        "name": "_owner"
      },
      {
        "type": "address[]",
        "name": "_keepers"
      },
      {
        "type": "address[]",
        "name": "_operators"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "revokeRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "stagePool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolIndex"
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
    "name": "unstagePool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateRewardBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_poolIndex"
      },
      {
        "type": "address[]",
        "name": "_recipients"
      },
      {
        "type": "uint256[]",
        "name": "_amounts"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract