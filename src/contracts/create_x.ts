import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 32759,
  address: '0xba5ed099633d3b313e4d5f7bdc1305d3c28ba5ed' as const,
  contract_name: 'CreateX',
  display_name: 'Create X',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744041579,
  abi: [
  {
    "name": "FailedContractCreation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "emitter"
      }
    ]
  },
  {
    "name": "FailedContractInitialisation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "emitter"
      },
      {
        "type": "bytes",
        "name": "revertData"
      }
    ]
  },
  {
    "name": "FailedEtherTransfer",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "emitter"
      },
      {
        "type": "bytes",
        "name": "revertData"
      }
    ]
  },
  {
    "name": "InvalidNonceValue",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "emitter"
      }
    ]
  },
  {
    "name": "InvalidSalt",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "emitter"
      }
    ]
  },
  {
    "name": "ContractCreation",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newContract",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "salt",
        "indexed": true
      }
    ]
  },
  {
    "name": "ContractCreation",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newContract",
        "indexed": true
      }
    ]
  },
  {
    "name": "Create3ProxyContractCreation",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newContract",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "salt",
        "indexed": true
      }
    ]
  },
  {
    "name": "computeCreate2Address",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "bytes32",
        "name": "initCodeHash"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "computedAddress"
      }
    ]
  },
  {
    "name": "computeCreate2Address",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "bytes32",
        "name": "initCodeHash"
      },
      {
        "type": "address",
        "name": "deployer"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "computedAddress"
      }
    ]
  },
  {
    "name": "computeCreate3Address",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "address",
        "name": "deployer"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "computedAddress"
      }
    ]
  },
  {
    "name": "computeCreate3Address",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "computedAddress"
      }
    ]
  },
  {
    "name": "computeCreateAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "computedAddress"
      }
    ]
  },
  {
    "name": "computeCreateAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "deployer"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "computedAddress"
      }
    ]
  },
  {
    "name": "deployCreate",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "initCode"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "deployCreate2",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "bytes",
        "name": "initCode"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "deployCreate2",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "initCode"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "deployCreate2AndInit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "bytes",
        "name": "initCode"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "tuple",
        "name": "values",
        "components": [
          {
            "type": "uint256",
            "name": "constructorAmount"
          },
          {
            "type": "uint256",
            "name": "initCallAmount"
          }
        ]
      },
      {
        "type": "address",
        "name": "refundAddress"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "deployCreate2AndInit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "initCode"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "tuple",
        "name": "values",
        "components": [
          {
            "type": "uint256",
            "name": "constructorAmount"
          },
          {
            "type": "uint256",
            "name": "initCallAmount"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "deployCreate2AndInit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "initCode"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "tuple",
        "name": "values",
        "components": [
          {
            "type": "uint256",
            "name": "constructorAmount"
          },
          {
            "type": "uint256",
            "name": "initCallAmount"
          }
        ]
      },
      {
        "type": "address",
        "name": "refundAddress"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "deployCreate2AndInit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "bytes",
        "name": "initCode"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "tuple",
        "name": "values",
        "components": [
          {
            "type": "uint256",
            "name": "constructorAmount"
          },
          {
            "type": "uint256",
            "name": "initCallAmount"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "deployCreate2Clone",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "address",
        "name": "implementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "proxy"
      }
    ]
  },
  {
    "name": "deployCreate2Clone",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "proxy"
      }
    ]
  },
  {
    "name": "deployCreate3",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "initCode"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "deployCreate3",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "bytes",
        "name": "initCode"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "deployCreate3AndInit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "bytes",
        "name": "initCode"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "tuple",
        "name": "values",
        "components": [
          {
            "type": "uint256",
            "name": "constructorAmount"
          },
          {
            "type": "uint256",
            "name": "initCallAmount"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "deployCreate3AndInit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "initCode"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "tuple",
        "name": "values",
        "components": [
          {
            "type": "uint256",
            "name": "constructorAmount"
          },
          {
            "type": "uint256",
            "name": "initCallAmount"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "deployCreate3AndInit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "bytes",
        "name": "initCode"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "tuple",
        "name": "values",
        "components": [
          {
            "type": "uint256",
            "name": "constructorAmount"
          },
          {
            "type": "uint256",
            "name": "initCallAmount"
          }
        ]
      },
      {
        "type": "address",
        "name": "refundAddress"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "deployCreate3AndInit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "initCode"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "tuple",
        "name": "values",
        "components": [
          {
            "type": "uint256",
            "name": "constructorAmount"
          },
          {
            "type": "uint256",
            "name": "initCallAmount"
          }
        ]
      },
      {
        "type": "address",
        "name": "refundAddress"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "deployCreateAndInit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "initCode"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "tuple",
        "name": "values",
        "components": [
          {
            "type": "uint256",
            "name": "constructorAmount"
          },
          {
            "type": "uint256",
            "name": "initCallAmount"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "deployCreateAndInit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "initCode"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "tuple",
        "name": "values",
        "components": [
          {
            "type": "uint256",
            "name": "constructorAmount"
          },
          {
            "type": "uint256",
            "name": "initCallAmount"
          }
        ]
      },
      {
        "type": "address",
        "name": "refundAddress"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "deployCreateClone",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "proxy"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract