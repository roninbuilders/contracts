import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36554,
  address: '0xf22175c80c6e074c171811c59c6c0087e2a6a346' as const,
  contract_name: 'Account',
  display_name: 'Account',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1743013890,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_entrypoint"
      },
      {
        "type": "address",
        "name": "_factory"
      }
    ]
  },
  {
    "name": "AdminUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "signer",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isAdmin"
      }
    ]
  },
  {
    "name": "ContractURIUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "prevURI"
      },
      {
        "type": "string",
        "name": "newURI"
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
    "name": "SignerPermissionsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "authorizingSigner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "targetSigner",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "permissions",
        "components": [
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "uint8",
            "name": "isAdmin"
          },
          {
            "type": "address[]",
            "name": "approvedTargets"
          },
          {
            "type": "uint256",
            "name": "nativeTokenLimitPerTransaction"
          },
          {
            "type": "uint128",
            "name": "permissionStartTimestamp"
          },
          {
            "type": "uint128",
            "name": "permissionEndTimestamp"
          },
          {
            "type": "uint128",
            "name": "reqValidityStartTimestamp"
          },
          {
            "type": "uint128",
            "name": "reqValidityEndTimestamp"
          },
          {
            "type": "bytes32",
            "name": "uid"
          }
        ]
      }
    ]
  },
  {
    "name": "addDeposit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "contractURI",
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
    "name": "entryPoint",
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
    "name": "execute",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_target"
      },
      {
        "type": "uint256",
        "name": "_value"
      },
      {
        "type": "bytes",
        "name": "_calldata"
      }
    ],
    "outputs": []
  },
  {
    "name": "executeBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_target"
      },
      {
        "type": "uint256[]",
        "name": "_value"
      },
      {
        "type": "bytes[]",
        "name": "_calldata"
      }
    ],
    "outputs": []
  },
  {
    "name": "factory",
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
    "name": "getAllActiveSigners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "signers",
        "components": [
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address[]",
            "name": "approvedTargets"
          },
          {
            "type": "uint256",
            "name": "nativeTokenLimitPerTransaction"
          },
          {
            "type": "uint128",
            "name": "startTimestamp"
          },
          {
            "type": "uint128",
            "name": "endTimestamp"
          }
        ]
      }
    ]
  },
  {
    "name": "getAllAdmins",
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
    "name": "getAllSigners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "signers",
        "components": [
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address[]",
            "name": "approvedTargets"
          },
          {
            "type": "uint256",
            "name": "nativeTokenLimitPerTransaction"
          },
          {
            "type": "uint128",
            "name": "startTimestamp"
          },
          {
            "type": "uint128",
            "name": "endTimestamp"
          }
        ]
      }
    ]
  },
  {
    "name": "getMessageHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_hash"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getNonce",
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
    "name": "getPermissionsForSigner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "signer"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address[]",
            "name": "approvedTargets"
          },
          {
            "type": "uint256",
            "name": "nativeTokenLimitPerTransaction"
          },
          {
            "type": "uint128",
            "name": "startTimestamp"
          },
          {
            "type": "uint128",
            "name": "endTimestamp"
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
        "name": "_defaultAdmin"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ],
    "outputs": []
  },
  {
    "name": "isActiveSigner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "signer"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_account"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isValidSignature",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_hash"
      },
      {
        "type": "bytes",
        "name": "_signature"
      }
    ],
    "outputs": [
      {
        "type": "bytes4",
        "name": "magicValue"
      }
    ]
  },
  {
    "name": "isValidSigner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_signer"
      },
      {
        "type": "tuple",
        "name": "_userOp",
        "components": [
          {
            "type": "address",
            "name": "sender"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "bytes",
            "name": "initCode"
          },
          {
            "type": "bytes",
            "name": "callData"
          },
          {
            "type": "uint256",
            "name": "callGasLimit"
          },
          {
            "type": "uint256",
            "name": "verificationGasLimit"
          },
          {
            "type": "uint256",
            "name": "preVerificationGas"
          },
          {
            "type": "uint256",
            "name": "maxFeePerGas"
          },
          {
            "type": "uint256",
            "name": "maxPriorityFeePerGas"
          },
          {
            "type": "bytes",
            "name": "paymasterAndData"
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
    "name": "setContractURI",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_uri"
      }
    ],
    "outputs": []
  },
  {
    "name": "setEntrypointOverride",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_entrypointOverride"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPermissionsForSigner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_req",
        "components": [
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "uint8",
            "name": "isAdmin"
          },
          {
            "type": "address[]",
            "name": "approvedTargets"
          },
          {
            "type": "uint256",
            "name": "nativeTokenLimitPerTransaction"
          },
          {
            "type": "uint128",
            "name": "permissionStartTimestamp"
          },
          {
            "type": "uint128",
            "name": "permissionEndTimestamp"
          },
          {
            "type": "uint128",
            "name": "reqValidityStartTimestamp"
          },
          {
            "type": "uint128",
            "name": "reqValidityEndTimestamp"
          },
          {
            "type": "bytes32",
            "name": "uid"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "_signature"
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
    "name": "validateUserOp",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "userOp",
        "components": [
          {
            "type": "address",
            "name": "sender"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "bytes",
            "name": "initCode"
          },
          {
            "type": "bytes",
            "name": "callData"
          },
          {
            "type": "uint256",
            "name": "callGasLimit"
          },
          {
            "type": "uint256",
            "name": "verificationGasLimit"
          },
          {
            "type": "uint256",
            "name": "preVerificationGas"
          },
          {
            "type": "uint256",
            "name": "maxFeePerGas"
          },
          {
            "type": "uint256",
            "name": "maxPriorityFeePerGas"
          },
          {
            "type": "bytes",
            "name": "paymasterAndData"
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      },
      {
        "type": "bytes32",
        "name": "userOpHash"
      },
      {
        "type": "uint256",
        "name": "missingAccountFunds"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "validationData"
      }
    ]
  },
  {
    "name": "verifySignerPermissionRequest",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "req",
        "components": [
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "uint8",
            "name": "isAdmin"
          },
          {
            "type": "address[]",
            "name": "approvedTargets"
          },
          {
            "type": "uint256",
            "name": "nativeTokenLimitPerTransaction"
          },
          {
            "type": "uint128",
            "name": "permissionStartTimestamp"
          },
          {
            "type": "uint128",
            "name": "permissionEndTimestamp"
          },
          {
            "type": "uint128",
            "name": "reqValidityStartTimestamp"
          },
          {
            "type": "uint128",
            "name": "reqValidityEndTimestamp"
          },
          {
            "type": "bytes32",
            "name": "uid"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "success"
      },
      {
        "type": "address",
        "name": "signer"
      }
    ]
  },
  {
    "name": "withdrawDepositTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "withdrawAddress"
      },
      {
        "type": "uint256",
        "name": "amount"
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