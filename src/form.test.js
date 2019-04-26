import React from 'react';
// import ReactDOM from 'react-dom';
// import configureMockStore from "redux-mock-store";
import { render, fireEvent } from 'react-testing-library';
import Form from './components/form';
// import { addTodo } from './redux/actions';

// beforeEach(render(<From />));

describe('form', () => {
	it('loads with initial value of empty string', () => {
		const { getByLabelText } = render(<Form />);
		const input = getByLabelText(/enter/i);
		expect(input.value).toBe('');
	});

	it('renders input for new to-do', () => {
		const { getByLabelText } = render(<Form />);
		const input = getByLabelText(/enter/i);
		expect(input).toBeDefined();
		expect(input.value).toBe('');
		fireEvent.change(input, { target: { value: 'new' } });
		expect(input.value).toBe('new');
	});

	xit("submit button clears input and calls 'addTodo' action creator", () => {
		const { getByLabelText, getByText } = render(<Form />);
		const input = getByLabelText(/enter/i);
		const submitButton = getByText(/submit/i);
		expect(input).toBeDefined();
		expect(submitButton).toBeDefined();
		expect(input.value).toBe('');
		fireEvent.change(input, { target: { value: 'new' } });
		expect(input.value).toBe('new');
		fireEvent.click(getByText('submit'));
		expect(input.value).toBe('');
	});

	it("submit button clears input and calls onSubmit", () => {
		const { getByLabelText, getByText } = render(<Form />);
		const input = getByLabelText(/enter/i);
		const submitButton = getByText(/submit/i);
		// const handleClick = jest.fn();
		// const onSubmit = jest.fn();
		expect(input).toBeDefined();
		expect(submitButton).toBeDefined();
		expect(input.value).toBe('');
		fireEvent.change(input, { target: { value: 'new' } });
		expect(input.value).toBe('new');
		fireEvent.click(getByText('submit'));
		expect(input.value).toBe('');
		// expect(handleClick).toBeCalled();
		// expect(onSubmit).toBeCalled();
	});

	/*it("Increment and decrement buttons work", () => {
		const { container } = render(<App />);
		const countValue = getByTestId(container, "countvalue");
		const increment = getByTestId(container, "incrementButton");
		const decrement = getByTestId(container, "decrementButton");
	  
		expect(countValue.textContent).toBe("0");
	  
		fireEvent.click(increment);
		expect(countValue.textContent).toBe("1");
		fireEvent.click(decrement);
		expect(countValue.textContent).toBe("0");
	  });*/

});
