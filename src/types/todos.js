// @flow
export type Id = number;

export type Text = string;

export type Done = boolean;

export type Todo = {
	+id: Id,
	+text: Text,
	+done: boolean
};

export type Todos = Array<Todo>;

export type TodosState = {
	+todos: {
		past: Todos,
		present: Todos,
		future: Todos
	}
};

export type TodoAction = 'ADD_TODO' | 'TOGGLE_TODO' | 'DELETE_TODO';

export type TodosAction =
	| { type: 'ADD_TODO', +id: Id, +text: Text }
	| { type: 'TOGGLE_TODO', +id: Id }
	| { type: 'DELETE_TODO', +id: Id };
