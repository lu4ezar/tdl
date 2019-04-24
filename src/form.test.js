import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import Form from './components/form';

xit('renders "hello" message', () => {
  const { getByText } = render(<Form />);
  expect(getByText('hello!')).toBeInTheDocument();
});

it('renders list of to-do\'s', () => {
  const { getByText } = render(<Form />);
  expect(getByText(/add/i)).toBeInTheDocument();
});
