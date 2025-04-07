import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27652,
  address: '0x6131b5fae19ea4f9d964eac0408e4408b66337b5' as const,
  contract_name: 'MetaAggregationRouterV2',
  display_name: 'Meta Aggregation Router V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742201452,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_WETH"
      }
    ]
  },
  {
    "name": "ClientData",
    "type": "event",
    "inputs": [
      {
        "type": "bytes",
        "name": "clientData"
      }
    ]
  },
  {
    "name": "Error",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "name": "Exchange",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pair"
      },
      {
        "type": "uint256",
        "name": "amountOut"
      },
      {
        "type": "address",
        "name": "output"
      }
    ]
  },
  {
    "name": "Fee",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "totalAmount"
      },
      {
        "type": "uint256",
        "name": "totalFee"
      },
      {
        "type": "address[]",
        "name": "recipients"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "bool",
        "name": "isBps"
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
    "name": "Swapped",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      },
      {
        "type": "address",
        "name": "srcToken"
      },
      {
        "type": "address",
        "name": "dstToken"
      },
      {
        "type": "address",
        "name": "dstReceiver"
      },
      {
        "type": "uint256",
        "name": "spentAmount"
      },
      {
        "type": "uint256",
        "name": "returnAmount"
      }
    ]
  },
  {
    "name": "WETH",
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
    "name": "rescueFunds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "swap",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "execution",
        "components": [
          {
            "type": "address",
            "name": "callTarget"
          },
          {
            "type": "address",
            "name": "approveTarget"
          },
          {
            "type": "bytes",
            "name": "targetData"
          },
          {
            "type": "tuple",
            "name": "desc",
            "components": [
              {
                "type": "address",
                "name": "srcToken"
              },
              {
                "type": "address",
                "name": "dstToken"
              },
              {
                "type": "address[]",
                "name": "srcReceivers"
              },
              {
                "type": "uint256[]",
                "name": "srcAmounts"
              },
              {
                "type": "address[]",
                "name": "feeReceivers"
              },
              {
                "type": "uint256[]",
                "name": "feeAmounts"
              },
              {
                "type": "address",
                "name": "dstReceiver"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "uint256",
                "name": "minReturnAmount"
              },
              {
                "type": "uint256",
                "name": "flags"
              },
              {
                "type": "bytes",
                "name": "permit"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "clientData"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "returnAmount"
      },
      {
        "type": "uint256",
        "name": "gasUsed"
      }
    ]
  },
  {
    "name": "swapSimpleMode",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      },
      {
        "type": "tuple",
        "name": "desc",
        "components": [
          {
            "type": "address",
            "name": "srcToken"
          },
          {
            "type": "address",
            "name": "dstToken"
          },
          {
            "type": "address[]",
            "name": "srcReceivers"
          },
          {
            "type": "uint256[]",
            "name": "srcAmounts"
          },
          {
            "type": "address[]",
            "name": "feeReceivers"
          },
          {
            "type": "uint256[]",
            "name": "feeAmounts"
          },
          {
            "type": "address",
            "name": "dstReceiver"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "minReturnAmount"
          },
          {
            "type": "uint256",
            "name": "flags"
          },
          {
            "type": "bytes",
            "name": "permit"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "executorData"
      },
      {
        "type": "bytes",
        "name": "clientData"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "returnAmount"
      },
      {
        "type": "uint256",
        "name": "gasUsed"
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract