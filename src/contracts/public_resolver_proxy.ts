import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1134,
  address: '0xadb077d236d9e81fb24b96ae9cb8089ab9942d48' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Public Resolver Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x507eb5107c59a2b5af923c38e83af8d59443b62d',
  created_at: 1699254612,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "address",
        "name": "admin_"
      },
      {
        "type": "bytes",
        "name": "_data"
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
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": []
  },
  {
    "name": "InvalidContentType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ABIChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "contentType",
        "indexed": true
      }
    ]
  },
  {
    "name": "AddrChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node",
        "indexed": true
      },
      {
        "type": "address",
        "name": "addr"
      }
    ]
  },
  {
    "name": "ApprovalForAll",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "approved"
      }
    ]
  },
  {
    "name": "Approved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "bytes32",
        "name": "node",
        "indexed": true
      },
      {
        "type": "address",
        "name": "delegate",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "approved",
        "indexed": true
      }
    ]
  },
  {
    "name": "ContentHashChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "hash"
      }
    ]
  },
  {
    "name": "DNSRecordChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "name"
      },
      {
        "type": "uint16",
        "name": "resource"
      },
      {
        "type": "bytes",
        "name": "record"
      }
    ]
  },
  {
    "name": "DNSRecordDeleted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "name"
      },
      {
        "type": "uint16",
        "name": "resource"
      }
    ]
  },
  {
    "name": "DNSZonehashChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "lastzonehash"
      },
      {
        "type": "bytes",
        "name": "zonehash"
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
    "name": "InterfaceChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node",
        "indexed": true
      },
      {
        "type": "bytes4",
        "name": "interfaceID",
        "indexed": true
      },
      {
        "type": "address",
        "name": "implementer"
      }
    ]
  },
  {
    "name": "NameChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node",
        "indexed": true
      },
      {
        "type": "string",
        "name": "name"
      }
    ]
  },
  {
    "name": "PubkeyChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "x"
      },
      {
        "type": "bytes32",
        "name": "y"
      }
    ]
  },
  {
    "name": "TextChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node",
        "indexed": true
      },
      {
        "type": "string",
        "name": "indexedKey",
        "indexed": true
      },
      {
        "type": "string",
        "name": "key"
      },
      {
        "type": "string",
        "name": "value"
      }
    ]
  },
  {
    "name": "VersionChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "newVersion"
      }
    ]
  },
  {
    "name": "ABI",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
      {
        "type": "uint256",
        "name": "contentTypes"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "addr",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "clearRecords",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      }
    ],
    "outputs": []
  },
  {
    "name": "contentHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "dnsRecord",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
      {
        "type": "bytes32",
        "name": "name"
      },
      {
        "type": "uint16",
        "name": "resource"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "getRNSUnified",
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
    "name": "getReverseRegistrar",
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
    "name": "hasDNSRecords",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
      {
        "type": "bytes32",
        "name": "name"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
        "name": "rnsUnified"
      },
      {
        "type": "address",
        "name": "reverseRegistrar"
      }
    ],
    "outputs": []
  },
  {
    "name": "interfaceImplementer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
      {
        "type": "bytes4",
        "name": "interfaceID"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "isAuthorized",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "authorized"
      }
    ]
  },
  {
    "name": "multicall",
    "type": "function",
    "stateMutability": "nonpayable",
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
    "name": "multicallWithNodeCheck",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
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
    "name": "name",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "pubkey",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "x"
      },
      {
        "type": "bytes32",
        "name": "y"
      }
    ]
  },
  {
    "name": "recordVersions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "setABI",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
      {
        "type": "uint256",
        "name": "contentType"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "setAddr",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
      {
        "type": "address",
        "name": "addr_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setContentHash",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
      {
        "type": "bytes",
        "name": "hash"
      }
    ],
    "outputs": []
  },
  {
    "name": "setDNSRecords",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "setInterface",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
      {
        "type": "bytes4",
        "name": "interfaceID"
      },
      {
        "type": "address",
        "name": "implementer"
      }
    ],
    "outputs": []
  },
  {
    "name": "setName",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
      {
        "type": "string",
        "name": "newName"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPubkey",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
      {
        "type": "bytes32",
        "name": "x"
      },
      {
        "type": "bytes32",
        "name": "y"
      }
    ],
    "outputs": []
  },
  {
    "name": "setText",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
      {
        "type": "string",
        "name": "key"
      },
      {
        "type": "string",
        "name": "value"
      }
    ],
    "outputs": []
  },
  {
    "name": "setZonehash",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
      {
        "type": "bytes",
        "name": "hash"
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
        "name": "interfaceID"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "text",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      },
      {
        "type": "string",
        "name": "key"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "tryMulticall",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "requireSuccess"
      },
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
    "name": "zonehash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "node"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract