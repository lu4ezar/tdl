import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const StyledTodo = styled(Paper)`
	display: flex;
	margin: 2em;
	padding: 1em;
	list-style: none;
	justify-content: space-between;
	align-items: center;
	background: gray;
	color: white;
	font-weight: bold;
`;

const TextContainer = styled.div`
	display: flex;
	overflow: auto;
	height: 80%;
	& > .done {
		text-decoration: line-through;
	}
`;

const ButtonContainer = styled.div`
	border: 1px solid darkGrey;
	border-radius: 5px 5px;
`;

const StyledButton = styled(Button)`
	display: flex;
	flex: 1 1 auto;
	width: 80%;
	background: red;
`;

const Todo = ({ todo, toggleTodo, deleteTodo }) => (
	<StyledTodo>
		<TextContainer>
			<StyledButton
				onClick={() => toggleTodo(todo.id)}
				className={todo.done ? 'done' : undefined}
			>
				{todo.text}
			</StyledButton>
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
