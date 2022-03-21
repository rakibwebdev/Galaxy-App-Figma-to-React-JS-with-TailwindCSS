import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Background from "../../../assets/images/hero.png";
import Logo from "../../../assets/images/logo.png";
import Icon from "../../../assets/images/angle.png";


export default class Hero extends Component {
	render() {
		return (
			<div>
				<div className='px-4 bg-cover object-cover bg-center bg-no-repeat items-center relative h-96' style={{ backgroundImage: `url(${Background})` }}>
					<Link to="/" className="inline-block pt-4 px-16">
						<img src={Logo} alt="Logo" style={{maxWidth: "120px"}} />
					</Link>
				</div>
				<div className='px-6 bg-darkpurple py-8 text-center'>
					<Link to="/" className="btn text-lg px-8 py-4 block uppercase rounded-full text-white text-center font-normal leading-normal w-auto duration-300 time-shadow w-full">
						PLAY GAME	
						<img className='inline-block ml-3' src={Icon} alt="Icon" style={{maxWidth: "40px"}} />
					</Link>
				</div>
			</div>
		)
	}
}
