import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 336,
  address: '0x9d5a8a83dd2b66236d52790a091c58ab666d1d8b' as const,
  contract_name: 'CompUnitroller',
  display_name: 'Comp Unitroller',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1672169541,
  abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract