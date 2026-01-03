import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 38036,
  address: '0x97c3fb5b9c558d11ac48f326f5be058f00c77db7' as const,
  contract_name: 'Gamev2',
  display_name: 'Gamev 2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1764795237,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_miner1155"
      },
      {
        "type": "address",
        "name": "_admin"
      }
    ]
  },
  {
    "name": "AttrLocked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AttrMissing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BadItem",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Exists",
    "type": "error",
    "inputs": []
  },
  {
    "name": "GameNotLive",
    "type": "error",
    "inputs": []
  },
  {
    "name": "GamePaused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPoolId",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LenMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NFTTransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotAdmin",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotMiner1155",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotStaked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentTransferFailed",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "name": "RONMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StakeLimitExceeded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "GameEnded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "name": "GlobalHashUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "pool",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "oldHash"
      },
      {
        "type": "uint256",
        "name": "newHash"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "MiningClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalReward"
      },
      {
        "type": "uint256[]",
        "name": "perPool"
      }
    ]
  },
  {
    "name": "NFTAttrUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tplId",
        "indexed": true
      }
    ]
  },
  {
    "name": "PeriodTransitioned",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "newPeriod"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "ShopItemAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "itemId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "poolId"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "uint256",
        "name": "nftId"
      }
    ]
  },
  {
    "name": "ShopItemPurchased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "itemId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "tokensPaid"
      }
    ]
  },
  {
    "name": "Staked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "quantity"
      }
    ]
  },
  {
    "name": "TokenPoolConfigured",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "initialPoolSize"
      }
    ]
  },
  {
    "name": "TokensRedistributed",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "poolId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalAmount"
      },
      {
        "type": "uint256[4]",
        "name": "periodAllocations"
      }
    ]
  },
  {
    "name": "Unstaked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "quantity"
      }
    ]
  },
  {
    "name": "MAX_POOLS",
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
    "name": "MAX_STAKE_PER_TX",
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
    "name": "MAX_UNSTAKE_PER_TX",
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
    "name": "PERIOD_DURATION",
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
    "name": "activatePool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "poolId"
      }
    ],
    "outputs": []
  },
  {
    "name": "addShopItem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "itemId"
      },
      {
        "type": "string",
        "name": "itemType"
      },
      {
        "type": "uint8",
        "name": "poolId"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "bool",
        "name": "payRon"
      },
      {
        "type": "uint256",
        "name": "nftId"
      }
    ],
    "outputs": []
  },
  {
    "name": "addTokensToPoolSchedule",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint8",
        "name": "poolId"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminFixHashRates",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint8",
        "name": "pool"
      },
      {
        "type": "uint256",
        "name": "newUserHash"
      },
      {
        "type": "uint256",
        "name": "newGlobalHash"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminWallet",
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
    "name": "adminWithdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "buyShopItem",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "itemId"
      },
      {
        "type": "uint256",
        "name": "qty"
      }
    ],
    "outputs": []
  },
  {
    "name": "claim",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": []
  },
  {
    "name": "deactivatePool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "poolId"
      }
    ],
    "outputs": []
  },
  {
    "name": "depositRONToPool",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint8",
        "name": "poolId"
      }
    ],
    "outputs": []
  },
  {
    "name": "earnedRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint8"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "endGame",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "getContractRONBalance",
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
    "name": "getContractTokenBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getGameStatus",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "isStarted"
      },
      {
        "type": "bool",
        "name": "isEnded"
      },
      {
        "type": "uint256",
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "endTime"
      },
      {
        "type": "uint256",
        "name": "currentDuration"
      }
    ]
  },
  {
    "name": "getNFTAttr",
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
        "type": "uint8[]",
        "name": "hashChains"
      },
      {
        "type": "uint256[]",
        "name": "hashRates"
      }
    ]
  },
  {
    "name": "getPeriodInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "poolId"
      },
      {
        "type": "uint8",
        "name": "period"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "endTime"
      },
      {
        "type": "uint256",
        "name": "totalAllocated"
      },
      {
        "type": "uint256",
        "name": "rewardsPerSecond"
      }
    ]
  },
  {
    "name": "getPlayerHashRates",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "hashRates"
      }
    ]
  },
  {
    "name": "getPlayerStaking",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "stakedIds"
      },
      {
        "type": "uint256[]",
        "name": "stakeds"
      },
      {
        "type": "uint256[]",
        "name": "lastClaimTs"
      }
    ]
  },
  {
    "name": "getPoolInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "poolId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "initialPoolSize"
      },
      {
        "type": "uint8",
        "name": "currentPeriod"
      },
      {
        "type": "bool",
        "name": "active"
      },
      {
        "type": "uint256",
        "name": "totalGlobalHash"
      }
    ]
  },
  {
    "name": "getShopItem",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "itemId"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "itemType"
      },
      {
        "type": "uint8",
        "name": "poolId"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "bool",
        "name": "payRon"
      },
      {
        "type": "uint256",
        "name": "nftId"
      },
      {
        "type": "bool",
        "name": "active"
      }
    ]
  },
  {
    "name": "getUserStakedIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "ids"
      }
    ]
  },
  {
    "name": "globalHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "lastUpdateTime",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "miner1155",
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
    "name": "onERC1155BatchReceived",
    "type": "function",
    "stateMutability": "view",
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
    "stateMutability": "view",
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
    "name": "pendingRewardsById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "poolCount",
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
    "name": "resume",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "rewardPerTokenStored",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "setNFTAttr",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tplId"
      },
      {
        "type": "uint8[]",
        "name": "hashChains"
      },
      {
        "type": "uint256[]",
        "name": "hashRates"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTokenPoolWithSchedule",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "poolId"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "initialPoolSize"
      }
    ],
    "outputs": []
  },
  {
    "name": "stake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "qty"
      }
    ],
    "outputs": []
  },
  {
    "name": "start",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "ts"
      }
    ],
    "outputs": []
  },
  {
    "name": "unstake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "qty"
      }
    ],
    "outputs": []
  },
  {
    "name": "userHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint8"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "userRewardPerTokenPaid",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint8"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "withdrawExcessRON",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
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