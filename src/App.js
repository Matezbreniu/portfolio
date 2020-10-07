import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import {theme} from 'Themes/mainTheme';
import Root from 'Pages/mainViews/Root';
import GlobalStyles from 'Themes/GlobalStyles';
import SiteProvider from 'store/store';

const App = () => {
	return (
		<SiteProvider>
			<Router>
				<GlobalStyles />
				<ThemeProvider theme={theme}>
					<Root />
				</ThemeProvider>
			</Router>
		</SiteProvider>
	);
};

export default App;
