import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Home from './Pages/Home';
import MainNavigation from './components/Navbar/MainNavigation';

export default class App extends Component {
	render() {
		return (
			<div className='md:hidden'>
				<MainNavigation />
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/blog' element={<Blog />} />
				</Routes>
  			</div>
		)
	}
}