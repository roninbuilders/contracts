import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 105,
  address: '0x13b17ae62ec87775222789d1c544fe1c1b3dccb3' as const,
  contract_name: 'RewardSplitter',
  display_name: 'Reward Splitter',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1646053158,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ContractAddressUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_old"
      },
      {
        "type": "address",
        "name": "_new"
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
    "name": "SLPShared",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "address[]",
        "name": "_recipients"
      },
      {
        "type": "uint256[]",
        "name": "_sharePercentages"
      }
    ]
  },
  {
    "name": "TokenShared",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "address[]",
        "name": "_recipients"
      },
      {
        "type": "uint256[]",
        "name": "_sharePercentages"
      }
    ]
  },
  {
    "name": "TOTAL_SHARE",
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "changeRewardContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeSlpContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimAndSplitSLP",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_recipients"
      },
      {
        "type": "uint256[]",
        "name": "_sharePercentages"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "uint256",
        "name": "_createdAt"
      },
      {
        "type": "bytes",
        "name": "_signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimAndSplitToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_recipients"
      },
      {
        "type": "uint256[]",
        "name": "_sharePercentages"
      },
      {
        "type": "address",
        "name": "_tokenContract"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "uint256",
        "name": "_createdAt"
      },
      {
        "type": "bytes",
        "name": "_signature"
      }
    ],
    "outputs": []
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
    "name": "rewardContractAddress",
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
    "name": "slpContractAddress",
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
    "name": "tryTransferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_candidate"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract