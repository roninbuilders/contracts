import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1968,
  address: '0x2d9c6e76d366ae72f8a22d7b3ed30886856f2286' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Apeiron Vesting Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x528c514b3f1fa8ea59d7c446bdb1f118cdaa958f',
  created_at: 1711010060,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
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
    "type": "fallback",
    "stateMutability": "payable"
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
    "inputs": []
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
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
    "name": "RevokeVesting",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beneficiary",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetFDVFactor",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "FDVFactor",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetPercentageBase",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "percentageBase",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetVesting",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beneficiary",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "vesting",
        "components": [
          {
            "type": "uint256",
            "name": "initialUnlockPercentage"
          },
          {
            "type": "uint256",
            "name": "cliff"
          },
          {
            "type": "uint256",
            "name": "start"
          },
          {
            "type": "uint256",
            "name": "duration"
          },
          {
            "type": "uint256",
            "name": "released"
          },
          {
            "type": "uint256",
            "name": "totalAmount"
          },
          {
            "type": "bool",
            "name": "affectedByFDV"
          }
        ]
      }
    ]
  },
  {
    "name": "SetVestingToken",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token",
        "indexed": true
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
    "name": "VestingAccountSwapped",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      }
    ]
  },
  {
    "name": "VestingAmountAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beneficiary",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "VestingCliffAndDurationUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "successBeneficiaries"
      },
      {
        "type": "address[]",
        "name": "failureBeneficiaries"
      }
    ]
  },
  {
    "name": "VestingReleased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beneficiary",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "FDVFactor",
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
    "name": "addMultiVestingAccount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_beneficiaries"
      },
      {
        "type": "uint256[]",
        "name": "_initialUnlockPercentages"
      },
      {
        "type": "uint256[]",
        "name": "_cliffs"
      },
      {
        "type": "uint256[]",
        "name": "_starts"
      },
      {
        "type": "uint256[]",
        "name": "_durations"
      },
      {
        "type": "uint256[]",
        "name": "_releaseds"
      },
      {
        "type": "uint256[]",
        "name": "_totalAmounts"
      },
      {
        "type": "bool[]",
        "name": "_affectedByFDVs"
      }
    ],
    "outputs": []
  },
  {
    "name": "addVestingAccount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_beneficiary"
      },
      {
        "type": "uint256",
        "name": "_initialUnlockPercentage"
      },
      {
        "type": "uint256",
        "name": "_cliff"
      },
      {
        "type": "uint256",
        "name": "_start"
      },
      {
        "type": "uint256",
        "name": "_duration"
      },
      {
        "type": "uint256",
        "name": "_released"
      },
      {
        "type": "uint256",
        "name": "_totalAmount"
      },
      {
        "type": "bool",
        "name": "_affectedByFDV"
      }
    ],
    "outputs": []
  },
  {
    "name": "aprsToken",
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
    "name": "contractAmount",
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
    "name": "getAccountClaimableAndReleasedAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_beneficiary"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalClaimable"
      },
      {
        "type": "uint256",
        "name": "totalReleased"
      }
    ]
  },
  {
    "name": "getAccountTotalAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_beneficiary"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalAmount"
      }
    ]
  },
  {
    "name": "getCurrentVestedAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_beneficiary"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getMultiWalletVestedAndReleasedAmountByBlockNumber",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_beneficiaries"
      },
      {
        "type": "uint256",
        "name": "_blockNum"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getVestedAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_beneficiary"
      },
      {
        "type": "uint256",
        "name": "_blockNum"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getVestingAccount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_beneficiary"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "initialUnlockPercentage"
          },
          {
            "type": "uint256",
            "name": "cliff"
          },
          {
            "type": "uint256",
            "name": "start"
          },
          {
            "type": "uint256",
            "name": "duration"
          },
          {
            "type": "uint256",
            "name": "released"
          },
          {
            "type": "uint256",
            "name": "totalAmount"
          },
          {
            "type": "bool",
            "name": "affectedByFDV"
          }
        ]
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
    "name": "percentageBase",
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
    "name": "release",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_releaseAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "revokeVestingAccount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_beneficiary"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFDVFactor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_FDVFactor"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPercentageBase",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_percentageBase"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVestingToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": []
  },
  {
    "name": "swapVestingAccountFromTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_from"
      },
      {
        "type": "address",
        "name": "_to"
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
    "name": "updateMultiVestingCliffAndDuration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_beneficiaries"
      },
      {
        "type": "uint256[]",
        "name": "_cliffs"
      },
      {
        "type": "uint256[]",
        "name": "_durations"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateVestingCliffAndDuration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_beneficiary"
      },
      {
        "type": "uint256",
        "name": "_index"
      },
      {
        "type": "uint256",
        "name": "_cliff"
      },
      {
        "type": "uint256",
        "name": "_duration"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
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
  },
  {
    "name": "vestingMap",
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
        "type": "uint256",
        "name": "initialUnlockPercentage"
      },
      {
        "type": "uint256",
        "name": "cliff"
      },
      {
        "type": "uint256",
        "name": "start"
      },
      {
        "type": "uint256",
        "name": "duration"
      },
      {
        "type": "uint256",
        "name": "released"
      },
      {
        "type": "uint256",
        "name": "totalAmount"
      },
      {
        "type": "bool",
        "name": "affectedByFDV"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract