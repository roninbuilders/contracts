import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34968,
  address: '0xefcea3cfa330adcddece99219c57fd45cd166ac1' as const,
  contract_name: 'PriceRegistry',
  display_name: 'Price Registry',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1730294352,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "priceUpdaters"
      },
      {
        "type": "address[]",
        "name": "feeTokens"
      },
      {
        "type": "uint32",
        "name": "stalenessThreshold"
      }
    ]
  },
  {
    "name": "ChainNotSupported",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "chain"
      }
    ]
  },
  {
    "name": "InvalidStalenessThreshold",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCallableByUpdaterOrOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StaleGasPrice",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      },
      {
        "type": "uint256",
        "name": "threshold"
      },
      {
        "type": "uint256",
        "name": "timePassed"
      }
    ]
  },
  {
    "name": "StaleTokenPrice",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "threshold"
      },
      {
        "type": "uint256",
        "name": "timePassed"
      }
    ]
  },
  {
    "name": "TokenNotSupported",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "FeeTokenAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "feeToken",
        "indexed": true
      }
    ]
  },
  {
    "name": "FeeTokenRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "feeToken",
        "indexed": true
      }
    ]
  },
  {
    "name": "OwnershipTransferRequested",
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
      }
    ]
  },
  {
    "name": "OwnershipTransferred",
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
      }
    ]
  },
  {
    "name": "PriceUpdaterRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "priceUpdater",
        "indexed": true
      }
    ]
  },
  {
    "name": "PriceUpdaterSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "priceUpdater",
        "indexed": true
      }
    ]
  },
  {
    "name": "UsdPerTokenUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "UsdPerUnitGasUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChain",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "applyFeeTokensUpdates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "feeTokensToAdd"
      },
      {
        "type": "address[]",
        "name": "feeTokensToRemove"
      }
    ],
    "outputs": []
  },
  {
    "name": "applyPriceUpdatersUpdates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "priceUpdatersToAdd"
      },
      {
        "type": "address[]",
        "name": "priceUpdatersToRemove"
      }
    ],
    "outputs": []
  },
  {
    "name": "convertTokenAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "fromToken"
      },
      {
        "type": "uint256",
        "name": "fromTokenAmount"
      },
      {
        "type": "address",
        "name": "toToken"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getDestinationChainGasPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "destChainSelector"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint224",
            "name": "value"
          },
          {
            "type": "uint32",
            "name": "timestamp"
          }
        ]
      }
    ]
  },
  {
    "name": "getFeeTokens",
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
    "name": "getPriceUpdaters",
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
    "name": "getStalenessThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint128"
      }
    ]
  },
  {
    "name": "getTokenAndGasPrices",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint64",
        "name": "destChainSelector"
      }
    ],
    "outputs": [
      {
        "type": "uint224",
        "name": "tokenPrice"
      },
      {
        "type": "uint224",
        "name": "gasPriceValue"
      }
    ]
  },
  {
    "name": "getTokenPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint224",
            "name": "value"
          },
          {
            "type": "uint32",
            "name": "timestamp"
          }
        ]
      }
    ]
  },
  {
    "name": "getTokenPrices",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint224",
            "name": "value"
          },
          {
            "type": "uint32",
            "name": "timestamp"
          }
        ]
      }
    ]
  },
  {
    "name": "getValidatedTokenPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "uint224"
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
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": []
  },
  {
    "name": "typeAndVersion",
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
    "name": "updatePrices",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "priceUpdates",
        "components": [
          {
            "type": "tuple[]",
            "name": "tokenPriceUpdates",
            "components": [
              {
                "type": "address",
                "name": "sourceToken"
              },
              {
                "type": "uint224",
                "name": "usdPerToken"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "gasPriceUpdates",
            "components": [
              {
                "type": "uint64",
                "name": "destChainSelector"
              },
              {
                "type": "uint224",
                "name": "usdPerUnitGas"
              }
            ]
          }
        ]
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract