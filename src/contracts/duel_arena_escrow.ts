import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 6167,
  address: '0x8482dcd935b922959614aebfa4cf7fbcff9fb9eb' as const,
  contract_name: 'DuelArenaEscrow',
  display_name: 'Duel Arena Escrow',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1735578030,
  abi: [
  {
    "name": "ZeroValueETH",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Deposited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "payee",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "battleId"
      },
      {
        "type": "uint256[]",
        "name": "assetEnum"
      },
      {
        "type": "address[]",
        "name": "contractAddr"
      },
      {
        "type": "uint256[]",
        "name": "amtOrTokenId"
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
    "name": "Withdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "payee",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "battleId"
      },
      {
        "type": "uint256[]",
        "name": "assetEnum"
      },
      {
        "type": "address[]",
        "name": "contractAddr"
      },
      {
        "type": "uint256[]",
        "name": "amtOrTokenId"
      }
    ]
  },
  {
    "name": "deposit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "payee"
      },
      {
        "type": "uint256",
        "name": "battleId"
      },
      {
        "type": "tuple[]",
        "name": "stakes",
        "components": [
          {
            "type": "uint8",
            "name": "asset"
          },
          {
            "type": "address",
            "name": "contractAddr"
          },
          {
            "type": "uint256",
            "name": "amtOrTokenId"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      },
      {
        "type": "address[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "depositsOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "payee"
      },
      {
        "type": "uint256",
        "name": "battleId"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint8",
            "name": "asset"
          },
          {
            "type": "address",
            "name": "contractAddr"
          },
          {
            "type": "uint256",
            "name": "amtOrTokenId"
          }
        ]
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "payee"
      },
      {
        "type": "address",
        "name": "receiver"
      },
      {
        "type": "uint256",
        "name": "battleId"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract