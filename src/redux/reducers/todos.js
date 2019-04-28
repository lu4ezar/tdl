import undoable, { distinctState } from 'redux-undo';

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				{
					id: action.id,
					text: action.text,
					done: false
				},
				...state
			];
		case 'TOGGLE_TODO':
			return state.map(todo =>
				todo.id === action.id ? { ...todo, done: !todo.done } : todo
			);
		case 'DELETE_TODO':
			return state.filter(todo => todo.id !== action.id);
		default:
			return state;
	}
};

const undoableTodos = undoable(todos, {
	filter: distinctState
});

export default undoableTodos;
