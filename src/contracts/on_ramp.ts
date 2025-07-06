import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35941,
  address: '0x530ae314ec3fa038bd9a215095e37295ec76162a' as const,
  contract_name: 'OnRamp',
  display_name: 'On Ramp',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751314697,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "staticConfig",
        "components": [
          {
            "type": "uint64",
            "name": "chainSelector"
          },
          {
            "type": "address",
            "name": "rmnRemote"
          },
          {
            "type": "address",
            "name": "nonceManager"
          },
          {
            "type": "address",
            "name": "tokenAdminRegistry"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "dynamicConfig",
        "components": [
          {
            "type": "address",
            "name": "feeQuoter"
          },
          {
            "type": "bool",
            "name": "reentrancyGuardEntered"
          },
          {
            "type": "address",
            "name": "messageInterceptor"
          },
          {
            "type": "address",
            "name": "feeAggregator"
          },
          {
            "type": "address",
            "name": "allowlistAdmin"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "destChainConfigArgs",
        "components": [
          {
            "type": "uint64",
            "name": "destChainSelector"
          },
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "bool",
            "name": "allowlistEnabled"
          }
        ]
      }
    ]
  },
  {
    "name": "CannotSendZeroTokens",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CannotTransferToSelf",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CursedByRMN",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      }
    ]
  },
  {
    "name": "GetSupportedTokensFunctionalityRemovedCheckAdminRegistry",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAllowListRequest",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      }
    ]
  },
  {
    "name": "InvalidConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidDestChainConfig",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      }
    ]
  },
  {
    "name": "MustBeCalledByRouter",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MustBeProposedOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCallableByOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCallableByOwnerOrAllowlistAdmin",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnerCannotBeZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RouterMustSetOriginalSender",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SenderNotAllowed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      }
    ]
  },
  {
    "name": "UnsupportedToken",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "AllowListAdminSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "allowlistAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "AllowListSendersAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "senders"
      }
    ]
  },
  {
    "name": "AllowListSendersRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "senders"
      }
    ]
  },
  {
    "name": "CCIPMessageSent",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "sequenceNumber",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "message",
        "components": [
          {
            "type": "tuple",
            "name": "header",
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
                "type": "uint64",
                "name": "destChainSelector"
              },
              {
                "type": "uint64",
                "name": "sequenceNumber"
              },
              {
                "type": "uint64",
                "name": "nonce"
              }
            ]
          },
          {
            "type": "address",
            "name": "sender"
          },
          {
            "type": "bytes",
            "name": "data"
          },
          {
            "type": "bytes",
            "name": "receiver"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          },
          {
            "type": "address",
            "name": "feeToken"
          },
          {
            "type": "uint256",
            "name": "feeTokenAmount"
          },
          {
            "type": "uint256",
            "name": "feeValueJuels"
          },
          {
            "type": "tuple[]",
            "name": "tokenAmounts",
            "components": [
              {
                "type": "address",
                "name": "sourcePoolAddress"
              },
              {
                "type": "bytes",
                "name": "destTokenAddress"
              },
              {
                "type": "bytes",
                "name": "extraData"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "bytes",
                "name": "destExecData"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "ConfigSet",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "staticConfig",
        "components": [
          {
            "type": "uint64",
            "name": "chainSelector"
          },
          {
            "type": "address",
            "name": "rmnRemote"
          },
          {
            "type": "address",
            "name": "nonceManager"
          },
          {
            "type": "address",
            "name": "tokenAdminRegistry"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "dynamicConfig",
        "components": [
          {
            "type": "address",
            "name": "feeQuoter"
          },
          {
            "type": "bool",
            "name": "reentrancyGuardEntered"
          },
          {
            "type": "address",
            "name": "messageInterceptor"
          },
          {
            "type": "address",
            "name": "feeAggregator"
          },
          {
            "type": "address",
            "name": "allowlistAdmin"
          }
        ]
      }
    ]
  },
  {
    "name": "DestChainConfigSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "sequenceNumber"
      },
      {
        "type": "address",
        "name": "router"
      },
      {
        "type": "bool",
        "name": "allowlistEnabled"
      }
    ]
  },
  {
    "name": "FeeTokenWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "feeAggregator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "feeToken",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "applyAllowlistUpdates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "allowlistConfigArgsItems",
        "components": [
          {
            "type": "uint64",
            "name": "destChainSelector"
          },
          {
            "type": "bool",
            "name": "allowlistEnabled"
          },
          {
            "type": "address[]",
            "name": "addedAllowlistedSenders"
          },
          {
            "type": "address[]",
            "name": "removedAllowlistedSenders"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "applyDestChainConfigUpdates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "destChainConfigArgs",
        "components": [
          {
            "type": "uint64",
            "name": "destChainSelector"
          },
          {
            "type": "address",
            "name": "router"
          },
          {
            "type": "bool",
            "name": "allowlistEnabled"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "forwardFromRouter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
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
      },
      {
        "type": "uint256",
        "name": "feeTokenAmount"
      },
      {
        "type": "address",
        "name": "originalSender"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getAllowedSendersList",
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
        "type": "bool",
        "name": "isEnabled"
      },
      {
        "type": "address[]",
        "name": "configuredAddresses"
      }
    ]
  },
  {
    "name": "getDestChainConfig",
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
        "type": "uint64",
        "name": "sequenceNumber"
      },
      {
        "type": "bool",
        "name": "allowlistEnabled"
      },
      {
        "type": "address",
        "name": "router"
      }
    ]
  },
  {
    "name": "getDynamicConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "name": "dynamicConfig",
        "components": [
          {
            "type": "address",
            "name": "feeQuoter"
          },
          {
            "type": "bool",
            "name": "reentrancyGuardEntered"
          },
          {
            "type": "address",
            "name": "messageInterceptor"
          },
          {
            "type": "address",
            "name": "feeAggregator"
          },
          {
            "type": "address",
            "name": "allowlistAdmin"
          }
        ]
      }
    ]
  },
  {
    "name": "getExpectedNextSequenceNumber",
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
        "type": "uint64"
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
        "name": "destChainSelector"
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
        "name": "feeTokenAmount"
      }
    ]
  },
  {
    "name": "getPoolBySourceToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64"
      },
      {
        "type": "address",
        "name": "sourceToken"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getStaticConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint64",
            "name": "chainSelector"
          },
          {
            "type": "address",
            "name": "rmnRemote"
          },
          {
            "type": "address",
            "name": "nonceManager"
          },
          {
            "type": "address",
            "name": "tokenAdminRegistry"
          }
        ]
      }
    ]
  },
  {
    "name": "getSupportedTokens",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint64"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
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
    "name": "setDynamicConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "dynamicConfig",
        "components": [
          {
            "type": "address",
            "name": "feeQuoter"
          },
          {
            "type": "bool",
            "name": "reentrancyGuardEntered"
          },
          {
            "type": "address",
            "name": "messageInterceptor"
          },
          {
            "type": "address",
            "name": "feeAggregator"
          },
          {
            "type": "address",
            "name": "allowlistAdmin"
          }
        ]
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
  },
  {
    "name": "withdrawFeeTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "feeTokens"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract