import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37610,
  address: '0x43a9bbcede831e711b6959b04f3472c4b5c2790f' as const,
  contract_name: 'MokuVaultV2',
  display_name: 'Moku Vault V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1761323110,
  abi: [
  {
    "name": "AddressInsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "_account"
      }
    ]
  },
  {
    "name": "ArrayLenghtsMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotApprovedRedeemer",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "_sender"
      }
    ]
  },
  {
    "name": "NotEmergencyPauser",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "_sender"
      }
    ]
  },
  {
    "name": "TokenTypeNotSupported",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenType"
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
    "name": "Paused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "PauserUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_pauser",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "_status"
      }
    ]
  },
  {
    "name": "RedeemerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_redeemer",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "_status"
      }
    ]
  },
  {
    "name": "TokenRedeemed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_redeemer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_tokenAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "uint256",
        "name": "_tokenAmount"
      },
      {
        "type": "address",
        "name": "_to",
        "indexed": true
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "emergencyPause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "emergencyPausers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "pauser"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "onERC1155BatchReceived",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "onERC1155Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
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
    "name": "paused",
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
    "name": "redeemToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "uint256",
        "name": "_tokenType"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "uint256",
        "name": "_tokenAmount"
      },
      {
        "type": "address",
        "name": "_to"
      }
    ],
    "outputs": []
  },
  {
    "name": "redeemers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "redeemer"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
    "name": "rescueTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_tokenTypes"
      },
      {
        "type": "address[]",
        "name": "_tokenAddresses"
      },
      {
        "type": "uint256[]",
        "name": "_tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "_tokenAmounts"
      },
      {
        "type": "address[]",
        "name": "_toAddresses"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPauser",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_pauser"
      },
      {
        "type": "bool",
        "name": "_status"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRedeemer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_redeemer"
      },
      {
        "type": "bool",
        "name": "_status"
      }
    ],
    "outputs": []
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
    "name": "togglePause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_mustPause"
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
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract