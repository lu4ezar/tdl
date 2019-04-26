import React, { useState } from 'react';

const Form = () => {
	const [input, setInput] = useState('');
	const [list, addItem] = useState([]);
	const handleChange = (e) => {
		setInput(e.target.value);
	};
	const handleClick = (e) => {
		e.preventDefault();
		addItem([...list, input]);
		setInput('');
	};
	return (
		<div>
			<h3>add new to-do</h3>
			<form onSubmit={handleClick}>
				<label htmlFor='input'>Enter Text</label>
				<input id='input' value={input} onChange={handleChange} />
				<button onClick={handleClick}>submit</button>
			</form>
		</div>
	);
};

export default Form;
