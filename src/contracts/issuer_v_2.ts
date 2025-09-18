import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36993,
  address: '0xf84cc8217713a53fc3e3eb2d62d2af33a084ff85' as const,
  contract_name: 'IssuerV2',
  display_name: 'Issuer V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1756201697,
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
        "name": "oracle"
      },
      {
        "type": "address",
        "name": "_amoManager"
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
    "name": "AssetMintingPaused",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      }
    ]
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
    "name": "IssuanceSurpassesExcessCollateral",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "collateralInDstable"
      },
      {
        "type": "uint256",
        "name": "circulatingDstable"
      }
    ]
  },
  {
    "name": "MintingToAmoShouldNotIncreaseSupply",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "circulatingDstableBefore"
      },
      {
        "type": "uint256",
        "name": "circulatingDstableAfter"
      }
    ]
  },
  {
    "name": "ReentrancyGuardReentrantCall",
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
    "name": "SlippageTooHigh",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "minDStable"
      },
      {
        "type": "uint256",
        "name": "dstableAmount"
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
    "name": "AmoManagerSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "amoManager",
        "indexed": true
      }
    ]
  },
  {
    "name": "AssetMintingPauseUpdated",
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
    "name": "AMO_MANAGER_ROLE",
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
    "name": "INCENTIVES_MANAGER_ROLE",
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
    "name": "amoManager",
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
    "name": "assetMintingPaused",
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
    "name": "baseValueToDstableAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "baseValue"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "circulatingDstable",
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
    "name": "collateralInDstable",
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
    "name": "increaseAmoSupply",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "dstableAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "isAssetMintingEnabled",
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
    "name": "issue",
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
      },
      {
        "type": "uint256",
        "name": "minDStable"
      }
    ],
    "outputs": []
  },
  {
    "name": "issueUsingExcessCollateral",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "receiver"
      },
      {
        "type": "uint256",
        "name": "dstableAmount"
      }
    ],
    "outputs": []
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
    "name": "pauseMinting",
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
    "name": "setAmoManager",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_amoManager"
      }
    ],
    "outputs": []
  },
  {
    "name": "setAssetMintingPause",
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
    "name": "unpauseMinting",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract