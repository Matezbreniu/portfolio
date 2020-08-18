import React from 'react';

import PortfolioProject from '../Components/PortfolioProject';

import swiezaskibkaPhoto from '../Images/swiezaskibkaPhoto.png';

const site = {
  title: 'Świeża Skibka',
  image: swiezaskibkaPhoto,
  description:
    'This project was made to help customers place orders more easily. The application counts the selected products and, depending on the price and place of delivery, adds the logistic cost. The idea was to keep the website as simple as possible. Here I used React.js with controled form and validations, CSS stylesheets, and EmailJS for sending orders to the company.',
  technologies: ['React.js', 'CSS3', 'HTML5', 'JavaScript', 'EmailJS'],
};

const Swiezaskibka = () => {
  return <PortfolioProject site={site} />;
};

export default Swiezaskibka;
