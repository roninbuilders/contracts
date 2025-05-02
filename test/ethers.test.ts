import { test, describe, expect } from 'bun:test'
import { Contract, formatEther, formatUnits, JsonRpcProvider } from 'ethers'
import { RONIN_RPC_URL, TEST_ADDRESS, logSection } from './utils'
import WRAPPED_ETHER from '../dist/wrapped_ether'
import USD_COIN from '../dist/usd_coin'
import AXIE_PROXY from '../dist/axie_proxy'
import ATIAS_BLESSING from '../dist/atias_blessing'

describe('js Contract Integration', () => {
	const provider = new JsonRpcProvider(RONIN_RPC_URL)

	test('should fetch token balances', async () => {
		logSection('Testing Ethers Token Balance Fetching')

		const ronBalance = await provider.getBalance(TEST_ADDRESS)
		console.log(`RON: ${formatEther(ronBalance)}`)

		const wethContract = new Contract(WRAPPED_ETHER.address, WRAPPED_ETHER.abi, provider)
		const wethBalance = await wethContract.balanceOf(TEST_ADDRESS)
		console.log(`WETH: ${formatEther(wethBalance)}`)

		const usdcContract = new Contract(USD_COIN.address, USD_COIN.abi, provider)
		const usdcBalance = await usdcContract.balanceOf(TEST_ADDRESS)
		const usdcDecimals = await usdcContract.decimals()
		const usdcBalanceFormatted = formatUnits(usdcBalance, usdcDecimals)
		console.log(`USDC balance: ${usdcBalanceFormatted}`)

		const axieContract = new Contract(AXIE_PROXY.address, AXIE_PROXY.proxy_abi, provider)
		const axiesBalance = await axieContract.balanceOf(TEST_ADDRESS)
		console.log(`Axies: ${axiesBalance.toString()}`)

		const axiesBalanceEthersInterface = await axieContract.balanceOf(TEST_ADDRESS)
		console.log(`Axies: ${axiesBalanceEthersInterface.toString()}`)
	})

	test('should fetch Atias Blessing streak data', async () => {
		logSection('Testing Atias Blessing Streak Data with Ethers')

		// Create contract using direct ABI reference without Interface wrapper
		const atiasContract = new Contract(
			ATIAS_BLESSING.address,
			ATIAS_BLESSING.proxy_abi,
			provider
		)

		// Get streak data 
		const streakData = await atiasContract.getStreak(TEST_ADDRESS)
		
		// Destructure the returned data
		const [currentStreak, lastActivated, longestStreak, lostStreak] = streakData
		
		console.log('Atias Blessing Streak Data:')
		console.log(`  Current Streak: ${currentStreak.toString()}`)
		console.log(`  Last Activated: ${new Date(Number(lastActivated) * 1000).toISOString()}`)
		console.log(`  Longest Streak: ${longestStreak.toString()}`)
		console.log(`  Lost Streak: ${lostStreak.toString()}`)
		
		// Verify types
		expect(typeof currentStreak).toBe('bigint')
		expect(typeof lastActivated).toBe('bigint')
		expect(typeof longestStreak).toBe('bigint')
		expect(typeof lostStreak).toBe('bigint')
	})

	test('should fetch Atias Blessing activation status', async () => {
		logSection('Testing Atias Blessing Activation Status with Ethers')

		const atiasContract = new Contract(
			ATIAS_BLESSING.address,
			ATIAS_BLESSING.proxy_abi,
			provider
		)

		const activationStatus = await atiasContract.getActivationStatus(TEST_ADDRESS)

		const [isLostStreak, hasPrayedToday] = activationStatus

		console.log('Atias Blessing Activation Status:')
		console.log(`  Is Lost Streak: ${isLostStreak}`)
		console.log(`  Has Prayed Today: ${hasPrayedToday}`)

		expect(typeof isLostStreak).toBe('boolean')
		expect(typeof hasPrayedToday).toBe('boolean')
	})
})
