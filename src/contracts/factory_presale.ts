import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35984,
  address: '0x8e9654c8a81cf38d25dc1165dc7553a35c6845ae' as const,
  contract_name: 'FactoryPresale',
  display_name: 'Factory Presale',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751549123,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address",
        "name": "_receiver"
      },
      {
        "type": "address",
        "name": "_verifier"
      }
    ]
  },
  {
    "name": "ECDSAInvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ECDSAInvalidSignatureLength",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "length"
      }
    ]
  },
  {
    "name": "ECDSAInvalidSignatureS",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "s"
      }
    ]
  },
  {
    "name": "InvalidShortString",
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
    "name": "SafeERC20FailedOperation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
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
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
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
    "name": "Presale",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "string",
        "name": "refCode"
      }
    ]
  },
  {
    "name": "MAX_PRESALE_AMOUNT",
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
    "name": "MAX_PRESALE_AMOUNT_PER_USER",
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
    "name": "PRESALE_PRICE",
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
    "name": "PRESALE_TYPEHASH",
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
    "name": "changeReceiver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_receiver"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeVerifier",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_verifier"
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
    "name": "isPresaleActive",
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
    "name": "presale",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "signature"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "string",
        "name": "refCode"
      }
    ],
    "outputs": []
  },
  {
    "name": "presaleAmounts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "receiver",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "rescueTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "togglePresale",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "token",
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
    "name": "tokenDecimals",
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
    "name": "totalSold",
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
    "name": "verifier",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract