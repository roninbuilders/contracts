import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36780,
  address: '0xb69c2fc200d3dc117ad640c33837737e21e2f0c1' as const,
  contract_name: 'HeroErc721',
  display_name: 'Hero Erc 721',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1747720892,
  abi: [
  {
    "name": "ApprovalCallerNotOwnerNorApproved",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ApprovalQueryForNonexistentToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BalanceQueryForZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CallFromHeroWrapOnly",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CanNotSetBasePart",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ContractMetadataUnauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DifferentLengths",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidQueryRange",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MintERC2309QuantityExceedsLimit",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MintToZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MintZeroQuantity",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotCompatibleWithSpotMints",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NumberMustMoreThen0",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnerQueryForNonexistentToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnershipNotInitializedForExtraData",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SequentialMintExceedsLimit",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SequentialUpToTooSmall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SpotMintTokenIdTooSmall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenAlreadyExists",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenIsNotExist",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokensNotEmpty",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferCallerNotOwnerNorApproved",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferFromIncorrectOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferToNonERC721ReceiverImplementer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferToZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "URIQueryForNonexistentToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UmaskLengthError",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "Approval",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "approved",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "ApprovalForAll",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
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
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
      }
    ]
  },
  {
    "name": "ConsecutiveTransfer",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "fromTokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "toTokenId"
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
    "name": "Mint",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "tuple",
        "name": "data",
        "components": [
          {
            "type": "tuple",
            "name": "base",
            "components": [
              {
                "type": "uint128",
                "name": "base"
              },
              {
                "type": "uint128",
                "name": "bornAt"
              }
            ]
          },
          {
            "type": "uint128",
            "name": "genes"
          },
          {
            "type": "uint128",
            "name": "growth"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "tokenId"
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
    "name": "SetBaseURI",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "strURI"
      }
    ]
  },
  {
    "name": "SetDependentContractAddress",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "heroWrapAddress"
      }
    ]
  },
  {
    "name": "SetHeroDataExEvent",
    "type": "event",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokens"
      },
      {
        "type": "uint128[]",
        "name": "datas"
      },
      {
        "type": "uint8[]",
        "name": "uMasks"
      }
    ]
  },
  {
    "name": "Transfer",
    "type": "event",
    "inputs": [
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
        "name": "tokenId",
        "indexed": true
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
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      }
    ]
  },
  {
    "name": "safeMintFromHeroWrapExEvent",
    "type": "event",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "orders",
        "components": [
          {
            "type": "uint256",
            "name": "uOrderId"
          },
          {
            "type": "address",
            "name": "userAddress"
          },
          {
            "type": "tuple[]",
            "name": "heroDatas",
            "components": [
              {
                "type": "tuple",
                "name": "base",
                "components": [
                  {
                    "type": "uint128",
                    "name": "base"
                  },
                  {
                    "type": "uint128",
                    "name": "bornAt"
                  }
                ]
              },
              {
                "type": "uint128",
                "name": "genes"
              },
              {
                "type": "uint128",
                "name": "growth"
              }
            ]
          }
        ]
      },
      {
        "type": "uint256",
        "name": "uTokenFrom"
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
    "name": "OPERATOR_ROLE",
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
    "name": "UPGRADER_ROLE",
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
    "name": "approve",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "burns",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokens"
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
    "name": "explicitOwnershipOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "ownership",
        "components": [
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "uint64",
            "name": "startTimestamp"
          },
          {
            "type": "bool",
            "name": "burned"
          },
          {
            "type": "uint24",
            "name": "extraData"
          }
        ]
      }
    ]
  },
  {
    "name": "explicitOwnershipsOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "uint64",
            "name": "startTimestamp"
          },
          {
            "type": "bool",
            "name": "burned"
          },
          {
            "type": "uint24",
            "name": "extraData"
          }
        ]
      }
    ]
  },
  {
    "name": "getApproved",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getHeroData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "data",
        "components": [
          {
            "type": "tuple",
            "name": "base",
            "components": [
              {
                "type": "uint128",
                "name": "base"
              },
              {
                "type": "uint128",
                "name": "bornAt"
              }
            ]
          },
          {
            "type": "uint128",
            "name": "genes"
          },
          {
            "type": "uint128",
            "name": "growth"
          }
        ]
      }
    ]
  },
  {
    "name": "getHeroDatas",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokens"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "datas",
        "components": [
          {
            "type": "tuple",
            "name": "base",
            "components": [
              {
                "type": "uint128",
                "name": "base"
              },
              {
                "type": "uint128",
                "name": "bornAt"
              }
            ]
          },
          {
            "type": "uint128",
            "name": "genes"
          },
          {
            "type": "uint128",
            "name": "growth"
          }
        ]
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
    "name": "heroWrapContractAddress",
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
    "inputs": [],
    "outputs": []
  },
  {
    "name": "isApprovedForAll",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
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
    "name": "ownerOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "ownerOfs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokens"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "adds"
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
    "name": "proxiableUUID",
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
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "safeMintFromHeroWrapEx",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "orders",
        "components": [
          {
            "type": "uint256",
            "name": "uOrderId"
          },
          {
            "type": "address",
            "name": "userAddress"
          },
          {
            "type": "tuple[]",
            "name": "heroDatas",
            "components": [
              {
                "type": "tuple",
                "name": "base",
                "components": [
                  {
                    "type": "uint128",
                    "name": "base"
                  },
                  {
                    "type": "uint128",
                    "name": "bornAt"
                  }
                ]
              },
              {
                "type": "uint128",
                "name": "genes"
              },
              {
                "type": "uint128",
                "name": "growth"
              }
            ]
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "safeTransferFrom",
    "type": "function",
    "stateMutability": "payable",
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
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "safeTransferFrom",
    "type": "function",
    "stateMutability": "payable",
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
        "name": "tokenId"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ],
    "outputs": []
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
    "name": "setBaseURI",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "strURI"
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
    "name": "setDefaultRoyalty",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "receiver"
      },
      {
        "type": "uint96",
        "name": "feeNumerator"
      }
    ],
    "outputs": []
  },
  {
    "name": "setDependentContractAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "heroWrapAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setHeroDataEx",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokens"
      },
      {
        "type": "uint128[]",
        "name": "datas"
      },
      {
        "type": "uint8[]",
        "name": "uMasks"
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
    "name": "tokenURI",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "tokensOfOwner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "tokensOfOwnerIn",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256",
        "name": "start"
      },
      {
        "type": "uint256",
        "name": "stop"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "tokensOwnersOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokens"
      },
      {
        "type": "address",
        "name": "owner"
      }
    ],
    "outputs": []
  },
  {
    "name": "totalSupply",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "result"
      }
    ]
  },
  {
    "name": "transferFrom",
    "type": "function",
    "stateMutability": "payable",
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
        "name": "tokenId"
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
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeToAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract