import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1393,
  address: '0x8ec9f6eceb91ef9913220db6385f79896e836890' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Star Orbital Track Caller Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x1f06a79a926f5416dbf2b2a14fb42dc073a63a25',
  created_at: 1702561758,
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
    "name": "ContractSettingUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_starOrbitalTrackAddress",
        "indexed": true
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
    "name": "PlanetOwnerDetachPlanetSummary",
    "type": "event",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_starArray"
      },
      {
        "type": "uint256[]",
        "name": "_successPlanetArray"
      },
      {
        "type": "uint256[]",
        "name": "_failPlanetArray"
      },
      {
        "type": "string[]",
        "name": "_failReasonArray"
      }
    ]
  },
  {
    "name": "RenewRentingOrbitalTrackSummary",
    "type": "event",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_starArray"
      },
      {
        "type": "uint256[]",
        "name": "_successPlanetArray"
      },
      {
        "type": "uint256[]",
        "name": "_failPlanetArray"
      },
      {
        "type": "string[]",
        "name": "_failReasonArray"
      }
    ]
  },
  {
    "name": "RentingOrbitalTrackSummary",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256[]",
        "name": "_successPlanetArray"
      },
      {
        "type": "uint256[]",
        "name": "_failPlanetArray"
      },
      {
        "type": "string[]",
        "name": "_failReasonArray"
      }
    ]
  },
  {
    "name": "StarOwnerAttachOwnPlanetSummary",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256[]",
        "name": "_successPlanetArray"
      },
      {
        "type": "uint256[]",
        "name": "_failPlanetArray"
      },
      {
        "type": "string[]",
        "name": "_failReasonArray"
      }
    ]
  },
  {
    "name": "StarOwnerDetachPlanetSummary",
    "type": "event",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_starArray"
      },
      {
        "type": "uint256[]",
        "name": "_successPlanetArray"
      },
      {
        "type": "uint256[]",
        "name": "_failPlanetArray"
      },
      {
        "type": "string[]",
        "name": "_failReasonArray"
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
    "name": "planetOwnerDetachPlanet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_starIdArray"
      },
      {
        "type": "uint256[]",
        "name": "_planetIdArray"
      }
    ],
    "outputs": []
  },
  {
    "name": "renewRentingOrbitalTrack",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_starIdArray"
      },
      {
        "type": "uint256[]",
        "name": "_planetIdArray"
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
    "name": "rentingOrbitalTrack",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256[]",
        "name": "_planetIdArray"
      },
      {
        "type": "uint256[]",
        "name": "_inviteGroupIdArray"
      }
    ],
    "outputs": []
  },
  {
    "name": "starOwnerAttachOwnPlanet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256[]",
        "name": "_planetIdArray"
      }
    ],
    "outputs": []
  },
  {
    "name": "starOwnerDetachPlanet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_starIdArray"
      },
      {
        "type": "uint256[]",
        "name": "_planetIdArray"
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
        "name": "_starOrbitalTrackAddress"
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