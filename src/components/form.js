import React, { useState } from 'react';

const Form = (props) => {
	const [input, setInput] = useState('');
	// const [list, addItem] = useState([]);
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// addItem([...list, input]);
		props.onSubmit(e, input);
		setInput('');
	};
	return (
		<div>
			<h3>add new to-do</h3>
			<form data-testid='form' onSubmit={handleSubmit}>
				<label htmlFor='input'>Enter Text</label>
				<input id='input' value={input} onChange={handleChange} required />
				<button type="submit">submit</button>
			</form>
		</div>
	);
};

export default Form;
