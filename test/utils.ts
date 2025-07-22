export const RONIN_RPC_URL = 'https://api.roninchain.com/rpc'

export const TEST_ADDRESS = '0x456f2e2033fbf3ddadcfdcaa8ba0905bb83d7853' as const

export const formatTimestamp = (timestamp: bigint): string => {
	return new Date(Number(timestamp) * 1000).toISOString()
}
