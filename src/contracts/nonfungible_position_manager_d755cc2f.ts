import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35332,
  address: '0x69d57b9d705ead73a5d2f2476c30c55bd755cc2f' as const,
  contract_name: 'NonfungiblePositionManager',
  display_name: 'Nonfungible Position Manager',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1749134383,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_factory"
      },
      {
        "type": "address",
        "name": "_WNativeToken"
      },
      {
        "type": "address",
        "name": "_tokenDescriptor_"
      },
      {
        "type": "address",
        "name": "_poolDeployer"
      }
    ]
  },
  {
    "name": "tickOutOfRange",
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
        "name": "approved",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "ApprovalForAll",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "approved"
      }
    ]
  },
  {
    "name": "Collect",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient"
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
    "name": "DecreaseLiquidity",
    "type": "event",
    "inputs": [
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
    "name": "FarmingFailed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "IncreaseLiquidity",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "liquidityDesired"
      },
      {
        "type": "uint128",
        "name": "actualLiquidity"
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
        "type": "address",
        "name": "pool"
      }
    ]
  },
  {
    "name": "Transfer",
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
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "DOMAIN_SEPARATOR",
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
    "name": "NONFUNGIBLE_POSITION_MANAGER_ADMINISTRATOR_ROLE",
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
    "name": "PERMIT_TYPEHASH",
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
    "name": "WNativeToken",
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
    "name": "algebraMintCallback",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount0Owed"
      },
      {
        "type": "uint256",
        "name": "amount1Owed"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "approve",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "approveForFarming",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bool",
        "name": "approve"
      },
      {
        "type": "address",
        "name": "farmingAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "burn",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "collect",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint128",
            "name": "amount0Max"
          },
          {
            "type": "uint128",
            "name": "amount1Max"
          }
        ]
      }
    ],
    "outputs": [
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
    "name": "createAndInitializePoolIfNecessary",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
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
        "name": "deployer"
      },
      {
        "type": "uint160",
        "name": "sqrtPriceX96"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pool"
      }
    ]
  },
  {
    "name": "decreaseLiquidity",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
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
            "name": "amount0Min"
          },
          {
            "type": "uint256",
            "name": "amount1Min"
          },
          {
            "type": "uint256",
            "name": "deadline"
          }
        ]
      }
    ],
    "outputs": [
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
    "name": "factory",
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
    "name": "farmingApprovals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "farmingCenterAddress"
      }
    ]
  },
  {
    "name": "farmingCenter",
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
    "name": "getApproved",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "increaseLiquidity",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount0Desired"
          },
          {
            "type": "uint256",
            "name": "amount1Desired"
          },
          {
            "type": "uint256",
            "name": "amount0Min"
          },
          {
            "type": "uint256",
            "name": "amount1Min"
          },
          {
            "type": "uint256",
            "name": "deadline"
          }
        ]
      }
    ],
    "outputs": [
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
    "name": "isApprovedForAll",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "operator"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isApprovedOrOwner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "mint",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
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
            "name": "deployer"
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
            "type": "uint256",
            "name": "amount0Desired"
          },
          {
            "type": "uint256",
            "name": "amount1Desired"
          },
          {
            "type": "uint256",
            "name": "amount0Min"
          },
          {
            "type": "uint256",
            "name": "amount1Min"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "deadline"
          }
        ]
      }
    ],
    "outputs": [
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
        "name": "amount0"
      },
      {
        "type": "uint256",
        "name": "amount1"
      }
    ]
  },
  {
    "name": "multicall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "results"
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
    "name": "ownerOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "permit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "deadline"
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
    "name": "poolDeployer",
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
    "name": "positions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint88",
        "name": "nonce"
      },
      {
        "type": "address",
        "name": "operator"
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
        "type": "address",
        "name": "deployer"
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
        "type": "uint128",
        "name": "liquidity"
      },
      {
        "type": "uint256",
        "name": "feeGrowthInside0LastX128"
      },
      {
        "type": "uint256",
        "name": "feeGrowthInside1LastX128"
      },
      {
        "type": "uint128",
        "name": "tokensOwed0"
      },
      {
        "type": "uint128",
        "name": "tokensOwed1"
      }
    ]
  },
  {
    "name": "refundNativeToken",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "safeTransferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "safeTransferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
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
    "outputs": []
  },
  {
    "name": "selfPermit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "uint256",
        "name": "deadline"
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
    "name": "selfPermitAllowed",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
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
    "name": "selfPermitAllowedIfNecessary",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
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
    "name": "selfPermitIfNecessary",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "uint256",
        "name": "deadline"
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
    "name": "setApprovalForAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "bool",
        "name": "approved"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFarmingCenter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newFarmingCenter"
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
    "name": "sweepToken",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amountMinimum"
      },
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "switchFarmingStatus",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bool",
        "name": "toActive"
      }
    ],
    "outputs": []
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
    "name": "tokenByIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "tokenFarmedIn",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "farmingCenterAddress"
      }
    ]
  },
  {
    "name": "tokenOfOwnerByIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "tokenURI",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "totalSupply",
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
    "name": "transferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "unwrapWNativeToken",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amountMinimum"
      },
      {
        "type": "address",
        "name": "recipient"
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