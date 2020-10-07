import React from 'react';
import styled from 'styled-components';

import MatrixCanvas from 'Components/Molecules/MatrixCanvas';
import Wrapper from 'Components/Atoms/Wrapper';
import Heading from 'Components/Atoms/Heading';

const StyledWrapper = styled(Wrapper)`
	background-color: black;
`;

const Center = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90%;
	max-width: ${({theme}) => theme.maxSpace};
`;

const StyledHeading = styled(Heading)`
	font-size: 2.6rem;
`;
const Description = styled.p`
	text-align: center;
	font-size: 1.6rem;
`;

const Home = () => {
	return (
		<StyledWrapper>
			<Center>
				<StyledHeading>Mateusz Bręk</StyledHeading>
				<Description>Front-end Developer</Description>
			</Center>
			<MatrixCanvas />
		</StyledWrapper>
	);
};

export default Home;
