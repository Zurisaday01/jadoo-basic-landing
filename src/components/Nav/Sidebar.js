import React from 'react';

// Assets
import LogoIcon from '../../assets/imgs/Logo.png';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-scroll';

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
	return (
		<div
			className={`transition duration-300 ease-out fixed top-0 right-0 bg-amber-600 h-[100vh] px-10 z-[1000] w-[350px] ${
				sidebarOpen ? 'translate-none' : 'translate-x-full'
			}`}>
			<div className='flex justify-between items-center'>
				<Link to='/' smooth={true}>
					<img src={LogoIcon} alt='Logo' className='w-[100px]' />
				</Link>
				<button
					onClick={() => toggleSidebar(!sidebarOpen)}
					className='pointer h-[90px] text-2xl'>
					<MdClose />
				</button>
			</div>

			<div className='flex flex-col gap-8 justify-start text-center items-center w-full h-full mt-12'>
				<ul className='flex flex-col'>
					<Link
						to='services'
						smooth={true}
						offset={-100}
						spy='true'
						className='p-4 hover:text-amber-300 cursor-pointer transition delay-100 duration-300'
						onClick={() => toggleSidebar(!sidebarOpen)}>
						Services
					</Link>
					<Link
						to='destinations'
						smooth={true}
						offset={-70}
						spy='true'
						className='p-4  hover:text-amber-300 cursor-pointer transition delay-100 duration-300'
						onClick={() => toggleSidebar(!sidebarOpen)}>
						Destinations
					</Link>
					<Link
						to='bookings'
						smooth={true}
						offset={-70}
						spy='true'
						className='p-4  hover:text-amber-300 cursor-pointer transition delay-100 duration-300'
						onClick={() => toggleSidebar(!sidebarOpen)}>
						Bookings
					</Link>
					<Link
						to='testimonials'
						smooth={true}
						offset={-70}
						spy='true'
						className='p-4  hover:text-amber-300 cursor-pointer transition delay-100 duration-300'
						onClick={() => toggleSidebar(!sidebarOpen)}>
						Testimonials
					</Link>
				</ul>
				<ul className='flex flex-col'>
					<li>
						<a
							href='/'
							className='hover:text-amber-300 cursor-pointer transition delay-100 duration-300'
							onClick={() => toggleSidebar(!sidebarOpen)}>
							Login
						</a>
					</li>
					<li>
						<a
							href='/'
							className='border border-black px-3 py-1 rounded-md hover:bg-amber-500 hover:text-neutral-50 hover:border-transparent transition delay-50 duration-200'>
							Sign up
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
