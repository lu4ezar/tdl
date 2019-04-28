import React from 'react';
import Todo from './Todo';

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
		<div>
			<h2>list</h2>
			<ul data-testid='ul'>{getList(todos)}</ul>
		</div>
	);
};

export default List;
