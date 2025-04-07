import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 359,
  address: '0x9e97f0a5b8582a336123667338992d8a8499cdf3' as const,
  contract_name: 'LiquidityAssessor',
  display_name: 'Liquidity Assessor',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1684958665,
  abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract