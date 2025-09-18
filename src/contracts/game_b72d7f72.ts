import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36983,
  address: '0x76f6bb2c6f68440bbfe7648ab8b0bbdfb72d7f72' as const,
  contract_name: 'Game',
  display_name: 'Game',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1757323438,
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
        "name": "_mbtc"
      },
      {
        "type": "address",
        "name": "_mltc"
      },
      {
        "type": "address",
        "name": "_mxmr"
      },
      {
        "type": "address",
        "name": "_mdoge"
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
    "name": "BadChain",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BadItem",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BadRef",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BalanceLow",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EmptyArray",
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
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientContractBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientGas",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPowerLevelUpgrade",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRecipeKey",
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
    "name": "PlayerNotRegistered",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RONMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SlotsExceeded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StakeLimitExceeded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "WithdrawPaused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BalanceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "u",
        "indexed": true
      },
      {
        "type": "address",
        "name": "tok"
      },
      {
        "type": "uint256",
        "name": "bal"
      }
    ]
  },
  {
    "name": "CraftRONPaid",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "u",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "ron"
      }
    ]
  },
  {
    "name": "CraftRecipeAdded",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "key"
      },
      {
        "type": "uint256",
        "name": "resId"
      }
    ]
  },
  {
    "name": "Deposited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "u",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "chain"
      },
      {
        "type": "uint256",
        "name": "amt"
      }
    ]
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
        "name": "chain",
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
    "name": "InsufficientBalanceWarning",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "required"
      },
      {
        "type": "uint256",
        "name": "available"
      }
    ]
  },
  {
    "name": "MiningClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "u",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalReward"
      },
      {
        "type": "uint256[4]",
        "name": "perChain"
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
    "name": "NFTCrafted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "u",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "burned"
      },
      {
        "type": "uint256",
        "name": "resToken"
      }
    ]
  },
  {
    "name": "PlayersRegisteredCount",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "total"
      }
    ]
  },
  {
    "name": "PowerLevelUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "u",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "lvl"
      },
      {
        "type": "uint256",
        "name": "slots"
      }
    ]
  },
  {
    "name": "ReferralCodeChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "u",
        "indexed": true
      },
      {
        "type": "string",
        "name": "oldCode"
      },
      {
        "type": "string",
        "name": "newCode"
      }
    ]
  },
  {
    "name": "RewardsHalved",
    "type": "event",
    "inputs": []
  },
  {
    "name": "ShopItemAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
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
        "name": "id",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amt"
      }
    ]
  },
  {
    "name": "ShopItemRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
      }
    ]
  },
  {
    "name": "TokenWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "u",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amt"
      },
      {
        "type": "uint256",
        "name": "fee"
      },
      {
        "type": "address",
        "name": "ref"
      }
    ]
  },
  {
    "name": "TokensBurned",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "u",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "chain"
      },
      {
        "type": "uint256",
        "name": "amt"
      }
    ]
  },
  {
    "name": "UserRegistered",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "u",
        "indexed": true
      },
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "refCode"
      },
      {
        "type": "address",
        "name": "referrer",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "avatarId"
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
    "name": "addCraftRecipeWithRON",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "burnIds"
      },
      {
        "type": "uint256",
        "name": "resId"
      },
      {
        "type": "uint256",
        "name": "ronCostWei"
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
        "name": "id"
      },
      {
        "type": "string",
        "name": "itype"
      },
      {
        "type": "string",
        "name": "chain"
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
    "name": "adminChangeReferral",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "string",
        "name": "oldRefCode"
      },
      {
        "type": "string",
        "name": "newRefCode"
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
        "name": "chain"
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
    "name": "adminListPlayers",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
        "type": "address[]",
        "name": "out"
      }
    ]
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
    "name": "avatarOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "baseRewardPerSecond",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "buyShopItem",
    "type": "function",
    "stateMutability": "payable",
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
    "name": "craft",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "burnIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "craftRONCost",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "craftResult",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "depositTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "chain"
      },
      {
        "type": "uint256",
        "name": "amt"
      }
    ],
    "outputs": []
  },
  {
    "name": "earnedBurns",
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
    "name": "gameState",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "gameStartTs"
      },
      {
        "type": "uint256",
        "name": "gameEndTs"
      },
      {
        "type": "uint8",
        "name": "withdrawalFeePercent"
      },
      {
        "type": "bool",
        "name": "gamePaused"
      },
      {
        "type": "bool",
        "name": "gameStarted"
      },
      {
        "type": "bool",
        "name": "gameEnded"
      },
      {
        "type": "bool",
        "name": "withdrawPaused"
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
    "name": "getPlayerBalances",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "u"
      }
    ],
    "outputs": [
      {
        "type": "uint256[4]",
        "name": "balance"
      },
      {
        "type": "uint256[4]",
        "name": "hashRate"
      }
    ]
  },
  {
    "name": "getPlayerBasicInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "u"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "username"
      },
      {
        "type": "address",
        "name": "referral"
      },
      {
        "type": "string",
        "name": "referralCode"
      },
      {
        "type": "uint256",
        "name": "powerSlots"
      },
      {
        "type": "uint8",
        "name": "powerLevel"
      },
      {
        "type": "uint32",
        "name": "referralCount"
      },
      {
        "type": "uint8",
        "name": "avatarId"
      },
      {
        "type": "uint256",
        "name": "usedSlots_"
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
        "name": "u"
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
    "name": "getUserStakedIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "u"
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
    "name": "halving",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
    "name": "mbtc",
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
    "name": "mdoge",
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
    "name": "mltc",
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
    "name": "mxmr",
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
    "name": "nftAttr",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint16",
        "name": "powerUnits"
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
    "name": "pauseWithdraw",
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
    "name": "pendingRewardsByIdWithChains",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint8[]",
        "name": "chains"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "powerLevels",
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
        "name": "price"
      },
      {
        "type": "uint16",
        "name": "slots"
      },
      {
        "type": "uint16",
        "name": "boostPct"
      }
    ]
  },
  {
    "name": "powerUpgradeTs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "registerUser",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "refCode"
      },
      {
        "type": "uint8",
        "name": "avatarId"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeShopItem",
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
    "name": "resume",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "resumeWithdraw",
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
        "type": "uint16",
        "name": "powerUnits_"
      },
      {
        "type": "uint8[]",
        "name": "hashChains"
      },
      {
        "type": "uint256[]",
        "name": "hashRates"
      },
      {
        "type": "uint8[]",
        "name": "burnChains"
      },
      {
        "type": "uint16[]",
        "name": "burnPcts"
      }
    ],
    "outputs": []
  },
  {
    "name": "shopItem",
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
        "name": "itemId"
      },
      {
        "type": "string",
        "name": "itemType"
      },
      {
        "type": "string",
        "name": "blockchain"
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
    ]
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
    "name": "upgradePower",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint8",
        "name": "lvl"
      }
    ],
    "outputs": []
  },
  {
    "name": "usedSlots",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
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
    "name": "withdrawTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "chain"
      },
      {
        "type": "uint256",
        "name": "amt"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract