import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 462,
  address: '0x3072c438e505a80e97836db638f591492743f3d1' as const,
  contract_name: 'CEtherStaking',
  display_name: 'C Ether Staking',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1692116121,
  abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract