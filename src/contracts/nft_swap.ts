import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27657,
  address: '0x53a4f0a7c3e143e4b88969e2310be8d981c5639c' as const,
  contract_name: 'NftSwap',
  display_name: 'Nft Swap',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742206786,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "TradeAgreed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tradeId"
      },
      {
        "type": "address",
        "name": "user"
      }
    ]
  },
  {
    "name": "TradeCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tradeId"
      }
    ]
  },
  {
    "name": "TradeCompleted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tradeId"
      }
    ]
  },
  {
    "name": "TradeConfirmed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tradeId"
      },
      {
        "type": "address",
        "name": "user"
      }
    ]
  },
  {
    "name": "TradeProposed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tradeId"
      }
    ]
  },
  {
    "name": "agreeTrade",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tradeId"
      },
      {
        "type": "address",
        "name": "_fromNftContract"
      },
      {
        "type": "uint256",
        "name": "_fromNftId"
      },
      {
        "type": "address",
        "name": "_toNftContract"
      },
      {
        "type": "uint256",
        "name": "_toNftId"
      }
    ],
    "outputs": []
  },
  {
    "name": "confirmTrade",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tradeId"
      }
    ],
    "outputs": []
  },
  {
    "name": "getTrade",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tradeId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "fromAddress"
          },
          {
            "type": "address",
            "name": "fromNftContract"
          },
          {
            "type": "uint256",
            "name": "fromNftId"
          },
          {
            "type": "bool",
            "name": "fromHasAgreed"
          },
          {
            "type": "bool",
            "name": "fromHasConfirmed"
          },
          {
            "type": "address",
            "name": "toAddress"
          },
          {
            "type": "address",
            "name": "toNftContract"
          },
          {
            "type": "uint256",
            "name": "toNftId"
          },
          {
            "type": "bool",
            "name": "toHasAgreed"
          },
          {
            "type": "bool",
            "name": "toHasConfirmed"
          },
          {
            "type": "uint256",
            "name": "createdAt"
          },
          {
            "type": "uint8",
            "name": "status"
          }
        ]
      }
    ]
  },
  {
    "name": "proposeTrade",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_fromAddress"
      },
      {
        "type": "address",
        "name": "_toAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "tradeId"
      }
    ]
  },
  {
    "name": "trades",
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
        "name": "fromAddress"
      },
      {
        "type": "address",
        "name": "fromNftContract"
      },
      {
        "type": "uint256",
        "name": "fromNftId"
      },
      {
        "type": "bool",
        "name": "fromHasAgreed"
      },
      {
        "type": "bool",
        "name": "fromHasConfirmed"
      },
      {
        "type": "address",
        "name": "toAddress"
      },
      {
        "type": "address",
        "name": "toNftContract"
      },
      {
        "type": "uint256",
        "name": "toNftId"
      },
      {
        "type": "bool",
        "name": "toHasAgreed"
      },
      {
        "type": "bool",
        "name": "toHasConfirmed"
      },
      {
        "type": "uint256",
        "name": "createdAt"
      },
      {
        "type": "uint8",
        "name": "status"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract