import React from 'react';
import HeadingPack from '../Elements/HeadingPack';
import ServicesCard from '../Elements/ServicesCard';

// icons
import DynamicIcon from '../Elements/DynamicIcon';

// Data
import data from '../../assets/data/data.json';

const Services = () => {
	// services info
	const { services } = data;

	return (
		<section
			className='px-20 h-auto text-center rice:px-10 mb-28'
			id='services'>
			<HeadingPack
				subTitle='We offer best Services'
				additional='Category'
				margin='mb-12'
			/>
			<div className='flex justify-between flex-wrap gap-4 corn:justify-center corn:items-center'>
				{services.map(el => (
					<ServicesCard
						icon={<DynamicIcon name={el.icon} />}
						title={el.title}
						info={el.info}
						key={el._id}
					/>
				))}
			</div>
		</section>
	);
};

export default Services;
