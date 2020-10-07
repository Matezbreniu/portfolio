import styled from 'styled-components';

const Button = styled.button`
	margin: 5px 0px;
	padding: 10px 20px;
	color: white;
	border: none;
	border-radius: 4px;
	transition: 0.2s;
	background-color: ${({theme}) => theme.colorButton};
	box-shadow: 2px 2px 0px 2px ${({theme}) => theme.colorButtonDarker};

	&:hover {
		transform: translate(4px, 4px);
		box-shadow: none;
	}

	&:focus {
		outline: none;
	}
`;

export default Button;
