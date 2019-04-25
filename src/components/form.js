import React, { useState } from 'react';

const Form = props => {
	const [input, setInput] = useState('');
	const [list, addItem] = useState([]);
	const handleChange = () => {
		setInput(input);
	}
	const handleClick = () => {
		// list.unshift(input);
		addItem([...list, input]);
		setInput('');
	}
  return (
    <div>
      <h3>add new to-do</h3>
      <form>
        <label htmlFor='input'>Enter Text</label>
        <input id='input' onChange={handleChange} />
				<button onClick={handleClick}>submit</button>
      </form>
    </div>
  );
};

export default Form;
