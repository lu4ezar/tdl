import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import App from './components/app';

it('renders "hello" message', () => {
  const { getByText } = render(<App />);
  expect(getByText('hello!')).toBeInTheDocument();
});

it('renders list of to-do\'s', () => {
  const { getByText } = render(<App />);
  expect(getByText('list')).toBeInTheDocument();
});

it('renders list of to-do\'s', () => {
  const { getByText } = render(<App />);
  expect(getByText(/add/i)).toBeInTheDocument();
});
