import { test, describe, expect } from 'bun:test'
import { Contract, formatEther, formatUnits, JsonRpcProvider } from 'ethers'
import { RONIN_RPC_URL, TEST_ADDRESS } from './utils'
import WRAPPED_ETHER from '../dist/wrapped_ether'
import USD_COIN from '../dist/usd_coin'
import AXIE_PROXY from '../dist/axie_proxy'
import ATIAS_BLESSING from '../dist/atias_blessing'
import SMOOTH_LOVE_POTION from '../dist/smooth_love_potion'

describe('Ethers Contract Integration', () => {
	const provider = new JsonRpcProvider(RONIN_RPC_URL)

	test('should read contract data using ethers', async () => {
		const ronBalance = await provider.getBalance(TEST_ADDRESS)
		console.log(`RON: ${formatEther(ronBalance)}`)

		const wethContract = new Contract(WRAPPED_ETHER.address, WRAPPED_ETHER.abi, provider)
		const wethBalance = await wethContract.balanceOf?.(TEST_ADDRESS)
		console.log(`WETH: ${formatEther(wethBalance)}`)

		const usdcContract = new Contract(USD_COIN.address, USD_COIN.abi, provider)
		const usdcBalance = await usdcContract.balanceOf?.(TEST_ADDRESS)
		const usdcDecimals = await usdcContract.decimals?.()
		console.log(`USDC: ${formatUnits(usdcBalance, usdcDecimals)}`)

		const slpContract = new Contract(SMOOTH_LOVE_POTION.address, SMOOTH_LOVE_POTION.abi, provider)
		const slpBalance = await slpContract.balanceOf?.(TEST_ADDRESS)
		const slpDecimals = await slpContract.decimals?.()
		console.log(`SLP: ${formatUnits(slpBalance, slpDecimals)}`)

		const axieContract = new Contract(AXIE_PROXY.address, AXIE_PROXY.proxy_abi, provider)
		const axiesBalance = await axieContract.balanceOf?.(TEST_ADDRESS)
		console.log(`Axies: ${axiesBalance.toString()}`)

		expect(typeof ronBalance).toBe('bigint')
		expect(typeof wethBalance).toBe('bigint')
		expect(typeof usdcBalance).toBe('bigint')
		expect(typeof slpBalance).toBe('bigint')
		expect(typeof axiesBalance).toBe('bigint')
	})

	test('should interact with contract using proxy ABI', async () => {
		const atiasContract = new Contract(ATIAS_BLESSING.address, ATIAS_BLESSING.proxy_abi, provider)
		const streakData = await atiasContract.getStreak?.(TEST_ADDRESS)
		const [currentStreak, lastActivated, longestStreak, lostStreak] = streakData

		console.log(`Current Streak: ${currentStreak.toString()}`)
		console.log(`Last Activated: ${new Date(Number(lastActivated) * 1000).toISOString()}`)

		expect(typeof currentStreak).toBe('bigint')
		expect(typeof lastActivated).toBe('bigint')
		expect(typeof longestStreak).toBe('bigint')
		expect(typeof lostStreak).toBe('bigint')

		const activationStatus = await atiasContract.getActivationStatus?.(TEST_ADDRESS)
		const [isLostStreak, hasPrayedToday] = activationStatus

		expect(typeof isLostStreak).toBe('boolean')
		expect(typeof hasPrayedToday).toBe('boolean')
	})
})
