import React from 'react';

import styled from 'styled-components';

import {Wrapper, Container, Title, Button} from './PagesStyles';

const LinksContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Link = styled(Button)`
  text-decoration: none;
  background-color: ${(props) => props.color};
  box-shadow: 2px 2px 0px 2px ${(props) => props.shadowColor};
  color: white;
`;

const Image = styled.img`
  width: 100%;
`;

const SubTitle = styled(Title)`
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
      <Container>
        <Title>{title}</Title>
        <LinksContainer>
          <Link
            as='a'
            color='#f22424'
            shadowColor='#d10c0c'
            href='https://github.com/Matezbreniu/'
          >
            Code
          </Link>
          <Link
            as='a'
            color='#248df3'
            shadowColor='#0b71d3'
            href='https://github.com/Matezbreniu/'
          >
            Website
          </Link>
        </LinksContainer>
        <Image src={image} />
        <SubTitle>Description</SubTitle>
        <Description>{description}</Description>
        <SubTitle>Used technologies</SubTitle>
        <TechnologiesList>
          {technologies.map((technology) => (
            <Technology>{technology}</Technology>
          ))}
        </TechnologiesList>
      </Container>
    </Wrapper>
  );
};

export default PortfolioProject;
