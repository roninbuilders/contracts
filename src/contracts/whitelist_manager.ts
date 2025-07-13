import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34840,
  address: '0x94af89eeabf0cbaf740f3eb918fcc8087704a649' as const,
  contract_name: 'WhitelistManager',
  display_name: 'Whitelist Manager',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1747208841,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "initialOwner"
      }
    ]
  },
  {
    "name": "AddressNotWhitelisted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CannotTransferToSelfOrZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EmptyListProvided",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPageConfiguration",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MismatchedArrayLengths",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnableInvalidOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "OwnableUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "WhitelistIsPaused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "WhitelistNotFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AddressesAddedToWhitelist",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "whitelistId",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "addresses"
      }
    ]
  },
  {
    "name": "AddressesRemovedFromWhitelist",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "whitelistId",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "addresses"
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
    "name": "WhitelistCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "whitelistId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "creator",
        "indexed": true
      }
    ]
  },
  {
    "name": "WhitelistPausedStateChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "whitelistId",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isPaused"
      }
    ]
  },
  {
    "name": "WhitelistRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "whitelistId",
        "indexed": true
      }
    ]
  },
  {
    "name": "WhitelistSlotTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "whitelistId",
        "indexed": true
      },
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
    "name": "addressSlotCounts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "createWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "whitelistId"
      }
    ]
  },
  {
    "name": "getUserSlotCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_whitelistId"
      },
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getWhitelistedAddressCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_whitelistId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getWhitelistedAddresses",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_whitelistId"
      },
      {
        "type": "uint256",
        "name": "_pageNumber"
      },
      {
        "type": "uint256",
        "name": "_pageSize"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "page"
      },
      {
        "type": "uint256",
        "name": "nextPageNumber"
      }
    ]
  },
  {
    "name": "isUserWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_whitelistId"
      },
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isWhitelistPaused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_whitelistId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "nextWhitelistId",
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
    "name": "removeWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_whitelistId"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setWhitelistPausedState",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_whitelistId"
      },
      {
        "type": "bool",
        "name": "_paused"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferMyWhitelistSlot",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_whitelistId"
      },
      {
        "type": "address",
        "name": "_toAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferMyWhitelistSlotInBulk",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_whitelistId"
      },
      {
        "type": "address[]",
        "name": "_toAddresses"
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
    "name": "updateWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_whitelistId"
      },
      {
        "type": "address[]",
        "name": "_addressesToAdd"
      },
      {
        "type": "address[]",
        "name": "_addressesToRemove"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistExists",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "whitelistPaused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract