import React from 'react';

import styled from 'styled-components';

import {Wrapper, Container, Title, Button} from './Main/PagesStyles';
import LinkToPortfolio from './LinkToPortfolio';

const LinksContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const LinkBtn = styled(Button)`
  text-decoration: none;
  background-color: ${(props) => props.color};
  box-shadow: 2px 2px 0px 2px ${(props) => props.shadowColor};
  color: white;
`;

const Image = styled.img`
  width: 100%;
  box-shadow: 4px 4px 0px 0px var(--color-background-dark);
`;

const SubTitle = styled(Title)`
  text-align: left;
  font-size: 1.3rem;
`;

const Description = styled.p``;

const TechnologiesList = styled.ul`
  padding: 0 1.4rem;
`;

const Technology = styled.li``;

const PortfolioProject = ({site}) => {
  const {title, description, technologies, image} = site;
  return (
    <Wrapper>
      <LinkToPortfolio />
      <Container>
        <Title>{title}</Title>
        <LinksContainer>
          <LinkBtn
            as='a'
            color='#f22424'
            shadowColor='#d10c0c'
            href='https://github.com/Matezbreniu/'
          >
            Code
          </LinkBtn>
          <LinkBtn
            as='a'
            color='#248df3'
            shadowColor='#0b71d3'
            href='https://github.com/Matezbreniu/'
          >
            Website
          </LinkBtn>
        </LinksContainer>
        <Image src={image} />
        <SubTitle>Description</SubTitle>
        <Description>{description}</Description>
        <SubTitle>Used technologies</SubTitle>
        <TechnologiesList>
          {technologies.map((technology, index) => (
            <Technology key={index}>{technology}</Technology>
          ))}
        </TechnologiesList>
      </Container>
    </Wrapper>
  );
};

export default PortfolioProject;
