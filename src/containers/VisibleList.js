import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';
import List from '../components/List';

const getVisibleList = (todos, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter(todo => todo.done);
		case 'SHOW_ACTIVE':
			return todos.filter(todo => !todo.done);
		default:
			console.error('Unknown filter: ', filter);
	}
};

const mapStateToProps = state => ({
	todos: getVisibleList(state.todos.present, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id)),
	deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List);
