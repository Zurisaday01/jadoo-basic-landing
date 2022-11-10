module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (max-width: 767px) { ... }
			wheat: { max: '1017px' },
			// => @media (max-width: 1017px) { ... }
			corn: { max: '915px' },
			// => @media (max-width: 915px) { ... }
			rice: { max: '530px' },
			// => @media (max-width: 530px) { ... }
			oats: { max: '500px' },
			// => @media (max-width: 500px) { ... }
			quinoa: { max: '400px' },
			// => @media (max-width: 400px) { ... }
		},
		extend: {
			boxShadow: {
				neutral: '1px 0px 50px 2px rgba(0,0,0,0.15)',
			},
		},
	},
	plugins: [],
};
