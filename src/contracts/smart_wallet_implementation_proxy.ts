import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37348,
  address: '0xfee93fcd1a26e858325613818de5c533d94a33b6' as const,
  contract_name: 'SmartWalletProxy',
  display_name: 'Smart Wallet Implementation Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xddecc5735ec2b65c0b110d1dedfcc90877ef8177',
  created_at: 1747710935,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_admin"
      },
      {
        "type": "address",
        "name": "_implementation"
      },
      {
        "type": "address[]",
        "name": "_supportedPlatformWallets"
      },
      {
        "type": "address[]",
        "name": "_supportedSwaps"
      },
      {
        "type": "address[]",
        "name": "_supportedLendings"
      }
    ]
  },
  {
    "name": "AdminClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      },
      {
        "type": "address",
        "name": "previousAdmin"
      }
    ]
  },
  {
    "name": "EtherWithdraw",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "sendTo"
      }
    ]
  },
  {
    "name": "ImplementationUpdated",
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
    "name": "TokenWithdraw",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "sendTo"
      }
    ]
  },
  {
    "name": "TransferAdminPending",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pendingAdmin"
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "BPS",
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
    "name": "claimAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "getAllSupportedLendings",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "addresses"
      }
    ]
  },
  {
    "name": "getAllSupportedPlatformWallets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "addresses"
      }
    ]
  },
  {
    "name": "getAllSupportedSwaps",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "addresses"
      }
    ]
  },
  {
    "name": "implementation",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "impl"
      }
    ]
  },
  {
    "name": "pendingAdmin",
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
    "name": "platformWalletFees",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "transferAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferAdminQuickly",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateNewImplementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_implementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateSupportedLendings",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "addresses"
      },
      {
        "type": "bool",
        "name": "isSupported"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateSupportedPlatformWallets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "addresses"
      },
      {
        "type": "bool",
        "name": "isSupported"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateSupportedSwaps",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "addresses"
      },
      {
        "type": "bool",
        "name": "isSupported"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawEther",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "sendTo"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawToken",
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
      },
      {
        "type": "address",
        "name": "sendTo"
      }
    ],
    "outputs": []
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
    "inputs": [
      {
        "type": "address",
        "name": "_admin"
      }
    ]
  },
  {
    "name": "AdminClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      },
      {
        "type": "address",
        "name": "previousAdmin"
      }
    ]
  },
  {
    "name": "ApprovedAllowances",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "address[]",
        "name": "spenders"
      },
      {
        "type": "bool",
        "name": "isReset"
      }
    ]
  },
  {
    "name": "ClaimedPlatformFees",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "wallets"
      },
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "address",
        "name": "claimer"
      }
    ]
  },
  {
    "name": "EtherWithdraw",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "sendTo"
      }
    ]
  },
  {
    "name": "Swap",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "trader",
        "indexed": true
      },
      {
        "type": "address",
        "name": "swapContract",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "tradePath"
      },
      {
        "type": "uint256",
        "name": "srcAmount"
      },
      {
        "type": "uint256",
        "name": "destAmount"
      },
      {
        "type": "uint8",
        "name": "feeMode"
      },
      {
        "type": "uint256",
        "name": "feeBps"
      },
      {
        "type": "address",
        "name": "platformWallet"
      }
    ]
  },
  {
    "name": "SwapAndDeposit",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "trader",
        "indexed": true
      },
      {
        "type": "address",
        "name": "swapContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "lendingContract",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "tradePath"
      },
      {
        "type": "uint256",
        "name": "srcAmount"
      },
      {
        "type": "uint256",
        "name": "destAmount"
      },
      {
        "type": "uint8",
        "name": "feeMode"
      },
      {
        "type": "uint256",
        "name": "feeBps"
      },
      {
        "type": "address",
        "name": "platformWallet"
      }
    ]
  },
  {
    "name": "SwapAndRepay",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "trader",
        "indexed": true
      },
      {
        "type": "address",
        "name": "swapContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "lendingContract",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "tradePath"
      },
      {
        "type": "uint256",
        "name": "srcAmount"
      },
      {
        "type": "uint256",
        "name": "destAmount"
      },
      {
        "type": "uint256",
        "name": "payAmount"
      },
      {
        "type": "uint8",
        "name": "feeMode"
      },
      {
        "type": "uint256",
        "name": "feeBps"
      },
      {
        "type": "address",
        "name": "platformWallet"
      }
    ]
  },
  {
    "name": "TokenWithdraw",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "sendTo"
      }
    ]
  },
  {
    "name": "TransferAdminPending",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pendingAdmin"
      }
    ]
  },
  {
    "name": "WithdrawFromLending",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "trader",
        "indexed": true
      },
      {
        "type": "address",
        "name": "lendingContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "minReturn"
      },
      {
        "type": "uint256",
        "name": "actualReturnAmount"
      }
    ]
  },
  {
    "name": "BPS",
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
    "name": "adminClaimPlatformFees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "platformWallets"
      },
      {
        "type": "address[]",
        "name": "tokens"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminClaimPlatformFeesUrgent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "platformWallets"
      },
      {
        "type": "address[]",
        "name": "tokens"
      }
    ],
    "outputs": []
  },
  {
    "name": "adminFeeCollector",
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
    "name": "approveAllowances",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      },
      {
        "type": "address[]",
        "name": "spenders"
      },
      {
        "type": "bool",
        "name": "isReset"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "claimPlatformFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "tokens"
      }
    ],
    "outputs": []
  },
  {
    "name": "getExpectedIn",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "swapContract"
          },
          {
            "type": "uint256",
            "name": "destAmount"
          },
          {
            "type": "address[]",
            "name": "tradePath"
          },
          {
            "type": "uint8",
            "name": "feeMode"
          },
          {
            "type": "uint256",
            "name": "feeBps"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "srcAmount"
      },
      {
        "type": "uint256",
        "name": "expectedRate"
      }
    ]
  },
  {
    "name": "getExpectedInWithImpact",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "swapContract"
          },
          {
            "type": "uint256",
            "name": "destAmount"
          },
          {
            "type": "address[]",
            "name": "tradePath"
          },
          {
            "type": "uint8",
            "name": "feeMode"
          },
          {
            "type": "uint256",
            "name": "feeBps"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "srcAmount"
      },
      {
        "type": "uint256",
        "name": "expectedRate"
      },
      {
        "type": "uint256",
        "name": "priceImpact"
      }
    ]
  },
  {
    "name": "getExpectedReturn",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "swapContract"
          },
          {
            "type": "uint256",
            "name": "srcAmount"
          },
          {
            "type": "address[]",
            "name": "tradePath"
          },
          {
            "type": "uint8",
            "name": "feeMode"
          },
          {
            "type": "uint256",
            "name": "feeBps"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "destAmount"
      },
      {
        "type": "uint256",
        "name": "expectedRate"
      }
    ]
  },
  {
    "name": "getExpectedReturnWithImpact",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "swapContract"
          },
          {
            "type": "uint256",
            "name": "srcAmount"
          },
          {
            "type": "address[]",
            "name": "tradePath"
          },
          {
            "type": "uint8",
            "name": "feeMode"
          },
          {
            "type": "uint256",
            "name": "feeBps"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "destAmount"
      },
      {
        "type": "uint256",
        "name": "expectedRate"
      },
      {
        "type": "uint256",
        "name": "priceImpact"
      }
    ]
  },
  {
    "name": "pendingAdmin",
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
    "name": "platformWalletFees",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "setAdminFeeCollector",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "feeCollector"
      }
    ],
    "outputs": []
  },
  {
    "name": "swap",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "swapContract"
          },
          {
            "type": "uint256",
            "name": "srcAmount"
          },
          {
            "type": "uint256",
            "name": "minDestAmount"
          },
          {
            "type": "address[]",
            "name": "tradePath"
          },
          {
            "type": "uint8",
            "name": "feeMode"
          },
          {
            "type": "uint256",
            "name": "feeBps"
          },
          {
            "type": "address",
            "name": "platformWallet"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "destAmount"
      }
    ]
  },
  {
    "name": "swapAndDeposit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "swapContract"
          },
          {
            "type": "address",
            "name": "lendingContract"
          },
          {
            "type": "uint256",
            "name": "srcAmount"
          },
          {
            "type": "uint256",
            "name": "minDestAmount"
          },
          {
            "type": "address[]",
            "name": "tradePath"
          },
          {
            "type": "uint8",
            "name": "feeMode"
          },
          {
            "type": "uint256",
            "name": "feeBps"
          },
          {
            "type": "address",
            "name": "platformWallet"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "destAmount"
      }
    ]
  },
  {
    "name": "swapAndRepay",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "swapContract"
          },
          {
            "type": "address",
            "name": "lendingContract"
          },
          {
            "type": "uint256",
            "name": "srcAmount"
          },
          {
            "type": "uint256",
            "name": "payAmount"
          },
          {
            "type": "address[]",
            "name": "tradePath"
          },
          {
            "type": "uint256",
            "name": "rateMode"
          },
          {
            "type": "uint8",
            "name": "feeMode"
          },
          {
            "type": "uint256",
            "name": "feeBps"
          },
          {
            "type": "address",
            "name": "platformWallet"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "destAmount"
      }
    ]
  },
  {
    "name": "transferAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferAdminQuickly",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawEther",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "sendTo"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawFromLendingPlatform",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "lendingContract"
          },
          {
            "type": "address",
            "name": "token"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "minReturn"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "returnedAmount"
      }
    ]
  },
  {
    "name": "withdrawToken",
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
      },
      {
        "type": "address",
        "name": "sendTo"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract