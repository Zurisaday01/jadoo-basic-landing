import React from 'react';

// Backdrop is the background that covers the rest of the page when the sidebar is display

const Backdrop = ({ toggleSidebar }) => {
	return (
		<div
			className='w-full h-[100vh] fixed top-0 left-0 z-50 opacity-50 bg-black'
			onClick={() => toggleSidebar(false)}>
			Backdrop
		</div>
	);
};

export default Backdrop;
