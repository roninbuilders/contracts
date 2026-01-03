import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1397,
  address: '0xf42a9fae76d6ba57dc874024aff7ec67bfb1d79d' as const,
  contract_name: 'ApeironStarOrbitalTrackData',
  display_name: 'Apeiron Star Orbital Track Data',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1702561731,
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
    "name": "PlanetOrbitalTrackCooldownMapUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_planetId"
      },
      {
        "type": "uint256",
        "name": "_cooldown"
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
    "name": "addStarOrbitalTrackData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_otSlotCount"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkNAddOrUpdateStarOrbitalTracksRentedData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_slotIndex"
      },
      {
        "type": "tuple",
        "name": "_orbitalTrackData",
        "components": [
          {
            "type": "uint8",
            "name": "rentingState"
          },
          {
            "type": "uint256",
            "name": "availableTrackTime"
          },
          {
            "type": "uint256",
            "name": "inviteGroupId"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "rentalFee"
          },
          {
            "type": "uint256",
            "name": "rentalDuration"
          },
          {
            "type": "bool",
            "name": "canBeRenew"
          },
          {
            "type": "uint256",
            "name": "listingTime"
          },
          {
            "type": "address",
            "name": "planetOwnerAddress"
          },
          {
            "type": "uint256",
            "name": "originalRentalStartTime"
          },
          {
            "type": "uint256",
            "name": "rentalStartTime"
          },
          {
            "type": "uint256",
            "name": "attachedPlanetId"
          },
          {
            "type": "uint256",
            "name": "rentalEndTime"
          },
          {
            "type": "uint256",
            "name": "rentalFeeAfterPlatform"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "checkNInitStarOrbitalTrackData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_tier"
      },
      {
        "type": "uint256",
        "name": "_ultranova"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkOwnerAttachPlanet",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_planetId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "checkPlanetAttachedIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_planetId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "checkRentalAttachPlanet",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_planetId"
      },
      {
        "type": "uint256",
        "name": "_inviteGroupId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "dataUpdateRentalSetting",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "bool",
        "name": "_isNewInviteGroup"
      },
      {
        "type": "uint256",
        "name": "_inviteGroupId"
      },
      {
        "type": "uint256",
        "name": "_numberOfTracks"
      },
      {
        "type": "uint256",
        "name": "_duration"
      },
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "uint256",
        "name": "_cost"
      },
      {
        "type": "address[]",
        "name": "_inviteAddressList"
      },
      {
        "type": "uint256",
        "name": "_maxCountForEachAddress"
      },
      {
        "type": "bool",
        "name": "_canBeRenew"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "count"
      },
      {
        "type": "uint256[]",
        "name": "resultArray"
      }
    ]
  },
  {
    "name": "getStarOrbitalTrackData",
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
        "type": "tuple[]",
        "components": [
          {
            "type": "uint8",
            "name": "rentingState"
          },
          {
            "type": "uint256",
            "name": "availableTrackTime"
          },
          {
            "type": "uint256",
            "name": "inviteGroupId"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "rentalFee"
          },
          {
            "type": "uint256",
            "name": "rentalDuration"
          },
          {
            "type": "bool",
            "name": "canBeRenew"
          },
          {
            "type": "uint256",
            "name": "listingTime"
          },
          {
            "type": "address",
            "name": "planetOwnerAddress"
          },
          {
            "type": "uint256",
            "name": "originalRentalStartTime"
          },
          {
            "type": "uint256",
            "name": "rentalStartTime"
          },
          {
            "type": "uint256",
            "name": "attachedPlanetId"
          },
          {
            "type": "uint256",
            "name": "rentalEndTime"
          },
          {
            "type": "uint256",
            "name": "rentalFeeAfterPlatform"
          }
        ]
      }
    ]
  },
  {
    "name": "getStarOrbitalTrackDataWithIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_slotIndex"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint8",
            "name": "rentingState"
          },
          {
            "type": "uint256",
            "name": "availableTrackTime"
          },
          {
            "type": "uint256",
            "name": "inviteGroupId"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "rentalFee"
          },
          {
            "type": "uint256",
            "name": "rentalDuration"
          },
          {
            "type": "bool",
            "name": "canBeRenew"
          },
          {
            "type": "uint256",
            "name": "listingTime"
          },
          {
            "type": "address",
            "name": "planetOwnerAddress"
          },
          {
            "type": "uint256",
            "name": "originalRentalStartTime"
          },
          {
            "type": "uint256",
            "name": "rentalStartTime"
          },
          {
            "type": "uint256",
            "name": "attachedPlanetId"
          },
          {
            "type": "uint256",
            "name": "rentalEndTime"
          },
          {
            "type": "uint256",
            "name": "rentalFeeAfterPlatform"
          }
        ]
      }
    ]
  },
  {
    "name": "getStarOrbitalTrackInviteListData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_inviteGroupId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "emptyData",
        "components": [
          {
            "type": "uint256",
            "name": "inviteGroupId"
          },
          {
            "type": "address[]",
            "name": "inviteAddressList"
          },
          {
            "type": "uint256",
            "name": "maxCountForEachAddress"
          }
        ]
      }
    ]
  },
  {
    "name": "getStarOrbitalTrackInviteListDataArray",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256[]",
        "name": "_inviteGroupIds"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "resultArray",
        "components": [
          {
            "type": "uint256",
            "name": "inviteGroupId"
          },
          {
            "type": "address[]",
            "name": "inviteAddressList"
          },
          {
            "type": "uint256",
            "name": "maxCountForEachAddress"
          }
        ]
      }
    ]
  },
  {
    "name": "getStarOrbitalTrackRentedData",
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
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "slotIndex"
          },
          {
            "type": "uint256",
            "name": "planetId"
          },
          {
            "type": "uint256",
            "name": "rentalFeeAfterPlatform"
          },
          {
            "type": "uint256",
            "name": "oldRentalEndTime"
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
    "name": "planetOrbitalTrackCooldownMap",
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
    "name": "removeStarOrbitalTrackSlot",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
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
    "name": "setPlanetOrbitalTrackCooldownMap",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_planetId"
      },
      {
        "type": "uint256",
        "name": "_cooldown"
      }
    ],
    "outputs": []
  },
  {
    "name": "setupTierBaseTrackNumberArray",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_starTierBaseTrackNumberArray"
      }
    ],
    "outputs": []
  },
  {
    "name": "starTierBaseTrackNumberArray",
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
  },
  {
    "name": "updateDetachOrbitalTrackData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_slotIndex"
      },
      {
        "type": "uint256",
        "name": "_availableTrackTime"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateStarOrbitalTrackData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_slotIndex"
      },
      {
        "type": "tuple",
        "name": "_starOrbitalTrackData",
        "components": [
          {
            "type": "uint8",
            "name": "rentingState"
          },
          {
            "type": "uint256",
            "name": "availableTrackTime"
          },
          {
            "type": "uint256",
            "name": "inviteGroupId"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "rentalFee"
          },
          {
            "type": "uint256",
            "name": "rentalDuration"
          },
          {
            "type": "bool",
            "name": "canBeRenew"
          },
          {
            "type": "uint256",
            "name": "listingTime"
          },
          {
            "type": "address",
            "name": "planetOwnerAddress"
          },
          {
            "type": "uint256",
            "name": "originalRentalStartTime"
          },
          {
            "type": "uint256",
            "name": "rentalStartTime"
          },
          {
            "type": "uint256",
            "name": "attachedPlanetId"
          },
          {
            "type": "uint256",
            "name": "rentalEndTime"
          },
          {
            "type": "uint256",
            "name": "rentalFeeAfterPlatform"
          }
        ]
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