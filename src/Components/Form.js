import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

import {Button} from '../theme/PagesStyles';

const handleValidateStyle = (props) => {
	const {isValid, isValidated} = props.validationObject;
	let color = 'transparent';
	if (!isValid && isValidated) {
		color = '#f78888';
	}
	return color;
};

const inputStyle = `
padding: 10px;
width: 100%;
font-size: 0.9rem;
border: none;
border-bottom: 2px solid;
border-radius: 5px 5px 0px 0px;
color: var(--color-font-light);


&:focus{
  outline:none;
}`;

const SendMessage = styled.form`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
`;

const Label = styled.label`
	width: 100%;
`;

const Input = styled.input`
	margin: 10px 0;
	${inputStyle};
	background-color: ${(props) => handleValidateStyle(props)};
`;

const TextArea = styled.textarea`
	width: 100%;
	${inputStyle};
	resize: none;
	background-color: ${(props) => handleValidateStyle(props)};
`;

const ValidateButton = styled(Button)`
	margin-right: 5px;
	justify-self: right;
	opacity: ${(props) => (props.disabled ? 0.2 : 1)};
	pointer-events: ${(props) => (props.disabled ? 'none' : null)};
	cursor: pointer;
	transition: 0.3s;
`;

const CorrectlySent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.7);
	border-radius: 5px;
`;

const Message = styled.h3`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
`;

const validationList = [
	{name: 'name', isValid: false, isValidated: false},
	{name: 'email', isValid: false, isValidated: false},
	{name: 'message', isValid: false, isValidated: false},
];

const findObjectInValidationList = (name) => {
	return validationList.find((object) => object.name === name);
};

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isValid, setIsValid] = useState(false);
	const [sent, setSent] = useState(false);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		handleValidate(e);
		switch (name) {
			case 'name':
				setName(value);
				break;
			case 'email':
				setEmail(value);
				break;
			case 'message':
				setMessage(value);
				break;

			default:
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isValid && !sent) {
			const params = {
				name: name,
				email: email,
				message: message,
			};
			emailjs.send(
				process.env.REACT_APP_EMAIL_SERVICE,
				process.env.REACT_APP_EMAIL_TEMPLATE,
				params,
				process.env.REACT_APP_EMAIL_USER
			);
			setSent(true);
		}
	};

	const handleValidate = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		const object = findObjectInValidationList(name);
		let validate = false;
		if (name === 'name') {
			validate = value.length > 2;
		}
		if (name === 'email') {
			if (value.indexOf('@') > 0 && value.indexOf('.') > 0) {
				validate = true;
			}
		}
		if (name === 'message') {
			validate = value.length > 2;
		}
		object.isValid = validate;
		if (e.type === 'blur') {
			object.isValidated = true; //prevent to color change while handleChange
		}
		const isAllValid = validationList.filter((object) => object.isValid);
		if (isAllValid.length === validationList.length) {
			setIsValid(true);
		}
	};

	return (
		<SendMessage autoComplete='ignore' onSubmit={handleSubmit}>
			<Label htmlFor='name'>
				<Input
					type='text'
					name='name'
					autoComplete='ignore'
					value={name}
					onChange={handleChange}
					onBlur={handleValidate}
					validationObject={findObjectInValidationList('name')}
					placeholder='Your name'
				/>
			</Label>
			<Label>
				<Input
					type='text'
					name='email'
					autoComplete='ignore'
					value={email}
					onChange={handleChange}
					onBlur={handleValidate}
					validationObject={findObjectInValidationList('email')}
					placeholder='Your email'
				/>
			</Label>
			<Label>
				<TextArea
					name='message'
					autoComplete='ignore'
					value={message}
					onChange={handleChange}
					onBlur={handleValidate}
					validationObject={findObjectInValidationList('message')}
					cols='30'
					rows='10'
					placeholder='Your message'
				></TextArea>
			</Label>
			<ValidateButton disabled={!isValid} validate={isValid}>
				Send
			</ValidateButton>
			{sent ? (
				<CorrectlySent>
					<Message>Thanks for Your message.</Message>
				</CorrectlySent>
			) : null}
		</SendMessage>
	);
};

export default Form;
