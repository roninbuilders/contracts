import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34988,
  address: '0x74894d2c2ee68883b464ee855c39418a16e5d3b5' as const,
  contract_name: 'MerklAutomator',
  display_name: 'Merkl Automator',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1747985013,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_configManager"
      }
    ]
  },
  {
    "name": "ApproveFailed",
    "type": "error",
    "inputs": []
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
    "name": "EnforcedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpectedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExternalCallFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAssetStrategy",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidFeeConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInstructionType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidParams",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSigner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidStrategy",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSwapRouter",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidVaultConfig",
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
    "name": "SignatureExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroAddress",
    "type": "error",
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
    "name": "Paused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "configManager",
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
    "name": "executeAllocate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "vault"
      },
      {
        "type": "tuple[]",
        "name": "inputAssets",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "strategy"
          },
          {
            "type": "address",
            "name": "token"
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
      },
      {
        "type": "address",
        "name": "strategy"
      },
      {
        "type": "uint64",
        "name": "gasFeeX64"
      },
      {
        "type": "bytes",
        "name": "allocateData"
      },
      {
        "type": "bytes"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": []
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
    "name": "pause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
  },
  {
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract