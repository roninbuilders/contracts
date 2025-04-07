import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 7194,
  address: '0xdeb3d86bfe3bc5656fed29515a25949f8ae62292' as const,
  contract_name: 'AccessControlledOCR2Aggregator',
  display_name: 'Access Controlled OCR2 Aggregator',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1736952363,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_link"
      },
      {
        "type": "int192",
        "name": "_minAnswer"
      },
      {
        "type": "int192",
        "name": "_maxAnswer"
      },
      {
        "type": "address",
        "name": "_billingAccessController"
      },
      {
        "type": "address",
        "name": "_requesterAccessController"
      },
      {
        "type": "uint8",
        "name": "_decimals"
      },
      {
        "type": "string",
        "name": "description"
      }
    ]
  },
  {
    "name": "AddedAccess",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ]
  },
  {
    "name": "AnswerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "int256",
        "name": "current",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "roundId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "updatedAt"
      }
    ]
  },
  {
    "name": "BillingAccessControllerSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "old"
      },
      {
        "type": "address",
        "name": "current"
      }
    ]
  },
  {
    "name": "BillingSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "maximumGasPriceGwei"
      },
      {
        "type": "uint32",
        "name": "reasonableGasPriceGwei"
      },
      {
        "type": "uint32",
        "name": "observationPaymentGjuels"
      },
      {
        "type": "uint32",
        "name": "transmissionPaymentGjuels"
      },
      {
        "type": "uint24",
        "name": "accountingGas"
      }
    ]
  },
  {
    "name": "CheckAccessDisabled",
    "type": "event",
    "inputs": []
  },
  {
    "name": "CheckAccessEnabled",
    "type": "event",
    "inputs": []
  },
  {
    "name": "ConfigSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "previousConfigBlockNumber"
      },
      {
        "type": "bytes32",
        "name": "configDigest"
      },
      {
        "type": "uint64",
        "name": "configCount"
      },
      {
        "type": "address[]",
        "name": "signers"
      },
      {
        "type": "address[]",
        "name": "transmitters"
      },
      {
        "type": "uint8",
        "name": "f"
      },
      {
        "type": "bytes",
        "name": "onchainConfig"
      },
      {
        "type": "uint64",
        "name": "offchainConfigVersion"
      },
      {
        "type": "bytes",
        "name": "offchainConfig"
      }
    ]
  },
  {
    "name": "LinkTokenSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldLinkToken",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newLinkToken",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewRound",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "roundId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "startedBy",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "startedAt"
      }
    ]
  },
  {
    "name": "NewTransmission",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "aggregatorRoundId",
        "indexed": true
      },
      {
        "type": "int192",
        "name": "answer"
      },
      {
        "type": "address",
        "name": "transmitter"
      },
      {
        "type": "uint32",
        "name": "observationsTimestamp"
      },
      {
        "type": "int192[]",
        "name": "observations"
      },
      {
        "type": "bytes",
        "name": "observers"
      },
      {
        "type": "int192",
        "name": "juelsPerFeeCoin"
      },
      {
        "type": "bytes32",
        "name": "configDigest"
      },
      {
        "type": "uint40",
        "name": "epochAndRound"
      }
    ]
  },
  {
    "name": "OraclePaid",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "transmitter",
        "indexed": true
      },
      {
        "type": "address",
        "name": "payee",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "linkToken",
        "indexed": true
      }
    ]
  },
  {
    "name": "OwnershipTransferRequested",
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
    "name": "OwnershipTransferred",
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
    "name": "PayeeshipTransferRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "transmitter",
        "indexed": true
      },
      {
        "type": "address",
        "name": "current",
        "indexed": true
      },
      {
        "type": "address",
        "name": "proposed",
        "indexed": true
      }
    ]
  },
  {
    "name": "PayeeshipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "transmitter",
        "indexed": true
      },
      {
        "type": "address",
        "name": "previous",
        "indexed": true
      },
      {
        "type": "address",
        "name": "current",
        "indexed": true
      }
    ]
  },
  {
    "name": "RemovedAccess",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ]
  },
  {
    "name": "RequesterAccessControllerSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "old"
      },
      {
        "type": "address",
        "name": "current"
      }
    ]
  },
  {
    "name": "RoundRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "requester",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "configDigest"
      },
      {
        "type": "uint32",
        "name": "epoch"
      },
      {
        "type": "uint8",
        "name": "round"
      }
    ]
  },
  {
    "name": "Transmitted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "configDigest"
      },
      {
        "type": "uint32",
        "name": "epoch"
      }
    ]
  },
  {
    "name": "ValidatorConfigSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousValidator",
        "indexed": true
      },
      {
        "type": "uint32",
        "name": "previousGasLimit"
      },
      {
        "type": "address",
        "name": "currentValidator",
        "indexed": true
      },
      {
        "type": "uint32",
        "name": "currentGasLimit"
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
    "name": "acceptPayeeship",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "transmitter"
      }
    ],
    "outputs": []
  },
  {
    "name": "addAccess",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkEnabled",
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
    "name": "disableAccessCheck",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "enableAccessCheck",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "getAnswer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_roundId"
      }
    ],
    "outputs": [
      {
        "type": "int256"
      }
    ]
  },
  {
    "name": "getBilling",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32",
        "name": "maximumGasPriceGwei"
      },
      {
        "type": "uint32",
        "name": "reasonableGasPriceGwei"
      },
      {
        "type": "uint32",
        "name": "observationPaymentGjuels"
      },
      {
        "type": "uint32",
        "name": "transmissionPaymentGjuels"
      },
      {
        "type": "uint24",
        "name": "accountingGas"
      }
    ]
  },
  {
    "name": "getBillingAccessController",
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
    "name": "getLinkToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "linkToken"
      }
    ]
  },
  {
    "name": "getRequesterAccessController",
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
    "name": "getTimestamp",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_roundId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getTransmitters",
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
    "name": "getValidatorConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "validator"
      },
      {
        "type": "uint32",
        "name": "gasLimit"
      }
    ]
  },
  {
    "name": "hasAccess",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      },
      {
        "type": "bytes",
        "name": "_calldata"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "latestAnswer",
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
    "name": "latestConfigDetails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32",
        "name": "configCount"
      },
      {
        "type": "uint32",
        "name": "blockNumber"
      },
      {
        "type": "bytes32",
        "name": "configDigest"
      }
    ]
  },
  {
    "name": "latestConfigDigestAndEpoch",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "scanLogs"
      },
      {
        "type": "bytes32",
        "name": "configDigest"
      },
      {
        "type": "uint32",
        "name": "epoch"
      }
    ]
  },
  {
    "name": "latestRound",
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
    "name": "latestTimestamp",
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
    "name": "latestTransmissionDetails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32",
        "name": "configDigest"
      },
      {
        "type": "uint32",
        "name": "epoch"
      },
      {
        "type": "uint8",
        "name": "round"
      },
      {
        "type": "int192",
        "name": "latestAnswer_"
      },
      {
        "type": "uint64",
        "name": "latestTimestamp_"
      }
    ]
  },
  {
    "name": "linkAvailableForPayment",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int256",
        "name": "availableBalance"
      }
    ]
  },
  {
    "name": "maxAnswer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int192"
      }
    ]
  },
  {
    "name": "minAnswer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int192"
      }
    ]
  },
  {
    "name": "oracleObservationCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "transmitterAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "owedPayment",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "transmitterAddress"
      }
    ],
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
    "name": "removeAccess",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": []
  },
  {
    "name": "requestNewRound",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "uint80"
      }
    ]
  },
  {
    "name": "setBilling",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "maximumGasPriceGwei"
      },
      {
        "type": "uint32",
        "name": "reasonableGasPriceGwei"
      },
      {
        "type": "uint32",
        "name": "observationPaymentGjuels"
      },
      {
        "type": "uint32",
        "name": "transmissionPaymentGjuels"
      },
      {
        "type": "uint24",
        "name": "accountingGas"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBillingAccessController",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_billingAccessController"
      }
    ],
    "outputs": []
  },
  {
    "name": "setConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "signers"
      },
      {
        "type": "address[]",
        "name": "transmitters"
      },
      {
        "type": "uint8",
        "name": "f"
      },
      {
        "type": "bytes",
        "name": "onchainConfig"
      },
      {
        "type": "uint64",
        "name": "offchainConfigVersion"
      },
      {
        "type": "bytes",
        "name": "offchainConfig"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLinkToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "linkToken"
      },
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPayees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "transmitters"
      },
      {
        "type": "address[]",
        "name": "payees"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRequesterAccessController",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "requesterAccessController"
      }
    ],
    "outputs": []
  },
  {
    "name": "setValidatorConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newValidator"
      },
      {
        "type": "uint32",
        "name": "newGasLimit"
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
        "name": "to"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferPayeeship",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "transmitter"
      },
      {
        "type": "address",
        "name": "proposed"
      }
    ],
    "outputs": []
  },
  {
    "name": "transmit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[3]",
        "name": "reportContext"
      },
      {
        "type": "bytes",
        "name": "report"
      },
      {
        "type": "bytes32[]",
        "name": "rs"
      },
      {
        "type": "bytes32[]",
        "name": "ss"
      },
      {
        "type": "bytes32",
        "name": "rawVs"
      }
    ],
    "outputs": []
  },
  {
    "name": "typeAndVersion",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
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
  },
  {
    "name": "withdrawFunds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawPayment",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "transmitter"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract