import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from "redux-mock-store";
import { render, fireEvent } from 'react-testing-library';
import Form from './components/form';
import { addTodo } from './redux/actions';

// beforeEach(render(<From />));

describe('form', () => {
  it("renders input for new to-do", () => {
    const { getByLabelText } = render(<Form />);
    const input = getByLabelText(/enter/i);
    expect(input).toBeDefined();
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'new' } });
    expect(input.value).toBe('new');
  });
  it("submit button clears input and calls \'addTodo\' action creator", () => {
    const { getByLabelText, getByText } = render(<Form />);
    const input = getByLabelText(/enter/i);
    const submitButton = getByText(/submit/i);
    expect(input).toBeDefined();
    expect(submitButton).toBeDefined();
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'new' } });
    expect(handleChange).toBeCalledTimes(1);
    expect(input.value).toBe('new');
    fireEvent.click(submitButton);
    expect(handleClick).toBeCalledTimes(1);
  })
});
