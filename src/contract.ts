import type { Abi } from 'abitype'

export interface Contract<T extends Abi | readonly unknown[]> {
	name: string
	address: `0x${string}`
	is_deprecated: boolean
	created_at: number
	abi: T
}
