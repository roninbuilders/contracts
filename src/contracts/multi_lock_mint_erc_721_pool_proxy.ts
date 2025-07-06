import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35143,
  address: '0xab5f1eb5b88c77651eed32104b19e34f36675893' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Multi Lock Mint ERC721 Pool Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xf5d225c8027caa293c0302aa98cf8e437caec4e9',
  created_at: 1748509549,
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
        "name": "initialOwner"
      },
      {
        "type": "bytes",
        "name": "_data"
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
    "name": "ERC1967InvalidAdmin",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
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
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ProxyDeniedAdminAccess",
    "type": "error",
    "inputs": []
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
  }
] as const satisfies Abi,
  proxy_abi: [
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
    "name": "BucketOverfilled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ChainAlreadyEnabled",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "chainSelector"
      }
    ]
  },
  {
    "name": "ChainNotSupported",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "chainSelector"
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
    "name": "ERC721TransferFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "id"
      }
    ]
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
    "name": "InsufficientAllowance",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "expected"
      },
      {
        "type": "uint256",
        "name": "actual"
      }
    ]
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
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
    "name": "InvalidRouter",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "expected"
      },
      {
        "type": "address",
        "name": "actual"
      }
    ]
  },
  {
    "name": "LengthMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "expected"
      },
      {
        "type": "uint256",
        "name": "actual"
      }
    ]
  },
  {
    "name": "MessageIdAlreadyExists",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "chainSelector"
      },
      {
        "type": "bytes32",
        "name": "messageId"
      }
    ]
  },
  {
    "name": "MintFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "minter"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "id"
      }
    ]
  },
  {
    "name": "MsgValueNotAllowed",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "NonExistentChain",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "chainSelector"
      }
    ]
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyLocalChain",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "chainSelector"
      }
    ]
  },
  {
    "name": "OnlyLocalToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyRemoteChain",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "chainSelector"
      }
    ]
  },
  {
    "name": "RateLimitMustBeDisabled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RefundFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "RemoteChainSelectorNotMatch",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "expected"
      },
      {
        "type": "uint64",
        "name": "actual"
      }
    ]
  },
  {
    "name": "RemotePoolNotMatch",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "expected"
      },
      {
        "type": "address",
        "name": "actual"
      }
    ]
  },
  {
    "name": "SafeERC20FailedOperation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "SenderNotEnabled",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "chainSelector"
      },
      {
        "type": "address",
        "name": "sender"
      }
    ]
  },
  {
    "name": "TokenAlreadyMapped",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "localToken"
      },
      {
        "type": "address",
        "name": "remoteToken"
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
    "name": "TokenNotMapped",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "localToken"
      },
      {
        "type": "uint64",
        "name": "remoteChainSelector"
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
    "name": "ZeroAddressNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroValueNotAllowed",
    "type": "error",
    "inputs": []
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
    "name": "CrossTransfer",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "srcFrom",
        "indexed": true
      },
      {
        "type": "address",
        "name": "dstTo",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "messageId",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint64",
        "name": "srcChainSelector"
      },
      {
        "type": "uint64",
        "name": "dstChainSelector"
      }
    ]
  },
  {
    "name": "GasLimitConfigured",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "uint32",
        "name": "fixedGas"
      },
      {
        "type": "uint32",
        "name": "dynamicGas"
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
    "name": "MessageReceived",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by"
      },
      {
        "type": "bytes32",
        "name": "messageId",
        "indexed": true
      }
    ]
  },
  {
    "name": "MessageSent",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "messageId",
        "indexed": true
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
    "name": "RateLimitConfigured",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "chainSelector",
        "indexed": true
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
    ]
  },
  {
    "name": "Refunded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "RemoteChainDisabled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "chainSelector",
        "indexed": true
      }
    ]
  },
  {
    "name": "RemoteChainEnabled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "chainSelector",
        "indexed": true
      },
      {
        "type": "address",
        "name": "remoteSender",
        "indexed": true
      }
    ]
  },
  {
    "name": "RemotePoolAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "remoteChainSelector",
        "indexed": true
      },
      {
        "type": "address",
        "name": "remotePool",
        "indexed": true
      }
    ]
  },
  {
    "name": "RemotePoolRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "remoteChainSelector",
        "indexed": true
      }
    ]
  },
  {
    "name": "RemoteTokenMapped",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "remoteChainSelector",
        "indexed": true
      },
      {
        "type": "address",
        "name": "localToken",
        "indexed": true
      },
      {
        "type": "address",
        "name": "remoteToken"
      }
    ]
  },
  {
    "name": "RemoteTokenUnmapped",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "remoteChainSelector",
        "indexed": true
      },
      {
        "type": "address",
        "name": "localToken",
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
    "name": "SharedStorageUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sharedStorage",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "shouldAdd"
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
    "name": "RATE_LIMITER_ROLE",
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
    "name": "SHARED_STORAGE_SETTER_ROLE",
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
    "name": "TOKEN_POOL_OWNER_ROLE",
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
    "name": "addRemotePool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      },
      {
        "type": "address",
        "name": "remotePool"
      }
    ],
    "outputs": []
  },
  {
    "name": "ccipReceive",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "message",
        "components": [
          {
            "type": "bytes32",
            "name": "messageId"
          },
          {
            "type": "uint64",
            "name": "sourceChainSelector"
          },
          {
            "type": "bytes",
            "name": "sender"
          },
          {
            "type": "bytes",
            "name": "data"
          },
          {
            "type": "tuple[]",
            "name": "destTokenAmounts",
            "components": [
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "crossBatchTransfer",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "localToken"
      },
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "address",
        "name": "feeToken"
      },
      {
        "type": "uint256",
        "name": "gasLimit"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "messageId"
      }
    ]
  },
  {
    "name": "crossTransfer",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "localToken"
      },
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "address",
        "name": "feeToken"
      },
      {
        "type": "uint256",
        "name": "gasLimit"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "messageId"
      }
    ]
  },
  {
    "name": "estimateFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "feeToken"
      },
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      },
      {
        "type": "uint256",
        "name": "tokenCount"
      },
      {
        "type": "uint256",
        "name": "gasLimit"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "fee"
      }
    ]
  },
  {
    "name": "getCurrentChainSelector",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64",
        "name": "currentChainSelector"
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
        "name": "state",
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
        "name": "state",
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
    "name": "getFeeTokens",
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
        "type": "address[]",
        "name": "feeTokens"
      }
    ]
  },
  {
    "name": "getGlobalPauser",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "globalPauser"
      }
    ]
  },
  {
    "name": "getMessageIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "chainSelector"
      },
      {
        "type": "uint256",
        "name": "offset"
      },
      {
        "type": "uint256",
        "name": "limit"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "length"
      },
      {
        "type": "bytes32[]",
        "name": "messageIds"
      }
    ]
  },
  {
    "name": "getRemotePool",
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
        "type": "address",
        "name": "remotePool"
      }
    ]
  },
  {
    "name": "getRemotePools",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64[]",
        "name": "remoteChainSelectors"
      },
      {
        "type": "address[]",
        "name": "remotePools"
      }
    ]
  },
  {
    "name": "getRemoteToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "localToken"
      },
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "remoteToken"
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
    "name": "getRoleMembers",
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
        "type": "address[]"
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
        "type": "uint64[]",
        "name": "remoteChainSelectors"
      }
    ]
  },
  {
    "name": "getSupportedTokensForChain",
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
        "type": "address[]",
        "name": "localTokens"
      },
      {
        "type": "address[]",
        "name": "remoteTokens"
      }
    ]
  },
  {
    "name": "getTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "localTokens"
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
        "type": "address",
        "name": "router"
      },
      {
        "type": "uint64",
        "name": "currentChainSelector"
      }
    ],
    "outputs": []
  },
  {
    "name": "isFeeTokenSupported",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      },
      {
        "type": "address",
        "name": "feeToken"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "yes"
      }
    ]
  },
  {
    "name": "isLocalChain",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "currentChainSelector"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "yes"
      }
    ]
  },
  {
    "name": "isSenderEnabled",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      },
      {
        "type": "address",
        "name": "sender"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "yes"
      }
    ]
  },
  {
    "name": "isSharedStorage",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "sharedStorage"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "yes"
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
        "type": "bool",
        "name": "yes"
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
        "name": "localToken"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "yes"
      }
    ]
  },
  {
    "name": "mapRemoteToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "localToken"
      },
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      },
      {
        "type": "address",
        "name": "remoteToken"
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
    "name": "removeRemotePool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector"
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
    "name": "setGlobalPauser",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "globalPauser"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSharedStorage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "sharedStorage"
      },
      {
        "type": "bool",
        "name": "shouldAdd"
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
    "name": "unmapRemoteToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "localToken"
      },
      {
        "type": "uint64",
        "name": "remoteChainSelector"
      }
    ],
    "outputs": []
  },
  {
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawLiquidity",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "localTokens"
      },
      {
        "type": "address[]",
        "name": "tos"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract