import React from 'react';

const Footer = () => {
	return (
		<footer className='h-48 items-end justify-center mt-32 flex relative px-5 pb-5 wheat:pb-3 text-center wheat:h-auto wheat:bg-[#FFB300] corn:mt-52'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'
				className='absolute bottom-0 left-0 wheat:bottom-[100%] w-full'>
				<path
					fill='#FFB300'
					fillOpacity='1'
					d='M0,192L24,192C48,192,96,192,144,192C192,192,240,192,288,208C336,224,384,256,432,245.3C480,235,528,181,576,165.3C624,149,672,171,720,186.7C768,203,816,213,864,186.7C912,160,960,96,1008,90.7C1056,85,1104,139,1152,133.3C1200,128,1248,64,1296,53.3C1344,43,1392,85,1416,106.7L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z'></path>
			</svg>
			<span className='z-30 text-sm'>
				Design from uistore by AR Shakir, but the design was simplifly by &copy;
				Zury
			</span>
		</footer>
	);
};

export default Footer;
