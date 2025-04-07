import type { Abi } from 'abitype'

// Just use a type that ensures the ABI is properly typed
export type Contract = {
	readonly id: number
	readonly address: `0x${string}`
	readonly contract_name: string
	readonly display_name: string
	readonly is_deprecated: boolean
	readonly is_proxy: boolean
	readonly proxy_to: false | string
	readonly created_at: number | undefined
	readonly abi: Abi
	readonly proxy_abi?: Abi
}
