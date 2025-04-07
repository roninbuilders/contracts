import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1925,
  address: '0x00000000000000447e69651d841bd8d104bed493' as const,
  contract_name: 'DelegateRegistry',
  display_name: 'Delegate Registry',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1710836780,
  abi: [
  {
    "name": "MulticallFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DelegateAll",
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
      },
      {
        "type": "bytes32",
        "name": "rights"
      },
      {
        "type": "bool",
        "name": "enable"
      }
    ]
  },
  {
    "name": "DelegateContract",
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
      },
      {
        "type": "address",
        "name": "contract_",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "rights"
      },
      {
        "type": "bool",
        "name": "enable"
      }
    ]
  },
  {
    "name": "DelegateERC1155",
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
      },
      {
        "type": "address",
        "name": "contract_",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes32",
        "name": "rights"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "DelegateERC20",
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
      },
      {
        "type": "address",
        "name": "contract_",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "rights"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "DelegateERC721",
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
      },
      {
        "type": "address",
        "name": "contract_",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes32",
        "name": "rights"
      },
      {
        "type": "bool",
        "name": "enable"
      }
    ]
  },
  {
    "name": "checkDelegateForAll",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "bytes32",
        "name": "rights"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "valid"
      }
    ]
  },
  {
    "name": "checkDelegateForContract",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "contract_"
      },
      {
        "type": "bytes32",
        "name": "rights"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "valid"
      }
    ]
  },
  {
    "name": "checkDelegateForERC1155",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "contract_"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes32",
        "name": "rights"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "checkDelegateForERC20",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "contract_"
      },
      {
        "type": "bytes32",
        "name": "rights"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "checkDelegateForERC721",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "contract_"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes32",
        "name": "rights"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "valid"
      }
    ]
  },
  {
    "name": "delegateAll",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "bytes32",
        "name": "rights"
      },
      {
        "type": "bool",
        "name": "enable"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ]
  },
  {
    "name": "delegateContract",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "contract_"
      },
      {
        "type": "bytes32",
        "name": "rights"
      },
      {
        "type": "bool",
        "name": "enable"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ]
  },
  {
    "name": "delegateERC1155",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "contract_"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes32",
        "name": "rights"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ]
  },
  {
    "name": "delegateERC20",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "contract_"
      },
      {
        "type": "bytes32",
        "name": "rights"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ]
  },
  {
    "name": "delegateERC721",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "contract_"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes32",
        "name": "rights"
      },
      {
        "type": "bool",
        "name": "enable"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ]
  },
  {
    "name": "getDelegationsFromHashes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "hashes"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "delegations_",
        "components": [
          {
            "type": "uint8",
            "name": "type_"
          },
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "address",
            "name": "from"
          },
          {
            "type": "bytes32",
            "name": "rights"
          },
          {
            "type": "address",
            "name": "contract_"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ]
  },
  {
    "name": "getIncomingDelegationHashes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": [
      {
        "type": "bytes32[]",
        "name": "delegationHashes"
      }
    ]
  },
  {
    "name": "getIncomingDelegations",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "delegations_",
        "components": [
          {
            "type": "uint8",
            "name": "type_"
          },
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "address",
            "name": "from"
          },
          {
            "type": "bytes32",
            "name": "rights"
          },
          {
            "type": "address",
            "name": "contract_"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ]
  },
  {
    "name": "getOutgoingDelegationHashes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      }
    ],
    "outputs": [
      {
        "type": "bytes32[]",
        "name": "delegationHashes"
      }
    ]
  },
  {
    "name": "getOutgoingDelegations",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "delegations_",
        "components": [
          {
            "type": "uint8",
            "name": "type_"
          },
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "address",
            "name": "from"
          },
          {
            "type": "bytes32",
            "name": "rights"
          },
          {
            "type": "address",
            "name": "contract_"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ]
  },
  {
    "name": "multicall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "results"
      }
    ]
  },
  {
    "name": "readSlot",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "location"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "contents"
      }
    ]
  },
  {
    "name": "readSlots",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "locations"
      }
    ],
    "outputs": [
      {
        "type": "bytes32[]",
        "name": "contents"
      }
    ]
  },
  {
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "pure",
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
    "name": "sweep",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract