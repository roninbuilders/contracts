import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1385,
  address: '0x1e1258d072c88c4c65123ae3917024fbedc2aea2' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Star Godiverse Attachment Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x44ba9561b502ebdceb786bd4323e0be815cadf21',
  created_at: 1702561686,
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
    "name": "AttachGodiverseCooldownUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_attachCooldown"
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
    "name": "ContractSettingupdated",
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
        "name": "_godiverseAddress"
      },
      {
        "type": "address",
        "name": "_blacklistAddress"
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
    "name": "StarAttachedGodiverse",
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
    "name": "StarDetachedGodiverse",
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
    "name": "TokenReceiptContractsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenReceipt",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_starReceiptAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_godiverseReceiptAddress",
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
    "name": "attachAndDetachGodiverses",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_starId"
      },
      {
        "type": "uint8[]",
        "name": "_slotArray"
      },
      {
        "type": "uint256[]",
        "name": "_slotIndexArray"
      },
      {
        "type": "uint256[]",
        "name": "_godiverseIdArray"
      },
      {
        "type": "bool[]",
        "name": "_isAttachArray"
      }
    ],
    "outputs": []
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
    "name": "godiverseContract",
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
    "name": "godiverseReceiptAddress",
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
    "name": "onERC1155BatchReceived",
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
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "values"
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
    "name": "onERC1155Received",
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
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "value"
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
    "name": "setupTokenReceiptContracts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenReceipt"
      },
      {
        "type": "address",
        "name": "_starReceiptAddress"
      },
      {
        "type": "address",
        "name": "_godiverseReceiptAddress"
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
    "name": "starReceiptAddress",
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
    "name": "starTransferReceiptHandle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_oldOwnerAddress"
      },
      {
        "type": "address",
        "name": "_newOwnerAddress"
      },
      {
        "type": "uint256",
        "name": "_starId"
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
        "name": "_godiverseAddress"
      },
      {
        "type": "address",
        "name": "_blacklistAddress"
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