import React from 'react';
import styled from 'styled-components';
import { Button } from 'rebass';

const StyledTodo = styled.div`
	display: flex;
	margin: 1%;
	padding: 4px;
	list-style: none;
	justify-content: space-between;
	width: 100%;
	background: #324f5b;
	cursor: pointer;
	color: white;
	font-weight: bold;
	border: 2px solid #040404;
	& > .done {
		text-decoration: line-through;
	}
`;

const TextContainer = styled.div`
	max-width: 80%;
	overflow: auto;
	max-height: 100%;
`;

const ButtonContainer = styled.div`
	align-self: center;
`;

const Todo = ({ todo, toggleTodo, deleteTodo }) => (
	<StyledTodo>
		<TextContainer>
			<Button
				bg='#040404'
				onClick={() => toggleTodo(todo.id)}
				className={todo.done ? 'done' : undefined}
			>
				{todo.text}
			</Button>
		</TextContainer>
		<ButtonContainer>
			<Button
				bg='#040404'
				title={todo.done ? 'Mark as active' : 'Mark as done'}
				onClick={() => toggleTodo(todo.id)}
			>
				{todo.done ? '\u2611' : '\u2610'}
			</Button>

			<Button
				bg='#040404'
				title='Delete this todo'
				onClick={() => deleteTodo(todo.id)}
			>
				{'\u2715'}
			</Button>
		</ButtonContainer>
	</StyledTodo>
);

export default Todo;
