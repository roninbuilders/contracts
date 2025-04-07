import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1382,
  address: '0xa939f431f6319516364f329533b371a06a6084d6' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Apeiron Star Data Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x4a79611c7d0fc0f5ef0e023bfed4b292a3cd074e',
  created_at: 1702561668,
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
    "name": "RemoveStarGodiverseMap",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "_slot",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_slotIndex",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetAvailableGodiverseIdMap",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "_slot",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "_godiverseIdArray"
      }
    ]
  },
  {
    "name": "SetGodiverseInfoMap",
    "type": "event",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_godiverseIdArray"
      },
      {
        "type": "tuple[]",
        "name": "_sunInfoArray",
        "components": [
          {
            "type": "uint256",
            "name": "tierRequire"
          },
          {
            "type": "uint256",
            "name": "agingBuff"
          },
          {
            "type": "uint256",
            "name": "additionalOrbitalTrack"
          }
        ]
      }
    ]
  },
  {
    "name": "SetStarGodiverseMap",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "_slot",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_slotIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_godiverseId"
      }
    ]
  },
  {
    "name": "UpdateStarFunctionContract",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_starGodiverseAttachmentAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_starOrbitalTrackAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_blacklistAddress"
      }
    ]
  },
  {
    "name": "UpdateStarGen",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_genId",
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
    "name": "blacklistAddress",
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
    "name": "getAvailableGodiverseIdMap",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "_slot"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getGodiverseInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_godiverseId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "tierRequire"
          },
          {
            "type": "uint256",
            "name": "agingBuff"
          },
          {
            "type": "uint256",
            "name": "additionalOrbitalTrack"
          }
        ]
      }
    ]
  },
  {
    "name": "getStarGenByStarId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getStarGodiverseMapList",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint8",
        "name": "_slot"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getStarGodiverseMapLists",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
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
    "name": "godiverse_info_map",
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
        "name": "tierRequire"
      },
      {
        "type": "uint256",
        "name": "agingBuff"
      },
      {
        "type": "uint256",
        "name": "additionalOrbitalTrack"
      }
    ]
  },
  {
    "name": "initAvailableGodiverseIdMap",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_slot"
      },
      {
        "type": "uint256[]",
        "name": "_slotArray"
      }
    ],
    "outputs": []
  },
  {
    "name": "initGodiverseInfoMap",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_godiverseIdArray"
      },
      {
        "type": "tuple[]",
        "name": "_infoArray",
        "components": [
          {
            "type": "uint256",
            "name": "tierRequire"
          },
          {
            "type": "uint256",
            "name": "agingBuff"
          },
          {
            "type": "uint256",
            "name": "additionalOrbitalTrack"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "initStarGodiverseMap",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint8",
        "name": "_slot"
      },
      {
        "type": "uint256",
        "name": "_slotCount"
      }
    ],
    "outputs": []
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
    "name": "removeStarGodiverseMap",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint8",
        "name": "_slot"
      },
      {
        "type": "uint256",
        "name": "_slotIndex"
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
    "name": "setStarGodiverseMap",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint8",
        "name": "_slot"
      },
      {
        "type": "uint256",
        "name": "_slotIndex"
      },
      {
        "type": "uint256",
        "name": "_godiverseId"
      }
    ],
    "outputs": []
  },
  {
    "name": "starGodiverseAttachmentAddress",
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
    "name": "starOrbitalTrackAddress",
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
    "name": "updateStarFunctionContractAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_starGodiverseAttachmentAddress"
      },
      {
        "type": "address",
        "name": "_starOrbitalTrackAddress"
      },
      {
        "type": "address",
        "name": "_blacklistAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateStarGenMap",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_starGen"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateStarGenMaps",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_starIds"
      },
      {
        "type": "uint256[]",
        "name": "_starGens"
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