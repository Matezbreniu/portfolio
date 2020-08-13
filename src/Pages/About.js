import React from 'react';

import styled from 'styled-components';
import {Wrapper, Container, Title} from '../Components/PagesStyles';

import MyPhoto from '../Images/myPhoto.jpg';

const Img = styled.img`
  width: 100%;
`;

const Description = styled.p`
  margin: 10px 0;
  text-align: justify;
`;

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Who's this guy?</Title>

        <Img src={MyPhoto} />
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          consectetur nesciunt aperiam deserunt officia molestiae facilis alias
          laudantium. Ad libero recusandae dolore laborum maiores totam aut eos
          sunt? Est, nobis?
        </Description>
      </Container>
    </Wrapper>
  );
};

export default About;
