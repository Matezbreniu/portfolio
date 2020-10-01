import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Container from './Components/Container';
import GlobalStyles from './theme/GlobalStyles';
import SiteProvider from './store/store';

const App = () => {
	return (
		<SiteProvider>
			<Router>
				<GlobalStyles />
				<Container />
			</Router>
		</SiteProvider>
	);
};

export default App;
