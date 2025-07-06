import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35507,
  address: '0x38a4f20e42a9d7f1fec5bc2083e6c030fd093210' as const,
  contract_name: 'OTCTradeUpgrade',
  display_name: 'OTC Trade Upgrade',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1749795160,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "ERC1967InvalidImplementation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      }
    ]
  },
  {
    "name": "ERC1967NonPayable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EnforcedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpectedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnableInvalidOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "OwnableUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "UUPSUnauthorizedCallContext",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UUPSUnsupportedProxiableUUID",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "slot"
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "version"
      }
    ]
  },
  {
    "name": "NFTTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "tradeId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "nft",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "to"
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
    "name": "TradeConfirmed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "tradeId"
      }
    ]
  },
  {
    "name": "TradeCreated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "tradeId"
      },
      {
        "type": "address",
        "name": "seller",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      }
    ]
  },
  {
    "name": "TradeDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "tradeId"
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
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
    "name": "MAX_FEE",
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
    "name": "UPGRADE_INTERFACE_VERSION",
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
    "name": "confirmTrade",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "tradeId"
      }
    ],
    "outputs": []
  },
  {
    "name": "createTrade",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "tradeId"
      },
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "feePercent"
      },
      {
        "type": "uint256",
        "name": "expiry"
      },
      {
        "type": "address",
        "name": "nftAddress"
      },
      {
        "type": "uint256",
        "name": "nftTokenId"
      },
      {
        "type": "address",
        "name": "referrer"
      }
    ],
    "outputs": []
  },
  {
    "name": "depositFunds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "tradeId"
      }
    ],
    "outputs": []
  },
  {
    "name": "feeCollector",
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
        "type": "address",
        "name": "owner_"
      },
      {
        "type": "address",
        "name": "feeCollector_"
      }
    ],
    "outputs": []
  },
  {
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
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
    "name": "setFeeCollector",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newCollector"
      }
    ],
    "outputs": []
  },
  {
    "name": "trades",
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
        "name": "seller"
      },
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "feePercent"
      },
      {
        "type": "uint256",
        "name": "expiry"
      },
      {
        "type": "address",
        "name": "nftAddress"
      },
      {
        "type": "uint256",
        "name": "nftTokenId"
      },
      {
        "type": "address",
        "name": "referrer"
      },
      {
        "type": "bool",
        "name": "depositMade"
      },
      {
        "type": "bool",
        "name": "completed"
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