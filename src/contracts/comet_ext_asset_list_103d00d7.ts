import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 33459,
  address: '0x690f8ee32ce906c6288dd97ce4f9af57103d00d7' as const,
  contract_name: 'CometExtAssetList',
  display_name: 'Comet Ext Asset List',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744106905,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "bytes32",
            "name": "name32"
          },
          {
            "type": "bytes32",
            "name": "symbol32"
          }
        ]
      },
      {
        "type": "address",
        "name": "assetListFactoryAddress"
      }
    ]
  },
  {
    "name": "BadAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BadNonce",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BadSignatory",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInt104",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInt256",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidUInt104",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidUInt128",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidUInt64",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidValueS",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidValueV",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NegativeNumber",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignatureExpired",
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
        "name": "spender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "allow",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "manager"
      },
      {
        "type": "bool",
        "name": "isAllowed_"
      }
    ],
    "outputs": []
  },
  {
    "name": "allowBySig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "manager"
      },
      {
        "type": "bool",
        "name": "isAllowed_"
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "expiry"
      },
      {
        "type": "uint8",
        "name": "v"
      },
      {
        "type": "bytes32",
        "name": "r"
      },
      {
        "type": "bytes32",
        "name": "s"
      }
    ],
    "outputs": []
  },
  {
    "name": "allowance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "spender"
      }
    ],
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
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "assetListFactory",
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
    "name": "baseAccrualScale",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "baseIndexScale",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "baseTrackingAccrued",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "collateralBalanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "address",
        "name": "asset"
      }
    ],
    "outputs": [
      {
        "type": "uint128"
      }
    ]
  },
  {
    "name": "factorScale",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "hasPermission",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "manager"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isAllowed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
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
    "name": "liquidatorPoints",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint32",
        "name": "numAbsorbs"
      },
      {
        "type": "uint64",
        "name": "numAbsorbed"
      },
      {
        "type": "uint128",
        "name": "approxSpend"
      },
      {
        "type": "uint32",
        "name": "_reserved"
      }
    ]
  },
  {
    "name": "maxAssets",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
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
    "name": "priceScale",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
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
    "name": "totalsBasic",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint64",
            "name": "baseSupplyIndex"
          },
          {
            "type": "uint64",
            "name": "baseBorrowIndex"
          },
          {
            "type": "uint64",
            "name": "trackingSupplyIndex"
          },
          {
            "type": "uint64",
            "name": "trackingBorrowIndex"
          },
          {
            "type": "uint104",
            "name": "totalSupplyBase"
          },
          {
            "type": "uint104",
            "name": "totalBorrowBase"
          },
          {
            "type": "uint40",
            "name": "lastAccrualTime"
          },
          {
            "type": "uint8",
            "name": "pauseFlags"
          }
        ]
      }
    ]
  },
  {
    "name": "totalsCollateral",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint128",
        "name": "totalSupplyAsset"
      },
      {
        "type": "uint128",
        "name": "_reserved"
      }
    ]
  },
  {
    "name": "userBasic",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "int104",
        "name": "principal"
      },
      {
        "type": "uint64",
        "name": "baseTrackingIndex"
      },
      {
        "type": "uint64",
        "name": "baseTrackingAccrued"
      },
      {
        "type": "uint16",
        "name": "assetsIn"
      },
      {
        "type": "uint8",
        "name": "_reserved"
      }
    ]
  },
  {
    "name": "userCollateral",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint128",
        "name": "balance"
      },
      {
        "type": "uint128",
        "name": "_reserved"
      }
    ]
  },
  {
    "name": "userNonce",
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
    "name": "version",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract