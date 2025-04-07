import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 6429,
  address: '0xdec8a6f06fdda5aae262631f37b79f182a23464b' as const,
  contract_name: 'TokenPoolFactory',
  display_name: 'Token Pool Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1734469815,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAdminRegistry"
      },
      {
        "type": "address",
        "name": "tokenAdminModule"
      },
      {
        "type": "address",
        "name": "rmnProxy"
      },
      {
        "type": "address",
        "name": "ccipRouter"
      }
    ]
  },
  {
    "name": "Create2EmptyBytecode",
    "type": "error",
    "inputs": []
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
    "name": "InvalidZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RemoteChainConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "remoteChainSelector",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "remoteChainConfig",
        "components": [
          {
            "type": "address",
            "name": "remotePoolFactory"
          },
          {
            "type": "address",
            "name": "remoteRouter"
          },
          {
            "type": "address",
            "name": "remoteRMNProxy"
          },
          {
            "type": "uint8",
            "name": "remoteTokenDecimals"
          }
        ]
      }
    ]
  },
  {
    "name": "deployTokenAndTokenPool",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "remoteTokenPools",
        "components": [
          {
            "type": "uint64",
            "name": "remoteChainSelector"
          },
          {
            "type": "bytes",
            "name": "remotePoolAddress"
          },
          {
            "type": "bytes",
            "name": "remotePoolInitCode"
          },
          {
            "type": "tuple",
            "name": "remoteChainConfig",
            "components": [
              {
                "type": "address",
                "name": "remotePoolFactory"
              },
              {
                "type": "address",
                "name": "remoteRouter"
              },
              {
                "type": "address",
                "name": "remoteRMNProxy"
              },
              {
                "type": "uint8",
                "name": "remoteTokenDecimals"
              }
            ]
          },
          {
            "type": "uint8",
            "name": "poolType"
          },
          {
            "type": "bytes",
            "name": "remoteTokenAddress"
          },
          {
            "type": "bytes",
            "name": "remoteTokenInitCode"
          },
          {
            "type": "tuple",
            "name": "rateLimiterConfig",
            "components": [
              {
                "type": "bool",
                "name": "isEnabled"
              },
              {
                "type": "uint128",
                "name": "capacity"
              },
              {
                "type": "uint128",
                "name": "rate"
              }
            ]
          }
        ]
      },
      {
        "type": "uint8",
        "name": "localTokenDecimals"
      },
      {
        "type": "bytes",
        "name": "tokenInitCode"
      },
      {
        "type": "bytes",
        "name": "tokenPoolInitCode"
      },
      {
        "type": "bytes32",
        "name": "salt"
      }
    ],
    "outputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "deployTokenPoolWithExistingToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint8",
        "name": "localTokenDecimals"
      },
      {
        "type": "tuple[]",
        "name": "remoteTokenPools",
        "components": [
          {
            "type": "uint64",
            "name": "remoteChainSelector"
          },
          {
            "type": "bytes",
            "name": "remotePoolAddress"
          },
          {
            "type": "bytes",
            "name": "remotePoolInitCode"
          },
          {
            "type": "tuple",
            "name": "remoteChainConfig",
            "components": [
              {
                "type": "address",
                "name": "remotePoolFactory"
              },
              {
                "type": "address",
                "name": "remoteRouter"
              },
              {
                "type": "address",
                "name": "remoteRMNProxy"
              },
              {
                "type": "uint8",
                "name": "remoteTokenDecimals"
              }
            ]
          },
          {
            "type": "uint8",
            "name": "poolType"
          },
          {
            "type": "bytes",
            "name": "remoteTokenAddress"
          },
          {
            "type": "bytes",
            "name": "remoteTokenInitCode"
          },
          {
            "type": "tuple",
            "name": "rateLimiterConfig",
            "components": [
              {
                "type": "bool",
                "name": "isEnabled"
              },
              {
                "type": "uint128",
                "name": "capacity"
              },
              {
                "type": "uint128",
                "name": "rate"
              }
            ]
          }
        ]
      },
      {
        "type": "bytes",
        "name": "tokenPoolInitCode"
      },
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "uint8",
        "name": "poolType"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "poolAddress"
      }
    ]
  },
  {
    "name": "typeAndVersion",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract