import React from 'react';

import Container from 'Components/Atoms/Container';
import Heading from 'Components/Atoms/Heading';
import Wrapper from 'Components/Atoms/Wrapper';

const MainTemplate = ({children, title}) => {
	return (
		<Wrapper>
			<Container>
				<Heading>{title}</Heading>
				{children}
			</Container>
		</Wrapper>
	);
};

export default MainTemplate;
