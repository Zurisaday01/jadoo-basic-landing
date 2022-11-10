import React from 'react';
// Sections
import Navbar from '../components/Nav/Navbar';
import Header from '../components/sections/Header';
import Services from '../components/sections/Services';
import Destinations from '../components/sections/Destinations';
import Booking from '../components/sections/Booking';
import Testimonials from '../components/sections/Testimonials';
import Footer from '../components/sections/Footer';

const Landing = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Services />
			<Destinations />
			<Booking />
			<Testimonials />
			<Footer />
		</>
	);
};

export default Landing;
