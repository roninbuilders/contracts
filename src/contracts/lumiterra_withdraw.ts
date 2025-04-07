import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4286,
  address: '0x60928dee31cf300b0919e14e6316b174490888e2' as const,
  contract_name: 'LumiterraWithdraw',
  display_name: 'Lumiterra Withdraw',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1727689311,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_config"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "version"
      }
    ]
  },
  {
    "name": "TokenUpdate",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "gameToken",
        "indexed": true
      },
      {
        "type": "address",
        "name": "roninToken"
      }
    ]
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      }
    ]
  },
  {
    "name": "WithdrawEnabledUpdate",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "enabled"
      }
    ]
  },
  {
    "name": "WithdrawFeeRecipientUpdate",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      }
    ]
  },
  {
    "name": "WithdrawFeeUpdate",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "fee"
      }
    ]
  },
  {
    "name": "WithdrawStatusUpdateEvent",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "withdrawHash",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "status"
      }
    ]
  },
  {
    "name": "PRECENT_DENOMINATOR",
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
    "name": "_WITHDRAW_TYPEHASH",
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
    "name": "addToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "gameToken"
      },
      {
        "type": "address",
        "name": "roninToken"
      }
    ],
    "outputs": []
  },
  {
    "name": "config",
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
    "name": "crossAuthWeighted",
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
    "name": "hashTypedData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dataHash"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
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
        "name": "_crossAuthWeighted"
      }
    ],
    "outputs": []
  },
  {
    "name": "proxiableUUID",
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
    "name": "setWithdrawEnabled",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "enabled"
      }
    ],
    "outputs": []
  },
  {
    "name": "setWithdrawFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "fee"
      }
    ],
    "outputs": []
  },
  {
    "name": "setWithdrawFeeRecipient",
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
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeToAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      },
      {
        "type": "bytes",
        "name": "data"
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
        "type": "tuple",
        "name": "withdrawCalldata",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "from"
          },
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint256",
            "name": "nonce"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "poof"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawEnabled",
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
    "name": "withdrawFee",
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
    "name": "withdrawFeeRecipient",
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
    "name": "withdrawHash",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "tuple",
        "name": "withdrawCalldata",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "from"
          },
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint256",
            "name": "nonce"
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
    "name": "withdrawRollup",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "withdrawCalldata",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "from"
          },
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint256",
            "name": "nonce"
          }
        ]
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract