import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37072,
  address: '0xa334b89dbd199930f3cb35c1dc3200805dd69553' as const,
  contract_name: 'Deposit',
  display_name: 'Deposit',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: undefined,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "DepositReceived",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "ExtraRecipientAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      }
    ]
  },
  {
    "name": "ExtraRecipientRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      }
    ]
  },
  {
    "name": "ForwardModeChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "fixedEnabled"
      },
      {
        "type": "bool",
        "name": "extraEnabled"
      },
      {
        "type": "bool",
        "name": "bothEnabled"
      }
    ]
  },
  {
    "name": "ModeConfigChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "ethAmount"
      },
      {
        "type": "uint256",
        "name": "tokenAmount"
      }
    ]
  },
  {
    "name": "OwnerConfirmed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "confirmer",
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
    "name": "OwnerProposed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "proposer",
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
    "name": "PendingCleared",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "clearedBy",
        "indexed": true
      }
    ]
  },
  {
    "name": "SubOwnerAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "subOwner",
        "indexed": true
      }
    ]
  },
  {
    "name": "SubOwnerRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "subOwner",
        "indexed": true
      }
    ]
  },
  {
    "name": "TokenForwarded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalAmount"
      }
    ]
  },
  {
    "name": "addAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newRecipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "addAddressList",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "newRecipients"
      }
    ],
    "outputs": []
  },
  {
    "name": "addEthAndTokenAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "ethAmount"
      },
      {
        "type": "uint256",
        "name": "tokenAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "addSubOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "subOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "clearRequestedSubOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "confirmRequestedOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "disableAllForward",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "disableEthAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "disableEthAndTokenAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "disableTokenAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "enableAllForwardAllRecipients",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "enableExtraRecipients",
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
    "name": "enableFixedAndExtra",
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
    "name": "enableFixedRecipients",
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
    "name": "ethPerRecipient",
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
    "name": "getExtraRecipients",
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
    "name": "getFixedExtraConfigInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bool"
      },
      {
        "type": "bool"
      },
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "getFixedRecipients",
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
    "name": "getSubOwners",
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
    "name": "isSubOwner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "onExtraRecipients",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "onFixedRecipients",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
    "name": "removeAddress",
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
    "name": "removeAddressList",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "recipients"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeAllExtraRecipients",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "removeSubOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "subOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "requestNewMainOwner",
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
    "name": "tokenPerRecipient",
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
    "name": "transferTokenForward",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawNative",
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
    "name": "withdrawToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "to"
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