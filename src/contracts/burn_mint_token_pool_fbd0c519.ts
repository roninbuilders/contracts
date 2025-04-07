import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 6432,
  address: '0x5dbbf90ad00130fd2eb788016dcb3e4dfbd0c519' as const,
  contract_name: 'BurnMintTokenPool',
  display_name: 'Burn Mint Token Pool',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1736521763,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint8",
        "name": "localTokenDecimals"
      },
      {
        "type": "address[]",
        "name": "allowlist"
      },
      {
        "type": "address",
        "name": "rmnProxy"
      },
      {
        "type": "address",
        "name": "router"
      }
    ]
  },
  {
    "name": "AggregateValueMaxCapacityExceeded",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "capacity"
      },
      {
        "type": "uint256",
        "name": "requested"
      }
    ]
  },
  {
    "name": "AggregateValueRateLimitReached",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "minWaitInSeconds"
      },
      {
        "type": "uint256",
        "name": "available"
      }
    ]
  },
  {
    "name": "AllowListNotEnabled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BucketOverfilled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CallerIsNotARampOnRouter",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      }
    ]
  },
  {
    "name": "CannotTransferToSelf",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ChainAlreadyExists",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "chainSelector"
      }
    ]
  },
  {
    "name": "ChainNotAllowed",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      }
    ]
  },
  {
    "name": "CursedByRMN",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DisabledNonZeroRateLimit",
    "type": "error",
    "inputs": [
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      }
    ]
  },
  {
    "name": "InvalidDecimalArgs",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "expected"
      },
      {
        "type": "uint8",
        "name": "actual"
      }
    ]
  },
  {
    "name": "InvalidRateLimitRate",
    "type": "error",
    "inputs": [
      {
        "type": "tuple",
        "name": "rateLimiterConfig",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      }
    ]
  },
  {
    "name": "InvalidRemoteChainDecimals",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "sourcePoolData"
      }
    ]
  },
  {
    "name": "InvalidRemotePoolForChain",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      },
      {
        "type": "bytes",
        "name": "remotePoolAddress"
      }
    ]
  },
  {
    "name": "InvalidSourcePoolAddress",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "sourcePoolAddress"
      }
    ]
  },
  {
    "name": "InvalidToken",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "MismatchedArrayLengths",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MustBeProposedOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NonExistentChain",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      }
    ]
  },
  {
    "name": "OnlyCallableByOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OverflowDetected",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "remoteDecimals"
      },
      {
        "type": "uint8",
        "name": "localDecimals"
      },
      {
        "type": "uint256",
        "name": "remoteAmount"
      }
    ]
  },
  {
    "name": "OwnerCannotBeZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PoolAlreadyAdded",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      },
      {
        "type": "bytes",
        "name": "remotePoolAddress"
      }
    ]
  },
  {
    "name": "RateLimitMustBeDisabled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SenderNotAllowed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      }
    ]
  },
  {
    "name": "TokenMaxCapacityExceeded",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "capacity"
      },
      {
        "type": "uint256",
        "name": "requested"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ]
  },
  {
    "name": "TokenRateLimitReached",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "minWaitInSeconds"
      },
      {
        "type": "uint256",
        "name": "available"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ]
  },
  {
    "name": "Unauthorized",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      }
    ]
  },
  {
    "name": "ZeroAddressNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AllowListAdd",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      }
    ]
  },
  {
    "name": "AllowListRemove",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      }
    ]
  },
  {
    "name": "Burned",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "ChainAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      },
      {
        "type": "bytes",
        "name": "remoteToken"
      },
      {
        "type": "tuple",
        "name": "outboundRateLimiterConfig",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "inboundRateLimiterConfig",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      }
    ]
  },
  {
    "name": "ChainConfigured",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      },
      {
        "type": "tuple",
        "name": "outboundRateLimiterConfig",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "inboundRateLimiterConfig",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      }
    ]
  },
  {
    "name": "ChainRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      }
    ]
  },
  {
    "name": "ConfigChanged",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      }
    ]
  },
  {
    "name": "Locked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "Minted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
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
    "name": "RateLimitAdminSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "rateLimitAdmin"
      }
    ]
  },
  {
    "name": "Released",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
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
    "name": "RemotePoolAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "remotePoolAddress"
      }
    ]
  },
  {
    "name": "RemotePoolRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "remotePoolAddress"
      }
    ]
  },
  {
    "name": "RouterUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldRouter"
      },
      {
        "type": "address",
        "name": "newRouter"
      }
    ]
  },
  {
    "name": "TokensConsumed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokens"
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
    "name": "addRemotePool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      },
      {
        "type": "bytes",
        "name": "remotePoolAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "applyAllowListUpdates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "removes"
      },
      {
        "type": "address[]",
        "name": "adds"
      }
    ],
    "outputs": []
  },
  {
    "name": "applyChainUpdates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64[]",
        "name": "remoteChainSelectorsToRemove"
      },
      {
        "type": "tuple[]",
        "name": "chainsToAdd",
        "components": [
          {
            "type": "uint64",
            "name": "remoteChainSelector"
          },
          {
            "type": "bytes[]",
            "name": "remotePoolAddresses"
          },
          {
            "type": "bytes",
            "name": "remoteTokenAddress"
          },
          {
            "type": "tuple",
            "name": "outboundRateLimiterConfig",
            "components": [
              {
                "type": "bool",
                "name": "isEnabled"
              },
              {
                "type": "uint128",
                "name": "capacity"
              },
              {
                "type": "uint128",
                "name": "rate"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "inboundRateLimiterConfig",
            "components": [
              {
                "type": "bool",
                "name": "isEnabled"
              },
              {
                "type": "uint128",
                "name": "capacity"
              },
              {
                "type": "uint128",
                "name": "rate"
              }
            ]
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "getAllowList",
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
    "name": "getAllowListEnabled",
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
    "name": "getCurrentInboundRateLimiterState",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint128",
            "name": "tokens"
          },
          {
            "type": "uint32",
            "name": "lastUpdated"
          },
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      }
    ]
  },
  {
    "name": "getCurrentOutboundRateLimiterState",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint128",
            "name": "tokens"
          },
          {
            "type": "uint32",
            "name": "lastUpdated"
          },
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      }
    ]
  },
  {
    "name": "getRateLimitAdmin",
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
    "name": "getRemotePools",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]"
      }
    ]
  },
  {
    "name": "getRemoteToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "getRmnProxy",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "rmnProxy"
      }
    ]
  },
  {
    "name": "getRouter",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "router"
      }
    ]
  },
  {
    "name": "getSupportedChains",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64[]"
      }
    ]
  },
  {
    "name": "getToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "getTokenDecimals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8",
        "name": "decimals"
      }
    ]
  },
  {
    "name": "isRemotePool",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      },
      {
        "type": "bytes",
        "name": "remotePoolAddress"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isSupportedChain",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isSupportedToken",
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
        "type": "bool"
      }
    ]
  },
  {
    "name": "lockOrBurn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "lockOrBurnIn",
        "components": [
          {
            "type": "bytes",
            "name": "receiver"
          },
          {
            "type": "uint64",
            "name": "remoteChainSelector"
          },
          {
            "type": "address",
            "name": "originalSender"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "localToken"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "bytes",
            "name": "destTokenAddress"
          },
          {
            "type": "bytes",
            "name": "destPoolData"
          }
        ]
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
    "name": "releaseOrMint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "releaseOrMintIn",
        "components": [
          {
            "type": "bytes",
            "name": "originalSender"
          },
          {
            "type": "uint64",
            "name": "remoteChainSelector"
          },
          {
            "type": "address",
            "name": "receiver"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "localToken"
          },
          {
            "type": "bytes",
            "name": "sourcePoolAddress"
          },
          {
            "type": "bytes",
            "name": "sourcePoolData"
          },
          {
            "type": "bytes",
            "name": "offchainTokenData"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "destinationAmount"
          }
        ]
      }
    ]
  },
  {
    "name": "removeRemotePool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      },
      {
        "type": "bytes",
        "name": "remotePoolAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setChainRateLimiterConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      },
      {
        "type": "tuple",
        "name": "outboundConfig",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "inboundConfig",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setChainRateLimiterConfigs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64[]",
        "name": "remoteChainSelectors"
      },
      {
        "type": "tuple[]",
        "name": "outboundConfigs",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "inboundConfigs",
        "components": [
          {
            "type": "bool",
            "name": "isEnabled"
          },
          {
            "type": "uint128",
            "name": "capacity"
          },
          {
            "type": "uint128",
            "name": "rate"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setRateLimitAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "rateLimitAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRouter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newRouter"
      }
    ],
    "outputs": []
  },
  {
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "pure",
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract