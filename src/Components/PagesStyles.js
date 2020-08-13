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
  padding-top: 40px;
  width: 90%;
  max-width: var(--max-space);
`;

const Title = styled.h2`
  margin: 20px;
  text-align: center;
  font-size: 2rem;
  color: var(--color-font-light);
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  margin: 5px 0px;
  padding: 10px 20px;
  color: var(--color-font-light);
  background-color: var(--color-button);
  border: none;
  box-shadow: 2px 2px 0px 2px var(--color-button-darker);
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;

export {Wrapper, Container, Title, Button};
