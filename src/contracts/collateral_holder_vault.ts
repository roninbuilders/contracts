import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36735,
  address: '0xc40f4303505320f782972ad4756ed2a7390a9d9c' as const,
  contract_name: 'CollateralHolderVault',
  display_name: 'Collateral Holder Vault',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1754448609,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "oracle"
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
    "name": "CannotWithdrawMoreValueThanDeposited",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestedAmount"
      },
      {
        "type": "uint256",
        "name": "maxAmount"
      }
    ]
  },
  {
    "name": "CollateralAlreadyAllowed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "collateralAsset"
      }
    ]
  },
  {
    "name": "CollateralNotSupported",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "collateralAsset"
      }
    ]
  },
  {
    "name": "FailedToAddCollateral",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "collateralAsset"
      }
    ]
  },
  {
    "name": "FailedToRemoveCollateral",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "collateralAsset"
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
    "name": "MustSupportAtLeastOneCollateral",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoOracleSupport",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "collateralAsset"
      }
    ]
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
    "name": "ToCollateralAmountBelowMin",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "toCollateralAmount"
      },
      {
        "type": "uint256",
        "name": "toMinCollateral"
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
    "name": "CollateralAllowed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collateralAsset",
        "indexed": true
      }
    ]
  },
  {
    "name": "CollateralDisallowed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collateralAsset",
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
    "name": "COLLATERAL_MANAGER_ROLE",
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
    "name": "COLLATERAL_STRATEGY_ROLE",
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
    "name": "COLLATERAL_WITHDRAWER_ROLE",
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
    "name": "allowCollateral",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collateralAsset"
      }
    ],
    "outputs": []
  },
  {
    "name": "assetAmountFromValue",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "baseValue"
      },
      {
        "type": "address",
        "name": "asset"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "assetAmount"
      }
    ]
  },
  {
    "name": "assetValueFromAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "assetAmount"
      },
      {
        "type": "address",
        "name": "asset"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "baseValue"
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
    "name": "deposit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "collateralAmount"
      },
      {
        "type": "address",
        "name": "collateralAsset"
      }
    ],
    "outputs": []
  },
  {
    "name": "disallowCollateral",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collateralAsset"
      }
    ],
    "outputs": []
  },
  {
    "name": "exchangeCollateral",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "fromCollateralAmount"
      },
      {
        "type": "address",
        "name": "fromCollateral"
      },
      {
        "type": "uint256",
        "name": "toCollateralAmount"
      },
      {
        "type": "address",
        "name": "toCollateral"
      }
    ],
    "outputs": []
  },
  {
    "name": "exchangeMaxCollateral",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "fromCollateralAmount"
      },
      {
        "type": "address",
        "name": "fromCollateral"
      },
      {
        "type": "address",
        "name": "toCollateral"
      },
      {
        "type": "uint256",
        "name": "toMinCollateral"
      }
    ],
    "outputs": []
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
    "name": "isCollateralSupported",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collateralAsset"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "listCollateral",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "maxExchangeAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "fromCollateralAmount"
      },
      {
        "type": "address",
        "name": "fromCollateral"
      },
      {
        "type": "address",
        "name": "toCollateral"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "toCollateralAmount"
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
    "name": "totalValue",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "baseValue"
      }
    ]
  },
  {
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "collateralAmount"
      },
      {
        "type": "address",
        "name": "collateralAsset"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "collateralAmount"
      },
      {
        "type": "address",
        "name": "collateralAsset"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract