import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const Container = styled(Paper)`
	max-height: 80%;
	overflow: auto;
	width: 50%;
`;

const List = ({ todos, toggleTodo, deleteTodo }) => {
	const getList = todos =>
		todos.map(todo => (
			<Todo
				key={todo.id}
				todo={todo}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
			/>
		));

	return (
		<Container>
			<div data-testid='ul'>{getList(todos)}</div>
		</Container>
	);
};

export default List;
