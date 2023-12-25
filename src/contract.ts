import { Abi } from 'abitype'

export interface Contract {
	name: string
	address: `0x${string}`
	abi: Abi | readonly unknown[]
}
