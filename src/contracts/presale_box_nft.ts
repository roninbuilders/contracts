import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37368,
  address: '0x3a3ea46230688a20ee45ec851dc81f76371f1235' as const,
  contract_name: 'PresaleBoxNFT',
  display_name: 'Presale Box NFT',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1759776780,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_baseURI"
      },
      {
        "type": "address[]",
        "name": "_minters"
      },
      {
        "type": "address[]",
        "name": "_burners"
      },
      {
        "type": "address",
        "name": "_royaltyFeeTreasury"
      },
      {
        "type": "uint256",
        "name": "_royaltyFeeNumerator"
      }
    ]
  },
  {
    "name": "BasicRoyalties__InvalidAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BasicRoyalties__InvalidRoyaltyFeeNumerator",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenBase__InvalidTransferValidatorContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MokuBaseERC721C__InvalidAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MokuBaseERC721C__InvalidInputLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MokuBaseERC721C__NotBurner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MokuBaseERC721C__NotMinter",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PresaleBoxNFT__MintBatchDisabled",
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
    "name": "AutomaticApprovalOfTransferValidatorSet",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "autoApproved"
      }
    ]
  },
  {
    "name": "BaseTokenURIUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "baseTokenURI"
      }
    ]
  },
  {
    "name": "BurnerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "burner",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isBurner"
      }
    ]
  },
  {
    "name": "FeeTreasuryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newFeeTreasury",
        "indexed": true
      }
    ]
  },
  {
    "name": "ForcedTokenURIUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "forcedTokenURI"
      },
      {
        "type": "bool",
        "name": "isForcedTokenURI"
      }
    ]
  },
  {
    "name": "LockManagerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "lockManager",
        "indexed": true
      }
    ]
  },
  {
    "name": "MinterUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "minter",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isMinter"
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
    "name": "RoyaltyFeeNumeratorUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newRoyaltyFeeNumerator",
        "indexed": true
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
    "name": "FEE_DENOMINATOR",
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
    "name": "autoApproveTransfersFromValidator",
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
    "name": "burnBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "burners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "burner"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isBurner"
      }
    ]
  },
  {
    "name": "forcedTokenURI",
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
        "type": "address",
        "name": "validator"
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
        "type": "bool",
        "name": "isApproved"
      }
    ]
  },
  {
    "name": "isForcedTokenURI",
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
    "name": "lockManager",
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
    "name": "mintBatch",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "address[]"
      },
      {
        "type": "uint256[]"
      }
    ],
    "outputs": []
  },
  {
    "name": "mintBatchAmounts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_to"
      },
      {
        "type": "uint256[]",
        "name": "_amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "minters",
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
        "type": "bool",
        "name": "isMinter"
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "royaltyFeeNumerator",
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
    "name": "royaltyFeeTreasury",
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
    "name": "setAutomaticApprovalOfTransfersFromValidator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "autoApprove"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBaseTokenURI",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_newBaseTokenURI"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBurner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_burner"
      },
      {
        "type": "bool",
        "name": "_isBurner"
      }
    ],
    "outputs": []
  },
  {
    "name": "setForcedTokenURI",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_forcedTokenURI"
      },
      {
        "type": "bool",
        "name": "_isForcedTokenURI"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLockManager",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_lockManager"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_minter"
      },
      {
        "type": "bool",
        "name": "_isMinter"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRoyaltyFeeNumerator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newRoyaltyFeeNumerator"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRoyaltyFeeTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newRoyaltyFeeTreasury"
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
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4",
        "name": "_interfaceId"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract