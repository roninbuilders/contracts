import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25582,
  address: '0xa32f416e2e70353ab7725519ca80c57bab5ad753' as const,
  contract_name: 'CErc20',
  display_name: 'C Erc 20',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1704395790,
  abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract