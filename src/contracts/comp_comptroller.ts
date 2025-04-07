import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 337,
  address: '0xa7c5a879a1c6241eb74aef98445a1ffda4894db0' as const,
  contract_name: 'CompComptroller',
  display_name: 'Comp Comptroller',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1672169547,
  abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract