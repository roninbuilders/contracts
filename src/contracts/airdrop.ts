import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34775,
  address: '0x90b5f79c6410c811a55a8ab0ec5171bdfe44628b' as const,
  contract_name: 'Airdrop',
  display_name: 'Airdrop',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1746797851,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_initialFeeCollector"
      }
    ]
  },
  {
    "name": "ERC1155BatchAirdropped",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "erc1155Contract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "perTokenAmounts"
      }
    ]
  },
  {
    "name": "ERC1155SingleAirdropped",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "erc1155Contract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "ERC20Airdropped",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "erc20Contract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "ERC721Airdropped",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ]
  },
  {
    "name": "ETHAirdropped",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "FeeCollectorChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldFeeCollector",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newFeeCollector",
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
    "name": "PlatformFeePaid",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "feeAmount"
      }
    ]
  },
  {
    "name": "airdropERC1155Batch",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "erc1155Contract"
      },
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "perTokenAmounts"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "airdropERC1155Single",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "erc1155Contract"
      },
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "airdropERC20",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "erc20Contract"
      },
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "airdropERC721",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "airdropETH",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
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
    "name": "setFeeCollector",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newFeeCollector"
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
    "name": "withdrawStuckETH",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract