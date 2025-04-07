import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1125,
  address: '0x2f8c5e6bbe526d0c88979269f2b249271491717c' as const,
  contract_name: 'RNSDomainPrice',
  display_name: 'RNS Domain Price',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1699254612,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": []
  },
  {
    "name": "ErrComputedPriceTooLarge",
    "type": "error",
    "inputs": [
      {
        "type": "int32",
        "name": "expo1"
      },
      {
        "type": "int32",
        "name": "expo2"
      },
      {
        "type": "int64",
        "name": "price1"
      }
    ]
  },
  {
    "name": "ErrExponentTooLarge",
    "type": "error",
    "inputs": [
      {
        "type": "int32",
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
    "name": "RenewalFeeIsNotOverriden",
    "type": "error",
    "inputs": []
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
    "name": "PythOracleConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "pyth",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "maxAcceptableAge"
      },
      {
        "type": "bytes32",
        "name": "pythIdForRONUSD",
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
    "name": "getPythOracleConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "pyth"
      },
      {
        "type": "uint256",
        "name": "maxAcceptableAge"
      },
      {
        "type": "bytes32",
        "name": "pythIdForRONUSD"
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
        "name": "pyth"
      },
      {
        "type": "address",
        "name": "auction"
      },
      {
        "type": "uint256",
        "name": "maxAcceptableAge"
      },
      {
        "type": "bytes32",
        "name": "pythIdForRONUSD"
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
    "name": "setPythOracleConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "pyth"
      },
      {
        "type": "uint256",
        "name": "maxAcceptableAge"
      },
      {
        "type": "bytes32",
        "name": "pythIdForRONUSD"
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