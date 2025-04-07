import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 235,
  address: '0xd9db270c1b5e3bd161e8c8503c55ceabee709552' as const,
  contract_name: 'GnosisSafe',
  display_name: 'Gnosis Safe',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1635392476,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AddedOwner",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "ApproveHash",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "approvedHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      }
    ]
  },
  {
    "name": "ChangedFallbackHandler",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "handler"
      }
    ]
  },
  {
    "name": "ChangedGuard",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "guard"
      }
    ]
  },
  {
    "name": "ChangedThreshold",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "threshold"
      }
    ]
  },
  {
    "name": "DisabledModule",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "module"
      }
    ]
  },
  {
    "name": "EnabledModule",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "module"
      }
    ]
  },
  {
    "name": "ExecutionFailure",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "txHash"
      },
      {
        "type": "uint256",
        "name": "payment"
      }
    ]
  },
  {
    "name": "ExecutionFromModuleFailure",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "module",
        "indexed": true
      }
    ]
  },
  {
    "name": "ExecutionFromModuleSuccess",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "module",
        "indexed": true
      }
    ]
  },
  {
    "name": "ExecutionSuccess",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "txHash"
      },
      {
        "type": "uint256",
        "name": "payment"
      }
    ]
  },
  {
    "name": "RemovedOwner",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "SafeReceived",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "SafeSetup",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "initiator",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "owners"
      },
      {
        "type": "uint256",
        "name": "threshold"
      },
      {
        "type": "address",
        "name": "initializer"
      },
      {
        "type": "address",
        "name": "fallbackHandler"
      }
    ]
  },
  {
    "name": "SignMsg",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "msgHash",
        "indexed": true
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "nonpayable"
  },
  {
    "name": "VERSION",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "addOwnerWithThreshold",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256",
        "name": "_threshold"
      }
    ],
    "outputs": []
  },
  {
    "name": "approveHash",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hashToApprove"
      }
    ],
    "outputs": []
  },
  {
    "name": "approvedHashes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "changeThreshold",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_threshold"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkNSignatures",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dataHash"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "bytes",
        "name": "signatures"
      },
      {
        "type": "uint256",
        "name": "requiredSignatures"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkSignatures",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dataHash"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "bytes",
        "name": "signatures"
      }
    ],
    "outputs": []
  },
  {
    "name": "disableModule",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "prevModule"
      },
      {
        "type": "address",
        "name": "module"
      }
    ],
    "outputs": []
  },
  {
    "name": "domainSeparator",
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
    "name": "enableModule",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "module"
      }
    ],
    "outputs": []
  },
  {
    "name": "encodeTransactionData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "uint8",
        "name": "operation"
      },
      {
        "type": "uint256",
        "name": "safeTxGas"
      },
      {
        "type": "uint256",
        "name": "baseGas"
      },
      {
        "type": "uint256",
        "name": "gasPrice"
      },
      {
        "type": "address",
        "name": "gasToken"
      },
      {
        "type": "address",
        "name": "refundReceiver"
      },
      {
        "type": "uint256",
        "name": "_nonce"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "execTransaction",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "uint8",
        "name": "operation"
      },
      {
        "type": "uint256",
        "name": "safeTxGas"
      },
      {
        "type": "uint256",
        "name": "baseGas"
      },
      {
        "type": "uint256",
        "name": "gasPrice"
      },
      {
        "type": "address",
        "name": "gasToken"
      },
      {
        "type": "address",
        "name": "refundReceiver"
      },
      {
        "type": "bytes",
        "name": "signatures"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "success"
      }
    ]
  },
  {
    "name": "execTransactionFromModule",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "uint8",
        "name": "operation"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "success"
      }
    ]
  },
  {
    "name": "execTransactionFromModuleReturnData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "uint8",
        "name": "operation"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "success"
      },
      {
        "type": "bytes",
        "name": "returnData"
      }
    ]
  },
  {
    "name": "getChainId",
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
    "name": "getModulesPaginated",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "start"
      },
      {
        "type": "uint256",
        "name": "pageSize"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "array"
      },
      {
        "type": "address",
        "name": "next"
      }
    ]
  },
  {
    "name": "getOwners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getStorageAt",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "offset"
      },
      {
        "type": "uint256",
        "name": "length"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "getThreshold",
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
    "name": "getTransactionHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "uint8",
        "name": "operation"
      },
      {
        "type": "uint256",
        "name": "safeTxGas"
      },
      {
        "type": "uint256",
        "name": "baseGas"
      },
      {
        "type": "uint256",
        "name": "gasPrice"
      },
      {
        "type": "address",
        "name": "gasToken"
      },
      {
        "type": "address",
        "name": "refundReceiver"
      },
      {
        "type": "uint256",
        "name": "_nonce"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "isModuleEnabled",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "module"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isOwner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "nonce",
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
    "name": "removeOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "prevOwner"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256",
        "name": "_threshold"
      }
    ],
    "outputs": []
  },
  {
    "name": "requiredTxGas",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "uint8",
        "name": "operation"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "setFallbackHandler",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "handler"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGuard",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "guard"
      }
    ],
    "outputs": []
  },
  {
    "name": "setup",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_owners"
      },
      {
        "type": "uint256",
        "name": "_threshold"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "address",
        "name": "fallbackHandler"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "payment"
      },
      {
        "type": "address",
        "name": "paymentReceiver"
      }
    ],
    "outputs": []
  },
  {
    "name": "signedMessages",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "simulateAndRevert",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "targetContract"
      },
      {
        "type": "bytes",
        "name": "calldataPayload"
      }
    ],
    "outputs": []
  },
  {
    "name": "swapOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "prevOwner"
      },
      {
        "type": "address",
        "name": "oldOwner"
      },
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