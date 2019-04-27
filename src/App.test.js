import React from 'react';
// import ReactDOM from 'react-dom';
import {
  render,
  getByTestId,
  //getByText,
  fireEvent
} from 'react-testing-library';
import App from './components/app';

describe('app', () => {
  it('renders "hello" message', () => {
    const { getByText } = render(<App />);
    expect(getByText('hello!')).toBeInTheDocument();
  });

  it("renders list of to-do's", () => {
    const { getByText } = render(<App />);
    expect(getByText('list')).toBeInTheDocument();
  });

  it("renders list of to-do's", () => {
    const { getByText } = render(<App />);
    expect(getByText(/add/i)).toBeInTheDocument();
  });
  it('saves list to localStorage before unload', () => {
    const { container, rerender } = render(<App />);
    const nameValue = getByTestId(container, 'id');
    const input = getByTestId(container, 'input');

    const submitButton = getByTestId(container, 'submitRefButton');
    const newName = 'Ben';

    fireEvent.change(input, { target: { value: newName } });
    fireEvent.click(submitButton);
    expect(nameValue.textContent).toEqual(newName);

    rerender(<App />);
    expect(window.localStorage.getItem('name')).toBe(newName);
  });
});
