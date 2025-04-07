import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5253,
  address: '0x771ca29e483df5447e20a89e0f00e1daf09ef534' as const,
  contract_name: 'Permit2',
  display_name: 'Permit 2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1732164718,
  abi: [
  {
    "name": "AllowanceExpired",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "deadline"
      }
    ]
  },
  {
    "name": "ExcessiveInvalidation",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientAllowance",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "InvalidAmount",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "maxAmount"
      }
    ]
  },
  {
    "name": "InvalidContractSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidNonce",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignatureLength",
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
    "name": "SignatureExpired",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "signatureDeadline"
      }
    ]
  },
  {
    "name": "SpenderIsNotPermitted",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "AllSpendersPermitted",
    "type": "event",
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
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "spender",
        "indexed": true
      },
      {
        "type": "uint160",
        "name": "amount"
      },
      {
        "type": "uint48",
        "name": "expiration"
      }
    ]
  },
  {
    "name": "Lockdown",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "spender"
      }
    ]
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
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "spender",
        "indexed": true
      },
      {
        "type": "uint48",
        "name": "newNonce"
      },
      {
        "type": "uint48",
        "name": "oldNonce"
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
    "name": "Permit",
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
        "name": "spender",
        "indexed": true
      },
      {
        "type": "uint160",
        "name": "amount"
      },
      {
        "type": "uint48",
        "name": "expiration"
      },
      {
        "type": "uint48",
        "name": "nonce"
      }
    ]
  },
  {
    "name": "SpenderPermitUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "caller",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "permitFlag"
      }
    ]
  },
  {
    "name": "UnorderedNonceInvalidation",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "word"
      },
      {
        "type": "uint256",
        "name": "mask"
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
    "name": "allowance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint160",
        "name": "amount"
      },
      {
        "type": "uint48",
        "name": "expiration"
      },
      {
        "type": "uint48",
        "name": "nonce"
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
        "name": "token"
      },
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint160",
        "name": "amount"
      },
      {
        "type": "uint48",
        "name": "expiration"
      }
    ],
    "outputs": []
  },
  {
    "name": "areAllSpendersPermitted",
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
    "name": "invalidateNonces",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint48",
        "name": "newNonce"
      }
    ],
    "outputs": []
  },
  {
    "name": "invalidateUnorderedNonces",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "wordPos"
      },
      {
        "type": "uint256",
        "name": "mask"
      }
    ],
    "outputs": []
  },
  {
    "name": "isPermittedSpender",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "lockdown",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "approvals",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "address",
            "name": "spender"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "nonceBitmap",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "permit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "tuple",
        "name": "permitBatch",
        "components": [
          {
            "type": "tuple[]",
            "name": "details",
            "components": [
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint160",
                "name": "amount"
              },
              {
                "type": "uint48",
                "name": "expiration"
              },
              {
                "type": "uint48",
                "name": "nonce"
              }
            ]
          },
          {
            "type": "address",
            "name": "spender"
          },
          {
            "type": "uint256",
            "name": "sigDeadline"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "permit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "tuple",
        "name": "permitSingle",
        "components": [
          {
            "type": "tuple",
            "name": "details",
            "components": [
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint160",
                "name": "amount"
              },
              {
                "type": "uint48",
                "name": "expiration"
              },
              {
                "type": "uint48",
                "name": "nonce"
              }
            ]
          },
          {
            "type": "address",
            "name": "spender"
          },
          {
            "type": "uint256",
            "name": "sigDeadline"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "permitSpender",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bool",
        "name": "isPermitted"
      }
    ],
    "outputs": []
  },
  {
    "name": "permitTransferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "permit",
        "components": [
          {
            "type": "tuple",
            "name": "permitted",
            "components": [
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "deadline"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "transferDetails",
        "components": [
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint256",
            "name": "requestedAmount"
          }
        ]
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "permitTransferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "permit",
        "components": [
          {
            "type": "tuple[]",
            "name": "permitted",
            "components": [
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "deadline"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "transferDetails",
        "components": [
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint256",
            "name": "requestedAmount"
          }
        ]
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "permitWitnessTransferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "permit",
        "components": [
          {
            "type": "tuple",
            "name": "permitted",
            "components": [
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "deadline"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "transferDetails",
        "components": [
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint256",
            "name": "requestedAmount"
          }
        ]
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "bytes32",
        "name": "witness"
      },
      {
        "type": "string",
        "name": "witnessTypeString"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "permitWitnessTransferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "permit",
        "components": [
          {
            "type": "tuple[]",
            "name": "permitted",
            "components": [
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "deadline"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "transferDetails",
        "components": [
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint256",
            "name": "requestedAmount"
          }
        ]
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "bytes32",
        "name": "witness"
      },
      {
        "type": "string",
        "name": "witnessTypeString"
      },
      {
        "type": "bytes",
        "name": "signature"
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
    "name": "transferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "transferDetails",
        "components": [
          {
            "type": "address",
            "name": "from"
          },
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint160",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "token"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "transferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint160",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "token"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract