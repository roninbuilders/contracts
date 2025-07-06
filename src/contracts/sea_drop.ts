import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35118,
  address: '0x00005ea00ac477b1030ce78506496e8c2de24bf5' as const,
  contract_name: 'SeaDrop',
  display_name: 'Sea Drop',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739369871,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "CreatorPayoutAddressCannotBeZeroAddress",
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
    "name": "FeeRecipientCannotBeZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeeRecipientNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeeRecipientNotPresent",
    "type": "error",
    "inputs": []
  },
  {
    "name": "IncorrectPayment",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "got"
      },
      {
        "type": "uint256",
        "name": "want"
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
    "name": "InvalidProof",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "recoveredSigner"
      }
    ]
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
    "name": "InvalidSignedMintPrice",
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
    "name": "MintQuantityCannotBeZero",
    "type": "error",
    "inputs": []
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
    "name": "OnlyINonFungibleSeaDropToken",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      }
    ]
  },
  {
    "name": "PayerCannotBeZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PayerNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PayerNotPresent",
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
    "name": "TokenGatedDropAllowedNftTokenCannotBeDropToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenGatedDropAllowedNftTokenCannotBeZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenGatedDropStageNotPresent",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenGatedNotTokenOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "address",
        "name": "allowedNftToken"
      },
      {
        "type": "uint256",
        "name": "allowedNftTokenId"
      }
    ]
  },
  {
    "name": "TokenGatedTokenIdAlreadyRedeemed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "address",
        "name": "allowedNftToken"
      },
      {
        "type": "uint256",
        "name": "allowedNftTokenId"
      }
    ]
  },
  {
    "name": "AllowListUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
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
        "name": "nftContract",
        "indexed": true
      },
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
    "name": "CreatorPayoutAddressUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newPayoutAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "DropURIUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "string",
        "name": "newDropURI"
      }
    ]
  },
  {
    "name": "PayerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
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
    "name": "PublicDropUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
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
    ]
  },
  {
    "name": "SeaDropMint",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "minter",
        "indexed": true
      },
      {
        "type": "address",
        "name": "feeRecipient",
        "indexed": true
      },
      {
        "type": "address",
        "name": "payer"
      },
      {
        "type": "uint256",
        "name": "quantityMinted"
      },
      {
        "type": "uint256",
        "name": "unitMintPrice"
      },
      {
        "type": "uint256",
        "name": "feeBps"
      },
      {
        "type": "uint256",
        "name": "dropStageIndex"
      }
    ]
  },
  {
    "name": "SignedMintValidationParamsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "signer",
        "indexed": true
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
    ]
  },
  {
    "name": "TokenGatedDropStageUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "allowedNftToken",
        "indexed": true
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
    ]
  },
  {
    "name": "getAllowListMerkleRoot",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getAllowedFeeRecipients",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getAllowedNftTokenIdIsRedeemed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "address",
        "name": "allowedNftToken"
      },
      {
        "type": "uint256",
        "name": "allowedNftTokenId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "getCreatorPayoutAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getFeeRecipientIsAllowed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "address",
        "name": "feeRecipient"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "getPayerIsAllowed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "address",
        "name": "payer"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "getPayers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getPublicDrop",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
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
    ]
  },
  {
    "name": "getSignedMintValidationParams",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "address",
        "name": "signer"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
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
    ]
  },
  {
    "name": "getSigners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getTokenGatedAllowedTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getTokenGatedDrop",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "address",
        "name": "allowedNftToken"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
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
    ]
  },
  {
    "name": "mintAllowList",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "address",
        "name": "feeRecipient"
      },
      {
        "type": "address",
        "name": "minterIfNotPayer"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "tuple",
        "name": "mintParams",
        "components": [
          {
            "type": "uint256",
            "name": "mintPrice"
          },
          {
            "type": "uint256",
            "name": "maxTotalMintableByWallet"
          },
          {
            "type": "uint256",
            "name": "startTime"
          },
          {
            "type": "uint256",
            "name": "endTime"
          },
          {
            "type": "uint256",
            "name": "dropStageIndex"
          },
          {
            "type": "uint256",
            "name": "maxTokenSupplyForStage"
          },
          {
            "type": "uint256",
            "name": "feeBps"
          },
          {
            "type": "bool",
            "name": "restrictFeeRecipients"
          }
        ]
      },
      {
        "type": "bytes32[]",
        "name": "proof"
      }
    ],
    "outputs": []
  },
  {
    "name": "mintAllowedTokenHolder",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "address",
        "name": "feeRecipient"
      },
      {
        "type": "address",
        "name": "minterIfNotPayer"
      },
      {
        "type": "tuple",
        "name": "mintParams",
        "components": [
          {
            "type": "address",
            "name": "allowedNftToken"
          },
          {
            "type": "uint256[]",
            "name": "allowedNftTokenIds"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "mintPublic",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "address",
        "name": "feeRecipient"
      },
      {
        "type": "address",
        "name": "minterIfNotPayer"
      },
      {
        "type": "uint256",
        "name": "quantity"
      }
    ],
    "outputs": []
  },
  {
    "name": "mintSigned",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "address",
        "name": "feeRecipient"
      },
      {
        "type": "address",
        "name": "minterIfNotPayer"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "tuple",
        "name": "mintParams",
        "components": [
          {
            "type": "uint256",
            "name": "mintPrice"
          },
          {
            "type": "uint256",
            "name": "maxTotalMintableByWallet"
          },
          {
            "type": "uint256",
            "name": "startTime"
          },
          {
            "type": "uint256",
            "name": "endTime"
          },
          {
            "type": "uint256",
            "name": "dropStageIndex"
          },
          {
            "type": "uint256",
            "name": "maxTokenSupplyForStage"
          },
          {
            "type": "uint256",
            "name": "feeBps"
          },
          {
            "type": "bool",
            "name": "restrictFeeRecipients"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "salt"
      },
      {
        "type": "bytes",
        "name": "signature"
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
    "name": "updateCreatorPayoutAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_payoutAddress"
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