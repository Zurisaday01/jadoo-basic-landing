import React from 'react';
import HeadingPack from '../Elements/HeadingPack';
import DestinationsCard from '../Elements/DestinationsCard';

// Data
import data from '../../assets/data/data.json';

const Destinations = () => {
	// destinations info
	const { destinations } = data;

	return (
		<section
			className='px-20 h-auto text-center rice:px-10 mb-28'
			id='destinations'>
			<HeadingPack
				subTitle='Top Destinations'
				additional='Top Selling'
				margin='mb-12'
			/>
			<div className='flex justify-between flex-wrap gap-4 corn:justify-center corn:items-center corn:gap-5'>
				{destinations.map(el => (
					<DestinationsCard
						imgUrl={el.imgUrl}
						destination={el.destination}
						price={el.price}
						duration={el.duration}
						key={el._id}
					/>
				))}
			</div>
		</section>
	);
};

export default Destinations;
