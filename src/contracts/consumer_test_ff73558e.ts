import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 366,
  address: '0x35dc49cafab1e2e46723ad5e0a82e71cff73558e' as const,
  contract_name: 'ConsumerTest',
  display_name: 'Consumer Test',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1689920739,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_vrfCoordinator"
      }
    ]
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": []
  },
  {
    "name": "bulkTestRequestRandomness",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_callbackGaslimit"
      },
      {
        "type": "uint256",
        "name": "_gasPrice"
      },
      {
        "type": "address",
        "name": "_refundAddr"
      },
      {
        "type": "uint256[]",
        "name": "_tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "getManyOracleAddressOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_tokenIds"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "_oracleAddresses"
      }
    ]
  },
  {
    "name": "getManyRandomResults",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_tokenIds"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_randomResults"
      }
    ]
  },
  {
    "name": "oracleAddr",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "randomHashOfToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "randomResult",
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
    "name": "rawFulfillRandomSeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_reqHash"
      },
      {
        "type": "uint256",
        "name": "_randomSeed"
      }
    ],
    "outputs": []
  },
  {
    "name": "testRequestRandomnessWithNotConsumerAddress",
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
        "name": "_refundAddr"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "vrfCoordinator",
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