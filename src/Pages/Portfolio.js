import React from 'react';

import styled from 'styled-components';

import {Wrapper, Container, Title, Description} from '../theme/PagesStyles';
import Project from '../Components/Project';

import BamarBackground from '../Images/bamarBackground.jpg';
import WeatherAppBackground from '../Images/weatherAppBackground.jpg';
import SportRegeneracjaBackground from '../Images/sportregeneracjaBackground.jpg';
import SwiezaskibkaBackground from '../Images/swiezaskibkaBackground.jpg';

const projectsList = [
	{
		name: 'Bamar',
		technology: ['REACTJS', 'CSS3', 'HTML5', 'JAVASCRIPT', 'GSAP'],
		link: '/portfolio/bamar',
		background: BamarBackground,
	},
	{
		name: 'Weather App',
		technology: ['REACTJS', 'CSS3', 'HTML5', 'JAVASCRIPT', 'API'],
		link: '/portfolio/weatherapp',
		background: WeatherAppBackground,
	},
	{
		name: 'Sportregeneracja',
		technology: ['CSS3', 'HTML5', 'JAVASCRIPT'],
		link: '/portfolio/sportregeneracja',
		background: SportRegeneracjaBackground,
	},

	{
		name: 'Swieża skibka',
		technology: ['REACTJS', 'CSS', 'HTML5', 'JAVASCRIPT'],
		link: '/portfolio/swiezaskibka',
		background: SwiezaskibkaBackground,
	},
];

const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Portfolio = () => {
	return (
		<Wrapper>
			<Container>
				<Title>Portfolio</Title>
				<Description>
					Here you can find some of my latest projects. Enjoy!
				</Description>
				<Content>
					{projectsList.map((project, index) => (
						<Project key={index} {...project} />
					))}
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Portfolio;
