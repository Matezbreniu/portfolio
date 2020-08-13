import React from 'react';

import PortfolioProject from '../Components/PortfolioProject';

import weatherAppPhoto from '../Images/weatherAppPhoto.png';

const site = {
  title: 'Weather App',
  image: weatherAppPhoto,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequatur ad quas alias voluptatibus, deleniti ex eveniet asperiores, vitae voluptas distinctio consequuntur omnis, esse soluta natus quod porro perferendis adipisci!',
  technologies: ['React.js', 'CSS3', 'HTML5', 'JavaScript', 'API'],
};

const WeatherApp = () => {
  return <PortfolioProject site={site} />;
};

export default WeatherApp;
