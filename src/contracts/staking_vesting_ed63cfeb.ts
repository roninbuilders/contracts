import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 161,
  address: '0xf07121671f929d89ea6caee8e3d26bd7ed63cfeb' as const,
  contract_name: 'StakingVesting',
  display_name: 'Staking Vesting',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1679636498,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ErrCallerMustBeValidatorContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInsufficientBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrRecipientRevert",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrZeroCodeContract",
    "type": "error",
    "inputs": []
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
    "name": "ValidatorContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address"
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "__validatorContract"
      },
      {
        "type": "uint256",
        "name": "__blockProducerBonusPerBlock"
      },
      {
        "type": "uint256",
        "name": "__bridgeOperatorBonusPerBlock"
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
        "name": "_forBlockProducer"
      },
      {
        "type": "bool",
        "name": "_forBridgeOperator"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "_success"
      },
      {
        "type": "uint256",
        "name": "_blockProducerBonus"
      },
      {
        "type": "uint256",
        "name": "_bridgeOperatorBonus"
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
        "name": "_amount"
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
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "setValidatorContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "validatorContract",
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