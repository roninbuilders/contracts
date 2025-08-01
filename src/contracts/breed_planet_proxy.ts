import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2022,
  address: '0x219cbb30f56dbee3341c0d3e617e4a98cf86c094' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Breed Planet Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xa84a4f42c9a06b9f03646993e54e52d3b380a00f',
  created_at: 1711267508,
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
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
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
    "name": "BreedSuccess",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "BreedSuccessWithRequestId",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_requestId"
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
    "name": "RequestBreed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_requestHash",
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
    "name": "BreedStructMap",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "userAddress"
      },
      {
        "type": "uint256",
        "name": "planetAId"
      },
      {
        "type": "uint256",
        "name": "planetBId"
      },
      {
        "type": "bool",
        "name": "shouldUseMiniBlackhole"
      },
      {
        "type": "bool",
        "name": "isDone"
      },
      {
        "type": "uint256",
        "name": "planetId"
      }
    ]
  },
  {
    "name": "additionBornBaseInterval",
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
    "name": "addonGasPrice",
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
    "name": "adminFulfillRandomSeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_reqHash"
      },
      {
        "type": "uint256",
        "name": "_randomSeed"
      }
    ],
    "outputs": []
  },
  {
    "name": "animaPrices",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "animaToMiniBlackhole",
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
    "name": "animaToken",
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
    "name": "apeironGodiverseCollection",
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
    "name": "apeironGodiverseCollectionNumbers",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "aprsPrices",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "aprsToken",
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
    "name": "bornBaseInterval",
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
    "name": "breedPlanetDataContract",
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
    "name": "callbackGaslimit",
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
    "name": "currentPlanetId",
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
    "name": "getParentID",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "planetId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      },
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
    "name": "isPrimevalActive",
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
    "name": "minAnimaUse",
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
    "name": "minMiniBlackholeUse",
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
    "name": "miniBlackholeTokenId",
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
    "name": "normalBreedBaseInterval",
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
    "name": "planetAttributeManagerContract",
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
    "name": "primevalAnimaPrices",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "primevalApeironGodiverseCollectionNumbers",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "primevalAprsPrices",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "rawFulfillRandomSeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_reqHash"
      },
      {
        "type": "uint256",
        "name": "_randomSeed"
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
    "name": "requestBreed",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "planetAId"
      },
      {
        "type": "uint256",
        "name": "planetBId"
      },
      {
        "type": "bool",
        "name": "shouldUseMiniBlackhole"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "requestBreedWithAnimus",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "planetAId"
      },
      {
        "type": "uint256",
        "name": "planetBId"
      },
      {
        "type": "uint256",
        "name": "animaDiscount"
      },
      {
        "type": "bool",
        "name": "shouldUseMiniBlackhole"
      },
      {
        "type": "uint256",
        "name": "time"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "requestHashMap",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "requestIdMap",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
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
    "name": "setApeironGodiverseCollectionNumber",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[][]",
        "name": "_apeironGodiverseCollectionNumbers"
      },
      {
        "type": "bool",
        "name": "_isPrimeval"
      }
    ],
    "outputs": []
  },
  {
    "name": "setAprsAndAnimaPrices",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[][]",
        "name": "_aprsPrices"
      },
      {
        "type": "uint256[][]",
        "name": "_animaPrices"
      },
      {
        "type": "bool",
        "name": "_isPrimeval"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBreedBornInterval",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_normalBreedBaseInterval"
      },
      {
        "type": "uint256",
        "name": "_bornBaseInterval"
      },
      {
        "type": "uint256",
        "name": "_additionBornBaseInterval"
      }
    ],
    "outputs": []
  },
  {
    "name": "setCurrentPlanetId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_currentPlanetId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setupVRFCoordinator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_vrfCoordinator"
      },
      {
        "type": "uint256",
        "name": "_callbackGaslimit"
      },
      {
        "type": "uint256",
        "name": "_addonGasPrice"
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
    "name": "updateBreedingTokenSetting",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_isPrimevalActive"
      },
      {
        "type": "uint256",
        "name": "_miniBlackholeTokenId"
      },
      {
        "type": "uint256",
        "name": "_animaToMiniBlackhole"
      },
      {
        "type": "uint256",
        "name": "_ronToUseInRandomness"
      },
      {
        "type": "uint256",
        "name": "_minMiniBlackholeUse"
      },
      {
        "type": "uint256",
        "name": "_minAnimaUse"
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
        "name": "_nftAddress"
      },
      {
        "type": "address",
        "name": "_breedAddress"
      },
      {
        "type": "address",
        "name": "_blacklistAddress"
      },
      {
        "type": "address",
        "name": "_apeironGodiverseCollectionAddress"
      },
      {
        "type": "address",
        "name": "_aprsTokenAddress"
      },
      {
        "type": "address",
        "name": "_animaTokenAddress"
      },
      {
        "type": "address",
        "name": "_planetAttributeManagerContract"
      },
      {
        "type": "address",
        "name": "_systemAddress"
      },
      {
        "type": "uint256",
        "name": "_ronToUseInRandomness"
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
    "name": "vrfCoordinator",
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
    "name": "withdrawFunds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "wallet"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract