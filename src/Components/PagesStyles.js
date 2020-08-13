import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: var(--color-background);
  color: var(--color-font);
  overflow: auto;
`;

const Container = styled.div`
  margin: 0px auto;
  padding: 40px 0;
  width: 90%;
  max-width: var(--max-space);
`;

const Title = styled.h2`
  margin: 10px 0;
  text-align: center;
  font-size: 2.3rem;
  color: var(--color-font-light);
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  margin: 5px 0px;
  padding: 10px 20px;
  color: white;
  background-color: var(--color-button);
  border: none;
  box-shadow: 2px 2px 0px 2px var(--color-button-darker);
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;

export {Wrapper, Container, Title, Button};
