import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4742,
  address: '0x70213090e9c306f5e719ae2907ba4e7e92c0a3ce' as const,
  contract_name: 'KongzMartRaffle',
  display_name: 'Kongz Mart Raffle',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1729595783,
  abi: [
  {
    "name": "ErrAlreadyRefunded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrArrLengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrClaimPaused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrFulfilled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNoIndexFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNoRefund",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNoRewardsLeft",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNotVXorGenakaiHolder",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrRaffleNotResolved",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrRaffleResolved",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrWrongPlayer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrWrongRewardType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrWrongWinner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": []
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
    "name": "OwnershipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true
      }
    ]
  },
  {
    "name": "RaffleCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId"
      },
      {
        "type": "tuple",
        "name": "raffle",
        "components": [
          {
            "type": "bool",
            "name": "isNoLoss"
          },
          {
            "type": "bool",
            "name": "isStopped"
          },
          {
            "type": "bool",
            "name": "isNFT"
          },
          {
            "type": "bool",
            "name": "isNativeToken"
          },
          {
            "type": "bool",
            "name": "lockEnforced"
          },
          {
            "type": "bool",
            "name": "finalized"
          },
          {
            "type": "uint128",
            "name": "minAmount"
          },
          {
            "type": "uint256",
            "name": "winnerAmount"
          },
          {
            "type": "bytes32",
            "name": "VRFReqHash"
          },
          {
            "type": "uint256",
            "name": "startTs"
          },
          {
            "type": "uint256",
            "name": "endTs"
          },
          {
            "type": "uint256",
            "name": "participationsCount"
          },
          {
            "type": "uint256",
            "name": "totalAmount"
          },
          {
            "type": "uint256",
            "name": "seed"
          }
        ]
      }
    ]
  },
  {
    "name": "RaffleUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "raffle",
        "components": [
          {
            "type": "bool",
            "name": "isNoLoss"
          },
          {
            "type": "bool",
            "name": "isStopped"
          },
          {
            "type": "bool",
            "name": "isNFT"
          },
          {
            "type": "bool",
            "name": "isNativeToken"
          },
          {
            "type": "bool",
            "name": "lockEnforced"
          },
          {
            "type": "bool",
            "name": "finalized"
          },
          {
            "type": "uint128",
            "name": "minAmount"
          },
          {
            "type": "uint256",
            "name": "winnerAmount"
          },
          {
            "type": "bytes32",
            "name": "VRFReqHash"
          },
          {
            "type": "uint256",
            "name": "startTs"
          },
          {
            "type": "uint256",
            "name": "endTs"
          },
          {
            "type": "uint256",
            "name": "participationsCount"
          },
          {
            "type": "uint256",
            "name": "totalAmount"
          },
          {
            "type": "uint256",
            "name": "seed"
          }
        ]
      }
    ]
  },
  {
    "name": "VRFReqHashToRaffleVRFData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "fulfilled"
      },
      {
        "type": "uint256",
        "name": "raffleId"
      }
    ]
  },
  {
    "name": "authorisedCallers",
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
    "name": "banana",
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
    "name": "createRaffle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_isNoLoss"
      },
      {
        "type": "bool",
        "name": "_isStopped"
      },
      {
        "type": "bool",
        "name": "_isNFT"
      },
      {
        "type": "bool",
        "name": "_isNative"
      },
      {
        "type": "bool",
        "name": "_lockEnforced"
      },
      {
        "type": "uint128",
        "name": "_minAmount"
      },
      {
        "type": "uint256",
        "name": "_numWinners"
      },
      {
        "type": "uint256",
        "name": "_startTs"
      },
      {
        "type": "uint256",
        "name": "_endTs"
      }
    ],
    "outputs": []
  },
  {
    "name": "genkaitoRaffleId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPlayerParticipationCounts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_raffleIds"
      },
      {
        "type": "address",
        "name": "_player"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getPlayerRaffleParticipations",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      },
      {
        "type": "address",
        "name": "_player"
      },
      {
        "type": "uint256",
        "name": "_startIndex"
      },
      {
        "type": "uint256",
        "name": "_maxLen"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "address",
            "name": "player"
          },
          {
            "type": "bool",
            "name": "isRefunded"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "playerRangeMax"
          }
        ]
      }
    ]
  },
  {
    "name": "getRaffleParticipations",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      },
      {
        "type": "uint256",
        "name": "_startIndex"
      },
      {
        "type": "uint256",
        "name": "_maxLen"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "address",
            "name": "player"
          },
          {
            "type": "bool",
            "name": "isRefunded"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "playerRangeMax"
          }
        ]
      }
    ]
  },
  {
    "name": "getRaffleWinners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getRaffles",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_ids"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "bool",
            "name": "isNoLoss"
          },
          {
            "type": "bool",
            "name": "isStopped"
          },
          {
            "type": "bool",
            "name": "isNFT"
          },
          {
            "type": "bool",
            "name": "isNativeToken"
          },
          {
            "type": "bool",
            "name": "lockEnforced"
          },
          {
            "type": "bool",
            "name": "finalized"
          },
          {
            "type": "uint128",
            "name": "minAmount"
          },
          {
            "type": "uint256",
            "name": "winnerAmount"
          },
          {
            "type": "bytes32",
            "name": "VRFReqHash"
          },
          {
            "type": "uint256",
            "name": "startTs"
          },
          {
            "type": "uint256",
            "name": "endTs"
          },
          {
            "type": "uint256",
            "name": "participationsCount"
          },
          {
            "type": "uint256",
            "name": "totalAmount"
          },
          {
            "type": "uint256",
            "name": "seed"
          }
        ]
      }
    ]
  },
  {
    "name": "getUserRaffleTicketIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      },
      {
        "type": "uint256[]",
        "name": "_raffleId"
      }
    ],
    "outputs": [
      {
        "type": "uint256[][]"
      }
    ]
  },
  {
    "name": "getWinnerIds",
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
        "type": "uint256[]"
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
        "name": "_banana"
      },
      {
        "type": "address",
        "name": "_vrfCoordinator"
      },
      {
        "type": "address",
        "name": "_genkai"
      },
      {
        "type": "address",
        "name": "_vx"
      },
      {
        "type": "address",
        "name": "_treasury"
      }
    ],
    "outputs": []
  },
  {
    "name": "lockedEnumPerUser",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "onERC1155BatchReceived",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "onERC1155Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "owner",
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
    "name": "participateToRaffle",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "uint256",
        "name": "_genkaiId"
      },
      {
        "type": "uint256",
        "name": "_vxId"
      }
    ],
    "outputs": []
  },
  {
    "name": "raffleCounter",
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
    "name": "raffleIndexWinners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "raffleParticipations",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "bool",
        "name": "isRefunded"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "playerRangeMax"
      }
    ]
  },
  {
    "name": "raffleUserParticipations",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "raffleUserParticipationsCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
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
    "name": "raffleWinners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
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
    "name": "raffleWinnersArr",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "raffles",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isNoLoss"
      },
      {
        "type": "bool",
        "name": "isStopped"
      },
      {
        "type": "bool",
        "name": "isNFT"
      },
      {
        "type": "bool",
        "name": "isNativeToken"
      },
      {
        "type": "bool",
        "name": "lockEnforced"
      },
      {
        "type": "bool",
        "name": "finalized"
      },
      {
        "type": "uint128",
        "name": "minAmount"
      },
      {
        "type": "uint256",
        "name": "winnerAmount"
      },
      {
        "type": "bytes32",
        "name": "VRFReqHash"
      },
      {
        "type": "uint256",
        "name": "startTs"
      },
      {
        "type": "uint256",
        "name": "endTs"
      },
      {
        "type": "uint256",
        "name": "participationsCount"
      },
      {
        "type": "uint256",
        "name": "totalAmount"
      },
      {
        "type": "uint256",
        "name": "seed"
      }
    ]
  },
  {
    "name": "rawFulfillRandomSeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_reqHash"
      },
      {
        "type": "uint256",
        "name": "_randomSeed"
      }
    ],
    "outputs": []
  },
  {
    "name": "refundLostRaffle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "rescueAssets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_tokenTypes"
      },
      {
        "type": "address[]",
        "name": "_tokenAddresses"
      },
      {
        "type": "uint256[]",
        "name": "_tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "_tokenAmounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "resolveRaffleStep1",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      }
    ],
    "outputs": []
  },
  {
    "name": "resolveRaffleStep2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      },
      {
        "type": "uint256[]",
        "name": "_winnerIndexes"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "setCaller",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_caller"
      },
      {
        "type": "bool",
        "name": "_value"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_treasury"
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
    "name": "togglePause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_value"
      }
    ],
    "outputs": []
  },
  {
    "name": "totalLockedPerUser",
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
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "unlockAssets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "unlockGenkai",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_startIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "unlockVx",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_startIndex"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateRaffle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_raffleId"
      },
      {
        "type": "bool",
        "name": "_isNoLoss"
      },
      {
        "type": "bool",
        "name": "_isStopped"
      },
      {
        "type": "bool",
        "name": "_isNFT"
      },
      {
        "type": "bool",
        "name": "_isNative"
      },
      {
        "type": "bool",
        "name": "_lockEnforced"
      },
      {
        "type": "uint128",
        "name": "_minAmount"
      },
      {
        "type": "uint256",
        "name": "_numWinners"
      },
      {
        "type": "uint256",
        "name": "_startTs"
      },
      {
        "type": "uint256",
        "name": "_endTs"
      }
    ],
    "outputs": []
  },
  {
    "name": "userRaffleTicketIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "viewGenkaiLockedPerUser",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      },
      {
        "type": "uint256",
        "name": "_len"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "viewVxLockerPerUser",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      },
      {
        "type": "uint256",
        "name": "_len"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "vrfCoordinator",
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
    "name": "vxLockedEnumPerUser",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "vxToRaffleId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "vxTotalLockedPerUser",
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
    "name": "winnerIDCounter",
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
    "name": "winnerIDs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract