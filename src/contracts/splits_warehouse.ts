import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36510,
  address: '0x8fb66f38cf86a3d5e8768f8f1754a24a6c661fb8' as const,
  contract_name: 'SplitsWarehouse',
  display_name: 'Splits Warehouse',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753989517,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_native_token_name"
      },
      {
        "type": "string",
        "name": "_native_token_symbol"
      }
    ]
  },
  {
    "name": "ExpiredSignature",
    "type": "error",
    "inputs": [
      {
        "type": "uint48",
        "name": "deadline"
      }
    ]
  },
  {
    "name": "InvalidAck",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidNonce",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPermitParams",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidShortString",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSigner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Overflow",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StringTooLong",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "str"
      }
    ]
  },
  {
    "name": "WithdrawalPaused",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "ZeroOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Approval",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "spender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
  },
  {
    "name": "NonceInvalidation",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nonce",
        "indexed": true
      }
    ]
  },
  {
    "name": "OperatorSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "spender",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "approved"
      }
    ]
  },
  {
    "name": "Transfer",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "address",
        "name": "receiver",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "Withdraw",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "withdrawer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "reward"
      }
    ]
  },
  {
    "name": "WithdrawConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "uint16",
            "name": "incentive"
          },
          {
            "type": "bool",
            "name": "paused"
          }
        ]
      }
    ]
  },
  {
    "name": "APPROVE_AND_CALL_TYPE_HASH",
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
    "name": "DOMAIN_SEPARATOR",
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
    "name": "NATIVE_TOKEN",
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
    "name": "NATIVE_TOKEN_ID",
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
    "name": "PERCENTAGE_SCALE",
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
    "name": "allowance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "approve",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_spender"
      },
      {
        "type": "uint256",
        "name": "_id"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "approveBySig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_spender"
      },
      {
        "type": "bool",
        "name": "_operator"
      },
      {
        "type": "uint256",
        "name": "_id"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "uint256",
        "name": "_nonce"
      },
      {
        "type": "uint48",
        "name": "_deadline"
      },
      {
        "type": "bytes",
        "name": "_signature"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "batchDeposit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_receivers"
      },
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256[]",
        "name": "_amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_receivers"
      },
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256[]",
        "name": "_amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "decimals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
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
        "name": "_receiver"
      },
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "eip712Domain",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes1",
        "name": "fields"
      },
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "version"
      },
      {
        "type": "uint256",
        "name": "chainId"
      },
      {
        "type": "address",
        "name": "verifyingContract"
      },
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "uint256[]",
        "name": "extensions"
      }
    ]
  },
  {
    "name": "invalidateNonce",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_nonce"
      }
    ],
    "outputs": []
  },
  {
    "name": "isOperator",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "operator"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "approved"
      }
    ]
  },
  {
    "name": "isValidNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_from"
      },
      {
        "type": "uint256",
        "name": "_nonce"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "name",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "nonceBitMap",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "uint256",
        "name": "word"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "bitMap"
      }
    ]
  },
  {
    "name": "setOperator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_operator"
      },
      {
        "type": "bool",
        "name": "_approved"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "setWithdrawConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_config",
        "components": [
          {
            "type": "uint16",
            "name": "incentive"
          },
          {
            "type": "bool",
            "name": "paused"
          }
        ]
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
        "name": "_interfaceId"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "supported"
      }
    ]
  },
  {
    "name": "symbol",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "temporaryApproveAndCall",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_spender"
      },
      {
        "type": "bool",
        "name": "_operator"
      },
      {
        "type": "uint256",
        "name": "_id"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "address",
        "name": "_target"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "temporaryApproveAndCallBySig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_spender"
      },
      {
        "type": "bool",
        "name": "_operator"
      },
      {
        "type": "uint256",
        "name": "_id"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "address",
        "name": "_target"
      },
      {
        "type": "bytes",
        "name": "_data"
      },
      {
        "type": "uint256",
        "name": "_nonce"
      },
      {
        "type": "uint48",
        "name": "_deadline"
      },
      {
        "type": "bytes",
        "name": "_signature"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "transfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_receiver"
      },
      {
        "type": "uint256",
        "name": "_id"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "transferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_sender"
      },
      {
        "type": "address",
        "name": "_receiver"
      },
      {
        "type": "uint256",
        "name": "_id"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address[]",
        "name": "_tokens"
      },
      {
        "type": "uint256[]",
        "name": "_amounts"
      },
      {
        "type": "address",
        "name": "_withdrawer"
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
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawConfig",
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
        "type": "uint16",
        "name": "incentive"
      },
      {
        "type": "bool",
        "name": "paused"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract