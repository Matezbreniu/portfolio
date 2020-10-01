import React, {createContext, useState} from 'react';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';

import Bamar from '../Pages/Bamar';
import WeatherApp from '../Pages/WeatherApp';
import Sportregeneracja from '../Pages/Sportregeneracja';
import Swiezaskibka from '../Pages/Swiezaskibka';

export const SiteContext = createContext();

const SiteProvider = ({children}) => {
	const [currentPage, setCurrentPage] = useState();
	const [pageDirection, setPageDirection] = useState();
	const [nextPage, setNextPage] = useState();
	const [previousPage, setPreviousPage] = useState();
	const [isMenuActive, setIsMenuActive] = useState(false);
	const [isTransitionActive, setIsTransitionActive] = useState(false);

	const siteInfo = {
		currentPage: [currentPage, setCurrentPage],
		pageDirection: [pageDirection, setPageDirection],
		nextPage: [nextPage, setNextPage],
		previousPage: [previousPage, setPreviousPage],
		isMenuActive: [isMenuActive, setIsMenuActive],
		isTransitionActive: [isTransitionActive, setIsTransitionActive],
		pages: [
			{
				path: '/',
				name: 'Home',
				order: 0,
				component: Home,
			},
			{
				path: '/about',
				name: 'About',
				order: 1,
				component: About,
			},
			{
				path: '/portfolio',
				name: 'Portfolio',
				order: 2,
				component: Portfolio,
			},
			{
				path: '/contact',
				name: 'Contact',
				order: 3,
				component: Contact,
			},
			{
				path: '/portfolio/bamar',
				name: 'Bamar',
				order: 10,
				component: Bamar,
			},
			{
				path: '/portfolio/weatherapp',
				name: 'Weatherapp',
				order: 11,
				component: WeatherApp,
			},
			{
				path: '/portfolio/sportregeneracja',
				name: 'Sportregeneracja',
				order: 12,
				component: Sportregeneracja,
			},
			{
				path: '/portfolio/swiezaskibka',
				name: 'Swiezaskibka',
				order: 13,
				component: Swiezaskibka,
			},
		],
	};

	return (
		<SiteContext.Provider value={siteInfo}>{children}</SiteContext.Provider>
	);
};

export default SiteProvider;
