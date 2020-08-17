import React from 'react';

import styled from 'styled-components';
import {Wrapper, Container, Title} from '../Components/PagesStyles';

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

const Description = styled.p`
  margin: 10px 0;
  text-align: justify;
`;

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Who's this guy?</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          consectetur nesciunt aperiam deserunt officia molestiae facilis alias
          laudantium. Ad libero recusandae dolore laborum maiores totam aut eos
          sunt? Est, nobis?
        </Description>
        <ImgContainer>
          <Img src={MyPhoto} />
        </ImgContainer>
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
