import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35591,
  address: '0x0000006a50a9c9efae8875266ff222579fc2f449' as const,
  contract_name: 'StablePoolFactory',
  display_name: 'Stable Pool Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1747242323,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenMasterRouter"
      }
    ]
  },
  {
    "name": "TokenMasterFactory__CallerMustBeRouter",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterFactory__RouterAddressNotSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CREATION_CODE",
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
    "name": "computeDeploymentAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "tokenSalt"
      },
      {
        "type": "tuple",
        "name": "poolParams",
        "components": [
          {
            "type": "string",
            "name": "name"
          },
          {
            "type": "string",
            "name": "symbol"
          },
          {
            "type": "uint8",
            "name": "tokenDecimals"
          },
          {
            "type": "address",
            "name": "initialOwner"
          },
          {
            "type": "address",
            "name": "pairedToken"
          },
          {
            "type": "uint256",
            "name": "initialPairedTokenToDeposit"
          },
          {
            "type": "bytes",
            "name": "encodedInitializationArgs"
          },
          {
            "type": "address",
            "name": "defaultTransferValidator"
          },
          {
            "type": "bool",
            "name": "useRouterForPairedTransfers"
          },
          {
            "type": "address",
            "name": "partnerFeeRecipient"
          },
          {
            "type": "uint256",
            "name": "partnerFeeBPS"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "pairedValueIn"
      },
      {
        "type": "uint256",
        "name": "infrastructureFeeBPS"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "deploymentAddress"
      }
    ]
  },
  {
    "name": "deployToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "tokenSalt"
      },
      {
        "type": "tuple",
        "name": "poolParams",
        "components": [
          {
            "type": "string",
            "name": "name"
          },
          {
            "type": "string",
            "name": "symbol"
          },
          {
            "type": "uint8",
            "name": "tokenDecimals"
          },
          {
            "type": "address",
            "name": "initialOwner"
          },
          {
            "type": "address",
            "name": "pairedToken"
          },
          {
            "type": "uint256",
            "name": "initialPairedTokenToDeposit"
          },
          {
            "type": "bytes",
            "name": "encodedInitializationArgs"
          },
          {
            "type": "address",
            "name": "defaultTransferValidator"
          },
          {
            "type": "bool",
            "name": "useRouterForPairedTransfers"
          },
          {
            "type": "address",
            "name": "partnerFeeRecipient"
          },
          {
            "type": "uint256",
            "name": "partnerFeeBPS"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "pairedValueIn"
      },
      {
        "type": "uint256",
        "name": "infrastructureFeeBPS"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "deployedAddress"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract