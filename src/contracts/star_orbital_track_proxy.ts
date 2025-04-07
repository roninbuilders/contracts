import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1392,
  address: '0x84925b63b80e194c665863462db2a0c5a0189c20' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Star Orbital Track Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xd60e471612a994c67ffc22da55080c7b76e834b8',
  created_at: 1702561704,
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
        "name": "_starAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_starDataAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_starOrbitalTrackDataAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_starOrbitalTrackLogicAddress"
      },
      {
        "type": "address",
        "name": "_planetAddress"
      },
      {
        "type": "address",
        "name": "_blacklistAddress"
      }
    ]
  },
  {
    "name": "OrbitalSettingUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenReceipt"
      },
      {
        "type": "address",
        "name": "_platformAddress"
      },
      {
        "type": "uint256",
        "name": "_platformFeePercent"
      },
      {
        "type": "address",
        "name": "_treasuryAddress"
      },
      {
        "type": "uint256",
        "name": "_treasuryFeePercent"
      },
      {
        "type": "uint256",
        "name": "_earlyDetachFeePercent"
      },
      {
        "type": "uint256",
        "name": "_percentMaxValue"
      },
      {
        "type": "uint256",
        "name": "_detachCooldown"
      },
      {
        "type": "uint256",
        "name": "_minimumDuration"
      },
      {
        "type": "address",
        "name": "_starReceiptAddress"
      }
    ]
  },
  {
    "name": "OrbitalTracksUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_inviteGroupId"
      },
      {
        "type": "uint256",
        "name": "_slotIndexCount"
      },
      {
        "type": "uint256[]",
        "name": "_slotIndexArray"
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
        "name": "_inviteAddress"
      },
      {
        "type": "uint256",
        "name": "_maxCountForEachAddress"
      },
      {
        "type": "bool",
        "name": "_canBeRenew"
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
    "name": "PlanetAttachedOrbitalTrack",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_planetId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_slotIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_rentalEndTime"
      },
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "uint256",
        "name": "_rentalFee"
      },
      {
        "type": "uint256",
        "name": "_inviteGroupId"
      }
    ]
  },
  {
    "name": "PlanetDetachedOrbitalTrack",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_planetId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_slotIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_originalRentalStartTime"
      },
      {
        "type": "uint256",
        "name": "_planetCooldown"
      },
      {
        "type": "uint256",
        "name": "_obCooldown"
      },
      {
        "type": "address",
        "name": "_starOwnerAddress"
      },
      {
        "type": "address",
        "name": "_planetOwnerAddress"
      },
      {
        "type": "bool",
        "name": "_isStarOwnerDetach"
      }
    ]
  },
  {
    "name": "PlanetRenewOrbitalTrack",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_planetId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_slotIndex",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_originalRentalStartTime"
      },
      {
        "type": "uint256",
        "name": "_rentalEndTime"
      },
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "uint256",
        "name": "_rentalFee"
      },
      {
        "type": "address",
        "name": "_starOwnerAddress"
      },
      {
        "type": "address",
        "name": "_planetOwnerAddress"
      },
      {
        "type": "uint256",
        "name": "_inviteGroupId"
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
    "name": "approvedTokenAddresses",
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
    "name": "detachCooldown",
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
    "name": "earlyDetachFeePercent",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "minimumDuration",
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
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes",
        "name": "data"
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
    "name": "planetOwnerDetachPlanet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_detacherAddress"
      },
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_planetId"
      }
    ],
    "outputs": []
  },
  {
    "name": "platformAddress",
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
    "name": "platformFeePercent",
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
    "name": "renewRentingOrbitalTrack",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_attacherAddress"
      },
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_planetId"
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
        "type": "address",
        "name": "_attacherAddress"
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
        "type": "uint256",
        "name": "_inviteGroupId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_admin"
      },
      {
        "type": "bool",
        "name": "_enabled"
      }
    ],
    "outputs": []
  },
  {
    "name": "setApprovedTokenAddresses",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "bool",
        "name": "_isApproved"
      }
    ],
    "outputs": []
  },
  {
    "name": "starDataContract",
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
    "name": "starOwnerAttachOwnPlanet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_attacherAddress"
      },
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_planetId"
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
        "type": "address",
        "name": "_detacherAddress"
      },
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint256",
        "name": "_planetId"
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
        "name": "_starAddress"
      },
      {
        "type": "address",
        "name": "_starDataAddress"
      },
      {
        "type": "address",
        "name": "_starOrbitalTrackDataAddress"
      },
      {
        "type": "address",
        "name": "_starOrbitalTrackLogicAddress"
      },
      {
        "type": "address",
        "name": "_planetAddress"
      },
      {
        "type": "address",
        "name": "_blacklistAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateOrbitalSetting",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenReceipt"
      },
      {
        "type": "address",
        "name": "_platformAddress"
      },
      {
        "type": "uint256",
        "name": "_platformFeePercent"
      },
      {
        "type": "address",
        "name": "_treasuryAddress"
      },
      {
        "type": "uint256",
        "name": "_treasuryFeePercent"
      },
      {
        "type": "uint256",
        "name": "_earlyDetachFeePercent"
      },
      {
        "type": "uint256",
        "name": "_percentMaxValue"
      },
      {
        "type": "uint256",
        "name": "_detachCooldown"
      },
      {
        "type": "uint256",
        "name": "_minimumDuration"
      },
      {
        "type": "address",
        "name": "_starReceiptAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateRentalSetting",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
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