import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 6806,
  address: '0x10bd092e77134ab72ea5413811265158ddf7985e' as const,
  contract_name: 'SupraGeneratorContractL1',
  display_name: 'Supra Generator Contract L1',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1736774342,
  abi: [
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
    "name": "FreeNodeRemovedFromWhitelist",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "freeNodeWallet"
      }
    ]
  },
  {
    "name": "FreeNodeWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "freeNodeWalletAddress"
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "version"
      }
    ]
  },
  {
    "name": "MultipleFreeNodesWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "freeNodeWallets"
      }
    ]
  },
  {
    "name": "NonceProcessed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce",
        "indexed": true
      },
      {
        "type": "address",
        "name": "clientWalletAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "bool",
        "name": "status"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ]
  },
  {
    "name": "OwnershipTransferStarted",
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
    "name": "PublicKeyUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_timestamp"
      }
    ]
  },
  {
    "name": "RequestGenerated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "instanceId"
      },
      {
        "type": "address",
        "name": "callerContract",
        "indexed": true
      },
      {
        "type": "string",
        "name": "functionName"
      },
      {
        "type": "uint8",
        "name": "rngCount"
      },
      {
        "type": "uint256",
        "name": "numConfirmations"
      },
      {
        "type": "uint256",
        "name": "clientSeed"
      },
      {
        "type": "address",
        "name": "clientWalletAddress",
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "addFreeNodeToWhitelistBulk",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_freeNodeWallets"
      }
    ],
    "outputs": []
  },
  {
    "name": "addFreeNodeToWhitelistSingle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_freeNodeWallet"
      }
    ],
    "outputs": []
  },
  {
    "name": "depositContract",
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
    "name": "domain",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "gasAfterPaymentCalculation",
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
    "name": "generateRngCallback",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_nonce"
      },
      {
        "type": "bytes32",
        "name": "_bhash"
      },
      {
        "type": "bytes",
        "name": "_message"
      },
      {
        "type": "uint256[2]",
        "name": "_signature"
      },
      {
        "type": "uint8",
        "name": "_rngCount"
      },
      {
        "type": "uint256",
        "name": "_clientSeed"
      },
      {
        "type": "address",
        "name": "_callerContract"
      },
      {
        "type": "string",
        "name": "_func"
      },
      {
        "type": "address",
        "name": "_clientWalletAddress"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      },
      {
        "type": "bool"
      },
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_domain"
      },
      {
        "type": "address",
        "name": "_supraRouterContract"
      },
      {
        "type": "uint256[4]",
        "name": "_publicKey"
      },
      {
        "type": "uint256",
        "name": "_instanceId"
      },
      {
        "type": "uint256",
        "name": "_blsPreCompileGasCost"
      },
      {
        "type": "uint256",
        "name": "_gasAfterPaymentCalculation"
      }
    ],
    "outputs": []
  },
  {
    "name": "instanceId",
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
    "name": "isFreeNodeWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_freeNodeWallet"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "listAllWhitelistedFreeNodes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
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
    "name": "pendingOwner",
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
    "name": "proxiableUUID",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "publicKey",
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
    "name": "removeFreeNodeFromWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_freeNodeWallet"
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
    "name": "rngRequest",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_nonce"
      },
      {
        "type": "string",
        "name": "_functionName"
      },
      {
        "type": "uint8",
        "name": "_rngCount"
      },
      {
        "type": "address",
        "name": "_callerContract"
      },
      {
        "type": "uint256",
        "name": "_numConfirmations"
      },
      {
        "type": "uint256",
        "name": "_clientSeed"
      },
      {
        "type": "address",
        "name": "_clientWalletAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGasAfterPaymentCalculation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newGas"
      }
    ],
    "outputs": []
  },
  {
    "name": "supraRouterContract",
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
    "name": "updateDepositContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newDepositSC"
      }
    ],
    "outputs": []
  },
  {
    "name": "updatePublicKey",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[4]",
        "name": "_publicKey"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
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