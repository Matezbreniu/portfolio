import React from 'react';

import styled from 'styled-components';
import {Wrapper, Container, Title} from '../Components/Main/PagesStyles';

import MyPhoto from '../Images/myPhotoBg.png';

const Character = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    position: absolute;
    text-align: right;
  }
`;

const Image = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    height: 100%;
    width: auto;
  }
`;

const CharacterContainer = styled.div`
  width: 100%;
  z-index: 1;
`;

const Name = styled(Title)`
  width: 100%;
  text-align: left;
  font-size: 1.4rem;
`;

const SkillContainer = styled.div`
  width: 100%;
`;

const Skill = styled.p`
  margin: 5px 0;
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
            <Skill>Level {age()} Front-end developer</Skill>
            <SkillContainer>
              <Name>Programming Skills</Name>
              {programmingSkills.map((skill) => (
                <Skill key={skill}>{skill}</Skill>
              ))}
            </SkillContainer>
            <SkillContainer>
              <Name>Soft Skills</Name>
              {softSkills.map((skill) => (
                <Skill key={skill}>{skill}</Skill>
              ))}
            </SkillContainer>
          </CharacterContainer>
        </Character>
      </Container>
    </Wrapper>
  );
};

export default About;
