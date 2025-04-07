import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 356,
  address: '0x098ca51010455f89f03ba2ebd94783b4e7c181bb' as const,
  contract_name: 'CErc20',
  display_name: 'C Erc20',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1684958683,
  abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract