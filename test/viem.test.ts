import { test, describe, expect } from 'bun:test'
import { createPublicClient, http, formatEther, formatUnits } from 'viem'
import { RONIN_RPC_URL, TEST_ADDRESS, formatTimestamp } from './utils'
import WRAPPED_ETHER from '../dist/wrapped_ether'
import USD_COIN from '../dist/usd_coin'
import AXIE_PROXY from '../dist/axie_proxy'
import ATIAS_BLESSING from '../dist/atias_blessing'
import SMOOTH_LOVE_POTION from '../dist/smooth_love_potion'

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

	test('should read contract data using viem', async () => {
		const ronBalance = await client.getBalance({ address: TEST_ADDRESS })
		console.log(`RON: ${formatEther(ronBalance)}`)

		const wethBalance = await client.readContract({
			address: WRAPPED_ETHER.address,
			abi: WRAPPED_ETHER.abi,
			functionName: 'balanceOf',
			args: [TEST_ADDRESS],
		})
		console.log(`WETH: ${formatEther(wethBalance)}`)

		const usdcBalance = await client.readContract({
			address: USD_COIN.address,
			abi: USD_COIN.abi,
			functionName: 'balanceOf',
			args: [TEST_ADDRESS],
		})
		const usdcDecimals = await client.readContract({
			address: USD_COIN.address,
			abi: USD_COIN.abi,
			functionName: 'decimals',
		})
		console.log(`USDC: ${formatUnits(usdcBalance, usdcDecimals)}`)

		const slpBalance = await client.readContract({
			address: SMOOTH_LOVE_POTION.address,
			abi: SMOOTH_LOVE_POTION.abi,
			functionName: 'balanceOf',
			args: [TEST_ADDRESS],
		})
		const slpDecimals = await client.readContract({
			address: SMOOTH_LOVE_POTION.address,
			abi: SMOOTH_LOVE_POTION.abi,
			functionName: 'decimals',
		})
		console.log(`SLP: ${formatUnits(slpBalance, slpDecimals)}`)

		const axiesBalance = await client.readContract({
			address: AXIE_PROXY.address,
			abi: AXIE_PROXY.proxy_abi,
			functionName: 'balanceOf',
			args: [TEST_ADDRESS],
		})
		console.log(`Axies: ${axiesBalance.toString()}`)

		expect(typeof ronBalance).toBe('bigint')
		expect(typeof wethBalance).toBe('bigint')
		expect(typeof usdcBalance).toBe('bigint')
		expect(typeof slpBalance).toBe('bigint')
		expect(typeof axiesBalance).toBe('bigint')
	})

	test('should interact with contract using proxy ABI', async () => {
		const streakData = await client.readContract({
			address: ATIAS_BLESSING.address,
			abi: ATIAS_BLESSING.proxy_abi,
			functionName: 'getStreak',
			args: [TEST_ADDRESS],
		})
		const [currentStreak, lastActivated, longestStreak, lostStreak] = streakData

		console.log(`Current Streak: ${currentStreak.toString()}`)
		console.log(`Last Activated: ${formatTimestamp(lastActivated)}`)

		expect(typeof currentStreak).toBe('bigint')
		expect(typeof lastActivated).toBe('bigint')
		expect(typeof longestStreak).toBe('bigint')
		expect(typeof lostStreak).toBe('bigint')

		const activationStatus = await client.readContract({
			address: ATIAS_BLESSING.address,
			abi: ATIAS_BLESSING.proxy_abi,
			functionName: 'getActivationStatus',
			args: [TEST_ADDRESS],
		})
		const [isLostStreak, hasPrayedToday] = activationStatus

		expect(typeof isLostStreak).toBe('boolean')
		expect(typeof hasPrayedToday).toBe('boolean')
	})
})
