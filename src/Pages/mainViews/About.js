import React from 'react';

import styled from 'styled-components';
import MainTemplate from 'Templates/MainTemplate';

import MyPhoto from 'Images/myPhotoBg.png';

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

const Name = styled.h1`
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

const softSkillsList = [
	'Teamwork',
	'Stress resistance',
	'Fast-learning',
	'Work ethic',
	'Courtesy',
	'Integrity',
	'Flexibility',
];

const programmingSkillsList = [
	'React.js',
	'JavaScript',
	'HTML',
	'CSS',
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

const programmingSkills = programmingSkillsList.map((skill) => (
	<Skill key={skill}>{skill}</Skill>
));

const softSkills = softSkillsList.map((skill) => (
	<Skill key={skill}>{skill}</Skill>
));

const About = () => {
	return (
		<MainTemplate title='Character'>
			<Character>
				<ImageContainer>
					<Image src={MyPhoto} />
				</ImageContainer>
				<CharacterContainer>
					<Name>Mateusz Bręk</Name>
					<Skill>Level {age()} Front-end Developer</Skill>
					<SkillContainer>
						<Name>Programming Skills</Name>
						{programmingSkills}
					</SkillContainer>
					<SkillContainer>
						<Name>Soft Skills</Name>
						{softSkills}
					</SkillContainer>
				</CharacterContainer>
			</Character>
		</MainTemplate>
	);
};

export default About;
