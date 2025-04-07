import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 32697,
  address: '0x0ae93e56e12d2fb34154a24272151adee3fee59d' as const,
  contract_name: 'GoldRushTrade',
  display_name: 'Gold Rush Trade',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1743625736,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tradeAgent"
      },
      {
        "type": "address",
        "name": "_treasury"
      }
    ]
  },
  {
    "name": "EmptyEscrow",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EscrowAlreadyClaimed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EthFeeNumerTooHigh",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidShortString",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotDepositor",
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
    "name": "TradeHasExistingEscrow",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroAddressNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroValueETH",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
  },
  {
    "name": "EthFeeNumerChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newFeeNumer"
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
    "name": "TradeAgentChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tradeAgent"
      }
    ]
  },
  {
    "name": "TradeEscrowDeposit",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tradeId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "TradeEscrowWithdraw",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tradeId",
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
    "name": "TradeSettled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tradeId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "seller",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "TreasuryChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "treasury"
      }
    ]
  },
  {
    "name": "calcEthFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "value"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "changeEthFeeNumer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "feeNumer"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeTradeAgent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newTradeAgent"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newTreasury"
      }
    ],
    "outputs": []
  },
  {
    "name": "depositEscrow",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tradeId"
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
    "name": "ethFeeNumer",
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
    "name": "getTradeTypedDataHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "trade",
        "components": [
          {
            "type": "address",
            "name": "buyer"
          },
          {
            "type": "address",
            "name": "seller"
          },
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "uint256",
            "name": "tradeId"
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "settleTrade",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tradeId"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "tradeAgent",
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
    "name": "tradeEscrows",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "claimed"
      },
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "uint256",
        "name": "value"
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
    "name": "treasury",
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
    "name": "withdrawEscrow",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tradeId"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract