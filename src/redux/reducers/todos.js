// @flow
import undoable, { distinctState } from 'redux-undo';
import type {
	Id,
	Text,
	Todo,
	Todos,
	TodosAction
} from '../../types/todos';

const createTodo = (id: Id, text: Text): Todo => ({
	id,
	text,
	done: false
});

const toggleTodo = (todos: Todos, id: Id): Todos =>
	todos.map(todo =>
		todo.id === id ? { ...todo, done: !todo.done } : todo
	);

const deleteTodo = (todos: Todos, id: Id): Todos =>
	todos.filter(todo => todo.id !== id);

const todos = (state: Todos = [], action: TodosAction): Todos => {
	switch (action.type) {
		case 'ADD_TODO':
			return [createTodo(action.id, action.text), ...state];
		case 'TOGGLE_TODO':
			return toggleTodo(state, action.id);
		case 'DELETE_TODO':
			return deleteTodo(state, action.id);
		default:
			return state;
	}
};

const undoableTodos = undoable(todos, {
	filter: distinctState
});

export default undoableTodos;
