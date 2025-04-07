import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 152,
  address: '0xc768423a2ae2b5024cb58f3d6449a8f5db6d8816' as const,
  contract_name: 'TransparentUpgradeableProxyV2',
  display_name: 'Ronin Staking Vesting',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x945aa80ed35897d2210c5d85fe204f439374935d',
  created_at: 1679636576,
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
    "name": "functionDelegateCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "_data"
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
    "name": "ErrBonusAlreadySent",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrContractTypeNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      }
    ]
  },
  {
    "name": "ErrInsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "uint256",
        "name": "currentBalance"
      },
      {
        "type": "uint256",
        "name": "sendAmount"
      }
    ]
  },
  {
    "name": "ErrInvalidArguments",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrRecipientRevert",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrUnauthorized",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "uint8",
        "name": "expectedRole"
      }
    ]
  },
  {
    "name": "ErrUnexpectedInternalCall",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "uint8",
        "name": "expectedContractType"
      },
      {
        "type": "address",
        "name": "actual"
      }
    ]
  },
  {
    "name": "ErrZeroCodeContract",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ]
  },
  {
    "name": "BlockProducerBonusPerBlockUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "BonusTransferFailed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "blockNumber",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "blockProducerAmount"
      },
      {
        "type": "uint256",
        "name": "bridgeOperatorAmount"
      },
      {
        "type": "uint256",
        "name": "contractBalance"
      }
    ]
  },
  {
    "name": "BonusTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "blockNumber",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "blockProducerAmount"
      },
      {
        "type": "uint256",
        "name": "bridgeOperatorAmount"
      }
    ]
  },
  {
    "name": "BridgeOperatorBonusPerBlockUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "ContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType",
        "indexed": true
      },
      {
        "type": "address",
        "name": "addr",
        "indexed": true
      }
    ]
  },
  {
    "name": "FastFinalityRewardPercentageUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "FastFinalityRewardPercentageUpdatedForREP10",
    "type": "event",
    "inputs": [
      {
        "type": "uint256"
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
    "name": "REP10FastFinalityRewardActivated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "period"
      },
      {
        "type": "uint256",
        "name": "fastFinalityPercentage"
      }
    ]
  },
  {
    "name": "blockProducerBlockBonus",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "bridgeOperatorBlockBonus",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "fastFinalityRewardPercentage",
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
    "name": "getContract",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "contract_"
      }
    ]
  },
  {
    "name": "getREP10ActivatedAtPeriod",
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
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "validatorContract"
      },
      {
        "type": "uint256",
        "name": "blockProducerBonusPerBlock"
      },
      {
        "type": "uint256",
        "name": "bridgeOperatorBonusPerBlock"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "initializeV3",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "fastFinalityRewardPercent"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV4",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "activatedAtPeriod"
      },
      {
        "type": "uint256",
        "name": "fastFinalityRewardPercentREP10"
      }
    ],
    "outputs": []
  },
  {
    "name": "lastBlockSendingBonus",
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
    "name": "receiveRON",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "requestBonus",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "forBlockProducer"
      },
      {
        "type": "bool",
        "name": "forBridgeOperator"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "success"
      },
      {
        "type": "uint256",
        "name": "blockProducerBonus"
      },
      {
        "type": "uint256",
        "name": "bridgeOperatorBonus"
      },
      {
        "type": "uint256",
        "name": "fastFinalityRewardPercent"
      }
    ]
  },
  {
    "name": "setBlockProducerBonusPerBlock",
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
    "name": "setBridgeOperatorBonusPerBlock",
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
    "name": "setContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      },
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFastFinalityRewardPercentage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "percent"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract