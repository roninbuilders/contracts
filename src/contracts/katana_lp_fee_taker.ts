import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35049,
  address: '0xa795d9d4aa65b3ddc577ad2c907dc7b62de725a8' as const,
  contract_name: 'KatanaLpFeeTaker',
  display_name: 'Katana Lp Fee Taker',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1748270839,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_router"
      }
    ]
  },
  {
    "name": "ApproveFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExternalCallFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidFeeConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInstructionType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidParams",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSigner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidStrategy",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSwapRouter",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidVaultConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SafeERC20FailedOperation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "SignatureExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeeCollected",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "vaultAddress",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "feeType",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "router",
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
    "name": "takeFees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token0"
      },
      {
        "type": "uint256",
        "name": "amount0"
      },
      {
        "type": "address",
        "name": "token1"
      },
      {
        "type": "uint256",
        "name": "amount1"
      },
      {
        "type": "tuple",
        "name": "feeConfig",
        "components": [
          {
            "type": "uint16",
            "name": "vaultOwnerFeeBasisPoint"
          },
          {
            "type": "address",
            "name": "vaultOwner"
          },
          {
            "type": "uint16",
            "name": "platformFeeBasisPoint"
          },
          {
            "type": "address",
            "name": "platformFeeRecipient"
          },
          {
            "type": "uint64",
            "name": "gasFeeX64"
          },
          {
            "type": "address",
            "name": "gasFeeRecipient"
          }
        ]
      },
      {
        "type": "address",
        "name": "principalToken"
      },
      {
        "type": "address",
        "name": "pool"
      },
      {
        "type": "address",
        "name": "validator"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "fee0"
      },
      {
        "type": "uint256",
        "name": "fee1"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract