import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5906,
  address: '0x2e1626e16ba42b9cb0a5f041b994f15e4a314b6d' as const,
  contract_name: 'KDRVesting',
  display_name: 'KDR Vesting',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1734455094,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ]
  },
  {
    "name": "ALREADY_ACTIVE",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Claim",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "msgSender",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bool",
        "name": "active"
      }
    ]
  },
  {
    "name": "Clawback",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "Create",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "start"
      },
      {
        "type": "uint256",
        "name": "end"
      },
      {
        "type": "uint256",
        "name": "unlockFrequency"
      },
      {
        "type": "uint256",
        "name": "cliff"
      },
      {
        "type": "uint256",
        "name": "unlockPerPeriod"
      },
      {
        "type": "bool",
        "name": "active"
      },
      {
        "type": "uint256",
        "name": "vested"
      },
      {
        "type": "uint256",
        "name": "instantUnlock"
      },
      {
        "type": "uint256",
        "name": "instantUnlockTransfer"
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
    "name": "TransferVesting",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldRecipient",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newRecipient",
        "indexed": true
      }
    ]
  },
  {
    "name": "claim",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimable",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_recipient"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "clawback",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "create",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_recipient"
      },
      {
        "type": "uint256",
        "name": "_start"
      },
      {
        "type": "uint256",
        "name": "_length"
      },
      {
        "type": "uint256",
        "name": "_unlockFrequency"
      },
      {
        "type": "uint256",
        "name": "_cliff"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "uint256",
        "name": "_instantUnlock"
      }
    ],
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
    "name": "recipients",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint64",
        "name": "start"
      },
      {
        "type": "uint64",
        "name": "end"
      },
      {
        "type": "uint64",
        "name": "lastUnlock"
      },
      {
        "type": "uint32",
        "name": "cliff"
      },
      {
        "type": "uint32",
        "name": "unlockFrequency"
      },
      {
        "type": "uint248",
        "name": "unlockPerPeriod"
      },
      {
        "type": "bool",
        "name": "active"
      },
      {
        "type": "uint256",
        "name": "vested"
      },
      {
        "type": "uint256",
        "name": "claimed"
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
    "name": "token",
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
    "name": "transferVesting",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_oldRecipient"
      },
      {
        "type": "address",
        "name": "_newRecipient"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract