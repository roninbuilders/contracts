import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 241,
  address: '0x0f514dbc18345e1109370d14c0562c92193f4281' as const,
  contract_name: 'LandDelegation',
  display_name: 'Land Delegation',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1687317465,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ErrAlreadySteward",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrAssigneeNonZeroBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrCannotTransferLand",
    "type": "error",
    "inputs": [
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
        "name": "landId"
      }
    ]
  },
  {
    "name": "ErrDelegationNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "landId"
      }
    ]
  },
  {
    "name": "ErrExceedsMaxBatchSize",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInDelegationDuration",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "landId"
      }
    ]
  },
  {
    "name": "ErrInRevokeCooldown",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "landId"
      }
    ]
  },
  {
    "name": "ErrInvalidConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidDuration",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidInput",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrLandAlreadyInDelegation",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "landId"
      }
    ]
  },
  {
    "name": "ErrLandNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "landId"
      }
    ]
  },
  {
    "name": "ErrSelfDelegation",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DelegateDurationRangeChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "min",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "max",
        "indexed": true
      }
    ]
  },
  {
    "name": "Delegated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "landId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "assignee",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "duration"
      }
    ]
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
    "name": "LandContractChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newLandContract"
      }
    ]
  },
  {
    "name": "LandStakingContractChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newLandStaking"
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
    "name": "Retrieved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "landId",
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
    "name": "RevokeCooldownDurationChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newDuration"
      }
    ]
  },
  {
    "name": "Revoked",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "landId",
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
    "name": "delegateLand",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_landId"
      },
      {
        "type": "address",
        "name": "_assignee"
      },
      {
        "type": "uint256",
        "name": "_duration"
      }
    ],
    "outputs": []
  },
  {
    "name": "delegateLandBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_landIds"
      },
      {
        "type": "address",
        "name": "_assignee"
      },
      {
        "type": "uint256[]",
        "name": "_durations"
      }
    ],
    "outputs": []
  },
  {
    "name": "delegationAmountsMap",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "delegationMap",
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
        "name": "expiryTimestamp"
      },
      {
        "type": "uint256",
        "name": "assignedTimestamp"
      },
      {
        "type": "address",
        "name": "assignee"
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
        "type": "address",
        "name": "_landContract"
      },
      {
        "type": "uint256",
        "name": "_revokeCooldownDuration"
      },
      {
        "type": "uint256",
        "name": "_minDelegateDuration"
      },
      {
        "type": "uint256",
        "name": "_maxDelegateDuration"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_landStakingContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "isSteward",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_assignee"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "landContract",
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
    "name": "maxDelegateDuration",
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
    "name": "minDelegateDuration",
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
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "pure",
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
    "name": "pause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
    "name": "retrieveLand",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_landId"
      }
    ],
    "outputs": []
  },
  {
    "name": "retrieveLandBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_landIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "revokeCooldownDuration",
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
    "name": "revokeLand",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_landId"
      }
    ],
    "outputs": []
  },
  {
    "name": "revokeLandBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_landIds"
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
    "name": "setDelegateDurationRange",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_minDelegateDuration"
      },
      {
        "type": "uint256",
        "name": "_maxDelegateDuration"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLandContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_landContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLandStakingContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_landStakingContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRevokeCooldownDuration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_revokeCooldownDuration"
      }
    ],
    "outputs": []
  },
  {
    "name": "stewardMap",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "assigned"
      },
      {
        "type": "address",
        "name": "landOwner"
      },
      {
        "type": "uint256",
        "name": "furthestExpiryTimestamp"
      }
    ]
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract