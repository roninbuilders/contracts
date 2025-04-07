import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 190,
  address: '0x3a860626b0467809d50c58bef89b8ac6247fd62a' as const,
  contract_name: 'Registry',
  display_name: 'Registry',
  is_deprecated: true,
  is_proxy: false,
  proxy_to: false,
  created_at: 1611574096,
  abi: [
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "AdminRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "ContractAddressUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "_name",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "_code",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_newAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "TokenMapped",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_mainchainToken",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_sidechainToken",
        "indexed": true
      },
      {
        "type": "uint32",
        "name": "_standard"
      }
    ]
  },
  {
    "name": "ACKNOWLEDGEMENT",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "GATEWAY",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "VALIDATOR",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "WETH_TOKEN",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "admin",
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
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "clearMapToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_mainchainToken"
      },
      {
        "type": "address",
        "name": "_sidechainToken"
      }
    ],
    "outputs": []
  },
  {
    "name": "contractAddresses",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getCode",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "string",
        "name": "_name"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getContract",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "_name"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "_address"
      }
    ]
  },
  {
    "name": "getMappedToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "bool",
        "name": "_isMainchain"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "_mainchainToken"
      },
      {
        "type": "address",
        "name": "_sidechainToken"
      },
      {
        "type": "uint32",
        "name": "_standard"
      }
    ]
  },
  {
    "name": "isTokenMapped",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint32",
        "name": "_standard"
      },
      {
        "type": "bool",
        "name": "_isMainchain"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "mainchainMap",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "mainchainToken"
      },
      {
        "type": "address",
        "name": "sidechainToken"
      },
      {
        "type": "uint32",
        "name": "standard"
      }
    ]
  },
  {
    "name": "mapToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_mainchainToken"
      },
      {
        "type": "address",
        "name": "_sidechainToken"
      },
      {
        "type": "uint32",
        "name": "_standard"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "sidechainMap",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "mainchainToken"
      },
      {
        "type": "address",
        "name": "sidechainToken"
      },
      {
        "type": "uint32",
        "name": "standard"
      }
    ]
  },
  {
    "name": "updateContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_name"
      },
      {
        "type": "address",
        "name": "_newAddress"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract