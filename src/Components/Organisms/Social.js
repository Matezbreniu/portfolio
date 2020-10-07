import React from 'react';
import styled from 'styled-components';

import SocialButton from 'Components/Molecules/SocialButton';

const SocialsContainer = styled.div``;

const ButtonsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const socialList = [
	{
		href: 'https://www.facebook.com/mateusz.brek',
		color: '#0F8EF2',
		frontFace: 'Facebook',
		bottomFace: 'Mateusz Bręk',
	},
	{
		href: 'https://github.com/Matezbreniu/',
		color: '#24292E',
		frontFace: 'Github',
		bottomFace: 'Matezbreniu',
	},
	{
		href: 'https://www.linkedin.com/in/mateusz-brek/',
		color: '#0077B5',
		frontFace: 'LinkedIn',
		bottomFace: 'Mateusz Bręk',
	},
	{
		href: 'https://github.com/Matezbreniu/portfolio',
		color: '#15151c',
		frontFace: 'Portfolio',
		bottomFace: 'Code',
	},
];

const socialButtons = socialList.map((social, index) => (
	<SocialButton key={index} {...social} />
));

const Social = () => {
	return (
		<SocialsContainer>
			<p>
				You can also find me in social medias and follow my profiles on
				Facebook, Github, Linkedin or discover this Portfolio Code.
			</p>
			<ButtonsContainer>{socialButtons}</ButtonsContainer>
		</SocialsContainer>
	);
};

export default Social;
