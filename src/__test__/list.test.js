import React from 'react';
import { render } from 'react-testing-library';
import List from '../components/List';

describe('list', () => {
	const list = [
		{
			text: 'test1',
			id: 1
		},
		{
			text: 'test2',
			id: 2
		}
	];

	it("renders list of to-do's", () => {
		const { getByText, getByTestId } = render(<List list={list} />);
		expect(getByText('list')).toBeInTheDocument();
		expect(getByTestId('ul')).toBeDefined();
		expect(getByTestId('ul').children.length).toBe(2);
	});
});
