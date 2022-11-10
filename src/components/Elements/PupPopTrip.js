import React from 'react';

import Taj from '../../assets/imgs/Taj.jpg';

const PupPopTrip = ({ fillHeart }) => {
	return (
		<div
			className={`${
				!fillHeart ? 'hidden' : ''
			} bg-white py-3 px-5 rounded-3xl shadow-xl absolute bottom-14 right-negative flex  gap-2`}>
			<div className='w-10 h-10  rounded-full  overflow-hidden'>
				<img src={Taj} className='w-full h-full object-cover object-center' />
			</div>
			<div>
				<span className='text-gray-500 text-sm'>Ongoing</span>
				<h5>Trip to rome</h5>
				<p className='text-slate-800'>
					<span className='text-violet-600'>40%</span> completed
				</p>
				<div></div>
			</div>
		</div>
	);
};

export default PupPopTrip;
