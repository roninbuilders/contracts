import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4737,
  address: '0xd57fd085e5724f0e3738da746e5f8ae0990b658b' as const,
  contract_name: 'RelicApostleManagement',
  display_name: 'Relic Apostle Management',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1729587871,
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
    "name": "ManageRelicApostle",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_planetOwner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_planetID"
      },
      {
        "type": "string",
        "name": "_seedPlanetID"
      },
      {
        "type": "uint256[]",
        "name": "_slotsWithApostleIDs"
      },
      {
        "type": "uint256[]",
        "name": "_apostleIDs"
      },
      {
        "type": "uint256[]",
        "name": "_genes"
      },
      {
        "type": "uint256[]",
        "name": "_ivs"
      },
      {
        "type": "uint256[]",
        "name": "_createTimes"
      },
      {
        "type": "uint8[]",
        "name": "_actions"
      }
    ]
  },
  {
    "name": "ManageRelicApostlesSummary",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_planetOwner",
        "indexed": true
      },
      {
        "type": "tuple[]",
        "name": "_payloads",
        "components": [
          {
            "type": "uint256",
            "name": "planetID"
          },
          {
            "type": "string",
            "name": "seedPlanetID"
          },
          {
            "type": "uint256[]",
            "name": "slotsWithApostleIDs"
          },
          {
            "type": "uint256[]",
            "name": "apostleIDs"
          },
          {
            "type": "uint256[]",
            "name": "genes"
          },
          {
            "type": "uint256[]",
            "name": "ivs"
          },
          {
            "type": "uint256[]",
            "name": "createTimes"
          },
          {
            "type": "uint8[]",
            "name": "actions"
          }
        ]
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
    "name": "ReforgePriceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_reforgingPriceArray"
      }
    ]
  },
  {
    "name": "SaleScheduleUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "_mintType",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_saleSchedule"
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
    "name": "getPlanetNonceArray",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_planetIDs"
      },
      {
        "type": "string[]",
        "name": "_seedPlanetIDs"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "planetResult"
      },
      {
        "type": "uint256[]",
        "name": "seedPlanetResult"
      }
    ]
  },
  {
    "name": "getPlanetSlotsWithApostleIDsMapping",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_planetIds"
      },
      {
        "type": "string[]",
        "name": "_seedPlanetIds"
      }
    ],
    "outputs": [
      {
        "type": "uint256[][]"
      },
      {
        "type": "uint256[][]"
      }
    ]
  },
  {
    "name": "getReforgingAnimaPriceArray",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]"
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
    "name": "manageRelicApostles",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_payloads",
        "components": [
          {
            "type": "uint256",
            "name": "planetID"
          },
          {
            "type": "string",
            "name": "seedPlanetID"
          },
          {
            "type": "uint256[]",
            "name": "slotsWithApostleIDs"
          },
          {
            "type": "uint256[]",
            "name": "apostleIDs"
          },
          {
            "type": "uint256[]",
            "name": "genes"
          },
          {
            "type": "uint256[]",
            "name": "ivs"
          },
          {
            "type": "uint256[]",
            "name": "createTimes"
          },
          {
            "type": "uint8[]",
            "name": "actions"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "_time"
      },
      {
        "type": "bytes",
        "name": "_signature"
      }
    ],
    "outputs": []
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
    "name": "setEnabled",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_isEnabled"
      }
    ],
    "outputs": []
  },
  {
    "name": "setupReforgePrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_reforgingPriceArray"
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
        "name": "_tokenReceiptHandler"
      },
      {
        "type": "address",
        "name": "_planetAddress"
      },
      {
        "type": "address",
        "name": "_apostleAddress"
      },
      {
        "type": "address",
        "name": "_animaAddress"
      },
      {
        "type": "address",
        "name": "_systemAddress"
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
  },
  {
    "name": "withdrawFunds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "address",
        "name": "_wallet"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract