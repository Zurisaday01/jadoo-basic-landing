import { Helmet } from 'react-helmet';
// css
import 'swiper/css/bundle';
import './style/normalize.css';
import './style/style.css';

// Screens
import Landing from './screens/Landing';

function App() {
	return (
		<>
			<Helmet>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400&family=Poppins:wght@300;400&display=swap'
					rel='stylesheet'
				/>
			</Helmet>
			<Landing />
		</>
	);
}

export default App;
