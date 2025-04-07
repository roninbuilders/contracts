import { test, describe, expect } from 'bun:test'
import { ethers, Interface } from 'ethers'
import { RONIN_RPC_URL, TEST_ADDRESS, logSection } from './utils'
import { WRAPPED_ETHER, USD_COIN, AXIE_PROXY, ATIAS_BLESSING } from '../dist'

describe('Ethers.js Contract Integration', () => {
	const provider = new ethers.JsonRpcProvider(RONIN_RPC_URL)

	test('should fetch token balances', async () => {
		logSection('Testing Ethers Token Balance Fetching')

		// Fetch RON balance
		const ronBalance = await provider.getBalance(TEST_ADDRESS)
		console.log(`RON: ${ethers.formatEther(ronBalance)}`)

		// Fetch WETH balance
		const wethContract = new ethers.Contract(WRAPPED_ETHER.address, WRAPPED_ETHER.abi, provider)
		const wethBalance = await wethContract.balanceOf(TEST_ADDRESS)
		console.log(`WETH: ${ethers.formatEther(wethBalance)}`)

		// Fetch USD Coin balance
		const usdcContract = new ethers.Contract(USD_COIN.address, USD_COIN.abi, provider)
		const usdcBalance = await usdcContract.balanceOf(TEST_ADDRESS)
		const usdcDecimals = await usdcContract.decimals()
		const usdcBalanceFormatted = ethers.formatUnits(usdcBalance, usdcDecimals)
		console.log(`USDC balance: ${usdcBalanceFormatted}`)

		// Fetch Axies balance
		const axieContract = new ethers.Contract(AXIE_PROXY.address, AXIE_PROXY.proxy_abi, provider)
		const axiesBalance = await axieContract.balanceOf(TEST_ADDRESS)
		console.log(`Axies: ${axiesBalance.toString()}`)

		// Fetch Axies balance
		const iface = new Interface(AXIE_PROXY.proxy_abi)
		const axieContractEthersInterface = new ethers.Contract(AXIE_PROXY.address, iface, provider)
		const axiesBalanceEthersInterface = await axieContract.balanceOf(TEST_ADDRESS)
		console.log(`Axies: ${axiesBalanceEthersInterface.toString()}`)
	})

	test('should fetch Atias Blessing streak data', async () => {
		logSection('Testing Atias Blessing Streak Data with Ethers')

		// Create contract instance using proxy ABI
		const atiasContract = new ethers.Contract(
			ATIAS_BLESSING.address,
			ATIAS_BLESSING.proxy_abi,
			provider
		)

		// Fetch streak data for test address
		const streakData = await atiasContract.getStreak(TEST_ADDRESS)
		
		// Destructure the returned data for better readability
		const [currentStreak, lastActivated, longestStreak, lostStreak] = streakData
		
		console.log('Atias Blessing Streak Data:')
		console.log(`  Current Streak: ${currentStreak.toString()}`)
		console.log(`  Last Activated: ${new Date(Number(lastActivated) * 1000).toISOString()}`)
		console.log(`  Longest Streak: ${longestStreak.toString()}`)
		console.log(`  Lost Streak: ${lostStreak.toString()}`)
		
		// Basic validation - these are not strict assertions since values may change
		expect(typeof currentStreak).toBe('bigint')
		expect(typeof lastActivated).toBe('bigint')
		expect(typeof longestStreak).toBe('bigint')
		expect(typeof lostStreak).toBe('bigint')
	})
})
