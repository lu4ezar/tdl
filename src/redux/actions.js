// @flow
import type { Id, Text, Done, TodosAction } from '../types/todos';
import type { VisibilityFilter, FilterAction } from '../types/visibilityFilter';

export const addTodo = (text: Text, id: Id, done: Done): TodosAction => {
	return {
		type: 'ADD_TODO',
		text,
		id,
		done
	};
};

export const toggleTodo = (id: Id): TodosAction  => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};

export const deleteTodo = (id: Id): TodosAction => {
	return {
		type: 'DELETE_TODO',
		id
	};
};

export const setVisibilityFilter = (filter: VisibilityFilter): FilterAction => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
});
