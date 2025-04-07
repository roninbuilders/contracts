import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27423,
  address: '0x216284b046470ae95bad9bbe935c670864382d4b' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Mystery Box Wrap Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x8c570a8641cfd3be41ce5cfed5d727bcdbb9e251',
  created_at: 1741604108,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ]
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
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "name": "BuyWayError",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ConfigNotFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EndedAlready",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FinanceNoSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "HeroAmountError",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidParameters",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidProof",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LengthError",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MysteryBoxIdZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NativeTokenTransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotBeginYet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotEnoughSupply",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OrderExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OverMaxSupply",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OverSupplyOnThisAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RemoveConfigFail",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SaltAlreadyBeenProcessed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TimeError",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ValueIsNotEqual",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ValueIsNotZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AddMysteryBoxConfig",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "configId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "address",
            "name": "token"
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
            "type": "uint256",
            "name": "totalSupply"
          },
          {
            "type": "uint256",
            "name": "allowAmountPerAddress"
          },
          {
            "type": "bytes32",
            "name": "merkleRoot"
          },
          {
            "type": "uint256",
            "name": "mysteryBoxId"
          },
          {
            "type": "uint256",
            "name": "price"
          }
        ]
      }
    ]
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
    "name": "Buy",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "configId"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "mysteryBoxId"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "price"
      }
    ]
  },
  {
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
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
    "name": "Open",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "mysteryBoxId"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "OpenWithSignature",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "mysteryBoxId"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256[]",
        "name": "heroIds"
      },
      {
        "type": "uint256",
        "name": "salt"
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
    "name": "RemoveMysteryBoxConfig",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "configId",
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
    "name": "SetFinanceAddress",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ]
  },
  {
    "name": "SetMaxTotalSupply",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "mysteryBoxId"
      },
      {
        "type": "uint256",
        "name": "_maxTotalSupply"
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
    "name": "UpdateMysteryBoxConfig",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "configId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "address",
            "name": "token"
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
            "type": "uint256",
            "name": "totalSupply"
          },
          {
            "type": "uint256",
            "name": "allowAmountPerAddress"
          },
          {
            "type": "bytes32",
            "name": "merkleRoot"
          },
          {
            "type": "uint256",
            "name": "mysteryBoxId"
          },
          {
            "type": "uint256",
            "name": "price"
          }
        ]
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
    "name": "WhiteListBuy",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "configId"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "mysteryBoxId"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "price"
      }
    ]
  },
  {
    "name": "CASHIER",
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
    "name": "addMysteryBoxConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "address",
            "name": "token"
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
            "type": "uint256",
            "name": "totalSupply"
          },
          {
            "type": "uint256",
            "name": "allowAmountPerAddress"
          },
          {
            "type": "bytes32",
            "name": "merkleRoot"
          },
          {
            "type": "uint256",
            "name": "mysteryBoxId"
          },
          {
            "type": "uint256",
            "name": "price"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "addressAmountHasMint",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
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
    "name": "amountSupply",
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
    "name": "buy",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "configId"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
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
    "name": "financeAddress",
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
    "name": "hero",
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
        "name": "_mysteryBox"
      },
      {
        "type": "address",
        "name": "_hero"
      }
    ],
    "outputs": []
  },
  {
    "name": "maxTotalSupply",
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
    "name": "mysteryBox",
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
    "name": "mysteryBoxConfigIndex",
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
    "name": "mysteryBoxConfigs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "token"
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
        "type": "uint256",
        "name": "totalSupply"
      },
      {
        "type": "uint256",
        "name": "allowAmountPerAddress"
      },
      {
        "type": "bytes32",
        "name": "merkleRoot"
      },
      {
        "type": "uint256",
        "name": "mysteryBoxId"
      },
      {
        "type": "uint256",
        "name": "price"
      }
    ]
  },
  {
    "name": "openHistorySalt",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "openWithSignature",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "address",
            "name": "fromCashier"
          },
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint256",
            "name": "mysteryBoxId"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256[]",
            "name": "heroIds"
          },
          {
            "type": "uint256",
            "name": "salt"
          },
          {
            "type": "uint256",
            "name": "expireAt"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "signature"
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
    "name": "removeMysteryBoxConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "configId"
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
    "name": "setFinanceAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxTotalSupply",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "mysteryBoxId"
      },
      {
        "type": "uint256",
        "name": "_maxTotalSupply"
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "updateMysteryBoxConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "configId"
      },
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "address",
            "name": "token"
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
            "type": "uint256",
            "name": "totalSupply"
          },
          {
            "type": "uint256",
            "name": "allowAmountPerAddress"
          },
          {
            "type": "bytes32",
            "name": "merkleRoot"
          },
          {
            "type": "uint256",
            "name": "mysteryBoxId"
          },
          {
            "type": "uint256",
            "name": "price"
          }
        ]
      }
    ],
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
  },
  {
    "name": "whiteListBuy",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "configId"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes32[]",
        "name": "merkleProof"
      },
      {
        "type": "uint256",
        "name": "walletLimit"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract