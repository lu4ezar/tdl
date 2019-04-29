// @flow
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
import Form from '../components/Form';
import type {
	Id,
	Todos,
	TodosState,
} from '../types/todos';

const getUniqueId = (todos: Todos): Id => {
	const idArray = todos.map(({ id }) => id);
	for (let i = 0; i < idArray.length; i++) {
		if (!idArray.includes(i)) {
			return i;
		}
	}
	return idArray.length;
};

const mapStateToProps = (state: TodosState) => ({
	todos: state.todos.present,
	id: getUniqueId(state.todos.present)
});

export default connect(
	mapStateToProps,
	{ addTodo }
)(Form);
