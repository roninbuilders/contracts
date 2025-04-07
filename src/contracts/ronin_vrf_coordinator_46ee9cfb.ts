import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 457,
  address: '0xf9f93977d8289f1f7c88a1ca4274f79c46ee9cfb' as const,
  contract_name: 'RoninVRFCoordinator',
  display_name: 'Ronin VRF Coordinator',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1692000351,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "CallerIsNotAConsumer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnauthorizedConsumer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientFee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidArrayLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidGasPrice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidProofSeed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRefundAddress",
    "type": "error",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "InvalidSender",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RONTransferFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "RandomRequestAlreadyFinalized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RequestHashNotFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "WrongRandomRequest",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AddressWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_address",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "_status",
        "indexed": true
      }
    ]
  },
  {
    "name": "ConstantFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_constantFee"
      }
    ]
  },
  {
    "name": "GasAfterPaymentCalculationUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_gasCost"
      }
    ]
  },
  {
    "name": "GasToEstimateRandomFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_gasCost"
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
    "name": "OraclesAdded",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "keyHashList"
      },
      {
        "type": "address[]",
        "name": "oracleAddrList"
      }
    ]
  },
  {
    "name": "OraclesRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "keyHashList"
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
    "name": "RandomSeedFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "randomSeed"
      },
      {
        "type": "uint256",
        "name": "requestValue"
      },
      {
        "type": "uint256",
        "name": "refundAmount"
      },
      {
        "type": "uint256",
        "name": "paymentAmount"
      },
      {
        "type": "uint256",
        "name": "constantFee"
      },
      {
        "type": "bool",
        "name": "callbackResult"
      }
    ]
  },
  {
    "name": "RandomSeedRequested",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "request",
        "components": [
          {
            "type": "uint256",
            "name": "blockNumber"
          },
          {
            "type": "uint256",
            "name": "callbackGasLimit"
          },
          {
            "type": "uint256",
            "name": "gasPrice"
          },
          {
            "type": "uint256",
            "name": "gasFee"
          },
          {
            "type": "address",
            "name": "requester"
          },
          {
            "type": "address",
            "name": "consumer"
          },
          {
            "type": "address",
            "name": "refundAddr"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "constantFee"
          }
        ]
      }
    ]
  },
  {
    "name": "TreasuryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_treasury"
      }
    ]
  },
  {
    "name": "WhitelistAllChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "_status",
        "indexed": true
      }
    ]
  },
  {
    "name": "addOracles",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "_keyHashList"
      },
      {
        "type": "address[]",
        "name": "_oracleAddrList"
      }
    ],
    "outputs": []
  },
  {
    "name": "constantFee",
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
    "name": "estimateRequestRandomFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_callbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "_gasPrice"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "fulfillRandomSeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_proof",
        "components": [
          {
            "type": "uint256[2]",
            "name": "pk"
          },
          {
            "type": "uint256[2]",
            "name": "gamma"
          },
          {
            "type": "uint256",
            "name": "c"
          },
          {
            "type": "uint256",
            "name": "s"
          },
          {
            "type": "uint256",
            "name": "seed"
          },
          {
            "type": "address",
            "name": "uWitness"
          },
          {
            "type": "uint256[2]",
            "name": "cGammaWitness"
          },
          {
            "type": "uint256[2]",
            "name": "sHashWitness"
          },
          {
            "type": "uint256",
            "name": "zInv"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "_req",
        "components": [
          {
            "type": "uint256",
            "name": "blockNumber"
          },
          {
            "type": "uint256",
            "name": "callbackGasLimit"
          },
          {
            "type": "uint256",
            "name": "gasPrice"
          },
          {
            "type": "uint256",
            "name": "gasFee"
          },
          {
            "type": "address",
            "name": "requester"
          },
          {
            "type": "address",
            "name": "consumer"
          },
          {
            "type": "address",
            "name": "refundAddr"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "constantFee"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_paymentAmount"
      }
    ]
  },
  {
    "name": "gasAfterPaymentCalculation",
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
    "name": "gasToEstimateRandomFee",
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
    "name": "getRandomRequestHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_consumer"
      },
      {
        "type": "uint256",
        "name": "_nonce"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "_hash"
      }
    ]
  },
  {
    "name": "getRandomRequestNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_consumer"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "nonce"
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
        "name": "_admin"
      },
      {
        "type": "uint256",
        "name": "_gasToEstimateRandomFee"
      },
      {
        "type": "uint256",
        "name": "_gasAfterPaymentCalculation"
      },
      {
        "type": "uint256",
        "name": "_constantFee"
      },
      {
        "type": "address",
        "name": "_treasury"
      }
    ],
    "outputs": []
  },
  {
    "name": "isWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_address"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "keyHash",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256[2]",
        "name": "publicKey"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "oracleAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_keyHash"
      }
    ],
    "outputs": [
      {
        "type": "address"
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
    "name": "removeOracles",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "_keyHashList"
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
    "name": "requestFinalized",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_reqHash"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "requestRandomSeed",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_callbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "_gasPrice"
      },
      {
        "type": "address",
        "name": "_consumer"
      },
      {
        "type": "address",
        "name": "_refundAddress"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "_reqHash"
      }
    ]
  },
  {
    "name": "setConstantFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_constantFee"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGasAfterPaymentCalculation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_gas"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGasToEstimateRandomFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_gas"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_treasury"
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
    "name": "treasury",
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
    "name": "whitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_address"
      },
      {
        "type": "bool",
        "name": "_status"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistAllAddresses",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_status"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelisted",
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
    "name": "whitelistedAll",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract