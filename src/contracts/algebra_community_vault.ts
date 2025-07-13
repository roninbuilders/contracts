import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36000,
  address: '0xc12f350ad37fce954f37e845f955487fdd3446d1' as const,
  contract_name: 'AlgebraCommunityVault',
  display_name: 'Algebra Community Vault',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751631370,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_factory"
      },
      {
        "type": "address",
        "name": "_algebraFeeManager"
      }
    ]
  },
  {
    "name": "transferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AlgebraFee",
    "type": "event",
    "inputs": [
      {
        "type": "uint16",
        "name": "newAlgebraFee"
      }
    ]
  },
  {
    "name": "AlgebraFeeManager",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAlgebraFeeManager"
      }
    ]
  },
  {
    "name": "AlgebraFeeProposal",
    "type": "event",
    "inputs": [
      {
        "type": "uint16",
        "name": "proposedNewAlgebraFee"
      }
    ]
  },
  {
    "name": "AlgebraFeeReceiver",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAlgebraFeeReceiver"
      }
    ]
  },
  {
    "name": "AlgebraTokensWithdrawal",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "CancelAlgebraFeeProposal",
    "type": "event",
    "inputs": []
  },
  {
    "name": "CommunityFeeReceiver",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newCommunityFeeReceiver"
      }
    ]
  },
  {
    "name": "PendingAlgebraFeeManager",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pendingAlgebraFeeManager"
      }
    ]
  },
  {
    "name": "TokensWithdrawal",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "COMMUNITY_FEE_VAULT_ADMINISTRATOR",
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
    "name": "COMMUNITY_FEE_WITHDRAWER_ROLE",
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
    "name": "acceptAlgebraFeeChangeProposal",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint16",
        "name": "newAlgebraFee"
      }
    ],
    "outputs": []
  },
  {
    "name": "acceptAlgebraFeeManagerRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "algebraFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16"
      }
    ]
  },
  {
    "name": "algebraFeeManager",
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
    "name": "algebraFeeReceiver",
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
    "name": "cancelAlgebraFeeChangeProposal",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "changeAlgebraFeeReceiver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAlgebraFeeReceiver"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeCommunityFeeReceiver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newCommunityFeeReceiver"
      }
    ],
    "outputs": []
  },
  {
    "name": "communityFeeReceiver",
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
    "name": "hasNewAlgebraFeeProposal",
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
    "name": "proposeAlgebraFeeChange",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint16",
        "name": "newAlgebraFee"
      }
    ],
    "outputs": []
  },
  {
    "name": "proposedNewAlgebraFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16"
      }
    ]
  },
  {
    "name": "transferAlgebraFeeManagerRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newAlgebraFeeManager"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract