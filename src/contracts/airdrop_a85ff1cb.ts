import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34549,
  address: '0x87cf4cf7f878b83c3fc6e6b88b1a0170a85ff1cb' as const,
  contract_name: 'Airdrop',
  display_name: 'Airdrop',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1746178652,
  abi: [
  {
    "name": "ERC20Airdropped",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "erc20Contract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "ERC721Airdropped",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ]
  },
  {
    "name": "ETHAirdropped",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "airdropERC20",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "erc20Contract"
      },
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "airdropERC721",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "nftContract"
      },
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "airdropETH",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address[]",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract