import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const Form = ({ addTodo, id }) => {
	const [input, setInput] = useState('');
	const handleChange = e => {
		setInput(e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		const value = input.trim();
		if (!value) {
			return;
		}
		addTodo(value, id);
		setInput('');
	};
	return (
		<form data-testid='form' onSubmit={handleSubmit}>
			<label htmlFor='input' />
			<input
				data-testid='input'
				id='input'
				value={input}
				onChange={handleChange}
				placeholder='new todo'
			/>
			<Button variant='contained' type='submit'>Add</Button>
		</form>
	);
};

export default Form;
