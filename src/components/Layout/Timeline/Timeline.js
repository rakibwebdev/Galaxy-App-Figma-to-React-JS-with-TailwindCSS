import React, { Component } from 'react'
import TimelineBg from "../../../assets/images/timeline-shape.png";
import Timeline1 from "../../../assets/images/timeline1.png";
import Timeline2 from "../../../assets/images/timeline2.png";
import Timeline3 from "../../../assets/images/timeline3.png";
import Timeline4 from "../../../assets/images/timeline4.png";
import Timeline5 from "../../../assets/images/timeline5.png";
import Timeline6 from "../../../assets/images/timeline6.png";

export default class Timeline extends Component {
	render() {
		return (
			<div className='bg-cover object-cover bg-center bg-no-repeat bg-darkpurple pt-16 pb-20' style={{ backgroundImage: `url(${TimelineBg})` }}>
				<div className='px-10 text-center'>
					<h2 className='text-white text-xl uppercase leading-normal font-normal bg-purple text-center rounded-full inline-block mx-auto px-16 py-4'>ROADMAP</h2>
				</div>
				<div className='relative wrap overflow-hidden h-full mx-auto'>
					<div className="border-4 absolute border-purple h-full border" style={{ left: '50%' }}></div>
					<div className="mb-8 flex justify-between items-center w-full right-timeline pt-8 w-10-12">
						<div className="order-1 mx-auto">
							<img className='mb-10' src={Timeline1} alt='timeline1' />
							<img className='pl-6' src={Timeline2} alt='timeline2' />
						</div>
						<div className="z-20 flex items-center order-1 bg-white w-8 h-8 rounded-full"></div>
						<div className="order-1 w-6/12 pl-8 pr-4">
							<h3
								className="mb-3 font-bold text-purple time-shadow text-base leading-tight">
								Q4 2021
							</h3>
							<ul className='list-disc'>
								<li className='text-xs  leading-normal text-white des-shadow mb-1'>
									SheeshV2 and GWT Launch
								</li>
								<li className='text-xs  leading-normal text-white des-shadow mb-1'>
									Website Revamp
								</li>
								<li className='text-xs  leading-normal text-white des-shadow mb-1'>NFT Alien Revamp</li>
								<li className='text-xs  leading-normal text-white des-shadow'>NFT Weapon Revamp</li>
							</ul>
						</div>
					</div>
					<div className="mb-8 2xl:mb-16 flex justify-between flex-row-reverse items-center w-full left-timeline">
						<div className="order-1 w-6/12">
							<img className='pl-6' src={Timeline3} alt='timeline3' />
						</div>
						<div className="z-20 flex items-center order-1 bg-white w-8 h-8 rounded-full"></div>
						<div className="order-1 w-6/12 ml-auto pl-12 pr-8">
							<h3
								className="mb-3 font-bold text-purple time-shadow text-base leading-tight text-right">
								Q1 2022
							</h3>
							<ul className='list-disc'>
								<li className='text-xs  leading-normal text-white des-shadow mb-1'>
									Phase 2 Game Expansions
								</li>
							</ul>
						</div>
					</div>
					<div className="mb-8 2xl:mb-16 flex justify-between items-center w-full right-timeline">
						<div className="order-1 w-6/12">
							<img className='ml-auto' src={Timeline4} alt='Timeline4' />
						</div>
						<div className="z-20 flex items-center order-1 bg-white w-8 h-8 rounded-full"></div>
						<div className="order-1 w-6/12 pl-8 pr-4">
							<h3
								className="mb-3 font-bold text-purple time-shadow text-base leading-tight ">
								Q2 2022
							</h3>
							<ul className='list-disc'>
								<li className='text-xs  leading-normal text-white des-shadow mb-1'>
									Genesis NFT Launch
								</li>
								<li className='text-xs  leading-normal text-white des-shadow mb-1'>
									NFT Weapon Pre-Release
								</li>
								<li className='text-xs  leading-normal text-white des-shadow mb-1'>Video Trailer</li>
								<li className='text-xs  leading-normal text-white des-shadow'>Phase 1 Game Launch</li>
							</ul>

						</div>
					</div>
					<div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
						<div className="order-1 w-6/12">
							<img className='mb-10' src={Timeline5} alt='timeline1' />
							<img className='pl-10' src={Timeline6} alt='timeline2' />
						</div>
						<div className="z-20 flex items-center order-1 bg-white w-8 h-8 rounded-full"></div>
						<div className="order-1 w-6/12 pl-12 pr-8">
							<h3
								className="mb-3 font-bold text-purple time-shadow text-base text-right leading-tight ">
								Q3 2022
							</h3>
							<ul className='list-disc'>
								<li className='text-xs  leading-normal text-white des-shadow mb-1'>
									Phase 3 Game Expansions
								</li>
							</ul>
						</div>
					</div>
					<div className="mb-8 2xl:mb-16 flex justify-between items-center w-full right-timeline">
						<div className="order-1 w-6/12">
							<img className='mx-auto' src={Timeline3} alt='timeline3' />
						</div>
						<div className="z-20 flex items-center order-1 bg-white w-8 h-8 rounded-full"></div>
						<div className="order-1 w-6/12 pl-8 pr-4">
							<h3
								className="mb-3 font-bold text-purple time-shadow text-base leading-tight ">
								Q4 2022
							</h3>
							<ul className='list-disc'>
								<li className='text-xs  leading-normal text-white des-shadow mb-1'>
									Stay Tuned!
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
