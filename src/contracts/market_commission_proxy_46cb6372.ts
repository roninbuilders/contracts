import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 174,
  address: '0xb977383f1c797051ac5361f7ba75db0c46cb6372' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Market Commission Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x7c8b08dc1f3ac45dcf472a2374bf36c11a83d8b3',
  created_at: 1653288380,
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
        "type": "address",
        "name": "admin_"
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
    "name": "admin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "admin_"
      }
    ]
  },
  {
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "implementation_"
      }
    ]
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "CommissionSchemaUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "marketContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "schema",
        "components": [
          {
            "type": "tuple[]",
            "name": "others",
            "components": [
              {
                "type": "address",
                "name": "owner"
              },
              {
                "type": "uint256",
                "name": "ratio"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "axieInfinityRatio"
          },
          {
            "type": "uint256",
            "name": "skyMavisRatio"
          },
          {
            "type": "uint256",
            "name": "roninRatio"
          },
          {
            "type": "uint256",
            "name": "sumRatios"
          }
        ]
      }
    ]
  },
  {
    "name": "CutPercentagesUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "addresses"
      },
      {
        "type": "uint256[]",
        "name": "percentages"
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
    "name": "MarketTreasuryAddressesUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "skyMavisTreasury",
        "indexed": true
      },
      {
        "type": "address",
        "name": "axieInfinityTreasury",
        "indexed": true
      },
      {
        "type": "address",
        "name": "roninNetworkTreasury",
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
    "name": "TotalReserveSynced",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "oldReserve"
      },
      {
        "type": "uint256",
        "name": "newReserve"
      }
    ]
  },
  {
    "name": "UserReserveClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "UserReserveUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "WRONConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "wron"
      },
      {
        "type": "address",
        "name": "wronHelper"
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "COMMISSION_AND_REFERRAL_CAP",
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
    "name": "MARKET_CONTRACT_ROLE",
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
    "name": "MAX_PERCENTAGE",
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
    "name": "WRON",
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
    "name": "claimPendingReserve",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ]
  },
  {
    "name": "claimPendingReserveFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      },
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ]
  },
  {
    "name": "clearCutPercentages",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_addresses"
      }
    ],
    "outputs": []
  },
  {
    "name": "cutPercentage",
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
    "name": "getAllocations",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_marketContract"
      },
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_total"
      },
      {
        "type": "address",
        "name": "_seller"
      },
      {
        "type": "address",
        "name": "_referralAddr"
      },
      {
        "type": "bool",
        "name": "_autoTransferReferralReward"
      },
      {
        "type": "bool",
        "name": "_referralFeature"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "_allocs",
        "components": [
          {
            "type": "uint8",
            "name": "allocType"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint256",
            "name": "ratio"
          },
          {
            "type": "uint256",
            "name": "value"
          }
        ]
      }
    ]
  },
  {
    "name": "getCommissionSchema",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_marketContract"
      },
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "tuple[]",
            "name": "others",
            "components": [
              {
                "type": "address",
                "name": "owner"
              },
              {
                "type": "uint256",
                "name": "ratio"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "axieInfinityRatio"
          },
          {
            "type": "uint256",
            "name": "skyMavisRatio"
          },
          {
            "type": "uint256",
            "name": "roninRatio"
          },
          {
            "type": "uint256",
            "name": "sumRatios"
          }
        ]
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
    "name": "getRoleMember",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getRoleMemberCount",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getTreasuryAddresses",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "_skyMavisTreasuryAddr"
      },
      {
        "type": "address",
        "name": "_axieInfinityTreasuryAddr"
      },
      {
        "type": "address",
        "name": "_roninNetworkTreasuryAddr"
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
        "name": "_wron"
      },
      {
        "type": "address",
        "name": "_wronHelper"
      },
      {
        "type": "address",
        "name": "_skyMavisTreasuryAddr"
      },
      {
        "type": "address",
        "name": "_axieInfinityTreasuryAddr"
      },
      {
        "type": "address",
        "name": "_roninNetworkTreasuryAddr"
      },
      {
        "type": "address[]",
        "name": "_markets"
      },
      {
        "type": "address[]",
        "name": "_operators"
      }
    ],
    "outputs": []
  },
  {
    "name": "pendingReserve",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      },
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ]
  },
  {
    "name": "recordRONIncreased",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ]
  },
  {
    "name": "recordReserveIncreased",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      },
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ]
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
    "name": "setCommissionSchema",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_marketContract"
      },
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_skyMavisRatio"
      },
      {
        "type": "uint256",
        "name": "_axieInfinityRatio"
      },
      {
        "type": "uint256",
        "name": "_roninRatio"
      },
      {
        "type": "tuple[]",
        "name": "_otherCommissions",
        "components": [
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint256",
            "name": "ratio"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setCutPercentages",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_addresses"
      },
      {
        "type": "uint256[]",
        "name": "_percentages"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTreasuryAddresses",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_skyMavisTreasuryAddr"
      },
      {
        "type": "address",
        "name": "_axieInfinityTreasuryAddr"
      },
      {
        "type": "address",
        "name": "_roninNetworkTreasuryAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setWRONConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_wron"
      },
      {
        "type": "address",
        "name": "_wronHelper"
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
    "name": "totalReserve",
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
    "name": "userReserve",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "wronHelper",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract