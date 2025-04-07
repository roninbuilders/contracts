import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 363,
  address: '0xe791c6924691d8208a3c31e997091c19ecc7369e' as const,
  contract_name: 'CErc721Staking',
  display_name: 'C Erc721 Staking',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1685556361,
  abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract