import React from 'react';
// import configureMockStore from "redux-mock-store";
import { render, fireEvent } from 'react-testing-library';
import Form from '../components/Form';
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

	it('submit button clears input and calls onSubmit', () => {
		const { getByLabelText, getByText } = render(<Form />);
		const input = getByLabelText(/enter/i);
		const submitButton = getByText(/submit/i);
		// const handleClick = jest.fn();
		const onSubmit = jest.fn();
		expect(input).toBeDefined();
		expect(submitButton).toBeDefined();
		expect(input.value).toBe('');
		fireEvent.change(input, { target: { value: 'new' } });
		expect(input.value).toBe('new');
		fireEvent.click(getByText('submit'));
		expect(input.value).toBe('');
		// expect(handleClick).toBeCalled();
		expect(onSubmit).toBeCalled();
	});

	it('can be submitted with Enter button', () => {
		const submit = jest.fn();
		const { getByLabelText, getByText, getByTestId } = render(<Form />);
		const input = getByLabelText(/enter/i);
		const button = getByText(/submit/i);
		const form = getByTestId('form');
		fireEvent.change(input, { target: { value: 'new' } });
		expect(input.value).toBe('new');
		fireEvent.keyDown(form, { key: 'Enter', code: 32, charCode: 32 });
		fireEvent.submit(button);
		// input.simulate('keypress', { key: 'Enter' });
		// expect(input.value).toBe('');
		// expect(submit.mock.calls.length).toBe(1);
		expect(submit).toBeCalled();
		// + check function call here
	});
});
