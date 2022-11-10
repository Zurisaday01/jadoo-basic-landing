import React from 'react';
// icons
import * as IconsFa from 'react-icons/fa';
import * as IconsRi from 'react-icons/ri';
import * as IconsMd from 'react-icons/md';
import * as IconsGi from 'react-icons/gi';
import * as IconsBi from 'react-icons/bi';

const DynamicIcon = ({ name }) => {
	let IconComponent;

	if (name.includes('Fa')) {
		IconComponent = IconsFa[name];
	} else if (name.includes('Ri')) {
		IconComponent = IconsRi[name];
	} else if (name.includes('Md')) {
		IconComponent = IconsMd[name];
	} else if (name.includes('Gi')) {
		IconComponent = IconsGi[name];
	} else if (name.includes('Bi')) {
		IconComponent = IconsBi[name];
	} else {
		console.log('Not Found');
	}

	if (!IconComponent) {
		// Return a default one
		return <IconsFa.FaBeer />;
	}

	return <IconComponent />;
};

export default DynamicIcon;
