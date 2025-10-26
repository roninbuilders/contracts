import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37370,
  address: '0xac4fb84de1d6d45231356b0edc922e810e6f477a' as const,
  contract_name: 'PresaleMerchant',
  display_name: 'Presale Merchant',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1759776792,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_presaleBoxNFT"
      },
      {
        "type": "address",
        "name": "_vault"
      },
      {
        "type": "address",
        "name": "_mokuTreasury"
      },
      {
        "type": "uint256",
        "name": "_ticketETHPrice"
      },
      {
        "type": "uint256",
        "name": "_maxWinningTickets"
      },
      {
        "type": "uint256[]",
        "name": "_ticketPurchasePeriod"
      },
      {
        "type": "uint256[]",
        "name": "_storeEnabledPeriod"
      }
    ]
  },
  {
    "name": "InvalidAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidETHPrice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidMsgSender",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPeriod",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTransfer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ItemSoldOut",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoWinningTickets",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ManagerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_address",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "_isManager"
      }
    ]
  },
  {
    "name": "MaxWinningTicketsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_maxWinningTickets"
      }
    ]
  },
  {
    "name": "MokuTreasuryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_mokuTreasury"
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
    "name": "PresaleBoxNFTUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_presaleBoxNFT",
        "indexed": true
      }
    ]
  },
  {
    "name": "StoreEnabledPeriodUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_start"
      },
      {
        "type": "uint256",
        "name": "_end"
      }
    ]
  },
  {
    "name": "TicketETHPriceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_ticketETHPrice"
      }
    ]
  },
  {
    "name": "TicketPurchasePeriodUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_start"
      },
      {
        "type": "uint256",
        "name": "_end"
      }
    ]
  },
  {
    "name": "TicketShopItemUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_shopItemId"
      },
      {
        "type": "uint64",
        "name": "_ticketShopItemPrice"
      },
      {
        "type": "uint64",
        "name": "_ticketShopItemSupply"
      }
    ]
  },
  {
    "name": "TicketsPurchased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_ticketsAmount"
      }
    ]
  },
  {
    "name": "TicketsRefunded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_ticketsAmount"
      }
    ]
  },
  {
    "name": "TicketsSpent",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_shopItemId"
      },
      {
        "type": "uint256",
        "name": "_shopItemAmount"
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
    "name": "VaultUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_vault"
      }
    ]
  },
  {
    "name": "WinningTicketsClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_winningTickets"
      }
    ]
  },
  {
    "name": "WinningTicketsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_address",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_winningTickets"
      }
    ]
  },
  {
    "name": "claimWinningTickets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "getPresaleInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_shopItemCount"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "tuple",
            "name": "ticketPurchasePeriod",
            "components": [
              {
                "type": "uint256",
                "name": "start"
              },
              {
                "type": "uint256",
                "name": "end"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "storeEnabledPeriod",
            "components": [
              {
                "type": "uint256",
                "name": "start"
              },
              {
                "type": "uint256",
                "name": "end"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "ticketETHPrice"
          },
          {
            "type": "uint256",
            "name": "maxWinningTickets"
          },
          {
            "type": "uint256",
            "name": "totalTicketsSold"
          },
          {
            "type": "tuple[]",
            "name": "shopItems",
            "components": [
              {
                "type": "uint64",
                "name": "ticketPrice"
              },
              {
                "type": "uint64",
                "name": "supply"
              },
              {
                "type": "uint64",
                "name": "sold"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "getUserBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint64",
            "name": "purchasedTickets"
          },
          {
            "type": "uint64",
            "name": "winningTickets"
          },
          {
            "type": "uint64",
            "name": "winningTicketsClaimed"
          },
          {
            "type": "uint64",
            "name": "nonWinningTicketsSpent"
          }
        ]
      }
    ]
  },
  {
    "name": "getUserSpendableTickets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "getUsersBalances",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_users"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint64",
            "name": "purchasedTickets"
          },
          {
            "type": "uint64",
            "name": "winningTickets"
          },
          {
            "type": "uint64",
            "name": "winningTicketsClaimed"
          },
          {
            "type": "uint64",
            "name": "nonWinningTicketsSpent"
          }
        ]
      }
    ]
  },
  {
    "name": "getUsersShopItemBalances",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_users"
      },
      {
        "type": "uint256[]",
        "name": "_shopItemIds"
      }
    ],
    "outputs": [
      {
        "type": "uint256[][]"
      }
    ]
  },
  {
    "name": "managerClaimWinningTickets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_addresses"
      },
      {
        "type": "uint64[]",
        "name": "_amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "managerRefundUnusedTickets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_addresses"
      }
    ],
    "outputs": []
  },
  {
    "name": "managers",
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
    "name": "maxWinningTickets",
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
    "name": "mokuTreasury",
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
    "name": "presaleBoxNFT",
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
    "name": "purchaseTickets",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint64",
        "name": "_ticketAmount"
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
    "name": "setManager",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_address"
      },
      {
        "type": "bool",
        "name": "_isManager"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxWinningTickets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_maxWinningTickets"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMokuTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_mokuTreasury"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPresaleBoxNFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_presaleBoxNFT"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTicketETHPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_ticketETHPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTicketPeriods",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_ticketPurchasePeriod"
      },
      {
        "type": "uint256[]",
        "name": "_storeEnabledPeriod"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTicketShopItems",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_ticketShopItemIds"
      },
      {
        "type": "uint64[]",
        "name": "_ticketShopItemPrices"
      },
      {
        "type": "uint64[]",
        "name": "_ticketShopItemSupplies"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVault",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_vault"
      }
    ],
    "outputs": []
  },
  {
    "name": "setWinningTickets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_addresses"
      },
      {
        "type": "uint64[]",
        "name": "_winningTickets"
      }
    ],
    "outputs": []
  },
  {
    "name": "spendTickets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_shopItemIds"
      },
      {
        "type": "uint64[]",
        "name": "_shopItemAmounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "storeEnabledPeriod",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "start"
      },
      {
        "type": "uint256",
        "name": "end"
      }
    ]
  },
  {
    "name": "ticketETHPrice",
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
    "name": "ticketPurchasePeriod",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "start"
      },
      {
        "type": "uint256",
        "name": "end"
      }
    ]
  },
  {
    "name": "ticketShopItems",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint64",
        "name": "ticketPrice"
      },
      {
        "type": "uint64",
        "name": "supply"
      },
      {
        "type": "uint64",
        "name": "sold"
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
        "name": "_paused"
      }
    ],
    "outputs": []
  },
  {
    "name": "totalTicketsSold",
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
    "name": "userBalances",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint64",
        "name": "purchasedTickets"
      },
      {
        "type": "uint64",
        "name": "winningTickets"
      },
      {
        "type": "uint64",
        "name": "winningTicketsClaimed"
      },
      {
        "type": "uint64",
        "name": "nonWinningTicketsSpent"
      }
    ]
  },
  {
    "name": "userIsRefunded",
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
    "name": "userShopItemBalances",
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
    "name": "vault",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract