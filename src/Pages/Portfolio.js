import React from 'react';

import styled from 'styled-components';

import {Wrapper, Container, Title} from '../Components/PagesStyles';
import Project from '../Components/Project';

import SportRegeneracjaBackground from '../Images/sportregeneracjaBackground.jpg';
import SwiezaskibkaBackground from '../Images/swiezaskibkaBackground.jpg';

const projectsList = [
  {
    name: 'Bamar',
    technology: ['REACTJS', 'CSS3', 'HTML5', 'JAVASCRIPT', 'GSAP'],
    link: '/portfolio/bamar',
    background: SportRegeneracjaBackground,
  },
  {
    name: 'Weather App',
    technology: ['REACTJS', 'CSS3', 'HTML5', 'JAVASCRIPT', 'API'],
    link: '/portfolio/weatherapp',
  },
  {
    name: 'Sportregeneracja',
    technology: ['CSS3', 'HTML5', 'JAVASCRIPT'],
    link: '/portfolio/sportregeneracja',
    background: SportRegeneracjaBackground,
  },

  {
    name: 'Swieża skibka',
    technology: ['REACTJS', 'CSS', 'HTML5', 'JAVASCRIPT'],
    link: '/portfolio/swiezaskibka',
    background: SwiezaskibkaBackground,
  },
];

const Description = styled.p``;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Portfolio = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Portfolio</Title>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          reiciendis dolorum nemo laborum dignissimos reprehenderit quam
          necessitatibus accusamus officia quidem perspiciatis architecto,
          voluptatum, culpa minima, esse praesentium dolores. Sit, porro!{' '}
        </Description>
        <Content>
          {projectsList.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Portfolio;
