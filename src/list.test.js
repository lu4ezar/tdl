import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import List from './components/list';

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
  xit('renders "hello" message', () => {
    const { getByText } = render(<List />);
    expect(getByText('hello!')).toBeInTheDocument();
  });

  it("renders list of to-do's", () => {
    const { getByText, getByTestId } = render(<List list={list} />);
    expect(getByText('list')).toBeInTheDocument();
    expect(getByTestId('ul')).toBeDefined();
    expect(getByTestId('ul').children.length).toBe(2);
  });
});
