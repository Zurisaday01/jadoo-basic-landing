import React from 'react';

const BookingSteps = ({ icon, title, info, color }) => {
	return (
		<div className='flex items-center gap-4'>
			<div className={`p-3 w-auto rounded-xl ${color}`}>{icon}</div>
			<div>
				<h3>{title}</h3>
				<p>{info}</p>
			</div>
		</div>
	);
};

export default BookingSteps;
