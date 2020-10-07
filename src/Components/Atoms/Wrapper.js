import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	background-color: ${({theme}) => theme.colorBackground};
	color: ${({theme}) => theme.colorFont};
	overflow: auto;
`;

export default Wrapper;
