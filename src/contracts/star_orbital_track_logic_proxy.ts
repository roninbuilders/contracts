import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1390,
  address: '0x550168ec56b3348b91c62d29aae7eba8c88ffee4' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Star Orbital Track Logic Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xa92b2fbb6df4fd59d1617841b07e8c7a3bdb541b',
  created_at: 1702561722,
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
        "name": "_starOrbitalTrackDataAddress",
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
    "name": "checkCanRenewRentingOrbitalTrack",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_renterAddress"
      },
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_planetId"
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
    "name": "checkIsBlacklistedForAttachingPlanet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_blacklistContract"
      },
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "address",
        "name": "_starContract"
      },
      {
        "type": "address",
        "name": "_planetOwner"
      },
      {
        "type": "uint256",
        "name": "_planetId"
      },
      {
        "type": "address",
        "name": "_planetContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkReachMaxCount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_renterAddress"
      },
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_inviteGroupId"
      },
      {
        "type": "uint256",
        "name": "_planetId"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkRentingOrbitalTrack",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_planetOwnerAddress"
      },
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_planetId"
      },
      {
        "type": "address",
        "name": "_starContractAddress"
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
    "name": "checkSlotCanBeRent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_renterAddress"
      },
      {
        "type": "address",
        "name": "_starContractAddress"
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
      },
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_planetId"
      },
      {
        "type": "bool",
        "name": "_isInvited"
      }
    ],
    "outputs": []
  },
  {
    "name": "getPlanetAttachedIndex",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPlanetOwnerDetachPlanetBalance",
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
        "name": "_slotIndex"
      },
      {
        "type": "uint256",
        "name": "_earlyDetachFeePercent"
      },
      {
        "type": "uint256",
        "name": "_percentMaxValue"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256",
        "name": "planetOwnerReceive"
      }
    ]
  },
  {
    "name": "getRentalSlotIndexWithInviteGroupID",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getStarOwnerAttachSlotIndex",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getStarOwnerDetachPlanetBalance",
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
        "name": "_slotIndex"
      },
      {
        "type": "uint256",
        "name": "_earlyDetachFeePercent"
      },
      {
        "type": "uint256",
        "name": "_percentMaxValue"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256",
        "name": "planetOwnerReceive"
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
    "name": "isInvitedStarOrbitalTrack",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_invitee"
      },
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
        "type": "bool"
      },
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "starOrbitalTrackDataContract",
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
        "name": "_starOrbitalTrackDataAddress"
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