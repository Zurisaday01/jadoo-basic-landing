import { useState, useEffect } from 'react';

import { Link } from 'react-scroll';

// components
import Sidebar from './Sidebar';
import Backdrop from '../Elements/Backdrop';

// Assets
import LogoIcon from '../../assets/imgs/Logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
	const [y, setY] = useState(window.scrollY);
	const [sidebarOpen, toggleSidebar] = useState(false);

	// dynamically manage the document's head section
	useEffect(() => {
		window.addEventListener('scroll', () => setY(window.scrollY));
		return () => {
			window.removeEventListener('scroll', () => setY(window.scrollY));
		};
	}, [y]); // the callback is depedent on "y" variable, if "y" variable updates, the effect will run again

	return (
		<>
			<Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

			{sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}

			<nav
				className={`w-screen fixed drop-shadow-lg z-50 backdrop-blur ${
					y > 300 ? 'backdrop-blur' : 'backdrop-blur-none'
				}`}>
				<div
					style={y > 300 ? { height: '70px' } : { height: '90px' }}
					className='flex px-20 justify-between items-center w-full h-full rice:px-10'>
					<Link to='/' smooth={true}>
						<img src={LogoIcon} alt='Logo' />
					</Link>
					<div className='flex gap-8 wheat:hidden'>
						<ul className='flex '>
							<Link
								to='services'
								smooth={true}
								offset={-100}
								spy='true'
								className='p-4 hover:text-amber-600 cursor-pointer transition delay-100 duration-300 '>
								Services
							</Link>
							<Link
								to='destinations'
								smooth={true}
								offset={-70}
								spy='true'
								className='p-4  hover:text-amber-600 cursor-pointer transition delay-100 duration-300 '>
								Destinations
							</Link>
							<Link
								to='bookings'
								smooth={true}
								offset={-70}
								spy='true'
								className='p-4  hover:text-amber-600 cursor-pointer transition delay-100 duration-300 '>
								Bookings
							</Link>
							<Link
								to='testimonials'
								smooth={true}
								offset={-70}
								spy='true'
								className='p-4  hover:text-amber-600 cursor-pointer transition delay-100 duration-300 '>
								Testimonials
							</Link>
						</ul>
						<ul className='flex '>
							<li>
								<a
									href='/'
									className='hover:text-amber-600 cursor-pointer transition delay-100 duration-300 '>
									Login
								</a>
							</li>
							<li>
								<a
									href='/'
									className='border border-neutral-900 px-3 py-1 rounded-md hover:bg-amber-500 hover:text-neutral-50 hover:border-transparent transition delay-50 duration-200'>
									Sign up
								</a>
							</li>
						</ul>
					</div>
					<button
						className='wheat:block pointer hidden text-xl'
						onClick={() => toggleSidebar(!sidebarOpen)}>
						<GiHamburgerMenu />
					</button>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
