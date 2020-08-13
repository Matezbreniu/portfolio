import React from 'react';

import PortfolioProject from '../Components/PortfolioProject';

import swiezaskibkaPhoto from '../Images/swiezaskibkaPhoto.png';

const site = {
  title: 'Świeża Skibka',
  image: swiezaskibkaPhoto,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequatur ad quas alias voluptatibus, deleniti ex eveniet asperiores, vitae voluptas distinctio consequuntur omnis, esse soluta natus quod porro perferendis adipisci!',
  technologies: ['React.js', 'CSS3', 'HTML5', 'JavaScript'],
};

const Swiezaskibka = () => {
  return <PortfolioProject site={site} />;
};

export default Swiezaskibka;
