import React, {Component} from 'react';

import emailjs from 'emailjs-com';
import styled from 'styled-components';

import {Button} from '../Components/PagesStyles';

const inputStyle = `
padding: 10px;
width: 100%;
background-color: transparent;
border: none;
border-bottom: 2px solid;
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
`;

const TextArea = styled.textarea`
  width: 100%;
  ${inputStyle};
  resize: none;
`;

const ValidateButton = styled(Button)`
  justify-self: right;
  opacity: ${(props) => (props.validate ? 1 : 0.2)};
  cursor: ${(props) => (props.validate ? 'pointer' : 'not-allowed')};
  transition: 0.3s;
`;

const CorrectlySent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
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

  validationList = {
    name: null,
    email: null,
    message: null,
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.validation) {
      const params = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
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
    let validate = false;
    if (name === 'name') {
      validate = value.length > 3;
    }
    if (name === 'email') {
      if (value.indexOf('@') > 0 && value.indexOf('.') > 0) {
        validate = true;
      }
    }
    if (name === 'message') {
      validate = value.length > 3;
    }
    this.validationList[name] = validate;
    if (
      this.validationList.name &&
      this.validationList.email &&
      this.validationList.message
    ) {
      this.setState({
        validation: true,
      });
    }
  };

  render() {
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
            validate={this.validationList.name}
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
            validate={this.validationList.email}
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
            validate={this.validationList.message}
            cols='30'
            rows='10'
            placeholder='Your message'
          ></TextArea>
        </Label>
        <ValidateButton
          disabled={!this.state.validation}
          validate={this.state.validation}
        >
          Send
        </ValidateButton>
        {this.state.sent ? (
          <CorrectlySent>
            <Message>Thanks for Your message.</Message>
          </CorrectlySent>
        ) : null}
      </SendMessage>
    );
  }
}

export default Form;
