import React from 'react';

const ServicesCard = ({ icon, title, info }) => {
	return (
		<div className='w-[280px] h-[350px] cursor-pointer rounded-[40px] shadow-none hover:shadow-neutral transition duration-200 ease-in-out flex flex-col items-center justify-center gap-4  pl-4 pr-4'>
			<span className='text-6xl text-amber-500'>{icon}</span>
			<h3 className='text-lg'>{title}</h3>
			<p>{info}</p>
		</div>
	);
};

export default ServicesCard;
