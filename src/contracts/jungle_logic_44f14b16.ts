import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2129,
  address: '0x241cbf1f188cb39893a4774251f3557844f14b16' as const,
  contract_name: 'JungleLogic',
  display_name: 'Jungle Logic',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1712252910,
  abi: [
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
    "name": "addEncounter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "tuple",
        "name": "_encounter",
        "components": [
          {
            "type": "uint256",
            "name": "chance"
          },
          {
            "type": "uint256",
            "name": "min"
          },
          {
            "type": "uint256",
            "name": "max"
          },
          {
            "type": "uint256",
            "name": "minChance"
          },
          {
            "type": "uint256",
            "name": "maxChance"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "reward"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "penalty"
          },
          {
            "type": "uint256",
            "name": "kongiumFallback"
          }
        ]
      },
      {
        "type": "bool",
        "name": "_enable"
      }
    ],
    "outputs": []
  },
  {
    "name": "addEvent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "tuple",
        "name": "_event",
        "components": [
          {
            "type": "uint256",
            "name": "eventType"
          },
          {
            "type": "uint256",
            "name": "level"
          },
          {
            "type": "uint256",
            "name": "hp"
          },
          {
            "type": "uint256",
            "name": "gs"
          },
          {
            "type": "uint256",
            "name": "kongiumFallback"
          },
          {
            "type": "uint256",
            "name": "chance"
          },
          {
            "type": "address",
            "name": "tokenReward"
          },
          {
            "type": "uint256",
            "name": "reward"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "bool",
        "name": "_enable"
      }
    ],
    "outputs": []
  },
  {
    "name": "authorised",
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
    "name": "disableEncounter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "uint256",
        "name": "_eventId"
      }
    ],
    "outputs": []
  },
  {
    "name": "disableEvent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "uint256",
        "name": "_eventId"
      }
    ],
    "outputs": []
  },
  {
    "name": "editEncounterParams",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "uint256",
        "name": "_eventId"
      },
      {
        "type": "tuple",
        "name": "_encounter",
        "components": [
          {
            "type": "uint256",
            "name": "chance"
          },
          {
            "type": "uint256",
            "name": "min"
          },
          {
            "type": "uint256",
            "name": "max"
          },
          {
            "type": "uint256",
            "name": "minChance"
          },
          {
            "type": "uint256",
            "name": "maxChance"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "reward"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "penalty"
          },
          {
            "type": "uint256",
            "name": "kongiumFallback"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "editEventParams",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "uint256",
        "name": "_eventId"
      },
      {
        "type": "tuple",
        "name": "_event",
        "components": [
          {
            "type": "uint256",
            "name": "eventType"
          },
          {
            "type": "uint256",
            "name": "level"
          },
          {
            "type": "uint256",
            "name": "hp"
          },
          {
            "type": "uint256",
            "name": "gs"
          },
          {
            "type": "uint256",
            "name": "kongiumFallback"
          },
          {
            "type": "uint256",
            "name": "chance"
          },
          {
            "type": "address",
            "name": "tokenReward"
          },
          {
            "type": "uint256",
            "name": "reward"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "enableEncounter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "uint256",
        "name": "_eventId"
      }
    ],
    "outputs": []
  },
  {
    "name": "enableEvent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "uint256",
        "name": "_eventId"
      }
    ],
    "outputs": []
  },
  {
    "name": "getEncountertInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "uint256",
        "name": "_start"
      },
      {
        "type": "uint256",
        "name": "_end"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "bool",
            "name": "hasIndex"
          },
          {
            "type": "uint24",
            "name": "minSuccessChance"
          },
          {
            "type": "uint24",
            "name": "maxSuccessChance"
          },
          {
            "type": "uint16",
            "name": "gsMin"
          },
          {
            "type": "uint16",
            "name": "gsMax"
          },
          {
            "type": "uint16",
            "name": "penalty"
          },
          {
            "type": "uint16",
            "name": "kongiumFallback"
          },
          {
            "type": "uint24",
            "name": "chance"
          },
          {
            "type": "address",
            "name": "tokenReward"
          },
          {
            "type": "uint256",
            "name": "reward"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ]
  },
  {
    "name": "getEventInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "uint256",
        "name": "_start"
      },
      {
        "type": "uint256",
        "name": "_end"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "bool",
            "name": "hasIndex"
          },
          {
            "type": "uint8",
            "name": "eventType"
          },
          {
            "type": "uint8",
            "name": "levelRequirement"
          },
          {
            "type": "uint16",
            "name": "hpRequirement"
          },
          {
            "type": "uint16",
            "name": "gearScoreRequirement"
          },
          {
            "type": "uint16",
            "name": "kongiumFallback"
          },
          {
            "type": "uint24",
            "name": "chance"
          },
          {
            "type": "address",
            "name": "tokenReward"
          },
          {
            "type": "uint128",
            "name": "reward"
          },
          {
            "type": "uint128",
            "name": "amount"
          }
        ]
      }
    ]
  },
  {
    "name": "getReqForLvl",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_currentLevel"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "exp"
      },
      {
        "type": "uint256",
        "name": "kongium"
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "run",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_seed"
      },
      {
        "type": "uint256",
        "name": "__gearScore"
      },
      {
        "type": "uint256",
        "name": "_currentHp"
      },
      {
        "type": "uint256",
        "name": "__level"
      },
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "address",
        "name": "_lootHolder"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "gameData",
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
        "name": "data",
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
      }
    ]
  },
  {
    "name": "setAuthorised",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      },
      {
        "type": "bool",
        "name": "_val"
      }
    ],
    "outputs": []
  },
  {
    "name": "tierEnabledEncounterCounter",
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
    "name": "tierEnabledEventCounter",
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
    "name": "tierEncounterChanceMapping",
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
    "name": "tierEncounterCounter",
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
    "name": "tierEventChanceMapping",
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
    "name": "tierEventCounter",
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
    "name": "tierGameEncounterIdToIndex",
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
    "name": "tierGameEncounterQueue",
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
    "name": "tierGameEncounters",
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
        "type": "uint256",
        "name": "l1"
      },
      {
        "type": "uint256",
        "name": "l2"
      }
    ]
  },
  {
    "name": "tierGameEventIdToIndex",
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
    "name": "tierGameEventQueue",
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
    "name": "tierGameEvents",
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
        "type": "uint256",
        "name": "l1"
      },
      {
        "type": "uint256",
        "name": "l2"
      }
    ]
  },
  {
    "name": "tierMaxChanceCounter",
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
    "name": "tierMaxChanceEncounterCounter",
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract