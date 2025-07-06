import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35497,
  address: '0xb20efd5039efc6097cb006e94859c1525b9a7adb' as const,
  contract_name: 'DeployProxy',
  display_name: 'OTC Trade Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xee02d2715dcbd1c9150dddeb3a4838bcbb00942c',
  created_at: undefined,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
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
    "name": "OwnableInvalidOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "OwnableUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
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
    "name": "TradeConfirmed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "tradeId"
      }
    ]
  },
  {
    "name": "TradeCreated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "tradeId"
      },
      {
        "type": "address",
        "name": "seller",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      }
    ]
  },
  {
    "name": "TradeDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "tradeId"
      },
      {
        "type": "address",
        "name": "buyer",
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
    "name": "MAX_FEE",
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
    "name": "confirmTrade",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "tradeId"
      }
    ],
    "outputs": []
  },
  {
    "name": "createTrade",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "tradeId"
      },
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "feePercent"
      },
      {
        "type": "uint256",
        "name": "expiry"
      },
      {
        "type": "address",
        "name": "nftAddress"
      },
      {
        "type": "uint256",
        "name": "nftTokenId"
      },
      {
        "type": "address",
        "name": "referrer"
      }
    ],
    "outputs": []
  },
  {
    "name": "depositFunds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "tradeId"
      }
    ],
    "outputs": []
  },
  {
    "name": "feeCollector",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner_"
      },
      {
        "type": "address",
        "name": "feeCollector_"
      }
    ],
    "outputs": []
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setFeeCollector",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newCollector"
      }
    ],
    "outputs": []
  },
  {
    "name": "trades",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "seller"
      },
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "feePercent"
      },
      {
        "type": "uint256",
        "name": "expiry"
      },
      {
        "type": "address",
        "name": "nftAddress"
      },
      {
        "type": "uint256",
        "name": "nftTokenId"
      },
      {
        "type": "address",
        "name": "referrer"
      },
      {
        "type": "bool",
        "name": "depositMade"
      },
      {
        "type": "bool",
        "name": "completed"
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract