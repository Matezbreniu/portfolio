import React from 'react';

import styled from 'styled-components';
import {Wrapper} from '../theme/PagesStyles';

import MatrixCanvas from '../Components/MatrixCanvas';

const StyledWrapper = styled(Wrapper)`
	background: black;
`;

const Center = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90%;
	max-width: var(--max-space);
`;

const Title = styled.h1`
	text-align: center;
	font-size: 2.6rem;
	color: var(--color-font-light);
`;
const Description = styled.p`
	text-align: center;
	font-size: 1.6rem;
`;

const Home = () => {
	return (
		<StyledWrapper>
			<Center>
				<Title>Mateusz Bręk</Title>
				<Description>Front-end Developer</Description>
			</Center>
			<MatrixCanvas />
		</StyledWrapper>
	);
};

export default Home;
