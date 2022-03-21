
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import IconOne from "../../../assets/images/icon-one.png";
import IconTwo from "../../../assets/images/icon-two.png";
import IconThree from "../../../assets/images/icon-three.png";
import iconFour from "../../../assets/images/iconFour.png";
import iconFive from "../../../assets/images/icon-five.png";
import Anomaly from "../../../assets/images/anomaly.png";
import Plasma from "../../../assets/images/plasma.png";
import Ydro from "../../../assets/images/ydro.png";
import Inferno from "../../../assets/images/inferno.png";
import Terra from "../../../assets/images/terra.png";
import Quizon from "../../../assets/images/quizon.png";
import QuizonBg from "../../../assets/images/quizon-bg.svg";
import Tagshape from "../../../assets/images/tab-shape.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"



// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);


export default function TabContent() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<>
			<div className="object-cover bg-cover bg-center bg-no-repeat items-center" style={{ backgroundImage: `url(${Tagshape})` }} >
				<div className="bg-darkpurple py-10  flex flex-wrap justify-center items-center mx-auto w-full px-6">
					<Swiper onSwiper={setThumbsSwiper} navigation={true} spaceBetween={5} slidesPerView={3} freeMode={true} watchSlidesProgress={true} className="mySwiper">
						<SwiperSlide>
							<img src={IconOne} alt="one" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={IconTwo} alt="two" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={IconThree} alt="three" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={iconFour} alt="four" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={iconFive} alt="five" />
						</SwiperSlide>
					</Swiper>

					<Swiper spaceBetween={10} navigation={false} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
						<SwiperSlide>
							<div class="mb-10 mt-10">
								<h3 class="text-llg font-normal text-white leading-tight title-shadow mb-2">
									Quizon
								</h3>
								<p
									class="text-lg text-purple font-bold font-normal leading-tight des-shadow mb-4">
									Rate Limited
									Edition
								</p>
								<div class="mx-auto quizon-image bg-cover object-cover bg-center bg-no-repeat items-center relative"
									style={{ backgroundImage: `url(${QuizonBg})` }}>
									<img className="mx-auto" src={Quizon} alt="terra" />
								</div>
								<p
									class="text-base text-white leading-normal des-shadow mb-8">
									The Quizon are believed to have everlasting life. They are
									believed to have seen the edges
									of the
									universe, and now their lives feel empty. After spending
									millenia exploring, the Quizon are
									ready to risk it all for glory in the Coliseum. Will a Quizon
									warrior reign victorious and
									walk
									away with riches and everlasting glory, or will they bleed out
									in the dust to be remembered
									by
									nobody like the thousands before them?
								</p>
								<ul class="flex gap-4 xl:gap-8 flex-wrap justify-center">
									<li class="inline-block">
										<img class="w-10 lg:w-16" src={Anomaly} alt="anomaly" />
									</li>
									<li class="inline-block">
										<img class="w-10 lg:w-16" src={Plasma} alt="plasma" />
									</li>
									<li class="inline-block">
										<img class="w-10 lg:w-16" src={Ydro} alt="ydro" />
									</li>
									<li class="inline-block">
										<img class="w-10 lg:w-16" src={Inferno} alt="inferno" />
									</li>
									<li class="inline-block">
										<img class="w-10 lg:w-16" src={Terra} alt="terra" />
									</li>
								</ul>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="mb-10 mt-10">
								<img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="av" />
								content 2
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="mb-10 mt-10">
								<img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="av" />
								content 3
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="mb-10 mt-10">
								<img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="av" />
								content 4
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="mb-10 mt-10">
								<img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="av" />
								content 5
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>

		</>
	)
}