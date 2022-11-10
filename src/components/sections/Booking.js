import { useState } from 'react';
import HeadingPack from '../Elements/HeadingPack';
import BookingSteps from '../Elements/BookingSteps';
import PostTrip from '../Elements/PostTrip';
import PupPopTrip from '../Elements/PupPopTrip';

// icons
import DynamicIcon from '../Elements/DynamicIcon';

// Data
import data from '../../assets/data/data.json';

const Booking = () => {
	const [fillHeart, toggleFillHeart] = useState(false);

	// steps infos
	const { steps } = data;

	console.log(steps);

	return (
		<section
			className='px-20 h-auto rice:px-10 flex justify-between content-center items-center gap-3 wheat:flex-col wheat:gap-20 mb-28'
			id='bookings'>
			<div className='w-[420px] wheat:w-full'>
				<div className='wheat:text-center'>
					<HeadingPack
						subTitle='Book your next trip in 3 easy steps'
						additional='Easy and Fast'
						margin='mb-9'
					/>
				</div>
				<div className='flex flex-col gap-6'>
					{steps.map(el => (
						<BookingSteps
							icon={<DynamicIcon name={el.icon} />}
							title={el.title}
							info={el.info}
							color={el.color}
							key={el._id}
						/>
					))}
				</div>
			</div>
			<div className='relative'>
				<PostTrip fillHeart={fillHeart} toggleFillHeart={toggleFillHeart} />
				<PupPopTrip fillHeart={fillHeart} />
			</div>
		</section>
	);
};

export default Booking;
