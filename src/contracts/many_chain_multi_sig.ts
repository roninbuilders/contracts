import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25588,
  address: '0xc85e94261dc11477e1d3bf0cd76d653d0a9c206c' as const,
  contract_name: 'ManyChainMultiSig',
  display_name: 'Many Chain Multi Sig',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1730268007,
  abi: [] as const satisfies Abi
} as const satisfies Contract
export default contract