import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import List from './components/list';

xit('renders "hello" message', () => {
  const { getByText } = render(<List />);
  expect(getByText('hello!')).toBeInTheDocument();
});

it('renders list of to-do\'s', () => {
  const { getByText } = render(<List />);
  expect(getByText('list')).toBeInTheDocument();
});
