export const addTodo = (text, id) => {
	return {
		type: 'ADD_TODO',
		text,
		id
	};
};

export const toggleTodo = id => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};

export const deleteTodo = id => {
	return {
		type: 'DELETE_TODO',
		id
	};
};

export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
});
