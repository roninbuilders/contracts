import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25621,
  address: '0x2b4401e59780e44d3b1fd2d41fcb3047c830f286' as const,
  contract_name: 'Api3MarketV2',
  display_name: 'Api 3 Market V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739452319,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner_"
      },
      {
        "type": "address",
        "name": "api3ReaderProxyV1Factory_"
      },
      {
        "type": "uint256",
        "name": "maximumSubscriptionQueueLength_"
      }
    ]
  },
  {
    "name": "ECDSAInvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ECDSAInvalidSignatureLength",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "length"
      }
    ]
  },
  {
    "name": "ECDSAInvalidSignatureS",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "s"
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
    "name": "SafeCastOverflowedUintDowncast",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "bits"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "BoughtSubscription",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "subscriptionId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "dataFeedId"
      },
      {
        "type": "address",
        "name": "sponsorWallet"
      },
      {
        "type": "bytes",
        "name": "updateParameters"
      },
      {
        "type": "uint256",
        "name": "duration"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "uint256",
        "name": "paymentAmount"
      }
    ]
  },
  {
    "name": "CanceledSubscriptions",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName",
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
    "name": "RegisteredHash",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hashType",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "hashValue"
      },
      {
        "type": "uint256",
        "name": "hashTimestamp"
      }
    ]
  },
  {
    "name": "SetAirseekerRegistry",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "airseekerRegistry"
      }
    ]
  },
  {
    "name": "SetHash",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hashType",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "hashValue"
      },
      {
        "type": "uint256",
        "name": "hashTimestamp"
      }
    ]
  },
  {
    "name": "SetSigners",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hashType",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "signers"
      }
    ]
  },
  {
    "name": "UpdatedCurrentSubscriptionId",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "subscriptionId",
        "indexed": true
      }
    ]
  },
  {
    "name": "DAPI_MANAGEMENT_MERKLE_ROOT_HASH_TYPE",
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
    "name": "DAPI_PRICING_MERKLE_ROOT_HASH_TYPE",
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
    "name": "MAXIMUM_DAPI_UPDATE_AGE",
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
    "name": "SIGNED_API_URL_MERKLE_ROOT_HASH_TYPE",
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
    "name": "airseekerRegistry",
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
    "name": "api3ReaderProxyV1Factory",
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
    "name": "api3ServerV1",
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
    "name": "buySubscription",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName"
      },
      {
        "type": "bytes32",
        "name": "dataFeedId"
      },
      {
        "type": "address",
        "name": "sponsorWallet"
      },
      {
        "type": "bytes",
        "name": "updateParameters"
      },
      {
        "type": "uint256",
        "name": "duration"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "bytes",
        "name": "dapiManagementAndDapiPricingMerkleData"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "subscriptionId"
      }
    ]
  },
  {
    "name": "cancelSubscriptions",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName"
      }
    ],
    "outputs": []
  },
  {
    "name": "computeExpectedSponsorWalletBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "expectedSponsorWalletBalance"
      }
    ]
  },
  {
    "name": "computeExpectedSponsorWalletBalanceAfterSubscriptionIsAdded",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName"
      },
      {
        "type": "bytes",
        "name": "updateParameters"
      },
      {
        "type": "uint256",
        "name": "duration"
      },
      {
        "type": "uint256",
        "name": "price"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "expectedSponsorWalletBalance"
      }
    ]
  },
  {
    "name": "containsBytecode",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "dapiNameToCurrentSubscriptionId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "deployApi3ReaderProxyV1",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName"
      },
      {
        "type": "uint256",
        "name": "dappId"
      },
      {
        "type": "bytes",
        "name": "metadata"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "api3ReaderProxyV1"
      }
    ]
  },
  {
    "name": "getBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getBlockBasefee",
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
    "name": "getBlockNumber",
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
    "name": "getBlockTimestamp",
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
    "name": "getChainId",
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
    "name": "getDapiData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "dataFeedDetails"
      },
      {
        "type": "int224",
        "name": "dapiValue"
      },
      {
        "type": "uint32",
        "name": "dapiTimestamp"
      },
      {
        "type": "int224[]",
        "name": "beaconValues"
      },
      {
        "type": "uint32[]",
        "name": "beaconTimestamps"
      },
      {
        "type": "bytes[]",
        "name": "updateParameters"
      },
      {
        "type": "uint32[]",
        "name": "endTimestamps"
      },
      {
        "type": "uint224[]",
        "name": "dailyPrices"
      }
    ]
  },
  {
    "name": "getDataFeedData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dataFeedId"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "dataFeedDetails"
      },
      {
        "type": "int224",
        "name": "dataFeedValue"
      },
      {
        "type": "uint32",
        "name": "dataFeedTimestamp"
      },
      {
        "type": "int224[]",
        "name": "beaconValues"
      },
      {
        "type": "uint32[]",
        "name": "beaconTimestamps"
      }
    ]
  },
  {
    "name": "getHashValue",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hashType"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "hashValue"
      }
    ]
  },
  {
    "name": "hashTypeToSignersHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "hashes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "value"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "maximumSubscriptionQueueLength",
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
    "name": "multicall",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "returndata"
      }
    ]
  },
  {
    "name": "multicallAndBuySubscription",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "multicallData"
      },
      {
        "type": "bytes32",
        "name": "dapiName"
      },
      {
        "type": "bytes32",
        "name": "dataFeedId"
      },
      {
        "type": "address",
        "name": "sponsorWallet"
      },
      {
        "type": "bytes",
        "name": "updateParameters"
      },
      {
        "type": "uint256",
        "name": "duration"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "bytes",
        "name": "dapiManagementAndDapiPricingMerkleData"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "returndata"
      },
      {
        "type": "bytes32",
        "name": "subscriptionId"
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
    "name": "registerDataFeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "dataFeedDetails"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "dataFeedId"
      }
    ]
  },
  {
    "name": "registerHash",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hashType"
      },
      {
        "type": "bytes32",
        "name": "hashValue"
      },
      {
        "type": "uint256",
        "name": "hashTimestamp"
      },
      {
        "type": "bytes[]",
        "name": "signatures"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setAirseekerRegistry",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "airseekerRegistry_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setHash",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hashType"
      },
      {
        "type": "bytes32",
        "name": "hashValue"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSigners",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hashType"
      },
      {
        "type": "address[]",
        "name": "signers"
      }
    ],
    "outputs": []
  },
  {
    "name": "signatureDelegationHashType",
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
    "name": "subscriptionIdToUpdateParameters",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "subscriptionId"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "updateParameters"
      }
    ]
  },
  {
    "name": "subscriptions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "updateParametersHash"
      },
      {
        "type": "uint32",
        "name": "endTimestamp"
      },
      {
        "type": "uint224",
        "name": "dailyPrice"
      },
      {
        "type": "bytes32",
        "name": "nextSubscriptionId"
      }
    ]
  },
  {
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": []
  },
  {
    "name": "tryMulticall",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "successes"
      },
      {
        "type": "bytes[]",
        "name": "returndata"
      }
    ]
  },
  {
    "name": "tryMulticallAndBuySubscription",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "tryMulticallData"
      },
      {
        "type": "bytes32",
        "name": "dapiName"
      },
      {
        "type": "bytes32",
        "name": "dataFeedId"
      },
      {
        "type": "address",
        "name": "sponsorWallet"
      },
      {
        "type": "bytes",
        "name": "updateParameters"
      },
      {
        "type": "uint256",
        "name": "duration"
      },
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "bytes",
        "name": "dapiManagementAndDapiPricingMerkleData"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "successes"
      },
      {
        "type": "bytes[]",
        "name": "returndata"
      },
      {
        "type": "bytes32",
        "name": "subscriptionId"
      }
    ]
  },
  {
    "name": "updateBeaconSetWithBeacons",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "beaconIds"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "beaconSetId"
      }
    ]
  },
  {
    "name": "updateBeaconWithSignedData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "airnode"
      },
      {
        "type": "bytes32",
        "name": "templateId"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "beaconId"
      }
    ]
  },
  {
    "name": "updateCurrentSubscriptionId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateDapiName",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName"
      },
      {
        "type": "bytes32",
        "name": "dataFeedId"
      },
      {
        "type": "address",
        "name": "sponsorWallet"
      },
      {
        "type": "bytes",
        "name": "dapiManagementMerkleData"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateSignedApiUrl",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "airnode"
      },
      {
        "type": "string",
        "name": "signedApiUrl"
      },
      {
        "type": "bytes",
        "name": "signedApiUrlMerkleData"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract