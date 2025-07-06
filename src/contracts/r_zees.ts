import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35001,
  address: '0x037ef4f9730ffefbfe3d484fe0fd2b006d719f24' as const,
  contract_name: 'RZees',
  display_name: 'R Zees',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1747916618,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "InvalidACLAddress",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "acl"
      }
    ]
  },
  {
    "name": "ACLSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "acl",
        "indexed": true
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
    "name": "Approval",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "approved",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "ApprovalForAll",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "approved"
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
    "name": "ClassDataSet",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "visual"
      },
      {
        "type": "string",
        "name": "className"
      }
    ]
  },
  {
    "name": "EvolutionDataSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenCount"
      },
      {
        "type": "uint256",
        "name": "requiredLevel"
      },
      {
        "type": "bool",
        "name": "sameTypeRequired"
      },
      {
        "type": "bool",
        "name": "enabled"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "bool",
        "name": "sameClassRequired"
      }
    ]
  },
  {
    "name": "FoxEvolved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256",
        "name": "crystalId"
      },
      {
        "type": "uint256",
        "name": "price"
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
    "name": "Transfer",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
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
    "name": "UriSet",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "newUri"
      }
    ]
  },
  {
    "name": "VaultSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "vault"
      }
    ]
  },
  {
    "name": "VeeTokenSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "ZeeEvolved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256[]",
        "name": "passedTokenIds"
      },
      {
        "type": "uint256",
        "name": "price"
      }
    ]
  },
  {
    "name": "ZeeLevelAndTypeSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "level"
      },
      {
        "type": "address",
        "name": "caller"
      },
      {
        "type": "string",
        "name": "zeeType"
      }
    ]
  },
  {
    "name": "ZeeLevelSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "level"
      },
      {
        "type": "address",
        "name": "caller"
      }
    ]
  },
  {
    "name": "ZeeLocked",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bool",
        "name": "locked"
      },
      {
        "type": "address",
        "name": "locker"
      }
    ]
  },
  {
    "name": "ZeeMinted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "string",
        "name": "linkId"
      },
      {
        "type": "string",
        "name": "zeeType"
      }
    ]
  },
  {
    "name": "NULL_ADDRESS",
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
    "name": "ZEE_MAINTAINER_ROLE",
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
    "name": "ZEE_MINTER_ROLE",
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
    "name": "approve",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "evolve",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256",
        "name": "mainTokenIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "getACL",
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
    "name": "getApproved",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getBurnedTokenCount",
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
    "name": "getEvolutionRequirement",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "tokenCount"
          },
          {
            "type": "uint256",
            "name": "requiredLevel"
          },
          {
            "type": "bool",
            "name": "sameTypeRequired"
          },
          {
            "type": "bool",
            "name": "enabled"
          }
        ]
      }
    ]
  },
  {
    "name": "getLevel",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getLocked",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "getType",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getVault",
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
    "name": "getVeeToken",
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
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "symbol"
      },
      {
        "type": "string",
        "name": "baseUri"
      },
      {
        "type": "address",
        "name": "acl"
      }
    ],
    "outputs": []
  },
  {
    "name": "isApprovedForAll",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "operator"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "mint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "count"
      }
    ],
    "outputs": []
  },
  {
    "name": "mintLaunchpad",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "mintSafeWithTypeAndLevel",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "string",
        "name": "zeeId"
      },
      {
        "type": "string",
        "name": "zeeType"
      },
      {
        "type": "uint256",
        "name": "level"
      }
    ],
    "outputs": []
  },
  {
    "name": "name",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
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
    "name": "ownerOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "safeTransferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "safeTransferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
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
    "outputs": []
  },
  {
    "name": "setACL",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "acl"
      }
    ],
    "outputs": []
  },
  {
    "name": "setApprovalForAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "bool",
        "name": "approved"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBaseURI",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "baseUri"
      }
    ],
    "outputs": []
  },
  {
    "name": "setClassData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string[]",
        "name": "visuals"
      },
      {
        "type": "string[]",
        "name": "classNames"
      }
    ],
    "outputs": []
  },
  {
    "name": "setEvolutionRequirement",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenCount"
      },
      {
        "type": "uint256",
        "name": "requiredLevel"
      },
      {
        "type": "bool",
        "name": "sameTypeRequired"
      },
      {
        "type": "bool",
        "name": "enabled"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "bool",
        "name": "sameClassRequired"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLevelsAndType",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "levels"
      },
      {
        "type": "string[]",
        "name": "tokenTypes"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLocked",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bool",
        "name": "locked"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLockedMultiple",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "bool",
        "name": "locked"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVault",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "vault"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVeeToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": []
  },
  {
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "symbol",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "tokenByIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "tokenOfOwnerByIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "tokenURI",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "totalSupply",
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
    "name": "transferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "tokenId"
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