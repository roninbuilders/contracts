import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4073,
  address: '0x9a16457855af6e8e4adb9ac4b5696defa077d17d' as const,
  contract_name: 'ApostleBounty',
  display_name: 'Apostle Bounty',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1726464738,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AdminAccessSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_admin"
      },
      {
        "type": "bool",
        "name": "_enabled"
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
    "name": "CancelBounty",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_bountyId"
      }
    ]
  },
  {
    "name": "CreateBounty",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_bountyId"
      },
      {
        "type": "address",
        "name": "_bountyCreator"
      },
      {
        "type": "uint256",
        "name": "_classId"
      },
      {
        "type": "uint256",
        "name": "_mainSkillId"
      },
      {
        "type": "uint256",
        "name": "_otherSkillId_1"
      },
      {
        "type": "uint256",
        "name": "_otherSkillId_2"
      },
      {
        "type": "uint256[]",
        "name": "_minSkillLevels"
      },
      {
        "type": "uint256",
        "name": "_minIV"
      },
      {
        "type": "uint256",
        "name": "_reforgeCount"
      },
      {
        "type": "uint256",
        "name": "_numberToBuy"
      },
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "uint256",
        "name": "_pricePerApostle"
      }
    ]
  },
  {
    "name": "FulfillBounty",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_bountyId"
      },
      {
        "type": "uint256[]",
        "name": "_apostleIds"
      },
      {
        "type": "address",
        "name": "_fulfiller"
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
    "name": "adminRevertBountyByMinPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "uint256",
        "name": "_minPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "apostleContract",
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
    "name": "cancelBounty",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_bountyId"
      }
    ],
    "outputs": []
  },
  {
    "name": "cancelTimeMap",
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
    "name": "createBounty",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_classId"
      },
      {
        "type": "uint256",
        "name": "_mainSkillId"
      },
      {
        "type": "uint256",
        "name": "_otherSkillId_1"
      },
      {
        "type": "uint256",
        "name": "_otherSkillId_2"
      },
      {
        "type": "uint256[]",
        "name": "_minSkillLevels"
      },
      {
        "type": "uint256",
        "name": "_minIV"
      },
      {
        "type": "uint256",
        "name": "_numberToBuy"
      },
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "uint256",
        "name": "_pricePerApostle"
      }
    ],
    "outputs": []
  },
  {
    "name": "currentBountyId",
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
    "name": "earningAddress",
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
    "name": "earningPercentage",
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
    "name": "fulfillBounty",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_bountyId"
      },
      {
        "type": "uint256[]",
        "name": "_apostleIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "getBountyData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_bountyId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "bountyCreator"
          },
          {
            "type": "uint256",
            "name": "classId"
          },
          {
            "type": "uint256",
            "name": "mainSkillId"
          },
          {
            "type": "uint256",
            "name": "otherSkillId_1"
          },
          {
            "type": "uint256",
            "name": "otherSkillId_2"
          },
          {
            "type": "uint256[]",
            "name": "minSkillLevels"
          },
          {
            "type": "uint256",
            "name": "minIV"
          },
          {
            "type": "uint256",
            "name": "reforgeCount"
          },
          {
            "type": "uint256",
            "name": "initialBountyNumber"
          },
          {
            "type": "uint256",
            "name": "remainingBountyNumber"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "pricePerApostle"
          },
          {
            "type": "bool",
            "name": "isCancelled"
          }
        ]
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "isAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isWhitelistedToken",
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
    "name": "lastFulfillTimeMap",
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
    "name": "minPricePerApostleMap",
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
    "name": "percentageBase",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "bool",
        "name": "enabled"
      }
    ],
    "outputs": []
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
    "name": "updateContractSetting",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_apostleAddress"
      },
      {
        "type": "address",
        "name": "_earningAddress"
      },
      {
        "type": "uint256",
        "name": "_percentageBase"
      },
      {
        "type": "uint256",
        "name": "_earningPercentage"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateMinPricePerApostle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_tokenAddressArray"
      },
      {
        "type": "uint256[]",
        "name": "_minPricePerApostleArray"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateWhitelistTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_tokenAddressArray"
      },
      {
        "type": "bool",
        "name": "_isWhitelisted"
      }
    ],
    "outputs": []
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract