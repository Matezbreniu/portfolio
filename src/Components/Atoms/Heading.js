import styled from 'styled-components';

const Title = styled.h1`
	margin: 10px 0;
	text-align: center;
	font-size: 2.3rem;
	color: ${({theme}) => theme.colorFontLight};
	text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

export default Title;
