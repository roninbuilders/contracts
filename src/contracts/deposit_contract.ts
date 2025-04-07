import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 6808,
  address: '0xee5431ede1c45fff0ef7ca20014f0322539f3f68' as const,
  contract_name: 'DepositContract',
  display_name: 'Deposit Contract',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1736774366,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_approver"
      },
      {
        "type": "address",
        "name": "_developer"
      },
      {
        "type": "address",
        "name": "_newGenerator"
      },
      {
        "type": "address",
        "name": "_newRouter"
      },
      {
        "type": "uint256",
        "name": "_minBalanceLimitSupra"
      }
    ]
  },
  {
    "name": "ClientDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_depositer"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "ClientRemovedFromWhitelist",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "uint256",
        "name": "_removedTime"
      }
    ]
  },
  {
    "name": "ClientWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "uint256",
        "name": "_startTime"
      },
      {
        "type": "uint256",
        "name": "_endTime"
      },
      {
        "type": "bool",
        "name": "_isSnap"
      }
    ]
  },
  {
    "name": "ClientWithdrwal",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_withdrawer"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "ColdWalletConfirmed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_coldWalletAddress"
      }
    ]
  },
  {
    "name": "ContractWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "address",
        "name": "_contractAddress"
      },
      {
        "type": "uint256",
        "name": "_timeStamp"
      }
    ]
  },
  {
    "name": "ContractsDeletedFromWhitelist",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "uint256",
        "name": "_removedTime"
      }
    ]
  },
  {
    "name": "MinBalanceClientSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "uint256",
        "name": "limit"
      }
    ]
  },
  {
    "name": "OwnershipTransferStarted",
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
    "name": "SupraCollected",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_fromClient"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "SupraRefunded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_toClient"
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "_tempWallet",
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "addClientToWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "bool",
        "name": "_isSnap"
      }
    ],
    "outputs": []
  },
  {
    "name": "addContractToWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_contractAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminFeelsOK",
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
    "name": "approver",
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
    "name": "checkBalanceAllWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "checkClientFund",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "checkEffectiveBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "checkMinBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "checkMinBalanceSupra",
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
    "name": "checkSupraFund",
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
    "name": "claimFreeNodeExpenses",
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
    "name": "coldWallet",
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
    "name": "collectFund",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "confirmColdWallet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "countTotalWhitelistedClient",
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
    "name": "countTotalWhitelistedContractByClient",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "depositFundClient",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "depositSupraFund",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "developer",
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
    "name": "executeRefund",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_fundReceiver"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "generator",
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
    "name": "getSubscriptionInfoByClient",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isClientWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isContractEligible",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "address",
        "name": "_contractAddress"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isContractWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "address",
        "name": "_contractAddress"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isMinimumBalanceReached",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "listAllWhitelistedClient",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "listAllWhitelistedContractByClient",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
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
    "name": "pauseWithdrawal",
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
    "name": "pendingOwner",
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
    "name": "proposeColdWallet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newColdWallet"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeAllContractOfClient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeClientFromWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeContractFromWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_contractAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "router",
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
    "name": "setMinBalanceClient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_limit"
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
    "name": "unpauseWithdrawal",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "updateDeveloper",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newDeveloper"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateGeneratorRouter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newGenerator"
      },
      {
        "type": "address",
        "name": "_newRouter"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateMinBalanceSupra",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_limit"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateSubscription",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "uint256",
        "name": "_newEndTime"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawFundClient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract