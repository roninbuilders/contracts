import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37346,
  address: '0x0f9332d3bafdbaaa5be753819356497b8defe123' as const,
  contract_name: 'KyberSwapV3',
  display_name: 'Kyber Swap V3',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1747710920,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_admin"
      },
      {
        "type": "address",
        "name": "_router"
      }
    ]
  },
  {
    "name": "AdminClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      },
      {
        "type": "address",
        "name": "previousAdmin"
      }
    ]
  },
  {
    "name": "EtherWithdraw",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "sendTo"
      }
    ]
  },
  {
    "name": "TokenWithdraw",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "sendTo"
      }
    ]
  },
  {
    "name": "TransferAdminPending",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pendingAdmin"
      }
    ]
  },
  {
    "name": "UpdatedAggregationRouter",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "router"
      }
    ]
  },
  {
    "name": "UpdatedproxyContract",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldProxyImpl",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_newProxyImpl",
        "indexed": true
      }
    ]
  },
  {
    "name": "BPS",
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
    "name": "admin",
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
    "name": "claimAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "getExpectedIn",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint256",
            "name": "destAmount"
          },
          {
            "type": "address[]",
            "name": "tradePath"
          },
          {
            "type": "uint256",
            "name": "feeBps"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "srcAmount"
      }
    ]
  },
  {
    "name": "getExpectedInWithImpact",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint256",
            "name": "destAmount"
          },
          {
            "type": "address[]",
            "name": "tradePath"
          },
          {
            "type": "uint256",
            "name": "feeBps"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "srcAmount"
      },
      {
        "type": "uint256",
        "name": "priceImpact"
      }
    ]
  },
  {
    "name": "getExpectedReturn",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint256",
            "name": "srcAmount"
          },
          {
            "type": "address[]",
            "name": "tradePath"
          },
          {
            "type": "uint256",
            "name": "feeBps"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "destAmount"
      }
    ]
  },
  {
    "name": "getExpectedReturnWithImpact",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint256",
            "name": "srcAmount"
          },
          {
            "type": "address[]",
            "name": "tradePath"
          },
          {
            "type": "uint256",
            "name": "feeBps"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "destAmount"
      },
      {
        "type": "uint256",
        "name": "priceImpact"
      }
    ]
  },
  {
    "name": "pendingAdmin",
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
    "name": "proxyContract",
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
    "name": "router",
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
    "name": "swap",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint256",
            "name": "srcAmount"
          },
          {
            "type": "uint256",
            "name": "minDestAmount"
          },
          {
            "type": "address[]",
            "name": "tradePath"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "feeBps"
          },
          {
            "type": "address",
            "name": "feeReceiver"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "destAmount"
      }
    ]
  },
  {
    "name": "transferAdmin",
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
    "name": "transferAdminQuickly",
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
    "name": "updateAggregationRouter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_router"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateProxyContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_proxyContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawEther",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "sendTo"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawToken",
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
      },
      {
        "type": "address",
        "name": "sendTo"
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