import React, {useContext} from 'react';
import styled from 'styled-components';

import {SiteContext} from 'store/store';

const BurgerBtn = styled.div`
	position: fixed;
	top: 5%;
	right: 10%;
	width: 30px;
	height: 30px;
	z-index: 3;
	cursor: pointer;
	opacity: ${(props) => (props.isTransitionActive ? 0 : 1)};
	pointer-events: ${(props) => (props.isTransitionActive ? 'none' : null)};
	transition: 0.3s;

	&:hover {
		span {
			width: 100%;
			background-color: ${({theme}) => theme.colorFont};
		}
	}
`;

const BurgerSpan = styled.span`
	position: absolute;
	top: 50%;
	right: 0;
	height: 2px;
	background-color: ${({theme}) => theme.colorFontDark};
	pointer-events: none;
	transition: 0.2s;

	&:nth-of-type(1) {
		width: 100%;
		transform: ${(props) =>
			props.isMenuActive
				? 'translateY(-50%) rotate(-135deg)'
				: 'translateY(calc(-50% - 10px))'};
	}
	&:nth-of-type(2) {
		width: ${(props) => (props.isMenuActive ? '100%' : '75%')};
		transform: ${(props) =>
			props.isMenuActive
				? 'translateY(-50%) translateX(200%)'
				: 'translateY(-50%)'};
		opacity: ${(props) => (props.isMenuActive ? 0 : 1)};
	}
	&:nth-of-type(3) {
		width: ${(props) => (props.isMenuActive ? '100%' : '50%')};
		transform: ${(props) =>
			props.isMenuActive
				? 'translateY(-50%) rotate(135deg)'
				: 'translateY(calc(-50% + 10px))'};
	}
`;

const Burger = () => {
	const {
		isMenuActive: [isMenuActive, setIsMenuActive],
		isTransitionActive: [isTransitionActive],
	} = useContext(SiteContext);

	const handleMenuActivator = () => setIsMenuActive((prev) => !prev);

	return (
		<BurgerBtn
			isTransitionActive={isTransitionActive}
			isMenuActive={isMenuActive}
			onClick={handleMenuActivator}
		>
			<BurgerSpan isMenuActive={isMenuActive}></BurgerSpan>
			<BurgerSpan isMenuActive={isMenuActive}></BurgerSpan>
			<BurgerSpan isMenuActive={isMenuActive}></BurgerSpan>
		</BurgerBtn>
	);
};

export default Burger;
