import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
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
    /* it("Submitting a name via the input field changes the name state value", () => {

    const { container, rerender } = render(<App />);
    const nameValue = getByTestId(container, "namevalue");
    const inputName = getByTestId(container, "inputName");

    const submitButton = getByTestId(container, "submitRefButton");
    const newName = "Ben";

    fireEvent.change(inputName, { target: { value: newName } });
    fireEvent.click(submitButton);
    expect(nameValue.textContent).toEqual(newName);

    rerender(<App />);
    expect(window.localStorage.getItem("name")).toBe(newName);*/
  })
});
