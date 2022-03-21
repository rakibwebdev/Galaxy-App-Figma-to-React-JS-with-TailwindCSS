import NavData from './NabData';
import classes from './MainNavigation.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import gtwLogo from "../../assets/images/gtwlogo.png";
import gtwLogo2 from "../../assets/images/gtwlogo2.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';


const MainNavigation = () => {

const [open, setOpen] = useState(false);

const hambargerIcon = <GiHamburgerMenu className='absolute right-6 top-3 text-lg text-white cursor-pointer'
						onClick={ () => setOpen(!open)} 
						/>

const closerIcon = <AiOutlineClose className='absolute bg-close h-12 w-12 rounded-full p-2 right-6 top-3 text-lg text-white z-50 cursor-pointer '
					onClick={ () => setOpen(!open)} 
					/>
  return (
    <header className='bg-themeblack py-2'>
		<div className='flex items-center'>
			<ul className="flex gap-4 md:gap-12 px-6">
				<li className="text-sm font-normal text-white leading-normal font-roboto flex items-center">
					<img  className="inline-block mr-2 -mt-1 w-7" src={gtwLogo} alt="" />
					$.00036
				</li>
				<li className="border-r-2 border-solid border-lihtblue"></li>
				<li className="text-sm font-normal text-white leading-normal font-roboto flex items-center">
					<img className="inline-block mr-2 w-7" src={gtwLogo2} alt="" />
					$.00036
				</li>
			</ul>
			<div>
				<Link to='#' className='btn px-4 py-2 inline-block uppercase rounded-full text-white text-xs text-center font-normal font-iceland leading-none w-auto duration-300 time-shadow'>
					CONNECT WALLET
				</Link>
			</div>
		</div>
	  <nav className={classes.nav}>
		{open ? closerIcon : hambargerIcon }
		{open && <NavData />}
	  </nav>
	  
      
    </header>
  );
};

export default MainNavigation;