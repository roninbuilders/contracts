import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37340,
  address: '0x978f2ad2ed4f92c86c10a0afc434c228c5515ef1' as const,
  contract_name: 'V3Utils',
  display_name: 'V3 Utils',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1759732499,
  abi: [
  {
    "name": "AmountError",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CollectError",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EtherSendFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "GetPositionFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoEtherToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoFees",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotSupportedAction",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotSupportedProtocol",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotWETH",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SameToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SelfSend",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SlippageError",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TooMuchEtherSent",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TooMuchFee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferError",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ChangeRange",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nfpm",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newTokenId"
      },
      {
        "type": "uint256",
        "name": "newLiquidity"
      },
      {
        "type": "uint256",
        "name": "token0Added"
      },
      {
        "type": "uint256",
        "name": "token1Added"
      }
    ]
  },
  {
    "name": "CompoundFees",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nfpm",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "liquidity"
      },
      {
        "type": "uint256",
        "name": "amount0"
      },
      {
        "type": "uint256",
        "name": "amount1"
      }
    ]
  },
  {
    "name": "DeductFees",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nfpm",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "userAddress",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "data",
        "components": [
          {
            "type": "address",
            "name": "token0"
          },
          {
            "type": "address",
            "name": "token1"
          },
          {
            "type": "address",
            "name": "token2"
          },
          {
            "type": "uint256",
            "name": "amount0"
          },
          {
            "type": "uint256",
            "name": "amount1"
          },
          {
            "type": "uint256",
            "name": "amount2"
          },
          {
            "type": "uint256",
            "name": "feeAmount0"
          },
          {
            "type": "uint256",
            "name": "feeAmount1"
          },
          {
            "type": "uint256",
            "name": "feeAmount2"
          },
          {
            "type": "uint64",
            "name": "feeX64"
          },
          {
            "type": "uint8",
            "name": "feeType"
          }
        ]
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
    "name": "SwapAndIncreaseLiquidity",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nfpm",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "liquidity"
      },
      {
        "type": "uint256",
        "name": "amount0"
      },
      {
        "type": "uint256",
        "name": "amount1"
      }
    ]
  },
  {
    "name": "SwapAndMint",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nfpm",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "liquidity"
      },
      {
        "type": "uint256",
        "name": "amount0"
      },
      {
        "type": "uint256",
        "name": "amount1"
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
    "name": "WithdrawAndCollectAndSwap",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nfpm",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
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
    "name": "ADMIN_ROLE",
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
    "name": "FEE_TAKER",
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
    "name": "WITHDRAWER_ROLE",
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
    "name": "execute",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_nfpm"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "tuple",
        "name": "instructions",
        "components": [
          {
            "type": "uint8",
            "name": "whatToDo"
          },
          {
            "type": "uint8",
            "name": "protocol"
          },
          {
            "type": "address",
            "name": "targetToken"
          },
          {
            "type": "uint256",
            "name": "amountRemoveMin0"
          },
          {
            "type": "uint256",
            "name": "amountRemoveMin1"
          },
          {
            "type": "uint256",
            "name": "amountIn0"
          },
          {
            "type": "uint256",
            "name": "amountOut0Min"
          },
          {
            "type": "bytes",
            "name": "swapData0"
          },
          {
            "type": "uint256",
            "name": "amountIn1"
          },
          {
            "type": "uint256",
            "name": "amountOut1Min"
          },
          {
            "type": "bytes",
            "name": "swapData1"
          },
          {
            "type": "int24",
            "name": "tickLower"
          },
          {
            "type": "int24",
            "name": "tickUpper"
          },
          {
            "type": "bool",
            "name": "compoundFees"
          },
          {
            "type": "uint128",
            "name": "liquidity"
          },
          {
            "type": "uint256",
            "name": "amountAddMin0"
          },
          {
            "type": "uint256",
            "name": "amountAddMin1"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "bool",
            "name": "unwrap"
          },
          {
            "type": "uint64",
            "name": "liquidityFeeX64"
          },
          {
            "type": "uint64",
            "name": "performanceFeeX64"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "getMaxFeeX64",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "feeType"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "router"
      },
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "address",
        "name": "feeTaker"
      },
      {
        "type": "address",
        "name": "_weth"
      },
      {
        "type": "address[]",
        "name": "whitelistedNfpms"
      }
    ],
    "outputs": []
  },
  {
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes",
        "name": "data"
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
    "name": "setFeeTaker",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "feeTaker"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxFeeX64",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "feeType"
      },
      {
        "type": "uint64",
        "name": "feex64"
      }
    ],
    "outputs": []
  },
  {
    "name": "setWhitelistNfpm",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "nfpms"
      },
      {
        "type": "bool",
        "name": "isWhitelist"
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
    "name": "swapAndIncreaseLiquidity",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint8",
            "name": "protocol"
          },
          {
            "type": "address",
            "name": "nfpm"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount0"
          },
          {
            "type": "uint256",
            "name": "amount1"
          },
          {
            "type": "uint256",
            "name": "amount2"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "address",
            "name": "swapSourceToken"
          },
          {
            "type": "uint256",
            "name": "amountIn0"
          },
          {
            "type": "uint256",
            "name": "amountOut0Min"
          },
          {
            "type": "bytes",
            "name": "swapData0"
          },
          {
            "type": "uint256",
            "name": "amountIn1"
          },
          {
            "type": "uint256",
            "name": "amountOut1Min"
          },
          {
            "type": "bytes",
            "name": "swapData1"
          },
          {
            "type": "uint256",
            "name": "amountAddMin0"
          },
          {
            "type": "uint256",
            "name": "amountAddMin1"
          },
          {
            "type": "uint64",
            "name": "protocolFeeX64"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "result",
        "components": [
          {
            "type": "uint128",
            "name": "liquidity"
          },
          {
            "type": "uint256",
            "name": "added0"
          },
          {
            "type": "uint256",
            "name": "added1"
          },
          {
            "type": "uint256",
            "name": "feeAmount0"
          },
          {
            "type": "uint256",
            "name": "feeAmount1"
          }
        ]
      }
    ]
  },
  {
    "name": "swapAndMint",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint8",
            "name": "protocol"
          },
          {
            "type": "address",
            "name": "nfpm"
          },
          {
            "type": "address",
            "name": "token0"
          },
          {
            "type": "address",
            "name": "token1"
          },
          {
            "type": "uint24",
            "name": "fee"
          },
          {
            "type": "int24",
            "name": "tickSpacing"
          },
          {
            "type": "int24",
            "name": "tickLower"
          },
          {
            "type": "int24",
            "name": "tickUpper"
          },
          {
            "type": "uint64",
            "name": "protocolFeeX64"
          },
          {
            "type": "uint256",
            "name": "amount0"
          },
          {
            "type": "uint256",
            "name": "amount1"
          },
          {
            "type": "uint256",
            "name": "amount2"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "address",
            "name": "swapSourceToken"
          },
          {
            "type": "uint256",
            "name": "amountIn0"
          },
          {
            "type": "uint256",
            "name": "amountOut0Min"
          },
          {
            "type": "bytes",
            "name": "swapData0"
          },
          {
            "type": "uint256",
            "name": "amountIn1"
          },
          {
            "type": "uint256",
            "name": "amountOut1Min"
          },
          {
            "type": "bytes",
            "name": "swapData1"
          },
          {
            "type": "uint256",
            "name": "amountAddMin0"
          },
          {
            "type": "uint256",
            "name": "amountAddMin1"
          },
          {
            "type": "address",
            "name": "poolDeployer"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "result",
        "components": [
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint128",
            "name": "liquidity"
          },
          {
            "type": "uint256",
            "name": "added0"
          },
          {
            "type": "uint256",
            "name": "added1"
          }
        ]
      }
    ]
  },
  {
    "name": "swapRouter",
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
    "name": "withdrawERC20",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawERC721",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "nfpm"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawNative",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract