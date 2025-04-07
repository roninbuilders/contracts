import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27789,
  address: '0x6dea30929a575b8b29f459aae1b3b85e52a723f4' as const,
  contract_name: 'FeeAdapter',
  display_name: 'Fee Adapter',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742384372,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_spoke"
      },
      {
        "type": "address",
        "name": "_feeRecipient"
      },
      {
        "type": "address",
        "name": "_xerc20Module"
      },
      {
        "type": "address",
        "name": "_owner"
      }
    ]
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "AddressInsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MultipleOrderAssets",
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
    "name": "SafeERC20FailedDecreaseAllowance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "currentAllowance"
      },
      {
        "type": "uint256",
        "name": "requestedDecrease"
      }
    ]
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
    "name": "FeeRecipientUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_updated",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_previous",
        "indexed": true
      }
    ]
  },
  {
    "name": "IntentWithFeesAdded",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_intentId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "_initiator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_tokenFee"
      },
      {
        "type": "uint256",
        "name": "_nativeFee"
      }
    ]
  },
  {
    "name": "OrderCreated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_orderId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "_initiator",
        "indexed": true
      },
      {
        "type": "bytes32[]",
        "name": "_intentIds"
      },
      {
        "type": "uint256",
        "name": "_tokenFee"
      },
      {
        "type": "uint256",
        "name": "_nativeFee"
      }
    ]
  },
  {
    "name": "OwnershipTransferStarted",
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
    "name": "PERMIT2",
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "feeRecipient",
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
    "name": "newIntent",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint32[]",
        "name": "_destinations"
      },
      {
        "type": "address",
        "name": "_receiver"
      },
      {
        "type": "address",
        "name": "_inputAsset"
      },
      {
        "type": "address",
        "name": "_outputAsset"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "uint24",
        "name": "_maxFee"
      },
      {
        "type": "uint48",
        "name": "_ttl"
      },
      {
        "type": "bytes",
        "name": "_data"
      },
      {
        "type": "uint256",
        "name": "_fee"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "_intentId"
      },
      {
        "type": "tuple",
        "name": "_intent",
        "components": [
          {
            "type": "bytes32",
            "name": "initiator"
          },
          {
            "type": "bytes32",
            "name": "receiver"
          },
          {
            "type": "bytes32",
            "name": "inputAsset"
          },
          {
            "type": "bytes32",
            "name": "outputAsset"
          },
          {
            "type": "uint24",
            "name": "maxFee"
          },
          {
            "type": "uint32",
            "name": "origin"
          },
          {
            "type": "uint64",
            "name": "nonce"
          },
          {
            "type": "uint48",
            "name": "timestamp"
          },
          {
            "type": "uint48",
            "name": "ttl"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint32[]",
            "name": "destinations"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ]
  },
  {
    "name": "newIntent",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint32[]",
        "name": "_destinations"
      },
      {
        "type": "address",
        "name": "_receiver"
      },
      {
        "type": "address",
        "name": "_inputAsset"
      },
      {
        "type": "address",
        "name": "_outputAsset"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "uint24",
        "name": "_maxFee"
      },
      {
        "type": "uint48",
        "name": "_ttl"
      },
      {
        "type": "bytes",
        "name": "_data"
      },
      {
        "type": "tuple",
        "name": "_permit2Params",
        "components": [
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "_fee"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "_intentId"
      },
      {
        "type": "tuple",
        "name": "_intent",
        "components": [
          {
            "type": "bytes32",
            "name": "initiator"
          },
          {
            "type": "bytes32",
            "name": "receiver"
          },
          {
            "type": "bytes32",
            "name": "inputAsset"
          },
          {
            "type": "bytes32",
            "name": "outputAsset"
          },
          {
            "type": "uint24",
            "name": "maxFee"
          },
          {
            "type": "uint32",
            "name": "origin"
          },
          {
            "type": "uint64",
            "name": "nonce"
          },
          {
            "type": "uint48",
            "name": "timestamp"
          },
          {
            "type": "uint48",
            "name": "ttl"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint32[]",
            "name": "destinations"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ]
  },
  {
    "name": "newOrder",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_fee"
      },
      {
        "type": "tuple[]",
        "name": "_params",
        "components": [
          {
            "type": "uint32[]",
            "name": "destinations"
          },
          {
            "type": "address",
            "name": "receiver"
          },
          {
            "type": "address",
            "name": "inputAsset"
          },
          {
            "type": "address",
            "name": "outputAsset"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint24",
            "name": "maxFee"
          },
          {
            "type": "uint48",
            "name": "ttl"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "_orderId"
      },
      {
        "type": "bytes32[]",
        "name": "_intentIds"
      }
    ]
  },
  {
    "name": "newOrderSplitEvenly",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint32",
        "name": "_numIntents"
      },
      {
        "type": "uint256",
        "name": "_fee"
      },
      {
        "type": "tuple",
        "name": "_params",
        "components": [
          {
            "type": "uint32[]",
            "name": "destinations"
          },
          {
            "type": "address",
            "name": "receiver"
          },
          {
            "type": "address",
            "name": "inputAsset"
          },
          {
            "type": "address",
            "name": "outputAsset"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint24",
            "name": "maxFee"
          },
          {
            "type": "uint48",
            "name": "ttl"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "_orderId"
      },
      {
        "type": "bytes32[]",
        "name": "_intentIds"
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
    "name": "pendingOwner",
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
    "name": "returnUnsupportedIntent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_asset"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "address",
        "name": "_recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "spoke",
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
    "name": "updateFeeRecipient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_feeRecipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "xerc20Module",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract