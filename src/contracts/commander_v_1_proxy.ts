import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34548,
  address: '0xc4984e51b4252e937ccb6017985779390ef42bd0' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Commander V1 Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x38f15b5a0baa50a6711afe497df46a804dabde34',
  created_at: 1746178523,
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
        "name": "admin_"
      },
      {
        "type": "bytes",
        "name": "_data"
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
    "name": "admin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "admin_"
      }
    ]
  },
  {
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "implementation_"
      }
    ]
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeToAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      },
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
    "name": "AdminWithdrawFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AlreadyAtMaxFacility",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AlreadyPurchasedInitialFactory",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CallerNotItemShop",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CantBuyMinerYet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CantBuyNewFacilityYet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CantModifyStarterFacility",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CantModifyStarterMiner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CoordinatesOccupied",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ERC1155BurnFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ERC1155ItemsCollectionNotSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ERC1155MintFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FacilityDimensionsInvalid",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FacilityInadequatePowerOutput",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FacilityLevelTooLow",
    "type": "error",
    "inputs": []
  },
  {
    "name": "GamePaused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "IncorrectClaimFee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "IncorrectUpgradeFee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "IncorrectValue",
    "type": "error",
    "inputs": []
  },
  {
    "name": "IndexOutOfBounds",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientERC1155",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "balance"
      },
      {
        "type": "bool",
        "name": "isApproved"
      }
    ]
  },
  {
    "name": "InsufficientMinerDust",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientMoveFee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientWithdrawFee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidFacilityIndex",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidFee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidMinerCoordinates",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidMinerIndex",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPowerOutput",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidReferrer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MinerNotInProduction",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MinerTokenIdNotSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MiningHasntStarted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NativeTransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NeedToInitializeFacility",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NewFacilityNotInProduction",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoActiveCooldown",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoActiveFacilityCooldown",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoRewardsPending",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NonExistentFacility",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NonExistentMiner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotOwnerOfNFT",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnableInvalidOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "OwnableUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "PlayerDoesNotOwnMiner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RecipientNotSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ResetTokenIdNotSetForFacility",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ResetTokenIdNotSetForMiner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StarterFacilityNotSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StarterMinerAlreadyAcquired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StarterMinerNotSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TooPoor",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnapprovedERC1155",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "balance"
      },
      {
        "type": "bool",
        "name": "isApproved"
      }
    ]
  },
  {
    "name": "WithdrawCooldownActive",
    "type": "error",
    "inputs": []
  },
  {
    "name": "WithdrawFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AdminMinerWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "minerId"
      },
      {
        "type": "uint256",
        "name": "minerIndex"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "ERC1155ItemsCollectionSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "FacilityBought",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "facilityIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "cost"
      }
    ]
  },
  {
    "name": "FacilityCooldownReset",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "currentFacilityIndex"
      },
      {
        "type": "uint256",
        "name": "requiredTokenId"
      }
    ]
  },
  {
    "name": "FacilityCostChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "facilityIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newCost"
      },
      {
        "type": "uint256",
        "name": "newDustCost"
      },
      {
        "type": "uint256",
        "name": "newTotalPowerOutput"
      }
    ]
  },
  {
    "name": "FacilityProductionToggled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "facilityIndex",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "inProduction"
      }
    ]
  },
  {
    "name": "FacilityResetCooldownTokenIdSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "facilityIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "InitialFacilityPurchased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
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
    "name": "ItemShopContractSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "itemShopContract",
        "indexed": true
      }
    ]
  },
  {
    "name": "MinerBought",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "minerIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "cost"
      },
      {
        "type": "uint256",
        "name": "minerId"
      },
      {
        "type": "uint256",
        "name": "x"
      },
      {
        "type": "uint256",
        "name": "y"
      }
    ]
  },
  {
    "name": "MinerBurned",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "minerIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "dustGained"
      },
      {
        "type": "uint256",
        "name": "minerId"
      },
      {
        "type": "uint256",
        "name": "x"
      },
      {
        "type": "uint256",
        "name": "y"
      },
      {
        "type": "address",
        "name": "referralAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "referralDustAmount"
      }
    ]
  },
  {
    "name": "MinerCooldownReset",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "minerIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "MinerCostChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newCost"
      },
      {
        "type": "uint256",
        "name": "newDustCost"
      },
      {
        "type": "uint256",
        "name": "newDustRedeem"
      },
      {
        "type": "uint256",
        "name": "newCooldown"
      }
    ]
  },
  {
    "name": "MinerMoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "minerId"
      },
      {
        "type": "uint256",
        "name": "oldX"
      },
      {
        "type": "uint256",
        "name": "oldY"
      },
      {
        "type": "uint256",
        "name": "newX"
      },
      {
        "type": "uint256",
        "name": "newY"
      }
    ]
  },
  {
    "name": "MinerProductionToggled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerIndex",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "inProduction"
      }
    ]
  },
  {
    "name": "MinerReintegrated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "minerId"
      },
      {
        "type": "uint256",
        "name": "minerIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "x"
      },
      {
        "type": "uint256",
        "name": "y"
      }
    ]
  },
  {
    "name": "MinerResetCooldownTokenIdSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "MinerTokenIdSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerIndex",
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
    "name": "MinerWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "minerId"
      },
      {
        "type": "uint256",
        "name": "minerIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "x"
      },
      {
        "type": "uint256",
        "name": "y"
      }
    ]
  },
  {
    "name": "MiningStarted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "startBlock"
      }
    ]
  },
  {
    "name": "NativeReferralBonusPaid",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "address",
        "name": "referrer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "string",
        "name": "purchaseType",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewFacilityAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "facilityIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalPowerOutput"
      },
      {
        "type": "uint256",
        "name": "cost"
      },
      {
        "type": "uint256",
        "name": "dustCost"
      },
      {
        "type": "bool",
        "name": "inProduction"
      },
      {
        "type": "uint256",
        "name": "x"
      },
      {
        "type": "uint256",
        "name": "y"
      }
    ]
  },
  {
    "name": "NewMinerAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "hashrate"
      },
      {
        "type": "uint256",
        "name": "powerConsumption"
      },
      {
        "type": "uint256",
        "name": "cost"
      },
      {
        "type": "uint256",
        "name": "dustCost"
      },
      {
        "type": "uint256",
        "name": "dustRedeem"
      },
      {
        "type": "uint256",
        "name": "facilityMinimum"
      },
      {
        "type": "uint256",
        "name": "cooldown"
      },
      {
        "type": "bool",
        "name": "inProduction"
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
    "name": "PauseToggled",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "isPaused"
      }
    ]
  },
  {
    "name": "PlayerHashrateDecreased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newHashrate"
      },
      {
        "type": "uint256",
        "name": "pendingRewards"
      }
    ]
  },
  {
    "name": "PlayerHashrateIncreased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newHashrate"
      },
      {
        "type": "uint256",
        "name": "pendingRewards"
      }
    ]
  },
  {
    "name": "ReferrerSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "address",
        "name": "referralAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "RewardsClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalAmount"
      },
      {
        "type": "address",
        "name": "referralAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenReferralBonus"
      }
    ]
  },
  {
    "name": "StarterFacilityIndexSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "facilityIndex",
        "indexed": true
      }
    ]
  },
  {
    "name": "StarterMinerIndexSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerIndex",
        "indexed": true
      }
    ]
  },
  {
    "name": "HALVING_INTERVAL",
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
    "name": "INITIAL_TOKEN_PER_BLOCK",
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
    "name": "REWARDS_PRECISION",
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
    "name": "STARTER_FACILITY_INDEX",
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
    "name": "STARTER_MINER_INDEX",
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
    "name": "acquiredStarterMiner",
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
    "name": "addFacility",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "totalPowerOutput"
      },
      {
        "type": "uint256",
        "name": "cost"
      },
      {
        "type": "uint256",
        "name": "dustCost"
      },
      {
        "type": "bool",
        "name": "inProduction"
      },
      {
        "type": "uint256",
        "name": "x"
      },
      {
        "type": "uint256",
        "name": "y"
      }
    ],
    "outputs": []
  },
  {
    "name": "addMiner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "hashrate"
      },
      {
        "type": "uint256",
        "name": "powerConsumption"
      },
      {
        "type": "uint256",
        "name": "cost"
      },
      {
        "type": "uint256",
        "name": "dustCost"
      },
      {
        "type": "uint256",
        "name": "dustRedeem"
      },
      {
        "type": "uint256",
        "name": "facilityMinimum"
      },
      {
        "type": "uint256",
        "name": "minerCooldown"
      },
      {
        "type": "bool",
        "name": "inProduction"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminWithdrawMiner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint256",
        "name": "minerId"
      }
    ],
    "outputs": []
  },
  {
    "name": "blocksUntilNextHalving",
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
    "name": "burnMiner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerId"
      }
    ],
    "outputs": []
  },
  {
    "name": "burnPct",
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
    "name": "buyMiner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerIndex"
      },
      {
        "type": "uint256",
        "name": "x"
      },
      {
        "type": "uint256",
        "name": "y"
      }
    ],
    "outputs": []
  },
  {
    "name": "buyNewFacility",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "changeFacilityCost",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "facilityIndex"
      },
      {
        "type": "uint256",
        "name": "newCost"
      },
      {
        "type": "uint256",
        "name": "newDustCost"
      },
      {
        "type": "uint256",
        "name": "newTotalPowerOutput"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeMinerCost",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerIndex"
      },
      {
        "type": "uint256",
        "name": "newCost"
      },
      {
        "type": "uint256",
        "name": "newDustCost"
      },
      {
        "type": "uint256",
        "name": "newDustRedeem"
      },
      {
        "type": "uint256",
        "name": "newCooldown"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimFee",
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
    "name": "claimRewards",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "cumulativeTokenPerHash",
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
    "name": "erc1155ItemsCollection",
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
    "name": "facilities",
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
        "name": "totalPowerOutput"
      },
      {
        "type": "uint256",
        "name": "cost"
      },
      {
        "type": "uint256",
        "name": "dustCost"
      },
      {
        "type": "bool",
        "name": "inProduction"
      },
      {
        "type": "uint256",
        "name": "x"
      },
      {
        "type": "uint256",
        "name": "y"
      }
    ]
  },
  {
    "name": "facilityCount",
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
    "name": "facilityIndexToResetTokenId",
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
    "name": "facilityUpgradable",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "getFreeStarterMiner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "x"
      },
      {
        "type": "uint256",
        "name": "y"
      }
    ],
    "outputs": []
  },
  {
    "name": "getPlayerMinerCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPlayerMinersPaginated",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint256",
        "name": "startIndex"
      },
      {
        "type": "uint256",
        "name": "size"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "minerIndex"
          },
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "x"
          },
          {
            "type": "uint256",
            "name": "y"
          },
          {
            "type": "uint256",
            "name": "hashrate"
          },
          {
            "type": "uint256",
            "name": "powerConsumption"
          },
          {
            "type": "uint256",
            "name": "cost"
          },
          {
            "type": "uint256",
            "name": "dustCost"
          },
          {
            "type": "uint256",
            "name": "dustRedeem"
          },
          {
            "type": "uint256",
            "name": "facilityMinimum"
          },
          {
            "type": "uint256",
            "name": "cooldown"
          },
          {
            "type": "bool",
            "name": "inProduction"
          }
        ]
      }
    ]
  },
  {
    "name": "getPlayerReferrer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getReferralClaimBonusPaid",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "referrer"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getReferralNativeBonusPaid",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "referrer"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getReferralTokenBonusPaid",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "referrer"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getReferrerCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "referrer"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getTokenPerBlock",
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
    "name": "initialFacilityPrice",
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
        "type": "address",
        "name": "initialOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializedStarterFacility",
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
    "name": "itemShopContract",
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
    "name": "lastFacilityUpgradeTimestamp",
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
    "name": "lastRewardBlock",
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
    "name": "minerDustReferralPct",
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
    "name": "minerIndexToResetTokenId",
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
    "name": "minerIndexToTokenId",
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
    "name": "minerTypeCooldownEnd",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
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
    "name": "miners",
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
        "name": "minerIndex"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "x"
      },
      {
        "type": "uint256",
        "name": "y"
      },
      {
        "type": "uint256",
        "name": "hashrate"
      },
      {
        "type": "uint256",
        "name": "powerConsumption"
      },
      {
        "type": "uint256",
        "name": "cost"
      },
      {
        "type": "uint256",
        "name": "dustCost"
      },
      {
        "type": "uint256",
        "name": "dustRedeem"
      },
      {
        "type": "uint256",
        "name": "facilityMinimum"
      },
      {
        "type": "uint256",
        "name": "cooldown"
      },
      {
        "type": "bool",
        "name": "inProduction"
      }
    ]
  },
  {
    "name": "miningHasStarted",
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
    "name": "mintFromShop",
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
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "moveMiner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerId"
      },
      {
        "type": "uint256",
        "name": "newX"
      },
      {
        "type": "uint256",
        "name": "newY"
      }
    ],
    "outputs": []
  },
  {
    "name": "moveMinerFee",
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
    "name": "ownerToFacility",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "facilityIndex"
      },
      {
        "type": "uint256",
        "name": "currMiners"
      },
      {
        "type": "uint256",
        "name": "totalPowerOutput"
      },
      {
        "type": "uint256",
        "name": "currPowerOutput"
      },
      {
        "type": "uint256",
        "name": "x"
      },
      {
        "type": "uint256",
        "name": "y"
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
    "name": "pendingRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "playerHashrate",
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
    "name": "playerMinerDust",
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
    "name": "playerMinersId",
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
        "name": "minerIndex"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "x"
      },
      {
        "type": "uint256",
        "name": "y"
      },
      {
        "type": "uint256",
        "name": "hashrate"
      },
      {
        "type": "uint256",
        "name": "powerConsumption"
      },
      {
        "type": "uint256",
        "name": "cost"
      },
      {
        "type": "uint256",
        "name": "dustCost"
      },
      {
        "type": "uint256",
        "name": "dustRedeem"
      },
      {
        "type": "uint256",
        "name": "facilityMinimum"
      },
      {
        "type": "uint256",
        "name": "cooldown"
      },
      {
        "type": "bool",
        "name": "inProduction"
      }
    ]
  },
  {
    "name": "playerMinersOwned",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_spacer"
      }
    ]
  },
  {
    "name": "playerOccupiedCoords",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "playerPendingRewards",
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
    "name": "playerReferrer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "playerTokenDebt",
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
    "name": "playerTokenPerBlock",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "purchaseInitialFacility",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "referralAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "referralBonusPaid",
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
    "name": "referralClaimBonusPaid",
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
    "name": "referralFee",
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
    "name": "referralNativeBonusPaid",
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
    "name": "referrerCount",
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
    "name": "reintegrateMiner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerIndex"
      },
      {
        "type": "uint256",
        "name": "x"
      },
      {
        "type": "uint256",
        "name": "y"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "resetFacilityCooldown",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "facilityIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "resetMinerCooldown",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "setERC1155ItemsCollection",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFacilityResetCooldownTokenId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "facilityIndex"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFeeRecipient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenFeeRecipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "setItemShopContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_itemShopContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinerResetCooldownTokenId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerIndex"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMinerTokenId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerIndex"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": []
  },
  {
    "name": "startBlock",
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
    "name": "timeUntilNextFacilityUpgrade",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "toggleFacilityProduction",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "facilityIndex"
      },
      {
        "type": "bool",
        "name": "inProduction"
      }
    ],
    "outputs": []
  },
  {
    "name": "toggleMinerProduction",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerIndex"
      },
      {
        "type": "bool",
        "name": "inProduction"
      }
    ],
    "outputs": []
  },
  {
    "name": "token",
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
    "name": "tokenFeeRecipient",
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
    "name": "totalHashrate",
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
    "name": "uniqueMinerCount",
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "updateVariables",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_upgradeFacilityCooldown"
      },
      {
        "type": "uint256",
        "name": "_referralFee"
      },
      {
        "type": "uint256",
        "name": "_burnPct"
      },
      {
        "type": "uint256",
        "name": "_minerDustReferralPct"
      },
      {
        "type": "uint256",
        "name": "_claimFee"
      },
      {
        "type": "uint256",
        "name": "_upgradeFacilityFee"
      },
      {
        "type": "uint256",
        "name": "_moveMinerFee"
      },
      {
        "type": "uint256",
        "name": "_withdrawMinerFee"
      },
      {
        "type": "uint256",
        "name": "_initialFacilityPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeFacilityCooldown",
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
    "name": "upgradeFacilityFee",
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
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawMiner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerId"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawMinerFee",
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
    "name": "withdrawToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
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