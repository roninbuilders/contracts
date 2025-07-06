import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35183,
  address: '0x60cec26ef95287ff7ec2cb09ba6d5039b4a9a080' as const,
  contract_name: 'MYTEST',
  display_name: 'MYTEST',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1748776522,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
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
    "name": "NotCompatibleWithSpotMints",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnableInvalidOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "OwnableUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
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
    "name": "ReentrancyGuardReentrantCall",
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
    "name": "MaxPerWalletChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMax"
      }
    ]
  },
  {
    "name": "MintPriceChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newPrice"
      }
    ]
  },
  {
    "name": "NFTgenSupportChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "enabled"
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
    "name": "PaymentFailed",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "reason"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "PayoutWalletChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "wallet"
      }
    ]
  },
  {
    "name": "ReferralEarned",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "referrer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "referee",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "SaleStateChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "active"
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
    "name": "WhitelistStateChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "active"
      }
    ]
  },
  {
    "name": "MAX_PER_WALLET",
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
    "name": "MAX_SUPPLY",
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
    "name": "MINT_PRICE",
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
    "name": "NFTGEN_FEE_WALLET",
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
    "name": "WHITELIST_MAX_PER_WALLET",
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
    "name": "WHITELIST_PRICE",
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
    "name": "addToWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "addresses"
      }
    ],
    "outputs": []
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
    "name": "calculateMintCost",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "quantity"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalCost"
      },
      {
        "type": "uint256",
        "name": "mintPrice"
      },
      {
        "type": "uint256",
        "name": "nftgenFee"
      },
      {
        "type": "bool",
        "name": "isWhitelistPrice"
      }
    ]
  },
  {
    "name": "calculateMintCostWithReferral",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "quantity"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalCost"
      },
      {
        "type": "uint256",
        "name": "mintPrice"
      },
      {
        "type": "uint256",
        "name": "nftgenFee"
      },
      {
        "type": "uint256",
        "name": "referralReward"
      },
      {
        "type": "bool",
        "name": "isWhitelistPrice"
      }
    ]
  },
  {
    "name": "defaultReferralRate",
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
    "name": "getMintInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "canMint"
      },
      {
        "type": "uint256",
        "name": "maxAllowed"
      },
      {
        "type": "uint256",
        "name": "alreadyMinted"
      },
      {
        "type": "uint256",
        "name": "remaining"
      },
      {
        "type": "uint256",
        "name": "currentPrice"
      },
      {
        "type": "bool",
        "name": "isWhitelistEligible"
      }
    ]
  },
  {
    "name": "getReferralInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "referrer"
      },
      {
        "type": "uint256",
        "name": "earnings"
      }
    ]
  },
  {
    "name": "getWhitelistInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "active"
      },
      {
        "type": "uint256",
        "name": "whitelistPrice"
      },
      {
        "type": "uint256",
        "name": "maxPerWallet"
      },
      {
        "type": "uint256",
        "name": "totalWhitelisted"
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
    "name": "isWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isWhitelistedAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "mint",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "quantity"
      }
    ],
    "outputs": []
  },
  {
    "name": "mintWithReferral",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "address",
        "name": "referrer"
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
    "name": "nftgenFeePerToken",
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
    "name": "numberMinted",
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
    "name": "payoutWallet",
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
    "name": "referralEarnings",
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
    "name": "referralSystemActive",
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
    "name": "referredBy",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "removeFromWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "addresses"
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
    "name": "saleActive",
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
    "name": "setMaxPerWallet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMax"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMintPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "setNFTgenFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newFee"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPayoutWallet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newWallet"
      }
    ],
    "outputs": []
  },
  {
    "name": "setReferralRate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newRate"
      }
    ],
    "outputs": []
  },
  {
    "name": "setWhitelistPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "supportNFTgen",
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
    "name": "toggleNFTgenSupport",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "toggleReferralSystem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "toggleSale",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "toggleWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
    "name": "whitelistActive",
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
    "name": "whitelistMinted",
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
    "name": "whitelistedAddresses",
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
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract