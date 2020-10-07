import React, {useContext} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import {NavLink} from 'react-router-dom';

import {SiteContext} from 'store/store';

import Burger from 'Components/Molecules/Burger';

const Wrapper = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const Navigation = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 100%;
	width: 100%;
	padding: 7% 0;
	transform: translateY(${(props) => (props.isMenuActive ? '0' : '-100%')});
	background-color: ${({theme}) => theme.colorBackgroundDark};
	z-index: 2;
	transition: 0.3s;
`;

const NavigationLink = styled(NavLink)`
	margin: 0 auto;
	position: relative;
	display: block;
	height: 25%;
	width: 90%;
	max-width: 650px;
	text-decoration: none;
	font-size: 1.6rem;
	background-color: ${({theme}) => theme.colorBackground};
	color: ${({theme}) => theme.colorFontDark};

	&.selected {
		color: ${({theme}) => theme.colorFont};
		pointer-events: none;
	}
`;

const NavigationName = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const LetterSpan = styled.span`
	display: inline-block;
`;

const handleMouseEnter = (e) => {
	const letterList = [...e.target.childNodes[0].childNodes];
	const tl = gsap.timeline();
	tl.to(letterList, {
		y: -10,
		stagger: 0.1,
	});
	tl.to(
		letterList,
		{
			y: 0,
			stagger: 0.1,
		},
		0.2
	);
};

const Header = () => {
	const {
		isMenuActive: [isMenuActive, setIsMenuActive],
		pages,
	} = useContext(SiteContext);

	const handleMenuActivator = () => setIsMenuActive((prev) => !prev);

	const menuPages = pages.filter((page) => page.order < 10); // main pages have order less than 10, while portfolio pages greater than 10

	const menu = menuPages.map((page) => (
		<NavigationLink
			key={page.order}
			to={page.path}
			exact
			onMouseEnter={handleMouseEnter}
			onClick={handleMenuActivator}
			activeClassName='selected'
		>
			<NavigationName>
				{[...page.name].map((letter, index) => (
					<LetterSpan key={index}>{letter}</LetterSpan>
				))}
			</NavigationName>
		</NavigationLink>
	));

	return (
		<Wrapper>
			<Burger />
			<Navigation isMenuActive={isMenuActive}>{menu}</Navigation>
		</Wrapper>
	);
};

export default Header;
