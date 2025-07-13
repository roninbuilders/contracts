import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35229,
  address: '0x0db70f8cdfe2c84f7be87965fa25352190fcee13' as const,
  contract_name: 'RoninTransparentProxy',
  display_name: 'Ronin Gateway V3 Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x838ac25e9998a3486db5eb956f8b2fe894c1c6e0',
  created_at: 1748948604,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "logic"
      },
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "bytes",
        "name": "data"
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
    "name": "FailedCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyAdmin",
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
  },
  {
    "name": "functionDelegateCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
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
    "name": "ErrAlreadyVoted",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "voter"
      }
    ]
  },
  {
    "name": "ErrContractTypeNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      }
    ]
  },
  {
    "name": "ErrERC1155MintingFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrERC20MintingFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrERC721MintingFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrEmptyArray",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidChainId",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "uint256",
        "name": "actual"
      },
      {
        "type": "uint256",
        "name": "expected"
      }
    ]
  },
  {
    "name": "ErrInvalidInfo",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidReceipt",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidReceiptKind",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidRequest",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidThreshold",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrInvalidTokenStandard",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidTrustedThreshold",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrLengthMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrNotWhitelistedToken",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "ErrNullMinVoteWeightProvided",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrQueryForTooSmallQuantity",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrRestricted",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "fnSig"
      },
      {
        "type": "uint8",
        "name": "standard"
      }
    ]
  },
  {
    "name": "ErrTokenCouldNotTransfer",
    "type": "error",
    "inputs": [
      {
        "type": "tuple",
        "name": "tokenInfo",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "quantity"
          }
        ]
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "ErrTokenCouldNotTransferFrom",
    "type": "error",
    "inputs": [
      {
        "type": "tuple",
        "name": "tokenInfo",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "quantity"
          }
        ]
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "ErrUnauthorized",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "uint8",
        "name": "expectedRole"
      }
    ]
  },
  {
    "name": "ErrUnsupportedStandard",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnsupportedToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrWhitelistWrappedTokenInstead",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrWithdrawalsMigrated",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrWithdrawnOnMainchainAlready",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrZeroCodeContract",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ]
  },
  {
    "name": "ContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType",
        "indexed": true
      },
      {
        "type": "address",
        "name": "addr",
        "indexed": true
      }
    ]
  },
  {
    "name": "DepositVoted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "bridgeOperator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "chainId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "receiptHash"
      }
    ]
  },
  {
    "name": "Deposited",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "receiptHash"
      },
      {
        "type": "tuple",
        "name": "receipt",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint8",
            "name": "kind"
          },
          {
            "type": "tuple",
            "name": "mainchain",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "ronin",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
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
    "name": "MainchainWithdrew",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "receiptHash"
      },
      {
        "type": "tuple",
        "name": "receipt",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint8",
            "name": "kind"
          },
          {
            "type": "tuple",
            "name": "mainchain",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "ronin",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "MinimumThresholdsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "uint256[]",
        "name": "threshold"
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
    "name": "Restricted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "bytes4",
        "name": "fnSig",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "enumBitmap"
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
    "name": "ThresholdUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "numerator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "denominator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "previousNumerator"
      },
      {
        "type": "uint256",
        "name": "previousDenominator"
      }
    ]
  },
  {
    "name": "TokenMapped",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "roninTokens"
      },
      {
        "type": "address[]",
        "name": "mainchainTokens"
      },
      {
        "type": "uint256[]",
        "name": "chainIds"
      },
      {
        "type": "uint8[]",
        "name": "standards"
      }
    ]
  },
  {
    "name": "TokenUnmapped",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "roninTokens"
      },
      {
        "type": "uint256[]",
        "name": "chainIds"
      }
    ]
  },
  {
    "name": "TrustedThresholdUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "numerator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "denominator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "previousNumerator"
      },
      {
        "type": "uint256",
        "name": "previousDenominator"
      }
    ]
  },
  {
    "name": "UnRestricted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "bytes4",
        "name": "fnSig",
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
    "name": "WhitelistUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "by",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "address[]",
        "name": "recipients"
      },
      {
        "type": "uint64[]",
        "name": "remoteChainSelectors"
      }
    ]
  },
  {
    "name": "WithdrawalRequested",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "receiptHash"
      },
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint8",
            "name": "kind"
          },
          {
            "type": "tuple",
            "name": "mainchain",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "ronin",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "WithdrawalSignaturesRequested",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "receiptHash"
      },
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint8",
            "name": "kind"
          },
          {
            "type": "tuple",
            "name": "mainchain",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "ronin",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "APRS",
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
    "name": "AXS",
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
    "name": "LUA",
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
    "name": "LUAUSD",
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
    "name": "PIXEL",
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
    "name": "SLP",
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
    "name": "USDC",
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
    "name": "WBTC",
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
    "name": "WETH",
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
    "name": "YGG",
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
    "name": "bulkRequestWithdrawalFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "requests",
        "components": [
          {
            "type": "address",
            "name": "recipientAddr"
          },
          {
            "type": "address",
            "name": "tokenAddr"
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
      },
      {
        "type": "uint256",
        "name": "chainId"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkSubmitWithdrawalSignatures",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "withdrawals"
      },
      {
        "type": "bytes[]",
        "name": "signatures"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_voteWeight"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "depositFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_receipt",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint8",
            "name": "kind"
          },
          {
            "type": "tuple",
            "name": "mainchain",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "ronin",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "depositVote",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "status"
      },
      {
        "type": "bytes32",
        "name": "finalHash"
      },
      {
        "type": "uint256",
        "name": "expiredAt"
      },
      {
        "type": "uint256",
        "name": "createdAt"
      }
    ]
  },
  {
    "name": "depositVoted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_chainId"
      },
      {
        "type": "uint256",
        "name": "_depositId"
      },
      {
        "type": "address",
        "name": "_voter"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "emergencyPauser",
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
    "name": "getContract",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "contract_"
      }
    ]
  },
  {
    "name": "getMainchainToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_roninToken"
      },
      {
        "type": "uint256",
        "name": "_chainId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "_token",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "address",
            "name": "tokenAddr"
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
    "name": "getThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "num_"
      },
      {
        "type": "uint256",
        "name": "denom_"
      }
    ]
  },
  {
    "name": "getTrustedThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "trustedNum_"
      },
      {
        "type": "uint256",
        "name": "trustedDenom_"
      }
    ]
  },
  {
    "name": "getWhitelistedAddresses",
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
        "type": "address[]",
        "name": "whitelisteds"
      },
      {
        "type": "uint64[]",
        "name": "remoteChainSelectors"
      }
    ]
  },
  {
    "name": "getWithdrawalSignatures",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "withdrawalId"
      },
      {
        "type": "address[]",
        "name": "operators"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "_signatures"
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
    "name": "initializeV4",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "migrator"
      },
      {
        "type": "address",
        "name": "newEmergencyPauser"
      },
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "address[]",
        "name": "recipients"
      },
      {
        "type": "uint64[]",
        "name": "remoteChainSelectors"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV5",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "mainchainWithdrew",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_withdrawalId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "mainchainWithdrewVote",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "status"
      },
      {
        "type": "bytes32",
        "name": "finalHash"
      },
      {
        "type": "uint256",
        "name": "expiredAt"
      },
      {
        "type": "uint256",
        "name": "createdAt"
      }
    ]
  },
  {
    "name": "mainchainWithdrewVoted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_withdrawalId"
      },
      {
        "type": "address",
        "name": "_voter"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "mapTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_roninTokens"
      },
      {
        "type": "address[]",
        "name": "_mainchainTokens"
      },
      {
        "type": "uint256[]",
        "name": "_chainIds"
      },
      {
        "type": "uint8[]",
        "name": "_standards"
      }
    ],
    "outputs": []
  },
  {
    "name": "mapTokensWithMinThresholds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "roninTokens_"
      },
      {
        "type": "address[]",
        "name": "mainchainTokens_"
      },
      {
        "type": "uint256[]",
        "name": "chainIds_"
      },
      {
        "type": "uint8[]",
        "name": "standards_"
      },
      {
        "type": "uint256[]",
        "name": "minimumThresholds_"
      }
    ],
    "outputs": []
  },
  {
    "name": "migrateERC20",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "minimumThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "mainchainToken"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "minimumVoteWeight",
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
    "name": "nonce",
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
    "name": "requestWithdrawalFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_request",
        "components": [
          {
            "type": "address",
            "name": "recipientAddr"
          },
          {
            "type": "address",
            "name": "tokenAddr"
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
      },
      {
        "type": "uint256",
        "name": "_chainId"
      }
    ],
    "outputs": []
  },
  {
    "name": "requestWithdrawalSignatures",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_withdrawalId"
      }
    ],
    "outputs": []
  },
  {
    "name": "restrict",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes4",
        "name": "fnSig"
      },
      {
        "type": "uint8",
        "name": "enumBitmap"
      }
    ],
    "outputs": []
  },
  {
    "name": "restricted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4",
        "name": "fnSig"
      },
      {
        "type": "uint8",
        "name": "standard"
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
    "name": "setContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      },
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setEmergencyPauser",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinimumThresholds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "mainchainTokens_"
      },
      {
        "type": "uint256[]",
        "name": "thresholds_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setThreshold",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_numerator"
      },
      {
        "type": "uint256",
        "name": "_denominator"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTrustedThreshold",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_trustedNumerator"
      },
      {
        "type": "uint256",
        "name": "_trustedDenominator"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ]
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
    "name": "tryBulkAcknowledgeMainchainWithdrew",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_withdrawalIds"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "_executedReceipts"
      }
    ]
  },
  {
    "name": "tryBulkDepositFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "receipts",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint8",
            "name": "kind"
          },
          {
            "type": "tuple",
            "name": "mainchain",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "ronin",
            "components": [
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "address",
                "name": "tokenAddr"
              },
              {
                "type": "uint256",
                "name": "chainId"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "uint8",
                "name": "erc"
              },
              {
                "type": "uint256",
                "name": "id"
              },
              {
                "type": "uint256",
                "name": "quantity"
              }
            ]
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "_executedReceipts"
      }
    ]
  },
  {
    "name": "unmapTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "roninTokens_"
      },
      {
        "type": "uint256[]",
        "name": "chainIds_"
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
    "name": "whitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "address[]",
        "name": "recipients"
      },
      {
        "type": "uint64[]",
        "name": "remoteChainSelectors"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawal",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint8",
        "name": "kind"
      },
      {
        "type": "tuple",
        "name": "mainchain",
        "components": [
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "address",
            "name": "tokenAddr"
          },
          {
            "type": "uint256",
            "name": "chainId"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "ronin",
        "components": [
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "address",
            "name": "tokenAddr"
          },
          {
            "type": "uint256",
            "name": "chainId"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "info",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "quantity"
          }
        ]
      }
    ]
  },
  {
    "name": "withdrawalCount",
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
    "name": "withdrawalStatVote",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "status"
      },
      {
        "type": "bytes32",
        "name": "finalHash"
      },
      {
        "type": "uint256",
        "name": "expiredAt"
      },
      {
        "type": "uint256",
        "name": "createdAt"
      }
    ]
  },
  {
    "name": "wrappedNativeToken",
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