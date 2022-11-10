import React from 'react';

const HeadingPack = ({ subTitle, additional, margin }) => {
	return (
		<div className={`flex flex-col gap-3 ${margin ? margin : ''}`}>
			<span className='uppercase text-gray-500'>{additional}</span>
			<h2 className='text-4xl'>{subTitle}</h2>
		</div>
	);
};

export default HeadingPack;
