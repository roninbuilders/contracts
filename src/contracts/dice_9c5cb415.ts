import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35533,
  address: '0x80fce3ea973d62d1f0504532404ee4fd9c5cb415' as const,
  contract_name: 'Dice',
  display_name: 'Dice',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1749972988,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_subId"
      },
      {
        "type": "address",
        "name": "_coordinator"
      },
      {
        "type": "bytes32",
        "name": "_keyHash"
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
    "name": "ZeroAddress",
    "type": "error",
    "inputs": []
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
    "name": "Roll",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint256",
        "name": "choice"
      },
      {
        "type": "bool",
        "name": "won"
      }
    ]
  },
  {
    "name": "WinningsDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "WinningsWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "MIN_BET_AMOUNT",
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "bets",
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
        "name": "player"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "choice"
      }
    ]
  },
  {
    "name": "callbackGasLimit",
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
    "name": "coordinator",
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
    "name": "flip",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "choice"
      }
    ],
    "outputs": []
  },
  {
    "name": "gameOwner",
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
    "name": "getPlayerBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_player"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "keyHash",
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
    "name": "playerBalances",
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
    "name": "requestConfirmations",
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
    "name": "subscriptionId",
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
    "name": "withdrawOwnerFunds",
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
    "name": "withdrawWinnings",
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