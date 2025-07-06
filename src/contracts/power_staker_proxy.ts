import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35795,
  address: '0x569899aab0ff89c1711114ba9d7be0774bd23c71' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Power Staker Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x3b22ea511f25143f1d881cad182e2491a3ac9d5d',
  created_at: 1750864061,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ]
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "ERC1967InvalidImplementation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      }
    ]
  },
  {
    "name": "ERC1967NonPayable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
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
    "name": "ActivePositionsExist",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "AllPositionsStillLocked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CannotStakeZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ConfigExists",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ConfigInUse",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ConfigNotFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ERC1967InvalidImplementation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      }
    ]
  },
  {
    "name": "ERC1967NonPayable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidLockPeriod",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPosition",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidScoreMultiple",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidStakeAsset",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NFTNotOwned",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Noop",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotEnoughToClaim",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NothingToClaim",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PositionStillLocked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SafeCastOverflowedUintDowncast",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "bits"
      },
      {
        "type": "uint256",
        "name": "value"
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
    "name": "UUPSUnauthorizedCallContext",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UUPSUnsupportedProxiableUUID",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "slot"
      }
    ]
  },
  {
    "name": "Unauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AccountRewardsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "accumulated"
      },
      {
        "type": "uint128",
        "name": "checkpoint"
      }
    ]
  },
  {
    "name": "Claimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
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
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "version"
      }
    ]
  },
  {
    "name": "RewardsPerAssetUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "asset",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "accumulated"
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
    "name": "Staked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes32",
        "name": "configHash"
      },
      {
        "type": "uint96",
        "name": "extraData",
        "indexed": true
      }
    ]
  },
  {
    "name": "StakingConfigCreated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "configHash",
        "indexed": true
      },
      {
        "type": "uint32",
        "name": "lockPeriod"
      },
      {
        "type": "uint24",
        "name": "scoreMultiple"
      }
    ]
  },
  {
    "name": "StakingConfigDeleted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "configHash",
        "indexed": true
      }
    ]
  },
  {
    "name": "StakingConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "configHash",
        "indexed": true
      },
      {
        "type": "uint32",
        "name": "lockPeriod"
      },
      {
        "type": "uint24",
        "name": "scoreMultiple"
      }
    ]
  },
  {
    "name": "Unstaked",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "bytes32",
        "name": "configHash"
      },
      {
        "type": "uint96",
        "name": "extraData",
        "indexed": true
      }
    ]
  },
  {
    "name": "UpdatedSigner",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newSigner"
      }
    ]
  },
  {
    "name": "UpdatedStakeLimit",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "rarity"
      },
      {
        "type": "uint256",
        "name": "limit"
      }
    ]
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
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
    "name": "REWARD_RATE_PRECISION",
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
    "name": "STAKE_EDITOR_ROLE",
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
    "name": "STAKE_HASH",
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
    "name": "STAKING_ADMIN_ROLE",
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
    "name": "UPGRADER_ROLE",
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
    "name": "UPGRADE_INTERFACE_VERSION",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "claim",
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
    "name": "claim",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "createStakingConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "lockPeriod"
      },
      {
        "type": "uint24",
        "name": "scoreMultiple"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "configHash"
      }
    ]
  },
  {
    "name": "deleteStakingConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "configHash"
      }
    ],
    "outputs": []
  },
  {
    "name": "eip712Domain",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes1",
        "name": "fields"
      },
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "version"
      },
      {
        "type": "uint256",
        "name": "chainId"
      },
      {
        "type": "address",
        "name": "verifyingContract"
      },
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "uint256[]",
        "name": "extensions"
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
    "name": "increaseStake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "positionIndex"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "increaseStakeBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "stakes",
        "components": [
          {
            "type": "uint256",
            "name": "positionIndex"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "args",
        "components": [
          {
            "type": "string",
            "name": "name"
          },
          {
            "type": "string",
            "name": "version"
          },
          {
            "type": "address",
            "name": "rewardSource"
          },
          {
            "type": "address",
            "name": "admin"
          },
          {
            "type": "address",
            "name": "rewardAsset"
          },
          {
            "type": "address",
            "name": "stakeAsset"
          },
          {
            "type": "address",
            "name": "nftAsset"
          },
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "tuple[]",
            "name": "rarityLimits",
            "components": [
              {
                "type": "uint256",
                "name": "rarity"
              },
              {
                "type": "uint256",
                "name": "limit"
              }
            ]
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "merge",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "uint256[]",
        "name": "fromIndices"
      },
      {
        "type": "uint256",
        "name": "toIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "move",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "fromIndex"
      },
      {
        "type": "uint256",
        "name": "toIndex"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "pendingRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "reward",
        "components": [
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "address",
            "name": "token"
          }
        ]
      }
    ]
  },
  {
    "name": "proxiableUUID",
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
    "name": "restake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "positionIndex"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "restakeBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "tuple[]",
        "name": "restakes",
        "components": [
          {
            "type": "uint256",
            "name": "positionIndex"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
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
    "name": "setSigner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newSigner"
      }
    ],
    "outputs": []
  },
  {
    "name": "setStakeLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "rarity"
      },
      {
        "type": "uint256",
        "name": "limit"
      }
    ],
    "outputs": []
  },
  {
    "name": "stake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "rarity"
      },
      {
        "type": "bytes32",
        "name": "configHash"
      },
      {
        "type": "bytes",
        "name": "sig"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "positionId"
      }
    ]
  },
  {
    "name": "stakeBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "stakes",
        "components": [
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "rarity"
          },
          {
            "type": "bytes32",
            "name": "configHash"
          },
          {
            "type": "bytes",
            "name": "sig"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "positionIds"
      }
    ]
  },
  {
    "name": "stakeLimit",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "rarity"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "stakingConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "configHash"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint32",
            "name": "lockPeriod"
          },
          {
            "type": "uint24",
            "name": "scoreMultiple"
          },
          {
            "type": "uint192",
            "name": "positionCount"
          }
        ]
      }
    ]
  },
  {
    "name": "stakingPositions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "bytes32",
            "name": "configHash"
          },
          {
            "type": "uint32",
            "name": "depositTimestamp"
          },
          {
            "type": "uint128",
            "name": "amount"
          },
          {
            "type": "uint96",
            "name": "extraData"
          }
        ]
      }
    ]
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
    "name": "unlockTime",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "positionIndex"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "unstake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "positionIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "unstake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "positionIndex"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "unstakeAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "updateStakeLimits",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "rarityLimits",
        "components": [
          {
            "type": "uint256",
            "name": "rarity"
          },
          {
            "type": "uint256",
            "name": "limit"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "updateStakingConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "configHash"
      },
      {
        "type": "uint32",
        "name": "lockPeriod"
      },
      {
        "type": "uint24",
        "name": "scoreMultiple"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeToAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract