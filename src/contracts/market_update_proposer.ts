import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36289,
  address: '0x33ad97b5bfbad948467aba0aefde09f189f60cd4' as const,
  contract_name: 'MarketUpdateProposer',
  display_name: 'Market Update Proposer',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753097199,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "governor_"
      },
      {
        "type": "address",
        "name": "marketAdmin_"
      },
      {
        "type": "address",
        "name": "proposalGuardian_"
      },
      {
        "type": "address",
        "name": "timelock_"
      }
    ]
  },
  {
    "name": "InvalidAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Unauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MarketUpdateProposalCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      }
    ]
  },
  {
    "name": "MarketUpdateProposalCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "address",
        "name": "proposer"
      },
      {
        "type": "address[]",
        "name": "targets"
      },
      {
        "type": "uint256[]",
        "name": "values"
      },
      {
        "type": "string[]",
        "name": "signatures"
      },
      {
        "type": "bytes[]",
        "name": "calldatas"
      },
      {
        "type": "string",
        "name": "description"
      }
    ]
  },
  {
    "name": "MarketUpdateProposalExecuted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      }
    ]
  },
  {
    "name": "SetGovernor",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldGovernor",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newGovernor",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetMarketAdmin",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetProposalGuardian",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldProposalGuardian",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newProposalGuardian",
        "indexed": true
      }
    ]
  },
  {
    "name": "INITIAL_PROPOSAL_ID",
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
    "name": "PROPOSAL_MAX_OPERATIONS",
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
    "name": "cancel",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "proposalId"
      }
    ],
    "outputs": []
  },
  {
    "name": "execute",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "proposalId"
      }
    ],
    "outputs": []
  },
  {
    "name": "getProposal",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "proposalId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "address[]"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "string[]"
      },
      {
        "type": "bytes[]"
      },
      {
        "type": "bool"
      },
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "governor",
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
    "name": "marketAdmin",
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
    "name": "proposalCount",
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
    "name": "proposalGuardian",
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
    "name": "proposals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "address",
        "name": "proposer"
      },
      {
        "type": "uint256",
        "name": "eta"
      },
      {
        "type": "bool",
        "name": "canceled"
      },
      {
        "type": "bool",
        "name": "executed"
      }
    ]
  },
  {
    "name": "propose",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "targets"
      },
      {
        "type": "uint256[]",
        "name": "values"
      },
      {
        "type": "string[]",
        "name": "signatures"
      },
      {
        "type": "bytes[]",
        "name": "calldatas"
      },
      {
        "type": "string",
        "name": "description"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "setGovernor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newGovernor"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMarketAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newMarketAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "setProposalGuardian",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newProposalGuardian"
      }
    ],
    "outputs": []
  },
  {
    "name": "state",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "proposalId"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "timelock",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract