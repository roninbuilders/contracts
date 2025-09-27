import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 168,
  address: '0x05b0bb3c1c320b280501b86706c3551995bc8571' as const,
  contract_name: 'ERC20StakingPoolProxy',
  display_name: 'AXS Staking Pool',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xd9e9569ffbf7e4193aea043dec95d3ee262fdfa7',
  created_at: 1632969696,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_proxyTo"
      },
      {
        "type": "address",
        "name": "_newStakingToken"
      },
      {
        "type": "address",
        "name": "_newRewardToken"
      },
      {
        "type": "address",
        "name": "_newStakingManager"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "AdminRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "ProxyUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_new",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_old",
        "indexed": true
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "admin",
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
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
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
    "name": "methodPaused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "pause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes4",
        "name": "_method"
      }
    ],
    "outputs": []
  },
  {
    "name": "pauseAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "paused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4",
        "name": "_method"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "proxyType",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "removeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes4",
        "name": "_method"
      }
    ],
    "outputs": []
  },
  {
    "name": "unpauseAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "updateProxyTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newProxyTo"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "AdminRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "EmergencyUnstaked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_user",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_amount",
        "indexed": true
      }
    ]
  },
  {
    "name": "RewardClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_user",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_amount",
        "indexed": true
      }
    ]
  },
  {
    "name": "Staked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_user",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_amount",
        "indexed": true
      }
    ]
  },
  {
    "name": "Unstaked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_user",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_amount",
        "indexed": true
      }
    ]
  },
  {
    "name": "admin",
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
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimPendingRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "emergencyUnstake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "getPendingRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getRewardToken",
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
    "name": "getStakingAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getStakingToken",
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
    "name": "getStakingTotal",
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
    "name": "methodPaused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "pause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes4",
        "name": "_method"
      }
    ],
    "outputs": []
  },
  {
    "name": "pauseAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "paused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4",
        "name": "_method"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "removeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "restakeRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "stake",
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes4",
        "name": "_method"
      }
    ],
    "outputs": []
  },
  {
    "name": "unpauseAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "unstake",
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
    "name": "unstakeAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract