import React from 'react';

const CustomBtn = ({ children, color, round, padding }) => {
	return (
		<button
			className={`hover:border hover:border-neutral-900 ${padding} ${color}  ${round} text-neutral-50 border-transparent transition delay-50 duration-200 border boder-transparent hover:bg-transparent hover:text-gray-900`}>
			{children}
		</button>
	);
};

export default CustomBtn;
