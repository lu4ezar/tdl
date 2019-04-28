import React from 'react';
import styled from 'styled-components';

const StyledTodo = styled.li`
	cursor: pointer;
	& > .done {
		text-decoration: line-through;
	}
`;

const Todo = ({ todo, toggleTodo, deleteTodo }) => (
	<StyledTodo>
		<span className={todo.done ? 'done' : undefined}>{todo.text}</span>
		<span
			title={todo.done ? 'Mark as active' : 'Mark as done'}
			onClick={() => toggleTodo(todo.id)}
		>
			{todo.done ? '\u2611' : '\u2610'}
		</span>
		<span title='Delete this todo' onClick={() => deleteTodo(todo.id)}>
			{'\u2715'}
		</span>
	</StyledTodo>
);

export default Todo;
