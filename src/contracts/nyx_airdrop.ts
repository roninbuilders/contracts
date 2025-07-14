import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36175,
  address: '0x88063ced236e83a5dc8fb9b751d93b81652c5bbf' as const,
  contract_name: 'NyxAirdrop',
  display_name: 'Nyx Airdrop',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1752479457,
  abi: [
  {
    "name": "airdropBatch",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address[]",
        "name": "recipients"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract