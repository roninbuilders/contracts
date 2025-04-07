import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27688,
  address: '0xff000047abea9064c699c0727148776e4e17771c' as const,
  contract_name: 'TrustedForwarder',
  display_name: 'Trusted Forwarder',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742222771,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "InvalidShortString",
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
    "name": "TrustedForwarder__CannotSetAppSignerToZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TrustedForwarder__CannotSetOwnerToZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TrustedForwarder__CannotUseWithoutSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TrustedForwarder__InvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TrustedForwarder__SignerNotAuthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
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
    "name": "APP_SIGNER_TYPEHASH",
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
    "name": "__TrustedForwarder_init",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "appSigner"
      }
    ],
    "outputs": []
  },
  {
    "name": "deactivateSigner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "domainSeparatorV4",
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
    "name": "forwardCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "bytes",
        "name": "message"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "returnData"
      }
    ]
  },
  {
    "name": "forwardCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "bytes",
        "name": "message"
      },
      {
        "type": "tuple",
        "name": "signature",
        "components": [
          {
            "type": "uint8",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "returnData"
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "signer",
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
        "name": "newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateSigner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "signer_"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract