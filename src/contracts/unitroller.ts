import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 341,
  address: '0x9e8fd99fc64cd2ff4b5846361a7ec457f2b3808e' as const,
  contract_name: 'Unitroller',
  display_name: 'Unitroller',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1672169442,
  abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract