import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36089,
  address: '0x29a6369221c29a28746278820cef9770dbe4334e' as const,
  contract_name: 'Unnamed Contract',
  display_name: 'Unnamed Contract',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x09a26fc8fcef18192e267d7a6da9dfb4be81dd6a',
  created_at: 1751887910,
  abi: [] as const satisfies Abi,
  proxy_abi: [
  {
    "name": "AlreadyInitialized",
    "type": "error",
    "inputs": []
  },
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
    "name": "CannotExceedMaxSupplyOfUint64",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMaxSupply"
      }
    ]
  },
  {
    "name": "InvalidRoyaltyBasisPoints",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "basisPoints"
      }
    ]
  },
  {
    "name": "MintERC2309QuantityExceedsLimit",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MintQuantityExceedsMaxSupply",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "total"
      },
      {
        "type": "uint256",
        "name": "maxSupply"
      }
    ]
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
    "name": "NewOwnerIsZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotNextOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyAllowedSeaDrop",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyOwner",
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
    "name": "ProvenanceHashCannotBeSetAfterMintStarted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RoyaltyAddressCannotBeZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SameTransferValidator",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignersMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenGatedMismatch",
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
    "name": "AllowedSeaDropUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "allowedSeaDrop"
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
        "name": "newContractURI"
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
    "name": "MaxSupplyUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMaxSupply"
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
    "name": "PotentialOwnerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newPotentialAdministrator"
      }
    ]
  },
  {
    "name": "ProvenanceHashUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "previousHash"
      },
      {
        "type": "bytes32",
        "name": "newHash"
      }
    ]
  },
  {
    "name": "RoyaltyInfoUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "receiver"
      },
      {
        "type": "uint256",
        "name": "bps"
      }
    ]
  },
  {
    "name": "SeaDropTokenDeployed",
    "type": "event",
    "inputs": []
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
    "name": "TransferValidatorUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldValidator"
      },
      {
        "type": "address",
        "name": "newValidator"
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
    "name": "approve",
    "type": "function",
    "stateMutability": "nonpayable",
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
    "name": "baseURI",
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
    "name": "burn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
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
    "name": "emitBatchMetadataUpdate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "fromTokenId"
      },
      {
        "type": "uint256",
        "name": "toTokenId"
      }
    ],
    "outputs": []
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
    "name": "getMintStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "minter"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "minterNumMinted"
      },
      {
        "type": "uint256",
        "name": "currentTotalSupply"
      },
      {
        "type": "uint256",
        "name": "maxSupply"
      }
    ]
  },
  {
    "name": "getTransferValidationFunction",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes4",
        "name": "functionSignature"
      },
      {
        "type": "bool",
        "name": "isViewFunction"
      }
    ]
  },
  {
    "name": "getTransferValidator",
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
        "type": "string",
        "name": "__name"
      },
      {
        "type": "string",
        "name": "__symbol"
      },
      {
        "type": "address[]",
        "name": "allowedSeaDrop"
      },
      {
        "type": "address",
        "name": "initialOwner"
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
    "name": "maxSupply",
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
    "name": "mintSeaDrop",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "minter"
      },
      {
        "type": "uint256",
        "name": "quantity"
      }
    ],
    "outputs": []
  },
  {
    "name": "multiConfigure",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "uint256",
            "name": "maxSupply"
          },
          {
            "type": "string",
            "name": "baseURI"
          },
          {
            "type": "string",
            "name": "contractURI"
          },
          {
            "type": "address",
            "name": "seaDropImpl"
          },
          {
            "type": "tuple",
            "name": "publicDrop",
            "components": [
              {
                "type": "uint80",
                "name": "mintPrice"
              },
              {
                "type": "uint48",
                "name": "startTime"
              },
              {
                "type": "uint48",
                "name": "endTime"
              },
              {
                "type": "uint16",
                "name": "maxTotalMintableByWallet"
              },
              {
                "type": "uint16",
                "name": "feeBps"
              },
              {
                "type": "bool",
                "name": "restrictFeeRecipients"
              }
            ]
          },
          {
            "type": "string",
            "name": "dropURI"
          },
          {
            "type": "tuple",
            "name": "allowListData",
            "components": [
              {
                "type": "bytes32",
                "name": "merkleRoot"
              },
              {
                "type": "string[]",
                "name": "publicKeyURIs"
              },
              {
                "type": "string",
                "name": "allowListURI"
              }
            ]
          },
          {
            "type": "address",
            "name": "creatorPayoutAddress"
          },
          {
            "type": "bytes32",
            "name": "provenanceHash"
          },
          {
            "type": "address[]",
            "name": "allowedFeeRecipients"
          },
          {
            "type": "address[]",
            "name": "disallowedFeeRecipients"
          },
          {
            "type": "address[]",
            "name": "allowedPayers"
          },
          {
            "type": "address[]",
            "name": "disallowedPayers"
          },
          {
            "type": "address[]",
            "name": "tokenGatedAllowedNftTokens"
          },
          {
            "type": "tuple[]",
            "name": "tokenGatedDropStages",
            "components": [
              {
                "type": "uint80",
                "name": "mintPrice"
              },
              {
                "type": "uint16",
                "name": "maxTotalMintableByWallet"
              },
              {
                "type": "uint48",
                "name": "startTime"
              },
              {
                "type": "uint48",
                "name": "endTime"
              },
              {
                "type": "uint8",
                "name": "dropStageIndex"
              },
              {
                "type": "uint32",
                "name": "maxTokenSupplyForStage"
              },
              {
                "type": "uint16",
                "name": "feeBps"
              },
              {
                "type": "bool",
                "name": "restrictFeeRecipients"
              }
            ]
          },
          {
            "type": "address[]",
            "name": "disallowedTokenGatedAllowedNftTokens"
          },
          {
            "type": "address[]",
            "name": "signers"
          },
          {
            "type": "tuple[]",
            "name": "signedMintValidationParams",
            "components": [
              {
                "type": "uint80",
                "name": "minMintPrice"
              },
              {
                "type": "uint24",
                "name": "maxMaxTotalMintableByWallet"
              },
              {
                "type": "uint40",
                "name": "minStartTime"
              },
              {
                "type": "uint40",
                "name": "maxEndTime"
              },
              {
                "type": "uint40",
                "name": "maxMaxTokenSupplyForStage"
              },
              {
                "type": "uint16",
                "name": "minFeeBps"
              },
              {
                "type": "uint16",
                "name": "maxFeeBps"
              }
            ]
          },
          {
            "type": "address[]",
            "name": "disallowedSigners"
          }
        ]
      }
    ],
    "outputs": []
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
    "name": "provenanceHash",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "royaltyAddress",
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
    "name": "royaltyBasisPoints",
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
    "name": "royaltyInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256",
        "name": "_salePrice"
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
        "name": "tokenId"
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
        "name": "newBaseURI"
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
        "name": "newContractURI"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxSupply",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMaxSupply"
      }
    ],
    "outputs": []
  },
  {
    "name": "setProvenanceHash",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "newProvenanceHash"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRoyaltyInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "newInfo",
        "components": [
          {
            "type": "address",
            "name": "royaltyAddress"
          },
          {
            "type": "uint96",
            "name": "royaltyBps"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setTransferValidator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newValidator"
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
    "name": "totalSupply",
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
    "name": "transferFrom",
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
        "name": "tokenId"
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
    "name": "updateAllowList",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "seaDropImpl"
      },
      {
        "type": "tuple",
        "name": "allowListData",
        "components": [
          {
            "type": "bytes32",
            "name": "merkleRoot"
          },
          {
            "type": "string[]",
            "name": "publicKeyURIs"
          },
          {
            "type": "string",
            "name": "allowListURI"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "updateAllowedFeeRecipient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "seaDropImpl"
      },
      {
        "type": "address",
        "name": "feeRecipient"
      },
      {
        "type": "bool",
        "name": "allowed"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateAllowedSeaDrop",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "allowedSeaDrop"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateCreatorPayoutAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "seaDropImpl"
      },
      {
        "type": "address",
        "name": "payoutAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateDropURI",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "seaDropImpl"
      },
      {
        "type": "string",
        "name": "dropURI"
      }
    ],
    "outputs": []
  },
  {
    "name": "updatePayer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "seaDropImpl"
      },
      {
        "type": "address",
        "name": "payer"
      },
      {
        "type": "bool",
        "name": "allowed"
      }
    ],
    "outputs": []
  },
  {
    "name": "updatePublicDrop",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "seaDropImpl"
      },
      {
        "type": "tuple",
        "name": "publicDrop",
        "components": [
          {
            "type": "uint80",
            "name": "mintPrice"
          },
          {
            "type": "uint48",
            "name": "startTime"
          },
          {
            "type": "uint48",
            "name": "endTime"
          },
          {
            "type": "uint16",
            "name": "maxTotalMintableByWallet"
          },
          {
            "type": "uint16",
            "name": "feeBps"
          },
          {
            "type": "bool",
            "name": "restrictFeeRecipients"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "updateSignedMintValidationParams",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "seaDropImpl"
      },
      {
        "type": "address",
        "name": "signer"
      },
      {
        "type": "tuple",
        "name": "signedMintValidationParams",
        "components": [
          {
            "type": "uint80",
            "name": "minMintPrice"
          },
          {
            "type": "uint24",
            "name": "maxMaxTotalMintableByWallet"
          },
          {
            "type": "uint40",
            "name": "minStartTime"
          },
          {
            "type": "uint40",
            "name": "maxEndTime"
          },
          {
            "type": "uint40",
            "name": "maxMaxTokenSupplyForStage"
          },
          {
            "type": "uint16",
            "name": "minFeeBps"
          },
          {
            "type": "uint16",
            "name": "maxFeeBps"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "updateTokenGatedDrop",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "seaDropImpl"
      },
      {
        "type": "address",
        "name": "allowedNftToken"
      },
      {
        "type": "tuple",
        "name": "dropStage",
        "components": [
          {
            "type": "uint80",
            "name": "mintPrice"
          },
          {
            "type": "uint16",
            "name": "maxTotalMintableByWallet"
          },
          {
            "type": "uint48",
            "name": "startTime"
          },
          {
            "type": "uint48",
            "name": "endTime"
          },
          {
            "type": "uint8",
            "name": "dropStageIndex"
          },
          {
            "type": "uint32",
            "name": "maxTokenSupplyForStage"
          },
          {
            "type": "uint16",
            "name": "feeBps"
          },
          {
            "type": "bool",
            "name": "restrictFeeRecipients"
          }
        ]
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract