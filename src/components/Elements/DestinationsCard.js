import React from 'react';
import { IoIosSend } from 'react-icons/io';

const DestinationsCard = ({ imgUrl, destination, price, duration }) => {
	return (
		<div className=' w-80 h-[450px] rounded-2xl drop-shadow-2xl overflow-hidden flex flex-col shadow-lg'>
			<div className='h-3/4 w-full'>
				<img
					src={imgUrl}
					className='w-full h-full object-cover object-center'
				/>
			</div>
			<div className='bg-white flex-1 grid grid-cols-2 items-center justify-items-start pl-6 pr-6'>
				<span>{destination}</span>
				<span className='justify-self-end'>${price}K</span>
				<div className='flex items-center gap-2 justify-start self-start'>
					<IoIosSend />
					<span>{duration} Days Trip</span>
				</div>
			</div>
		</div>
	);
};

export default DestinationsCard;
