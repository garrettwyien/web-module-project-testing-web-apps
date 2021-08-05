import React from 'react';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import ContactForm from './ContactForm';

test('renders without errors', ()=>{
    render(<ContactForm/>);
});

test('renders the contact form header', ()=> {
    render(<ContactForm/>);
    const header = screen.getByText('Contact Form');
    expect(header).toBeInTheDocument();
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
    render(<ContactForm/>);
    const placeHolder = 'Edd';
    const firstNameInput = screen.getByPlaceholderText(placeHolder);
    const inputText = 'abcd';
    userEvent.type(firstNameInput, inputText);
    const errorTextFirst = 'must have at least 5 characters.'; 
    const errorTextLast = 'is a required field.';
    const errorTextEmail = 'must be a valid email address.';
    expect(errorTextFirst).toBeInTheDocument;
    expect(errorTextLast).not.toBeInTheDocument;
    expect(errorTextEmail).not.toBeInTheDocument;
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    render(<ContactForm/>);
    const placeHolder = 'Edd';
    const firstNameInput = screen.getByPlaceholderText(placeHolder);
    userEvent.type(firstNameInput, '{enter}');
    const errorTextFirst = 'must have at least 5 characters.'; 
    const errorTextLast = 'is a required field.';
    const errorTextEmail = 'must be a valid email address.';
    expect(errorTextFirst).toBeInTheDocument;
    expect(errorTextLast).toBeInTheDocument;
    expect(errorTextEmail).toBeInTheDocument;
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    render(<ContactForm/>);
    const placeHolderFirst = 'Edd';
    const firstNameInput = screen.getByPlaceholderText(placeHolderFirst);
    const inputTextFirst = 'abcde';
    userEvent.type(firstNameInput, inputTextFirst);
    const placeHolderLast = 'Burke'
    const lastNameInput = screen.getByPlaceholderText(placeHolderLast);
    const inputTextLast = 'a';
    userEvent.type(lastNameInput, inputTextLast);
    userEvent.type(lastNameInput, '{enter}');
    const errorTextFirst = 'must have at least 5 characters.'; 
    const errorTextLast = 'is a required field.';
    const errorTextEmail = 'must be a valid email address.';
    expect(errorTextFirst).not.toBeInTheDocument;
    expect(errorTextLast).not.toBeInTheDocument;
    expect(errorTextEmail).toBeInTheDocument;
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
});

test('renders all fields text when all fields are submitted.', async () => {
    
});