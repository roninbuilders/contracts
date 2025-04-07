import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 29597,
  address: '0x680000cf8b72fa2300d12a00008758149e00006d' as const,
  contract_name: 'OpenSeaSignedZoneCaptain',
  display_name: 'Open Sea Signed Zone Captain',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742225046,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "signedZoneController"
      }
    ]
  },
  {
    "name": "CallerIsNotNewPotentialOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CallerIsNotOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CallerIsNotOwnerOrRotator",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CallerIsNotOwnerOrSanitizer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InitialOwnerIsNullAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidDeployer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignedZoneController",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "signedZoneController"
      }
    ]
  },
  {
    "name": "NewPotentialOwnerAlreadySet",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "newPotentialOwner"
      }
    ]
  },
  {
    "name": "NewPotentialOwnerIsNullAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoPotentialOwnerCurrentlySet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnerAlreadySet",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "RotatorCannotBeNullAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SanitizerCannotBeNullAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnershipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner"
      },
      {
        "type": "address",
        "name": "newOwner"
      }
    ]
  },
  {
    "name": "PotentialOwnerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newPotentialOwner"
      }
    ]
  },
  {
    "name": "RotatorUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newRotator"
      }
    ]
  },
  {
    "name": "SanitizerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newSanitizer"
      }
    ]
  },
  {
    "name": "ZoneSanitized",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "zone"
      }
    ]
  },
  {
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "acceptZoneOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "zone"
      }
    ],
    "outputs": []
  },
  {
    "name": "cancelOwnershipTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "cancelZoneOwnershipTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "zone"
      }
    ],
    "outputs": []
  },
  {
    "name": "getRotator",
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
    "name": "getSanitizer",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "initialOwner"
      },
      {
        "type": "address",
        "name": "initialRotator"
      },
      {
        "type": "address",
        "name": "initialSanitizer"
      },
      {
        "type": "string",
        "name": "zoneName"
      },
      {
        "type": "string",
        "name": "apiEndpoint"
      },
      {
        "type": "string",
        "name": "documentationURI"
      },
      {
        "type": "bytes32",
        "name": "zoneSalt"
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
    "name": "potentialOwner",
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
    "name": "rotateSigners",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "zone"
      },
      {
        "type": "address",
        "name": "signerToRemove"
      },
      {
        "type": "address",
        "name": "signerToAdd"
      }
    ],
    "outputs": []
  },
  {
    "name": "sanitizeSignedZone",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "zone"
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
        "name": "newPotentialOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferZoneOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "zone"
      },
      {
        "type": "address",
        "name": "newPotentialOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateRotator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newRotator"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateSanitizer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newSanitizer"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateZoneAPIEndpoint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "zone"
      },
      {
        "type": "string",
        "name": "newApiEndpoint"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateZoneDocumentationURI",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "zone"
      },
      {
        "type": "string",
        "name": "newDocumentationURI"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateZoneSigner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "zone"
      },
      {
        "type": "address",
        "name": "signer"
      },
      {
        "type": "bool",
        "name": "active"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract