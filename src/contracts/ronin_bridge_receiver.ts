import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27480,
  address: '0x8cdffc7197cd7558e38b289686ea0b43609572d5' as const,
  contract_name: 'RoninBridgeReceiver',
  display_name: 'Ronin Bridge Receiver',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1741823529,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "l2Router_"
      }
    ]
  },
  {
    "name": "AlreadyInitialized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BadData",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedToSendNativeToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidChainSelector",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidProposalId",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRouter",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTimelockAdmin",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ProposalNotExecutable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransactionAlreadyQueued",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferOutFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Unauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "govTimelock",
        "indexed": true
      },
      {
        "type": "address",
        "name": "localTimelock",
        "indexed": true
      }
    ]
  },
  {
    "name": "ProposalCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "rootMessageSender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "address[]",
        "name": "targets"
      },
      {
        "type": "uint256[]",
        "name": "values"
      },
      {
        "type": "string[]",
        "name": "signatures"
      },
      {
        "type": "bytes[]",
        "name": "calldatas"
      },
      {
        "type": "uint256",
        "name": "eta"
      }
    ]
  },
  {
    "name": "ProposalExecuted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
      }
    ]
  },
  {
    "name": "ccipReceive",
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
      }
    ],
    "outputs": []
  },
  {
    "name": "executeProposal",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "proposalId"
      }
    ],
    "outputs": []
  },
  {
    "name": "govTimelock",
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
        "name": "_govTimelock"
      },
      {
        "type": "address",
        "name": "_localTimelock"
      }
    ],
    "outputs": []
  },
  {
    "name": "initialized",
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
    "name": "l2Router",
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
    "name": "localTimelock",
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
    "name": "proposalCount",
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
    "name": "proposals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "eta"
      },
      {
        "type": "bool",
        "name": "executed"
      }
    ]
  },
  {
    "name": "state",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "proposalId"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
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
    "name": "sweepNativeToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "sweepToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "address",
        "name": "asset"
      }
    ],
    "outputs": []
  },
  {
    "name": "toAddress",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract