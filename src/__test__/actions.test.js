import * as actions from '../redux/actions';

describe('actions', () => {
	it('should create an action to add a todo', () => {
		const text = 'Finish docs';
		const expectedAction = {
			type: 'ADD_TODO',
			text
		};
		expect(actions.addTodo(text)).toEqual(expectedAction);
	});

	it('should create an action to toggle a todo', () => {
		const id = 0;
		const expectedAction = {
			type: 'TOGGLE_TODO',
			id
		};
		expect(actions.toggleTodo(id)).toEqual(expectedAction);
	});

	it('should create an action to delete a todo', () => {
		const id = 0;
		const expectedAction = {
			type: 'DELETE_TODO',
			id
		};
		expect(actions.deleteTodo(id)).toEqual(expectedAction);
	});
});
