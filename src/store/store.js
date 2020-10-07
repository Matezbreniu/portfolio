import React, {createContext, useState} from 'react';

import Home from 'Pages/mainViews/Home';
import About from 'Pages/mainViews/About';
import Portfolio from 'Pages/mainViews/Portfolio';
import Contact from 'Pages/mainViews/Contact';

import Bamar from 'Pages/portfolioViews/Bamar';
import WeatherApp from 'Pages/portfolioViews/WeatherApp';
import Sportregeneracja from 'Pages/portfolioViews/Sportregeneracja';
import Swiezaskibka from 'Pages/portfolioViews/Swiezaskibka';

export const SiteContext = createContext();

const pages = [
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
];

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
		pages,
	};

	return (
		<SiteContext.Provider value={siteInfo}>{children}</SiteContext.Provider>
	);
};

export default SiteProvider;
