import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27620,
  address: '0xf8147719265b1b6ef9bf52c373d757ff18ba1cd8' as const,
  contract_name: 'FishingFrenzyChests',
  display_name: 'Fishing Frenzy Chests',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742094893,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "royaltyReceiver_"
      },
      {
        "type": "uint96",
        "name": "royaltyFeeNumerator_"
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
        "name": "defaultAdminAddress"
      },
      {
        "type": "address",
        "name": "adminAddress"
      },
      {
        "type": "address",
        "name": "signer"
      }
    ]
  },
  {
    "name": "AirdropMint__AirdropBatchSizeMustBeGreaterThanZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AirdropMint__CannotMintToZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AirdropMint__MaxAirdropSupplyCannotBeSetToMaxUint256",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AirdropMint__MaxAirdropSupplyCannotBeSetToZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AirdropMint__MaxAirdropSupplyExceeded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenBase__InvalidTransferValidatorContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenBase__SetTransferValidatorFirst",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MaxSupplyBase__CannotClaimMoreThanMaximumAmountOfOwnerMints",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MaxSupplyBase__CannotMintToAddressZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MaxSupplyBase__MaxSupplyCannotBeSetToMaxUint256",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MaxSupplyBase__MaxSupplyExceeded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MaxSupplyBase__MintedQuantityMustBeGreaterThanZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ShouldNotMintToBurnAddress",
    "type": "error",
    "inputs": []
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
    "name": "ChestAirdropBatch",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint16",
        "name": "tierId"
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
    "name": "ChestBurned",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "ChestMintedBatch",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint16",
        "name": "tierId"
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
    "name": "ChestTierUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint16",
        "name": "tierId",
        "indexed": true
      },
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "metadataURI"
      }
    ]
  },
  {
    "name": "DefaultRoyaltySet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "receiver",
        "indexed": true
      },
      {
        "type": "uint96",
        "name": "feeNumerator"
      }
    ]
  },
  {
    "name": "MaxSupplyInitialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "maxSupply"
      },
      {
        "type": "uint256",
        "name": "maxOwnerMints"
      }
    ]
  },
  {
    "name": "NonceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_nonce",
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
    "name": "TokenRepairdWithSignature",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "signer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "repairedTo",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "repairRodRequest",
        "components": [
          {
            "type": "address",
            "name": "from"
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
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "fee"
          }
        ]
      }
    ]
  },
  {
    "name": "TokenRoyaltySet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "receiver",
        "indexed": true
      },
      {
        "type": "uint96",
        "name": "feeNumerator"
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
        "type": "tuple",
        "name": "mintRequest",
        "components": [
          {
            "type": "address",
            "name": "to"
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
          },
          {
            "type": "uint16[]",
            "name": "itemIds"
          },
          {
            "type": "uint256[]",
            "name": "quantities"
          }
        ]
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
    "name": "ADMIN_ROLE",
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
    "name": "DEFAULT_OPERATOR_WHITELIST_ID",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint120"
      }
    ]
  },
  {
    "name": "DEFAULT_TRANSFER_SECURITY_LEVEL",
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
    "name": "DEFAULT_TRANSFER_VALIDATOR",
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
    "name": "MINTER_ROLE",
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
    "name": "airdrop",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "req",
        "components": [
          {
            "type": "uint16",
            "name": "tierId"
          },
          {
            "type": "address[]",
            "name": "to"
          },
          {
            "type": "uint256[]",
            "name": "quantities"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "airdropMint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "to"
      }
    ],
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
    "name": "chestTierIdMapping",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint16"
      }
    ]
  },
  {
    "name": "chestTiers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint16"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "metadataURI"
      }
    ]
  },
  {
    "name": "factoryAddress",
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
    "name": "getChestsByOwner",
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
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint16",
            "name": "tierId"
          }
        ]
      }
    ]
  },
  {
    "name": "getNextTokenId",
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
    "name": "getPermittedContractReceivers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
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
    "name": "getSecurityPolicy",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint8",
            "name": "transferSecurityLevel"
          },
          {
            "type": "uint120",
            "name": "operatorWhitelistId"
          },
          {
            "type": "uint120",
            "name": "permittedContractReceiversId"
          }
        ]
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
    "name": "getWhitelistedOperators",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
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
    "name": "isContractReceiverPermitted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "receiver"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isOperatorWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "isTransferAllowed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
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
    "name": "mintBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint16[]",
        "name": "tierIds"
      },
      {
        "type": "uint256[]",
        "name": "quantities"
      }
    ],
    "outputs": []
  },
  {
    "name": "mintBatchByTier",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint16",
        "name": "tierId"
      },
      {
        "type": "uint256",
        "name": "quantity"
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
        "name": "req",
        "components": [
          {
            "type": "address",
            "name": "to"
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
          },
          {
            "type": "uint16[]",
            "name": "itemIds"
          },
          {
            "type": "uint256[]",
            "name": "quantities"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "signer"
      }
    ]
  },
  {
    "name": "mintedSupply",
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
    "name": "nonces",
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
    "name": "ownerMint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "quantity"
      }
    ],
    "outputs": []
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
    "name": "remainingAirdropSupply",
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
    "name": "remainingOwnerMints",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
        "name": "_tokenId"
      },
      {
        "type": "uint256",
        "name": "_salePrice"
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
        "name": "approved"
      }
    ],
    "outputs": []
  },
  {
    "name": "setChestTier",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint16",
        "name": "tierId"
      },
      {
        "type": "string",
        "name": "name_"
      },
      {
        "type": "string",
        "name": "metadataURI_"
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
    "name": "setFactoryAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newFactoryAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSignerAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newSigner"
      }
    ],
    "outputs": []
  },
  {
    "name": "setToCustomSecurityPolicy",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "level"
      },
      {
        "type": "uint120",
        "name": "operatorWhitelistId"
      },
      {
        "type": "uint120",
        "name": "permittedContractReceiversAllowlistId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setToCustomValidatorAndSecurityPolicy",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "validator"
      },
      {
        "type": "uint8",
        "name": "level"
      },
      {
        "type": "uint120",
        "name": "operatorWhitelistId"
      },
      {
        "type": "uint120",
        "name": "permittedContractReceiversAllowlistId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setToDefaultSecurityPolicy",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setTokenRoyalty",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
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
    "name": "setTransferValidator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "transferValidator_"
      }
    ],
    "outputs": []
  },
  {
    "name": "signerAddress",
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
    "name": "stateOf",
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
        "type": "bytes"
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
    "name": "tokenByIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "tokenOfOwnerByIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
        "name": "newOwner"
      }
    ],
    "outputs": []
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
          },
          {
            "type": "uint16[]",
            "name": "itemIds"
          },
          {
            "type": "uint256[]",
            "name": "quantities"
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
        "type": "bool",
        "name": "success"
      },
      {
        "type": "address",
        "name": "signer"
      }
    ]
  },
  {
    "name": "verifyRepair",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "_req",
        "components": [
          {
            "type": "address",
            "name": "from"
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
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "fee"
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
        "type": "bool",
        "name": "success"
      },
      {
        "type": "address",
        "name": "signer"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract