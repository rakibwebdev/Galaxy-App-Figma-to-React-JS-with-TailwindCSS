import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
   
        <ul className='bg-darkpurple px-6 py-10 absolute h-screen w-full left-0 top-0 z-40 text-center'>
          <li className='py-6'>
            <NavLink to='/' className={navData => navData.isActive ? classes.active : 'block text-white' }>
			HOME
            </NavLink>
          </li>
          <li className='py-6'>
            <NavLink to='/blog' className={navData => navData.isActive ? classes.active : 'block text-white' }>
			GAME
            </NavLink>
          </li>
          <li className='py-6'>
            <NavLink to='/blog' className={navData => navData.isActive ? classes.active : 'block text-white' }>
				FAQ
            </NavLink>
          </li>
		  <li className='py-6'>
            <NavLink to='/about' className={navData => navData.isActive ? classes.active : 'block text-white' }>
			BLOG
            </NavLink>
          </li>
		  <li className='py-6'>
            <NavLink to='/about' className={navData => navData.isActive ? classes.active : 'block text-white' }>
			CONTACT US
            </NavLink>
          </li>
        </ul>
    
  );
};

export default MainNavigation;