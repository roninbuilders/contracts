import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35552,
  address: '0x6107f652f46322b093956763518bf7931c170408' as const,
  contract_name: 'RoninTransparentProxy',
  display_name: 'VRFV2 Plus Relayer Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x47f562245e252bf3dc19fd35b0c1aba8cd94e70f',
  created_at: 1750143975,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "logic"
      },
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ]
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "ERC1967InvalidAdmin",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      }
    ]
  },
  {
    "name": "ERC1967InvalidImplementation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      }
    ]
  },
  {
    "name": "ERC1967NonPayable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyAdmin",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ProxyDeniedAdminAccess",
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
    "name": "functionDelegateCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
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
        "type": "uint256",
        "name": "_subId"
      }
    ]
  },
  {
    "name": "AlreadyDisabled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedToTransferLink",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedToTransferNative",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeeTooLow",
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
    "name": "InvalidExtraArgsTag",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidLinkWeiPrice",
    "type": "error",
    "inputs": []
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
    "name": "LinkPaymentNotSupported",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotConfigured",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NumWordsTooHigh",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCallableFromLINK",
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
    "name": "RequestNotFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RequestNotFulfilledYet",
    "type": "error",
    "inputs": []
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
        "name": "relayerGasOverhead"
      },
      {
        "type": "uint16",
        "name": "relayerGasOverheadForRetryPerWord"
      },
      {
        "type": "uint16",
        "name": "relayerGasOverheadForRefund"
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
    "name": "FulfillmentFailed",
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
      },
      {
        "type": "address",
        "name": "refunder",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isLinkMode"
      },
      {
        "type": "uint256",
        "name": "callbackGasLimit"
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
    "name": "LinkPaymentStatusSet",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "enableLink"
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
    "name": "OwnershipTransferStarted",
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
    "name": "PriceFeedLinkFallbackSet",
    "type": "event",
    "inputs": [
      {
        "type": "int256",
        "name": "fallbackWeiPerUnitLink"
      },
      {
        "type": "uint32",
        "name": "stalenessSeconds"
      }
    ]
  },
  {
    "name": "RefundFailed",
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
      },
      {
        "type": "address",
        "name": "refunder",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "RetrySuccess",
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
      },
      {
        "type": "uint256",
        "name": "callbackGasLimit"
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
    "name": "GAS_FOR_CALL_EXACT_CHECK",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16"
      }
    ]
  },
  {
    "name": "GAS_FOR_NATIVE_TRANSFER",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16"
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
    "stateMutability": "view",
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
        "name": "relayerGasOverhead"
      },
      {
        "type": "uint16",
        "name": "relayerGasOverheadForRetryPerWord"
      },
      {
        "type": "uint16",
        "name": "relayerGasOverheadForRefund"
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
        "name": "relayerNativePremiumPercentage"
      },
      {
        "type": "uint8",
        "name": "relayerLinkPremiumPercentage"
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
    "name": "getRetryInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "callbackAddress"
      },
      {
        "type": "address",
        "name": "refunder"
      },
      {
        "type": "uint64",
        "name": "requestGasPrice"
      },
      {
        "type": "bool",
        "name": "isLinkMode"
      },
      {
        "type": "uint256[]",
        "name": "randomWords"
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
        "name": "owner_"
      },
      {
        "type": "address",
        "name": "vrfCoordinator_"
      },
      {
        "type": "bool",
        "name": "enableLink_"
      }
    ],
    "outputs": []
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
    "name": "pendingOwner",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
    "name": "retryFulfillRandomWords",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_requestId"
      },
      {
        "type": "uint256",
        "name": "_callbackGasLimit"
      }
    ],
    "outputs": []
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
    "name": "s_enableLink",
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
    "name": "s_retryInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "callbackAddress"
      },
      {
        "type": "address",
        "name": "refunder"
      },
      {
        "type": "uint64",
        "name": "requestGasPrice"
      },
      {
        "type": "bool",
        "name": "isLinkMode"
      },
      {
        "type": "bool",
        "name": "isFulfilled"
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
        "name": "relayerGasOverhead"
      },
      {
        "type": "uint16",
        "name": "relayerGasOverheadForRetryPerWord"
      },
      {
        "type": "uint16",
        "name": "relayerGasOverheadForRefund"
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
        "name": "fulfillmentFlatFeeNativePPM"
      },
      {
        "type": "uint32",
        "name": "fulfillmentFlatFeeLinkDiscountPPM"
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
    "name": "setEnableLink",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "enableLink"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPriceFeedLinkFallback",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "int256",
        "name": "fallbackWeiPerUnitLink"
      },
      {
        "type": "uint32",
        "name": "stalenessSeconds"
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