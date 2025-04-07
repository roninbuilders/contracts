import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1533,
  address: '0x13bb571088984647ece620e595f4be4bcddab204' as const,
  contract_name: 'ClassicPortal',
  display_name: 'Classic Portal',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1704962479,
  abi: [
  {
    "name": "ErrDepositPaused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidGameId",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameId"
      }
    ]
  },
  {
    "name": "ErrInvalidInput",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidTokenStandard",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNullGameOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnauthorizedGameOwner",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "Deposited",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "depositHash",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "record",
        "components": [
          {
            "type": "uint8",
            "name": "gameId"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "recipientNonce"
          },
          {
            "type": "address",
            "name": "sender"
          },
          {
            "type": "tuple[]",
            "name": "assets",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "GameOwnerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newOwner"
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
    "name": "PauseStateUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isPaused"
      }
    ]
  },
  {
    "name": "TreasuryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "treasury",
        "indexed": true
      }
    ]
  },
  {
    "name": "deposit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameId"
      },
      {
        "type": "tuple[]",
        "name": "assets",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "quantity"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "depositFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint8",
        "name": "gameId"
      },
      {
        "type": "tuple[]",
        "name": "assets",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "quantity"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "getDepositHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "recipientNonce"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getGameOwner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "gameOwner"
      }
    ]
  },
  {
    "name": "getGameTreasury",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "treasury"
      }
    ]
  },
  {
    "name": "getPauseState",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "getRecipientNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "isDepositHashExisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "depositHash"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
    "name": "pauseDeposit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameId"
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
    "name": "setGameOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameId"
      },
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGameTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameId"
      },
      {
        "type": "address",
        "name": "treasury"
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
    "name": "unpauseDeposit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "gameId"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract