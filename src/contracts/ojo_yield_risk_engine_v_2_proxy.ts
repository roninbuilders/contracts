import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35934,
  address: '0x710c8a3c8cb393ca24748849de3585b5c48d4d0c' as const,
  contract_name: 'OjoYieldRiskEngineFactoryV2',
  display_name: 'Ojo Yield Risk Engine V2 Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x91ee4bf3d55f8ca1ca0d92ff97193e334b0d55fc',
  created_at: 1751389264,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "baseFee_"
      },
      {
        "type": "uint256",
        "name": "feeIncrement_"
      },
      {
        "type": "uint256",
        "name": "maxFee_"
      }
    ]
  },
  {
    "name": "FailedDeployment",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "balance"
      },
      {
        "type": "uint256",
        "name": "needed"
      }
    ]
  },
  {
    "name": "OwnableInvalidOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "OwnableUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "FeeRecipientUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newFeeRecipient",
        "indexed": true
      }
    ]
  },
  {
    "name": "FeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newBaseFee",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newFeeIncrement",
        "indexed": true
      }
    ]
  },
  {
    "name": "MaxFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMaxFee",
        "indexed": true
      }
    ]
  },
  {
    "name": "OjoYieldRiskEngineCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "feed",
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
    "name": "TermsAccepted",
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
    "name": "OjoYieldRiskEngineAddresses",
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
        "type": "address"
      }
    ]
  },
  {
    "name": "acceptTerms",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "baseFee",
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
    "name": "createOjoYieldRiskEngine",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "basePriceFeed"
      },
      {
        "type": "uint256",
        "name": "yieldCap"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "ojoYieldRiskEngine"
      }
    ]
  },
  {
    "name": "feeIncrement",
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
    "name": "feeRecipient",
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
    "name": "getCurrentCreationFee",
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
    "name": "maxFee",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setFeeRecipient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newRecipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFeeStructure",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newBaseFee"
      },
      {
        "type": "uint256",
        "name": "newFeeIncrement"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMaxFee"
      }
    ],
    "outputs": []
  },
  {
    "name": "termsAccepted",
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
    "name": "totalDeployments",
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
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PRBMath_MulDiv18_Overflow",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "x"
      },
      {
        "type": "uint256",
        "name": "y"
      }
    ]
  },
  {
    "name": "PRBMath_UD60x18_Exp2_InputTooBig",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "x"
      }
    ]
  },
  {
    "name": "PRBMath_UD60x18_Log_InputTooSmall",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "x"
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "version"
      }
    ]
  },
  {
    "name": "annualYieldCap",
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
    "name": "basePriceFeed",
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
    "name": "decimals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "description",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "getCurrentMaxAllowedPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int256",
        "name": "maxPrice"
      },
      {
        "type": "uint256",
        "name": "currentYieldPercent"
      }
    ]
  },
  {
    "name": "getRoundData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint80",
        "name": "_roundId"
      }
    ],
    "outputs": [
      {
        "type": "uint80",
        "name": "roundId"
      },
      {
        "type": "int256",
        "name": "answer"
      },
      {
        "type": "uint256",
        "name": "startedAt"
      },
      {
        "type": "uint256",
        "name": "updatedAt"
      },
      {
        "type": "uint80",
        "name": "answeredInRound"
      }
    ]
  },
  {
    "name": "initialPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int256"
      }
    ]
  },
  {
    "name": "initialTimestamp",
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
        "name": "_basePriceFeed"
      },
      {
        "type": "uint256",
        "name": "_annualYieldCap"
      }
    ],
    "outputs": []
  },
  {
    "name": "latestRound",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint80"
      }
    ]
  },
  {
    "name": "latestRoundData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint80",
        "name": "roundId"
      },
      {
        "type": "int256",
        "name": "answer"
      },
      {
        "type": "uint256",
        "name": "startedAt"
      },
      {
        "type": "uint256",
        "name": "updatedAt"
      },
      {
        "type": "uint80",
        "name": "answeredInRound"
      }
    ]
  },
  {
    "name": "version",
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