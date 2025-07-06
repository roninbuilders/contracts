import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1123,
  address: '0x2bdc555a87db9207e5d175f0c12b237736181675' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'RNS Domain Price Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xf3a8507766def8d940efbbbda357813e8dda46b0',
  created_at: 1699254612,
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": []
  },
  {
    "name": "ComputedPriceTooLarge",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "int8",
        "name": "expo"
      }
    ]
  },
  {
    "name": "ComputedPriceTooSmall",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "int8",
        "name": "expo"
      }
    ]
  },
  {
    "name": "ExceedAuctionDomainExpiry",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidArrayLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LargeDecimal",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "decimal"
      }
    ]
  },
  {
    "name": "PanicNegativeQuotePrice",
    "type": "error",
    "inputs": [
      {
        "type": "int256",
        "name": "answer"
      }
    ]
  },
  {
    "name": "PeriodNumOverflowedUint16",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "n"
      }
    ]
  },
  {
    "name": "PriceTooOld",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "latestTimestamp"
      },
      {
        "type": "uint256",
        "name": "maxAcceptableTimestamp"
      }
    ]
  },
  {
    "name": "RenewalFeeIsNotOverridden",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TierIsNotOverridden",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ChainlinkPriceFeedUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "aggregator",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "tokenInDecimal"
      },
      {
        "type": "uint8",
        "name": "tokenOutDecimal"
      },
      {
        "type": "string",
        "name": "description"
      }
    ]
  },
  {
    "name": "DomainPriceScaleRuleUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "uint192",
        "name": "ratio"
      },
      {
        "type": "uint64",
        "name": "period"
      }
    ]
  },
  {
    "name": "DomainPriceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "labelHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "bytes32",
        "name": "proofHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "setType"
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
    "name": "MaxAcceptableAgeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "aggregator",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "maxAcceptableAge"
      }
    ]
  },
  {
    "name": "MaxRenewalFeeLengthUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "maxLength",
        "indexed": true
      }
    ]
  },
  {
    "name": "RenewalFeeByLengthUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "labelLength",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "renewalFee"
      }
    ]
  },
  {
    "name": "RenewalFeeOverridingUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "labelHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "inverseRenewalFee"
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
    "name": "TaxRatioUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "ratio",
        "indexed": true
      }
    ]
  },
  {
    "name": "TierOverridingUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "labelHash",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "tier",
        "indexed": true
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
    "name": "MAX_PERCENTAGE",
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
    "name": "OVERRIDER_ROLE",
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
    "name": "RON_DECIMALS",
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
    "name": "USD_DECIMALS",
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
    "name": "bulkOverrideRenewalFees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "lbHashes"
      },
      {
        "type": "uint256[]",
        "name": "usdPrices"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkOverrideTiers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "lbHashes"
      },
      {
        "type": "uint8[]",
        "name": "tiers"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkSetDomainPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "lbHashes"
      },
      {
        "type": "uint256[]",
        "name": "ronPrices"
      },
      {
        "type": "bytes32[]",
        "name": "proofHashes"
      },
      {
        "type": "uint256[]",
        "name": "setTypes"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkTrySetDomainPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "lbHashes"
      },
      {
        "type": "uint256[]",
        "name": "ronPrices"
      },
      {
        "type": "bytes32[]",
        "name": "proofHashes"
      },
      {
        "type": "uint256[]",
        "name": "setTypes"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "updated"
      }
    ]
  },
  {
    "name": "convertRONToUSD",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "ronWei"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "usdWei"
      }
    ]
  },
  {
    "name": "convertUSDToRON",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "usdWei"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "ronWei"
      }
    ]
  },
  {
    "name": "getDomainPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "label"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "usdPrice"
      },
      {
        "type": "uint256",
        "name": "ronPrice"
      }
    ]
  },
  {
    "name": "getOverriddenRenewalFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "label"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "usdFee"
      }
    ]
  },
  {
    "name": "getOverriddenTier",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "label"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "tier"
      }
    ]
  },
  {
    "name": "getPriceFeedData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "_aggregator"
          },
          {
            "type": "uint8",
            "name": "_tokenInDecimal"
          },
          {
            "type": "uint8",
            "name": "_tokenOutDecimal"
          },
          {
            "type": "uint64",
            "name": "_maxAcceptableAge"
          }
        ]
      }
    ]
  },
  {
    "name": "getRenewalFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "label"
      },
      {
        "type": "uint256",
        "name": "duration"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "basePrice",
        "components": [
          {
            "type": "uint256",
            "name": "usd"
          },
          {
            "type": "uint256",
            "name": "ron"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "tax",
        "components": [
          {
            "type": "uint256",
            "name": "usd"
          },
          {
            "type": "uint256",
            "name": "ron"
          }
        ]
      }
    ]
  },
  {
    "name": "getRenewalFeeByLengths",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "renewalFees",
        "components": [
          {
            "type": "uint256",
            "name": "labelLength"
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
    "name": "getScaleDownRuleForDomainPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "name": "scaleRule",
        "components": [
          {
            "type": "uint192",
            "name": "ratio"
          },
          {
            "type": "uint64",
            "name": "period"
          }
        ]
      }
    ]
  },
  {
    "name": "getTaxRatio",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "ratio"
      }
    ]
  },
  {
    "name": "getTier",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string",
        "name": "label"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "tier"
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
      },
      {
        "type": "address[]",
        "name": "operators"
      },
      {
        "type": "tuple[]",
        "name": "renewalFees",
        "components": [
          {
            "type": "uint256",
            "name": "labelLength"
          },
          {
            "type": "uint256",
            "name": "fee"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "taxRatio"
      },
      {
        "type": "tuple",
        "name": "domainPriceScaleRule",
        "components": [
          {
            "type": "uint192",
            "name": "ratio"
          },
          {
            "type": "uint64",
            "name": "period"
          }
        ]
      },
      {
        "type": "address",
        "name": "auction"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "aggregator"
      },
      {
        "type": "uint64",
        "name": "maxAcceptableAge"
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
    "name": "setPriceFeedData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "aggregator"
      },
      {
        "type": "uint8",
        "name": "tokenInDecimal"
      },
      {
        "type": "uint8",
        "name": "tokenOutDecimal"
      },
      {
        "type": "uint64",
        "name": "maxAcceptableAge"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRenewalFeeByLengths",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "renewalFees",
        "components": [
          {
            "type": "uint256",
            "name": "labelLength"
          },
          {
            "type": "uint256",
            "name": "fee"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setScaleDownRuleForDomainPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "scaleRule",
        "components": [
          {
            "type": "uint192",
            "name": "ratio"
          },
          {
            "type": "uint64",
            "name": "period"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setTaxRatio",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "ratio"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract