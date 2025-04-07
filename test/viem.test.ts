import { test, describe, expect } from 'bun:test'
import { createPublicClient, http, formatEther } from 'viem'
import { RONIN_RPC_URL, TEST_ADDRESS, logSection, formatTimestamp } from './utils'
import { WRAPPED_ETHER, USD_COIN, AXIE_PROXY, ATIAS_BLESSING } from '../dist'

describe('Viem Contract Integration', () => {
	const client = createPublicClient({
		chain: {
			id: 2020,
			name: 'Ronin',
			network: 'ronin',
			nativeCurrency: {
				decimals: 18,
				name: 'Ronin',
				symbol: 'RON',
			},
			rpcUrls: {
				default: { http: [RONIN_RPC_URL] },
				public: { http: [RONIN_RPC_URL] },
			},
		},
		transport: http(),
	})

	test('should fetch token balances', async () => {
		logSection('Testing Viem Token Balance Fetching')

		// Fetch RON balance
		const ronBalance = await client.getBalance({
			address: TEST_ADDRESS,
		})
		console.log(`RON: ${formatEther(ronBalance)}`)

		// Fetch WETH balance
		const wethBalance = await client.readContract({
			address: WRAPPED_ETHER.address,
			abi: WRAPPED_ETHER.abi,
			functionName: 'balanceOf',
			args: [TEST_ADDRESS],
		})
		console.log(`WETH: ${formatEther(wethBalance)}`)

		// Fetch USD Coin balance
		const usdcBalance = await client.readContract({
			address: USD_COIN.address,
			abi: USD_COIN.abi,
			functionName: 'balanceOf',
			args: [TEST_ADDRESS],
		})
		console.log(`USDC balance: ${formatEther(usdcBalance)}`)

		// Fetch Axies balance
		const axiesBalance = await client.readContract({
			address: AXIE_PROXY.address,
			abi: AXIE_PROXY.proxy_abi,
			functionName: 'balanceOf',
			args: [TEST_ADDRESS],
		})
		console.log(`Axies: ${axiesBalance.toString()}`)
	})

	test('should fetch Atias Blessing streak data', async () => {
		logSection('Testing Atias Blessing Streak Data with Viem')

		// Fetch streak data using viem
		const streakData = await client.readContract({
			address: ATIAS_BLESSING.address,
			abi: ATIAS_BLESSING.proxy_abi,
			functionName: 'getStreak',
			args: [TEST_ADDRESS],
		})

		// With viem, the result is returned as a tuple
		const [currentStreak, lastActivated, longestStreak, lostStreak] = streakData
		
		console.log('Atias Blessing Streak Data:')
		console.log(`  Current Streak: ${currentStreak.toString()}`)
		console.log(`  Last Activated: ${formatTimestamp(lastActivated)}`)
		console.log(`  Longest Streak: ${longestStreak.toString()}`)
		console.log(`  Lost Streak: ${lostStreak.toString()}`)
		
		// Verify we have valid bigint values
		expect(typeof currentStreak).toBe('bigint')
		expect(typeof lastActivated).toBe('bigint')
		expect(typeof longestStreak).toBe('bigint')
		expect(typeof lostStreak).toBe('bigint')
	})
})
