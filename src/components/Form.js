import React, { useState } from 'react';

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
		<div>
			<h3>add new to-do</h3>
			<form data-testid='form' onSubmit={handleSubmit}>
				<label htmlFor='input'>Enter Text</label>
				<input
					data-testid='input'
					id='input'
					value={input}
					onChange={handleChange}
				/>
				<button type='submit'>submit</button>
			</form>
		</div>
	);
};

export default Form;
