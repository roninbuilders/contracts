import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27691,
  address: '0x591aa9dff01b8144dc17cb416001d9ac84b951cd' as const,
  contract_name: 'MultisigWallet',
  display_name: 'Multisig Wallet',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742222651,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "threshold"
      },
      {
        "type": "address[]",
        "name": "signers"
      },
      {
        "type": "address[]",
        "name": "guardians"
      },
      {
        "type": "bytes4[]",
        "name": "fallbackReturnSelectors"
      },
      {
        "type": "bytes[]",
        "name": "fallbackReturnData"
      }
    ]
  },
  {
    "name": "MultisigWallet__CallReverted",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "result"
      }
    ]
  },
  {
    "name": "MultisigWallet__CallerMustBeWallet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MultisigWallet__FallbackNotHandled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MultisigWallet__InvalidArrayLengths",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MultisigWallet__InvalidGuardianSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MultisigWallet__InvalidSignatures",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MultisigWallet__InvalidSignerSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MultisigWallet__InvalidV",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MultisigWallet__NotEnoughSignatures",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MultisigWallet__ToHasNoCode",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyDirectCalls",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TStoreAlreadyActivated",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TStoreNotSupported",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TloadTestContractDeploymentFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BatchTransactionExecuted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "batchTxHash",
        "indexed": true
      },
      {
        "type": "bytes[]",
        "name": "results"
      }
    ]
  },
  {
    "name": "FallbackReturnUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes4",
        "name": "selector",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "enabled"
      },
      {
        "type": "bytes",
        "name": "returnData"
      }
    ]
  },
  {
    "name": "SignerSetReplaced",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "newSignerSetId"
      },
      {
        "type": "uint32",
        "name": "newThreshold"
      },
      {
        "type": "address[]",
        "name": "newSignerAddresses"
      },
      {
        "type": "address[]",
        "name": "newGuardianAddresses"
      }
    ]
  },
  {
    "name": "TransactionExecuted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "txHash",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "result"
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "__activateTstore",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "batchSetSignerSet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "batchThreshold"
      },
      {
        "type": "address[][]",
        "name": "batchSigners"
      },
      {
        "type": "address[][]",
        "name": "batchGuardians"
      },
      {
        "type": "tuple[][]",
        "name": "batchSignatures",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "batchGuardianSignature",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "chainDomainSeparator",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32",
        "name": "chainDomainSeparatorHash"
      }
    ]
  },
  {
    "name": "chainlessDomainSeparator",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32",
        "name": "chainlessDomainSeparatorHash"
      }
    ]
  },
  {
    "name": "checkSignaturesForExecuteTransaction",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hash"
      },
      {
        "type": "tuple[]",
        "name": "signatures",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "checkSignaturesForSetSignerSet",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hash"
      },
      {
        "type": "tuple[]",
        "name": "signatures",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "guardianSignature",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "crossChainNonceBuckets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "currentNonce",
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
    "name": "executeBatchTransaction",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "transactions",
        "components": [
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
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "signatures",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "executeCrossChainTransactions",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "transactions",
        "components": [
          {
            "type": "uint256",
            "name": "bucket"
          },
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
          }
        ]
      },
      {
        "type": "tuple[][]",
        "name": "signatures",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "executeTransaction",
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
        "type": "tuple[]",
        "name": "signatures",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "fallbackReturns",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "enabled"
      },
      {
        "type": "bytes",
        "name": "returnData"
      }
    ]
  },
  {
    "name": "getBatchTransactionHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "tuple[]",
        "name": "transactions",
        "components": [
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
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ]
  },
  {
    "name": "getBatchTransactionHashWithCurrentNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "transactions",
        "components": [
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
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ]
  },
  {
    "name": "getCrossChainTransactionHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "tuple",
        "name": "transaction",
        "components": [
          {
            "type": "uint256",
            "name": "bucket"
          },
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
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ]
  },
  {
    "name": "getCrossChainTransactionHashWithCurrentNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "transaction",
        "components": [
          {
            "type": "uint256",
            "name": "bucket"
          },
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
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ]
  },
  {
    "name": "getCurrentSignerSetId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32",
        "name": "currentSignerSetId"
      }
    ]
  },
  {
    "name": "getGuardians",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "guardians"
      }
    ]
  },
  {
    "name": "getSignerSetHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "threshold"
      },
      {
        "type": "address[]",
        "name": "signers"
      },
      {
        "type": "address[]",
        "name": "guardians"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ]
  },
  {
    "name": "getSigners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "signers"
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
        "type": "uint256",
        "name": "threshold"
      }
    ]
  },
  {
    "name": "getTransactionHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce"
      },
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
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ]
  },
  {
    "name": "getTransactionHashWithCurrentNonce",
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
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ]
  },
  {
    "name": "isSigner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "signer"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "addressIsSigner"
      }
    ]
  },
  {
    "name": "setFallbackReturnData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes4",
        "name": "selector"
      },
      {
        "type": "bool",
        "name": "enabled"
      },
      {
        "type": "bytes",
        "name": "returnData"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSignerSet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "threshold"
      },
      {
        "type": "address[]",
        "name": "signers"
      },
      {
        "type": "address[]",
        "name": "guardians"
      },
      {
        "type": "tuple[]",
        "name": "signatures",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "guardianSignature",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
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