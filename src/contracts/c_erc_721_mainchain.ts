import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 354,
  address: '0x3fbc37b5d67b9d12f1034e39a285af31eb91dfae' as const,
  contract_name: 'CErc721Mainchain',
  display_name: 'C Erc721 Mainchain',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1681181530,
  abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract