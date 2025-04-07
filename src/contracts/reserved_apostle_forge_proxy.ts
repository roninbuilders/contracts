import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3729,
  address: '0x749ac39daa13764ebcc943d9a3728272c74b104f' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Reserved Apostle Forge Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x508dfcdc8568e4fd6f65234ae4ef2fd33d5e2db0',
  created_at: 1724227935,
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
    "name": "ApostleForgeSuccess",
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
        "type": "uint256",
        "name": "_tokenID"
      },
      {
        "type": "uint256",
        "name": "_apostleID"
      },
      {
        "type": "uint256",
        "name": "_gene"
      },
      {
        "type": "uint256",
        "name": "_iv"
      },
      {
        "type": "bool",
        "name": "_isFreeMint"
      },
      {
        "type": "uint256",
        "name": "_planetForgeStage"
      }
    ]
  },
  {
    "name": "ApostleForgeSummary",
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
            "name": "resetAgeCounts"
          },
          {
            "type": "bool[]",
            "name": "isFreeMints"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "_forgeStageDatas",
        "components": [
          {
            "type": "uint256",
            "name": "lastRecordedForgeStage"
          },
          {
            "type": "uint256",
            "name": "lastRecordedForgeTime"
          }
        ]
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
    "name": "MintPriceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "_mintType"
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
    "name": "addressFreeMintedMapping",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8"
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
    "name": "forgeReservedApostle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_mintType"
      },
      {
        "type": "uint256",
        "name": "_userMaxFreeMintCount"
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
            "name": "resetAgeCounts"
          },
          {
            "type": "bool[]",
            "name": "isFreeMints"
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
    "name": "forgeStageResetTime",
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
    "name": "getMintPriceArray",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "_mintType"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "AprsCost"
          },
          {
            "type": "uint256",
            "name": "AnimaCost"
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
    "name": "isEnabled",
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
    "name": "mintedForgeApostleIdMapping",
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
    "name": "ownerTransferToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_aprsAmount"
      },
      {
        "type": "uint256",
        "name": "_animaAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "planetLastForgeStageDataMapping",
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
        "name": "lastRecordedForgeStage"
      },
      {
        "type": "uint256",
        "name": "lastRecordedForgeTime"
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
    "name": "resetAgeCountCost",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "AprsCost"
      },
      {
        "type": "uint256",
        "name": "AnimaCost"
      }
    ]
  },
  {
    "name": "seedPlanetLastForgeStageDataMapping",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "lastRecordedForgeStage"
      },
      {
        "type": "uint256",
        "name": "lastRecordedForgeTime"
      }
    ]
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
    "name": "setForSaleSchedule",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_mintType"
      },
      {
        "type": "uint256",
        "name": "_time"
      }
    ],
    "outputs": []
  },
  {
    "name": "setupMintPriceByType",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_mintType"
      },
      {
        "type": "tuple[]",
        "name": "_mintPriceArray",
        "components": [
          {
            "type": "uint256",
            "name": "AprsCost"
          },
          {
            "type": "uint256",
            "name": "AnimaCost"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "_resetAgeCountCost",
        "components": [
          {
            "type": "uint256",
            "name": "AprsCost"
          },
          {
            "type": "uint256",
            "name": "AnimaCost"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "tokenReceiptHandler",
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
        "name": "_aprsAddress"
      },
      {
        "type": "address",
        "name": "_animaAddress"
      },
      {
        "type": "uint256",
        "name": "_forgeStageResetTime"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract