import React from 'react';

import styled from 'styled-components';

import {Button} from '../Components/PagesStyles';

const SocialsContainer = styled.div``;

const Description = styled.p``;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SocialButton = styled(Button)`
  margin: 10px 20px 10px 0px;
  text-decoration: none;
  background-color: ${(props) => props.color};
  border-color: ${(props) => props.color};
  box-shadow: 2px 2px 0px 2px ${(props) => props.shadowColor};
  color: white;
`;

const Social = () => {
  return (
    <SocialsContainer>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        repellat eaque consequatur quisquam accusantium, commodi, modi
        distinctio quia, voluptatem voluptatibus minima quod veritatis in
        consequuntur rem fugit? Consequuntur, corrupti laudantium.
      </Description>
      <ButtonsContainer>
        <SocialButton
          color='#0F8EF2'
          shadowColor='#0a71c3'
          as='a'
          href='https://www.facebook.com/mateusz.brek'
        >
          Facebook
        </SocialButton>
        <SocialButton
          color='#24292E'
          shadowColor='#1c2024'
          as='a'
          href='https://github.com/Matezbreniu/'
        >
          Github
        </SocialButton>
        <SocialButton
          color='#0077B5'
          shadowColor='#005f90'
          as='a'
          href='https://www.linkedin.com/in/mateusz-brek/'
        >
          LinkedIn
        </SocialButton>
      </ButtonsContainer>
    </SocialsContainer>
  );
};

export default Social;
