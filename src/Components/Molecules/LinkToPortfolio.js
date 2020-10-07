import React from 'react';

import styled from 'styled-components';
import {Link} from 'react-router-dom';

const PortfolioLink = styled(Link)`
	position: absolute;
	top: 5%;
	left: 10%;
	width: 30px;
	height: 30px;
	z-index: 3;
	cursor: pointer;
	overflow: hidden;
`;

const ArrowContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const Arrow = styled.span`
	position: absolute;
	width: 100%;
	height: 2px;
	top: 50%;
	background-color: ${({theme}) => theme.colorFontDark};
	transform-origin: 0;
	transition: 0.3s;

	&:nth-of-type(1) {
		width: 60%;
		transform: translateY(-50%) rotate(-35deg);
	}
	&:nth-of-type(2) {
		transform: translateY(-50%);
	}
	&:nth-of-type(3) {
		width: 60%;
		transform: translateY(-50%) rotate(35deg);
	}
	${ArrowContainer}:hover & {
		background-color: ${({theme}) => theme.colorFont};
	}
`;

const LinkToPortfolio = () => {
	return (
		<PortfolioLink to='/portfolio'>
			<ArrowContainer>
				<Arrow />
				<Arrow />
				<Arrow />
			</ArrowContainer>
		</PortfolioLink>
	);
};

export default LinkToPortfolio;
