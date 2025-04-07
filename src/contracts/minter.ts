import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3522,
  address: '0xd831d7245726e7a0fc400c8f3fb48071866655d8' as const,
  contract_name: 'Minter',
  display_name: 'Minter',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1722488740,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AccessControlBadConfirmation",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AccessControlUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "neededRole"
      }
    ]
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "AddressInsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "ERC1967InvalidImplementation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      }
    ]
  },
  {
    "name": "ERC1967NonPayable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EnforcedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpectedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAirdropId",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInputs",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidNFTContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRecipient",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTokenContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidValidatorContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ItemAlreadyMinted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MainnetNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoValidatorContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotEnoughPayment",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignatureAlreadyUsed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignatureExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StringsInsufficientHexLength",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "uint256",
        "name": "length"
      }
    ]
  },
  {
    "name": "UUPSUnauthorizedCallContext",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UUPSUnsupportedProxiableUUID",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "slot"
      }
    ]
  },
  {
    "name": "UnknownNetwork",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FundsSentToTreasury",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "treasuryAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "version"
      }
    ]
  },
  {
    "name": "MintPriceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "oldMintPrice"
      },
      {
        "type": "uint256",
        "name": "newMintPrice"
      }
    ]
  },
  {
    "name": "NFTAirDroppedBatch",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "airDropId",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "mintedTokenIds"
      },
      {
        "type": "uint256[]",
        "name": "genesisTokenIds"
      },
      {
        "type": "address[]",
        "name": "recipients"
      },
      {
        "type": "string",
        "name": "mergedDetails"
      }
    ]
  },
  {
    "name": "OffchainItemPurchased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "string",
        "name": "details"
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
    "name": "TreasuryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newAddress",
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
    "name": "UserMintedNFT",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "string",
        "name": "itemId"
      },
      {
        "type": "uint256",
        "name": "mintedTokenId",
        "indexed": true
      },
      {
        "type": "string",
        "name": "details"
      },
      {
        "type": "string",
        "name": "counterName"
      },
      {
        "type": "uint256",
        "name": "counterValue"
      }
    ]
  },
  {
    "name": "ValidatorContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newContract",
        "indexed": true
      }
    ]
  },
  {
    "name": "Withdraw",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "AIRDROP_ID_MULTIPLIER",
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
    "name": "UPGRADE_INTERFACE_VERSION",
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
    "name": "adminAirDropNFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "airDropId"
      },
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint256[]",
        "name": "genesisTokenIDs"
      },
      {
        "type": "address[]",
        "name": "accounts"
      },
      {
        "type": "bool",
        "name": "useSafeMint"
      },
      {
        "type": "string",
        "name": "details"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminGiftOffchainItem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "string",
        "name": "details"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminSetMintPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint256",
        "name": "mintPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminSetTreasuryAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newTreasuryAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminSetValidatorContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "validator"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminWithdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminWithdrawAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "baseVersion",
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
    "name": "encodeTokenId",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256",
        "name": "airDropId"
      },
      {
        "type": "uint256",
        "name": "genesisTokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getMintCounter",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "string",
        "name": "counterName"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getMintPrice",
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
        "type": "uint256"
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
    "name": "getUserMintedTokenId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "string",
        "name": "itemId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
        "name": "admin"
      }
    ],
    "outputs": []
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
    "name": "purchaseOffchainItem",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "payload",
        "components": [
          {
            "type": "uint256",
            "name": "price"
          },
          {
            "type": "uint256",
            "name": "expireTime"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "string",
            "name": "details"
          },
          {
            "type": "bytes",
            "name": "signature"
          },
          {
            "type": "bool",
            "name": "verifyMessageHash"
          }
        ]
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
        "name": "callerConfirmation"
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
    "name": "treasuryAddress",
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
  },
  {
    "name": "userMintNFT",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "payload",
        "components": [
          {
            "type": "address",
            "name": "nftContract"
          },
          {
            "type": "string",
            "name": "itemId"
          },
          {
            "type": "uint256",
            "name": "expireTime"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "string",
            "name": "details"
          },
          {
            "type": "bytes",
            "name": "signature"
          },
          {
            "type": "string",
            "name": "counterName"
          },
          {
            "type": "bool",
            "name": "verifyMessageHash"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "validatorContract",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract