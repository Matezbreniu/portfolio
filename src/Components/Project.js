import React from 'react';

import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container = styled(Link)`
  position: relative;
  margin: 30px 0;
  width: 100%;
  background-image: url(${(props) => props.backgroundimage});
  background-position: center;
  background-size: cover;
  text-decoration: none;
  color: var(--color-font);
  box-shadow: 5px 5px 0px 0px var(--color-background);
  overflow: hidden;
`;

const Title = styled.h3`
  position: relative;
  top: 0;
  padding: 2px;
  width: 100%;
  text-align: center;
  color: var(--color-font-dark);
  background-color: var(--color-background-white);
  font-size: 0.9rem;
  z-index: 2;
`;

const Content = styled.div`
  position: relative;
  // height: 100%;
  padding-top: 50%;
  transition: 0.3s;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 0;
`;

const TechContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Tech = styled.span`
  padding: 3px 7px;
  border: 1px solid;
  border-color: var(--color-background);
  border-radius: 5px;
  height: fit-content;
  background-color: var(--color-background-light);
  box-shadow: 1px 1px 0px 0px var(--color-background);
  text-align: center;
  font-size: 0.7rem;
`;

const Project = (props) => {
  const {name, technology, link, background} = props.project;
  return (
    <Container to={link} backgroundimage={background}>
      <Title>{name}</Title>
      <Content>
        <TechContainer>
          {technology.map((tech, index) => (
            <Tech key={index}>{tech}</Tech>
          ))}
        </TechContainer>
      </Content>
    </Container>
  );
};
export default Project;
