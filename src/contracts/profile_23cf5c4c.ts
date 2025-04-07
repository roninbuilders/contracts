import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 814,
  address: '0x84e66e2d8b634036c6b719a72ea49d3923cf5c4c' as const,
  contract_name: 'Profile',
  display_name: 'Profile',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1696244654,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ErrContractTypeNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      }
    ]
  },
  {
    "name": "ErrDuplicatedInfo",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "infoType"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "ErrDuplicatedPubkey",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "pubkey"
      }
    ]
  },
  {
    "name": "ErrExistentProfile",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrIdAndConsensusDiffer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNonExistentProfile",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnauthorized",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "uint8",
        "name": "expectedRole"
      }
    ]
  },
  {
    "name": "ErrZeroAddress",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "infoType"
      }
    ]
  },
  {
    "name": "ErrZeroCodeContract",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ]
  },
  {
    "name": "ErrZeroPubkey",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType",
        "indexed": true
      },
      {
        "type": "address",
        "name": "addr",
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
    "name": "ProfileAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "id",
        "indexed": true
      }
    ]
  },
  {
    "name": "ProfileAddressChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "id",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "addressType",
        "indexed": true
      }
    ]
  },
  {
    "name": "PubkeyChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "id",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "pubkey"
      }
    ]
  },
  {
    "name": "addNewProfile",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "profile",
        "components": [
          {
            "type": "address",
            "name": "id"
          },
          {
            "type": "address",
            "name": "consensus"
          },
          {
            "type": "address",
            "name": "admin"
          },
          {
            "type": "address",
            "name": "treasury"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "bytes",
            "name": "pubkey"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "changePubkey",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "id"
      },
      {
        "type": "bytes",
        "name": "pubkey"
      }
    ],
    "outputs": []
  },
  {
    "name": "getContract",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "contract_"
      }
    ]
  },
  {
    "name": "getId2Profile",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "id"
          },
          {
            "type": "address",
            "name": "consensus"
          },
          {
            "type": "address",
            "name": "admin"
          },
          {
            "type": "address",
            "name": "treasury"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "bytes",
            "name": "pubkey"
          }
        ]
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
        "name": "validatorContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "migrateTestnet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "registerProfile",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "profile",
        "components": [
          {
            "type": "address",
            "name": "id"
          },
          {
            "type": "address",
            "name": "consensus"
          },
          {
            "type": "address",
            "name": "admin"
          },
          {
            "type": "address",
            "name": "treasury"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "bytes",
            "name": "pubkey"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      },
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract