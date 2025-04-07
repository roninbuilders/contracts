import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2067,
  address: '0x6af57471da36bb9ca5e36b27f927d45bdab95239' as const,
  contract_name: 'Profile_Mainnet',
  display_name: 'Profile_Mainnet',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1711428452,
  abi: [
  {
    "name": "ErrCallPrecompiled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrContractTypeNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      }
    ]
  },
  {
    "name": "ErrDuplicatedInfo",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "infoType"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "ErrDuplicatedPubkey",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "pubkey"
      }
    ]
  },
  {
    "name": "ErrExistentProfile",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrIdAndConsensusDiffer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidProofOfPossession",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "pubkey"
      },
      {
        "type": "bytes",
        "name": "proofOfPossession"
      }
    ]
  },
  {
    "name": "ErrLookUpIdFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "consensus"
      }
    ]
  },
  {
    "name": "ErrNonExistentProfile",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrProfileChangeCooldownNotEnded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnauthorized",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "uint8",
        "name": "expectedRole"
      }
    ]
  },
  {
    "name": "ErrUnexpectedInternalCall",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "uint8",
        "name": "expectedContractType"
      },
      {
        "type": "address",
        "name": "actual"
      }
    ]
  },
  {
    "name": "ErrValidatorOnRenunciation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "cid"
      }
    ]
  },
  {
    "name": "ErrZeroAddress",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "infoType"
      }
    ]
  },
  {
    "name": "ErrZeroCodeContract",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ]
  },
  {
    "name": "ErrZeroPubkey",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ConsensusAddressOfNonGovernorChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "id",
        "indexed": true
      }
    ]
  },
  {
    "name": "ContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType",
        "indexed": true
      },
      {
        "type": "address",
        "name": "addr",
        "indexed": true
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "version"
      }
    ]
  },
  {
    "name": "ProfileAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "id",
        "indexed": true
      }
    ]
  },
  {
    "name": "ProfileAddressChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "id",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "addressType",
        "indexed": true
      },
      {
        "type": "address",
        "name": "addr",
        "indexed": true
      }
    ]
  },
  {
    "name": "ProfileMigrated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "id",
        "indexed": true
      },
      {
        "type": "address",
        "name": "admin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "treasury",
        "indexed": true
      }
    ]
  },
  {
    "name": "PubkeyChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "id",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "pubkey"
      }
    ]
  },
  {
    "name": "PubkeyVerified",
    "type": "event",
    "inputs": [
      {
        "type": "bytes",
        "name": "pubkey"
      },
      {
        "type": "bytes",
        "name": "proofOfPossession"
      }
    ]
  },
  {
    "name": "arePublicKeysRegistered",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes[][2]",
        "name": "listOfPublicKey"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "changeAdminAddr",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "id"
      },
      {
        "type": "address",
        "name": "newAdminAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeConsensusAddr",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "id"
      },
      {
        "type": "address",
        "name": "newConsensusAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "changePubkey",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "id"
      },
      {
        "type": "bytes",
        "name": "pubkey"
      },
      {
        "type": "bytes",
        "name": "proofOfPossession"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeTreasuryAddr",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      }
    ],
    "outputs": []
  },
  {
    "name": "execApplyValidatorCandidate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "address",
        "name": "id"
      },
      {
        "type": "address",
        "name": "treasury"
      },
      {
        "type": "bytes",
        "name": "pubkey"
      },
      {
        "type": "bytes",
        "name": "proofOfPossession"
      }
    ],
    "outputs": []
  },
  {
    "name": "getConsensus2Id",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensus"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getContract",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "contract_"
      }
    ]
  },
  {
    "name": "getCooldownConfig",
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
    "name": "getId2Profile",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "id"
          },
          {
            "type": "address",
            "name": "consensus"
          },
          {
            "type": "address",
            "name": "admin"
          },
          {
            "type": "address",
            "name": "treasury"
          },
          {
            "type": "address",
            "name": "__reservedGovernor"
          },
          {
            "type": "bytes",
            "name": "pubkey"
          },
          {
            "type": "uint256",
            "name": "profileLastChange"
          },
          {
            "type": "bytes",
            "name": "oldPubkey"
          },
          {
            "type": "address",
            "name": "oldConsensus"
          }
        ]
      }
    ]
  },
  {
    "name": "getManyConsensus2Id",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "consensusList"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "idList"
      }
    ]
  },
  {
    "name": "getManyId2Consensus",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "idList"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "consensusList"
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "validatorContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "stakingContract"
      },
      {
        "type": "address",
        "name": "trustedOrgContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV3",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "cooldown"
      }
    ],
    "outputs": []
  },
  {
    "name": "migrateOmissionREP4",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "precompileVerifyBLSPublicKeyAddress",
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
    "name": "setContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      },
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setCooldownConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "cooldown"
      }
    ],
    "outputs": []
  },
  {
    "name": "tryGetConsensus2Id",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensus"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "found"
      },
      {
        "type": "address",
        "name": "id"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract