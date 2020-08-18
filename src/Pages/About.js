import React from 'react';

import styled from 'styled-components';
import {
  Wrapper,
  Container,
  Title,
  Description,
} from '../Components/Main/PagesStyles';

import MyPhoto from '../Images/myPhoto.jpg';

const ImgContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Who's this guy?</Title>
        <Description>
          Hello, I'm Mateusz Bręk, web developer, based in Poznań. I really
          enjoy working with code, especially in React.js with styled-components
          and gsap. I'm focused on fast and responsive websites, love to
          implement animations on sites. I prefer to keep learning and continue
          challenging myself. I'm a fast learner, able to gain new skills
          relatively fast and use them in project. I'm well-organised person
          with an eye for details.
        </Description>
        <ImgContainer>
          <Img src={MyPhoto} />
        </ImgContainer>
        <Description>
          I have 10 years experience in professional Basketball and still
          counting, thanks to it I'm open to working in group as well as in
          stressful situation. Also huge fan of science-fiction and adventures
          movies or books, outdoor activities, solving problems. I appreciate
          spending free time in kitchen, I'm addicted to spicy food and cold
          drinks.
        </Description>
      </Container>
    </Wrapper>
  );
};

export default About;
