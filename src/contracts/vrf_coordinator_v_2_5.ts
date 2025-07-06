import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34605,
  address: '0xa18fd3db9b869ad2a8c55267e0d54dbf6ecebeda' as const,
  contract_name: 'VRFCoordinatorV2_5',
  display_name: 'VRF Coordinator V2_5',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1746320657,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "blockhashStore"
      }
    ]
  },
  {
    "name": "BalanceInvariantViolated",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "internalBalance"
      },
      {
        "type": "uint256",
        "name": "externalBalance"
      }
    ]
  },
  {
    "name": "BlockhashNotInStore",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "blockNum"
      }
    ]
  },
  {
    "name": "CoordinatorAlreadyRegistered",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "coordinatorAddress"
      }
    ]
  },
  {
    "name": "CoordinatorNotRegistered",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "coordinatorAddress"
      }
    ]
  },
  {
    "name": "FailedToSendNative",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedToTransferLink",
    "type": "error",
    "inputs": []
  },
  {
    "name": "GasLimitTooBig",
    "type": "error",
    "inputs": [
      {
        "type": "uint32",
        "name": "have"
      },
      {
        "type": "uint32",
        "name": "want"
      }
    ]
  },
  {
    "name": "GasPriceExceeded",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "gasPrice"
      },
      {
        "type": "uint256",
        "name": "maxGas"
      }
    ]
  },
  {
    "name": "IncorrectCommitment",
    "type": "error",
    "inputs": []
  },
  {
    "name": "IndexOutOfRange",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidCalldata",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidConsumer",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId"
      },
      {
        "type": "address",
        "name": "consumer"
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
    "inputs": [
      {
        "type": "int256",
        "name": "linkWei"
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
    "name": "InvalidRequestConfirmations",
    "type": "error",
    "inputs": [
      {
        "type": "uint16",
        "name": "have"
      },
      {
        "type": "uint16",
        "name": "min"
      },
      {
        "type": "uint16",
        "name": "max"
      }
    ]
  },
  {
    "name": "InvalidSubscription",
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
    "name": "LinkNotSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MsgDataTooBig",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "have"
      },
      {
        "type": "uint32",
        "name": "max"
      }
    ]
  },
  {
    "name": "MustBeRequestedOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "proposedOwner"
      }
    ]
  },
  {
    "name": "MustBeSubOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "NoCorrespondingRequest",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoSuchProvingKey",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyHash"
      }
    ]
  },
  {
    "name": "NumWordsTooBig",
    "type": "error",
    "inputs": [
      {
        "type": "uint32",
        "name": "have"
      },
      {
        "type": "uint32",
        "name": "want"
      }
    ]
  },
  {
    "name": "OnlyCallableFromLink",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PaymentTooLarge",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PendingRequestExists",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ProvingKeyAlreadyRegistered",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyHash"
      }
    ]
  },
  {
    "name": "Reentrant",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TooManyConsumers",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ConfigSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint16",
        "name": "minimumRequestConfirmations"
      },
      {
        "type": "uint32",
        "name": "maxGasLimit"
      },
      {
        "type": "uint32",
        "name": "stalenessSeconds"
      },
      {
        "type": "uint32",
        "name": "gasAfterPaymentCalculation"
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
      },
      {
        "type": "uint8",
        "name": "nativePremiumPercentage"
      },
      {
        "type": "uint8",
        "name": "linkPremiumPercentage"
      }
    ]
  },
  {
    "name": "CoordinatorDeregistered",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "coordinatorAddress"
      }
    ]
  },
  {
    "name": "CoordinatorRegistered",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "coordinatorAddress"
      }
    ]
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
    "name": "FundsRecovered",
    "type": "event",
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
    "name": "L1GasFee",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "fee"
      }
    ]
  },
  {
    "name": "MigrationCompleted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newCoordinator"
      },
      {
        "type": "uint256",
        "name": "subId"
      }
    ]
  },
  {
    "name": "NativeFundsRecovered",
    "type": "event",
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
    "name": "ProvingKeyDeregistered",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyHash"
      },
      {
        "type": "uint64",
        "name": "maxGas"
      }
    ]
  },
  {
    "name": "ProvingKeyRegistered",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyHash"
      },
      {
        "type": "uint64",
        "name": "maxGas"
      }
    ]
  },
  {
    "name": "RandomWordsFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "outputSeed"
      },
      {
        "type": "uint256",
        "name": "subId",
        "indexed": true
      },
      {
        "type": "uint96",
        "name": "payment"
      },
      {
        "type": "bool",
        "name": "nativePayment"
      },
      {
        "type": "bool",
        "name": "success"
      },
      {
        "type": "bool",
        "name": "onlyPremium"
      }
    ]
  },
  {
    "name": "RandomWordsRequested",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "preSeed"
      },
      {
        "type": "uint256",
        "name": "subId",
        "indexed": true
      },
      {
        "type": "uint16",
        "name": "minimumRequestConfirmations"
      },
      {
        "type": "uint32",
        "name": "callbackGasLimit"
      },
      {
        "type": "uint32",
        "name": "numWords"
      },
      {
        "type": "bytes",
        "name": "extraArgs"
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "SubscriptionCanceled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amountLink"
      },
      {
        "type": "uint256",
        "name": "amountNative"
      }
    ]
  },
  {
    "name": "SubscriptionConsumerAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "consumer"
      }
    ]
  },
  {
    "name": "SubscriptionConsumerRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "consumer"
      }
    ]
  },
  {
    "name": "SubscriptionCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "SubscriptionFunded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "oldBalance"
      },
      {
        "type": "uint256",
        "name": "newBalance"
      }
    ]
  },
  {
    "name": "SubscriptionFundedWithNative",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "oldNativeBalance"
      },
      {
        "type": "uint256",
        "name": "newNativeBalance"
      }
    ]
  },
  {
    "name": "SubscriptionOwnerTransferRequested",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      }
    ]
  },
  {
    "name": "SubscriptionOwnerTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      }
    ]
  },
  {
    "name": "BLOCKHASH_STORE",
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
    "name": "LINK",
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
    "name": "LINK_NATIVE_FEED",
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
    "name": "MAX_CONSUMERS",
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
    "name": "MAX_NUM_WORDS",
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
    "name": "MAX_REQUEST_CONFIRMATIONS",
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "acceptSubscriptionOwnerTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId"
      }
    ],
    "outputs": []
  },
  {
    "name": "addConsumer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId"
      },
      {
        "type": "address",
        "name": "consumer"
      }
    ],
    "outputs": []
  },
  {
    "name": "cancelSubscription",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId"
      },
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": []
  },
  {
    "name": "createSubscription",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "subId"
      }
    ]
  },
  {
    "name": "deregisterMigratableCoordinator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ],
    "outputs": []
  },
  {
    "name": "deregisterProvingKey",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[2]",
        "name": "publicProvingKey"
      }
    ],
    "outputs": []
  },
  {
    "name": "fulfillRandomWords",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "proof",
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
        "name": "rc",
        "components": [
          {
            "type": "uint64",
            "name": "blockNum"
          },
          {
            "type": "uint256",
            "name": "subId"
          },
          {
            "type": "uint32",
            "name": "callbackGasLimit"
          },
          {
            "type": "uint32",
            "name": "numWords"
          },
          {
            "type": "address",
            "name": "sender"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      },
      {
        "type": "bool",
        "name": "onlyPremium"
      }
    ],
    "outputs": [
      {
        "type": "uint96",
        "name": "payment"
      }
    ]
  },
  {
    "name": "fundSubscriptionWithNative",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId"
      }
    ],
    "outputs": []
  },
  {
    "name": "getActiveSubscriptionIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "startIndex"
      },
      {
        "type": "uint256",
        "name": "maxCount"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "ids"
      }
    ]
  },
  {
    "name": "getSubscription",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId"
      }
    ],
    "outputs": [
      {
        "type": "uint96",
        "name": "balance"
      },
      {
        "type": "uint96",
        "name": "nativeBalance"
      },
      {
        "type": "uint64",
        "name": "reqCount"
      },
      {
        "type": "address",
        "name": "subOwner"
      },
      {
        "type": "address[]",
        "name": "consumers"
      }
    ]
  },
  {
    "name": "hashOfKey",
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
    "name": "migrate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId"
      },
      {
        "type": "address",
        "name": "newCoordinator"
      }
    ],
    "outputs": []
  },
  {
    "name": "onTokenTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes",
        "name": "data"
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
    "name": "ownerCancelSubscription",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId"
      }
    ],
    "outputs": []
  },
  {
    "name": "pendingRequestExists",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "recoverFunds",
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
    "name": "recoverNativeFunds",
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
    "name": "registerMigratableCoordinator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ],
    "outputs": []
  },
  {
    "name": "registerProvingKey",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[2]",
        "name": "publicProvingKey"
      },
      {
        "type": "uint64",
        "name": "maxGas"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeConsumer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId"
      },
      {
        "type": "address",
        "name": "consumer"
      }
    ],
    "outputs": []
  },
  {
    "name": "requestRandomWords",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "req",
        "components": [
          {
            "type": "bytes32",
            "name": "keyHash"
          },
          {
            "type": "uint256",
            "name": "subId"
          },
          {
            "type": "uint16",
            "name": "requestConfirmations"
          },
          {
            "type": "uint32",
            "name": "callbackGasLimit"
          },
          {
            "type": "uint32",
            "name": "numWords"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
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
    "name": "requestSubscriptionOwnerTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "subId"
      },
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "s_config",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16",
        "name": "minimumRequestConfirmations"
      },
      {
        "type": "uint32",
        "name": "maxGasLimit"
      },
      {
        "type": "bool",
        "name": "reentrancyLock"
      },
      {
        "type": "uint32",
        "name": "stalenessSeconds"
      },
      {
        "type": "uint32",
        "name": "gasAfterPaymentCalculation"
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
        "type": "uint8",
        "name": "nativePremiumPercentage"
      },
      {
        "type": "uint8",
        "name": "linkPremiumPercentage"
      }
    ]
  },
  {
    "name": "s_currentSubNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "s_fallbackWeiPerUnitLink",
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
    "name": "s_provingKeyHashes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "s_provingKeys",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "exists"
      },
      {
        "type": "uint64",
        "name": "maxGas"
      }
    ]
  },
  {
    "name": "s_requestCommitments",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "s_totalBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint96"
      }
    ]
  },
  {
    "name": "s_totalNativeBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint96"
      }
    ]
  },
  {
    "name": "setConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint16",
        "name": "minimumRequestConfirmations"
      },
      {
        "type": "uint32",
        "name": "maxGasLimit"
      },
      {
        "type": "uint32",
        "name": "stalenessSeconds"
      },
      {
        "type": "uint32",
        "name": "gasAfterPaymentCalculation"
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
      },
      {
        "type": "uint8",
        "name": "nativePremiumPercentage"
      },
      {
        "type": "uint8",
        "name": "linkPremiumPercentage"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLINKAndLINKNativeFeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "link"
      },
      {
        "type": "address",
        "name": "linkNativeFeed"
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
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
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
        "name": "recipient"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract