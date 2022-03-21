import React, { Component } from 'react'
import Hero from '../components/Layout/Hero/Hero'
import TabContent from '../components/Layout/Tab/TabContent'
import Timeline from '../components/Layout/Timeline/Timeline'
import Footer from '../components/Layout/Footer/Footer'

export default class Home extends Component {
	render() {
		return (
			<div className='container'>
				<Hero />
				<TabContent />
				<Timeline />
				<Footer />
			</div>
		)
	}
}
