/**
 * CommonJS example using @roninbuilders/contracts with ethers
 *
 * This example demonstrates how to:
 * - Import contracts using CommonJS require syntax
 * - Create ethers.js contract instances
 * - Read token balances from Ronin Network
 */

const { Contract, formatEther, formatUnits, JsonRpcProvider } = require('ethers')

// Import contracts using CommonJS require
const WRAPPED_ETHER = require('@roninbuilders/contracts/wrapped_ether')
const USD_COIN = require('@roninbuilders/contracts/usd_coin')
const AXIE_PROXY = require('@roninbuilders/contracts/axie_proxy')
const SMOOTH_LOVE_POTION = require('@roninbuilders/contracts/smooth_love_potion')

const RONIN_RPC_URL = 'https://api.roninchain.com/rpc'
const EXAMPLE_ADDRESS = '0x456f2e2033fbf3ddadcfdcaa8ba0905bb83d7853'

async function main() {
	console.log('🚀 Ronin Network Contracts Example (CommonJS + Ethers)')
	console.log('=====================================================\n')

	const provider = new JsonRpcProvider(RONIN_RPC_URL)

	try {
		console.log('📋 Contract Information:')
		console.log(`WRAPPED_ETHER: ${WRAPPED_ETHER.address}`)
		console.log(`USD_COIN: ${USD_COIN.address}`)
		console.log(`AXIE_PROXY: ${AXIE_PROXY.address}`)
		console.log(`SMOOTH_LOVE_POTION: ${SMOOTH_LOVE_POTION.address}\n`)

		console.log(`💰 Token Balances for ${EXAMPLE_ADDRESS}:`)

		// Native RON balance
		const ronBalance = await provider.getBalance(EXAMPLE_ADDRESS)
		console.log(`RON: ${formatEther(ronBalance)}`)

		// WETH balance
		const wethContract = new Contract(WRAPPED_ETHER.address, WRAPPED_ETHER.abi, provider)
		const wethBalance = await wethContract.balanceOf(EXAMPLE_ADDRESS)
		console.log(`WETH: ${formatEther(wethBalance)}`)

		// USDC balance
		const usdcContract = new Contract(USD_COIN.address, USD_COIN.abi, provider)
		const usdcBalance = await usdcContract.balanceOf(EXAMPLE_ADDRESS)
		const usdcDecimals = await usdcContract.decimals()
		console.log(`USDC: ${formatUnits(usdcBalance, usdcDecimals)}`)

		// SLP balance
		const slpContract = new Contract(SMOOTH_LOVE_POTION.address, SMOOTH_LOVE_POTION.abi, provider)
		const slpBalance = await slpContract.balanceOf(EXAMPLE_ADDRESS)
		const slpDecimals = await slpContract.decimals()
		console.log(`SLP: ${formatUnits(slpBalance, slpDecimals)}`)

		// Axies NFT balance
		const axieContract = new Contract(AXIE_PROXY.address, AXIE_PROXY.proxy_abi, provider)
		const axiesBalance = await axieContract.balanceOf(EXAMPLE_ADDRESS)
		console.log(`Axies: ${axiesBalance.toString()}`)

		console.log('\n✅ Example completed successfully!')
	} catch (error) {
		console.error('\n❌ Error:', error.message)
		process.exit(1)
	}
}

main()
