import React from 'react';
import styled from 'styled-components';

import MainTemplate from 'Templates/MainTemplate';
import Button from 'Components/Atoms/Button';
import Heading from 'Components/Atoms/Heading';
import LinkToPortfolio from 'Components/Molecules/LinkToPortfolio';

const LinksContainer = styled.div`
	margin: 10px 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const StyledButton = styled(Button)`
	text-decoration: none;
	background-color: ${(props) => props.color};
	box-shadow: 2px 2px 0px 2px ${(props) => props.shadowColor};
	color: white;
`;

const Image = styled.img`
	width: 100%;
	box-shadow: 4px 4px 0px 0px ${({theme}) => theme.colorBackgroundDark};
`;

const StyledHeading = styled(Heading)`
	text-align: left;
	font-size: 1.3rem;
`;

const TechnologiesWrapper = styled.ul`
	padding: 0 1.4rem;
`;

const technologiesList = (technologies) => {
	technologies.map((technology, index) => <li key={index}>{technology}</li>);
};

const PortfolioProject = ({
	title,
	description,
	technologies,
	image,
	liveLink,
	codeLink,
}) => {
	return (
		<MainTemplate title={title}>
			<LinkToPortfolio />
			<LinksContainer>
				<StyledButton
					as='a'
					color='#f22424'
					shadowColor='#d10c0c'
					href={codeLink}
				>
					Code
				</StyledButton>
				<StyledButton
					as='a'
					color='#248df3'
					shadowColor='#0b71d3'
					href={liveLink}
				>
					Website
				</StyledButton>
			</LinksContainer>
			<Image src={image} />
			<StyledHeading as='h2'>Description</StyledHeading>
			<p>{description}</p>
			<StyledHeading as='h2'>Used technologies</StyledHeading>
			<TechnologiesWrapper>
				{technologiesList(technologies)}
			</TechnologiesWrapper>
		</MainTemplate>
	);
};

export default PortfolioProject;
