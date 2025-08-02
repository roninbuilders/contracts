import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36501,
  address: '0x5a8f7440455ee05b77edabe0dc363b71bc5d2c41' as const,
  contract_name: 'Airdrop',
  display_name: 'Airdrop',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744401415,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AirdropAlreadyClaimed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AirdropInvalidProof",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AirdropNoMerkleRoot",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AirdropRequestAlreadyProcessed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AirdropRequestExpired",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "expirationTimestamp"
      }
    ]
  },
  {
    "name": "AirdropRequestInvalidSigner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AirdropValueMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ContractMetadataUnauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnableUnauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Airdrop",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "AirdropClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "receiver"
      }
    ]
  },
  {
    "name": "AirdropWithSignature",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token"
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
    "name": "OwnerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "prevOwner",
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
    "name": "airdropERC1155",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "tuple[]",
        "name": "_contents",
        "components": [
          {
            "type": "address",
            "name": "recipient"
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
      }
    ],
    "outputs": []
  },
  {
    "name": "airdropERC1155WithSignature",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "req",
        "components": [
          {
            "type": "bytes32",
            "name": "uid"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "expirationTimestamp"
          },
          {
            "type": "tuple[]",
            "name": "contents",
            "components": [
              {
                "type": "address",
                "name": "recipient"
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
          }
        ]
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "airdropERC20",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "tuple[]",
        "name": "_contents",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "airdropERC20WithSignature",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "req",
        "components": [
          {
            "type": "bytes32",
            "name": "uid"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "expirationTimestamp"
          },
          {
            "type": "tuple[]",
            "name": "contents",
            "components": [
              {
                "type": "address",
                "name": "recipient"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          }
        ]
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "airdropERC721",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "tuple[]",
        "name": "_contents",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "airdropERC721WithSignature",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "req",
        "components": [
          {
            "type": "bytes32",
            "name": "uid"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "expirationTimestamp"
          },
          {
            "type": "tuple[]",
            "name": "contents",
            "components": [
              {
                "type": "address",
                "name": "recipient"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              }
            ]
          }
        ]
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "airdropNativeToken",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_contents",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "claimERC1155",
    "type": "function",
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
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "uint256",
        "name": "_quantity"
      },
      {
        "type": "bytes32[]",
        "name": "_proofs"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimERC20",
    "type": "function",
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
        "type": "uint256",
        "name": "_quantity"
      },
      {
        "type": "bytes32[]",
        "name": "_proofs"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimERC721",
    "type": "function",
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
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "bytes32[]",
        "name": "_proofs"
      }
    ],
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_defaultAdmin"
      },
      {
        "type": "string",
        "name": "_contractURI"
      }
    ],
    "outputs": []
  },
  {
    "name": "isClaimed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_receiver"
      },
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      }
    ],
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
    "name": "processed",
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
    "name": "setMerkleRoot",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "bytes32",
        "name": "_tokenMerkleRoot"
      },
      {
        "type": "bool",
        "name": "_resetClaimStatus"
      }
    ],
    "outputs": []
  },
  {
    "name": "setOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "tokenConditionId",
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
    "name": "tokenMerkleRoot",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract