import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37767,
  address: '0x4337084d9e255ff0702461cf8895ce9e3b5ff108' as const,
  contract_name: 'EntryPoint',
  display_name: 'Entry Point',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1743108593,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "DelegateAndRevert",
    "type": "error",
    "inputs": [
      {
        "type": "bool",
        "name": "success"
      },
      {
        "type": "bytes",
        "name": "ret"
      }
    ]
  },
  {
    "name": "FailedOp",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "opIndex"
      },
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "name": "FailedOpWithRevert",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "opIndex"
      },
      {
        "type": "string",
        "name": "reason"
      },
      {
        "type": "bytes",
        "name": "inner"
      }
    ]
  },
  {
    "name": "InvalidShortString",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PostOpReverted",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "returnData"
      }
    ]
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SenderAddressResult",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      }
    ]
  },
  {
    "name": "SignatureValidationFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "aggregator"
      }
    ]
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
    "name": "AccountDeployed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "userOpHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "address",
        "name": "factory"
      },
      {
        "type": "address",
        "name": "paymaster"
      }
    ]
  },
  {
    "name": "BeforeExecution",
    "type": "event",
    "inputs": []
  },
  {
    "name": "Deposited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalDeposit"
      }
    ]
  },
  {
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
  },
  {
    "name": "PostOpRevertReason",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "userOpHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "bytes",
        "name": "revertReason"
      }
    ]
  },
  {
    "name": "SignatureAggregatorChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "aggregator",
        "indexed": true
      }
    ]
  },
  {
    "name": "StakeLocked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalStaked"
      },
      {
        "type": "uint256",
        "name": "unstakeDelaySec"
      }
    ]
  },
  {
    "name": "StakeUnlocked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "withdrawTime"
      }
    ]
  },
  {
    "name": "StakeWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "withdrawAddress"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "UserOperationEvent",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "userOpHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "address",
        "name": "paymaster",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "bool",
        "name": "success"
      },
      {
        "type": "uint256",
        "name": "actualGasCost"
      },
      {
        "type": "uint256",
        "name": "actualGasUsed"
      }
    ]
  },
  {
    "name": "UserOperationPrefundTooLow",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "userOpHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ]
  },
  {
    "name": "UserOperationRevertReason",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "userOpHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "bytes",
        "name": "revertReason"
      }
    ]
  },
  {
    "name": "Withdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "withdrawAddress"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "addStake",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint32",
        "name": "unstakeDelaySec"
      }
    ],
    "outputs": []
  },
  {
    "name": "balanceOf",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "delegateAndRevert",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "depositTo",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "account"
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
    "name": "getDepositInfo",
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
        "type": "tuple",
        "name": "info",
        "components": [
          {
            "type": "uint256",
            "name": "deposit"
          },
          {
            "type": "bool",
            "name": "staked"
          },
          {
            "type": "uint112",
            "name": "stake"
          },
          {
            "type": "uint32",
            "name": "unstakeDelaySec"
          },
          {
            "type": "uint48",
            "name": "withdrawTime"
          }
        ]
      }
    ]
  },
  {
    "name": "getDomainSeparatorV4",
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
    "name": "getNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      },
      {
        "type": "uint192",
        "name": "key"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "nonce"
      }
    ]
  },
  {
    "name": "getPackedUserOpTypeHash",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getSenderAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "initCode"
      }
    ],
    "outputs": []
  },
  {
    "name": "getUserOpHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "userOp",
        "components": [
          {
            "type": "address",
            "name": "sender"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "bytes",
            "name": "initCode"
          },
          {
            "type": "bytes",
            "name": "callData"
          },
          {
            "type": "bytes32",
            "name": "accountGasLimits"
          },
          {
            "type": "uint256",
            "name": "preVerificationGas"
          },
          {
            "type": "bytes32",
            "name": "gasFees"
          },
          {
            "type": "bytes",
            "name": "paymasterAndData"
          },
          {
            "type": "bytes",
            "name": "signature"
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
    "name": "handleAggregatedOps",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "opsPerAggregator",
        "components": [
          {
            "type": "tuple[]",
            "name": "userOps",
            "components": [
              {
                "type": "address",
                "name": "sender"
              },
              {
                "type": "uint256",
                "name": "nonce"
              },
              {
                "type": "bytes",
                "name": "initCode"
              },
              {
                "type": "bytes",
                "name": "callData"
              },
              {
                "type": "bytes32",
                "name": "accountGasLimits"
              },
              {
                "type": "uint256",
                "name": "preVerificationGas"
              },
              {
                "type": "bytes32",
                "name": "gasFees"
              },
              {
                "type": "bytes",
                "name": "paymasterAndData"
              },
              {
                "type": "bytes",
                "name": "signature"
              }
            ]
          },
          {
            "type": "address",
            "name": "aggregator"
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      },
      {
        "type": "address",
        "name": "beneficiary"
      }
    ],
    "outputs": []
  },
  {
    "name": "handleOps",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "ops",
        "components": [
          {
            "type": "address",
            "name": "sender"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "bytes",
            "name": "initCode"
          },
          {
            "type": "bytes",
            "name": "callData"
          },
          {
            "type": "bytes32",
            "name": "accountGasLimits"
          },
          {
            "type": "uint256",
            "name": "preVerificationGas"
          },
          {
            "type": "bytes32",
            "name": "gasFees"
          },
          {
            "type": "bytes",
            "name": "paymasterAndData"
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      },
      {
        "type": "address",
        "name": "beneficiary"
      }
    ],
    "outputs": []
  },
  {
    "name": "incrementNonce",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint192",
        "name": "key"
      }
    ],
    "outputs": []
  },
  {
    "name": "innerHandleOp",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "callData"
      },
      {
        "type": "tuple",
        "name": "opInfo",
        "components": [
          {
            "type": "tuple",
            "name": "mUserOp",
            "components": [
              {
                "type": "address",
                "name": "sender"
              },
              {
                "type": "uint256",
                "name": "nonce"
              },
              {
                "type": "uint256",
                "name": "verificationGasLimit"
              },
              {
                "type": "uint256",
                "name": "callGasLimit"
              },
              {
                "type": "uint256",
                "name": "paymasterVerificationGasLimit"
              },
              {
                "type": "uint256",
                "name": "paymasterPostOpGasLimit"
              },
              {
                "type": "uint256",
                "name": "preVerificationGas"
              },
              {
                "type": "address",
                "name": "paymaster"
              },
              {
                "type": "uint256",
                "name": "maxFeePerGas"
              },
              {
                "type": "uint256",
                "name": "maxPriorityFeePerGas"
              }
            ]
          },
          {
            "type": "bytes32",
            "name": "userOpHash"
          },
          {
            "type": "uint256",
            "name": "prefund"
          },
          {
            "type": "uint256",
            "name": "contextOffset"
          },
          {
            "type": "uint256",
            "name": "preOpGas"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "context"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "actualGasCost"
      }
    ]
  },
  {
    "name": "nonceSequenceNumber",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint192"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "senderCreator",
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
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "unlockStake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawStake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "withdrawAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "withdrawAddress"
      },
      {
        "type": "uint256",
        "name": "withdrawAmount"
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