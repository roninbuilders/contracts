import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35942,
  address: '0xfe067d16abe491a427e422921cfd314e4a09ecd1' as const,
  contract_name: 'NonceManager',
  display_name: 'Nonce Manager',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751314682,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "authorizedCallers"
      }
    ]
  },
  {
    "name": "CannotTransferToSelf",
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
    "name": "OwnerCannotBeZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PreviousRampAlreadySet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnauthorizedCaller",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      }
    ]
  },
  {
    "name": "ZeroAddressNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AuthorizedCallerAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      }
    ]
  },
  {
    "name": "AuthorizedCallerRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
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
    "name": "PreviousRampsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "prevRamp",
        "components": [
          {
            "type": "address",
            "name": "prevOnRamp"
          },
          {
            "type": "address",
            "name": "prevOffRamp"
          }
        ]
      }
    ]
  },
  {
    "name": "SkippedIncorrectNonce",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      },
      {
        "type": "uint64",
        "name": "nonce"
      },
      {
        "type": "bytes",
        "name": "sender"
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
    "name": "applyAuthorizedCallerUpdates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "authorizedCallerArgs",
        "components": [
          {
            "type": "address[]",
            "name": "addedCallers"
          },
          {
            "type": "address[]",
            "name": "removedCallers"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "applyPreviousRampsUpdates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "previousRampsArgs",
        "components": [
          {
            "type": "uint64",
            "name": "remoteChainSelector"
          },
          {
            "type": "bool",
            "name": "overrideExistingRamps"
          },
          {
            "type": "tuple",
            "name": "prevRamps",
            "components": [
              {
                "type": "address",
                "name": "prevOnRamp"
              },
              {
                "type": "address",
                "name": "prevOffRamp"
              }
            ]
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "getAllAuthorizedCallers",
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
    "name": "getInboundNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      },
      {
        "type": "bytes",
        "name": "sender"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "getIncrementedOutboundNonce",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      },
      {
        "type": "address",
        "name": "sender"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "getOutboundNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      },
      {
        "type": "address",
        "name": "sender"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "getPreviousRamps",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "chainSelector"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "prevOnRamp"
          },
          {
            "type": "address",
            "name": "prevOffRamp"
          }
        ]
      }
    ]
  },
  {
    "name": "incrementInboundNonce",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64",
        "name": "sourceChainSelector"
      },
      {
        "type": "uint64",
        "name": "expectedNonce"
      },
      {
        "type": "bytes",
        "name": "sender"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract