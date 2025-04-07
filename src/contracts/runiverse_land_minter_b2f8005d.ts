import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3322,
  address: '0x87371e78b904704a69efac02a1ef511db2f8005d' as const,
  contract_name: 'RuniverseLandMinter',
  display_name: 'Runiverse Land Minter',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1721414247,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_runiverseLand"
      }
    ]
  },
  {
    "name": "Address0Error",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DeniedProcessDuringMinting",
    "type": "error",
    "inputs": []
  },
  {
    "name": "GivedValuesNotValid",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "sended_values"
      },
      {
        "type": "uint256",
        "name": "expected"
      }
    ]
  },
  {
    "name": "IncorrectPurchaseLimit",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MisconfiguredPrices",
    "type": "error",
    "inputs": []
  },
  {
    "name": "WrongDateForProcess",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "correct_date"
      },
      {
        "type": "uint256",
        "name": "current_date"
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
    "name": "claimlistMerkleRoot",
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
    "name": "claimlistMint",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint8",
        "name": "plotSize"
      },
      {
        "type": "uint256",
        "name": "numPlots"
      },
      {
        "type": "uint256",
        "name": "claimedMaxPlots"
      },
      {
        "type": "bytes32[]",
        "name": "_merkleProof"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimlistMintedPerSize",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "claimsStartTime",
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
    "name": "claimsStarted",
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
    "name": "forwardERC20s",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAvailableLands",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getPlotPrices",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getPlotsAvailablePerSize",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getTokenIdPlotType",
    "type": "function",
    "stateMutability": "pure",
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
    "name": "getTotalMintedLands",
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
    "name": "getTotalMintedLandsBySize",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "mint",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint8",
        "name": "plotSize"
      },
      {
        "type": "uint256",
        "name": "numPlots"
      }
    ],
    "outputs": []
  },
  {
    "name": "mintlistMerkleRoot1",
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
    "name": "mintlistMerkleRoot2",
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
    "name": "mintlistMint",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint8",
        "name": "plotSize"
      },
      {
        "type": "uint256",
        "name": "numPlots"
      },
      {
        "type": "uint256",
        "name": "claimedMaxPlots"
      },
      {
        "type": "bytes32[]",
        "name": "_merkleProof"
      }
    ],
    "outputs": []
  },
  {
    "name": "mintlistMintedPerSize",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "mintlistStartTime",
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
    "name": "mintlistStarted",
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
    "name": "mintlisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_who"
      },
      {
        "type": "bytes32",
        "name": "_leaf"
      },
      {
        "type": "bytes32[]",
        "name": "_merkleProof"
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
    "name": "ownerMint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8[]",
        "name": "plotSizes"
      },
      {
        "type": "address[]",
        "name": "recipients"
      }
    ],
    "outputs": []
  },
  {
    "name": "plotGlobalOffset",
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
    "name": "plotPrices",
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
    "name": "plotSizeLocalOffset",
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
    "name": "plotsMinted",
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
    "name": "publicMintStartTime",
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
    "name": "publicStarted",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "runiverseLand",
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
    "name": "setClaimlistMerkleRoot",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "newMerkleRoot"
      }
    ],
    "outputs": []
  },
  {
    "name": "setClaimsStartTime",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newClaimsStartTime"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGlobalIdOffset",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newGlobalIdOffset"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLocalIdOffsets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_newPlotSizeLocalOffset"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMintlistMerkleRoot1",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "newMerkleRoot"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMintlistMerkleRoot2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "newMerkleRoot"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMintlistStartTime",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newAllowlistMintStartTime"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPrices",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_newPrices"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPublicMintStartTime",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newPublicMintStartTime"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRuniverseLand",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newRuniverseLandAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVaultAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newVaultAddress"
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
    "name": "vault",
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
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract