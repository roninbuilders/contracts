/**
 * Browser example using @roninbuilders/contracts with viem
 *
 * This script is bundled using Rollup to work in the browser
 */

import { createPublicClient, http, formatEther, formatUnits } from 'viem'

// Import contracts from the actual package
import WRAPPED_ETHER from '@roninbuilders/contracts/wrapped_ether'
import USD_COIN from '@roninbuilders/contracts/usd_coin'
import AXIE_PROXY from '@roninbuilders/contracts/axie_proxy'
import SMOOTH_LOVE_POTION from '@roninbuilders/contracts/smooth_love_potion'
import ATIAS_BLESSING from '@roninbuilders/contracts/atias_blessing'

const RONIN_RPC_URL = 'https://api.roninchain.com/rpc'
const EXAMPLE_ADDRESS = '0x456f2e2033fbf3ddadcfdcaa8ba0905bb83d7853'

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

// Display contract information
function displayContractInfo() {
	const contractInfo = document.getElementById('contract-info')
	contractInfo.innerHTML = `
        <div><strong>WRAPPED_ETHER:</strong> ${WRAPPED_ETHER.address}</div>
        <div><strong>USD_COIN:</strong> ${USD_COIN.address}</div>
        <div><strong>AXIE_PROXY:</strong> ${AXIE_PROXY.address}</div>
        <div><strong>SMOOTH_LOVE_POTION:</strong> ${SMOOTH_LOVE_POTION.address}</div>
        <div><strong>ATIAS_BLESSING:</strong> ${ATIAS_BLESSING.address}</div>
    `
}

// Fetch token balances
window.fetchBalances = async () => {
	const balancesDiv = document.getElementById('balances')
	const button = document.getElementById('fetch-balances')

	button.disabled = true
	balancesDiv.innerHTML = '<div class="loading">Fetching balances...</div>'

	try {
		// RON balance
		const ronBalance = await client.getBalance({
			address: EXAMPLE_ADDRESS,
		})

		// WETH balance
		const wethBalance = await client.readContract({
			address: WRAPPED_ETHER.address,
			abi: WRAPPED_ETHER.abi,
			functionName: 'balanceOf',
			args: [EXAMPLE_ADDRESS],
		})

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

		// Axies balance
		const axiesBalance = await client.readContract({
			address: AXIE_PROXY.address,
			abi: AXIE_PROXY.proxy_abi,
			functionName: 'balanceOf',
			args: [EXAMPLE_ADDRESS],
		})

		balancesDiv.innerHTML = `
            <div class="success">
                <div class="balance">RON: ${formatEther(ronBalance)}</div>
                <div class="balance">WETH: ${formatEther(wethBalance)}</div>
                <div class="balance">USDC: ${formatUnits(usdcBalance, usdcDecimals)}</div>
                <div class="balance">SLP: ${formatUnits(slpBalance, slpDecimals)}</div>
                <div class="balance">Axies: ${axiesBalance.toString()}</div>
            </div>
        `
	} catch (error) {
		balancesDiv.innerHTML = `<div class="error">Error: ${error.message}</div>`
	} finally {
		button.disabled = false
	}
}

// Fetch Atias Blessing data
window.fetchBlessingData = async () => {
	const blessingDiv = document.getElementById('blessing-data')
	const button = document.getElementById('fetch-blessing')

	button.disabled = true
	blessingDiv.innerHTML = '<div class="loading">Fetching blessing data...</div>'

	try {
		// Fetch streak data
		const streakData = await client.readContract({
			address: ATIAS_BLESSING.address,
			abi: ATIAS_BLESSING.proxy_abi,
			functionName: 'getStreak',
			args: [EXAMPLE_ADDRESS],
		})

		const [currentStreak, lastActivated, longestStreak, lostStreak] = streakData

		// Fetch activation status
		const activationStatus = await client.readContract({
			address: ATIAS_BLESSING.address,
			abi: ATIAS_BLESSING.proxy_abi,
			functionName: 'getActivationStatus',
			args: [EXAMPLE_ADDRESS],
		})

		const [isLostStreak, hasPrayedToday] = activationStatus

		blessingDiv.innerHTML = `
            <div class="success">
                <div class="balance">Current Streak: ${currentStreak.toString()}</div>
                <div class="balance">Last Activated: ${new Date(Number(lastActivated) * 1000).toISOString()}</div>
                <div class="balance">Longest Streak: ${longestStreak.toString()}</div>
                <div class="balance">Lost Streak: ${lostStreak.toString()}</div>
                <div class="balance">Is Lost Streak: ${isLostStreak}</div>
                <div class="balance">Has Prayed Today: ${hasPrayedToday}</div>
            </div>
        `
	} catch (error) {
		blessingDiv.innerHTML = `<div class="error">Error: ${error.message}</div>`
	} finally {
		button.disabled = false
	}
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	displayContractInfo()
})
