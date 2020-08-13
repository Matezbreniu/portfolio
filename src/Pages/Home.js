import React from 'react';

import styled from 'styled-components';
import {Wrapper} from '../Components/PagesStyles';

import MatrixCanvas from '../Components/MatrixCanvas';

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: var(--max-space);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
`;
const Description = styled.p`
  text-align: center;
  font-size: 1rem;
`;

const Home = () => {
  return (
    <Wrapper>
      <Center>
        <Title>Mateusz Bręk</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, vitae
          nam fugiat necessitatibus placeat perspiciatis soluta a doloribus
          accusantium provident ratione? Aliquam temporibus dolorem atque fugit
          saepe, mollitia cupiditate cum.
        </Description>
      </Center>
      <MatrixCanvas />
    </Wrapper>
  );
};

export default Home;
