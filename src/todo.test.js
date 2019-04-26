import React from 'react';
import { render } from 'react-testing-library';
import Todo from './components/todo';

describe('Todo', () => {
    it('renders todo\'s text', () => {
        const todo = {
            text: 'first todo',
            id: 1
        }
        const {getByText} = render(<Todo todo={todo} />);
        expect(getByText('first todo')).toBeDefined();
    })
})