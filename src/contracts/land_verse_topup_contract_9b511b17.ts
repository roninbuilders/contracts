import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 29612,
  address: '0x196546981a839e99eaec70d91cd45ad59b511b17' as const,
  contract_name: 'LandVerseTopupContract',
  display_name: 'Land Verse Topup Contract',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1743062098,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_currencyTokenAddress"
      },
      {
        "type": "address",
        "name": "_treasuryAddress"
      },
      {
        "type": "address",
        "name": "_partnerAddress"
      },
      {
        "type": "address",
        "name": "_platformAddress"
      },
      {
        "type": "uint256",
        "name": "_treasuryPercent"
      },
      {
        "type": "uint256",
        "name": "_partnerPercent"
      },
      {
        "type": "uint256",
        "name": "_platformPercent"
      },
      {
        "type": "address",
        "name": "_adminAddress"
      }
    ]
  },
  {
    "name": "EventSetCurrencyTokenAddress",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newCurrencyTokenAddress"
      }
    ]
  },
  {
    "name": "EventSetPartnerAddress",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newPartnerAddress"
      }
    ]
  },
  {
    "name": "EventSetPercent",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newTreasuryPercent"
      },
      {
        "type": "uint256",
        "name": "newPartnerPercent"
      },
      {
        "type": "uint256",
        "name": "newPlatformPercent"
      }
    ]
  },
  {
    "name": "EventSetPlatformAddress",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newPlatformAddress"
      }
    ]
  },
  {
    "name": "EventSetTreasuryAddress",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newTreasuryAddress"
      }
    ]
  },
  {
    "name": "EventTopup",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "string",
        "name": "refCode"
      },
      {
        "type": "uint256",
        "name": "treasuryPercent"
      },
      {
        "type": "uint256",
        "name": "partnerPercent"
      },
      {
        "type": "uint256",
        "name": "platformPercent"
      },
      {
        "type": "uint256",
        "name": "treasuryReceived"
      },
      {
        "type": "uint256",
        "name": "partnerReceived"
      },
      {
        "type": "uint256",
        "name": "platformReceived"
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
    "name": "RoleAdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "previousAdminRole",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "newAdminRole",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleGranted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleRevoked",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
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
    "name": "DEFAULT_ADMIN_ROLE",
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
    "name": "calculatePartnerAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "topupAmount"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "calculatePlatformAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "topupAmount"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "calculateTreasuryAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "topupAmount"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "currencyToken",
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
    "name": "getRoleAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "grantRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "hasRole",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "partnerAddress",
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
    "name": "partnerPercent",
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
    "name": "platformAddress",
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
    "name": "platformPercent",
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
    "name": "renounceRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "revokeRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "setCurrencyTokenAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newCurrencyTokenAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPartnerAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newPartnerAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPercent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newTreasuryPercent"
      },
      {
        "type": "uint256",
        "name": "newPartnerPercent"
      },
      {
        "type": "uint256",
        "name": "newPlatformPercent"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPlatformAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newPlatformAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTreasuryAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newTreasuryAddress"
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
    "name": "topup",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "string",
        "name": "refCode"
      }
    ],
    "outputs": []
  },
  {
    "name": "treasuryAddress",
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
    "name": "treasuryPercent",
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract