import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3731,
  address: '0xbee2036eb93358411d97a57b2ba661fb8ea84074' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Relic Apostle Management Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xcf140be3bf8f39dd0e7f662fa78bbc7631637b96',
  created_at: 1724227917,
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
    "name": "coverPlanetSlotsWithApostleIDsMapping",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_planetWithSlotId"
      },
      {
        "type": "uint256",
        "name": "_targetPlanetId"
      }
    ],
    "outputs": []
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