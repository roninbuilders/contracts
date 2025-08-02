import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36507,
  address: '0x1e2086a7e84a32482ac03000d56925f607ccb708' as const,
  contract_name: 'PushSplit',
  display_name: 'Push Split',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753989640,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_splitWarehouse"
      }
    ]
  },
  {
    "name": "InvalidCalldataForEOA",
    "type": "error",
    "inputs": [
      {
        "type": "tuple",
        "name": "call",
        "components": [
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ]
  },
  {
    "name": "InvalidShortString",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSplit",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSplit_LengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSplit_TotalAllocationMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Paused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StringTooLong",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "str"
      }
    ]
  },
  {
    "name": "Unauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnauthorizedInitializer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
  },
  {
    "name": "ExecCalls",
    "type": "event",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "calls",
        "components": [
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ]
  },
  {
    "name": "OwnershipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldOwner",
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
    "name": "SetPaused",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "paused"
      }
    ]
  },
  {
    "name": "SplitDistributed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "distributor",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "SplitUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "_split",
        "components": [
          {
            "type": "address[]",
            "name": "recipients"
          },
          {
            "type": "uint256[]",
            "name": "allocations"
          },
          {
            "type": "uint256",
            "name": "totalAllocation"
          },
          {
            "type": "uint16",
            "name": "distributionIncentive"
          }
        ]
      }
    ]
  },
  {
    "name": "FACTORY",
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
    "name": "NATIVE_TOKEN",
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
    "name": "SPLITS_WAREHOUSE",
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
    "name": "distribute",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_split",
        "components": [
          {
            "type": "address[]",
            "name": "recipients"
          },
          {
            "type": "uint256[]",
            "name": "allocations"
          },
          {
            "type": "uint256",
            "name": "totalAllocation"
          },
          {
            "type": "uint16",
            "name": "distributionIncentive"
          }
        ]
      },
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address",
        "name": "_distributor"
      }
    ],
    "outputs": []
  },
  {
    "name": "distribute",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_split",
        "components": [
          {
            "type": "address[]",
            "name": "recipients"
          },
          {
            "type": "uint256[]",
            "name": "allocations"
          },
          {
            "type": "uint256",
            "name": "totalAllocation"
          },
          {
            "type": "uint16",
            "name": "distributionIncentive"
          }
        ]
      },
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_distributeAmount"
      },
      {
        "type": "bool",
        "name": "_performWarehouseTransfer"
      },
      {
        "type": "address",
        "name": "_distributor"
      }
    ],
    "outputs": []
  },
  {
    "name": "eip712Domain",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes1",
        "name": "fields"
      },
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "version"
      },
      {
        "type": "uint256",
        "name": "chainId"
      },
      {
        "type": "address",
        "name": "verifyingContract"
      },
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "uint256[]",
        "name": "extensions"
      }
    ]
  },
  {
    "name": "execCalls",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_calls",
        "components": [
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "blockNumber"
      },
      {
        "type": "bytes[]",
        "name": "returnData"
      }
    ]
  },
  {
    "name": "getSplitBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "splitBalance"
      },
      {
        "type": "uint256",
        "name": "warehouseBalance"
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_split",
        "components": [
          {
            "type": "address[]",
            "name": "recipients"
          },
          {
            "type": "uint256[]",
            "name": "allocations"
          },
          {
            "type": "uint256",
            "name": "totalAllocation"
          },
          {
            "type": "uint16",
            "name": "distributionIncentive"
          }
        ]
      },
      {
        "type": "address",
        "name": "_owner"
      }
    ],
    "outputs": []
  },
  {
    "name": "isValidSignature",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hash"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": [
      {
        "type": "bytes4",
        "name": "result"
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
    "name": "replaySafeHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "setPaused",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_paused"
      }
    ],
    "outputs": []
  },
  {
    "name": "splitHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
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
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateBlockNumber",
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
    "name": "updateSplit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_split",
        "components": [
          {
            "type": "address[]",
            "name": "recipients"
          },
          {
            "type": "uint256[]",
            "name": "allocations"
          },
          {
            "type": "uint256",
            "name": "totalAllocation"
          },
          {
            "type": "uint16",
            "name": "distributionIncentive"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawFromWarehouse",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract