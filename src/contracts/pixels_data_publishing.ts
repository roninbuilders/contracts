import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 29527,
  address: '0x841ae3ae1c56cff35bc9953203de73e17220a735' as const,
  contract_name: 'PixelsDataPublishing',
  display_name: 'Pixels Data Publishing',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742694811,
  abi: [
  {
    "name": "TrackEvent",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "app_name"
      },
      {
        "type": "string",
        "name": "event_name"
      },
      {
        "type": "string",
        "name": "data"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "string",
        "name": "attributes"
      }
    ]
  },
  {
    "name": "track",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "app_name"
      },
      {
        "type": "string",
        "name": "event_name"
      },
      {
        "type": "string",
        "name": "data"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "string",
        "name": "attributes"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract