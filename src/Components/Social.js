import React from 'react';

import styled from 'styled-components';

const SocialsContainer = styled.div``;

const Description = styled.p``;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SocialButton = styled.button`
  position: relative;
  margin: 10px 20px 10px 0px;
  padding: 10px 20px;
  text-decoration: none;
  width: 160px;
  height: 40px;
  color: white;
  perspective: 300px;
`;

const Cube = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;

  transform-style: preserve-3d;
  transition: all 0.333s;
  transform: translateZ(-20px);

  ${SocialButton}:hover & {
    transform: translateZ(-20px) rotateX(90deg);
  }
`;

const Face = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;

  transform: rotateX(
      ${(props) =>
        (props.face === 'front' && '0deg') ||
        (props.face === 'bottom' && '-90deg')}
    )
    translateZ(20px);
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
        <SocialButton as='a' href='https://www.facebook.com/mateusz.brek'>
          <Cube>
            <Face color='#0F8EF2' face='front'>
              Facebook
            </Face>
            <Face color='#0F8EF2' face='bottom'>
              Mateusz Bręk
            </Face>
          </Cube>
        </SocialButton>
        <SocialButton as='a' href='https://github.com/Matezbreniu/'>
          <Cube>
            <Face color='#24292E' face='front'>
              Github
            </Face>
            <Face color='#24292E' face='bottom'>
              Matezbreniu
            </Face>
          </Cube>
        </SocialButton>
        <SocialButton as='a' href='https://www.linkedin.com/in/mateusz-brek/'>
          <Cube>
            <Face color='#0077B5' face='front'>
              Linkedin
            </Face>
            <Face color='#0077B5' face='bottom'>
              Mateusz Bręk
            </Face>
          </Cube>
        </SocialButton>
      </ButtonsContainer>
    </SocialsContainer>
  );
};

export default Social;
