import React, {Component} from 'react';

import emailjs from 'emailjs-com';
import styled from 'styled-components';

import {Button} from './Main/PagesStyles';

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

class Form extends Component {
	state = {
		name: '',
		email: '',
		message: '',
		validation: false,
		sent: false,
	};

	validationList = [
		{name: 'name', isValid: false, isValidated: false},
		{name: 'email', isValid: false, isValidated: false},
		{name: 'message', isValid: false, isValidated: false},
	];

	handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.handleValidate(e);
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (e) => {
		const {validation, sent, name, email, message} = this.state;

		e.preventDefault();
		if (validation && !sent) {
			const params = {
				name: name,
				email: email,
				message: message,
			};
			emailjs.send(
				'gmail',
				'template_me5ngmG9',
				params,
				'user_96YAId7zE22lFOv4GkM10'
			);
		}
		this.setState({
			sent: true,
		});
	};

	handleValidate = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		const object = this.findObjectInValidationList(name);
		let validate = false;
		let validation = false;
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
		const isAllValid = this.validationList.filter((object) => object.isValid);
		if (isAllValid.length === this.validationList.length) {
			validation = true;
		}
		this.setState({
			validation,
		});
	};

	findObjectInValidationList = (name) => {
		return this.validationList.find((object) => object.name === name);
	};

	render() {
		const {validation, sent} = this.state;
		return (
			<SendMessage onSubmit={this.handleSubmit}>
				<Label htmlFor='name'>
					<Input
						type='text'
						name='name'
						autocomplete='off'
						value={this.state.name}
						onChange={this.handleChange}
						onBlur={this.handleValidate}
						validationObject={this.findObjectInValidationList('name')}
						placeholder='Your name'
					/>
				</Label>
				<Label>
					<Input
						type='text'
						name='email'
						autocomplete='off'
						value={this.state.email}
						onChange={this.handleChange}
						onBlur={this.handleValidate}
						validationObject={this.findObjectInValidationList('email')}
						placeholder='Your email'
					/>
				</Label>
				<Label>
					<TextArea
						name='message'
						autocomplete='off'
						value={this.state.message}
						onChange={this.handleChange}
						onBlur={this.handleValidate}
						validationObject={this.findObjectInValidationList('message')}
						cols='30'
						rows='10'
						placeholder='Your message'
					></TextArea>
				</Label>
				<ValidateButton disabled={!validation} validate={validation}>
					Send
				</ValidateButton>
				{sent ? (
					<CorrectlySent>
						<Message>Thanks for Your message.</Message>
					</CorrectlySent>
				) : null}
			</SendMessage>
		);
	}
}

export default Form;
