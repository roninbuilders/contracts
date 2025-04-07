import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27673,
  address: '0x000000b3f05ac48e679d211b2892bc08f02150c9' as const,
  contract_name: 'PromotionalPoolFactory',
  display_name: 'Promotional Pool Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742223041,
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