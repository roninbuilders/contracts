import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37772,
  address: '0x2b86f9d1d9bad3e2c9a174b5b614f97734c12284' as const,
  contract_name: 'NFTSaleContractV2',
  display_name: 'NFT Sale Contract V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1762803102,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "uint256",
        "name": "initPlatformSalesSharePercent"
      },
      {
        "type": "uint256",
        "name": "initPartnerSalesSharePercent"
      },
      {
        "type": "address",
        "name": "nftContractAddress"
      },
      {
        "type": "address",
        "name": "currencyContractAddress"
      }
    ]
  },
  {
    "name": "BuyNft",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "uint256",
        "name": "nftId"
      },
      {
        "type": "uint256",
        "name": "nftQuantity"
      },
      {
        "type": "uint256",
        "name": "nftPrice"
      },
      {
        "type": "uint256",
        "name": "nftTotalPrice"
      },
      {
        "type": "uint256",
        "name": "platformShareAmount"
      },
      {
        "type": "uint256",
        "name": "partnerShareAmount"
      }
    ]
  },
  {
    "name": "BuyNftByReseller",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "uint256",
        "name": "nftId"
      },
      {
        "type": "uint256",
        "name": "nftQuantity"
      },
      {
        "type": "uint256",
        "name": "nftPrice"
      },
      {
        "type": "uint256",
        "name": "nftTotalPrice"
      },
      {
        "type": "uint256",
        "name": "platformShareAmount"
      },
      {
        "type": "uint256",
        "name": "partnerShareAmount"
      },
      {
        "type": "address",
        "name": "nftTo"
      },
      {
        "type": "string",
        "name": "refCode"
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
    "name": "RemoveNftFromSale",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nftId"
      },
      {
        "type": "uint256",
        "name": "nftQuantity"
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
    "name": "SetNftPrice",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nftId"
      },
      {
        "type": "uint256",
        "name": "nftPrice"
      }
    ]
  },
  {
    "name": "SetNftToSale",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nftId"
      },
      {
        "type": "uint256",
        "name": "nftQuantity"
      },
      {
        "type": "uint256",
        "name": "nftPrice"
      }
    ]
  },
  {
    "name": "SetSalesSharePercent",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "platformSalesSharePercent"
      },
      {
        "type": "uint256",
        "name": "partnerSalesSharePercent"
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
    "name": "WithdrawPartnerSalesShareAmount",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "partnerWallet"
      },
      {
        "type": "uint256",
        "name": "partnerShareAmount"
      }
    ]
  },
  {
    "name": "WithdrawPlatformSalesShareAmount",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "platformWallet"
      },
      {
        "type": "uint256",
        "name": "platformShareAmount"
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
    "name": "DENOMINATOR",
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
    "name": "MAX_SHARE_PERCENT",
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
    "name": "NFT_SELLER_ROLE",
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
    "name": "PARAMETER_SETTER_ROLE",
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
    "name": "PARTNER_ROLE",
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
    "name": "PAUSER_ROLE",
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
    "name": "PLATFORM_ROLE",
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
    "name": "RESELLER_ROLE",
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
    "name": "buyNft",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "nftId"
      },
      {
        "type": "uint256",
        "name": "nftQuantity"
      }
    ],
    "outputs": []
  },
  {
    "name": "buyNftByReseller",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "nftId"
      },
      {
        "type": "uint256",
        "name": "nftQuantity"
      },
      {
        "type": "address",
        "name": "nftTo"
      },
      {
        "type": "string",
        "name": "refCode"
      }
    ],
    "outputs": []
  },
  {
    "name": "calculateSalesShareAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "platformShareAmount"
      },
      {
        "type": "uint256",
        "name": "partnerShareAmount"
      }
    ]
  },
  {
    "name": "currencyContract",
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
    "name": "nftContract",
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
    "name": "nftPrice",
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
    "name": "nftSoldQuantity",
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
    "name": "partnerSalesShareAmountTotal",
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
    "name": "partnerSalesSharePercent",
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
    "name": "platformSalesShareAmountTotal",
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
    "name": "platformSalesSharePercent",
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
    "name": "removeNftFromSale",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "nftId"
      }
    ],
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
    "name": "setNftPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "nftId"
      },
      {
        "type": "uint256",
        "name": "price"
      }
    ],
    "outputs": []
  },
  {
    "name": "setNftToSale",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "nftId"
      },
      {
        "type": "uint256",
        "name": "nftQuantity"
      },
      {
        "type": "uint256",
        "name": "price"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSalesShareAmountPercent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newPlatformSalesSharePercent"
      },
      {
        "type": "uint256",
        "name": "newPartnerSalesSharePercent"
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawPartnerSalesShareAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawPlatformSalesShareAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract