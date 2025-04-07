import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2128,
  address: '0xf81e5b1dd4fffdf719f281b7805cd6a0d6b9a075' as const,
  contract_name: 'JungleAdventureV2',
  display_name: 'Jungle Adventure V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1712249214,
  abi: [
  {
    "name": "ErrFullfilled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidRonCost",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidTier",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNotEnoughGs",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNotOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrPotion",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrToomanyRuns",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AdventureDone",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "vx",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "gData",
        "components": [
          {
            "type": "bool",
            "name": "eventSuccess"
          },
          {
            "type": "uint8",
            "name": "state"
          },
          {
            "type": "uint8",
            "name": "tier"
          },
          {
            "type": "uint8",
            "name": "encounterId"
          },
          {
            "type": "uint8",
            "name": "deductedHp"
          },
          {
            "type": "uint16",
            "name": "expEarned"
          },
          {
            "type": "uint16",
            "name": "kongiumEarned"
          },
          {
            "type": "uint16",
            "name": "fallbackKongium"
          },
          {
            "type": "uint16",
            "name": "eventData"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "rData",
        "components": [
          {
            "type": "uint8",
            "name": "extraExp"
          },
          {
            "type": "uint16",
            "name": "extraKongium"
          },
          {
            "type": "uint16",
            "name": "fallbackKongium"
          },
          {
            "type": "address[2]",
            "name": "rewardAddress"
          },
          {
            "type": "uint256[2]",
            "name": "tokenId"
          },
          {
            "type": "uint256[2]",
            "name": "amounts"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "CommitKongium",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "seasonId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "commiter",
        "indexed": true
      }
    ]
  },
  {
    "name": "Healed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "vxId"
      },
      {
        "type": "uint256",
        "name": "potionType"
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "KongiumBurn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "KongiumMint",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "ManyAdventuresCompleted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "vx",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "requestId"
      }
    ]
  },
  {
    "name": "ManyAdventuresStarted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "vx",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "requestId"
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
    "name": "StartSeason",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "prize"
      }
    ]
  },
  {
    "name": "UpgradeVX",
    "type": "event",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "newLevels"
      }
    ]
  },
  {
    "name": "GSReq",
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
    "name": "KONGIUM_ID",
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
    "name": "LVL_ID",
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
    "name": "POTION_1",
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
    "name": "POTION_2",
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
    "name": "VX_GENE_ID",
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
    "name": "allowedCollections",
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
    "name": "approvedContract",
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
    "name": "canGetExp",
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
    "name": "claimNana",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_season"
      }
    ],
    "outputs": []
  },
  {
    "name": "commitKongium",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "committedKongium",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
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
    "name": "consumables",
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
    "name": "equipment",
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
    "name": "extraData",
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
    "name": "getGene",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_vx"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "gene"
      }
    ]
  },
  {
    "name": "getKongStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_vxs"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getKreditSpent",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_season"
      },
      {
        "type": "uint256[]",
        "name": "_vxs"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getLevel",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_vxId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_level"
      }
    ]
  },
  {
    "name": "getMaxHp",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_vx"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "maxHp"
      }
    ]
  },
  {
    "name": "getMultiSeasonRewardData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_seasons"
      },
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "globalCommittedKongium",
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
    "name": "grantExp",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_collec"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "heal",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_vxId"
      },
      {
        "type": "uint256",
        "name": "_potionType"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "healPerPotion",
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
    "name": "hp",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_nanas"
      },
      {
        "type": "address",
        "name": "_vx"
      },
      {
        "type": "address",
        "name": "_slices"
      },
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "address",
        "name": "_consumable"
      },
      {
        "type": "address",
        "name": "_extra"
      },
      {
        "type": "address",
        "name": "_vrfCoordinator"
      },
      {
        "type": "address",
        "name": "_equip"
      },
      {
        "type": "address",
        "name": "_trait"
      },
      {
        "type": "address",
        "name": "_treasury"
      }
    ],
    "outputs": []
  },
  {
    "name": "isPaused",
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
    "name": "kongium",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "logic",
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
    "name": "lootHolder",
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
    "name": "lottery",
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
    "name": "multiRunData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "fulfilled"
      },
      {
        "type": "uint8",
        "name": "tier"
      },
      {
        "type": "uint8",
        "name": "vxLvl"
      },
      {
        "type": "uint8",
        "name": "amount"
      },
      {
        "type": "uint16",
        "name": "gearScore"
      },
      {
        "type": "uint16",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "maxHp"
      },
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "seed"
      }
    ]
  },
  {
    "name": "nanas",
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
    "name": "onERC1155Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_operator"
      },
      {
        "type": "address",
        "name": "_from"
      },
      {
        "type": "uint256",
        "name": "_id"
      },
      {
        "type": "uint256",
        "name": "_value"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
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
    "name": "rawFulfillRandomSeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_reqHash"
      },
      {
        "type": "uint256",
        "name": "_randomSeed"
      }
    ],
    "outputs": []
  },
  {
    "name": "remainingHp",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_vxIds"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "currentHp"
      }
    ]
  },
  {
    "name": "remainingHp",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_vxId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "currentHp"
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
    "name": "run",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_vxId"
      },
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "season",
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
    "name": "seasonDuration",
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
    "name": "seasonLastUpdate",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "seasonSliceRewardBalance",
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
    "name": "seasonStartTime",
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
    "name": "setExp",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_collec"
      },
      {
        "type": "bool",
        "name": "_val"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_val"
      }
    ],
    "outputs": []
  },
  {
    "name": "slices",
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
    "name": "slicesSpent",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "startSeason",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "tierCount",
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
    "name": "tierRonCost",
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
    "name": "tierSliceCost",
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
    "name": "traitRegistry",
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
    "name": "treasury",
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
    "name": "updateAllowedCollections",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_collecs"
      },
      {
        "type": "bool[]",
        "name": "_values"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateApprovedContracts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_contracts"
      },
      {
        "type": "bool[]",
        "name": "_values"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateEquipment",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_equip"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateExtraData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_collec"
      },
      {
        "type": "address",
        "name": "_extra"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateGSReq",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "uint256",
        "name": "_req"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateHeal",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_potion"
      },
      {
        "type": "uint256",
        "name": "_hp"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateLogic",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateLoot",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_loot"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateLottery",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_lottery"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateSeasonLength",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_length"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateTierCount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_count"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateTierSliceAndRonCost",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "uint256",
        "name": "_slice"
      },
      {
        "type": "uint256",
        "name": "_ron"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateTrait",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_trait"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_treasury"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeVxLvl",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_vx"
      }
    ],
    "outputs": []
  },
  {
    "name": "vrfCoordinator",
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
    "name": "vx",
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
    "name": "vxActionTimestamp",
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
    "name": "vxXp",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract