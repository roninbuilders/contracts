import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25583,
  address: '0x205920b1c6513ce5c7bf2fcf1130f54fa7291419' as const,
  contract_name: 'CEther',
  display_name: 'C Ether',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1704395781,
  abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract