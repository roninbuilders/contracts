import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 351,
  address: '0x82e5030a8f1c08ffe8fd14a09cbffdb5ce26e388' as const,
  contract_name: 'CEther',
  display_name: 'C Ether',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1681170010,
  abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract