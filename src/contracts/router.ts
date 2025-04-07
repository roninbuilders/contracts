import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5082,
  address: '0x46527571d5d1b68ee7eb60b18a32e6c60dceaf99' as const,
  contract_name: 'Router',
  display_name: 'Router',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1730294316,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "wrappedNative"
      },
      {
        "type": "address",
        "name": "armProxy"
      }
    ]
  },
  {
    "name": "BadARMSignal",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedToSendValue",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientFeeTokenAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidMsgValue",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRecipientAddress",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      }
    ]
  },
  {
    "name": "OffRampMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "chainSelector"
      },
      {
        "type": "address",
        "name": "offRamp"
      }
    ]
  },
  {
    "name": "OnlyOffRamp",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnsupportedDestinationChain",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      }
    ]
  },
  {
    "name": "MessageExecuted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "messageId"
      },
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      },
      {
        "type": "address",
        "name": "offRamp"
      },
      {
        "type": "bytes32",
        "name": "calldataHash"
      }
    ]
  },
  {
    "name": "OffRampAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector",
        "indexed": true
      },
      {
        "type": "address",
        "name": "offRamp"
      }
    ]
  },
  {
    "name": "OffRampRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector",
        "indexed": true
      },
      {
        "type": "address",
        "name": "offRamp"
      }
    ]
  },
  {
    "name": "OnRampSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector",
        "indexed": true
      },
      {
        "type": "address",
        "name": "onRamp"
      }
    ]
  },
  {
    "name": "OwnershipTransferRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
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
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      }
    ]
  },
  {
    "name": "MAX_RET_BYTES",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16"
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
    "name": "applyRampUpdates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "onRampUpdates",
        "components": [
          {
            "type": "uint64",
            "name": "destChainSelector"
          },
          {
            "type": "address",
            "name": "onRamp"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "offRampRemoves",
        "components": [
          {
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "address",
            "name": "offRamp"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "offRampAdds",
        "components": [
          {
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "address",
            "name": "offRamp"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "ccipSend",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint64",
        "name": "destinationChainSelector"
      },
      {
        "type": "tuple",
        "name": "message",
        "components": [
          {
            "type": "bytes",
            "name": "receiver"
          },
          {
            "type": "bytes",
            "name": "data"
          },
          {
            "type": "tuple[]",
            "name": "tokenAmounts",
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
            "type": "address",
            "name": "feeToken"
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
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getArmProxy",
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
    "name": "getFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "destinationChainSelector"
      },
      {
        "type": "tuple",
        "name": "message",
        "components": [
          {
            "type": "bytes",
            "name": "receiver"
          },
          {
            "type": "bytes",
            "name": "data"
          },
          {
            "type": "tuple[]",
            "name": "tokenAmounts",
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
            "type": "address",
            "name": "feeToken"
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
        "name": "fee"
      }
    ]
  },
  {
    "name": "getOffRamps",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "address",
            "name": "offRamp"
          }
        ]
      }
    ]
  },
  {
    "name": "getOnRamp",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getSupportedTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "chainSelector"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getWrappedNative",
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
    "name": "isChainSupported",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "chainSelector"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isOffRamp",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      },
      {
        "type": "address",
        "name": "offRamp"
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
    "name": "recoverTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "routeMessage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "message",
        "components": [
          {
            "type": "bytes32",
            "name": "messageId"
          },
          {
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "bytes",
            "name": "sender"
          },
          {
            "type": "bytes",
            "name": "data"
          },
          {
            "type": "tuple[]",
            "name": "destTokenAmounts",
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
          }
        ]
      },
      {
        "type": "uint16",
        "name": "gasForCallExactCheck"
      },
      {
        "type": "uint256",
        "name": "gasLimit"
      },
      {
        "type": "address",
        "name": "receiver"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "success"
      },
      {
        "type": "bytes",
        "name": "retData"
      },
      {
        "type": "uint256",
        "name": "gasUsed"
      }
    ]
  },
  {
    "name": "setWrappedNative",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "wrappedNative"
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
        "name": "to"
      }
    ],
    "outputs": []
  },
  {
    "name": "typeAndVersion",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract