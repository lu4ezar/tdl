import React from 'react';
import {
	render,
	getByTestId,
	// getByText,
	fireEvent
} from 'react-testing-library';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from '../components/App';

const mockStore = configureMockStore();
const store = mockStore({});

describe('app', () => {
	it('renders App title', () => {
		const { getByText } = render(<Provider store={store}><App /></Provider>);
		expect(getByText('To-do List App')).toBeInTheDocument();
	});

	it("renders list of to-do's", () => {
		const { getByText } = render(<App />);
		expect(getByText(/list/i)).toBeInTheDocument();
	});

	it("renders list of to-do's", () => {
		const { getByText } = render(<App />);
		expect(getByText(/add/i)).toBeInTheDocument();
	});

	it('saves list to localStorage before unload', () => {
		const { container, rerender, getByText, queryByText } = render(<App />);

		const input = getByTestId(container, 'input');
		const submitButton = getByText('submit');
		const newInputValue = 'new';

		expect(queryByText(newInputValue)).toBeNull();
		fireEvent.change(input, { target: { value: newInputValue } });
		fireEvent.click(submitButton);
		expect(getByText(newInputValue)).toBeInTheDocument();

		rerender(<App />);
		expect(window.localStorage.getItem('list')).toBe(newInputValue);
	});
});
