import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34609,
  address: '0x3b7d0d0cec08ebf8dad58acca4719791378b2329' as const,
  contract_name: 'VRFV2PlusWrapper',
  display_name: 'VRFV2 Plus Wrapper',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1746321977,
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
        "type": "address",
        "name": "_linkNativeFeed"
      },
      {
        "type": "address",
        "name": "_coordinator"
      },
      {
        "type": "uint256",
        "name": "_subId"
      }
    ]
  },
  {
    "name": "FailedToTransferLink",
    "type": "error",
    "inputs": []
  },
  {
    "name": "IncorrectExtraArgsLength",
    "type": "error",
    "inputs": [
      {
        "type": "uint16",
        "name": "expectedMinimumLength"
      },
      {
        "type": "uint16",
        "name": "actualLength"
      }
    ]
  },
  {
    "name": "InvalidPremiumPercentage",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "premiumPercentage"
      },
      {
        "type": "uint8",
        "name": "max"
      }
    ]
  },
  {
    "name": "LINKPaymentInRequestRandomWordsInNative",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LinkAlreadySet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LinkDiscountTooHigh",
    "type": "error",
    "inputs": [
      {
        "type": "uint32",
        "name": "flatFeeLinkDiscountPPM"
      },
      {
        "type": "uint32",
        "name": "flatFeeNativePPM"
      }
    ]
  },
  {
    "name": "NativePaymentInOnTokenTransfer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "have"
      },
      {
        "type": "address",
        "name": "want"
      }
    ]
  },
  {
    "name": "OnlyOwnerOrCoordinator",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "have"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "coordinator"
      }
    ]
  },
  {
    "name": "SubscriptionIdMissing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ConfigSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "wrapperGasOverhead"
      },
      {
        "type": "uint32",
        "name": "coordinatorGasOverheadNative"
      },
      {
        "type": "uint32",
        "name": "coordinatorGasOverheadLink"
      },
      {
        "type": "uint16",
        "name": "coordinatorGasOverheadPerWord"
      },
      {
        "type": "uint8",
        "name": "coordinatorNativePremiumPercentage"
      },
      {
        "type": "uint8",
        "name": "coordinatorLinkPremiumPercentage"
      },
      {
        "type": "bytes32",
        "name": "keyHash"
      },
      {
        "type": "uint8",
        "name": "maxNumWords"
      },
      {
        "type": "uint32",
        "name": "stalenessSeconds"
      },
      {
        "type": "int256",
        "name": "fallbackWeiPerUnitLink"
      },
      {
        "type": "uint32",
        "name": "fulfillmentFlatFeeNativePPM"
      },
      {
        "type": "uint32",
        "name": "fulfillmentFlatFeeLinkDiscountPPM"
      }
    ]
  },
  {
    "name": "CoordinatorSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "vrfCoordinator"
      }
    ]
  },
  {
    "name": "Disabled",
    "type": "event",
    "inputs": []
  },
  {
    "name": "Enabled",
    "type": "event",
    "inputs": []
  },
  {
    "name": "FallbackWeiPerUnitLinkUsed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "int256",
        "name": "fallbackWeiPerUnitLink"
      }
    ]
  },
  {
    "name": "FulfillmentTxSizeSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "size"
      }
    ]
  },
  {
    "name": "NativeWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "Withdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "WrapperFulfillmentFailed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "consumer",
        "indexed": true
      }
    ]
  },
  {
    "name": "SUBSCRIPTION_ID",
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "calculateRequestPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "_callbackGasLimit"
      },
      {
        "type": "uint32",
        "name": "_numWords"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "calculateRequestPriceNative",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "_callbackGasLimit"
      },
      {
        "type": "uint32",
        "name": "_numWords"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "checkPaymentMode",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes",
        "name": "extraArgs"
      },
      {
        "type": "bool",
        "name": "isLinkMode"
      }
    ],
    "outputs": []
  },
  {
    "name": "disable",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "enable",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "estimateRequestPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "_callbackGasLimit"
      },
      {
        "type": "uint32",
        "name": "_numWords"
      },
      {
        "type": "uint256",
        "name": "_requestGasPriceWei"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "estimateRequestPriceNative",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32",
        "name": "_callbackGasLimit"
      },
      {
        "type": "uint32",
        "name": "_numWords"
      },
      {
        "type": "uint256",
        "name": "_requestGasPriceWei"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int256",
        "name": "fallbackWeiPerUnitLink"
      },
      {
        "type": "uint32",
        "name": "stalenessSeconds"
      },
      {
        "type": "uint32",
        "name": "fulfillmentFlatFeeNativePPM"
      },
      {
        "type": "uint32",
        "name": "fulfillmentFlatFeeLinkDiscountPPM"
      },
      {
        "type": "uint32",
        "name": "wrapperGasOverhead"
      },
      {
        "type": "uint32",
        "name": "coordinatorGasOverheadNative"
      },
      {
        "type": "uint32",
        "name": "coordinatorGasOverheadLink"
      },
      {
        "type": "uint16",
        "name": "coordinatorGasOverheadPerWord"
      },
      {
        "type": "uint8",
        "name": "wrapperNativePremiumPercentage"
      },
      {
        "type": "uint8",
        "name": "wrapperLinkPremiumPercentage"
      },
      {
        "type": "bytes32",
        "name": "keyHash"
      },
      {
        "type": "uint8",
        "name": "maxNumWords"
      }
    ]
  },
  {
    "name": "lastRequestId",
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
    "name": "link",
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
    "name": "linkNativeFeed",
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
    "name": "onTokenTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_sender"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "bytes",
        "name": "_data"
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
    "name": "rawFulfillRandomWords",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256[]",
        "name": "randomWords"
      }
    ],
    "outputs": []
  },
  {
    "name": "requestRandomWordsInNative",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint32",
        "name": "_callbackGasLimit"
      },
      {
        "type": "uint16",
        "name": "_requestConfirmations"
      },
      {
        "type": "uint32",
        "name": "_numWords"
      },
      {
        "type": "bytes",
        "name": "extraArgs"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "requestId"
      }
    ]
  },
  {
    "name": "s_callbacks",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "callbackAddress"
      },
      {
        "type": "uint32",
        "name": "callbackGasLimit"
      },
      {
        "type": "uint64",
        "name": "requestGasPrice"
      }
    ]
  },
  {
    "name": "s_configured",
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
    "name": "s_disabled",
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
    "name": "s_fulfillmentTxSizeBytes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "s_vrfCoordinator",
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
    "name": "setConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "_wrapperGasOverhead"
      },
      {
        "type": "uint32",
        "name": "_coordinatorGasOverheadNative"
      },
      {
        "type": "uint32",
        "name": "_coordinatorGasOverheadLink"
      },
      {
        "type": "uint16",
        "name": "_coordinatorGasOverheadPerWord"
      },
      {
        "type": "uint8",
        "name": "_coordinatorNativePremiumPercentage"
      },
      {
        "type": "uint8",
        "name": "_coordinatorLinkPremiumPercentage"
      },
      {
        "type": "bytes32",
        "name": "_keyHash"
      },
      {
        "type": "uint8",
        "name": "_maxNumWords"
      },
      {
        "type": "uint32",
        "name": "_stalenessSeconds"
      },
      {
        "type": "int256",
        "name": "_fallbackWeiPerUnitLink"
      },
      {
        "type": "uint32",
        "name": "_fulfillmentFlatFeeNativePPM"
      },
      {
        "type": "uint32",
        "name": "_fulfillmentFlatFeeLinkDiscountPPM"
      }
    ],
    "outputs": []
  },
  {
    "name": "setCoordinator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_vrfCoordinator"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFulfillmentTxSize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "_size"
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
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawNative",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_recipient"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract