import React from 'react';

import PortfolioProject from '../Components/PortfolioProject';

import sportregeneracjaPhoto from '../Images/sportregeneracjaPhoto.png';

const site = {
  title: 'Sportregeneracja',
  image: sportregeneracjaPhoto,
  description:
    'First project made completely by myself. Site was created for my friend to help him get his regeneration office going. Here I used HTML5 with BEM metodology, preprocessor SASS for CSS3 and some JavaScript for little animations on site. Biggest problem for me was to find a good hosting and deploy it.',
  technologies: ['HTML5', 'CSS3', 'SCSS', 'JavaScript'],
};

const Sportregeneracja = () => {
  return <PortfolioProject site={site} />;
};

export default Sportregeneracja;
