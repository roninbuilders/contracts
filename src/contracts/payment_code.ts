import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3944,
  address: '0x00abc4acffdb598c3333094f40c286fda64c6198' as const,
  contract_name: 'PaymentCode',
  display_name: 'Payment Code',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1724955235,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_signer"
      }
    ]
  },
  {
    "name": "BulkClaim",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "claimer",
        "indexed": true
      },
      {
        "type": "bytes32[]",
        "name": "paymentCodes",
        "indexed": true
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint8",
        "name": "tokenType"
      }
    ]
  },
  {
    "name": "Claimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "claimer",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "paymentCode",
        "indexed": true
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint8",
        "name": "tokenType"
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
    "name": "ETH_TOKEN_ADDRESS",
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
    "name": "bulkClaim",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "bytes32[]",
        "name": "paymentCodes"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint8",
        "name": "tokenType"
      },
      {
        "type": "uint256",
        "name": "velocityControlId"
      },
      {
        "type": "bytes[]",
        "name": "signatures"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkRecoverFunds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8[]",
        "name": "tokenTypes"
      },
      {
        "type": "address[]",
        "name": "tokenAddresses"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "claim",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes32",
        "name": "paymentCode"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint8",
        "name": "tokenType"
      },
      {
        "type": "uint256",
        "name": "velocityControlId"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimMany",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "bytes32[]",
        "name": "paymentCodes"
      },
      {
        "type": "address[]",
        "name": "tos"
      },
      {
        "type": "address[]",
        "name": "tokenAddresses"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint8[]",
        "name": "tokenTypes"
      },
      {
        "type": "uint256[]",
        "name": "velocityControlIds"
      },
      {
        "type": "bytes[]",
        "name": "signatures"
      }
    ],
    "outputs": []
  },
  {
    "name": "getIntervalAllowedAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "velocityControlId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getMessageHash",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes32",
        "name": "paymentCode"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint8",
        "name": "tokenType"
      },
      {
        "type": "uint256",
        "name": "velocityControlId"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getSignatureHash",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes32",
        "name": "messageHash"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
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
    "name": "recover",
    "type": "function",
    "stateMutability": "pure",
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
        "type": "address"
      }
    ]
  },
  {
    "name": "recoverFunds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "tokenType"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setSigner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_signer"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVelocityControl",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "velocityControlId"
      },
      {
        "type": "uint256",
        "name": "maxPerClaim"
      },
      {
        "type": "uint256",
        "name": "maxTotalClaimed"
      },
      {
        "type": "bool",
        "name": "enabled"
      },
      {
        "type": "uint256",
        "name": "expiry"
      },
      {
        "type": "uint256",
        "name": "intervalLimit"
      },
      {
        "type": "uint256",
        "name": "interval"
      },
      {
        "type": "uint256",
        "name": "intervalStart"
      }
    ],
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
        "name": "newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "usedHashes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "velocityControls",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "maxPerClaim"
      },
      {
        "type": "uint256",
        "name": "maxTotalClaimed"
      },
      {
        "type": "uint256",
        "name": "totalClaimed"
      },
      {
        "type": "uint256",
        "name": "lastClaimedAt"
      },
      {
        "type": "uint256",
        "name": "expiry"
      },
      {
        "type": "uint256",
        "name": "intervalLimit"
      },
      {
        "type": "uint256",
        "name": "interval"
      },
      {
        "type": "uint256",
        "name": "intervalStart"
      },
      {
        "type": "bool",
        "name": "enabled"
      }
    ]
  },
  {
    "name": "verify",
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
        "type": "bool"
      }
    ]
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract