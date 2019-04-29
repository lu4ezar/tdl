import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const Container = styled.div`
	height: 80vh;
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
