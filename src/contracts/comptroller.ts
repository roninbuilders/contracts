import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25610,
  address: '0x8ab7d64d60d7880e4b273fb74eac2962f5dbbf53' as const,
  contract_name: 'Comptroller',
  display_name: 'Comptroller',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739450201,
  abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract