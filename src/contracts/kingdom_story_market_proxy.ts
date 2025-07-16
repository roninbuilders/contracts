import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36168,
  address: '0x3acf17931ca64b723163cb043e2c68f296309f9d' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Kingdom Story Market Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x42f002c5d5092e02b5f0bcb2e86072ad81f00e59',
  created_at: 1752475737,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "address",
        "name": "admin_"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
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
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "admin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "admin_"
      }
    ]
  },
  {
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "implementation_"
      }
    ]
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
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
  },
  {
    "type": "receive",
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
    "name": "AcceptOffer",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "offerId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "seller",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "offerTradeId"
      },
      {
        "type": "uint256",
        "name": "tradeId"
      }
    ]
  },
  {
    "name": "Box2Changed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAddr"
      }
    ]
  },
  {
    "name": "BoxChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAddr"
      }
    ]
  },
  {
    "name": "BridgeBurned",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "bridgeId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "fromChain"
      },
      {
        "type": "uint256",
        "name": "toChain"
      },
      {
        "type": "address",
        "name": "targetContract"
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenIdOrAmount",
        "indexed": true
      },
      {
        "type": "string",
        "name": "uri"
      },
      {
        "type": "uint256",
        "name": "marketBridgeId"
      }
    ]
  },
  {
    "name": "BridgeMinted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "bridgeId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "fromChain"
      },
      {
        "type": "uint256",
        "name": "toChain"
      },
      {
        "type": "address",
        "name": "targetContract"
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenIdOrAmount",
        "indexed": true
      },
      {
        "type": "string",
        "name": "uri"
      },
      {
        "type": "uint256",
        "name": "marketBridgeId"
      }
    ]
  },
  {
    "name": "CancelOffer",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "offerId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "canceler"
      }
    ]
  },
  {
    "name": "CancelSale",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tradeId"
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
    "name": "InitializedExecute",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "version"
      }
    ]
  },
  {
    "name": "ItemNftChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAddr"
      }
    ]
  },
  {
    "name": "MasterChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAddr"
      }
    ]
  },
  {
    "name": "NativePayAddressChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAddr"
      }
    ]
  },
  {
    "name": "NewOffer",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "offerId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "nftAddr",
        "indexed": true
      },
      {
        "type": "address",
        "name": "currency"
      },
      {
        "type": "uint256",
        "name": "currencyAmount"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "uint256",
        "name": "offerTradeId"
      }
    ]
  },
  {
    "name": "NewPayment",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "string",
        "name": "itemCode"
      },
      {
        "type": "uint256",
        "name": "totalPricePaid"
      },
      {
        "type": "address",
        "name": "currencyContract"
      },
      {
        "type": "uint256",
        "name": "payId"
      }
    ]
  },
  {
    "name": "NewSale",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "seller",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalPricePaid"
      },
      {
        "type": "address",
        "name": "currencyContract"
      },
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "uint256",
        "name": "tradeId"
      }
    ]
  },
  {
    "name": "NftChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAddr"
      }
    ]
  },
  {
    "name": "OwnerChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAddr"
      }
    ]
  },
  {
    "name": "PlatformFeeInfoUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "platformFeeRecipient"
      },
      {
        "type": "uint256",
        "name": "platformFeeBps"
      },
      {
        "type": "uint256",
        "name": "platformFeeMinBKID"
      },
      {
        "type": "address",
        "name": "platformFeeBKIDAddr"
      },
      {
        "type": "uint256",
        "name": "platformPayoutMinBKID"
      }
    ]
  },
  {
    "name": "AcceptOfferNFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_offerId"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "bytes",
        "name": "signature"
      },
      {
        "type": "uint256",
        "name": "_tradeId"
      }
    ],
    "outputs": []
  },
  {
    "name": "BOX2ADDR",
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
    "name": "BridgeBurn",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "toChain"
      },
      {
        "type": "address",
        "name": "targetContract"
      },
      {
        "type": "uint256",
        "name": "tokenIdOrAmount"
      },
      {
        "type": "address",
        "name": "feeRecipient"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "bytes",
        "name": "signature"
      },
      {
        "type": "uint256",
        "name": "marketBridgeId"
      }
    ],
    "outputs": []
  },
  {
    "name": "BridgeMint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "bridgeId"
      },
      {
        "type": "uint256",
        "name": "fromChain"
      },
      {
        "type": "address",
        "name": "toChainContract"
      },
      {
        "type": "address",
        "name": "toWallet"
      },
      {
        "type": "uint256",
        "name": "tokenIdOrAmount"
      },
      {
        "type": "string",
        "name": "uri"
      },
      {
        "type": "uint256",
        "name": "marketBridgeId"
      }
    ],
    "outputs": []
  },
  {
    "name": "CancelOfferNFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_offerId"
      }
    ],
    "outputs": []
  },
  {
    "name": "CreateDigest",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_seller"
      },
      {
        "type": "address",
        "name": "_currency"
      },
      {
        "type": "uint256",
        "name": "_currencyAmount"
      },
      {
        "type": "address",
        "name": "_nftAddr"
      },
      {
        "type": "uint256",
        "name": "_tokenid"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      },
      {
        "type": "uint256",
        "name": "_tradeId"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "CreatePaymentDigest",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_buyer"
      },
      {
        "type": "address",
        "name": "_currency"
      },
      {
        "type": "uint256",
        "name": "_currencyAmount"
      },
      {
        "type": "string",
        "name": "_itemCode"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      },
      {
        "type": "uint256",
        "name": "_payId"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "GetBridgeToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "bridgeId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "fromChain"
          },
          {
            "type": "uint256",
            "name": "toChain"
          },
          {
            "type": "address",
            "name": "targetContract"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint256",
            "name": "tokenIdOrAmount"
          },
          {
            "type": "string",
            "name": "uri"
          }
        ]
      }
    ]
  },
  {
    "name": "GetContractBalance",
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
    "name": "GetOfferInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_offerId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "buyer"
          },
          {
            "type": "address",
            "name": "nftAddr"
          },
          {
            "type": "address",
            "name": "currency"
          },
          {
            "type": "uint256",
            "name": "currencyAmount"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "uint256",
            "name": "offerTradeId"
          }
        ]
      }
    ]
  },
  {
    "name": "MAX_BPS",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "MsSetBKTContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_bktContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "MsSetBox2Address",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_box2Address"
      }
    ],
    "outputs": []
  },
  {
    "name": "MsSetBoxAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_boxAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "MsSetItemNftAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_nftAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "MsSetMasterAddr",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_masterAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "MsSetNativePayAddr",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_nativePayAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "MsSetNftAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_nftAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "NATIVE_TOKEN",
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
    "name": "OfferNFT",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_nftAddr"
      },
      {
        "type": "address",
        "name": "_currency"
      },
      {
        "type": "uint256",
        "name": "_currencyAmount"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      },
      {
        "type": "uint256",
        "name": "_offerTradeId"
      }
    ],
    "outputs": []
  },
  {
    "name": "Pay",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_currency"
      },
      {
        "type": "uint256",
        "name": "_currencyAmount"
      },
      {
        "type": "string",
        "name": "_itemCode"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "TradeNFT",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_seller"
      },
      {
        "type": "address",
        "name": "_currency"
      },
      {
        "type": "uint256",
        "name": "_currencyAmount"
      },
      {
        "type": "address",
        "name": "_nftAddr"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      },
      {
        "type": "bytes",
        "name": "signature"
      },
      {
        "type": "uint256",
        "name": "_tradeId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "contractType",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "contractVersion",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "expireSignature",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_seller"
      },
      {
        "type": "address",
        "name": "_currency"
      },
      {
        "type": "uint256",
        "name": "_currencyAmount"
      },
      {
        "type": "address",
        "name": "_nftAddr"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      },
      {
        "type": "uint256",
        "name": "_tradeId"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "getPlatformFeeInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      },
      {
        "type": "uint16"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
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
        "name": "_platformFeeRecipient"
      },
      {
        "type": "uint256",
        "name": "_platformFeeBps"
      },
      {
        "type": "uint256",
        "name": "_platformFeeMinBKID"
      }
    ],
    "outputs": []
  },
  {
    "name": "isContract",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "pure",
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
    "name": "payCounts",
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
    "name": "platformFeeBKIDAddr",
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
    "name": "platformFeeMinBKID",
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
    "name": "platformPayoutMinBKID",
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
    "name": "setPlatformFeeInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_platformFeeRecipient"
      },
      {
        "type": "uint256",
        "name": "_platformFeeBps"
      },
      {
        "type": "uint256",
        "name": "_platformFeeMinBKID"
      },
      {
        "type": "address",
        "name": "_platformFeeBKIDAddr"
      },
      {
        "type": "uint256",
        "name": "_platformPayoutMinBKID"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract