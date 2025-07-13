import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36096,
  address: '0xaa3fbda03270fbd2b45006e6f9be3afd40f9455a' as const,
  contract_name: 'Unnamed Contract',
  display_name: 'Unnamed Contract',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x9f36ee33fd56c7d9a78facd3249c580b1ca464a2',
  created_at: 1745423359,
  abi: [] as const satisfies Abi,
  proxy_abi: [
  {
    "name": "AccountBalanceOverflow",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AllowedSeaportCannotBeZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ArrayLengthsMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CannotExceedMaxSupplyOfUint64",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "got"
      }
    ]
  },
  {
    "name": "CreatorPayoutAddressCannotBeZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorPayoutBasisPointsCannotBeZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorPayoutsNotSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DuplicateFeeRecipient",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DuplicatePayer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DuplicateSigner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeeRecipientCannotBeZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeeRecipientNotAllowed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "got"
      }
    ]
  },
  {
    "name": "FeeRecipientNotPresent",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidCallerOnlyAllowedSeaport",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      }
    ]
  },
  {
    "name": "InvalidCreatorPayoutBasisPoints",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "totalReceivedBasisPoints"
      }
    ]
  },
  {
    "name": "InvalidCreatorPayoutTotalBasisPoints",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "totalReceivedBasisPoints"
      }
    ]
  },
  {
    "name": "InvalidExtraDataEncoding",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "version"
      }
    ]
  },
  {
    "name": "InvalidFeeBps",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "feeBps"
      }
    ]
  },
  {
    "name": "InvalidFromAndToTokenId",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "fromTokenId"
      },
      {
        "type": "uint256",
        "name": "toTokenId"
      }
    ]
  },
  {
    "name": "InvalidProof",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignedEndTime",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "got"
      },
      {
        "type": "uint256",
        "name": "maximum"
      }
    ]
  },
  {
    "name": "InvalidSignedFeeBps",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "got"
      },
      {
        "type": "uint256",
        "name": "minimumOrMaximum"
      }
    ]
  },
  {
    "name": "InvalidSignedFromTokenId",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "got"
      },
      {
        "type": "uint256",
        "name": "minimum"
      }
    ]
  },
  {
    "name": "InvalidSignedMaxTokenSupplyForStage",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "got"
      },
      {
        "type": "uint256",
        "name": "maximum"
      }
    ]
  },
  {
    "name": "InvalidSignedMaxTotalMintableByWallet",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "got"
      },
      {
        "type": "uint256",
        "name": "maximum"
      }
    ]
  },
  {
    "name": "InvalidSignedMaxTotalMintableByWalletPerToken",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "got"
      },
      {
        "type": "uint256",
        "name": "maximum"
      }
    ]
  },
  {
    "name": "InvalidSignedMintPrice",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "got"
      },
      {
        "type": "uint256",
        "name": "minimum"
      }
    ]
  },
  {
    "name": "InvalidSignedPaymentToken",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "got"
      },
      {
        "type": "address",
        "name": "want"
      }
    ]
  },
  {
    "name": "InvalidSignedStartTime",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "got"
      },
      {
        "type": "uint256",
        "name": "minimum"
      }
    ]
  },
  {
    "name": "InvalidSignedToTokenId",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "got"
      },
      {
        "type": "uint256",
        "name": "maximum"
      }
    ]
  },
  {
    "name": "InvalidStartAndEndTime",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "endTime"
      }
    ]
  },
  {
    "name": "InvalidSubstandard",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "substandard"
      }
    ]
  },
  {
    "name": "MaxSupplyMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MintAmountsMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MintExceedsMaxSupply",
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
    "name": "MintQuantityExceedsMaxMintedPerWallet",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "total"
      },
      {
        "type": "uint256",
        "name": "allowed"
      }
    ]
  },
  {
    "name": "MintQuantityExceedsMaxMintedPerWalletForTokenId",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "total"
      },
      {
        "type": "uint256",
        "name": "allowed"
      }
    ]
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
    "name": "MintQuantityExceedsMaxTokenSupplyForStage",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "total"
      },
      {
        "type": "uint256",
        "name": "maxTokenSupplyForStage"
      }
    ]
  },
  {
    "name": "MustSpecifyERC1155ConsiderationItemForSeaDropMint",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NewOwnerIsZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoBalanceToWithdraw",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoHandoverRequest",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotActive",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "currentTimestamp"
      },
      {
        "type": "uint256",
        "name": "startTimestamp"
      },
      {
        "type": "uint256",
        "name": "endTimestamp"
      }
    ]
  },
  {
    "name": "NotOwnerNorApproved",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OfferContainsDuplicateTokenId",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "OnlyDelegateCalled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PayerCannotBeZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PayerNotAllowed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "got"
      }
    ]
  },
  {
    "name": "PayerNotPresent",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ProvenanceHashCannotBeSetAfterAlreadyBeingSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ProvenanceHashCannotBeSetAfterMintStarted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PublicDropStageNotPresent",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PublicDropsMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RoyaltyOverflow",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RoyaltyReceiverIsZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SameTransferValidator",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignatureAlreadyUsed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignedMintsMustRestrictFeeRecipients",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignerCannotBeZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignerNotPresent",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenIdNotWithinDropStageRange",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "startTokenId"
      },
      {
        "type": "uint256",
        "name": "endTokenId"
      }
    ]
  },
  {
    "name": "TransferToNonERC1155ReceiverImplementer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferToZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Unauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnsupportedExtraDataVersion",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "version"
      }
    ]
  },
  {
    "name": "UnsupportedFunctionSelector",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "selector"
      }
    ]
  },
  {
    "name": "AllowListUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "previousMerkleRoot",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "newMerkleRoot",
        "indexed": true
      },
      {
        "type": "string[]",
        "name": "publicKeyURI"
      },
      {
        "type": "string",
        "name": "allowListURI"
      }
    ]
  },
  {
    "name": "AllowedFeeRecipientUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "feeRecipient",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "allowed",
        "indexed": true
      }
    ]
  },
  {
    "name": "AllowedSeaportUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "allowedSeaport"
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
        "name": "isApproved"
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
    "name": "CreatorPayoutsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "creatorPayouts",
        "components": [
          {
            "type": "address",
            "name": "payoutAddress"
          },
          {
            "type": "uint16",
            "name": "basisPoints"
          }
        ]
      }
    ]
  },
  {
    "name": "DropURIUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "newDropURI"
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
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "newMaxSupply"
      }
    ]
  },
  {
    "name": "OwnershipHandoverCanceled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pendingOwner",
        "indexed": true
      }
    ]
  },
  {
    "name": "OwnershipHandoverRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pendingOwner",
        "indexed": true
      }
    ]
  },
  {
    "name": "OwnershipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldOwner",
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
    "name": "PayerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "payer",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "allowed",
        "indexed": true
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
    "name": "PublicDropUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "publicDrop",
        "components": [
          {
            "type": "uint80",
            "name": "startPrice"
          },
          {
            "type": "uint80",
            "name": "endPrice"
          },
          {
            "type": "uint40",
            "name": "startTime"
          },
          {
            "type": "uint40",
            "name": "endTime"
          },
          {
            "type": "bool",
            "name": "restrictFeeRecipients"
          },
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint24",
            "name": "fromTokenId"
          },
          {
            "type": "uint24",
            "name": "toTokenId"
          },
          {
            "type": "uint16",
            "name": "maxTotalMintableByWallet"
          },
          {
            "type": "uint16",
            "name": "maxTotalMintableByWalletPerToken"
          },
          {
            "type": "uint16",
            "name": "feeBps"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "index"
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
        "name": "basisPoints"
      }
    ]
  },
  {
    "name": "SeaDropMint",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "payer"
      },
      {
        "type": "uint256",
        "name": "dropStageIndex"
      }
    ]
  },
  {
    "name": "SeaDropTokenDeployed",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "tokenType"
      }
    ]
  },
  {
    "name": "SignerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "signer",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "allowed",
        "indexed": true
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
        "name": "amounts"
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
        "name": "amount"
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
    "type": "fallback",
    "stateMutability": "nonpayable"
  },
  {
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "result"
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
        "name": "owners"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "balances"
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
    "name": "batchBurn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "burn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "cancelOwnershipHandover",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "completeOwnershipHandover",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "pendingOwner"
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
        "type": "address",
        "name": "allowedConfigurer"
      },
      {
        "type": "address",
        "name": "allowedSeaport"
      },
      {
        "type": "string",
        "name": "name_"
      },
      {
        "type": "string",
        "name": "symbol_"
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
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "owner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "result"
      }
    ]
  },
  {
    "name": "ownershipHandoverExpiresAt",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "pendingOwner"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "result"
      }
    ]
  },
  {
    "name": "ownershipHandoverValidFor",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
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
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "requestOwnershipHandover",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
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
        "name": "isApproved"
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
    "name": "setMaxSupply",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
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
    "name": "totalMinted",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "totalSupply",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "uri",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract