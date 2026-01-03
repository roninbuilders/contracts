import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37780,
  address: '0x04ddba11b048b3e0186cd7772900ae174d73e22f' as const,
  contract_name: 'Uint256Component',
  display_name: 'Uint 256 Component',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1762883728,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "gameRegistryAddress"
      }
    ]
  },
  {
    "name": "InvalidBatchData",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "entityCount"
      },
      {
        "type": "uint256",
        "name": "valueCount"
      }
    ]
  },
  {
    "name": "InvalidGameRegistry",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MissingRole",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "expectedRole"
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
    "name": "batchRemove",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "entities"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchSetBytes",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "entities"
      },
      {
        "type": "bytes[]",
        "name": "values"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchSetValue",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "entities"
      },
      {
        "type": "tuple[]",
        "name": "values",
        "components": [
          {
            "type": "uint256",
            "name": "value"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "gameRegistry",
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
    "name": "getByteValues",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "values"
      }
    ]
  },
  {
    "name": "getBytes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "value"
      }
    ]
  },
  {
    "name": "getGameRegistry",
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
    "name": "getId",
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
    "name": "getLayoutValue",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "value",
        "components": [
          {
            "type": "uint256",
            "name": "value"
          }
        ]
      }
    ]
  },
  {
    "name": "getSchema",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "string[]",
        "name": "keys"
      },
      {
        "type": "uint8[]",
        "name": "values"
      }
    ]
  },
  {
    "name": "getValue",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "has",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isTrustedForwarder",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "forwarder"
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
    "name": "remove",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
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
    "name": "setBytes",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
      },
      {
        "type": "bytes",
        "name": "value"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGameRegistry",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "gameRegistryAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLayoutValue",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
      },
      {
        "type": "tuple",
        "name": "value",
        "components": [
          {
            "type": "uint256",
            "name": "value"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setValue",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
      },
      {
        "type": "uint256",
        "name": "value"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract