import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 33799,
  address: '0xf8cb9a5fd3dcf30583eb95c9f74e75ee494ff83b' as const,
  contract_name: 'Main',
  display_name: 'Main',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1745222619,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
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
    "name": "GreatDepression",
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
    "name": "MiningHasntStarted",
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
    "name": "StarterMinerAlreadyAcquired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TooPoor",
    "type": "error",
    "inputs": []
  },
  {
    "name": "WithdrawFailed",
    "type": "error",
    "inputs": []
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
    "name": "MinerSecondaryMarketAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "price"
      }
    ]
  },
  {
    "name": "MinerSold",
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
        "name": "secondHandPrice"
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
        "name": "hashRate"
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
        "name": "playerHashrate"
      },
      {
        "type": "uint256",
        "name": "playerPendingRewards"
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
        "name": "playerHashrate"
      },
      {
        "type": "uint256",
        "name": "playerPendingRewards"
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
        "name": "rewards"
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
        "name": "maxMiners"
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
        "type": "bool",
        "name": "inProduction"
      }
    ],
    "outputs": []
  },
  {
    "name": "addSecondaryMarketForMiner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "minerIndex"
      },
      {
        "type": "uint256",
        "name": "price"
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
    "stateMutability": "nonpayable",
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
      }
    ],
    "outputs": []
  },
  {
    "name": "claimRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "cooldown",
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
        "name": "maxMiners"
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
            "type": "bool",
            "name": "inProduction"
          }
        ]
      }
    ]
  },
  {
    "name": "getReferrals",
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
        "type": "address[]"
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
    "name": "minerSecondHandMarket",
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
        "name": "maxMiners"
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
        "name": "referrer"
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
    "name": "referrals",
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
    "name": "referredUsers",
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
    "name": "sellMiner",
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
    "name": "setBigtoshi",
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
    "name": "setBurnPct",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "burn"
      }
    ],
    "outputs": []
  },
  {
    "name": "setCooldown",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_cooldown"
      }
    ],
    "outputs": []
  },
  {
    "name": "setInitialFacilityPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_initialPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "setReferralFee",
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
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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