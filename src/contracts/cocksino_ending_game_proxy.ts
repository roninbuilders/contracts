import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34915,
  address: '0x7f14342919b9d4b179fb7bd307bf6e90f073a829' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Cocksino Ending Game Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x2ecea474e6f16f7c2e2613bf897cd8aad5a6f2f0',
  created_at: 1747666136,
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
    "name": "AccessControlBadConfirmation",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AccessControlUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "neededRole"
      }
    ]
  },
  {
    "name": "EnforcedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrERC20TransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrGameAlreadyDone",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrGameNotFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInsufficientContractBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidNumber",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidTimestamp",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNoPot",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrRonNotAccepted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrRonTransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrSameNumberNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrSlotAlreadyTaken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrSlotEndingInvalid",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "neededRole"
      }
    ]
  },
  {
    "name": "ExpectedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PurchaseTimeoutError",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SafeERC20FailedOperation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "FeeWalletUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newFeeWallet"
      }
    ]
  },
  {
    "name": "GameCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "pricePerSlot"
      },
      {
        "type": "uint256",
        "name": "buyEnd"
      }
    ]
  },
  {
    "name": "GameFinished",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "version"
      }
    ]
  },
  {
    "name": "MultiplierUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMultiplier"
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
    "name": "SlotPurchased",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "endingA"
      },
      {
        "type": "uint8",
        "name": "endingB"
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
    "name": "WinnerDeclared",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "winner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint8",
        "name": "endingA"
      },
      {
        "type": "uint8",
        "name": "endingB"
      },
      {
        "type": "uint256",
        "name": "prize"
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
    "name": "FEE_WALLET",
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
    "name": "GAME_COUNTER",
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
    "name": "GAME_MANAGER_ROLE",
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
    "name": "PAUSER_ROLE",
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
    "name": "WINNING_MULTIPLIER",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "batchGetGameInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "gameIds"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "uint256[]",
        "name": "pricePerSlots"
      },
      {
        "type": "bool[]",
        "name": "isActives"
      },
      {
        "type": "bool[]",
        "name": "isFinisheds"
      },
      {
        "type": "uint8[]",
        "name": "winningEndingAs"
      },
      {
        "type": "uint8[]",
        "name": "winningEndingBs"
      },
      {
        "type": "uint256[]",
        "name": "totalPots"
      },
      {
        "type": "uint256[]",
        "name": "buyEnd"
      }
    ]
  },
  {
    "name": "buySlot",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId"
      },
      {
        "type": "uint8",
        "name": "endingA"
      },
      {
        "type": "uint8",
        "name": "endingB"
      }
    ],
    "outputs": []
  },
  {
    "name": "createGame",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "pricePerSlot"
      },
      {
        "type": "uint256",
        "name": "buyEnd"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "gameId"
      }
    ]
  },
  {
    "name": "declareWinner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId"
      },
      {
        "type": "uint8",
        "name": "endingA"
      },
      {
        "type": "uint8",
        "name": "endingB"
      }
    ],
    "outputs": []
  },
  {
    "name": "emergencyWithdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAllActiveGames",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getAllGames",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getAllSlotOwners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId"
      }
    ],
    "outputs": [
      {
        "type": "bytes8[]",
        "name": "slotKeys"
      },
      {
        "type": "address[]",
        "name": "owners"
      }
    ]
  },
  {
    "name": "getGameInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "pricePerSlot"
      },
      {
        "type": "bool",
        "name": "isActive"
      },
      {
        "type": "bool",
        "name": "isFinished"
      },
      {
        "type": "uint8",
        "name": "winningEndingA"
      },
      {
        "type": "uint8",
        "name": "winningEndingB"
      },
      {
        "type": "uint256",
        "name": "totalPot"
      },
      {
        "type": "uint256",
        "name": "buyEnd"
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
    "name": "getRoleMembers",
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
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getSlotOwner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "gameId"
      },
      {
        "type": "uint8",
        "name": "endingA"
      },
      {
        "type": "uint8",
        "name": "endingB"
      }
    ],
    "outputs": [
      {
        "type": "address"
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
        "name": "_FEE_WALLET"
      },
      {
        "type": "uint8",
        "name": "_WINNING_MULTIPLIER"
      }
    ],
    "outputs": []
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
    "name": "refundBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "gameIds"
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
        "name": "callerConfirmation"
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
    "name": "setNewFeeWallet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newWallet"
      }
    ],
    "outputs": []
  },
  {
    "name": "setNewMultiplier",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "newMultiplier"
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract