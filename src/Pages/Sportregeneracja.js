import React from 'react';

import PortfolioProject from '../Components/PortfolioProject';

import sportregeneracjaPhoto from '../Images/sportregeneracjaPhoto.png';

const site = {
  title: 'Sportregeneracja',
  image: sportregeneracjaPhoto,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequatur ad quas alias voluptatibus, deleniti ex eveniet asperiores, vitae voluptas distinctio consequuntur omnis, esse soluta natus quod porro perferendis adipisci!',
  technologies: ['CSS3', 'HTML5', 'JavaScript'],
};

const Sportregeneracja = () => {
  return <PortfolioProject site={site} />;
};

export default Sportregeneracja;
