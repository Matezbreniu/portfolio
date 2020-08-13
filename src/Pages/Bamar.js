import React from 'react';

import PortfolioProject from '../Components/PortfolioProject';

import bamarPhoto from '../Images/bamarPhoto.png';

const site = {
  title: 'Bamar',
  image: bamarPhoto,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequatur ad quas alias voluptatibus, deleniti ex eveniet asperiores, vitae voluptas distinctio consequuntur omnis, esse soluta natus quod porro perferendis adipisci!',
  technologies: ['React.js', 'CSS3', 'HTML5', 'JavaScript', 'Gsap'],
};

const Bamar = () => {
  return <PortfolioProject site={site} />;
};

export default Bamar;
