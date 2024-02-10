import type { Abi } from 'abitype'

export interface Contract {
	name: string
	address: `0x${string}`
	is_deprecated: boolean
	abi: Abi | readonly unknown[]
}
