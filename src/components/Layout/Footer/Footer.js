import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FooterLogo from "../../../assets/images/footer-logo.png"
import Seamlessswap from "../../../assets/images/seamlessswap.png"
import Social from "../../../assets/images/socialicon.png"
import Telegram from "../../../assets/images/telegram.png"
import pancakeswap from "../../../assets/images/pancakeswap.png"

export default class Footer extends Component {
	render() {
		return (
			<div className="bg-black py-10 px-6">
				<div className="mb-10">
					<Link to="/" className="block mb-4">
						<img src={FooterLogo} alt="" />
					</Link>
					<p className="time-shadow text-white text-md font-normal leading-normal">
						All right reserved.
						2021 Copyright GALAXYWARRIORS
					</p>
				</div>
				<div className="mb-10">
					<h4 className='block time-shadow text-white text-md font-normal leading-normal mb-4'>title</h4>
					<Link to="/" className="block time-shadow text-white text-xs font-normal leading-normal mb-2 uppercase">
						One
					</Link>
					<Link to="/" className="block time-shadow text-white text-xs font-normal leading-normal mb-2 uppercase">
						One
					</Link>
					<Link to="/" className="block time-shadow text-white text-xs font-normal leading-normal mb-2 uppercase">
						One
					</Link>
					<Link to="/" className="block time-shadow text-white text-xs font-normal leading-normal uppercase">
						One
					</Link>
				</div>
				<div className='mb-10'>
					<h4 className="time-shadow text-white text-sm font-normal leading-normal mb-4 uppercase">SOCIAL</h4>
					<div className="flex list-none gap-10 justify-center mb-4 items-center">
						<Link to="/">
							<img src={Seamlessswap} alt="" />
						</Link>
						<Link to="/">
							<img src={Social} alt="" />
						</Link>
						<Link to="/">
							<img src={Telegram} alt="" />
						</Link>
					</div>
				</div>
				<div>
					<h4 className="time-shadow text-white text-lmd font-normal leading-normal mb-4 uppercase">SHEESH</h4>
					<button
						className="text-sm border-yellow border-solid border-4 rounded-full w-full px-6 py-2 mb-3 relative flex items-center text-left justify-start time-shadow text-white font-normal focus:outline-none">
						<img className='mr-2'  src={Seamlessswap} alt="" />
						Buy on SeamlessSwap
					</button>
					<button
						className="text-sm border-gray  border-solid border-4 w-full rounded-full px-6 py-2 mb-3 relative flex items-center text-left justify-start break-words time-shadow text-white font-normal focus:outline-none">
						<img className='mr-2' src={pancakeswap} alt="" />
						Buy on Pancakeswap
					</button>
					<h4 className="mt-8 time-shadow text-white text-lmd font-normal leading-normal mb-4 uppercase break-words">
						GalaxyWarriorsToken
					</h4>
					<button
						className="text-sm border-yellow border-4 border-solid rounded-full w-full px-6 py-2 mb-3 relative flex items-center text-left justify-start break-words time-shadow text-white font-normal focus:outline-none">
						<img className='mr-2' src={Seamlessswap} alt="" />
						Buy on SeamlessSwap
					</button>
					<button
						className="text-sm border-gray border-4 border-solid rounded-full w-full px-6 py-2 mb-3 relative flex items-center text-left break-words time-shadow text-white font-normal focus:outline-none">
						<img  className='mr-2' src={pancakeswap} alt="" />
						Buy on Pancakeswap
					</button>
				</div>
			</div>
		)
	}
}
