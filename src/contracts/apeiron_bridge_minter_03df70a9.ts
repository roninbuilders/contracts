import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1398,
  address: '0x0669272102b98a62dc94f4201922952c03df70a9' as const,
  contract_name: 'ApeironBridgeMinter',
  display_name: 'Apeiron Bridge Minter',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1702573713,
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
    "name": "MintAsset",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_owner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_fromNetworkChainId"
      },
      {
        "type": "uint256[]",
        "name": "_requestIDs"
      },
      {
        "type": "uint8",
        "name": "_nftType"
      },
      {
        "type": "uint256[]",
        "name": "_tokenIDs"
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
    "name": "Paused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
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
    "name": "blacklistContract",
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
    "name": "godiverseCollectionContract",
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
    "name": "mintApostle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_targetWallet"
      },
      {
        "type": "uint256",
        "name": "_fromNetworkChainId"
      },
      {
        "type": "uint256[]",
        "name": "_requestIDs"
      },
      {
        "type": "uint256[]",
        "name": "_tokenIDs"
      },
      {
        "type": "uint256[]",
        "name": "_genes"
      },
      {
        "type": "uint256[]",
        "name": "_IVs"
      },
      {
        "type": "uint256[]",
        "name": "_createTimes"
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
    "name": "mintGodiverse",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_targetWallet"
      },
      {
        "type": "uint256",
        "name": "_fromNetworkChainId"
      },
      {
        "type": "uint256[]",
        "name": "_requestIDs"
      },
      {
        "type": "uint256[]",
        "name": "_tokenIDs"
      },
      {
        "type": "uint256[]",
        "name": "_amounts"
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
    "name": "mintPlanet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_targetWallet"
      },
      {
        "type": "uint256",
        "name": "_fromNetworkChainId"
      },
      {
        "type": "uint256[]",
        "name": "_requestIDs"
      },
      {
        "type": "tuple",
        "name": "_mintPlanetStructs",
        "components": [
          {
            "type": "uint256[]",
            "name": "tokenIDs"
          },
          {
            "type": "uint256[]",
            "name": "genes"
          },
          {
            "type": "uint256[]",
            "name": "breedCounts"
          },
          {
            "type": "uint256[]",
            "name": "breedCountMaxs"
          },
          {
            "type": "uint256[]",
            "name": "createTimes"
          },
          {
            "type": "uint256[]",
            "name": "bornTimes"
          },
          {
            "type": "uint256[]",
            "name": "lastBreedTimes"
          },
          {
            "type": "uint256[]",
            "name": "parents"
          },
          {
            "type": "uint256[]",
            "name": "children"
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
    "name": "mintStar",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_targetWallet"
      },
      {
        "type": "uint256",
        "name": "_fromNetworkChainId"
      },
      {
        "type": "uint256[]",
        "name": "_requestIDs"
      },
      {
        "type": "uint256[]",
        "name": "_tokenIDs"
      },
      {
        "type": "uint256[]",
        "name": "_genes"
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
    "name": "mintedTokenMapping",
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
    "name": "pause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "paused",
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
    "name": "planetContract",
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
    "name": "primevalPlanetId",
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
    "name": "starContract",
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "updateContractSetting",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_planetContractAddress"
      },
      {
        "type": "address",
        "name": "_starContractAddress"
      },
      {
        "type": "address",
        "name": "_starDataContractAddress"
      },
      {
        "type": "address",
        "name": "_apostleContractAddress"
      },
      {
        "type": "address",
        "name": "_godiverseCollectionContractAddress"
      },
      {
        "type": "address",
        "name": "_systemAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "updatePrimevalPlanetId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_primevalPlanetId"
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