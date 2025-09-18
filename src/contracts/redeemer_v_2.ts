import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36994,
  address: '0xf1f989807743c8e78ba095fed05be330bda4c863' as const,
  contract_name: 'RedeemerV2',
  display_name: 'Redeemer V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1756201784,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_collateralVault"
      },
      {
        "type": "address",
        "name": "_dstable"
      },
      {
        "type": "address",
        "name": "_oracle"
      },
      {
        "type": "address",
        "name": "_initialFeeReceiver"
      },
      {
        "type": "uint256",
        "name": "_initialRedemptionFeeBps"
      }
    ]
  },
  {
    "name": "AccessControlBadConfirmation",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AccessControlUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "neededRole"
      }
    ]
  },
  {
    "name": "AssetRedemptionPaused",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      }
    ]
  },
  {
    "name": "CannotBeZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CollateralTransferFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "DStableTransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EnforcedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpectedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeeTooHigh",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestedFeeBps"
      },
      {
        "type": "uint256",
        "name": "maxFeeBps"
      }
    ]
  },
  {
    "name": "IncorrectBaseCurrencyUnit",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "baseCurrencyUnit"
      }
    ]
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SlippageTooHigh",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "actualCollateral"
      },
      {
        "type": "uint256",
        "name": "minCollateral"
      }
    ]
  },
  {
    "name": "UnsupportedCollateral",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "collateralAsset"
      }
    ]
  },
  {
    "name": "AssetRedemptionPauseUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "asset",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "paused"
      }
    ]
  },
  {
    "name": "CollateralRedemptionFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collateralAsset",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "oldFeeBps"
      },
      {
        "type": "uint256",
        "name": "newFeeBps"
      }
    ]
  },
  {
    "name": "CollateralVaultSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collateralVault",
        "indexed": true
      }
    ]
  },
  {
    "name": "DefaultRedemptionFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldFeeBps"
      },
      {
        "type": "uint256",
        "name": "newFeeBps"
      }
    ]
  },
  {
    "name": "FeeReceiverUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldFeeReceiver",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newFeeReceiver",
        "indexed": true
      }
    ]
  },
  {
    "name": "OracleSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newOracle",
        "indexed": true
      }
    ]
  },
  {
    "name": "Paused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "Redemption",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "redeemer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "collateralAsset",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "dstableAmount"
      },
      {
        "type": "uint256",
        "name": "collateralAmountToRedeemer"
      },
      {
        "type": "uint256",
        "name": "feeAmountCollateral"
      }
    ]
  },
  {
    "name": "RoleAdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "previousAdminRole",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "newAdminRole",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleGranted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleRevoked",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "DEFAULT_ADMIN_ROLE",
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
    "name": "MAX_FEE_BPS",
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
    "name": "PAUSER_ROLE",
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
    "name": "REDEMPTION_MANAGER_ROLE",
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
    "name": "assetRedemptionPaused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "baseCurrencyUnit",
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
    "name": "clearCollateralRedemptionFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_collateralAsset"
      }
    ],
    "outputs": []
  },
  {
    "name": "collateralRedemptionFeeBps",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "collateralVault",
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
    "name": "defaultRedemptionFeeBps",
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
    "name": "dstable",
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
    "name": "dstableAmountToBaseValue",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "dstableAmount"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "dstableDecimals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "feeReceiver",
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
    "name": "getRoleAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "grantRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "hasRole",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
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
    "name": "isAssetRedemptionEnabled",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isCollateralFeeOverridden",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "oracle",
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
    "name": "pauseRedemption",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "paused",
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
    "name": "redeem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "dstableAmount"
      },
      {
        "type": "address",
        "name": "collateralAsset"
      },
      {
        "type": "uint256",
        "name": "minNetCollateral"
      }
    ],
    "outputs": []
  },
  {
    "name": "redeemAsProtocol",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "dstableAmount"
      },
      {
        "type": "address",
        "name": "collateralAsset"
      },
      {
        "type": "uint256",
        "name": "minCollateral"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "callerConfirmation"
      }
    ],
    "outputs": []
  },
  {
    "name": "revokeRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "setAssetRedemptionPause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "bool",
        "name": "paused"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBaseCurrencyUnit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newBaseCurrencyUnit"
      }
    ],
    "outputs": []
  },
  {
    "name": "setCollateralRedemptionFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_collateralAsset"
      },
      {
        "type": "uint256",
        "name": "_newFeeBps"
      }
    ],
    "outputs": []
  },
  {
    "name": "setCollateralVault",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_collateralVault"
      }
    ],
    "outputs": []
  },
  {
    "name": "setDefaultRedemptionFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newFeeBps"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFeeReceiver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newFeeReceiver"
      }
    ],
    "outputs": []
  },
  {
    "name": "setOracle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newOracle"
      }
    ],
    "outputs": []
  },
  {
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "unpauseRedemption",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract