import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 307,
  address: '0x469efe320d172a1932b05d19964ae03d989ccb93' as const,
  contract_name: 'Axie',
  display_name: 'Old Axie Proxy 2',
  is_deprecated: true,
  is_proxy: true,
  proxy_to: '0x63df25f28decaa151988e9e51755b482ee09c3ab',
  created_at: 1619583665,
  abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract