import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5259,
  address: '0x5f0acdd3ec767514ff1bf7e79949640bf94576bd' as const,
  contract_name: 'AggregateRouter',
  display_name: 'Aggregate Router',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1732174992,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "address",
            "name": "permit2"
          },
          {
            "type": "address",
            "name": "weth9"
          },
          {
            "type": "address",
            "name": "governance"
          },
          {
            "type": "address",
            "name": "v2Factory"
          },
          {
            "type": "address",
            "name": "v3Factory"
          },
          {
            "type": "bytes32",
            "name": "pairInitCodeHash"
          },
          {
            "type": "bytes32",
            "name": "poolInitCodeHash"
          }
        ]
      }
    ]
  },
  {
    "name": "BalanceTooLow",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ContractLocked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ETHNotAccepted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExecutionFailed",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "commandIndex"
      },
      {
        "type": "bytes",
        "name": "message"
      }
    ]
  },
  {
    "name": "FromAddressIsNotOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientETH",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidBips",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidCommandType",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "commandType"
      }
    ]
  },
  {
    "name": "InvalidPath",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidReserves",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSpender",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SliceOutOfBounds",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransactionDeadlinePassed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnsafeCast",
    "type": "error",
    "inputs": []
  },
  {
    "name": "V2InvalidPath",
    "type": "error",
    "inputs": []
  },
  {
    "name": "V2TooLittleReceived",
    "type": "error",
    "inputs": []
  },
  {
    "name": "V2TooMuchRequested",
    "type": "error",
    "inputs": []
  },
  {
    "name": "V2UnauthorizedPath",
    "type": "error",
    "inputs": []
  },
  {
    "name": "V3InvalidAmountOut",
    "type": "error",
    "inputs": []
  },
  {
    "name": "V3InvalidCaller",
    "type": "error",
    "inputs": []
  },
  {
    "name": "V3InvalidSwap",
    "type": "error",
    "inputs": []
  },
  {
    "name": "V3TooLittleReceived",
    "type": "error",
    "inputs": []
  },
  {
    "name": "V3TooMuchRequested",
    "type": "error",
    "inputs": []
  },
  {
    "name": "V3UnauthorizedSwap",
    "type": "error",
    "inputs": []
  },
  {
    "name": "execute",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "commands"
      },
      {
        "type": "bytes[]",
        "name": "inputs"
      }
    ],
    "outputs": []
  },
  {
    "name": "execute",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "commands"
      },
      {
        "type": "bytes[]",
        "name": "inputs"
      },
      {
        "type": "uint256",
        "name": "deadline"
      }
    ],
    "outputs": []
  },
  {
    "name": "katanaV3SwapCallback",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "int256",
        "name": "amount0Delta"
      },
      {
        "type": "int256",
        "name": "amount1Delta"
      },
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
] as const satisfies Abi
} as const satisfies Contract
export default contract