import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 33113,
  address: '0x9362d56fc8db62dc5cf1251c3a70039bf6a32965' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'KDR Staking Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x616bdf1cc7a0867d9ffe4e6af80eca99ea62b308',
  created_at: 1744369065,
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
        "type": "address",
        "name": "admin_"
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
    "name": "admin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "admin_"
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
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "implementation_"
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
    "name": "KaidroStaking__DuplicateSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "KaidroStaking__ExceedMaximumAmountStakePerTransaction",
    "type": "error",
    "inputs": []
  },
  {
    "name": "KaidroStaking__ExceedMaximumAmountStakePerUser",
    "type": "error",
    "inputs": []
  },
  {
    "name": "KaidroStaking__InvalidRestakeId",
    "type": "error",
    "inputs": []
  },
  {
    "name": "KaidroStaking__InvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "KaidroStaking__InvalidStakeId",
    "type": "error",
    "inputs": []
  },
  {
    "name": "KaidroStaking__InvalidTimeToRestake",
    "type": "error",
    "inputs": []
  },
  {
    "name": "KaidroStaking__NotRestakeBot",
    "type": "error",
    "inputs": []
  },
  {
    "name": "KaidroStaking__ShouldBeGreaterThanMinimumStakeAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "KaidroStaking__TransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "KaidroStaking__UnauthorizedAdmin",
    "type": "error",
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
    "name": "ChangeDenominator",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newDenominator"
      }
    ]
  },
  {
    "name": "ChangeStakeSetting",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "newSetting",
        "components": [
          {
            "type": "uint256",
            "name": "APR"
          },
          {
            "type": "uint256",
            "name": "KDRToUCCRatio"
          },
          {
            "type": "uint256",
            "name": "minimumStakingDuration"
          },
          {
            "type": "uint256",
            "name": "maximumKDRReward"
          },
          {
            "type": "uint256",
            "name": "maximumUCCReward"
          },
          {
            "type": "uint256",
            "name": "maximumKDRRewardPerTransaction"
          },
          {
            "type": "uint256",
            "name": "maximumUCCRewardPerTransaction"
          },
          {
            "type": "bool",
            "name": "isKDRRewardActive"
          },
          {
            "type": "bool",
            "name": "isUCCRewardActive"
          },
          {
            "type": "uint256",
            "name": "minimumStakingAmount"
          }
        ]
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "version"
      }
    ]
  },
  {
    "name": "Migrated",
    "type": "event",
    "inputs": []
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
    "name": "SetAdmin",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      }
    ]
  },
  {
    "name": "Staked",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "stake",
        "components": [
          {
            "type": "address",
            "name": "user"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "tuple",
            "name": "reward",
            "components": [
              {
                "type": "uint256",
                "name": "amountKDR"
              },
              {
                "type": "uint256",
                "name": "amountUCC"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "claimableTime"
          },
          {
            "type": "uint256",
            "name": "unstakeTime"
          }
        ]
      }
    ]
  },
  {
    "name": "Unstaked",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "stake",
        "components": [
          {
            "type": "address",
            "name": "user"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "tuple",
            "name": "reward",
            "components": [
              {
                "type": "uint256",
                "name": "amountKDR"
              },
              {
                "type": "uint256",
                "name": "amountUCC"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "claimableTime"
          },
          {
            "type": "uint256",
            "name": "unstakeTime"
          }
        ]
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
    "name": "YEAR",
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
    "name": "calculateReward",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bool",
        "name": "isKDRRewardActive"
      },
      {
        "type": "bool",
        "name": "isUCCRewardActive"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountKDR"
      },
      {
        "type": "uint256",
        "name": "amountUCC"
      }
    ]
  },
  {
    "name": "changeDenominator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_denominator"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeStakeSetting",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "newSetting",
        "components": [
          {
            "type": "uint256",
            "name": "APR"
          },
          {
            "type": "uint256",
            "name": "KDRToUCCRatio"
          },
          {
            "type": "uint256",
            "name": "minimumStakingDuration"
          },
          {
            "type": "uint256",
            "name": "maximumKDRReward"
          },
          {
            "type": "uint256",
            "name": "maximumUCCReward"
          },
          {
            "type": "uint256",
            "name": "maximumKDRRewardPerTransaction"
          },
          {
            "type": "uint256",
            "name": "maximumUCCRewardPerTransaction"
          },
          {
            "type": "bool",
            "name": "isKDRRewardActive"
          },
          {
            "type": "bool",
            "name": "isUCCRewardActive"
          },
          {
            "type": "uint256",
            "name": "minimumStakingAmount"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "deleteAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "denominator",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_kaidroToken"
      },
      {
        "type": "address",
        "name": "_signedAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "migrate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "migrationId"
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
    "name": "proxiableUUID",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "restake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "stakeId"
      },
      {
        "type": "uint256",
        "name": "newStakeId"
      }
    ],
    "outputs": []
  },
  {
    "name": "s_admin",
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
    "name": "s_currentStakeAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "currentStakeAmount"
      }
    ]
  },
  {
    "name": "s_isStaked",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isStake"
      }
    ]
  },
  {
    "name": "s_kaidroToken",
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
    "name": "s_newContract",
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
    "name": "s_restakeBots",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "s_signature",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "s_signedAdmin",
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
    "name": "s_stakeSetting",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "APR"
      },
      {
        "type": "uint256",
        "name": "KDRToUCCRatio"
      },
      {
        "type": "uint256",
        "name": "minimumStakingDuration"
      },
      {
        "type": "uint256",
        "name": "maximumKDRReward"
      },
      {
        "type": "uint256",
        "name": "maximumUCCReward"
      },
      {
        "type": "uint256",
        "name": "maximumKDRRewardPerTransaction"
      },
      {
        "type": "uint256",
        "name": "maximumUCCRewardPerTransaction"
      },
      {
        "type": "bool",
        "name": "isKDRRewardActive"
      },
      {
        "type": "bool",
        "name": "isUCCRewardActive"
      },
      {
        "type": "uint256",
        "name": "minimumStakingAmount"
      }
    ]
  },
  {
    "name": "s_stakes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_id"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "tuple",
        "name": "reward",
        "components": [
          {
            "type": "uint256",
            "name": "amountKDR"
          },
          {
            "type": "uint256",
            "name": "amountUCC"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "claimableTime"
      },
      {
        "type": "uint256",
        "name": "unstakeTime"
      }
    ]
  },
  {
    "name": "s_totalRewardAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amountKDR"
      },
      {
        "type": "uint256",
        "name": "amountUCC"
      }
    ]
  },
  {
    "name": "s_user",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "setAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_admin"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMigrateContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRestakeBot",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "restakeBot"
      },
      {
        "type": "bool",
        "name": "privilege"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSignedAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_signedAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "stake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "bytes",
        "name": "signature"
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
    "name": "unstake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
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
    "name": "withdrawKDR",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract