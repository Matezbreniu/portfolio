import React from 'react';

import styled from 'styled-components';
import {Wrapper, Container, Title} from '../Components/Main/PagesStyles';

import MyPhoto from '../Images/myPhotoBg.png';

const Character = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  @media (min-width: 768px) {
    position: absolute;
    right: 0;
  }
`;

const CharacterContainer = styled.div`
  width: 100%;
`;

const Name = styled(Title)`
  width: 100%;
  text-align: left;
  font-size: 1.4rem;
`;

const SkillContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const softSkills = [
  'Teamwork',
  'Stress resistance',
  'Fast-learning',
  'Work ethic',
  'Courtesy',
  'Integrity',
  'Flexibility',
];

const programmingSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Styled-components',
  'Gsap',
  'SASS/SCSS',
  'Emailjs',
];

const age = () => {
  const myBirth = new Date(1994, 4, 2);
  const today = new Date();
  let years = today.getFullYear() - myBirth.getFullYear();
  if (
    today.getMonth() < myBirth.getMonth() ||
    (today.getMonth() === myBirth.getMonth() &&
      today.getDate() < myBirth.getDate())
  ) {
    years--;
  }
  return years;
};

const About = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Character</Title>
        <Character>
          <ImageContainer>
            <Image src={MyPhoto} />
          </ImageContainer>
          <CharacterContainer>
            <Name>Mateusz Bręk</Name>
            <p>Level {age()} Front-end developer</p>
            <SkillContainer>
              <Name>Programming Skills</Name>
              {programmingSkills.map((skill) => (
                <p key={skill}>{skill}</p>
              ))}
            </SkillContainer>
            <SkillContainer>
              <Name>Soft Skills</Name>
              {softSkills.map((skill) => (
                <p key={skill}>{skill}</p>
              ))}
            </SkillContainer>
          </CharacterContainer>
        </Character>
      </Container>
    </Wrapper>
  );
};

export default About;
