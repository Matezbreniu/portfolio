import React from 'react';

import {
  Wrapper,
  Container,
  Title,
  Description,
} from '../Components/Main/PagesStyles';
import Form from '../Components/Form';
import Social from '../Components/Social';

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Feel free to contact</Title>
        <Description>
          I'm excited to host you on my website, if you want to send me a
          message, please fill this form below.
        </Description>
        <Form />
        <Social />
      </Container>
    </Wrapper>
  );
};

export default Contact;
