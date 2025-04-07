import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 308,
  address: '0xf747740a019712201002ea7d7a7893ad54c0c299' as const,
  contract_name: 'Axie',
  display_name: 'Old Axie Proxy 1',
  is_deprecated: true,
  is_proxy: true,
  proxy_to: '0xf2a366de25d25f2df26c24d963195ccaa7af58ff',
  created_at: 1619515859,
  abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract