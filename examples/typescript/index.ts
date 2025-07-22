/**
 * Bun example using @roninbuilders/contracts with viem
 *
 * This example demonstrates how to:
 * - Import contracts using ES modules
 * - Create viem client for Ronin Network
 * - Read token balances and contract data
 * - Work with TypeScript and Bun runtime
 */

import { createPublicClient, http, formatEther, formatUnits } from 'viem'

// Import contracts using ES modules
import WRAPPED_ETHER from '@roninbuilders/contracts/wrapped_ether'
import USD_COIN from '@roninbuilders/contracts/usd_coin'
import AXIE_PROXY from '@roninbuilders/contracts/axie_proxy'
import SMOOTH_LOVE_POTION from '@roninbuilders/contracts/smooth_love_potion'
import ATIAS_BLESSING from '@roninbuilders/contracts/atias_blessing'

const RONIN_RPC_URL = 'https://api.roninchain.com/rpc'
const EXAMPLE_ADDRESS = '0x456f2e2033fbf3ddadcfdcaa8ba0905bb83d7853' as const

const formatTimestamp = (timestamp: bigint): string => {
	return new Date(Number(timestamp) * 1000).toISOString()
}

async function main() {
	console.log('🚀 Ronin Network Contracts Example (Bun + Viem + TypeScript)')
	console.log('=============================================================\n')

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

	try {
		console.log('📋 Contract Information:')
		console.log(`WRAPPED_ETHER: ${WRAPPED_ETHER.address}`)
		console.log(`USD_COIN: ${USD_COIN.address}`)
		console.log(`AXIE_PROXY: ${AXIE_PROXY.address}`)
		console.log(`SMOOTH_LOVE_POTION: ${SMOOTH_LOVE_POTION.address}`)
		console.log(`ATIAS_BLESSING: ${ATIAS_BLESSING.address}\n`)

		console.log(`💰 Token Balances for ${EXAMPLE_ADDRESS}:`)

		// Native RON balance
		const ronBalance = await client.getBalance({
			address: EXAMPLE_ADDRESS,
		})
		console.log(`RON: ${formatEther(ronBalance)}`)

		// WETH balance
		const wethBalance = await client.readContract({
			address: WRAPPED_ETHER.address,
			abi: WRAPPED_ETHER.abi,
			functionName: 'balanceOf',
			args: [EXAMPLE_ADDRESS],
		})
		console.log(`WETH: ${formatEther(wethBalance)}`)

		// USDC balance
		const usdcBalance = await client.readContract({
			address: USD_COIN.address,
			abi: USD_COIN.abi,
			functionName: 'balanceOf',
			args: [EXAMPLE_ADDRESS],
		})
		const usdcDecimals = await client.readContract({
			address: USD_COIN.address,
			abi: USD_COIN.abi,
			functionName: 'decimals',
		})
		console.log(`USDC: ${formatUnits(usdcBalance, usdcDecimals)}`)

		// SLP balance
		const slpBalance = await client.readContract({
			address: SMOOTH_LOVE_POTION.address,
			abi: SMOOTH_LOVE_POTION.abi,
			functionName: 'balanceOf',
			args: [EXAMPLE_ADDRESS],
		})
		const slpDecimals = await client.readContract({
			address: SMOOTH_LOVE_POTION.address,
			abi: SMOOTH_LOVE_POTION.abi,
			functionName: 'decimals',
		})
		console.log(`SLP: ${formatUnits(slpBalance, slpDecimals)}`)

		// Axies NFT balance
		const axiesBalance = await client.readContract({
			address: AXIE_PROXY.address,
			abi: AXIE_PROXY.proxy_abi,
			functionName: 'balanceOf',
			args: [EXAMPLE_ADDRESS],
		})
		console.log(`Axies: ${axiesBalance.toString()}`)

		console.log(`\n🎯 Atias Blessing Data for ${EXAMPLE_ADDRESS}:`)

		// Fetch streak data
		const streakData = await client.readContract({
			address: ATIAS_BLESSING.address,
			abi: ATIAS_BLESSING.proxy_abi,
			functionName: 'getStreak',
			args: [EXAMPLE_ADDRESS],
		})

		const [currentStreak, lastActivated, longestStreak, lostStreak] = streakData

		console.log(`Current Streak: ${currentStreak.toString()}`)
		console.log(`Last Activated: ${formatTimestamp(lastActivated)}`)
		console.log(`Longest Streak: ${longestStreak.toString()}`)
		console.log(`Lost Streak: ${lostStreak.toString()}`)

		// Fetch activation status
		const activationStatus = await client.readContract({
			address: ATIAS_BLESSING.address,
			abi: ATIAS_BLESSING.proxy_abi,
			functionName: 'getActivationStatus',
			args: [EXAMPLE_ADDRESS],
		})

		const [isLostStreak, hasPrayedToday] = activationStatus
		console.log(`Is Lost Streak: ${isLostStreak}`)
		console.log(`Has Prayed Today: ${hasPrayedToday}`)

		console.log('\n✅ Example completed successfully!')
	} catch (error) {
		console.error('\n❌ Error:', error instanceof Error ? error.message : String(error))
		process.exit(1)
	}
}

main()
