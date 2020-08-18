import React from 'react';

import PortfolioProject from '../Components/PortfolioProject';

import weatherAppPhoto from '../Images/weatherAppPhoto.png';

const site = {
  title: 'Weather App',
  image: weatherAppPhoto,
  description:
    'This application was created so that I could learn to use fetch and API as well as check the weather how to dress up myself. Here I used React.js and CSS stylesheets. The application shows 5 hints after 3rd letter from JSON file, then find the city in API using fetch.',
  technologies: ['React.js', 'CSS3', 'HTML5', 'JavaScript', 'JSON', 'API'],
};

const WeatherApp = () => {
  return <PortfolioProject site={site} />;
};

export default WeatherApp;
