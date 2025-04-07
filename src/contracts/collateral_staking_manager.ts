import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 463,
  address: '0xa330c96daa39009c18d55d5546a28457731953eb' as const,
  contract_name: 'CollateralStakingManager',
  display_name: 'Collateral Staking Manager',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1692116115,
  abi: [
  {
    "name": "MoveCollateralPausedChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "newValue",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewAdmin",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "previousAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewCEtherStakingMarket",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newCEtherStakingMarket",
        "indexed": true
      },
      {
        "type": "address",
        "name": "previousCEtherStakingMarket",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewCollateralStakingMediator",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewCollateralStakingMediatorImplementation",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousImpl"
      },
      {
        "type": "address",
        "name": "newImpl"
      }
    ]
  },
  {
    "name": "NewRedelegatingManager",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newRedelegatingManager",
        "indexed": true
      },
      {
        "type": "address",
        "name": "previousRedelegatingManager",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewRestakingManager",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newRestakingManager",
        "indexed": true
      },
      {
        "type": "address",
        "name": "previousRestakingManager",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewRestakingPool",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newRestakingPool",
        "indexed": true
      },
      {
        "type": "address",
        "name": "previousRestakingPool",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewRestakingUnderlying",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newRestakingUnderlying",
        "indexed": true
      },
      {
        "type": "address",
        "name": "previousRestakingUnderlying",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewRewardsRoyaltiesPercentage",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newPercentage",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "previousPercentage",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewRoninStaking",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newRoninStaking",
        "indexed": true
      },
      {
        "type": "address",
        "name": "previousRoninStaking",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewRoninValidatorSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newRoninValidatorSet",
        "indexed": true
      },
      {
        "type": "address",
        "name": "previousRoninValidatorSet",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewRoyaltiesReceiver",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newReceiver",
        "indexed": true
      },
      {
        "type": "address",
        "name": "previousReceiver",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewStakingMarket",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cErcStakingMarket",
        "indexed": true
      },
      {
        "type": "address",
        "name": "stakingPool"
      },
      {
        "type": "address",
        "name": "underlyingToken"
      }
    ]
  },
  {
    "name": "ValidatorSupported",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "validator",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "supported",
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
    "name": "cErcStakingMarket",
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
    "name": "cEtherStakingMarket",
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
    "name": "collateralStakingMediatorImplementation",
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
    "name": "decreaseTotalDelegatingAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "decreaseTotalRestakingAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "delegateInitialUncollateralizedRon",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "feeDenominator",
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
    "name": "getCollateralStakingMediator",
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
        "type": "address"
      }
    ]
  },
  {
    "name": "getOrCreateCollateralStakingMediator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getSupportedValidatorsList",
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
    "name": "increaseTotalAccruedRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "increaseTotalAccruedRewardsRon",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "increaseTotalDelegatingAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "increaseTotalRestakingAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "royaltiesReceiver_"
      },
      {
        "type": "address",
        "name": "collateralStakingMediatorImplementation_"
      },
      {
        "type": "uint256",
        "name": "rewardsRoyaltiesPercentage_"
      }
    ],
    "outputs": []
  },
  {
    "name": "isCollateralStakingManager",
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
    "name": "marketPoolWire",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "stakingPool"
      },
      {
        "type": "address",
        "name": "underlyingToken"
      }
    ]
  },
  {
    "name": "moveUncollateralizedPaused",
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
    "name": "redelegatingManager",
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
    "name": "restakingManager",
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
    "name": "restakingPoolErc20",
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
    "name": "restakingUnderlying",
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
    "name": "rewardsRoyaltiesPercentage",
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
    "name": "roninStaking",
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
    "name": "roninValidatorSet",
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
    "name": "royaltiesReceiver",
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
    "name": "setAdmin",
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
    "name": "setCollateralStakingMediatorImplementation",
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
    "name": "setMoveUncollateralizedPaused",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "value"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRedelegatingManager",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newRedelegatingManager"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRestakingManager",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newManager"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRestakingPoolErc20",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "restakingPool"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRestakingUnderlying",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "underlying"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRewardRoyaltiesPercentage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newPercentage"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRoninStaking",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newRoninStaking"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRoninValidatorSet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newRoninValidatorSet"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRoyaltiesReceiver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newReceiver"
      }
    ],
    "outputs": []
  },
  {
    "name": "stakeInitialUncollateralizedErc20",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "supportCErcStakingMarket",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "market"
      },
      {
        "type": "address",
        "name": "stakingPool"
      },
      {
        "type": "address",
        "name": "underlyingToken"
      },
      {
        "type": "bool",
        "name": "isErc721"
      },
      {
        "type": "bool",
        "name": "isErc20"
      }
    ],
    "outputs": []
  },
  {
    "name": "supportCEtherStakingMarket",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newCEtherStakingMarket"
      }
    ],
    "outputs": []
  },
  {
    "name": "supportValidators",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "validators"
      }
    ],
    "outputs": []
  },
  {
    "name": "supportedValidators",
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
    "name": "supportedValidatorsList",
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
    "name": "totalAccruedRewards",
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
    "name": "totalAccruedRewardsRon",
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
    "name": "totalDelegatingAmountRon",
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
    "name": "totalRestakingAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract