import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37163,
  address: '0x55fc6df40e8e9baea2926838932e50de350ec629' as const,
  contract_name: 'BetKeyETHv21Safe',
  display_name: 'Bet Key ET Hv 21 Safe',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1758524825,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "uint256",
        "name": "subscriptionId"
      },
      {
        "type": "bytes32",
        "name": "keyHash"
      },
      {
        "type": "address",
        "name": "vrfCoordinator"
      },
      {
        "type": "uint32",
        "name": "callbackGasLimit"
      },
      {
        "type": "uint16",
        "name": "requestConfirmations"
      },
      {
        "type": "uint32",
        "name": "numWords"
      },
      {
        "type": "uint256",
        "name": "_minBet"
      },
      {
        "type": "uint256",
        "name": "_maxPercWin"
      },
      {
        "type": "uint256",
        "name": "_houseEdge"
      },
      {
        "type": "uint256",
        "name": "_referrerEdge"
      },
      {
        "type": "uint8",
        "name": "_maxBetRepetition"
      }
    ]
  },
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
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "have"
      },
      {
        "type": "address",
        "name": "want"
      }
    ]
  },
  {
    "name": "OnlyOwnerOrCoordinator",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "have"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "coordinator"
      }
    ]
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BetPlaced",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "gambler",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "betInfo",
        "components": [
          {
            "type": "address",
            "name": "gambler"
          },
          {
            "type": "uint256",
            "name": "betAmount"
          },
          {
            "type": "uint256",
            "name": "winAmount"
          },
          {
            "type": "uint256",
            "name": "reservedAmount"
          },
          {
            "type": "uint256",
            "name": "prediction"
          },
          {
            "type": "uint256",
            "name": "rollDirection"
          },
          {
            "type": "uint256",
            "name": "modulo"
          },
          {
            "type": "uint256",
            "name": "timestamp"
          },
          {
            "type": "address",
            "name": "referrer"
          }
        ]
      }
    ]
  },
  {
    "name": "BetResult",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "gambler",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "result"
      },
      {
        "type": "uint256",
        "name": "payout"
      },
      {
        "type": "bool",
        "name": "win"
      }
    ]
  },
  {
    "name": "CoordinatorSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "vrfCoordinator"
      }
    ]
  },
  {
    "name": "OwnershipTransferRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      }
    ]
  },
  {
    "name": "OwnershipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "availableLiquidity",
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
    "name": "bet",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256[4]",
        "name": "_betParams"
      },
      {
        "type": "address",
        "name": "_referrer"
      },
      {
        "type": "uint8",
        "name": "_betRepetition"
      }
    ],
    "outputs": []
  },
  {
    "name": "budget",
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
    "name": "calculateWinAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "modulo"
      },
      {
        "type": "uint256",
        "name": "odds"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "winAmount"
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
    "name": "houseEdge",
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
    "name": "maxBetRepetition",
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
    "name": "maxPercWin",
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
    "name": "maxWin",
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
    "name": "minBet",
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
    "name": "pendingBets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "gambler"
      },
      {
        "type": "uint256",
        "name": "betAmount"
      },
      {
        "type": "uint256",
        "name": "winAmount"
      },
      {
        "type": "uint256",
        "name": "reservedAmount"
      },
      {
        "type": "uint256",
        "name": "prediction"
      },
      {
        "type": "uint256",
        "name": "rollDirection"
      },
      {
        "type": "uint256",
        "name": "modulo"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "address",
        "name": "referrer"
      }
    ]
  },
  {
    "name": "pendingPayouts",
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
    "name": "rawFulfillRandomWords",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256[]",
        "name": "randomWords"
      }
    ],
    "outputs": []
  },
  {
    "name": "recoverOrRefund",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      }
    ],
    "outputs": []
  },
  {
    "name": "referrerEarnings",
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
    "name": "referrerEdge",
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
    "name": "releaseAllReservedFunds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
    "name": "s_callbackGasLimit",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "s_keyHash",
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
    "name": "s_numWords",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "s_requestConfirmations",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16"
      }
    ]
  },
  {
    "name": "s_subscriptionId",
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
    "name": "s_vrfCoordinator",
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
    "name": "setCallbackGasLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "callbackGasLimit"
      }
    ],
    "outputs": []
  },
  {
    "name": "setCoordinator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_vrfCoordinator"
      }
    ],
    "outputs": []
  },
  {
    "name": "setHouseEdgePerc",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_perc"
      }
    ],
    "outputs": []
  },
  {
    "name": "setKeyHash",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyHash"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxBetRepetition",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_value"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxPercWin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_perc"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinBet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_value"
      }
    ],
    "outputs": []
  },
  {
    "name": "setReferrerEdgePerc",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_perc"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRequestConfirmations",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint16",
        "name": "requestConfirmations"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSubscriptionId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "subscriptionId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setUserReferrer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      },
      {
        "type": "address",
        "name": "_ref"
      },
      {
        "type": "uint256",
        "name": "_perc"
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
    "name": "totalReserved",
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
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": []
  },
  {
    "name": "userReferrer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "refAddress"
      },
      {
        "type": "uint256",
        "name": "edge"
      }
    ]
  },
  {
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
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