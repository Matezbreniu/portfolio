import React from 'react';

import PortfolioProject from '../Components/PortfolioProject';

import bamarPhoto from '../Images/bamarPhoto.png';

const site = {
  title: 'Bamar',
  image: bamarPhoto,
  description:
    'This is my latest project. The website was created to help BAMAR a center for sports and education be more visible in web. Here I used React.js with CSS stylesheets, Gsap for animations and icons made by Freepik.',
  technologies: ['React.js', 'CSS3', 'HTML5', 'JavaScript', 'Gsap'],
  liveLink: 'https://www.bamarcentrum.pl/',
  codeLink: 'https://github.com/Matezbreniu/bamar',
};

const Bamar = () => {
  return <PortfolioProject site={site} />;
};

export default Bamar;
