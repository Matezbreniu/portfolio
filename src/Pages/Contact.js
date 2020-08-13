import React from 'react';

import styled from 'styled-components';

import {Wrapper, Container, Title} from '../Components/PagesStyles';
import Form from '../Components/Form';
import Social from '../Components/Social';

const Description = styled.div`
  margin: 10px 0;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Feel free to contact</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          harum vero dicta, nemo nam, sapiente aut sit molestias voluptas
          aspernatur et expedita nesciunt. Aliquam facilis sunt fugit non dicta
          excepturi.{' '}
        </Description>
        <Form />
        <Social />
      </Container>
    </Wrapper>
  );
};

export default Contact;
