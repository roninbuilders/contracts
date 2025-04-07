import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 7565,
  address: '0xa54b0184d12349cf65281c6f965a74828ddd9e8f' as const,
  contract_name: 'MainProxy',
  display_name: 'Main Contract Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x0e5aedbca48bfae93494be89a8abeb3dd6632e83',
  created_at: 1737419848,
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
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AlreadyMigrated",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DeadlineExceeded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeeTooHigh",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Forbidden",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientOutput",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAmountIn",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidFeeRecipient",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidFirstPurchaseAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidLiquidityManager",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidReferralProgram",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTokenMetadata",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotMainToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "REENTRANCY",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RefereeNotSender",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TooMuchMcap",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorMigrationRewardRateUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newCreatorMigrationRewardRate"
      }
    ]
  },
  {
    "name": "ETHRefunded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "FeeRecipientUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newFeeRecipient"
      }
    ]
  },
  {
    "name": "FirstBuyerFeePaid",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "fee"
      }
    ]
  },
  {
    "name": "FirstBuyerFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "fee"
      }
    ]
  },
  {
    "name": "InitialETHReserveUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newInitialETHReserve"
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
    "name": "LiquidityManagerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newLiquidityManager"
      }
    ]
  },
  {
    "name": "MigrationFeeRateUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newFeeRate"
      }
    ]
  },
  {
    "name": "OwnershipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newOwner",
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
    "name": "ReferralProgramUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newReferralProgram"
      }
    ]
  },
  {
    "name": "TokenCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "creator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "uint256",
        "name": "mcapInEth"
      },
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "symbol"
      },
      {
        "type": "string",
        "name": "description"
      },
      {
        "type": "string",
        "name": "extended"
      },
      {
        "type": "string",
        "name": "tokenUrlImage"
      }
    ]
  },
  {
    "name": "TokenCreationFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newCreationFee"
      }
    ]
  },
  {
    "name": "TokenMigrated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "pairAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountToken"
      },
      {
        "type": "uint256",
        "name": "amountETH"
      }
    ]
  },
  {
    "name": "Trade",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isBuy"
      },
      {
        "type": "uint256",
        "name": "amountIn"
      },
      {
        "type": "uint256",
        "name": "amountOut"
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "uint256",
        "name": "mcapInEth"
      },
      {
        "type": "address",
        "name": "referrer"
      },
      {
        "type": "uint256",
        "name": "feeDiscountAmount"
      },
      {
        "type": "uint256",
        "name": "rewardAmount"
      }
    ]
  },
  {
    "name": "TradingFeeRateUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newFeeRate"
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
    "name": "DECIMALS",
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
    "name": "FEE_DENOMINATOR",
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
    "name": "INIT_REAL_TOKEN_RESERVE",
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
    "name": "INIT_VIRTUAL_TOKEN_RESERVE",
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
    "name": "MAX_FEE",
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
    "name": "TOTAL_SUPPLY",
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
    "name": "buyTokensWithETH",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amountIn"
      },
      {
        "type": "uint256",
        "name": "amountOutMin"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes",
        "name": "referralCalldata"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountOut"
      }
    ]
  },
  {
    "name": "createNewToken",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "symbol"
      },
      {
        "type": "uint256",
        "name": "initAmountIn"
      },
      {
        "type": "string",
        "name": "description"
      },
      {
        "type": "string",
        "name": "extended"
      },
      {
        "type": "string",
        "name": "tokenUrlImage"
      },
      {
        "type": "bytes",
        "name": "referralCalldata"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amountOut"
      }
    ]
  },
  {
    "name": "creationFee_",
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
    "name": "creatorMigrationRewardRate_",
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
    "name": "curveConstant_",
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
    "name": "estimateETHForTokens",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amountIn"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountOut"
      }
    ]
  },
  {
    "name": "estimateTokensForETH",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amountIn"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountOut"
      }
    ]
  },
  {
    "name": "feeRate_",
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
    "name": "feeTo_",
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
    "name": "firstBuyerFee_",
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
    "name": "hasUserMadeFirstPurchase_",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "initVirtualEthReserve_",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "initVirtualEthReserve"
      },
      {
        "type": "address",
        "name": "_liquidityManager"
      },
      {
        "type": "address",
        "name": "_referralProgram"
      },
      {
        "type": "address",
        "name": "_feeTo"
      }
    ],
    "outputs": []
  },
  {
    "name": "liquidityManager_",
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
    "name": "migrationFeeRate_",
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
    "name": "minLiquidityForDEX_",
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
    "name": "pools_",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "tokenReserve"
      },
      {
        "type": "uint256",
        "name": "virtualTokenReserve"
      },
      {
        "type": "uint256",
        "name": "ethReserve"
      },
      {
        "type": "uint256",
        "name": "virtualEthReserve"
      },
      {
        "type": "uint256",
        "name": "lastPrice"
      },
      {
        "type": "uint256",
        "name": "lastMcapInEth"
      },
      {
        "type": "uint256",
        "name": "lastTimestamp"
      },
      {
        "type": "uint256",
        "name": "lastBlock"
      },
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "address",
        "name": "liquidityManager"
      },
      {
        "type": "address",
        "name": "poolId"
      },
      {
        "type": "uint256",
        "name": "curveConstant"
      }
    ]
  },
  {
    "name": "referralProgram_",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "sellTokensForETH",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amountIn"
      },
      {
        "type": "uint256",
        "name": "amountOutMin"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes",
        "name": "referralCalldata"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountOut"
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
        "name": "newOwner"
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
    "name": "updateCreatorMigrationRewardRate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "creatorMigrationRewardRate"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateFeeRecipient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "feeTo"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateFirstBuyerFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "fee"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateInitialETHReserve",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "initVirtualEthReserve"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateLiquidityManagerContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "liquidityManager"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateMigrationFeeRate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "feeRate"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateReferralProgram",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "referralProgram"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateTokenCreationFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "fee"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateTradingFeeRate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "feeRate"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract