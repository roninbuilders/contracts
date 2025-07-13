import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35550,
  address: '0x0a6b26a6cfc2064e9e5e88cf0e4b7aed9ceb0532' as const,
  contract_name: 'VRFV2PlusConsumerLoadTestMock',
  display_name: 'VRFV2 Plus Consumer Load Test Mock',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1750143975,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_vrfV2PlusWrapper"
      }
    ]
  },
  {
    "name": "OnlyVRFWrapperCanFulfill",
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
    "name": "WrappedRequestFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256[]",
        "name": "randomWords"
      },
      {
        "type": "uint256",
        "name": "payment"
      }
    ]
  },
  {
    "name": "WrapperRequestMade",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "paid"
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
    "name": "getBalance",
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
    "name": "getLinkToken",
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
    "name": "getRequestBlockTimes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "offset"
      },
      {
        "type": "uint256",
        "name": "quantity"
      }
    ],
    "outputs": [
      {
        "type": "uint32[]"
      }
    ]
  },
  {
    "name": "getRequestStatus",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_requestId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "paid"
      },
      {
        "type": "bool",
        "name": "fulfilled"
      },
      {
        "type": "uint256[]",
        "name": "randomWords"
      },
      {
        "type": "uint256",
        "name": "requestTimestamp"
      },
      {
        "type": "uint256",
        "name": "fulfilmentTimestamp"
      },
      {
        "type": "uint256",
        "name": "requestBlockNumber"
      },
      {
        "type": "uint256",
        "name": "fulfilmentBlockNumber"
      }
    ]
  },
  {
    "name": "i_vrfV2PlusWrapper",
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
    "name": "makeRequests",
    "type": "function",
    "stateMutability": "nonpayable",
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
        "type": "uint16",
        "name": "_requestCount"
      }
    ],
    "outputs": []
  },
  {
    "name": "makeRequestsNative",
    "type": "function",
    "stateMutability": "nonpayable",
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
        "type": "uint16",
        "name": "_requestCount"
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
        "name": "_requestId"
      },
      {
        "type": "uint256[]",
        "name": "_randomWords"
      }
    ],
    "outputs": []
  },
  {
    "name": "reset",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "s_averageFulfillmentInMillions",
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
    "name": "s_fastestFulfillment",
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
    "name": "s_lastRequestId",
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
    "name": "s_requestBlockTimes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "s_requestCount",
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
    "name": "s_requests",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "paid"
      },
      {
        "type": "bool",
        "name": "fulfilled"
      },
      {
        "type": "uint256",
        "name": "requestTimestamp"
      },
      {
        "type": "uint256",
        "name": "fulfilmentTimestamp"
      },
      {
        "type": "uint256",
        "name": "requestBlockNumber"
      },
      {
        "type": "uint256",
        "name": "fulfilmentBlockNumber"
      },
      {
        "type": "bool",
        "name": "native"
      }
    ]
  },
  {
    "name": "s_responseCount",
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
    "name": "s_slowestFulfillment",
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
        "name": "to"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawLink",
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
    "name": "withdrawNative",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract