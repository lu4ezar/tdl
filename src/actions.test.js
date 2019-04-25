import * as actions from './redux/actions';
import * as types from './redux/actionTypes';

describe('actions', () => {
	it('should create an action to add a todo', () => {
		const text = 'Finish docs';
		const expectedAction = {
			type: types.ADD_TODO,
			text
		};
		expect(actions.addTodo(text)).toEqual(expectedAction);
  });

  it('should create an action to edit a todo', () => {
		const id = 0;
		const expectedAction = {
			type: types.EDIT_TODO,
			id
		};
		expect(actions.editTodo(id)).toEqual(expectedAction);
  });

  it('should create an action to toggle a todo', () => {
		const id = 0;
		const expectedAction = {
			type: types.TOGGLE_TODO,
			id
		};
		expect(actions.toggleTodo(id)).toEqual(expectedAction);
  });

  it('should create an action to delete a todo', () => {
		const id = 0;
		const expectedAction = {
			type: types.DELETE_TODO,
			id
		};
		expect(actions.deleteTodo(id)).toEqual(expectedAction);
	});
});
