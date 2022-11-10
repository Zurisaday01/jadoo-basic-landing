import React from 'react';

import CustomBtn from '../Elements/CustomBtn';
import { BsFillPlayFill } from 'react-icons/bs';
import HeaderImg from '../../assets/imgs/Image.png';

const Header = () => {
	return (
		<div className='flex px-20 rice:px-10 justify-center items-center min-h-[100vh] wheat:flex-col gap-10'>
			<div className='absolute top-0 right-0 h-full w-full bg-amber-100 hero-shape'></div>
			<div className='flex flex-col justify-center items-start h-full w-7/12 wheat:w-full wheat:pt-[200px] wheat:items-center'>
				<span className='text-amber-600 uppercase'>
					Best destinations around the word
				</span>

				<h1 className='text-7xl mt-5 mb-6 wheat:text-center rice:text-6xl wheat:text-5xl'>
					Travel, <span>enjoy</span> and live a new and full life
				</h1>
				<p className='w-4/5 wheat:w-full'>
					Build Wicket longer admire do barton vanity itself do in it. Preferred
					to sportmen it engrossed listening. Park gate sell they west hard for
					the.
				</p>
				<div className='flex gap-5 mt-7'>
					<CustomBtn
						color='bg-amber-500'
						round='rounded-md'
						padding='px-3 py-1'>
						Find out more
					</CustomBtn>
					<div className='flex items-center justify-center gap-2'>
						<CustomBtn
							color='bg-amber-700'
							round='rounded-full'
							padding='px-2 py-2'>
							<BsFillPlayFill />
						</CustomBtn>
						Play Demo
					</div>
				</div>
			</div>
			<div className='w-4/5 h-5/6'>
				<img
					className='w-full h-full object-center object-contain'
					src={HeaderImg}
					alt='header'
				/>
			</div>
		</div>
	);
};

export default Header;
