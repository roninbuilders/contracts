/**
 * Test utilities for Ronin Network contracts
 */

export const RONIN_RPC_URL = 'https://api.roninchain.com/rpc'

// Common test address to check balances
export const TEST_ADDRESS = '0x456f2e2033fbf3ddadcfdcaa8ba0905bb83d7853' as const

/**
 * Wait for a specified number of milliseconds
 */
export const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Format wei amount to display format
 */
export const formatWei = (wei: bigint): string => {
	const ether = Number(wei) / 1e18
	return ether.toLocaleString('en-US', {
		maximumFractionDigits: 6,
	})
}

/**
 * Format a blockchain timestamp (seconds since epoch) to a readable date string
 */
export const formatTimestamp = (timestamp: bigint): string => {
	return new Date(Number(timestamp) * 1000).toISOString()
}

/**
 * Log a section header to the console
 */
export const logSection = (title: string): void => {
	console.log('\n' + '='.repeat(50))
	console.log(` 🧪 ${title}`)
	console.log('='.repeat(50))
}
