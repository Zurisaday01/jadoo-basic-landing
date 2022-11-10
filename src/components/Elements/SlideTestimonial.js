import React from 'react';

const SlideTestimonial = ({ name, review, location, imgUrl }) => {
	return (
		<div className='w-full h-full border-b-2 rounded-xl drop-shadow-2x shadow-lg flex flex-col justify-center p-5 gap-3'>
			<p>"{review}"</p>
			<div className='flex items-center justify-start gap-3'>
				<div className='h-14 w-14 rounded-full overflow-hidden'>
					<img
						src={imgUrl}
						className='w-full h-full object-cover object-center'
					/>
				</div>
				<div className='flex flex-col'>
					<span>{name}</span>
					<span className='text-xs text-gray-500'>{location}</span>
				</div>
			</div>
		</div>
	);
};

export default SlideTestimonial;
