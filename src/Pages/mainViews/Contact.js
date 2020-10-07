import React from 'react';

import Description from 'Components/Atoms/Description';
import MainTemplate from 'Templates/MainTemplate';
import Form from 'Components/Organisms/Form';
import Social from 'Components/Organisms/Social';

const Contact = () => {
	return (
		<MainTemplate title='Feel free to contact'>
			<Description>
				I'm excited to host you on my website, if you want to send me a message,
				please fill this form below.
			</Description>
			<Form />
			<Social />
		</MainTemplate>
	);
};

export default Contact;
