import React from 'react';
// elements
import HeadingPack from '../Elements/HeadingPack';
import SlideTestimonial from '../Elements/SlideTestimonial';

// Data
import data from '../../assets/data/data.json';

const Testimonials = () => {
	// testimonials
	const { testimonials } = data;
	return (
		<section
			className='flex h-auto items-center px-20 rice:px-10 gap-16 wheat:gap-8 wheat:flex-col mb-16'
			id='testimonials'>
			<div className='w-2/6 wheat:w-full wheat:text-center'>
				<HeadingPack
					subTitle='What people say about Us'
					additional='Testimonials'
					margin='mb-7'
				/>
			</div>
			<div className='h-full  flex items-center flex-col justify-center gap-12'>
				{testimonials.map(el => (
					<SlideTestimonial
						name={el.name}
						review={el.review}
						location={el.location}
						imgUrl={el.imgUrl}
						key={el._id}
					/>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
