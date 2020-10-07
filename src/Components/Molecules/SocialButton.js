import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
	position: relative;
	margin: 10px 20px 10px 0px;
	padding: 10px 20px;
	text-decoration: none;
	width: 160px;
	height: 40px;
	color: white;
	perspective: 300px;
`;

const Cube = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;

	transform-style: preserve-3d;
	transition: all 0.333s;
	transform: translateZ(-20px);

	${Wrapper}:hover & {
		transform: translateZ(-20px) rotateX(90deg);
	}
`;

const Face = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.color};
	display: flex;
	justify-content: center;
	align-items: center;

	transform: rotateX(
			${(props) =>
				(props.face === 'front' && '0deg') ||
				(props.face === 'bottom' && '-90deg')}
		)
		translateZ(20px);
`;

const SocialButton = ({href, color, frontFace, bottomFace}) => {
	return (
		<Wrapper href={href}>
			<Cube>
				<Face color={color} face='front'>
					{frontFace}
				</Face>
				<Face color={color} face='bottom'>
					{bottomFace}
				</Face>
			</Cube>
		</Wrapper>
	);
};

export default SocialButton;
