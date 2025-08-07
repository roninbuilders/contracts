import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36555,
  address: '0x58000c43cadd84058ec7a589eec9db4d5815e1e7' as const,
  contract_name: 'Unnamed Contract',
  display_name: 'Unnamed Contract',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x4cb2e48b5235c0d1fd7ad1e3f7d7ff829c5b9392',
  created_at: 1754316211,
  abi: [] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "CurrencyTransferLibFailedNativeTransfer",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "NFTMetadataFrozen",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "NFTMetadataInvalidUrl",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NFTMetadataUnauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ApprovalForAll",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account",
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
    "name": "BatchMetadataUpdate",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_fromTokenId"
      },
      {
        "type": "uint256",
        "name": "_toTokenId"
      }
    ]
  },
  {
    "name": "DefaultRoyalty",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newRoyaltyRecipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newRoyaltyBps"
      }
    ]
  },
  {
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
  },
  {
    "name": "FlatPlatformFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "platformFeeRecipient"
      },
      {
        "type": "uint256",
        "name": "flatFee"
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
    "name": "MetadataFrozen",
    "type": "event",
    "inputs": []
  },
  {
    "name": "MetadataUpdate",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
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
    "name": "PlatformFeeInfoUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "platformFeeRecipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "platformFeeBps"
      }
    ]
  },
  {
    "name": "PlatformFeeTypeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "feeType"
      }
    ]
  },
  {
    "name": "PrimarySaleRecipientUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleAdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "previousAdminRole",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "newAdminRole",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleGranted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleRevoked",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoyaltyForToken",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "royaltyRecipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "royaltyBps"
      }
    ]
  },
  {
    "name": "TokensMinted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "mintedTo",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenIdMinted",
        "indexed": true
      },
      {
        "type": "string",
        "name": "uri"
      },
      {
        "type": "uint256",
        "name": "quantityMinted"
      }
    ]
  },
  {
    "name": "TokensMintedWithSignature",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "signer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "mintedTo",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenIdMinted",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "mintRequest",
        "components": [
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "address",
            "name": "royaltyRecipient"
          },
          {
            "type": "uint256",
            "name": "royaltyBps"
          },
          {
            "type": "address",
            "name": "primarySaleRecipient"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "string",
            "name": "uri"
          },
          {
            "type": "uint256",
            "name": "quantity"
          },
          {
            "type": "uint256",
            "name": "pricePerToken"
          },
          {
            "type": "address",
            "name": "currency"
          },
          {
            "type": "uint128",
            "name": "validityStartTimestamp"
          },
          {
            "type": "uint128",
            "name": "validityEndTimestamp"
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
    "name": "TransferBatch",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "values"
      }
    ]
  },
  {
    "name": "TransferSingle",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "URI",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "value"
      },
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
      }
    ]
  },
  {
    "name": "DEFAULT_ADMIN_ROLE",
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
    "name": "DEFAULT_FEE_RECIPIENT",
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
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "balanceOfBatch",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "accounts"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "burn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ],
    "outputs": []
  },
  {
    "name": "burnBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "values"
      }
    ],
    "outputs": []
  },
  {
    "name": "contractType",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
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
    "name": "contractVersion",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
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
    "name": "freezeMetadata",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "getDefaultRoyaltyInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      },
      {
        "type": "uint16"
      }
    ]
  },
  {
    "name": "getFlatPlatformFeeInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPlatformFeeInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      },
      {
        "type": "uint16"
      }
    ]
  },
  {
    "name": "getPlatformFeeType",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "getRoleAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getRoleMember",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getRoleMemberCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getRoyaltyInfoForToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address"
      },
      {
        "type": "uint16"
      }
    ]
  },
  {
    "name": "grantRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "hasRole",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
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
        "name": "_defaultAdmin"
      },
      {
        "type": "string",
        "name": "_name"
      },
      {
        "type": "string",
        "name": "_symbol"
      },
      {
        "type": "string",
        "name": "_contractURI"
      },
      {
        "type": "address[]",
        "name": "_trustedForwarders"
      },
      {
        "type": "address",
        "name": "_primarySaleRecipient"
      },
      {
        "type": "address",
        "name": "_royaltyRecipient"
      },
      {
        "type": "uint128",
        "name": "_royaltyBps"
      },
      {
        "type": "uint128",
        "name": "_platformFeeBps"
      },
      {
        "type": "address",
        "name": "_platformFeeRecipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "isApprovedForAll",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "address",
        "name": "operator"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isTrustedForwarder",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "forwarder"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "mintTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "string",
        "name": "_uri"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "mintWithSignature",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_req",
        "components": [
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "address",
            "name": "royaltyRecipient"
          },
          {
            "type": "uint256",
            "name": "royaltyBps"
          },
          {
            "type": "address",
            "name": "primarySaleRecipient"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "string",
            "name": "uri"
          },
          {
            "type": "uint256",
            "name": "quantity"
          },
          {
            "type": "uint256",
            "name": "pricePerToken"
          },
          {
            "type": "address",
            "name": "currency"
          },
          {
            "type": "uint128",
            "name": "validityStartTimestamp"
          },
          {
            "type": "uint128",
            "name": "validityEndTimestamp"
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
    "name": "name",
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
    "name": "nextTokenIdToMint",
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
    "name": "platformFeeRecipient",
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
    "name": "primarySaleRecipient",
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
    "name": "renounceRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "revokeRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "royaltyInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "salePrice"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "receiver"
      },
      {
        "type": "uint256",
        "name": "royaltyAmount"
      }
    ]
  },
  {
    "name": "safeBatchTransferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "safeTransferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "saleRecipientForToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "setApprovalForAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "bool",
        "name": "approved"
      }
    ],
    "outputs": []
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
    "name": "setDefaultRoyaltyInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_royaltyRecipient"
      },
      {
        "type": "uint256",
        "name": "_royaltyBps"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFlatPlatformFeeInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_platformFeeRecipient"
      },
      {
        "type": "uint256",
        "name": "_flatFee"
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
    "name": "setPlatformFeeInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_platformFeeRecipient"
      },
      {
        "type": "uint256",
        "name": "_platformFeeBps"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPlatformFeeType",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_feeType"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPrimarySaleRecipient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_saleRecipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRoyaltyInfoForToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "address",
        "name": "_recipient"
      },
      {
        "type": "uint256",
        "name": "_bps"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTokenURI",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "string",
        "name": "_uri"
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
    "name": "symbol",
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
    "name": "totalSupply",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "uri",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "uriFrozen",
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
    "name": "verify",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "_req",
        "components": [
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "address",
            "name": "royaltyRecipient"
          },
          {
            "type": "uint256",
            "name": "royaltyBps"
          },
          {
            "type": "address",
            "name": "primarySaleRecipient"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "string",
            "name": "uri"
          },
          {
            "type": "uint256",
            "name": "quantity"
          },
          {
            "type": "uint256",
            "name": "pricePerToken"
          },
          {
            "type": "address",
            "name": "currency"
          },
          {
            "type": "uint128",
            "name": "validityStartTimestamp"
          },
          {
            "type": "uint128",
            "name": "validityEndTimestamp"
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
    "outputs": [
      {
        "type": "bool"
      },
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract