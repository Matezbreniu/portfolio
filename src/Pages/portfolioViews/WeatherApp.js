import React from 'react';

import PortfolioTemplate from 'Templates/PortfolioTemplate';

import weatherAppPhoto from 'Images/weatherAppPhoto.png';

const site = {
	title: 'Weather App',
	image: weatherAppPhoto,
	description:
		'This application was created so that I could learn to use fetch and API as well as check the weather and how to dress up. Here I used React.js and CSS stylesheets. The application shows 5 hints after 3rd letter from JSON file, then find the city in API using fetch.',
	technologies: ['React.js', 'CSS3', 'HTML5', 'JavaScript', 'JSON', 'API'],
	liveLink: 'https://matezbreniu.github.io/weatherapp',
	codeLink: 'https://github.com/Matezbreniu/weatherapp',
};

const WeatherApp = () => {
	return <PortfolioTemplate {...site} />;
};

export default WeatherApp;
