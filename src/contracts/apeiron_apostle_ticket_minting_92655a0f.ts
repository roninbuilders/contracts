import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1325,
  address: '0xdacd2941d4c567ef91fc7684b56bad3192655a0f' as const,
  contract_name: 'ApeironApostleTicketMinting',
  display_name: 'Apeiron Apostle Ticket Minting',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1701710754,
  abi: [
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
    "name": "RequestTicketMinting",
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
    "name": "TicketMintSummary",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_userAddress",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "_requestHash",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "_successApostleIdArray"
      },
      {
        "type": "uint256[]",
        "name": "_failTicketIdArray"
      }
    ]
  },
  {
    "name": "TicketMintingSuccess",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_userAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_gene"
      },
      {
        "type": "uint256",
        "name": "_iv"
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
    "name": "TicketMintingRequestStructMap",
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
        "type": "bool",
        "name": "isDone"
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
    "name": "adminProcessTicketMint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_reqHash"
      }
    ],
    "outputs": []
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
    "name": "getSkillIds",
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
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getTicketMintingStructsByRequestId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_reqHash"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint8",
            "name": "mintType"
          },
          {
            "type": "address",
            "name": "ticketContractAddress"
          },
          {
            "type": "uint256",
            "name": "ticketId"
          },
          {
            "type": "uint256",
            "name": "gene"
          },
          {
            "type": "uint256",
            "name": "apostleId"
          }
        ]
      }
    ]
  },
  {
    "name": "getUserUnfinishedRequestedHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_userAddress"
      }
    ],
    "outputs": [
      {
        "type": "bytes32[]"
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
    "name": "requestTicketMinting",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_ticketContractAddressArray"
      },
      {
        "type": "uint256[]",
        "name": "_ticketIdArray"
      },
      {
        "type": "uint256[]",
        "name": "_ticketCountArray"
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
    "name": "ticketContractIdToApostleClassMapping",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "ticketContractIdToMintTypeMapping",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "ticketMintTypeGeneMapping",
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
        "name": "minIV"
      },
      {
        "type": "uint256",
        "name": "maxIV"
      },
      {
        "type": "uint256",
        "name": "minSkillLevel"
      },
      {
        "type": "uint256",
        "name": "maxSkillLevel"
      },
      {
        "type": "uint256",
        "name": "totalSkillLevel"
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
        "name": "_nftAddress"
      },
      {
        "type": "uint256",
        "name": "_ronToUseInRandomness"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateTicketContractIdToApostleClassMapping",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8[]",
        "name": "_classArray"
      },
      {
        "type": "address[]",
        "name": "_ticketContractAddressArray"
      },
      {
        "type": "uint256[]",
        "name": "_ticketIdArray"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateTicketContractIdToMintTypeMapping",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8[]",
        "name": "_mintTypeArray"
      },
      {
        "type": "address[]",
        "name": "_ticketContractAddressArray"
      },
      {
        "type": "uint256[]",
        "name": "_ticketIdArray"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateTicketMintTypeInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_mintType"
      },
      {
        "type": "tuple",
        "name": "_ticketMintTypeGeneStruct",
        "components": [
          {
            "type": "uint256[]",
            "name": "classArray"
          },
          {
            "type": "uint256",
            "name": "minIV"
          },
          {
            "type": "uint256",
            "name": "maxIV"
          },
          {
            "type": "uint256",
            "name": "minSkillLevel"
          },
          {
            "type": "uint256",
            "name": "maxSkillLevel"
          },
          {
            "type": "uint256[]",
            "name": "skillIds"
          },
          {
            "type": "uint256",
            "name": "totalSkillLevel"
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
  },
  {
    "name": "userRequestedHashMap",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract