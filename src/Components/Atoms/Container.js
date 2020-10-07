import styled from 'styled-components';

const Container = styled.div`
	margin: auto;
	padding: 40px 0;
	width: 90%;
	max-width: ${({theme}) => theme.maxSpace};
`;

export default Container;
