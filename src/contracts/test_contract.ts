import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25898,
  address: '0x2a15e7595069d0794092a3d2d59b4a287da0ebaa' as const,
  contract_name: 'TestContract',
  display_name: 'Test Contract',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1740454722,
  abi: [
  {
    "name": "test",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract